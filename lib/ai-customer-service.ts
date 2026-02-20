/**
 * ============================================
 * AI 智能客服系统核心逻辑
 * ============================================
 * 
 * 功能：
 * 1. System Prompt（身份定义）
 * 2. 白名单检查（不能回答的内容）
 * 3. 人工引导触发条件
 * 4. 知识库匹配（基于本站内容）
 */

export interface ChatContext {
  messages: Array<{ type: 'user' | 'bot'; content: string }> // 简化的消息格式，避免循环依赖
  consecutiveMisses: number // 连续未命中次数
  hasPriceIntent: boolean // 是否提到价格相关
  hasCoverageIntent: boolean // 是否提到覆盖相关
  hasBillIntent: boolean // 是否提到账单相关
}

// ============================================
// System Prompt（固定，不可被用户覆盖）
// ============================================
// 注意：此 System Prompt 必须严格遵守 /ai/policy.md 和 /ai/voice.md 中的规则
export const SYSTEM_PROMPT = `你是「美国鸿达电讯（Bay Media Star）」的中文智能客服。

你的服务对象是：
- 刚来美国或英文不熟的华人用户
- 咨询宽带、WiFi、手机卡、套餐、账单问题

【核心政策】（必须严格遵守，详见 /ai/policy.md）：
1. 允许回答：宽带/手机套餐类型、安装流程、办理条件（一般性说明）、账单原因（一般性说明）
2. 禁止回答：具体价格/促销、地址覆盖确认、最终资格承诺、商业资格确认、账单异常确认
3. 兜底规则：检索不到/冲突/低置信度 => 必须返回固定转人工话术："这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。"

【语音风格】（详见 /ai/voice.md）：
- 像微信客服：短句、自然、专业、不过度营销
- 每句话控制在 15-20 字以内
- 使用"您"、"可以"、"通常"等自然表达
- 禁止使用"保证"、"承诺"、"100%"、"最便宜"等词汇

回答规则（必须严格遵守）：
1. 只能根据本站已有页面内容回答
2. 不允许编造价格、促销、覆盖范围
3. 不确定的问题，必须明确说明"需要人工协助"
4. 语气像微信真人客服，简短、自然、专业
5. 不使用营销夸张语言
6. 不做最终承诺，不代替人工成交

最终目标：
- 先解决用户问题
- 建立信任
- 在合适时机引导「加微信人工咨询」`

// ============================================
// 知识来源范围（RAG 限定路径）
// ============================================
export const ALLOWED_KNOWLEDGE_PATHS = [
  '/internet/**',
  '/cellphone/**',
  '/blog/**',
  '/zh/**',
  '/faq/**',
]

// ============================================
// 不能回答的内容白名单（必须转人工）
// ============================================
const BLOCKED_KEYWORDS = {
  // 具体价格 / 当天促销
  price: ['最便宜', '多少钱', '价格多少', '最低价', '优惠价', '促销价', '当天优惠', '今天优惠', '现在优惠', '最便宜多少钱', '最低多少钱', '多少钱一个月'],
  
  // 覆盖地址是否 100% 可装
  coverage: ['一定能装', '100%', '保证能装', '确定能装', '肯定能装', '保证', '确定'],
  
  // 账单异常金额确认
  bill: ['账单金额', '为什么这么多', '费用不对', '乱收费', '多收了', '账单异常', '金额不对'],
  
  // 特殊身份（无 SSN / 信用问题）的最终可行性
  special: ['无SSN能办吗', '信用不好', '信用差', '没信用', '信用记录', '信用问题'],
}

// 统一拒答回复模板（RAG 严格模式：未检索到知识时使用）
export const BLOCKED_RESPONSE = '这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。'

// ============================================
// 人工引导触发关键词
// ============================================
const HUMAN_GUIDANCE_KEYWORDS = {
  price: ['价格', '便宜', '对比', '多少钱', '优惠', '折扣'],
  coverage: ['能不能办', '能装吗', '覆盖', '地址'],
  comparison: ['哪个好', '对比', '区别', '差异'],
}

// 人工引导话术（随机选择）
const HUMAN_GUIDANCE_MESSAGES = [
  '这个问题比较关键，建议你加微信，我可以直接帮你查。',
  '不同地址和套餐差别很大，微信聊会更清楚。',
  '具体情况需要看你的地址和需求，加微信我帮你详细分析一下。',
]

// ============================================
// 检查是否在白名单（必须转人工）
// ============================================
export function checkBlockedContent(question: string): boolean {
  const normalized = question.toLowerCase().trim()
  
  // 价格相关：需要包含"最便宜"+"多少钱"或类似组合
  const priceKeywords = BLOCKED_KEYWORDS.price
  const hasPriceIntent = priceKeywords.some(k => normalized.includes(k.toLowerCase()))
  if (hasPriceIntent && (normalized.includes('最') || normalized.includes('多少') || normalized.includes('价格'))) {
    return true
  }
  
  // 覆盖相关：需要包含"一定"+"能装"或"100%"或"保证"
  const coverageKeywords = BLOCKED_KEYWORDS.coverage
  if (coverageKeywords.some(k => normalized.includes(k.toLowerCase()))) {
    return true
  }
  
  // 账单异常：需要包含账单相关关键词
  const billKeywords = BLOCKED_KEYWORDS.bill
  if (billKeywords.some(k => normalized.includes(k.toLowerCase()))) {
    return true
  }
  
  // 特殊身份：需要包含特殊身份相关关键词
  const specialKeywords = BLOCKED_KEYWORDS.special
  if (specialKeywords.some(k => normalized.includes(k.toLowerCase()))) {
    return true
  }
  
  return false
}

// ============================================
// 检查是否需要人工引导
// ============================================
export function shouldGuideToHuman(
  question: string,
  context: ChatContext
): boolean {
  const normalized = question.toLowerCase()
  
  // 条件1：连续 2 轮未命中
  if (context.consecutiveMisses >= 2) {
    return true
  }
  
  // 条件2：用户提到价格/便宜/对比（需要更精确的匹配）
  const priceKeywords = HUMAN_GUIDANCE_KEYWORDS.price
  if (priceKeywords.some(k => normalized.includes(k.toLowerCase()))) {
    // 如果问题包含价格相关且不是简单询问，需要引导
    if (normalized.includes('对比') || normalized.includes('便宜') || normalized.includes('优惠')) {
      return true
    }
  }
  
  // 条件3：用户提到覆盖/地址相关（需要更精确）
  const coverageKeywords = HUMAN_GUIDANCE_KEYWORDS.coverage
  if (coverageKeywords.some(k => normalized.includes(k.toLowerCase()))) {
    // 如果问题包含"能不能办"+"地址"或"覆盖"，需要引导
    if ((normalized.includes('能不能办') || normalized.includes('能装吗')) && 
        (normalized.includes('地址') || normalized.includes('覆盖'))) {
      return true
    }
  }
  
  // 条件4：对比类问题
  const comparisonKeywords = HUMAN_GUIDANCE_KEYWORDS.comparison
  if (comparisonKeywords.some(k => normalized.includes(k.toLowerCase()))) {
    // 如果问题包含"对比"+"哪个好"或"区别"，需要引导
    if (normalized.includes('对比') || (normalized.includes('哪个好') || normalized.includes('区别'))) {
      return true
    }
  }
  
  // 条件5：用户情绪明显焦虑或犹豫（通过关键词判断）
  const anxietyKeywords = ['急', '着急', '怎么办', '不知道', '不确定', '担心', '害怕']
  for (const keyword of anxietyKeywords) {
    if (normalized.includes(keyword)) {
      return true
    }
  }
  
  return false
}

// ============================================
// 获取人工引导消息
// ============================================
export function getHumanGuidanceMessage(): string {
  const randomIndex = Math.floor(Math.random() * HUMAN_GUIDANCE_MESSAGES.length)
  return HUMAN_GUIDANCE_MESSAGES[randomIndex]
}

// ============================================
// 更新聊天上下文
// ============================================
export function updateChatContext(
  context: ChatContext,
  question: string,
  foundAnswer: boolean
): ChatContext {
  const normalized = question.toLowerCase()
  
  return {
    messages: context.messages || [], // 确保 messages 字段存在
    consecutiveMisses: foundAnswer ? 0 : context.consecutiveMisses + 1,
    hasPriceIntent: context.hasPriceIntent || HUMAN_GUIDANCE_KEYWORDS.price.some(k => normalized.includes(k)),
    hasCoverageIntent: context.hasCoverageIntent || HUMAN_GUIDANCE_KEYWORDS.coverage.some(k => normalized.includes(k)),
    hasBillIntent: context.hasBillIntent || normalized.includes('账单') || normalized.includes('涨价'),
  }
}

// ============================================
// 格式化 AI 回复（应用 System Prompt 规则）
// ============================================
export function formatAIResponse(
  rawAnswer: string,
  question: string,
  context: ChatContext
): string {
  // 如果应该引导人工，在答案后追加引导消息
  if (shouldGuideToHuman(question, context)) {
    return `${rawAnswer}\n\n${getHumanGuidanceMessage()}`
  }
  
  return rawAnswer
}

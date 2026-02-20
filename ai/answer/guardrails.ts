/**
 * 护栏检查：确保生成的答案符合政策要求
 * 
 * 规则：只有明确的价格数字、绝对承诺才拦截
 * 如果 decision=HIT 且答案包含"通常/可能"等谨慎表述，允许通过
 */

import { BLOCKED_RESPONSE } from '@/lib/ai-customer-service'

export type BlockReason = 
  | 'PRICE_RULE' 
  | 'BLOCKED'
  | 'PROMISE_RULE' 
  | 'COVERAGE_RULE' 
  | 'NO_HIT' 
  | 'LOW_SCORE' 
  | 'CONFLICT' 
  | 'PROVIDER_MISMATCH'
  | 'PROVIDER_MISMATCH_FINAL'
  | null

// 价格相关敏感词（必须拦截）
const PRICE_KEYWORDS = [
  /\$\d+/, // $50, $100 等
  /\d+\s*元/, // 50元
  /\d+\s*块/, // 50块
  /最便宜/,
  /最低价/,
  /优惠价/,
  /促销价/,
  /多少钱/,
  /价格多少/,
]

// 绝对承诺性语言（必须拦截）
const PROMISE_KEYWORDS = [
  /保证\s*能/,
  /承诺\s*能/,
  /100%\s*能/,
  /一定\s*能/,
  /肯定\s*能/,
  /绝对\s*能/,
  /确定\s*能装/,
  /一定\s*能装/,
  /保证\s*能装/,
  /必须\s*能/,
  /最终\s*确认/,
]

// 覆盖确认（必须拦截）
const COVERAGE_KEYWORDS = [
  /确定\s*能装/,
  /一定\s*能装/,
  /保证\s*能装/,
  /100%\s*能装/,
]

// 谨慎表述（允许通过）
const CAUTIOUS_PHRASES = [
  /通常/,
  /可能/,
  /一般/,
  /通常需要/,
  /可能需要/,
  /通常可以/,
  /可能可以/,
]

// 检查答案是否包含敏感词
export function checkGuardrails(
  answer: string,
  question?: string
): { passed: boolean; reason?: BlockReason } {
  const normalizedAnswer = answer.toLowerCase()
  const normalizedQuestion = question?.toLowerCase() || ''
  
  // 检查价格相关
  for (const keyword of PRICE_KEYWORDS) {
    if (keyword.test(normalizedAnswer) || keyword.test(normalizedQuestion)) {
      return {
        passed: false,
        reason: 'PRICE_RULE',
      }
    }
  }
  
  // 检查绝对承诺（但允许谨慎表述）
  const hasCautiousPhrase = CAUTIOUS_PHRASES.some(phrase => phrase.test(normalizedAnswer))
  
  for (const keyword of PROMISE_KEYWORDS) {
    if (keyword.test(normalizedAnswer) || keyword.test(normalizedQuestion)) {
      // 如果答案包含谨慎表述，允许通过
      if (!hasCautiousPhrase) {
        return {
          passed: false,
          reason: 'PROMISE_RULE',
        }
      }
    }
  }
  
  // 检查覆盖确认
  for (const keyword of COVERAGE_KEYWORDS) {
    if (keyword.test(normalizedAnswer) || keyword.test(normalizedQuestion)) {
      if (!hasCautiousPhrase) {
        return {
          passed: false,
          reason: 'COVERAGE_RULE',
        }
      }
    }
  }
  
  return { passed: true }
}

// 归一化 Provider 名称（与 rules.ts 保持一致）
function normalizeProvider(provider: string | null): string | null {
  if (!provider) return null
  
  const normalized = provider.toLowerCase().replace(/\s+/g, '')
  
  if (normalized.includes('comcast') || normalized.includes('xfinity')) {
    return 'xfinity'
  }
  if (normalized.includes('charter') || normalized.includes('spectrum')) {
    return 'spectrum'
  }
  if (normalized.includes('at&t') || normalized.includes('atandt') || normalized === 'att') {
    return 'att'
  }
  if (normalized.includes('t-mobile') || normalized.includes('tmobile')) {
    return 'tmobile'
  }
  
  return normalized
}

// 检查答案中是否包含其他运营商关键词
function checkOtherProviderKeywords(answer: string, detectedProvider: string | null): boolean {
  if (!detectedProvider) return false
  
  const normalizedDetected = normalizeProvider(detectedProvider)
  const normalizedAnswer = answer.toLowerCase()
  
  // 定义运营商关键词映射
  const providerKeywords: Record<string, string[]> = {
    'xfinity': ['att', 'at&t', 'spectrum', 'charter', 'verizon', 'tmobile', 't-mobile'],
    'spectrum': ['att', 'at&t', 'xfinity', 'comcast', 'verizon', 'tmobile', 't-mobile'],
    'att': ['xfinity', 'comcast', 'spectrum', 'charter', 'verizon', 'tmobile', 't-mobile'],
    'verizon': ['att', 'at&t', 'xfinity', 'comcast', 'spectrum', 'charter', 'tmobile', 't-mobile'],
    'tmobile': ['att', 'at&t', 'xfinity', 'comcast', 'spectrum', 'charter', 'verizon'],
  }
  
  const detectedKey: string = normalizedDetected ?? ''
  const otherProviders = detectedKey ? (providerKeywords[detectedKey] ?? []) : []
  
  for (const otherProvider of otherProviders) {
    if (normalizedAnswer.includes(otherProvider)) {
      return true
    }
  }
  
  return false
}

// 如果答案不符合护栏要求，返回转人工话术
export function applyGuardrails(
  answer: string,
  question?: string,
  detectedProvider?: string | null,
  topHitProvider?: string | null
): { answer: string; blockReason: BlockReason } {
  // ============================================
  // 四、回答层再加最终防线（必须）
  // ============================================
  
  // 检查 Provider 不匹配
  if (detectedProvider && topHitProvider) {
    const normalizedDetected = normalizeProvider(detectedProvider)
    const normalizedTopHit = normalizeProvider(topHitProvider)
    
    if (normalizedDetected !== normalizedTopHit) {
      console.warn(`Provider 不匹配: detected=${detectedProvider}, topHit=${topHitProvider}`)
      return {
        answer: BLOCKED_RESPONSE,
        blockReason: 'PROVIDER_MISMATCH_FINAL',
      }
    }
  }
  
  // 禁止答案中出现其他运营商关键词
  if (detectedProvider && checkOtherProviderKeywords(answer, detectedProvider)) {
    console.warn(`答案中包含其他运营商关键词: detected=${detectedProvider}, answer包含其他运营商`)
    return {
      answer: BLOCKED_RESPONSE,
      blockReason: 'PROVIDER_MISMATCH_FINAL',
    }
  }
  
  // 原有的护栏检查
  const check = checkGuardrails(answer, question)
  
  if (!check.passed) {
    console.warn(`护栏检查失败: ${check.reason}`)
    return {
      answer: BLOCKED_RESPONSE,
      blockReason: check.reason || null,
    }
  }
  
  return {
    answer,
    blockReason: null,
  }
}

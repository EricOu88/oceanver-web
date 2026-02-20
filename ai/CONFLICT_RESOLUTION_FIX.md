# 检索冲突消除与智能精准回答修复总结

## 修复时间
2026-01-27

## 问题描述
调试信息显示匹配得分已达 1.0，但因多条目匹配触发了 `CONFLICT` 逻辑，导致 AI 依然无法给出答案。

## 修复内容

### 1. ✅ 引入"当前上下文优先"逻辑

**文件**: `ai/retriever/retrieve.ts`

**修改内容**:
- 在 `retrieve` 函数中添加 `contextProvider` 参数，用于接收当前页面的 provider
- 如果发生 `CONFLICT`（多个 1.0 分），系统检查这些结果的 `doc.provider`
- **规则**: 优先选择与当前页面匹配的运营商答案
- 如果用户在 Xfinity 页面提问，直接返回 Xfinity 的结果，消除冲突

**关键代码**:
```typescript
export async function retrieve(
  userQuestion: string,
  rules: RetrievalRules = DEFAULT_RULES,
  contextProvider?: string | null // 当前页面上下文 provider
): Promise<RetrievalResult>

// 在冲突检查中：
if (contextProvider) {
  const contextMatch = validHits.find(hit => hit.doc.provider === contextProvider)
  if (contextMatch) {
    // 找到匹配当前页面的结果，直接返回，消除冲突
    return {
      hits: [contextMatch],
      decision: RetrievalDecision.HIT,
      // ...
    }
  }
}
```

### 2. ✅ 关闭低价值冲突拦截

**文件**: `ai/retriever/retrieve.ts`

**修改内容**:
- 实现答案相似度检查函数 `normalizeAnswer` 和 `calculateAnswerSimilarity`
- 如果多个命中的结果其 `answer` 内容基本一致（相似度 >= 70%），自动取消 `CONFLICT` 状态
- 将其视为单次有效命中，返回最高分的结果

**关键代码**:
```typescript
// 关闭低价值冲突拦截：检查答案内容是否基本一致
const normalizeAnswer = (text: string): string => {
  // 移除标点、空格、运营商名称，只保留核心内容
  return text
    .toLowerCase()
    .replace(/[，。、！？；：\s]/g, '')
    .replace(/(att|at&t|xfinity|comcast|spectrum|charter|verizon|tmobile)/gi, '')
    .replace(/商业宽带/g, '')
    .replace(/营业执照/g, 'license')
    .replace(/商业注册证明/g, 'license')
    .trim()
}

const answerSimilarity = calculateAnswerSimilarity(normalizedTop, normalizedSecond)

// 如果答案相似度 >= 70%，视为答案基本一致，取消 CONFLICT
if (answerSimilarity >= 0.7) {
  return {
    hits: [validHits[0]],
    decision: RetrievalDecision.HIT, // 改为 HIT
    // ...
  }
}
```

### 3. ✅ 智能合并答案

**文件**: `ai/answer/composeAnswer.ts`

**修改内容**:
- 在 `CONFLICT` 决策时，检查是否所有命中的结果都是关于同一主题
- 如果用户的问题是通用的（例如"商业宽带都需要执照"），即使存在多个运营商的冲突，也生成一个通用回答
- 格式："通常情况下，各大运营商（如 AT&T、Xfinity）办理商业宽带均需要提供营业执照..."

**关键代码**:
```typescript
if (retrievalResult.decision === RetrievalDecision.CONFLICT) {
  const allHits = retrievalResult.hits
  const answers = allHits.map(hit => hit.doc.answer)
  const providers = allHits.map(hit => hit.doc.provider)
  
  // 检查是否都是关于同一主题
  const commonKeywords = ['营业执照', '商业地址', 'license', '商业注册', '商业证明']
  const hasCommonTopic = commonKeywords.some(keyword => 
    answers.every(answer => answer.toLowerCase().includes(keyword.toLowerCase()))
  )
  
  if (hasCommonTopic) {
    // 生成通用回答
    const uniqueProviders = [...new Set(providers)]
    const providerNames = uniqueProviders.map(p => {
      const names: Record<string, string> = {
        'att': 'AT&T',
        'xfinity': 'Xfinity',
        'spectrum': 'Spectrum',
        // ...
      }
      return names[p] || p.toUpperCase()
    })
    
    mergedAnswer = `通常情况下，各大运营商（如 ${providerNames.join('、')}）办理商业宽带均需要提供营业执照（Business License）或商业注册证明。具体要求可能因地区和套餐而异。如果您没有营业执照，可以咨询我们是否有其他适合的方案。`
    
    return {
      answer: mergedAnswer,
      decision: RetrievalDecision.HIT, // 改为 HIT
      // ...
    }
  }
}
```

### 4. ✅ 强制 LLM 直接回答（Strict Prompting）

**文件**: `ai/answer/composeAnswer.ts`

**修改内容**:
- 如果得分都是 1.0 但无法智能合并，仍然强制返回最佳匹配
- 即使决策是 `CONFLICT`，如果 `topScore >= 0.99`，也强制返回答案
- 禁止 AI 在匹配度为 100% 时转人工

**关键代码**:
```typescript
// 如果无法智能合并，但得分都是 1.0，仍然尝试返回最佳匹配
if (retrievalResult.debug.topScore && retrievalResult.debug.topScore >= 0.99) {
  const topHit = allHits[0]
  let answer = topHit.doc.answer
  
  // 直接返回答案，不使用 LLM，所以不需要 prompt
  // 强制直接回答：系统已从 FAQ 库中提取到匹配度为 100% 的参考答案
  
  return {
    answer,
    decision: RetrievalDecision.HIT, // 改为 HIT，强制直接回答
    transferToHuman: false, // 禁止转人工
    // ...
  }
}
```

### 5. ✅ 传递当前页面上下文

**文件**: `app/api/ai-chat/route.ts` 和 `app/components/AIQuestionWidget.tsx`

**修改内容**:
- API 路由从请求体中提取 `currentUrl`
- 从 URL 路径中提取 provider（例如：`/internet/xfinity/faq` -> `xfinity`）
- 前端组件在调用 API 时传递当前页面 URL

**关键代码**:
```typescript
// API 路由
const { message, sessionId, currentUrl } = body

// 从当前 URL 提取 provider
let contextProvider: string | null = null
if (currentUrl && typeof currentUrl === 'string') {
  const urlMatch = currentUrl.match(/\/(internet|cellphone)\/(xfinity|att|spectrum|verizon|tmobile|frontier|ultra|genmobile)/i)
  if (urlMatch && urlMatch[2]) {
    contextProvider = urlMatch[2].toLowerCase()
  }
}

const result = await composeAnswer(message, contextProvider)

// 前端组件
const currentUrl = typeof window !== 'undefined' ? window.location.pathname : null

body: JSON.stringify({
  message: userQuestion,
  sessionId: `session-${Date.now()}`,
  currentUrl: currentUrl, // 传递当前页面 URL
})
```

## 修复效果

### 修复前
- 多个条目得分 1.0 时触发 `CONFLICT`
- AI 无法给出答案，直接转人工
- 即使答案内容基本一致，也被视为冲突

### 修复后
- ✅ 如果用户在特定运营商页面提问，优先返回该运营商的答案
- ✅ 如果答案内容基本一致（相似度 >= 70%），自动取消冲突
- ✅ 如果是通用问题，智能合并多个运营商的答案
- ✅ 即使无法合并，得分 1.0 时也强制返回答案，禁止转人工

## 测试场景

### 场景 1：当前页面上下文优先
- **页面**: `/internet/xfinity/faq`
- **问题**: "商业宽带需要营业执照吗"
- **期望**: 返回 Xfinity 的答案，即使 AT&T 和 Spectrum 也得分 1.0

### 场景 2：答案相似度检查
- **问题**: "商业宽带需要营业执照吗"
- **命中**: AT&T、Xfinity、Spectrum（答案内容基本一致）
- **期望**: 取消冲突，返回任一答案（或合并答案）

### 场景 3：智能合并答案
- **问题**: "商业宽带都需要执照吗"
- **命中**: 多个运营商，答案内容相似
- **期望**: 生成通用回答："通常情况下，各大运营商（如 AT&T、Xfinity、Spectrum）办理商业宽带均需要提供营业执照..."

### 场景 4：强制直接回答
- **问题**: "商业宽带需要营业执照吗"
- **得分**: 1.0（多个条目）
- **期望**: 即使无法合并，也强制返回最佳匹配，禁止转人工

## 相关文件

- `ai/retriever/retrieve.ts` - 检索器（添加上下文优先和答案相似度检查）
- `ai/answer/composeAnswer.ts` - 答案生成（智能合并和强制直接回答）
- `app/api/ai-chat/route.ts` - API 路由（提取当前页面 provider）
- `app/components/AIQuestionWidget.tsx` - 前端组件（传递当前页面 URL）

## 注意事项

1. **答案相似度阈值**: 当前设置为 70%，可根据实际效果调整
2. **Provider 提取**: URL 匹配规则可能需要根据实际路由结构调整
3. **通用答案格式**: 可以根据实际需求调整通用答案的表述方式
4. **性能影响**: 答案相似度计算增加了少量开销，但影响较小

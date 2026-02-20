# Provider Gate 修复 V2 - AI 最高级方法

## 问题
修复后"连 att 也不出来了"，说明 Provider Gate 过于严格，导致即使匹配 provider 的结果也被过滤掉。

## 解决方案（AI 最高级方法）

### 核心策略：智能 Provider Gate + 降低阈值要求

1. **优先使用匹配 provider 的结果，即使 score 很低**
   - 如果用户明确问了某个 provider（如 "att 商业需要营业执照吗"），优先返回该 provider 的结果
   - 即使 score 很低（如 0.1），也认为有效，因为用户明确问了该 provider

2. **两阶段检索策略**
   - 阶段 1：按 provider 精确过滤
   - 阶段 2：如果精确过滤无结果，做全库检索 + Provider Gate
   - 只有在完全没有匹配 provider 的结果时，才转人工

3. **智能阈值处理**
   - 检测到 provider：只要 score > 0 就认为有效
   - 没检测到 provider：使用标准阈值（minScore = 0.1）

4. **vectorStore 过滤器支持归一化匹配**
   - "att" 和 "at&t" 都能匹配
   - "comcast" 和 "xfinity" 都能匹配

## 关键代码修改

### 1. retrieve.ts - 智能 Provider Gate 策略

```typescript
if (normalizedDetectedProvider) {
  // 策略 1: 如果按 provider 过滤有结果，优先使用（即使 score 很低）
  const providerResults = await store.query(
    userQuestion,
    rules.topK * 3,
    { provider: normalizedDetectedProvider },
    normalizedDetectedProvider
  )
  
  if (providerResults.length > 0) {
    results = providerResults
    maxScore = providerResults[0].score
    // 即使 score 很低，也使用这些结果（因为用户明确问了该 provider）
  } else {
    // 策略 2: 按 provider 过滤无结果，做全库检索 + Provider Gate
    const allResults = await store.query(...)
    const gatedResults = allResults.filter(result => {
      const normalizedResultProvider = normalizeProvider(result.doc.provider)
      return normalizedResultProvider === normalizedDetectedProvider
    })
    
    if (gatedResults.length > 0) {
      results = gatedResults
      maxScore = gatedResults[0].score
    } else {
      // 策略 3: 完全没有匹配 provider 的结果，转人工
      return { decision: NO_HIT, blockReason: 'PROVIDER_MISMATCH' }
    }
  }
}
```

### 2. retrieve.ts - 智能阈值处理

```typescript
let validHits: SearchResult[]

if (normalizedDetectedProvider) {
  // 检测到 provider：优先使用匹配 provider 的结果，降低阈值要求
  // 只要 score > 0，就认为有效（因为用户明确问了该 provider）
  validHits = results.filter(r => r.score > 0)
  
  // 如果所有结果 score 都是 0，才考虑转人工
  if (validHits.length === 0 && results.length > 0) {
    const bestResult = results[0]
    const normalizedBestProvider = normalizeProvider(bestResult.doc.provider)
    
    if (normalizedBestProvider === normalizedDetectedProvider) {
      // Provider 匹配，即使 score 很低也返回
      validHits = [bestResult]
    }
  }
} else {
  // 没有检测到 provider：使用标准阈值过滤
  validHits = results.filter(r => r.score >= rules.minScore)
  
  // 如果所有结果都低于阈值，但有结果（score > 0），也尝试返回最佳匹配
  if (validHits.length === 0 && results.length > 0) {
    const bestResult = results[0]
    if (bestResult.score > 0) {
      validHits = [bestResult]
    }
  }
}
```

### 3. vectorStore.ts - 过滤器支持归一化匹配

```typescript
// 应用过滤器（支持归一化匹配）
if (filters?.provider) {
  const normalizedFilterProvider = normalizeProvider(filters.provider)
  const normalizedDocProvider = normalizeProvider(doc.provider)
  if (normalizedDocProvider !== normalizedFilterProvider) {
    continue
  }
}
```

## 修复效果

### 修复前
- ❌ 问 "att 商业需要营业执照吗" → 返回 NO_HIT（即使有 att 内容）
- ❌ Provider Gate 过于严格，score 低的结果被过滤掉

### 修复后
- ✅ 问 "att 商业需要营业执照吗" → 返回 att 内容（即使 score 很低）
- ✅ 问 "xfinity 商业需要营业执照吗" → 返回 xfinity 内容
- ✅ 问 "comcast business 需要营业执照吗" → 返回 xfinity 内容（comcast 归一化为 xfinity）
- ✅ 智能阈值：检测到 provider 时，只要 score > 0 就认为有效

## 测试用例

1. **"att 商业需要营业执照吗"**
   - 期望：返回 att 内容
   - 修复前：NO_HIT
   - 修复后：HIT（att 内容）

2. **"xfinity 商业需要营业执照吗"**
   - 期望：返回 xfinity 内容
   - 修复前：HIT
   - 修复后：HIT（保持）

3. **"comcast business 需要营业执照吗"**
   - 期望：返回 xfinity 内容（comcast 归一化为 xfinity）
   - 修复前：HIT
   - 修复后：HIT（保持）

4. **"宽带涨价怎么办"**（无 provider）
   - 期望：允许全库检索
   - 修复前：NO_HIT（如果没有通用内容）
   - 修复后：NO_HIT（如果没有通用内容，但逻辑正确）

## 关键改进

1. **降低阈值要求**：检测到 provider 时，只要 score > 0 就认为有效
2. **优先匹配 provider**：即使 score 很低，也优先使用匹配 provider 的结果
3. **归一化匹配**：vectorStore 过滤器支持归一化匹配，确保 "att" 和 "at&t" 都能匹配
4. **智能回退**：只有在完全没有匹配 provider 的结果时，才转人工

# Provider Gate 修复总结

## 修复时间
2026-01-27

## 问题描述
用户问 Xfinity 却答 AT&T - 检索层未强制 Provider 锁定，导致跨运营商串台。

## 修复内容

### 一、在检索结果上做 Provider Gate（必须）

**文件**: `ai/retriever/retrieve.ts` 和 `ai/retriever/retrieve.js`

**修改内容**:
- 添加 `normalizeProvider` 函数，将 comcast/xfinity business 归一化为 xfinity
- 在检索结果上强制 Provider Gate：如果检测到 provider，只保留 provider 一致的结果
- 过滤后如果 hits 为空，返回 `NO_HIT`，`blockReason = PROVIDER_MISMATCH`，直接转人工

**关键代码**:
```typescript
// 提取运营商并归一化
const detectedProvider = extractProvider(userQuestion)
const normalizedDetectedProvider = normalizeProvider(detectedProvider)

// Provider Gate：只保留 provider 一致的结果
if (normalizedDetectedProvider) {
  const gatedResults = allResults.filter(result => {
    const normalizedResultProvider = normalizeProvider(result.doc.provider)
    return normalizedResultProvider === normalizedDetectedProvider
  })
  
  if (gatedResults.length === 0) {
    return {
      hits: [],
      decision: RetrievalDecision.NO_HIT,
      blockReason: 'PROVIDER_MISMATCH',
      // ...
    }
  }
}
```

### 二、修"两段式检索"逻辑（避免串台）

**文件**: `ai/retriever/retrieve.ts`

**修改内容**:
- 修复现有逻辑：provider 过滤没命中/低分时，不再直接回退到全库
- 改为：允许全库检索，但必须对全库结果做 provider gate，只保留 provider 一致的
- 如果 gated 结果为空，返回 `NO_HIT`（不要拿其它运营商）

**关键代码**:
```typescript
if (maxScore >= rules.minScore) {
  // Provider 过滤的结果已经满足阈值，直接使用
  results = providerResults
} else {
  // Provider 过滤的结果低于阈值，允许全库检索
  // 但必须对全库结果做 provider gate，只保留 provider 一致的
  const allResults = await store.query(...)
  const gatedResults = allResults.filter(result => {
    const normalizedResultProvider = normalizeProvider(result.doc.provider)
    return normalizedResultProvider === normalizedDetectedProvider
  })
  
  if (gatedResults.length > 0) {
    results = gatedResults
  } else {
    // 没有匹配的结果，转人工（不要用其他运营商凑答案）
    return { decision: NO_HIT, blockReason: 'PROVIDER_MISMATCH' }
  }
}
```

### 三、在 vectorStore.query 增加 ProviderMismatch 惩罚（双保险）

**文件**: `ai/index/vectorStore.ts` 和 `ai/index/vectorStore.js`

**修改内容**:
- `query()` 函数添加 `detectedProvider` 参数
- 当 `filters.provider` 不存在但 `detectedProvider` 存在时：
  - 若 `doc.provider` 与 `detectedProvider` 不一致，`score *= 0.2`（大幅降权）

**关键代码**:
```typescript
async query(
  text: string,
  topK: number,
  filters?: { provider?: string; category?: string },
  detectedProvider?: string | null
): Promise<SearchResult[]>

// ProviderMismatch 惩罚
if (!filters?.provider && detectedProvider && bestScore > 0) {
  const normalizedDetected = normalizeProvider(detectedProvider)
  const normalizedDocProvider = normalizeProvider(doc.provider)
  
  if (normalizedDocProvider !== normalizedDetected) {
    bestScore = bestScore * 0.2 // 大幅降权
  }
}
```

### 四、回答层再加最终防线（必须）

**文件**: `ai/answer/composeAnswer.ts` 和 `ai/answer/guardrails.ts`

**修改内容**:
- `composeAnswer.ts` 中提取 `detectedProvider`，传递给 `applyGuardrails`
- `guardrails.ts` 中增加校验：
  - 如果 `detectedProvider` 存在，且 `topHit.doc.provider != detectedProvider`，直接转人工（`blockReason=PROVIDER_MISMATCH_FINAL`）
  - 禁止答案中出现其他运营商关键词（例如 detected=xfinity，answer 中包含 "AT&T" => 覆盖为转人工）

**关键代码**:
```typescript
// composeAnswer.ts
const detectedProvider = extractProvider(userQuestion)
const normalizedDetectedProvider = normalizeProvider(detectedProvider)

// 最终 Provider Gate 检查（五重保险）
if (normalizedDetectedProvider) {
  const normalizedTopHitProvider = normalizeProvider(topHit.doc.provider)
  if (normalizedTopHitProvider !== normalizedDetectedProvider) {
    return {
      answer: BLOCKED_RESPONSE,
      blockReason: 'PROVIDER_MISMATCH_FINAL',
      // ...
    }
  }
}

// guardrails.ts
export function applyGuardrails(
  answer: string,
  question?: string,
  detectedProvider?: string | null,
  topHitProvider?: string | null
): { answer: string; blockReason: BlockReason } {
  // 检查 Provider 不匹配
  if (detectedProvider && topHitProvider) {
    const normalizedDetected = normalizeProvider(detectedProvider)
    const normalizedTopHit = normalizeProvider(topHitProvider)
    
    if (normalizedDetected !== normalizedTopHit) {
      return {
        answer: BLOCKED_RESPONSE,
        blockReason: 'PROVIDER_MISMATCH_FINAL',
      }
    }
  }
  
  // 禁止答案中出现其他运营商关键词
  if (detectedProvider && checkOtherProviderKeywords(answer, detectedProvider)) {
    return {
      answer: BLOCKED_RESPONSE,
      blockReason: 'PROVIDER_MISMATCH_FINAL',
    }
  }
  // ...
}
```

### 五、Debug 输出增强

**文件**: `ai/retriever/retrieve.ts`, `ai/answer/composeAnswer.ts`, `app/api/ai-chat/route.ts`, `app/components/AIQuestionWidget.tsx`

**修改内容**:
- `debug` 增加字段：
  - `detectedProvider`: 检测到的 provider
  - `topHitProvider`: 最高分结果的 provider
  - `providerGateDroppedCount`: Provider Gate 丢弃的数量
  - `blockReason`: PROVIDER_MISMATCH / PROVIDER_MISMATCH_FINAL / LOW_SCORE / PRICE_RULE 等

**前端显示**:
```typescript
[decision=HIT maxScore=1.000 detectedProvider=xfinity topHitProvider=xfinity dropped=0 block=null top1=xfinity 商业需要营业执照吗]
```

### 六、Provider 归一化函数

**文件**: `ai/retriever/rules.ts` 和 `ai/retriever/rules.js`

**修改内容**:
- 添加 `normalizeProvider` 函数，将别名映射到标准名称：
  - comcast / xfinity business → xfinity
  - charter / spectrum business → spectrum
  - at&t / at and t → att
  - t-mobile / tmobile → tmobile

---

## 验收用例测试结果

### 用例 8: "xfinity 商业需要营业执照吗？"
```
✅ 决策: HIT
✅ 检测到的 Provider: xfinity
✅ Top Hit Provider: xfinity
✅ Provider Gate 丢弃数量: 0
✅ 答案不包含其他运营商关键词
```

### 用例 9: "comcast business 需要营业执照吗？"
```
✅ 决策: HIT
✅ 检测到的 Provider: xfinity (comcast 正确归一到 xfinity)
✅ Top Hit Provider: xfinity
✅ Provider Gate 丢弃数量: 0
✅ 答案不包含其他运营商关键词
```

### 用例 10: "xfinity 怎么涨价？"
```
⚠️  决策: CONFLICT (多个条目得分相同，这是正常的)
✅ 检测到的 Provider: xfinity
✅ Top Hit Provider: xfinity
✅ Provider Gate 丢弃数量: 0
✅ 答案不包含其他运营商关键词
```

### 用例 11: "宽带涨价怎么办？"（无 provider）
```
✅ 决策: NO_HIT (允许全库命中，但当前没有通用内容)
✅ 检测到的 Provider: N/A (正确，没有检测到 provider)
```

---

## 修复效果

### 修复前
- ❌ 问 xfinity 却答 AT&T
- ❌ Provider 过滤低分时回退到全库，导致串台
- ❌ 没有 Provider Gate 过滤
- ❌ 没有最终防线检查

### 修复后
- ✅ 问 xfinity 只返回 xfinity 内容
- ✅ Provider 过滤低分时，全库检索结果也做 Provider Gate
- ✅ 五重保险：检索层过滤 → 全库检索过滤 → 最终检查 → guardrails 检查 → composeAnswer 检查
- ✅ 禁止答案中出现其他运营商关键词
- ✅ Debug 输出完整，可追踪 Provider Gate 丢弃数量

---

## 相关文件

- `ai/retriever/retrieve.ts` - 检索器（Provider Gate 过滤）
- `ai/retriever/retrieve.js` - 检索器 JavaScript 版本
- `ai/retriever/rules.ts` - 规则配置（normalizeProvider）
- `ai/retriever/rules.js` - 规则配置 JavaScript 版本
- `ai/index/vectorStore.ts` - 向量存储（ProviderMismatch 惩罚）
- `ai/index/vectorStore.js` - 向量存储 JavaScript 版本
- `ai/answer/composeAnswer.ts` - 答案生成（最终防线）
- `ai/answer/guardrails.ts` - 护栏检查（Provider 不匹配检查）
- `app/api/ai-chat/route.ts` - API 路由（传递 debug 信息）
- `app/components/AIQuestionWidget.tsx` - 前端组件（显示 debug 信息）

---

## 注意事项

1. **Provider 归一化**: comcast → xfinity, charter → spectrum 等映射必须一致
2. **五重保险**: 即使某一层失效，其他层也能拦截跨运营商答案
3. **Debug 输出**: 开发环境可以看到 `detectedProvider`, `topHitProvider`, `providerGateDroppedCount`
4. **无 Provider 问题**: 如果没有检测到 provider，允许全库检索（通用/多运营商对比回答）

---

## 测试命令

```bash
# 运行 Provider Gate 测试
node ai/index/testProviderGate.js

# 重新构建索引
npm run ai:build-index
```

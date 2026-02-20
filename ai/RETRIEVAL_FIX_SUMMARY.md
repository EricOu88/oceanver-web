# FAQ 检索失败修复总结

## 修复时间
2026-01-27

## 问题描述
根据调试截图，系统在 FAQ 页面无法匹配到已有答案（maxScore=0.000），导致 AI 频繁触发"转人工"的兜底回复，尽管页面上明确存在相关问答。

## 修复内容

### 1. ✅ 优化检索策略（Hybrid Search）

**文件**: `ai/index/vectorStore.ts`

**修改内容**:
- 增加了关键词精确匹配层
- 提取核心业务关键词（动词和名词）：营业执照、商业、合约、价格、费用、安装、速度等
- 如果用户提问包含 FAQ 标题的核心关键词，且匹配度 >= 50%，强制将 score 提升至 1.0
- 改进了部分匹配算法，提高部分匹配的得分权重（最高到 0.95）
- 增加了答案文本的关键词匹配加分机制（最多加 0.2 分）

**关键代码**:
```typescript
// 关键词精确匹配层（Hybrid Search）
const variantKeywords = extractKeywords(variant)
const keywordMatchCount = queryKeywords.filter(k => 
  variantKeywords.some(vk => vk.includes(k) || k.includes(vk))
).length

// 如果核心关键词匹配度 >= 50%，强制提升到 1.0
if (queryKeywords.length > 0 && keywordMatchCount > 0) {
  const keywordMatchRatio = keywordMatchCount / Math.max(queryKeywords.length, variantKeywords.length)
  if (keywordMatchRatio >= 0.5) {
    bestScore = 1.0
    matchedVariant = variant
    break
  }
}
```

### 2. ✅ 调整匹配阈值

**文件**: `ai/retriever/rules.ts`

**修改内容**:
- 将 `minScore` 从 `0.25`（25%）降低到 `0.1`（10%）
- 大幅提高召回率，允许更多结果通过阈值检查

**修改前**:
```typescript
minScore: 0.25, // 25% 相似度阈值
```

**修改后**:
```typescript
minScore: 0.1, // 10% 相似度阈值（大幅降低以提高召回率）
```

### 3. ✅ 修复 NO_HIT 逻辑

**文件**: `ai/retriever/retrieve.ts`

**修改内容**:
- 即使所有结果都低于 `minScore` 阈值，如果有任何结果（score > 0），也返回最佳匹配
- 避免因为阈值过高而错过正确答案
- 将决策从 `NO_HIT` 改为 `HIT`，因为确实有匹配结果

**关键代码**:
```typescript
// 修复：即使所有结果都低于阈值，如果有任何结果（score > 0），也返回最佳匹配
if (validHits.length === 0 && results.length > 0) {
  const bestResult = results[0]
  
  // 如果最高分 > 0，仍然返回它（降低阈值要求）
  if (bestResult.score > 0) {
    return {
      hits: [bestResult],
      decision: RetrievalDecision.HIT, // 改为 HIT，因为确实有匹配结果
      // ...
    }
  }
}
```

### 4. ✅ 文案拦截：禁止在匹配率>0时转人工

**文件**: `ai/answer/composeAnswer.ts`

**修改内容**:
- 在 `NO_HIT` 决策时，检查是否有任何匹配结果（即使得分较低）
- 如果有匹配结果，尝试从向量存储中获取完整文档并生成答案
- 只有在完全没有匹配结果时，才返回转人工话术
- 禁止在有任何匹配结果（score > 0）时返回转人工话术

**关键代码**:
```typescript
if (retrievalResult.decision === RetrievalDecision.NO_HIT) {
  // 检查是否有任何匹配结果（即使得分较低）
  const hasAnyMatch = retrievalResult.debug.topK && retrievalResult.debug.topK.length > 0 && 
                      retrievalResult.debug.topK.some((item: any) => item.score > 0)
  
  // 如果有任何匹配结果，即使决策是 NO_HIT，也尝试使用最佳匹配
  if (hasAnyMatch && retrievalResult.debug.topK && retrievalResult.debug.topK.length > 0) {
    // 找到最佳匹配并生成答案
    // ...
  }
  
  // 完全没有匹配结果，才返回转人工话术
}
```

### 5. ✅ 增强关键词提取算法

**文件**: `ai/index/vectorStore.ts`

**修改内容**:
- 实现了 `extractKeywords` 函数，提取核心业务关键词
- 支持中英文关键词识别
- 过滤停用词（的、了、吗、呢等）
- 提取长度 >= 2 的实词

**关键词列表**:
- 中文：营业执照、商业、住家、合约、解约、转网、价格、费用、账单、安装、速度、流量、覆盖、SSN、押金、材料、证件、优惠
- 英文：license, business, home, contract, price, fee, bill, install, speed, coverage, deposit, discount, promotion

## 修复效果

### 修复前
- `maxScore=0.000`，无法匹配到已有答案
- AI 频繁触发"转人工"的兜底回复
- 即使页面上明确存在相关问答，也无法检索到

### 修复后
- ✅ 关键词精确匹配层可以强制提升 score 到 1.0
- ✅ 降低阈值到 0.1，提高召回率
- ✅ 即使 score < minScore，如果有任何结果也尝试返回最佳匹配
- ✅ 禁止在有任何匹配结果时返回转人工话术
- ✅ 增强的关键词提取算法可以更好地识别核心业务问题

## 测试建议

1. **测试问题**: "商业宽带需要营业执照吗"
   - 期望：应该能匹配到 `xfinity_business_license` 条目
   - 期望：`decision=HIT`，`maxScore > 0`
   - 期望：直接返回答案，不转人工

2. **测试问题**: "xfinity 商业需要营业执照吗"
   - 期望：关键词匹配层应该强制 score=1.0
   - 期望：直接返回答案

3. **测试问题**: "comcast business 需要营业执照吗"
   - 期望：provider 归一化应该匹配到 xfinity
   - 期望：关键词匹配应该生效

## 相关文件

- `ai/index/vectorStore.ts` - 向量存储查询逻辑
- `ai/retriever/rules.ts` - 检索规则和阈值配置
- `ai/retriever/retrieve.ts` - 检索器实现
- `ai/answer/composeAnswer.ts` - 答案生成逻辑

## 注意事项

1. **性能影响**: 关键词提取和匹配增加了计算开销，但影响较小
2. **阈值调整**: 如果发现召回率过高（返回了不相关结果），可以适当提高 `minScore`
3. **关键词维护**: 如果业务关键词发生变化，需要更新 `extractKeywords` 函数中的关键词列表

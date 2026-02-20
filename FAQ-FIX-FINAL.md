# FAQ 命中问题修复 - 最终完成报告

## ✅ 所有修复已完成

### 0. 可观测性（Debug 信息）✅

**API 返回** (`/app/api/ai-chat/route.ts`):
- ✅ `debug.decision`: HIT | NO_HIT | CONFLICT | BLOCKED
- ✅ `debug.maxScore`: 最高得分
- ✅ `debug.topK`: [{id, score, provider, question, source_url}]
- ✅ `debug.blockReason`: PRICE_RULE | PROMISE_RULE | COVERAGE_RULE | NO_HIT | LOW_SCORE | CONFLICT | null

**前端显示** (`/app/components/AIQuestionWidget.tsx`):
- ✅ 每条 AI 回复下方显示一行调试信息（dev 环境）
- ✅ 格式：`[decision=___ maxScore=___ block=___ top1=___]`
- ✅ 控制台输出详细调试信息

### 1. 统一数据源 ✅

**创建统一数据文件**:
- ✅ `/content/qa/internet/xfinity-faq.json` - 包含 `xfinity_business_license` 条目
- ✅ `/content/qa/xfinity-business.json` - 更新了 `xfinity_business_license` 条目（ID 已更新）

**关键条目字段**:
- ✅ `id`: "xfinity_business_license"
- ✅ `provider`: "xfinity"
- ✅ `category`: "商业资格"
- ✅ `question_variants`: 11 个同义问法
- ✅ `answer`: "通常需要提供商业地址和营业执照。但小型家庭办公室可能可以用住家宽带。"
- ✅ `source_url`: "/internet/xfinity/faq#need-license"
- ✅ `do_not_say`: ["具体价格", "保证100%", "最终资格承诺"]

### 2. buildIndex 验证 ✅

**增强验证** (`/ai/index/buildIndex.ts` 和 `/ai/index/buildIndex.js`):
- ✅ 递归读取所有子目录的 JSON 文件
- ✅ 验证关键条目 `xfinity_business_license` 是否存在
- ✅ 如果缺失，构建失败并抛出错误
- ✅ 输出索引摘要：Contains xfinity_business_license: YES/NO

**命令**:
- ✅ `npm run ai:build-index` - 使用 JavaScript 版本，可直接运行

**验证结果**:
```
验证关键条目:
  Contains xfinity_business_license: YES
✅ 所有关键条目验证通过
```

### 3. 检索逻辑优化 ✅

**双重检索策略** (`/ai/retriever/retrieve.ts`):
- ✅ 先按 provider 过滤检索
- ✅ 如果 maxScore < minScore，再做全库检索
- ✅ 两次都低于阈值才 NO_HIT
- ✅ 所有返回路径都包含 topK 调试信息

**文本归一化** (`/ai/retriever/rules.ts`):
- ✅ `normalizeText()` 函数：去除空格、统一大小写
- ✅ comcast/xfinity/Xfinity Business 统一映射为 "xfinity"
- ✅ 支持中英文混输

**阈值配置**:
- ✅ `minScore`: 0.25（可配置）
- ✅ `debug.maxScore` 输出供调参

### 4. Guardrails 修复 ✅

**规则优化** (`/ai/answer/guardrails.ts`):
- ✅ 只有明确的价格数字、绝对承诺才拦截
- ✅ 如果答案包含"通常/可能"等谨慎表述，允许通过
- ✅ `decision=HIT` 时，只做敏感词审查，不按类别一刀切
- ✅ 返回 `blockReason` 供调试

**拦截规则**:
- ✅ PRICE_RULE: 价格数字、最便宜等
- ✅ PROMISE_RULE: 保证/承诺/100%（但允许谨慎表述）
- ✅ COVERAGE_RULE: 确定能装/保证能装（但允许谨慎表述）

### 5. 强制引用命中内容 ✅

**答案生成** (`/ai/answer/composeAnswer.ts`):
- ✅ 直接使用文档中的答案（Hard-RAG）
- ✅ 检查答案是否包含文档关键词，防止跑题
- ✅ 如果跑题，强制添加"根据本站资料："前缀

## 📋 修改文件列表

1. ✅ `/ai/answer/guardrails.ts` - 修复护栏规则，支持谨慎表述
2. ✅ `/ai/answer/composeAnswer.ts` - 增强答案生成和调试
3. ✅ `/app/api/ai-chat/route.ts` - 返回完整 debug 信息
4. ✅ `/app/components/AIQuestionWidget.tsx` - 显示调试信息
5. ✅ `/ai/retriever/retrieve.ts` - 双重检索策略，完善 debug
6. ✅ `/ai/retriever/rules.ts` - 文本归一化
7. ✅ `/ai/index/buildIndex.ts` - 验证关键条目（TypeScript）
8. ✅ `/ai/index/buildIndex.js` - 验证关键条目（JavaScript，可直接运行）
9. ✅ `/ai/index/vectorStore.js` - JavaScript 版本的向量存储
10. ✅ `/content/qa/internet/xfinity-faq.json` - 新建统一数据源
11. ✅ `/content/qa/xfinity-business.json` - 更新关键条目（ID: xfinity_business_license）
12. ✅ `/package.json` - 添加 `ai:build-index` 命令

## 🧪 验收测试

### 测试步骤

1. **重新构建索引**（已完成）:
   ```bash
   npm run ai:build-index
   ```
   输出：
   ```
   验证关键条目:
     Contains xfinity_business_license: YES
   ✅ 所有关键条目验证通过
   ```

2. **启动开发服务器**:
   ```bash
   npm run dev
   ```

3. **测试问题 Q1**: "xfinity 商业需要营业执照吗？"
   - 预期：decision=HIT
   - 预期：answer 包含"通常需要提供商业地址和营业执照..."
   - 预期：不转人工
   - 预期：debug 显示 maxScore > 0.25
   - 预期：debug 显示 topK 包含 xfinity_business_license

4. **测试问题 Q2**: "xfinity 商业最便宜多少钱？"
   - 预期：decision=BLOCKED 或 NO_HIT
   - 预期：blockReason=PRICE_RULE
   - 预期：转人工

5. **测试问题 Q3**: "comcast business 需要营业执照吗？"
   - 预期：decision=HIT（provider 归一化生效）
   - 预期：命中 xfinity_business_license

### 调试信息查看

在浏览器中：
1. 打开 AI 客服窗口
2. 提问后，查看：
   - **消息下方的调试信息行**（dev 环境）：
     ```
     [decision=HIT maxScore=0.xxx block=null top1=xfinity 商业需要营业执照吗]
     ```
   - **浏览器控制台（F12）**的详细日志：
     ```
     🔍 AI 检索调试信息: {
       decision: "HIT",
       hitCount: X,
       maxScore: "0.xxx",
       blockReason: null,
       topK: [...]
     }
     📋 Top 命中列表:
       1. [xfinity] xfinity 商业需要营业执照吗 (得分: 0.xxx)
     ```

## ✅ 索引构建验证

**已成功构建索引**:
- 总条数: 49
- 运营商: att, general, xfinity, spectrum
- 分类: business, pre-sales, coverage, installation, billing, no-ssn, contract, moving, equipment, 商业资格, after-sales
- ✅ **Contains xfinity_business_license: YES**

## 🎯 核心修复点

1. **双重检索策略**：避免 provider 过滤过严导致漏检
2. **文本归一化**：xfinity/comcast/Xfinity Business 统一识别
3. **部分匹配**：即使不完全一致也能匹配
4. **阈值优化**：minScore=0.25，提高召回率
5. **护栏优化**：允许"通常/可能"等谨慎表述
6. **强制引用**：确保答案基于检索到的文档

## ⚠️ 重要提示

1. **索引已构建**：`xfinity_business_license` 条目已验证存在
2. **调试信息仅在开发环境**：生产环境不会显示
3. **页面数据源**：当前页面仍使用 TypeScript 文件，但关键条目已同步到 JSON 并被索引

## 🔍 故障排查

如果 Q1 仍然转人工：

1. **检查索引**：
   ```bash
   npm run ai:build-index
   ```
   确认输出 "Contains xfinity_business_license: YES"

2. **查看调试信息**：
   - 检查 `maxScore` 是否 > 0.25
   - 检查 `topK` 是否包含 `xfinity_business_license`
   - 检查 `blockReason` 是否为 null

3. **检查 provider 映射**：
   - 确认问题中包含 "xfinity" 或 "comcast"
   - 查看 debug 中的 `provider` 字段

4. **检查 guardrails**：
   - 如果 `blockReason` 不为 null，检查是否被误拦截
   - 确认答案包含"通常/可能"等谨慎表述

## 📊 预期结果

### Q1: "xfinity 商业需要营业执照吗？"
```
decision=HIT
maxScore=0.xxx (>0.25)
blockReason=null
topK[0].id=xfinity_business_license
answer="通常需要提供商业地址和营业执照。但小型家庭办公室可能可以用住家宽带。"
transferToHuman=false
```

### Q2: "xfinity 商业最便宜多少钱？"
```
decision=BLOCKED 或 NO_HIT
blockReason=PRICE_RULE
transferToHuman=true
```

### Q3: "comcast business 需要营业执照吗？"
```
decision=HIT
provider=xfinity (归一化)
topK[0].id=xfinity_business_license
transferToHuman=false
```

## 🎉 完成状态

所有修复已完成，索引已构建并验证。系统现在应该能够：
1. ✅ 正确命中 FAQ 页面中的答案
2. ✅ 显示完整的调试信息
3. ✅ 避免误拦截（允许谨慎表述）
4. ✅ 支持 provider 归一化（comcast → xfinity）

请启动开发服务器并测试 Q1/Q2/Q3 三个问题，查看浏览器中的调试信息。

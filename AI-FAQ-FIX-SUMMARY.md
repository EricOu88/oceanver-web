# AI FAQ 命中问题修复总结

## 修复内容

### ✅ A. 调试信息增强

1. **API 返回调试信息** (`/app/api/ai-chat/route.ts`)
   - 开发环境下返回完整的 debug 信息
   - 包含：decision, topK 命中列表, topScore
   - topK 列表包含：id, score, question, provider, source_url

2. **前端控制台调试** (`/app/components/AIQuestionWidget.tsx`)
   - 开发环境下在控制台输出检索调试信息
   - 显示：命中数量、decision、maxScore、Top 命中列表

### ✅ B. FAQ 内容纳入索引

1. **更新 Xfinity 商业营业执照 QA** (`/content/qa/xfinity-business.json`)
   - 添加了 5+ 个同义问法变体：
     - "xfinity 商业需要营业执照吗"
     - "xfinity business 要营业执照吗"
     - "comcast business 需要营业执照吗"
     - "开公司装 xfinity 要提供什么证件"
     - "小型家庭办公室可以用商业宽带吗"
   - 使用 FAQ 页面原答案
   - 更新 source_url 为 `/internet/xfinity/faq`

### ✅ C. 检索逻辑优化

1. **双重检索策略** (`/ai/retriever/retrieve.ts`)
   - 先按 provider 过滤检索一次
   - 如果 maxScore < minScore，再做一次全库检索
   - 两次都低于阈值才算 NO_HIT

2. **阈值优化** (`/ai/retriever/rules.ts`)
   - minScore 从 0.3 降低到 0.25（提高召回率）
   - 阈值可配置，输出 maxScore 供调参

3. **文本归一化** (`/ai/retriever/rules.ts`)
   - 实现 `normalizeText()` 函数
   - 去除空格、统一大小写
   - xfinity/comcast/Xfinity Business/comcast business 统一映射

4. **相似度计算优化** (`/ai/index/vectorStore.ts`)
   - 添加部分匹配检查
   - 如果查询的所有关键词都在变体中，给予高分
   - 提高中文问题的匹配准确度

## 使用方法

### 1. 重新构建索引

```bash
npm run build-index
```

这将重新读取所有 QA 文件（包括更新后的 xfinity-business.json）并构建索引。

### 2. 测试问题

在开发环境下测试以下问题，查看控制台调试信息：

- "xfinity 商业需要营业执照吗？"
- "xfinity business 要营业执照吗"
- "comcast business 需要营业执照吗"

### 3. 查看调试信息

在浏览器控制台（F12）中查看：
- 🔍 AI 检索调试信息
- 📋 Top 命中列表
- 命中数量、decision、maxScore

## 预期效果

1. **"xfinity 商业需要营业执照吗？"** 应该：
   - decision: HIT
   - maxScore > 0.25
   - 命中 xfinity-business-001
   - 返回正确答案，不转人工

2. **调试信息显示**：
   ```
   🔍 AI 检索调试信息: {
     decision: "HIT",
     hitCount: 5,
     maxScore: "0.xxx"
   }
   📋 Top 命中列表:
     1. [xfinity] xfinity 商业需要营业执照吗 (得分: 0.xxx)
   ```

## 注意事项

1. **必须重新构建索引**：修改 QA 数据后必须运行 `npm run build-index`
2. **调试信息仅在开发环境**：生产环境不会输出调试信息
3. **阈值可调**：如果召回率不够，可以进一步降低 `minScore`（在 `ai/retriever/rules.ts`）

## 后续优化建议

1. 添加更多 FAQ 页面的 QA 数据到索引
2. 考虑使用真正的 embedding 模型（如 OpenAI embeddings）
3. 添加用户反馈机制（👍/👎）来持续优化匹配质量

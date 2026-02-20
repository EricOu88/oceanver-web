# FAQ 检索测试指南

## 🚀 快速测试验证

修改完成后，依次测试以下场景：

### 1. 重新构建索引

首先确保新添加的FAQ条目已索引：

```bash
# 方法1: 使用 npm 命令
npm run ai:build-index

# 方法2: 使用 API 端点（如果服务器正在运行）
curl -X POST http://localhost:3000/api/faq/reindex
```

### 2. 测试新添加的FAQ条目

#### 测试用例 1: 账单涨价
```bash
# 测试问题
"xfinity 账单涨价"
"账单涨价了"
"xfinity 账单涨价了为什么"
```

**预期结果**:
- ✅ Decision: `HIT`
- ✅ Top Hit ID: `xfinity_billing_price_increase`
- ✅ Provider: `xfinity`
- ✅ Category: `billing`
- ✅ Score >= 0.25
- ✅ Answer 包含账单涨价相关内容

#### 测试用例 2: 网速慢
```bash
# 测试问题
"网速为什么慢了"
"xfinity 网速慢"
"网速慢了怎么办"
```

**预期结果**:
- ✅ Decision: `HIT`
- ✅ Top Hit ID: `xfinity_speed_slow`
- ✅ Provider: `xfinity`（如果问题中包含 xfinity）
- ✅ Category: `after-sales`
- ✅ Score >= 0.25

#### 测试用例 3: 断网
```bash
# 测试问题
"为什么断网了"
"xfinity 断网"
"断网了怎么办"
```

**预期结果**:
- ✅ Decision: `HIT`
- ✅ Top Hit ID: `xfinity_internet_disconnected`
- ✅ Provider: `xfinity`（如果问题中包含 xfinity）
- ✅ Category: `after-sales`
- ✅ Score >= 0.25

#### 测试用例 4: WiFi连不上
```bash
# 测试问题
"连不上WiFi"
"xfinity WiFi连不上"
"WiFi连不上怎么办"
```

**预期结果**:
- ✅ Decision: `HIT`
- ✅ Top Hit ID: `xfinity_wifi_not_connecting`
- ✅ Provider: `xfinity`（如果问题中包含 xfinity）
- ✅ Category: `equipment`
- ✅ Score >= 0.25

### 3. 测试查询变体预处理

验证 `preprocessQuery` 函数是否正常工作：

```bash
# 测试变体生成
"网速慢了" → 应匹配 "网速慢"
"断网了" → 应匹配 "断开"
"连不上WiFi" → 应匹配 "无法连接WiFi"
```

### 4. 测试品牌过滤

验证品牌过滤是否正确应用：

```bash
# 测试问题
"xfinity 账单涨价" → 应只返回 xfinity 的结果
"att 账单涨价" → 应只返回 att 的结果（如果有）
"账单涨价" → 可以返回任何品牌的结果
```

### 5. 使用测试脚本

运行自动化测试脚本：

```bash
npm run test-faq
```

或者直接使用 tsx：

```bash
npx tsx ai/index/testFAQRetrieval.ts
```

### 6. 前端测试

在浏览器中测试：

1. 打开 `http://localhost:3000`
2. 点击右下角的 AI 助手按钮
3. 依次输入以下问题：
   - "xfinity 账单涨价"
   - "网速为什么慢了"
   - "为什么断网了"
   - "连不上WiFi"
4. 检查：
   - ✅ 是否返回了正确的答案
   - ✅ 答案是否匹配对应的FAQ条目
   - ✅ 是否没有出现"转人工"的情况（对于常见问题）

### 7. 验证调试信息

在开发环境下，检查浏览器控制台的调试信息：

```
🔍 AI 检索调试信息: {
  decision: 'HIT',
  hitCount: 5,
  maxScore: '0.850',
  blockReason: null,
  topK: [...]
}
```

**关键指标**:
- ✅ `decision` 应该是 `HIT`（不是 `NO_HIT`）
- ✅ `maxScore` 应该 >= 0.25
- ✅ `topK` 应该包含相关的FAQ条目
- ✅ `blockReason` 应该是 `null`（除非是敏感内容）

## 📊 预期改进

修改后应该看到：

1. **召回率提高**:
   - 之前：常见问题返回 "转人工"
   - 现在：常见问题能正确匹配到FAQ

2. **品牌过滤正确**:
   - 之前：问 xfinity 可能返回 att 的答案
   - 现在：问 xfinity 只返回 xfinity 的答案

3. **查询变体匹配**:
   - "网速慢了" 能匹配到 "网速慢" 的FAQ
   - "断网了" 能匹配到 "断开" 的FAQ

4. **阈值策略**:
   - topK=5 获取更多候选
   - 优先选择 score > 0.25 的结果
   - 如果没有高分结果，返回最佳匹配

## 🔍 故障排查

如果测试失败：

1. **检查索引是否更新**:
   ```bash
   # 检查 manifest.json
   cat ai/index/manifest.json
   
   # 应该看到新的 FAQ ID:
   # - xfinity_billing_price_increase
   # - xfinity_speed_slow
   # - xfinity_internet_disconnected
   # - xfinity_wifi_not_connecting
   ```

2. **检查向量存储文件**:
   ```bash
   # 检查 vector-store.json 是否包含新条目
   # 文件可能很大，使用 grep 搜索
   grep -i "xfinity_billing_price_increase" data/vector-store.json
   ```

3. **检查服务器日志**:
   - 查看 Next.js 开发服务器的控制台输出
   - 查找检索相关的日志信息

4. **验证 FAQ JSON 文件**:
   ```bash
   # 检查 FAQ 文件格式是否正确
   cat content/qa/internet/xfinity-faq.json | jq .
   ```

## ✅ 验收标准

所有测试用例通过的标准：

- ✅ 新添加的4个FAQ条目都能被正确检索到
- ✅ 品牌过滤正确应用（问 xfinity 只返回 xfinity）
- ✅ 查询变体能正确匹配（"慢了" → "慢"）
- ✅ Score >= 0.25 的结果被优先选择
- ✅ 常见问题不再返回 "转人工"

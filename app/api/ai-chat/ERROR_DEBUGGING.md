# AI Chat API 500 错误调试指南

## 常见原因

### 1. 向量存储文件不存在
**症状**: `Vector store load error` 或 `composeAnswer returned undefined`

**解决方案**:
```bash
# 构建向量索引
npm run ai:build-index
# 或
node ai/index/buildIndex.js
```

**检查**:
- 确认 `data/vector-store.json` 文件存在
- 确认文件可读（权限问题）

### 2. composeAnswer 函数内部错误
**症状**: `composeAnswer error` 在服务器日志中

**可能原因**:
- `retrieve` 函数失败
- `getVectorStore().load()` 失败
- `applyGuardrails` 函数错误
- 其他运行时错误

**调试步骤**:
1. 查看服务器控制台日志
2. 查找具体的错误堆栈信息
3. 检查相关函数的实现

### 3. 请求体格式错误
**症状**: `Invalid message` 错误

**检查**:
- 确保请求体包含 `message` 字段
- 确保 `message` 是字符串类型
- 确保 `Content-Type: application/json`

### 4. 文件系统权限问题
**症状**: `EACCES` 或 `ENOENT` 错误

**解决方案**:
- 确保 `data/` 目录存在
- 确保应用有读写权限

## 调试步骤

### 步骤 1: 检查服务器日志
查看 Next.js 开发服务器的控制台输出，查找：
- `AI Chat API Error:`
- `composeAnswer error:`
- `Vector store load error:`

### 步骤 2: 检查向量存储文件
```bash
# 检查文件是否存在
ls -la data/vector-store.json

# 如果不存在，构建索引
npm run ai:build-index
```

### 步骤 3: 测试 API 端点
```bash
# 使用 curl 测试
curl -X POST http://localhost:3000/api/ai-chat \
  -H "Content-Type: application/json" \
  -d '{"message": "test", "sessionId": "test-123"}'
```

### 步骤 4: 检查环境变量
确保所有必需的环境变量都已设置（如果有的话）

## 错误处理改进

当前代码已经添加了：
1. ✅ `composeAnswer` 错误单独捕获
2. ✅ 向量存储加载错误处理
3. ✅ 详细的错误日志（开发环境）
4. ✅ 友好的错误消息返回

## 前端错误处理

前端代码已经：
1. ✅ 检查 HTTP 状态码
2. ✅ 解析 JSON 响应（带错误处理）
3. ✅ 使用 API 返回的 `answer` 字段（如果存在）
4. ✅ 显示友好的错误消息

## 下一步

如果问题仍然存在：
1. 查看服务器控制台的完整错误堆栈
2. 检查 `data/vector-store.json` 文件是否存在和有效
3. 尝试重新构建索引：`npm run ai:build-index`
4. 检查文件权限

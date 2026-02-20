# AI 问答组件使用说明

## 📋 概述

AI 问答组件是一个右下角悬浮的智能问答助手，支持关键词匹配、热门问题引导和未回答问题记录。

## 🎯 功能特性

1. **右下角悬浮按钮**：固定位置，不遮挡主要内容
2. **微动效提示**：每 10 秒轻微晃动并显示气泡提示
3. **热门问题引导**：窗口打开时显示 3 个热门问题，点击即可查看答案
4. **智能匹配**：支持精确匹配、关键词匹配和前缀匹配
5. **未回答问题记录**：匹配不到的问题会自动记录到 `unansweredQuestions` 数组

## 📁 文件结构

```
lib/
  └── ai-question-data.ts      # 问题池数据文件
app/components/
  └── AIQuestionWidget.tsx      # 问答组件
app/
  └── layout.tsx                # 根布局（已集成组件）
```

## 🔧 如何添加新问题

### 方法一：直接编辑 `lib/ai-question-data.ts`

在 `questionPool` 数组中添加新的问答对：

```typescript
export const questionPool: QuestionAnswer[] = [
  // ... 现有问题 ...
  {
    q: '新问题',
    a: '新答案',
  },
]
```

### 方法二：更新热门问题

修改 `hotQuestions` 数组，这些会显示在窗口打开时的引导区域：

```typescript
export const hotQuestions: QuestionAnswer[] = [
  {
    q: '热门问题 1',
    a: '答案 1',
  },
  // ... 最多 3 个热门问题
]
```

## 🎨 自定义样式

组件使用 Tailwind CSS，主要样式类：

- **悬浮按钮**：`bg-gradient-to-r from-blue-600 to-indigo-600`
- **对话窗口**：`bg-white rounded-2xl shadow-2xl`
- **用户消息**：`bg-blue-600 text-white`
- **AI 消息**：`bg-white border border-slate-200`

动画样式已添加到 `app/globals.css`：
- `animate-shake`：晃动动画
- `animate-fade-in`：淡入动画
- `animate-slide-up`：滑入动画

## 🔍 匹配逻辑

组件使用三层匹配策略：

1. **精确匹配**：用户输入与问题池中的问题完全一致
2. **关键词匹配**：用户输入包含问题中的关键词（至少 2 个关键词，或短问题时 1 个）
3. **前缀匹配**：用户输入以问题的前 5 个字符开头

如果都不匹配，会显示默认回复并记录到 `unansweredQuestions` 数组。

## 📊 未回答问题处理

未匹配到的问题会自动添加到 `unansweredQuestions` 数组。您可以：

1. **查看未回答问题**：在浏览器控制台查看 `unansweredQuestions` 数组
2. **发送到后端**：取消注释 `addUnansweredQuestion` 函数中的 API 调用代码
3. **定期分析**：定期检查未回答问题，添加到问题池中

## 🚀 部署建议

1. **性能优化**：问题池较大时，考虑使用搜索库（如 Fuse.js）提升匹配速度
2. **后端集成**：将未回答问题发送到后端 API 进行分析和统计
3. **A/B 测试**：测试不同的热门问题组合，找到最佳转化率
4. **多语言支持**：如需支持英文，可扩展 `ai-question-data.ts` 添加英文问题池

## 📝 注意事项

- 问题池建议保持在 100-200 个问题以内，过多可能影响匹配性能
- 热门问题建议选择用户最常问的 3 个问题
- 问题描述建议使用自然语言，避免过于技术化的表达
- 答案建议简洁明了，控制在 100-200 字以内

## 🔗 相关文件

- `app/components/ChatWidget.tsx`：在线留言组件（不同功能）
- `app/components/contact/MobileContactBar.tsx`：移动端联系栏

# 博客文章目录

本目录用于存放所有博客文章的 Markdown 文件。

## 文件格式

每篇文章必须包含以下 Frontmatter（文件开头）：

```yaml
---
title: 文章标题
date: 2026-01-15
description: 文章描述（用于 SEO 和摘要）
category: 分类名称（如：宽带指南、手机套餐）
image: /图片路径（可选）
---
```

## 文章命名规则

- 使用小写字母和连字符（kebab-case）
- 文件名将自动成为 URL slug，例如 `sample-guide.md` 对应 `/blog/sample-guide`

## 内容编写

- 使用标准 Markdown 语法
- 支持 GitHub Flavored Markdown（GFM）
- 可以使用 HTML 标签（如果需要）

\r\n
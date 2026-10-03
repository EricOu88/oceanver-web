# Hreflang 标签使用指南

本项目已统一实现 hreflang 标签支持，用于告诉搜索引擎页面的语言版本，避免重复内容问题。

## 快速使用

### 1. 导入工具函数

```typescript
import { getHreflangAlternates, getSmartHreflangAlternates } from '@/lib/hreflang-utils'
```

### 2. 在页面 metadata 中使用

**方式一：标准用法（适用于有英文版本的页面）**

```typescript
export const metadata: Metadata = {
  title: '页面标题',
  description: '页面描述',
  alternates: getHreflangAlternates('/internet'),
  // ... 其他配置
}
```

**方式二：智能用法（自动判断是否有英文版本）**

```typescript
export const metadata: Metadata = {
  title: '页面标题',
  description: '页面描述',
  alternates: getSmartHreflangAlternates('/internet/xfinity'),
  // ... 其他配置
}
```

## 函数说明

### `getHreflangAlternates(path, canonicalUrl?)`

生成标准的 hreflang 配置，包含中文和英文版本。

**参数：**
- `path`: 当前页面路径（如 `/internet` 或 `/cellphone/att`）
- `canonicalUrl`: 可选的 canonical URL（如果不提供，将自动生成）

**返回：**
```typescript
{
  canonical: string
  languages: {
    'zh-CN': string
    'en-US': string
  }
}
```

**示例：**
```typescript
// 中文页面：/internet
getHreflangAlternates('/internet')
// 返回：
// {
//   canonical: 'https://oceanver.com/internet',
//   languages: {
//     'zh-CN': 'https://baymediastar.com/internet',
//     'en-US': 'https://baymediastar.com/en/internet'
//   }
// }

// 英文页面：/en/internet
getHreflangAlternates('/en/internet')
// 返回：
// {
//   canonical: 'https://oceanver.com/en/internet',
//   languages: {
//     'zh-CN': 'https://baymediastar.com/internet',
//     'en-US': 'https://baymediastar.com/en/internet'
//   }
// }
```

### `getSmartHreflangAlternates(path, canonicalUrl?)`

智能生成 hreflang 配置。如果页面没有英文版本，只返回 canonical URL。

**参数：**
- `path`: 当前页面路径
- `canonicalUrl`: 可选的 canonical URL

**返回：**
```typescript
{
  canonical: string
  languages?: {
    'zh-CN': string
    'en-US': string
  }
}
```

**使用场景：**
- 某些详细页面（如运营商详情页、FAQ 详情页）可能没有对应的英文版本
- 使用此函数可以避免生成无效的英文链接

## Next.js 自动生成

Next.js 13+ 会自动将 `alternates.languages` 转换为 HTML `<link>` 标签：

```html
<link rel="alternate" hreflang="zh-CN" href="https://baymediastar.com/internet" />
<link rel="alternate" hreflang="en-US" href="https://baymediastar.com/en/internet" />
<link rel="canonical" href="https://oceanver.com/internet" />
```

## 已更新的页面

以下页面已更新为使用统一的 hreflang 配置：

- ✅ `/` (首页)
- ✅ `/about`
- ✅ `/internet`
- ✅ `/cellphone`
- ✅ `/contact`
- ✅ `/security`
- ✅ `/bill-optimization`
- ✅ `/internet/xfinity`
- ✅ `/internet/spectrum`
- ✅ `/en/*` (所有英文页面)

## 注意事项

1. **路径格式**：传入路径时不需要包含域名，只需要相对路径（如 `/internet` 而不是 `https://baymediastar.com/internet`）

2. **英文版本检查**：`getSmartHreflangAlternates` 函数会检查页面是否有英文版本。如果某个页面没有英文版本，建议使用此函数。

3. **Canonical URL**：如果页面已经使用了 `getCanonicalUrl` 函数，可以这样组合：
   ```typescript
   import { getCanonicalUrl } from '@/lib/seo-utils'
   import { getSmartHreflangAlternates } from '@/lib/hreflang-utils'
   
   const canonical = getCanonicalUrl('/internet/xfinity')
   export const metadata: Metadata = {
     alternates: {
       ...getSmartHreflangAlternates('/internet/xfinity', canonical),
     },
   }
   ```

4. **验证**：部署后可以使用以下工具验证 hreflang 标签：
   - Google Search Console
   - [hreflang Tags Testing Tool](https://technicalseo.com/tools/hreflang/)
   - 浏览器开发者工具查看页面源代码

## 常见问题

**Q: 如果页面没有英文版本怎么办？**
A: 使用 `getSmartHreflangAlternates`，它会自动判断并只返回 canonical URL。

**Q: 如何添加新的英文页面？**
A: 在 `lib/hreflang-utils.ts` 的 `hasEnglishVersion` 函数中添加对应的路径模式。

**Q: hreflang 标签会出现在哪里？**
A: Next.js 会自动将 `alternates.languages` 转换为 `<head>` 中的 `<link>` 标签。

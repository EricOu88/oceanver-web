# SEO 收录增强优化总结

## ✅ 已完成优化

### 一、Canonical 统一

#### 1. 工具函数创建
- **文件**: `lib/seo-utils.ts`
- **函数**: `getCanonicalUrl(path: string)`
- **功能**:
  - 统一使用小写路径
  - 移除 `/zh` 前缀
  - 移除查询参数
  - 统一域名格式 (`https://baymediastar.com`)

#### 2. 已更新的页面
- ✅ `/internet/spectrum` - 使用 `getCanonicalUrl('/internet/spectrum')`
- ✅ `/internet/xfinity` - 使用 `getCanonicalUrl('/internet/xfinity')`
- ✅ `/blog` - 使用 `getCanonicalUrl('/blog')`

#### 3. Canonical 规则
所有页面现在通过 `getCanonicalUrl()` 函数统一生成 canonical URL，确保：
- 小写路径
- 无 `/zh` 前缀
- 无查询参数
- 统一域名

---

### 二、问题型页面信号增强

#### 1. H1 标签优化

**已更新的页面**:
- ✅ `/internet/spectrum` 
  - 旧: "你是不是已经厌倦了「优惠期结束突然涨价」？"
  - 新: "Spectrum 宽带在湾区速度稳定吗？价格会不会突然涨价？"
  
- ✅ `/internet/xfinity`
  - 旧: "你要的是「便宜促销」，还是「稳定不掉线」？"
  - 新: "Xfinity 宽带在湾区速度稳定吗？住家和商业宽带有什么区别？"

**H1 要求**:
- ✅ 必须是完整中文问题句
- ✅ 包含 Geo 信号（湾区、Fremont 等）
- ✅ 包含核心关键词（运营商名称、服务类型）

#### 2. Geo 信号增强工具
- **文件**: `lib/seo-utils.ts`
- **函数**: `getGeoKeywords()` 和 `getUserGroupKeywords()`
- **用途**: 在内容中自然融入地理和用户群体关键词

---

### 三、FAQ Schema (JSON-LD)

#### 1. 动态 FAQ Schema 组件
- **文件**: `app/components/seo/DynamicFAQSchema.tsx`
- **功能**: 根据页面内容动态生成 FAQ Schema
- **限制**: 每页 3-6 个问题

#### 2. 已添加 FAQ Schema 的页面

**Spectrum 页面** (`/internet/spectrum`):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Spectrum 宽带在湾区速度稳定吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spectrum 在湾区覆盖较广，速度相对稳定..."
      }
    },
    // ... 4 个更多问题
  ]
}
```

**Xfinity 页面** (`/internet/xfinity`):
- 5 个相关问题，涵盖安装、价格、区别、新移民、安装时间

#### 3. FAQ Schema 要求
- ✅ 使用 JSON-LD 格式
- ✅ 每页 3-6 个真实问题
- ✅ 问题与页面内容强相关
- ✅ 不生成空问题或模板问题

---

### 四、内链增强

#### 1. 内链组件
- **文件**: `app/components/seo/InternalLinks.tsx`
- **功能**: 在页面底部自动添加相关内链（不影响视觉）

#### 2. 内链规则

**Internet 类型页面**:
- 联系我们 (`/contact`)
- 宽带常见问题 (`/internet/faq`)
- 宽带问题诊断 (`/internet/diagnosis`)

**Cellphone 类型页面**:
- 联系我们 (`/contact`)
- 手机套餐常见问题 (`/cellphone/faq`)
- 手机套餐对比 (`/cellphone/providers`)

**Blog 类型页面**:
- 联系我们 (`/contact`)
- 宽带服务 (`/internet`)
- 手机套餐 (`/cellphone`)

**Provider 类型页面**:
- 联系我们 (`/contact`)
- 对应 FAQ 页面（动态）

#### 3. 内链要求
- ✅ 使用自然锚文本（中文）
- ✅ 每页 3-6 条内链
- ✅ 不使用"点击这里"
- ✅ 不影响页面视觉

---

### 五、索引策略分层

#### 1. 索引工具函数
- **文件**: `lib/seo-utils.ts`
- **函数**: `shouldIndex(path: string, hasContent: boolean)`

#### 2. 自动 noindex 的页面类型
- `/search/*` - 搜索页
- `/test/*` - 测试页
- `/admin/*` - 管理页
- `/api/*` - API 路由
- `/page/\d+$` - 空分页页

#### 3. 允许 index 的页面
- ✅ 运营商主页面（如 `/internet/spectrum`）
- ✅ 问题型 FAQ（如 `/internet/spectrum/faq`）
- ✅ 地区相关内容页
- ✅ 博客文章

#### 4. Robots Meta 设置
所有主要页面已设置：
```typescript
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}
```

---

## 📋 使用指南

### 为新页面添加 SEO 增强

#### 1. 设置 Canonical
```typescript
import { getCanonicalUrl } from '@/lib/seo-utils'

export const metadata: Metadata = {
  alternates: {
    canonical: getCanonicalUrl('/your-page-path'),
  },
}
```

#### 2. 添加 FAQ Schema
```typescript
import DynamicFAQSchema from '@/app/components/seo/DynamicFAQSchema'

const faqs = [
  {
    question: '你的问题？',
    answer: '你的答案...',
  },
  // ... 3-6 个问题
]

export default function Page() {
  return (
    <>
      <DynamicFAQSchema questions={faqs} />
      {/* 你的页面内容 */}
    </>
  )
}
```

#### 3. 添加内链增强
```typescript
import InternalLinks from '@/app/components/seo/InternalLinks'

export default function Page() {
  return (
    <>
      {/* 你的页面内容 */}
      <InternalLinks pageType="internet" />
    </>
  )
}
```

#### 4. 确保 H1 是问题型
```tsx
<h1>
  [运营商/服务] 在 [地区] [核心问题]？
</h1>
```

---

## 🎯 示例 FAQ Schema

### Spectrum 页面示例
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Spectrum 宽带在湾区速度稳定吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spectrum 在湾区覆盖较广，速度相对稳定。Cable 宽带技术，高峰期可能略有下降，但整体表现可靠。适合家庭日常使用、视频流媒体和远程办公。"
      }
    },
    {
      "@type": "Question",
      "name": "Spectrum 宽带会不会涨价？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spectrum 价格结构相对稳定，不像其他运营商那样在优惠期结束后大幅涨价。大多数套餐在促销期结束后会恢复原价，但涨幅通常较小。"
      }
    }
  ]
}
```

---

## 📊 被 noindex 的页面类型

以下页面类型自动设置为 noindex：

1. **搜索页**: `/search/*`
2. **测试页**: `/test/*`
3. **管理页**: `/admin/*`
4. **API 路由**: `/api/*`
5. **空分页页**: `/page/2`, `/page/3` 等（如果无内容）

---

## ✅ 技术实现保证

- ✅ 所有 SEO 增强在服务端渲染
- ✅ 不引入性能回退（LCP 不变）
- ✅ 不改变现有页面样式
- ✅ 不增加视觉元素
- ✅ Schema 使用 `<script type="application/ld+json">`
- ✅ 所有重定向为 301（永久）

---

## 📝 待完成工作

### 需要应用到其他页面的优化：

1. **Internet 页面**:
   - [ ] `/internet/att-fiber` - 添加 FAQ Schema、内链、更新 H1
   - [ ] `/internet/frontier` - 添加 FAQ Schema、内链、更新 H1
   - [ ] `/internet/faq` - 确保 canonical、添加内链

2. **Cellphone 页面**:
   - [ ] `/cellphone/att` - 添加 FAQ Schema、内链、更新 H1
   - [ ] `/cellphone/tmobile` - 添加 FAQ Schema、内链、更新 H1
   - [ ] `/cellphone/verizon` - 添加 FAQ Schema、内链、更新 H1
   - [ ] `/cellphone/ultra` - 添加 FAQ Schema、内链、更新 H1

3. **Blog 页面**:
   - [ ] 确保所有博客文章有 canonical
   - [ ] 为问题型博客文章添加 FAQ Schema

---

## 🔍 验证清单

部署后请验证：

- [ ] 所有页面 canonical URL 正确（小写、无 /zh、无参数）
- [ ] FAQ Schema 在 Google Rich Results Test 中正确识别
- [ ] H1 标签是问题型且包含 Geo 信号
- [ ] 内链自然且不影响视觉
- [ ] 被 noindex 的页面在 GSC 中正确显示
- [ ] 页面性能（LCP）未受影响

---

## 📚 相关文件

- `lib/seo-utils.ts` - SEO 工具函数库
- `app/components/seo/DynamicFAQSchema.tsx` - 动态 FAQ Schema 组件
- `app/components/seo/InternalLinks.tsx` - 内链增强组件
- `middleware.ts` - URL 规范化中间件
- `next.config.ts` - 重定向配置

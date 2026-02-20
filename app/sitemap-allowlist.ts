// 只保留服务页、FAQ 列表页（博客正文页和独立 FAQ 页面会动态添加）
export const SITEMAP_ALLOWLIST = [
  // 首页
  '/',
  // 宽带服务页
  '/internet',
  '/internet/providers',
  '/internet/xfinity',
  '/internet/att-fiber',
  '/internet/frontier',
  '/internet/price-hike',
  '/internet/diagnosis',
  '/internet/faq',
  '/internet/providers/faq',
  // 手机服务页
  '/cellphone',
  '/cellphone/providers',
  '/cellphone/att',
  '/cellphone/att/business-faq',
  '/cellphone/att/family-faq',
  '/cellphone/tmobile',
  '/cellphone/verizon',
  '/cellphone/ultra',
  '/cellphone/genmobile',
  '/cellphone/government',
  // 账单优化服务页
  '/bill-optimization',
  // FAQ 列表页（独立 FAQ 页面会通过 FAQIndex 动态添加）
  '/internet/frontier/faq',
  '/internet/att/fiber/faq',
  '/internet/xfinity/faq',
  // 注意：博客正文页会通过 getAllPostSlugs() 动态添加到 sitemap
  // 独立 FAQ 页面会通过对应的 FAQIndex 动态添加
];

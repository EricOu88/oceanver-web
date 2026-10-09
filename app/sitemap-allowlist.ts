// Oceanver Phase 2 分批发布候选。
//
// Phase 1 期间 app/sitemap.ts 仍返回空数组，因此这里不会让页面提前进入 sitemap。
// 真正开放前，仍需完成 docs/phase2-geo-release-priority.md 中的发布审计。

// Phase 2 第一批：先建立“问题判断站”的主题权威。
// 8 个核心答案页 + 4 个网络入口页。
export const SITEMAP_ALLOWLIST = [
  '/',
  // 核心答案页
  '/bill-optimization',
  '/internet/price-hike',
  '/cellphone/price-hike',
  '/cellphone/family-plan-exit-account-holder',
  '/cellphone/faq/promo-credit-not-received',
  '/internet/faq/after-cancel-final-bill',
  '/cellphone/family-plan-guide',
  '/internet/home-network-guide',

  // 网络入口页
  '/cellphone',
  '/internet',
  '/cellphone/faq',
  '/internet/faq',
] as const;

// Phase 2 第二批候选。
// 不自动进入 sitemap；第一批有抓取 / 曝光 / AI 引用数据后再复核。
export const PHASE2_SECOND_BATCH_CANDIDATES = [
  '/cellphone/diagnosis',
  '/internet/diagnosis',
  '/cellphone/faq/no-ssn-us-cellphone-internet',
  '/internet/providers',
  '/cellphone/providers',
  '/internet/xfinity',
  '/internet/att-fiber',
  '/internet/spectrum',
  '/internet/frontier',
] as const;

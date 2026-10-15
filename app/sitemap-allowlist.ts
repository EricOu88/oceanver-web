// Oceanver Phase 2 分批发布候选。
//
// Phase 1 期间 app/sitemap.ts 仍返回空数组，因此这里不会让页面提前进入 sitemap。
// 真正开放前，仍需完成 docs/phase2-geo-release-priority.md 中的发布审计。

// Phase 2 第一批：仅开放最初批准的首页与三个核心答案页。
export const SITEMAP_ALLOWLIST = [
  '/',
  '/bill-optimization',
  '/internet/price-hike',
  '/cellphone/price-hike',
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

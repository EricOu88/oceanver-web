// Oceanver Phase 2 分批发布候选。
//
// Phase 2 小规模试运行：只有两篇针对现有账单的涨价诊断页面可索引。
// 首页和账单总指南继续 noindex，之后需单独审核再决定是否开放。
// 该列表同时驱动 sitemap 与 proxy 的索引响应，避免状态不一致。
export const SITEMAP_ALLOWLIST = [
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

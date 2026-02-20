/**
 * Frontier FAQ Sitemap 专用数据源
 * 只包含 slug 和 lastModified，用于生成 sitemap
 * 正文内容在 faq-content.ts 中
 */
export interface FrontierFAQSitemapItem {
  slug: string
  lastModified: string
}

// 售前常见问题（申请前需要了解的问题）
export const frontierPreSaleFAQIndex: FrontierFAQSitemapItem[] = [
  // 覆盖相关
  {
    slug: 'frontier-coverage-areas',
    lastModified: '2026-01-20',
  },
  // 技术相关
  {
    slug: 'frontier-fiber-vs-dsl',
    lastModified: '2026-01-20',
  },
  {
    slug: 'frontier-ont-box',
    lastModified: '2026-01-20',
  },
  // 速度相关
  {
    slug: 'frontier-speed-performance',
    lastModified: '2026-01-20',
  },
  {
    slug: 'frontier-speed-slower-than-advertised',
    lastModified: '2026-01-20',
  },
  {
    slug: 'frontier-peak-time-performance',
    lastModified: '2026-01-20',
  },
  // 安装相关
  {
    slug: 'frontier-installation-time',
    lastModified: '2026-01-20',
  },
  {
    slug: 'frontier-appointment-issues',
    lastModified: '2026-01-20',
  },
  // 费用相关（售前）
  {
    slug: 'frontier-hidden-fees',
    lastModified: '2026-01-20',
  },
  // 用户适合度
  {
    slug: 'frontier-international-students-vs-long-term',
    lastModified: '2026-01-20',
  },
]

// 售后常见问题（使用中遇到的问题）
export const frontierAfterSaleFAQIndex: FrontierFAQSitemapItem[] = [
  // 故障相关
  {
    slug: 'frontier-frequent-disconnections',
    lastModified: '2026-01-20',
  },
  // 合约和取消相关
  {
    slug: 'frontier-contract-early-termination',
    lastModified: '2026-01-20',
  },
  {
    slug: 'frontier-cancellation-tips',
    lastModified: '2026-01-20',
  },
  // 费用相关（售后）
  {
    slug: 'frontier-restocking-fee',
    lastModified: '2026-01-20',
  },
  // 客服相关
  {
    slug: 'frontier-customer-service',
    lastModified: '2026-01-20',
  },
  {
    slug: 'frontier-billing-errors',
    lastModified: '2026-01-20',
  },
]

// 合并所有问题（用于 sitemap 和总览页）
export const frontierFAQIndex: FrontierFAQSitemapItem[] = [
  ...frontierPreSaleFAQIndex,
  ...frontierAfterSaleFAQIndex,
]

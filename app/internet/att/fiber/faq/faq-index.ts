/**
 * AT&T Fiber FAQ Sitemap 专用数据源
 * 只包含 slug 和 lastModified，用于生成 sitemap
 * 正文内容在 faq-content.ts 中
 */
export interface ATTFiberFAQSitemapItem {
  slug: string
  lastModified: string
}

// 住家宽带售前常见问题（申请前需要了解的问题）
export const attFiberResidentialPreSaleFAQIndex: ATTFiberFAQSitemapItem[] = [
  {
    slug: 'att-fiber-coverage-areas',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-fiber-true-fiber-to-home',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-fiber-speed-performance',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-fiber-price-increase',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-fiber-contract',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-fiber-vs-xfinity-spectrum',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-fiber-gaming-remote-work',
    lastModified: '2026-01-20',
  },
]

// 住家宽带售后常见问题（使用中遇到的问题）
export const attFiberResidentialAfterSaleFAQIndex: ATTFiberFAQSitemapItem[] = [
  {
    slug: 'att-fiber-frequent-disconnections',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-fiber-outage-duration',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-fiber-bill-sudden-increase',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-fiber-equipment-fee',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-fiber-cancel-termination-fee',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-fiber-customer-service',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-fiber-buried-wire-installation',
    lastModified: '2026-01-20',
  },
]

// 商业宽带售前常见问题
export const attFiberBusinessPreSaleFAQIndex: ATTFiberFAQSitemapItem[] = [
  {
    slug: 'att-business-vs-residential',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-business-fiber-stability',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-business-static-ip',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-business-installation-tax-fee',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-business-multi-device',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-business-installation-time',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-business-fiber-price-value',
    lastModified: '2026-01-20',
  },
]

// 商业宽带售后常见问题
export const attFiberBusinessAfterSaleFAQIndex: ATTFiberFAQSitemapItem[] = [
  {
    slug: 'att-business-outage-compensation',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-business-sla',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-business-moving-transfer',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-business-early-termination',
    lastModified: '2026-01-20',
  },
  {
    slug: 'att-business-billing-errors',
    lastModified: '2026-01-20',
  },
]

// 合并所有问题（用于 sitemap 和总览页）
export const attFiberFAQIndex: ATTFiberFAQSitemapItem[] = [
  ...attFiberResidentialPreSaleFAQIndex,
  ...attFiberResidentialAfterSaleFAQIndex,
  ...attFiberBusinessPreSaleFAQIndex,
  ...attFiberBusinessAfterSaleFAQIndex,
]

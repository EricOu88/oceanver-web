/**
 * Spectrum FAQ Sitemap 专用数据源
 * 只包含 slug 和 lastModified，用于生成 sitemap
 * 正文内容在 faq-content.ts 中
 */
export interface SpectrumFAQSitemapItem {
  slug: string
  lastModified: string
}

// 售前常见问题（申请前需要了解的问题）
export const spectrumPreSaleFAQIndex: SpectrumFAQSitemapItem[] = [
  // 价格相关（售前）
  {
    slug: 'spectrum-price-increase',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-first-year-promo',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-hidden-fees',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-business-price',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-wifi-fee',
    lastModified: '2026-01-20',
  },
  // 安装相关
  {
    slug: 'spectrum-install-time',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-new-address',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-self-install',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-technician-required',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-no-previous-line',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-weekend-install',
    lastModified: '2026-01-20',
  },
  // 公寓和房型相关
  {
    slug: 'spectrum-apartment-install',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-apartment-not-available',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-hoa-restriction',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-old-house',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-townhouse-vs-house',
    lastModified: '2026-01-20',
  },
  // 速度和性能相关（售前了解）
  {
    slug: 'spectrum-speed',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-peak-time',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-gaming',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-zoom',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-vs-att',
    lastModified: '2026-01-20',
  },
  // 设备和路由器相关（售前了解）
  {
    slug: 'spectrum-own-router',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-modem-fee',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-router-activation',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-wifi-coverage',
    lastModified: '2026-01-20',
  },
  // 合约相关（售前了解）
  {
    slug: 'spectrum-no-contract',
    lastModified: '2026-01-20',
  },
  // 服务类型
  {
    slug: 'spectrum-residential-vs-business',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-bay-area',
    lastModified: '2026-01-20',
  },
]

// 售后常见问题（使用中遇到的问题）
export const spectrumAfterSaleFAQIndex: SpectrumFAQSitemapItem[] = [
  // 价格相关（售后）
  {
    slug: 'spectrum-retention',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-bill-surprise',
    lastModified: '2026-01-20',
  },
  // 故障排查
  {
    slug: 'spectrum-troubleshooting',
    lastModified: '2026-01-20',
  },
  // 合约和取消相关（售后）
  {
    slug: 'spectrum-cancel-tips',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-early-termination',
    lastModified: '2026-01-20',
  },
  // 设备归还
  {
    slug: 'spectrum-equipment-return',
    lastModified: '2026-01-20',
  },
  // 搬家服务
  {
    slug: 'spectrum-moving-service',
    lastModified: '2026-01-20',
  },
  // 服务和支持
  {
    slug: 'spectrum-chinese-support',
    lastModified: '2026-01-20',
  },
  {
    slug: 'spectrum-short-term-users',
    lastModified: '2026-01-20',
  },
]

// 合并所有问题（用于 sitemap 和总览页）
export const spectrumFAQIndex: SpectrumFAQSitemapItem[] = [
  ...spectrumPreSaleFAQIndex,
  ...spectrumAfterSaleFAQIndex,
]

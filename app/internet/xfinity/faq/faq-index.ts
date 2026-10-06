/**
 * Xfinity 独立 FAQ 详情页发布清单
 *
 * 原历史清单包含 115 个独立 URL。
 * Oceanver 现阶段只保留具有明确“问题判断”价值的独立详情页。
 * 其余问题仍可留在 FAQ 总览中，但不再生成独立详情 URL。
 */
export interface XfinityFAQSitemapItem {
  slug: string
  lastModified: string
}

// 购买前/套餐选择类独立详情页不再发布。
// 保留导出名称，避免其他旧代码引用时报错。
export const xfinityResidentialPreSaleFAQIndex: XfinityFAQSitemapItem[] = []

// 保留 20 个高价值售后/诊断型独立详情页。
export const xfinityResidentialAfterSaleFAQIndex: XfinityFAQSitemapItem[] = [
  { slug: 'xfinity-bill-sudden-increase', lastModified: '2026-10-06' },
  { slug: 'xfinity-billing-error-appeal', lastModified: '2026-10-06' },
  { slug: 'xfinity-overcharge-refund', lastModified: '2026-10-06' },
  { slug: 'xfinity-router-fee', lastModified: '2026-10-06' },
  { slug: 'xfinity-equipment-not-returned', lastModified: '2026-10-06' },

  { slug: 'xfinity-outage', lastModified: '2026-10-06' },
  { slug: 'xfinity-night-slow', lastModified: '2026-10-06' },
  { slug: 'xfinity-restart-not-working', lastModified: '2026-10-06' },
  { slug: 'xfinity-technician-visit-fee', lastModified: '2026-10-06' },
  { slug: 'xfinity-judge-line-issue', lastModified: '2026-10-06' },

  { slug: 'xfinity-over-data-fee', lastModified: '2026-10-06' },
  { slug: 'xfinity-check-data-usage', lastModified: '2026-10-06' },

  { slug: 'xfinity-cancel-before-contract', lastModified: '2026-10-06' },
  { slug: 'xfinity-mid-month-cancel-refund', lastModified: '2026-10-06' },
  { slug: 'xfinity-moving-transfer', lastModified: '2026-10-06' },
  { slug: 'xfinity-new-address-no-coverage', lastModified: '2026-10-06' },
  { slug: 'xfinity-move-reinstallation-fee', lastModified: '2026-10-06' },
  { slug: 'xfinity-pause-service', lastModified: '2026-10-06' },

  { slug: 'xfinity-unpaid-affect-credit', lastModified: '2026-10-06' },
  { slug: 'xfinity-network-issue-compensation', lastModified: '2026-10-06' },
]

// 商业套餐选择类独立详情页暂不发布。
export const xfinityBusinessPreSaleFAQIndex: XfinityFAQSitemapItem[] = []
export const xfinityBusinessAfterSaleFAQIndex: XfinityFAQSitemapItem[] = []

export const xfinityFAQIndex: XfinityFAQSitemapItem[] = [
  ...xfinityResidentialPreSaleFAQIndex,
  ...xfinityResidentialAfterSaleFAQIndex,
  ...xfinityBusinessPreSaleFAQIndex,
  ...xfinityBusinessAfterSaleFAQIndex,
]

/**
 * AT&T Fiber 独立 FAQ 详情页发布清单
 *
 * 原历史清单包含 26 个独立 URL。
 * Oceanver 现阶段只保留具有明确“问题判断 / 售后诊断”价值的独立详情页。
 * 其他问题仍可保留在 FAQ 总览或数据文件中，但不再生成独立详情 URL。
 */
export interface ATTFiberFAQSitemapItem {
  slug: string
  lastModified: string
}

// 购买前选择类独立详情页不再发布。
// 仅保留“涨价”这一项，因为它属于持续使用中的账单判断问题。
export const attFiberResidentialPreSaleFAQIndex: ATTFiberFAQSitemapItem[] = [
  { slug: 'att-fiber-price-increase', lastModified: '2026-01-20' },
]

// 保留 7 个高价值售后 / 诊断型独立详情页。
export const attFiberResidentialAfterSaleFAQIndex: ATTFiberFAQSitemapItem[] = [
  { slug: 'att-fiber-frequent-disconnections', lastModified: '2026-01-20' },
  { slug: 'att-fiber-outage-duration', lastModified: '2026-01-20' },
  { slug: 'att-fiber-bill-sudden-increase', lastModified: '2026-01-20' },
  { slug: 'att-fiber-equipment-fee', lastModified: '2026-01-20' },
  { slug: 'att-fiber-cancel-termination-fee', lastModified: '2026-01-20' },
  { slug: 'att-fiber-customer-service', lastModified: '2026-01-20' },
  { slug: 'att-fiber-buried-wire-installation', lastModified: '2026-01-20' },
]

// 商业套餐 / SLA / 静态 IP / 价值比较等内容不再作为 Oceanver 独立详情页发布。
export const attFiberBusinessPreSaleFAQIndex: ATTFiberFAQSitemapItem[] = []
export const attFiberBusinessAfterSaleFAQIndex: ATTFiberFAQSitemapItem[] = []

export const attFiberFAQIndex: ATTFiberFAQSitemapItem[] = [
  ...attFiberResidentialPreSaleFAQIndex,
  ...attFiberResidentialAfterSaleFAQIndex,
  ...attFiberBusinessPreSaleFAQIndex,
  ...attFiberBusinessAfterSaleFAQIndex,
]
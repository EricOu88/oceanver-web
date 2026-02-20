/**
 * Xfinity FAQ Sitemap 专用数据源
 * 只包含 slug 和 lastModified，用于生成 sitemap
 * 正文内容在 faq-content.ts 中
 */
export interface XfinityFAQSitemapItem {
  slug: string
  lastModified: string
}

// 住家宽带售前常见问题（45个）
export const xfinityResidentialPreSaleFAQIndex: XfinityFAQSitemapItem[] = [
  // 覆盖 & 安装
  { slug: 'xfinity-coverage-areas', lastModified: '2026-01-21' },
  { slug: 'xfinity-apartment-install', lastModified: '2026-01-21' },
  { slug: 'xfinity-installation-time', lastModified: '2026-01-21' },
  { slug: 'xfinity-self-install', lastModified: '2026-01-21' },
  { slug: 'xfinity-new-address-first-install', lastModified: '2026-01-21' },
  // 套餐 & 价格
  { slug: 'xfinity-price-increase', lastModified: '2026-01-21' },
  { slug: 'xfinity-first-year-promo', lastModified: '2026-01-21' },
  { slug: 'xfinity-promo-end-increase', lastModified: '2026-01-21' },
  { slug: 'xfinity-permanent-low-price', lastModified: '2026-01-21' },
  { slug: 'xfinity-vs-spectrum-price', lastModified: '2026-01-21' },
  // 合约 & 取消
  { slug: 'xfinity-contract-early-termination', lastModified: '2026-01-21' },
  { slug: 'xfinity-contract-12-24-months', lastModified: '2026-01-21' },
  { slug: 'xfinity-early-cancellation-fee', lastModified: '2026-01-21' },
  { slug: 'xfinity-auto-renewal', lastModified: '2026-01-21' },
  { slug: 'xfinity-no-contract-option', lastModified: '2026-01-21' },
  // 速度 & 使用体验
  { slug: 'xfinity-speed-real-performance', lastModified: '2026-01-21' },
  { slug: 'xfinity-peak-time-slow', lastModified: '2026-01-21' },
  { slug: 'xfinity-gaming-zoom-stable', lastModified: '2026-01-21' },
  { slug: 'xfinity-upload-speed-slow', lastModified: '2026-01-21' },
  { slug: 'xfinity-cable-vs-fiber', lastModified: '2026-01-21' },
  // 流量 & 设备
  { slug: 'xfinity-data-cap', lastModified: '2026-01-21' },
  { slug: 'xfinity-over-data-cap', lastModified: '2026-01-21' },
  { slug: 'xfinity-unlimited-data-worth', lastModified: '2026-01-21' },
  { slug: 'xfinity-router-rental-required', lastModified: '2026-01-21' },
  { slug: 'xfinity-own-router', lastModified: '2026-01-21' },
  // 对比类（强 SEO）
  { slug: 'xfinity-vs-spectrum', lastModified: '2026-01-21' },
  { slug: 'xfinity-vs-att-fiber', lastModified: '2026-01-21' },
  { slug: 'xfinity-for-students', lastModified: '2026-01-21' },
  { slug: 'xfinity-short-term-months', lastModified: '2026-01-21' },
  { slug: 'xfinity-frequent-moving', lastModified: '2026-01-21' },
  // 其他高频疑问
  { slug: 'xfinity-chinese-support', lastModified: '2026-01-21' },
  { slug: 'xfinity-billing-structure', lastModified: '2026-01-21' },
  { slug: 'xfinity-hidden-fees', lastModified: '2026-01-21' },
  { slug: 'xfinity-installation-fee-waived', lastModified: '2026-01-21' },
  { slug: 'xfinity-student-discount', lastModified: '2026-01-21' },
  { slug: 'xfinity-installment-payment', lastModified: '2026-01-21' },
  { slug: 'xfinity-online-order', lastModified: '2026-01-21' },
  { slug: 'xfinity-need-ssn', lastModified: '2026-01-21' },
  { slug: 'xfinity-bad-credit', lastModified: '2026-01-21' },
  { slug: 'xfinity-force-tv-bundle', lastModified: '2026-01-21' },
  { slug: 'xfinity-internet-only', lastModified: '2026-01-21' },
  { slug: 'xfinity-upgrade-plan', lastModified: '2026-01-21' },
  { slug: 'xfinity-downgrade-plan', lastModified: '2026-01-21' },
  { slug: 'xfinity-force-speed-price-increase', lastModified: '2026-01-21' },
  { slug: 'xfinity-long-term-use', lastModified: '2026-01-21' },
]

// 住家宽带售后常见问题（50个）
export const xfinityResidentialAfterSaleFAQIndex: XfinityFAQSitemapItem[] = [
  // 账单 & 涨价
  { slug: 'xfinity-bill-sudden-increase', lastModified: '2026-01-21' },
  { slug: 'xfinity-lower-bill-after-promo', lastModified: '2026-01-21' },
  { slug: 'xfinity-reapply-promo', lastModified: '2026-01-21' },
  { slug: 'xfinity-retention-department', lastModified: '2026-01-21' },
  { slug: 'xfinity-bill-changes', lastModified: '2026-01-21' },
  // 合约 & 注销
  { slug: 'xfinity-cancel-before-contract', lastModified: '2026-01-21' },
  { slug: 'xfinity-cancellation-fee-calculation', lastModified: '2026-01-21' },
  { slug: 'xfinity-mid-month-cancel-refund', lastModified: '2026-01-21' },
  { slug: 'xfinity-equipment-not-returned', lastModified: '2026-01-21' },
  { slug: 'xfinity-cancel-must-store', lastModified: '2026-01-21' },
  // 网络问题
  { slug: 'xfinity-outage', lastModified: '2026-01-21' },
  { slug: 'xfinity-outage-duration', lastModified: '2026-01-21' },
  { slug: 'xfinity-night-slow', lastModified: '2026-01-21' },
  { slug: 'xfinity-restart-not-working', lastModified: '2026-01-21' },
  { slug: 'xfinity-technician-visit-fee', lastModified: '2026-01-21' },
  // 设备问题
  { slug: 'xfinity-router-fee', lastModified: '2026-01-21' },
  { slug: 'xfinity-equipment-broken-responsibility', lastModified: '2026-01-21' },
  { slug: 'xfinity-replace-equipment-cost', lastModified: '2026-01-21' },
  { slug: 'xfinity-own-router-unstable', lastModified: '2026-01-21' },
  { slug: 'xfinity-mesh-router-support', lastModified: '2026-01-21' },
  // 流量问题
  { slug: 'xfinity-over-data-fee', lastModified: '2026-01-21' },
  { slug: 'xfinity-auto-charge-overage', lastModified: '2026-01-21' },
  { slug: 'xfinity-check-data-usage', lastModified: '2026-01-21' },
  { slug: 'xfinity-unlimited-data-cancel', lastModified: '2026-01-21' },
  { slug: 'xfinity-gaming-streaming-overage', lastModified: '2026-01-21' },
  // 账户 & 客服
  { slug: 'xfinity-customer-service', lastModified: '2026-01-21' },
  { slug: 'xfinity-chinese-customer-service-hard', lastModified: '2026-01-21' },
  { slug: 'xfinity-billing-error-appeal', lastModified: '2026-01-21' },
  { slug: 'xfinity-overcharge-refund', lastModified: '2026-01-21' },
  { slug: 'xfinity-complaint-useful', lastModified: '2026-01-21' },
  // 搬家 & 转移
  { slug: 'xfinity-moving-transfer', lastModified: '2026-01-21' },
  { slug: 'xfinity-new-address-no-coverage', lastModified: '2026-01-21' },
  { slug: 'xfinity-move-reinstall-equipment', lastModified: '2026-01-21' },
  { slug: 'xfinity-move-recalculate-contract', lastModified: '2026-01-21' },
  { slug: 'xfinity-move-reinstallation-fee', lastModified: '2026-01-21' },
  // 其他真实问题
  { slug: 'xfinity-sneaky-add-service', lastModified: '2026-01-21' },
  { slug: 'xfinity-prevent-bill-scams', lastModified: '2026-01-21' },
  { slug: 'xfinity-auto-payment-safe', lastModified: '2026-01-21' },
  { slug: 'xfinity-forget-return-equipment', lastModified: '2026-01-21' },
  { slug: 'xfinity-unpaid-affect-credit', lastModified: '2026-01-21' },
  { slug: 'xfinity-pause-service', lastModified: '2026-01-21' },
  { slug: 'xfinity-suspend-duration', lastModified: '2026-01-21' },
  { slug: 'xfinity-loyal-customer-pricing', lastModified: '2026-01-21' },
  { slug: 'xfinity-change-name-new-account', lastModified: '2026-01-21' },
  { slug: 'xfinity-store-customer-service-different', lastModified: '2026-01-21' },
  { slug: 'xfinity-technician-visit-experience', lastModified: '2026-01-21' },
  { slug: 'xfinity-network-issue-compensation', lastModified: '2026-01-21' },
  { slug: 'xfinity-judge-line-issue', lastModified: '2026-01-21' },
  { slug: 'xfinity-pause-only-not-cancel', lastModified: '2026-01-21' },
  { slug: 'xfinity-common-pitfalls', lastModified: '2026-01-21' },
]

// 商业宽带售前常见问题（10个）
export const xfinityBusinessPreSaleFAQIndex: XfinityFAQSitemapItem[] = [
  { slug: 'xfinity-business-vs-residential', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-stability', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-static-ip', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-restaurant-office', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-installation-time', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-sla', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-multi-location-billing', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-price-vs-residential', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-contract-duration', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-worth-it', lastModified: '2026-01-21' },
]

// 商业宽带售后常见问题（10个）
export const xfinityBusinessAfterSaleFAQIndex: XfinityFAQSitemapItem[] = [
  { slug: 'xfinity-business-outage-compensation', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-sla-not-met', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-early-termination', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-cancellation-fee-calculation', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-billing-error', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-move-transfer', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-tech-support-response', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-upgrade-line', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-multi-store-management', lastModified: '2026-01-21' },
  { slug: 'xfinity-business-common-pitfalls', lastModified: '2026-01-21' },
]

// 合并所有问题（用于 sitemap 和总览页）
export const xfinityFAQIndex: XfinityFAQSitemapItem[] = [
  ...xfinityResidentialPreSaleFAQIndex,
  ...xfinityResidentialAfterSaleFAQIndex,
  ...xfinityBusinessPreSaleFAQIndex,
  ...xfinityBusinessAfterSaleFAQIndex,
]


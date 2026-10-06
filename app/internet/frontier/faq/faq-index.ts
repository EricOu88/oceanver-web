export interface FrontierFAQCategory {
  title: string
  slugs: string[]
}

export const frontierFAQCategories: FrontierFAQCategory[] = [
  {
    title: '地址与技术类型',
    slugs: [
      'frontier-address-availability',
      'frontier-neighborhood-availability',
      'frontier-fiber-or-dsl',
    ],
  },
  {
    title: '是否值得更换',
    slugs: [
      'frontier-better-than-current',
      'frontier-dont-rush-switch',
      'frontier-worth-comparing',
    ],
  },
  {
    title: '网速与 Wi-Fi',
    slugs: [
      'frontier-slow-speed-package',
      'frontier-speed-test-normal',
      'frontier-room-wifi-slow',
    ],
  },
  {
    title: '账单与长期成本',
    slugs: [
      'frontier-advertised-price',
      'frontier-bill-increase',
      'frontier-long-term-cost',
    ],
  },
  {
    title: '安装与设备',
    slugs: [
      'frontier-install-preparation',
      'frontier-technician-visit',
      'frontier-router-gateway',
    ],
  },
  {
    title: '取消、账户与其他',
    slugs: [
      'frontier-cancel-old-service',
      'frontier-cancel-frontier',
      'frontier-human-verification',
    ],
  },
]

export const frontierFAQIndex = frontierFAQCategories.flatMap((category) =>
  category.slugs.map((slug) => ({ slug, category: category.title })),
)

// Phase 2 候选核心页。
// Phase 1 期间 app/sitemap.ts 仍返回空数组，因此这里不会让页面提前进入 sitemap。
// 真正开放收录前，应再按 GSC / AI 引用 / 咨询转化表现复核一次。
export const SITEMAP_ALLOWLIST = [
  '/',

  // 手机问题网
  '/cellphone',
  '/cellphone/diagnosis',
  '/cellphone/faq',
  '/cellphone/family-plan-guide',
  '/cellphone/family-plan-exit-account-holder',
  '/cellphone/price-hike',
  '/cellphone/faq/promo-credit-not-received',
  '/cellphone/providers',
  '/cellphone/faq/no-ssn-us-cellphone-internet',

  // 手机 + 宽带共同账单母节点
  '/bill-optimization',

  // 宽带问题网
  '/internet',
  '/internet/diagnosis',
  '/internet/faq',
  '/internet/price-hike',
  '/internet/providers',
  '/internet/home-network-guide',
  '/internet/faq/after-cancel-final-bill',

  // 运营商判断节点
  '/internet/xfinity',
  '/internet/att-fiber',
  '/internet/spectrum',
  '/internet/frontier',
];

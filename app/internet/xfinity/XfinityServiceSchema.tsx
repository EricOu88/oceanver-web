'use client';

import Script from 'next/script';

export default function XfinityServiceSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Xfinity 宽带方案（住家 / 商业）中文办理',
    serviceType: 'Internet Service',
    areaServed: ['Fremont', 'Milpitas', 'San Jose', 'San Francisco', 'United States'],
    provider: {
      '@type': 'LocalBusiness',
      name: 'Bay Media Star 鸿达电讯',
      url: 'https://baymediastar.com',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Xfinity 住家宽带（Residential）',
        description:
          '覆盖广、促销多，适合家庭/租房用户。优惠期结束可能涨价，需结合地址查询与谈价处理。',
      },
      {
        '@type': 'Offer',
        name: 'Xfinity 商业宽带（Business）',
        description:
          '适合公司/店铺/诊所等，稳定性与支持更偏商用，可选静态 IP，价格结构更稳定但通常更高。',
      },
    ],
  };

  return (
    <Script id="xfinity-service-schema" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  );
}

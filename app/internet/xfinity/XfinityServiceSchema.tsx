'use client'

import Script from 'next/script'

export default function XfinityServiceSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Xfinity 宽带问题判断指南',
    url: 'https://oceanver.com/internet/xfinity',
    description:
      '帮助用户判断 Xfinity 宽带账单涨价、Wi-Fi、断网、设备、安装和地址问题，并决定是否需要调整方案或比较其他运营商。',
    inLanguage: 'zh-CN',
    about: {
      '@type': 'Thing',
      name: 'Xfinity Internet',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://oceanver.com/#organization',
      name: '美国鸿达电讯',
      url: 'https://oceanver.com',
    },
  }

  return (
    <Script id="xfinity-page-schema" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  )
}
import type { Metadata } from 'next'
import AttFiberClient from './AttFiberClient'

const pageUrl = 'https://oceanver.com/internet/att-fiber'

export const metadata: Metadata = {
  title: 'AT&T Fiber 值不值得换？地址、需求与长期成本判断｜美国鸿达电讯',
  description:
    '先核实 AT&T Fiber 的地址可用性，再结合上传需求、现有宽带表现、安装条件和长期成本判断是否值得更换。具体资格与账户结果以当前地址和运营商规则为准。',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'AT&T Fiber 值不值得换？地址、需求与长期成本判断｜美国鸿达电讯',
    description:
      '从地址可用性、上传需求、现有宽带表现、安装条件和长期成本判断 AT&T Fiber 是否适合当前家庭。',
    url: pageUrl,
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function Page() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'AT&T Fiber 值不值得换？地址、需求与长期成本判断',
    description: metadata.description,
    inLanguage: 'zh-CN',
    isPartOf: { '@id': 'https://oceanver.com/#website' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <AttFiberClient />
    </>
  )
}

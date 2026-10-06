import type { Metadata } from 'next'
import SpectrumClient from './SpectrumClient'
import { getCanonicalUrl } from '@/lib/seo-utils'

const title = 'Spectrum 宽带问题判断｜账单、Wi-Fi 与断网｜美国鸿达电讯'
const description =
  'Spectrum 账单变贵、Wi-Fi 变慢、经常断网、设备收费或搬家后出现问题时，先判断问题来源，再决定继续使用、调整当前服务还是比较其他运营商。'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: getCanonicalUrl('/internet/spectrum'),
  },
  openGraph: {
    title,
    description,
    url: getCanonicalUrl('/internet/spectrum'),
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://oceanver.com/internet/spectrum#webpage',
            url: 'https://oceanver.com/internet/spectrum',
            name: title,
            description,
            isPartOf: { '@id': 'https://oceanver.com/#website' },
            about: {
              '@type': 'Thing',
              name: 'Spectrum 宽带问题判断',
            },
          }),
        }}
      />
      <SpectrumClient />
    </>
  )
}

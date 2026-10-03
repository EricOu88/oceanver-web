import type { Metadata } from 'next'
import SpectrumClient from './SpectrumClient'
import SpectrumFaqSchemas from '@/app/components/seo/SpectrumFaqSchemas'
import DynamicFAQSchema from '@/app/components/seo/DynamicFAQSchema'
import InternalLinks from '@/app/components/seo/InternalLinks'
import { getCanonicalUrl } from '@/lib/seo-utils'
import { getSmartHreflangAlternates } from '@/lib/hreflang-utils'

// Spectrum 页面专用 FAQ（用于 Schema）
const spectrumFAQs = [
  {
    question: 'Spectrum 宽带在湾区速度稳定吗？',
    answer: 'Spectrum 在湾区覆盖较广，速度相对稳定。Cable 宽带技术，高峰期可能略有下降，但整体表现可靠。适合家庭日常使用、视频流媒体和远程办公。',
  },
  {
    question: 'Spectrum 宽带会不会涨价？',
    answer: 'Spectrum 价格结构相对稳定，不像其他运营商那样在优惠期结束后大幅涨价。大多数套餐在促销期结束后会恢复原价，但涨幅通常较小。',
  },
  {
    question: 'Spectrum 宽带在 Fremont 可以安装吗？',
    answer: '可以。Spectrum 在 Fremont、San Jose、Milpitas 等湾区城市都有覆盖。我们提供免费地址覆盖查询服务，1 分钟内即可确认您的地址是否支持安装。',
  },
  {
    question: 'Spectrum 宽带适合新移民和留学生吗？',
    answer: '适合。Spectrum 支持无 SSN 办理，新移民、留学生都可以申请。我们提供全程中文服务，协助您完成地址查询、套餐选择和安装预约。',
  },
  {
    question: 'Spectrum 宽带安装需要多长时间？',
    answer: '通常预约后 3-7 个工作日可上门安装。如果地址已有 Spectrum 线路，可能更快。我们可协助您预约安装时间，全程中文沟通。',
  },
]

export const metadata: Metadata = {
  title: 'Spectrum 宽带申请指南 - 鸿达电信中文办理',
  description:
    'Spectrum 宽带申请指南。住家与商业方案对比，价格结构相对稳定，无优惠期暴涨套路。旧金山湾区 Fremont 实体店中文协助办理，覆盖 San Jose、Milpitas、Cupertino 及全美 50 州，支持地址查询与转网。',
  alternates: {
    ...getSmartHreflangAlternates('/internet/spectrum', getCanonicalUrl('/internet/spectrum')),
  },
  openGraph: {
    title: 'Spectrum 宽带申请指南 - 鸿达电信中文办理',
    description:
      '从用户角度讲清 Spectrum 是否适合你：价格、稳定性、适合人群。',
    url: getCanonicalUrl('/internet/spectrum'),
    siteName: 'Bay Media Star 鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <SpectrumFaqSchemas />
      <DynamicFAQSchema questions={spectrumFAQs} />
      <SpectrumClient />
      <InternalLinks pageType="provider" providerFAQUrl="/internet/spectrum/faq" />
    </>
  )
}

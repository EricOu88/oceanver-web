import type { Metadata } from 'next'
import SpectrumClient from './SpectrumClient'
import SpectrumFaqSchemas from '@/app/components/seo/SpectrumFaqSchemas'
import DynamicFAQSchema from '@/app/components/seo/DynamicFAQSchema'
import InternalLinks from '@/app/components/seo/InternalLinks'
import { getCanonicalUrl } from '@/lib/seo-utils'

// Spectrum 页面专用 FAQ（用于 Schema）
const spectrumFAQs = [
  {
    question: 'Spectrum 宽带速度稳定吗？',
    answer: 'Spectrum 使用 Cable 等网络设施，实际速度和高峰期表现取决于地址、线路、网络负载和套餐条件，需结合具体使用场景判断。',
  },
  {
    question: 'Spectrum 宽带会不会涨价？',
    answer: 'Spectrum 价格结构相对稳定，不像其他运营商那样在优惠期结束后大幅涨价。大多数套餐在促销期结束后会恢复原价，但涨幅通常较小。',
  },
  {
    question: 'Spectrum 宽带可以安装吗？',
    answer: '是否可以安装取决于详细地址和当前覆盖查询结果，不能仅凭城市判断，办理前需核实。',
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
    'Spectrum 宽带申请指南。介绍住家与商业方案、账单结构、地址查询与转网判断。价格、覆盖、设备和资格会随时间与地址变化，办理前需核实。',
  alternates: {
    canonical: getCanonicalUrl('/internet/spectrum'),
  },
  openGraph: {
    title: 'Spectrum 宽带申请指南 - 鸿达电信中文办理',
    description:
      '从用户角度讲清 Spectrum 是否适合你：价格、稳定性、适合人群。',
    url: getCanonicalUrl('/internet/spectrum'),
    siteName: '美国鸿达电讯',
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

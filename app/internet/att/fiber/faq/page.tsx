import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ATTFiberFAQClient from './ATTFiberFAQClient'
import { getAllFAQsForSchema } from './faq-data'

const pageUrl = 'https://oceanver.com/internet/att/fiber/faq'

export const metadata: Metadata = {
  title: 'AT&T Fiber 常见问题 FAQ｜地址、账单、安装与设备｜美国鸿达电讯',
  description:
    '整理 AT&T Fiber 地址覆盖、是否更换、网速与 Wi-Fi、账单成本、安装设备及账户问题，帮助先判断情况，再确认下一步。',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'AT&T Fiber 常见问题 FAQ｜美国鸿达电讯',
    description:
      '按地址覆盖、服务比较、网速、账单、安装和账户问题整理 AT&T Fiber 常见判断信息。',
    url: pageUrl,
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

function FAQPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: getAllFAQsForSchema().map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function Page() {
  return (
    <>
      <FAQPageSchema />
      <div className="min-h-screen bg-[#FCFDFE]">
        <div className="border-b border-[#D5E5EC] bg-white">
          <div className="mx-auto max-w-5xl px-5 py-3 md:px-8">
            <Link
              href="/internet/att-fiber"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#164B78] hover:text-[#103B60]"
            >
              <ArrowLeft size={16} /> 返回 AT&amp;T Fiber 判断页
            </Link>
          </div>
        </div>
        <ATTFiberFAQClient />
        <p className="mx-auto max-w-5xl px-5 pb-8 text-center text-xs leading-5 text-[#526170] md:px-8">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。
        </p>
      </div>
    </>
  )
}

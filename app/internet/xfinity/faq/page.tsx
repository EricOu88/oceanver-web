import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import XfinityFAQClient from './XfinityFAQClient'
import { getAllFAQsForSchema } from './xfinity-faq-data'
import { getCanonicalUrl } from '@/lib/seo-utils'

export const metadata: Metadata = {
  title: 'Xfinity 常见问题：账单、Wi-Fi、断网、设备与取消｜美国鸿达电讯',
  description:
    'Xfinity 宽带问题知识库：账单涨价、Wi-Fi 变慢、断网、设备费用、安装地址、搬家、取消和账户问题。先判断问题来源，再决定下一步怎么处理。',
  alternates: {
    canonical: getCanonicalUrl('/internet/xfinity/faq'),
  },
  openGraph: {
    title: 'Xfinity 常见问题：账单、Wi-Fi、断网、设备与取消',
    description:
      '按实际问题分类整理 Xfinity 宽带常见问题，帮助判断账单、Wi-Fi、线路、设备、安装和账户问题。',
    url: getCanonicalUrl('/internet/xfinity/faq'),
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

function FAQPageSchema() {
  const allFaqs = getAllFAQsForSchema()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

export default function Page() {
  return (
    <>
      <FAQPageSchema />

      <div className="min-h-screen bg-[#FCFDFE]">
        <div className="sticky top-0 z-40 border-b border-[#D5E5EC] bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 md:px-6">
            <Link
              href="/internet/xfinity"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#526170] transition hover:text-[#164B78]"
            >
              <ArrowLeft size={16} />
              返回 Xfinity 判断页
            </Link>
          </div>
        </div>

        <XfinityFAQClient />

        <p className="mx-auto max-w-6xl px-4 pb-10 text-center text-xs leading-5 text-[#526170] md:px-6">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。
        </p>
      </div>
    </>
  )
}
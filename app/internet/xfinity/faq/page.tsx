import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import XfinityFAQClient from './XfinityFAQClient'
import { getAllFAQsForSchema } from './xfinity-faq-data'
import { getCanonicalUrl } from '@/lib/seo-utils'

export const metadata: Metadata = {
  title: 'Xfinity 宽带 常见问题 | 中文办理 | 无 SSN 可办 | 鸿达电讯',
  description:
    'Xfinity 宽带完整 FAQ：住家与商业宽带售前售后，涵盖地址覆盖、套餐选择、价格变化、无 SSN 相关条件、账单问题和速度优化。中文说明以当前运营商规则为准。',
  keywords: [
    'Xfinity FAQ',
    'Xfinity 常见问题',
    'Xfinity 账单',
    'Xfinity 涨价',
    'Xfinity 合约',
    'Xfinity 取消',
    'Xfinity 流量上限',
    'Xfinity Outage',
  ],
  alternates: {
    canonical: getCanonicalUrl('/internet/xfinity/faq'),
  },
  openGraph: {
    title: 'Xfinity 宽带 常见问题 | 中文办理 | 无 SSN 可办',
    description:
      'Xfinity 宽带完整 FAQ：住家与商业宽带售前售后问题解答。涵盖地址覆盖、套餐、价格、账单等常见问题。',
    url: getCanonicalUrl('/internet/xfinity/faq'),
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

// FAQPage Schema for SEO
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function Page() {
  return (
    <>
      <FAQPageSchema />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* 返回按钮 */}
        <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-3">
            <Link
              href="/internet/xfinity"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition"
            >
              <ArrowLeft size={16} />
              返回 Xfinity 主页
            </Link>
          </div>
        </div>

        {/* FAQ 内容 */}
        <XfinityFAQClient />
        <p className="mx-auto max-w-5xl px-4 pb-8 text-center text-xs text-slate-500">最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与官方规则为准。</p>
      </div>
    </>
  )
}

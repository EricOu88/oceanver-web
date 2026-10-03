import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ATTFiberFAQClient from './ATTFiberFAQClient'
import { getAllFAQsForSchema } from './faq-data'

export const metadata: Metadata = {
  title: 'AT&T 光纤 常见问题 | 中文办理 | 无 SSN 可办 | 鸿达电讯',
  description:
    'AT&T Fiber 光纤宽带完整 FAQ：住家光纤售前售后、商业光纤售前售后，涵盖地址覆盖、套餐选择、价格优惠、无SSN办理、账单问题、速度优化等 100+ 个常见问题。湾区中文专业解答。',
  keywords: [
    'AT&T Fiber FAQ',
    'AT&T 光纤 常见问题',
    'AT&T Fiber 宽带问题',
    'AT&T Fiber 账单问题',
    'AT&T Fiber 速度问题',
    'AT&T Fiber 无SSN办理',
    'AT&T Fiber 价格优惠',
    'AT&T Fiber 技术支持',
    'AT&T 商业光纤',
    '湾区 AT&T 光纤',
  ],
  alternates: {
    canonical: 'https://oceanver.com/internet/att/fiber/faq',
  },
  openGraph: {
    title: 'AT&T 光纤 常见问题 | 中文办理 | 无 SSN 可办',
    description:
      'AT&T Fiber 光纤宽带完整 FAQ：住家与商业光纤售前售后问题解答。涵盖地址覆盖、套餐、价格、账单等 100+ 个常见问题。',
    url: 'https://baymediastar.com/internet/att/fiber/faq',
    siteName: 'Bay Media Star 鸿达电讯',
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
              href="/internet/att-fiber"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition"
            >
              <ArrowLeft size={16} />
              返回 AT&T Fiber 主页
            </Link>
          </div>
        </div>

        {/* FAQ 内容 */}
        <ATTFiberFAQClient />
      </div>
    </>
  )
}

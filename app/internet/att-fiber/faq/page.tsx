import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import AttFiberFAQPage from './AttFiberFAQPage'
import {
  attFiberResidentialPreSale,
  attFiberResidentialAfterSale,
  attFiberBusinessPreSale,
  attFiberBusinessAfterSale,
} from './data'

export const metadata: Metadata = {
  title: 'AT&T Fiber 宽带常见问题 FAQ | 售前售后50个问题解答 | 鸿达电讯',
  description:
    'AT&T Fiber 宽带售前售后常见问题完整解答。涵盖地址覆盖、套餐选择、价格优惠、无SSN办理、账单问题、速度优化等50个常见问题。中文专业解答，减轻客服压力。',
  keywords: [
    'AT&T Fiber FAQ',
    'AT&T Fiber 常见问题',
    'AT&T Fiber 宽带问题',
    'AT&T Fiber 账单问题',
    'AT&T Fiber 速度问题',
    'AT&T Fiber 无SSN办理',
    'AT&T Fiber 价格优惠',
    'AT&T Fiber 技术支持',
  ],
  alternates: {
    canonical: 'https://oceanver.com/internet/att-fiber/faq',
  },
  openGraph: {
    title: 'AT&T Fiber 宽带常见问题 FAQ | 售前售后50个问题解答',
    description: 'AT&T Fiber 宽带售前售后常见问题完整解答。涵盖地址覆盖、套餐选择、价格优惠、账单问题等50个常见问题。',
    url: 'https://baymediastar.com/internet/att-fiber/faq',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

// FAQPage Schema for SEO
function FAQPageSchema() {
  const allQuestions = [
    ...attFiberResidentialPreSale,
    ...attFiberResidentialAfterSale,
    ...attFiberBusinessPreSale,
    ...attFiberBusinessAfterSale,
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map((item) => ({
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
      <div className="min-h-screen bg-slate-50">
        {/* 返回按钮 */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link
              href="/internet/att-fiber"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              <ArrowLeft size={18} />
              返回 AT&T Fiber 主页
            </Link>
          </div>
        </div>

        {/* FAQ 内容 */}
        <AttFiberFAQPage />
      </div>
    </>
  )
}

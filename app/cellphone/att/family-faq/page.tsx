import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import ATTFamilyFAQClient from './ATTFamilyFAQClient'
import { getAllFAQsForSchema } from './data'

export const metadata: Metadata = {
  alternates: { canonical: 'https://oceanver.com/cellphone/att/family-faq' },
  title: 'AT&T 家庭合约计划常见问题 FAQ｜无 SSN 办理 · 套餐选择 · 合约解约',
  description:
    '解答 AT&T 家庭合约计划的所有常见问题：无 SSN 能否办理、套餐选择、流量限制、合约解约、账单费用、国际漫游等。中文专业解答，帮你快速了解 AT&T 家庭计划。',
  keywords: [
    'AT&T 家庭计划',
    'AT&T Family Plan',
    '无SSN办手机',
    'AT&T套餐',
    'AT&T解约',
    'AT&T国际漫游',
    '美国手机套餐',
    '美国手机卡',
  ],
  openGraph: {
    title: 'AT&T 家庭合约计划常见问题 FAQ｜鸿达电讯',
    description:
      '解答 AT&T 家庭合约计划的所有常见问题：无 SSN 办理、套餐选择、合约解约、账单费用等。',
    type: 'website',
    locale: 'zh_CN',
  },
}

// 生成 FAQPage Schema
function FAQPageSchema() {
  const allFAQs = getAllFAQsForSchema()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
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

export default function ATTFamilyFAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 顶部导航 */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <Link
            href="/cellphone/att"
            className="inline-flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm md:text-base"
          >
            <ChevronLeft size={18} />
            <span>返回 AT&T 套餐</span>
          </Link>
          <span className="text-slate-400 text-sm hidden md:block">
            AT&T 家庭计划 FAQ
          </span>
        </div>
      </div>

      {/* FAQ 内容 */}
      <ATTFamilyFAQClient />

      {/* FAQ Schema */}
      <FAQPageSchema />
    </main>
  )
}

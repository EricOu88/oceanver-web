import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ProviderFAQ from '@/app/components/faq/ProviderFAQ'
import { attBusinessPreSaleCategories, attBusinessAfterSaleCategories } from './data'

export const metadata: Metadata = {
  title: 'AT&T 商业计划常见问题 FAQ | 售前售后50个问题解答 | 鸿达电讯',
  description:
    'AT&T 商业计划售前售后常见问题完整解答。涵盖套餐选择、价格优惠、无SSN办理、账单问题、信号优化等50个常见问题。中文专业解答，减轻客服压力。',
  keywords: [
    'AT&T 商业计划 FAQ',
    'AT&T 企业手机常见问题',
    'AT&T 商业手机问题',
    'AT&T 账单问题',
    'AT&T 信号问题',
    'AT&T 无SSN办理',
    'AT&T 价格优惠',
    'AT&T 技术支持',
  ],
  alternates: {
    canonical: 'https://oceanver.com/cellphone/att/business-faq',
  },
  openGraph: {
    title: 'AT&T 商业计划常见问题 FAQ | 售前售后50个问题解答',
    description: 'AT&T 商业计划售前售后常见问题完整解答。涵盖套餐选择、价格优惠、账单问题等50个常见问题。',
    url: 'https://oceanver.com/cellphone/att/business-faq',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

// FAQPage Schema for SEO
function FAQPageSchema() {
  const allQuestions = [
    ...attBusinessPreSaleCategories.flatMap((cat) => cat.items),
    ...attBusinessAfterSaleCategories.flatMap((cat) => cat.items),
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

export default function ATTBusinessFAQPage() {
  return (
    <>
      <FAQPageSchema />
      <div className="min-h-screen bg-slate-50">
        {/* 返回按钮 */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link
              href="/cellphone/providers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              <ArrowLeft size={18} />
              返回 AT&T 手机套餐主页
            </Link>
          </div>
        </div>

        {/* FAQ 内容 */}
        <ProviderFAQ
          providerName="AT&T 商业计划"
          preSaleCategories={attBusinessPreSaleCategories}
          afterSaleCategories={attBusinessAfterSaleCategories}
          serviceType="手机"
        />
      </div>
    </>
  )
}

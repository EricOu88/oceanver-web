import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, HelpCircle, MessageSquare } from 'lucide-react'
import { frontierFAQIndex, frontierPreSaleFAQIndex, frontierAfterSaleFAQIndex } from './faq-index'
import { frontierFAQContent } from '@/app/internet-wifi/frontier/faq/faq-content'

export const metadata: Metadata = {
  title: 'Frontier 常见问题总览 | 15个核心问题索引 | 鸿达电讯',
  description:
    'Frontier 宽带常见问题总览页。涵盖覆盖范围、光纤DSL区别、速度、安装、故障、合约、费用、客服等15个常见问题。点击问题查看详细解答，中文办理协助。',
  alternates: {
    canonical: 'https://oceanver.com/internet/frontier/faq',
  },
}

// ItemList Schema for SEO
function ItemListSchema() {
  const items = frontierFAQIndex
    .map((item) => {
      const content = frontierFAQContent[item.slug]
      return content ? { ...item, ...content } : null
    })
    .filter(Boolean) as Array<{ slug: string; question: string; summary: string }>

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Frontier 常见问题列表',
    description: 'Frontier 宽带常见问题完整列表',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.question,
      description: item.summary,
      url: `https://baymediastar.com/internet-wifi/frontier/faq/${item.slug}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FrontierFAQIndexPage() {
  return (
    <>
      <ItemListSchema />
      <div className="min-h-screen bg-slate-50">
        {/* 返回按钮 */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link
              href="/internet/frontier"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              <ArrowLeft size={18} />
              返回 Frontier 主页
            </Link>
          </div>
        </div>

        {/* 索引页内容 */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* 页面介绍 */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Frontier 常见问题
            </h1>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              我们整理了 Frontier 宽带最常见的问题，帮助您快速找到答案。涵盖覆盖范围、光纤DSL区别、速度、安装、故障、合约、费用、客服等核心问题。点击下方问题查看详细解答。
            </p>
          </div>

          {/* 售前常见问题 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="text-blue-600" size={28} />
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">售前常见问题</h2>
            </div>
            <div className="space-y-4">
              {frontierPreSaleFAQIndex.map((item) => {
                const content = frontierFAQContent[item.slug]
                if (!content) return null
                
                return (
                  <div
                    key={item.slug}
                    className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all p-6"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      Q：{content.question}
                    </h3>
                    <p className="text-slate-600 mb-3">{content.summary}</p>
                  <Link
                    href={`/internet-wifi/frontier/faq/${item.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group"
                  >
                    查看详细解答
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </section>

          {/* 售后常见问题 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-green-600" size={28} />
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">售后常见问题</h2>
            </div>
            <div className="space-y-4">
              {frontierAfterSaleFAQIndex.map((item) => {
                const content = frontierFAQContent[item.slug]
                if (!content) return null
                
                return (
                  <div
                    key={item.slug}
                    className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all p-6"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      Q：{content.question}
                    </h3>
                    <p className="text-slate-600 mb-3">{content.summary}</p>
                    <Link
                      href={`/internet-wifi/frontier/faq/${item.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group"
                    >
                      查看详细解答
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </section>

          {/* CTA 区域 */}
          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200 text-center">
            <p className="text-slate-800 font-semibold mb-3">
              还有其他问题？
            </p>
            <p className="text-slate-600 text-sm mb-4">
              我们的中文顾问可以为您提供一对一的专业解答
            </p>
            <Link
              href="/internet/frontier"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
            >
              返回 Frontier 服务页
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { frontierFAQCategories, frontierFAQIndex } from './faq-index'
import { frontierFAQContent } from '@/app/internet-wifi/frontier/faq/faq-content'

const LAST_UPDATED =
  '最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。'

export const metadata: Metadata = {
  title: 'Frontier 宽带常见问题｜地址、网速与长期成本｜美国鸿达电讯',
  description:
    '整理 Frontier 地址覆盖、Fiber 与 DSL、网速、Wi-Fi、账单、安装和取消等问题，帮助你先判断现有宽带是否值得更换。',
  alternates: {
    canonical: 'https://oceanver.com/internet/frontier/faq',
  },
}

const questions = frontierFAQIndex.flatMap(({ slug }) => {
  const item = frontierFAQContent[slug]
  return item ? [{ ...item, slug }] : []
})

function FAQPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FrontierFAQPage() {
  return (
    <>
      <FAQPageSchema />
      <main className="min-h-screen bg-[#F4F8FA] text-[#202D3A]">
        <div className="border-b border-[#D5E5EC] bg-white">
          <div className="mx-auto max-w-5xl px-5 py-4">
            <Link
              href="/internet/frontier"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#526170] hover:text-[#164B78]"
            >
              <ArrowLeft size={18} /> 返回 Frontier 判断页
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-5 py-10 md:py-14">
          <header className="mb-10 max-w-3xl">
            <h1 className="mb-4 text-3xl font-black md:text-4xl">Frontier 宽带常见问题</h1>
            <p className="text-base leading-7 text-[#526170] md:text-lg">
              先核对地址、服务类型和实际问题，再比较是否值得更换。价格、资格、安装与账户结果应以当前地址和账户信息为准。
            </p>
          </header>

          <div className="space-y-9">
            {frontierFAQCategories.map((category) => (
              <section key={category.title} aria-labelledby={`category-${category.title}`}>
                <h2
                  id={`category-${category.title}`}
                  className="mb-4 text-xl font-bold md:text-2xl"
                >
                  {category.title}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {category.slugs.map((slug) => {
                    const item = frontierFAQContent[slug]
                    if (!item) return null

                    return (
                      <article
                        key={slug}
                        className="rounded-2xl border border-[#D5E5EC] bg-white p-5 shadow-sm md:p-6"
                      >
                        <h3 className="mb-3 text-base font-bold md:text-lg">{item.question}</h3>
                        <p className="leading-7 text-[#526170]">{item.answer}</p>
                      </article>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>

          <nav aria-label="相关问题入口" className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/internet/diagnosis" className="font-semibold text-[#164B78] hover:text-[#103B60]">
              宽带问题诊断 <ArrowRight className="inline" size={16} />
            </Link>
            <Link href="/internet/providers" className="font-semibold text-[#164B78] hover:text-[#103B60]">
              比较宽带长期成本 <ArrowRight className="inline" size={16} />
            </Link>
            <Link href="/internet/price-hike" className="font-semibold text-[#164B78] hover:text-[#103B60]">
              判断宽带账单涨价 <ArrowRight className="inline" size={16} />
            </Link>
          </nav>

          <p className="mt-8 border-t border-[#D5E5EC] pt-5 text-xs text-[#526170]">
            {LAST_UPDATED}
          </p>
        </div>
      </main>
    </>
  )
}

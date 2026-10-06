import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { internetProvidersFAQData } from './data'

const title = '宽带比较常见问题｜长期成本、网络类型与换网判断｜美国鸿达电讯'
const description =
  '围绕是否值得换宽带，整理长期费用、Fiber 与 Cable、地址安装、设备和账户条件等常见判断问题。'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://oceanver.com/internet/providers/faq',
  },
  openGraph: {
    title,
    description,
    url: 'https://oceanver.com/internet/providers/faq',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

const categories = [...new Set(internetProvidersFAQData.map((item) => item.category))]

export default function InternetProvidersFAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: internetProvidersFAQData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.summary,
      },
    })),
  }

  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/internet/providers"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#526170] transition hover:text-[#164B78]"
        >
          <ArrowLeft size={16} />
          返回宽带比较
        </Link>

        <header className="mt-8">
          <p className="text-sm font-bold tracking-wide text-[#2786A5]">
            宽带比较知识库
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            准备换宽带？先把这几个问题算清楚
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
            真正要比较的不是“哪家广告价最低”，而是当前地址可用性、长期成本、技术类型、设备安装和取消条件。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/internet/providers"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 font-bold text-white transition hover:bg-[#103B60]"
            >
              返回宽带比较
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/internet/diagnosis"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 font-bold text-[#164B78] transition hover:bg-[#F4F8FA]"
            >
              还不知道该不该换？先诊断
              <ArrowRight size={17} />
            </Link>
          </div>
        </header>

        <div className="mt-10 space-y-8">
          {categories.map((category, index) => (
            <section
              key={category}
              id={`provider-faq-${index + 1}`}
              className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-4 sm:p-6"
            >
              <h2 className="text-xl font-black sm:text-2xl">{category}</h2>
              <div className="mt-4 space-y-3">
                {internetProvidersFAQData
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <article
                      key={item.question}
                      className="rounded-xl border border-[#D5E5EC] bg-white p-4 sm:p-5"
                    >
                      <h3 className="font-bold leading-7">{item.question}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#526170]">
                        {item.summary}
                      </p>
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-white p-5 sm:p-6">
          <h2 className="text-xl font-black">有些比较必须看具体地址和账户</h2>
          <p className="mt-2 text-sm leading-7 text-[#526170]">
            地址 serviceability、Promotion、Credit、设备记录、安装条件、合同和订单状态无法仅靠通用网页判断。
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 font-bold text-[#164B78] transition hover:text-[#103B60]"
          >
            需要时进入人工核实
            <ArrowRight size={16} />
          </Link>
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  )
}

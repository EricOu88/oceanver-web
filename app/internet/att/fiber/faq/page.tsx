import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
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

const publishedDetails = [
  ['att-fiber-price-increase', '账单涨价先查哪些项目？'],
  ['att-fiber-frequent-disconnections', '经常断网怎样判断？'],
  ['att-fiber-outage-duration', 'Outage 恢复时间怎样核实？'],
  ['att-fiber-equipment-fee', '设备收费怎样核对？'],
  ['att-fiber-cancel-termination-fee', '取消条件和可能费用怎样确认？'],
  ['att-fiber-buried-wire-installation', '临时光纤线未埋怎样处理？'],
] as const

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

        <section className="mx-auto mt-10 max-w-5xl px-5 md:px-8">
          <div className="rounded-3xl border border-[#D5E5EC] bg-white p-6 md:p-8">
            <h2 className="text-2xl font-black text-[#202D3A]">已发布的具体问题</h2>
            <p className="mt-3 leading-7 text-[#526170]">
              如果总览已经能定位到具体情况，可以进入对应详情继续检查；真实地址、订单和账户结果仍需按当前记录核实。
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {publishedDetails.map(([slug, title]) => (
                <Link
                  key={slug}
                  href={`/internet/att/fiber/faq/${slug}`}
                  className="flex items-center justify-between rounded-xl bg-[#F4F8FA] px-4 py-3 font-semibold text-[#164B78]"
                >
                  <span>{title}</span>
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <p className="mx-auto max-w-5xl px-5 pb-8 pt-8 text-center text-xs leading-5 text-[#526170] md:px-8">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。
        </p>
      </div>
    </>
  )
}

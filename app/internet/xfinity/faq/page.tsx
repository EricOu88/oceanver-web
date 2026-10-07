import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import XfinityFAQClient from './XfinityFAQClient'
import { getAllFAQsForSchema } from './xfinity-faq-data'
import { getCanonicalUrl } from '@/lib/seo-utils'

export const metadata: Metadata = {
  title: 'Xfinity 常见问题：账单、Wi-Fi、断网、设备与取消｜美国鸿达电讯',
  description:
    'Xfinity 宽带问题知识库：账单涨价、Wi-Fi 变慢、断网、设备费用、安装地址、搬家、取消和账户问题。先判断问题来源，再决定下一步怎么处理。',
  keywords: [
    'Xfinity FAQ',
    'Xfinity 常见问题',
    'Xfinity 账单涨价',
    'Xfinity WiFi慢',
    'Xfinity 断网',
    'Xfinity 设备费',
    'Xfinity 搬家',
    'Xfinity 取消',
  ],
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

const publishedDetails = [
  ['xfinity-bill-sudden-increase', '账单为什么突然变贵？'],
  ['xfinity-billing-error-appeal', '账单出错怎么申诉？'],
  ['xfinity-overcharge-refund', '被多扣钱能退吗？'],
  ['xfinity-router-fee', '路由器或设备费是什么？'],
  ['xfinity-equipment-not-returned', '设备已归还仍显示未归还怎么办？'],
  ['xfinity-outage', '断网怎样区分 outage 和家中问题？'],
  ['xfinity-night-slow', '晚上网速变慢怎样比较连接表现？'],
  ['xfinity-restart-not-working', '重启后仍异常继续检查什么？'],
  ['xfinity-technician-visit-fee', '技术员上门费用怎样确认？'],
  ['xfinity-judge-line-issue', '怎样判断 Wi-Fi 还是线路问题？'],
  ['xfinity-over-data-fee', '数据用量费用怎样核对？'],
  ['xfinity-check-data-usage', '怎样查看账户数据用量？'],
  ['xfinity-cancel-before-contract', '取消前怎样核对 term agreement？'],
  ['xfinity-mid-month-cancel-refund', '月中取消怎样核对最终账单？'],
  ['xfinity-moving-transfer', '搬家怎样转移服务？'],
  ['xfinity-new-address-no-coverage', '新地址查不到覆盖怎么办？'],
  ['xfinity-move-reinstallation-fee', '搬家重新安装费用怎样确认？'],
  ['xfinity-pause-service', '暂停服务有哪些账户选项？'],
  ['xfinity-unpaid-affect-credit', '欠费怎样核对余额和通知？'],
  ['xfinity-network-issue-compensation', '网络问题 credit 或补偿怎样核实？'],
] as const

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

        <section className="mx-auto mt-10 max-w-6xl px-4 md:px-6">
          <div className="rounded-3xl border border-[#D5E5EC] bg-white p-6 md:p-8">
            <h2 className="text-2xl font-black text-[#202D3A]">需要更具体？进入已发布问题详情</h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#526170]">
              总览负责解释问题类型；下面的详情页负责单个问题的检查步骤和账户核实边界。
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {publishedDetails.map(([slug, title]) => (
                <Link
                  key={slug}
                  href={`/internet/xfinity/faq/${slug}`}
                  className="flex items-center justify-between rounded-xl bg-[#F4F8FA] px-4 py-3 font-semibold text-[#164B78] hover:bg-white"
                >
                  <span>{title}</span>
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <p className="mx-auto max-w-6xl px-4 pb-10 pt-8 text-center text-xs leading-5 text-[#526170] md:px-6">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。
        </p>
      </div>
    </>
  )
}
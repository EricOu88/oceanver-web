import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronRight,
  CircleDollarSign,
  CircleHelp,
  Gauge,
  MapPin,
  Router,
  Search,
  ShieldCheck,
  WifiOff,
} from 'lucide-react'
import { internetFAQData } from './data'

export const metadata: Metadata = {
  title: '美国宽带常见问题 FAQ｜账单、Wi-Fi、断网、安装与设备｜美国鸿达电讯',
  description:
    '整理美国家庭宽带账单涨价、Wi-Fi 慢、断网、Modem、安装、地址、搬家和换网等常见问题，帮助先理解原因，再决定下一步。',
  keywords: [
    '美国宽带常见问题',
    '美国宽带FAQ',
    '宽带账单涨价',
    'WiFi慢怎么办',
    '宽带断网',
    'Modem问题',
    '宽带安装问题',
    '搬家宽带',
    '宽带地址覆盖',
    '要不要换宽带',
  ],
  alternates: {
    canonical: 'https://oceanver.com/internet/faq',
  },
  openGraph: {
    title: '美国宽带常见问题 FAQ｜账单、Wi-Fi、断网、安装与设备｜美国鸿达电讯',
    description:
      '整理美国家庭宽带账单涨价、Wi-Fi 慢、断网、Modem、安装、地址、搬家和换网等常见问题。',
    url: 'https://oceanver.com/internet/faq',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

function FAQPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: internetFAQData.map((item) => ({
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

const topicEntries = [
  {
    icon: <CircleDollarSign size={22} />,
    title: '账单与涨价',
    description: '优惠到期、设备费、AutoPay 折扣、不明收费和长期月费变化。',
    href: '/bill-optimization',
  },
  {
    icon: <Gauge size={22} />,
    title: '网速与 Wi-Fi',
    description: '房间信号弱、测速慢、全屋慢、单台设备慢和家庭网络问题。',
    href: '/internet/diagnosis',
  },
  {
    icon: <WifiOff size={22} />,
    title: '断网与掉线',
    description: '完全无法上网、反复掉线、Gateway 灯号异常和区域中断。',
    href: '/internet/diagnosis',
  },
  {
    icon: <Router size={22} />,
    title: 'Modem 与设备',
    description: '设备激活、租赁、自购设备、退还收费和设备状态问题。',
    href: '/internet/diagnosis',
  },
  {
    icon: <MapPin size={22} />,
    title: '安装、地址与搬家',
    description: '地址覆盖、Unit、旧账户、自助安装、新地址和搬家迁移。',
    href: '/internet/diagnosis',
  },
  {
    icon: <Search size={22} />,
    title: '换网与运营商比较',
    description: '什么时候值得换、比较什么，以及为什么不能只看广告价格。',
    href: '/internet/providers',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: '取消后 / Final Bill / 设备归还',
    description: '取消以后确认账户、最终账单、AutoPay、设备归还和未结余额是否真正闭环。',
    href: '/internet/faq/after-cancel-final-bill',
  },
]

export default function InternetFAQPage() {
  return (
    <>
      <FAQPageSchema />

      <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6 sm:py-12">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/internet"
            className="inline-flex items-center gap-2 text-sm text-[#526170] transition hover:text-[#164B78]"
          >
            <ArrowLeft size={16} />
            返回宽带问题入口
          </Link>

          {/* HERO */}
          <section className="mx-auto mt-8 max-w-4xl text-center">
            <p className="text-sm font-bold tracking-wide text-[#2786A5]">
              美国家庭宽带知识库
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              美国宽带常见问题
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
              从账单涨价、Wi-Fi、断网、Modem、安装、地址、搬家到换运营商，
              先找到最接近的问题，再看具体原因和处理方法。
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/internet/diagnosis"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3 font-bold text-white transition hover:bg-[#103B60]"
              >
                不知道属于哪一类？先做诊断
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/bill-optimization"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3 font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
              >
                主要是账单变贵
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>

          {/* 问题分类入口 */}
          <section className="mt-16">
            <p className="text-sm font-bold text-[#2786A5]">
              先按问题找答案
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              你想查哪一类宽带问题？
            </h2>

            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {topicEntries.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-[#D5E5EC] bg-white p-5 transition hover:border-[#2786A5] hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F8FA] text-[#164B78]">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#526170]">
                    {item.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#164B78]">
                    查看相关问题
                    <ChevronRight
                      size={15}
                      className="transition group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ 正文 */}
          <section className="mt-16">
            <div className="flex items-center gap-3">
              <BookOpen
                size={24}
                className="text-[#2786A5]"
              />

              <div>
                <p className="text-sm font-bold text-[#2786A5]">
                  基础知识
                </p>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  常见宽带问题与答案
                </h2>
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#526170]">
              下面是宽带用户经常遇到的基础问题。
              如果你的情况涉及具体账单、地址、设备或账户状态，
              页面只能帮助判断方向，最终结果仍需结合实际账户确认。
            </p>

            <div className="mt-8 space-y-5">
              {internetFAQData.map((item, index) => (
                <article
                  key={`${item.question}-${index}`}
                  id={`faq-${index + 1}`}
                  className="rounded-3xl border border-[#D5E5EC] bg-white p-5 sm:p-7"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4F8FA]">
                      <CircleHelp
                        className="text-[#2786A5]"
                        size={19}
                      />
                    </div>

                    <h2 className="pt-1 text-lg font-black leading-7 sm:text-xl">
                      {item.question}
                    </h2>
                  </div>

                  <div className="mt-4 space-y-3 pl-0 text-sm leading-7 text-[#526170] sm:pl-12">
                    {item.answer.split('\n').map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {item.relatedProviders.length > 0 && (
                    <div className="mt-6 border-t border-[#D5E5EC] pt-5 sm:ml-12">
                      <p className="text-xs font-bold text-[#526170]">
                        如果这个问题涉及具体运营商，可继续查看：
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.relatedProviders.map((provider) => (
                          <Link
                            key={`${item.question}-${provider.href}`}
                            href={provider.href}
                            className="inline-flex items-center gap-1 rounded-lg border border-[#D5E5EC] bg-white px-3 py-2 text-sm font-semibold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
                          >
                            {provider.name}
                            <ChevronRight size={14} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* FAQ 与诊断的分工 */}
          <section className="mt-16 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold text-[#2786A5]">
                  已经知道自己要查什么
                </p>

                <h2 className="mt-2 text-xl font-black">
                  留在 FAQ 找具体答案
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#526170]">
                  比如设备为什么收费、Wi-Fi 为什么慢、地址为什么显示无服务，
                  可以直接阅读对应问题。
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-[#2786A5]">
                  还不知道问题出在哪里
                </p>

                <h2 className="mt-2 text-xl font-black">
                  去诊断页一步一步判断
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#526170]">
                  如果同时有账单、设备、网速或搬家问题，
                  先通过诊断缩小范围会更容易。
                </p>

                <Link
                  href="/internet/diagnosis"
                  className="mt-4 inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
                >
                  进入宽带问题诊断
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>

          {/* 人工边界 */}
          <section className="mx-auto mt-14 max-w-3xl text-center">
            <h2 className="text-xl font-black">
              FAQ 能解释规则，但不能读取你的账户
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#526170]">
              具体收费、设备归还、旧账户占用、地址资格和安装状态，
              最终仍需结合账单、地址或运营商系统记录核实。
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-5 py-3 text-sm font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
            >
              需要时进入人工核实
              <ArrowRight size={16} />
            </Link>
          </section>

          <p className="mt-12 text-center text-xs leading-5 text-[#526170]">
            最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与官方规则为准。
          </p>
        </div>
      </main>
    </>
  )
}
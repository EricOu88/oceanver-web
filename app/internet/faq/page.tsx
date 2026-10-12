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
  title: { absolute: '宽带使用问题 FAQ｜账单、Wi-Fi、断网与设备｜美国鸿达电讯' },
  description:
    '本页优先承接已经使用宽带后的收费、断网、Wi-Fi 与设备异常，也保留安装失败及迁移问题的排查入口。首次申请与地址选择转到主站办理 FAQ。',
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
    title: '宽带使用问题 FAQ｜账单、Wi-Fi、断网与设备｜美国鸿达电讯',
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

      <main className="compact-page min-h-screen bg-[#FCFDFE] px-4 py-4 text-[#202D3A] sm:px-6 sm:py-6">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="页面返回导航" className="page-nav-row">
            <Link href="/" className="page-nav-button">← 返回首页</Link>
            <Link
            href="/internet"
            className="page-nav-button"
          >
            <ArrowLeft size={16} />
            返回宽带问题入口
          </Link>
          </nav>

          {/* HERO */}
          <section className="mx-auto mt-4 max-w-4xl text-center">
            <p className="text-sm font-bold tracking-wide text-[#2786A5]">
              美国家庭宽带知识库
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              宽带已经在用，按账单、Wi-Fi 与断网问题继续查
            </h1>
            <section data-page-answer className="best-answer speakable-summary mt-6 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 text-[#202D3A]">
              <h2 className="text-lg font-bold">直接结论</h2>
              <p className="mt-3 leading-7">先分清收费异常、全家断网、局部 Wi-Fi 弱或单设备问题，再查对应答案。账单问题比较两期明细，网络问题比较有线与无线表现；原因不同，处理入口也不同。</p>
              <dl className="mt-4 space-y-3 text-sm leading-7">
                <div><dt className="font-bold">适用条件</dt><dd>适合已装宽带后的账单、Wi-Fi、断网和设备问题；新装或搬家办理条件进入主站宽带 FAQ。</dd></div>
                <div><dt className="font-bold">下一步</dt><dd className="flex flex-col gap-2 sm:flex-row sm:gap-4"><Link href="/internet/price-hike" className="page-nav-button">账单变化进入涨价核对</Link><Link href="/internet/diagnosis" className="page-nav-button">网络异常进入逐步排查</Link></dd></div>
              </dl>
            </section>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600"><Link href="https://baymediastar.com/internet/faq" className="font-semibold underline underline-offset-4">准备新装或搬家办理？查看主站宽带办理 FAQ</Link></p>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
              从账单涨价、Wi-Fi、断网、Modem、安装、地址、搬家到换运营商，
              先找到最接近的问题，再看具体原因和处理方法。
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/internet/diagnosis"
                className="page-nav-button"
              >
                不知道属于哪一类？先做诊断
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/bill-optimization"
                className="page-nav-button"
              >
                主要是账单变贵
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>

          {/* 问题分类入口 */}
          <section className="mt-4">
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
          <section className="mt-4">
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
          <section className="mt-4 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
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
                  className="page-nav-button"
                >
                  进入宽带问题诊断
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>

          {/* 人工边界 */}
          <section className="mx-auto mt-4 max-w-3xl text-center">
            <h2 className="text-xl font-black">
              FAQ 能解释规则，但不能读取你的账户
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#526170]">
              具体收费、设备归还、旧账户占用、地址资格和安装状态，
              最终仍需结合账单、地址或运营商系统记录核实。
            </p>

            <Link
              href="/contact"
              className="page-nav-button"
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

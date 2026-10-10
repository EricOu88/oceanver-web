import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CircleDollarSign,
  CircleHelp,
  Gauge,
  Home,
  MapPin,
  Router,
  Search,
  WifiOff,
} from 'lucide-react'
import { getCanonicalUrl } from '@/lib/seo-utils'

export const metadata: Metadata = {
  title: { absolute: '美国宽带问题怎么判断？账单、网速、断网、搬家与换网｜美国鸿达电讯' },
  description:
    '美国家庭宽带账单涨价、Wi-Fi 慢、断网、Modem、安装、搬家或想换运营商怎么办？先判断问题来源，再决定自查、调整方案还是换网。',
  alternates: {
    canonical: getCanonicalUrl('/internet'),
  },
}

const problemEntries = [
  {
    icon: <CircleDollarSign size={24} />,
    title: '账单突然变贵',
    description:
      '优惠到期、设备费、AutoPay 折扣变化、附加服务或不明收费。',
    href: '/bill-optimization',
    action: '先检查账单',
  },
  {
    icon: <Gauge size={24} />,
    title: '网速慢 / Wi-Fi 不稳定',
    description:
      '先分清是家庭 Wi-Fi、单台设备，还是入户线路和运营商网络。',
    href: '/internet/diagnosis',
    action: '开始判断',
  },
  {
    icon: <WifiOff size={24} />,
    title: '断网 / 经常掉线',
    description:
      '所有设备不能用、Gateway 异常、每天反复掉线或重启才恢复。',
    href: '/internet/diagnosis',
    action: '开始判断',
  },
  {
    icon: <Router size={24} />,
    title: 'Modem / Router / 设备问题',
    description:
      '设备无法激活、设备收费、退还争议、自购设备或灯号异常。',
    href: '/internet/diagnosis',
    action: '开始判断',
  },
  {
    icon: <MapPin size={24} />,
    title: '安装 / 搬家 / 地址问题',
    description:
      'Unit、旧住户账户、地址显示无服务、自助安装失败或搬家迁移。',
    href: '/internet/diagnosis',
    action: '开始判断',
  },
  {
    icon: <Search size={24} />,
    title: '想换宽带，不知道值不值得',
    description:
      '先判断到底是长期价格、线路质量还是家庭网络问题，再比较运营商。',
    href: '/internet/providers',
    action: '开始比较',
  },
]

const decisionSteps = [
  {
    number: '01',
    title: '先确认发生了什么',
    description:
      '账单、Wi-Fi、线路、设备、安装和地址问题，解决方法完全不同。',
  },
  {
    number: '02',
    title: '先排除不需要换网的情况',
    description:
      '卧室 Wi-Fi 弱、单台设备慢、一次性收费，都可能不需要换运营商。',
  },
  {
    number: '03',
    title: '再决定留、调还是换',
    description:
      '真正需要比较时，再看长期月费、地址、设备、安装和切换成本。',
  },
]

export default function InternetPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#526170] transition hover:text-[#164B78]"
        >
          <ArrowLeft size={16} />
          返回首页
        </Link>

        {/* HERO */}
        <section className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm font-bold tracking-wide text-[#2786A5]">
            美国家庭宽带问题入口
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            宽带出了问题？
            <br className="sm:hidden" />
            先判断发生了什么
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
            账单涨价、网速慢、Wi-Fi、断网、Modem、安装、搬家或想换运营商，
            不需要从“哪家最好”开始。先找出问题来源，再决定下一步。
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/internet/diagnosis"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3 font-bold text-white transition hover:bg-[#103B60]"
            >
              开始宽带问题诊断
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/bill-optimization"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3 font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
            >
              先检查账单为什么变贵
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* 问题入口 */}
        <section className="mt-16">
          <p className="text-sm font-bold text-[#2786A5]">
            先选最接近你现在的情况
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            你现在最想解决哪一个问题？
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problemEntries.map((item) => (
              <ProblemCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                href={item.href}
                action={item.action}
              />
            ))}
          </div>
        </section>

        {/* Oceanver 判断方法 */}
        <section className="mt-16 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <p className="text-sm font-bold text-[#2786A5]">
            不要一看到问题就先换网
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            我们建议按这 3 步判断
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {decisionSteps.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-[#D5E5EC] bg-white p-5"
              >
                <p className="text-sm font-black text-[#2786A5]">
                  {item.number}
                </p>

                <h3 className="mt-2 font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#526170]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 涨价专项 */}
        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <InfoCard
            icon={<CircleDollarSign size={24} />}
            title="如果最明显的问题是：账单越来越贵"
          >
            <p>
              先不要急着换运营商。第一步是确认到底是优惠到期、
              基础月费变化、设备费、折扣消失还是一次性收费。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/bill-optimization"
                className="inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
              >
                先做账单检查
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/internet/price-hike"
                className="inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
              >
                已确认长期涨价
                <ArrowRight size={16} />
              </Link>
            </div>
          </InfoCard>

          <InfoCard
            icon={<Search size={24} />}
            title="如果已经决定开始比较运营商"
          >
            <p>
              到这一步再比较 Xfinity、AT&amp;T Fiber、Spectrum、
              Frontier。重点不是谁广告价格最低，而是你的地址、
              长期费用、安装和设备条件。
            </p>

            <Link
              href="/internet/providers"
              className="inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
            >
              进入宽带运营商比较
              <ArrowRight size={16} />
            </Link>
          </InfoCard>
        </section>

        {/* 常见误判 */}
        <section className="mt-16">
          <p className="text-sm font-bold text-[#2786A5]">
            很多人其实不是“宽带不够好”
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            先排除这几种常见误判
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {[
              [
                '一个房间 Wi-Fi 弱',
                '更可能是 Router 位置、墙体或覆盖问题，升级套餐不一定有效。',
              ],
              [
                '只有一台设备慢',
                '先检查设备和 Wi-Fi 连接，不能直接判断是运营商问题。',
              ],
              [
                '第一期账单特别高',
                '安装、激活和账单周期可能造成一次性增加。',
              ],
              [
                '另一家广告价格更低',
                '真正需要比较的是促销后价格、设备、安装和长期总成本。',
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#D5E5EC] bg-white p-5"
              >
                <h3 className="font-bold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-[#526170]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <CircleHelp className="text-[#2786A5]" size={24} />
                <h2 className="text-2xl font-black">
                  想自己先查具体问题？
                </h2>
              </div>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#526170]">
                宽带 FAQ 收录账单、安装、设备、断网、地址、搬家等具体问题。
                如果已经知道自己遇到的是哪一种情况，可以直接进入知识库。
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/internet/faq"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-5 py-3 font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
              >
                查看宽带常见问题
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/internet/home-network-guide"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-5 py-3 font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
              >
                家里 Wi-Fi / Router 怎么判断
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* 人工边界 */}
        <section className="mx-auto mt-16 max-w-4xl text-center">
          <h2 className="text-2xl font-black">
            有些问题页面无法替你确认
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#526170]">
            具体账户收费、旧住户记录、设备归还、安装资格和地址后台状态，
            最终仍需要结合运营商账户或系统记录核实。
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3 font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
          >
            需要时进入人工核实
            <ArrowRight size={18} />
          </Link>
        </section>

        <p className="mt-12 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与官方规则为准。
        </p>
      </div>
    </main>
  )
}

function ProblemCard({
  icon,
  title,
  description,
  href,
  action,
}: {
  icon: ReactNode
  title: string
  description: string
  href: string
  action: string
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-[#D5E5EC] bg-white p-6 transition hover:border-[#2786A5] hover:shadow-sm"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8FA] text-[#164B78]">
        {icon}
      </div>

      <h3 className="mt-4 text-lg font-black">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#526170]">
        {description}
      </p>

      <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#164B78]">
        {action}
        <ArrowRight
          size={16}
          className="transition group-hover:translate-x-0.5"
        />
      </div>
    </Link>
  )
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <div className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8FA] text-[#164B78]">
        {icon}
      </div>

      <h2 className="mt-4 text-xl font-black">
        {title}
      </h2>

      <div className="mt-4 space-y-4 text-sm leading-7 text-[#526170]">
        {children}
      </div>
    </div>
  )
}
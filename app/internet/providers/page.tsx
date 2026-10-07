import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Home,
  MapPin,
  Router,
  ShieldCheck,
  TimerReset,
  Wifi,
} from 'lucide-react'

export const metadata: Metadata = {
  title: '美国宽带运营商怎么比较？先算长期费用再决定｜美国鸿达电讯',
  description:
    '比较美国宽带运营商前，先确认地址覆盖、真实长期月费、设备和安装费用、网络需求及切换成本。Xfinity、AT&T Fiber、Spectrum、Frontier 不应只看促销价。',
  alternates: {
    canonical: 'https://oceanver.com/internet/providers',
  },
  keywords: [
    '美国宽带运营商比较',
    '美国宽带怎么选',
    '宽带要不要换',
    'Xfinity Spectrum AT&T Fiber 比较',
    '宽带长期费用',
    '宽带换网成本',
  ],
}

const comparisonDimensions = [
  {
    icon: <MapPin size={22} />,
    title: '1. 地址到底能不能装',
    description:
      '美国宽带首先受地址限制。同一条街、同一个公寓楼，甚至不同 Unit，可选运营商都可能不同。',
  },
  {
    icon: <CircleDollarSign size={22} />,
    title: '2. 不只看广告月费',
    description:
      '真正要比较的是促销结束后的月费、设备、安装、附加项目，以及可能消失的折扣。',
  },
  {
    icon: <Wifi size={22} />,
    title: '3. 先确认你真正需要什么',
    description:
      '普通上网、远程办公、多人视频、上传文件和家庭 Wi-Fi 问题，需要解决的并不是同一件事。',
  },
  {
    icon: <Router size={22} />,
    title: '4. 把设备和安装一起算',
    description:
      'Gateway、Router、Modem、自助安装、Technician 等条件都会影响真实使用成本和切换难度。',
  },
  {
    icon: <TimerReset size={22} />,
    title: '5. 看长期成本，不只看第一个月',
    description:
      '短期促销看起来很便宜，但真正重要的是优惠结束后，长期费用是否仍符合你的预算。',
  },
]

const providers = [
  {
    name: 'Xfinity',
    href: '/internet/xfinity',
    summary:
      '比较时重点看地址可用性、促销期限、设备安排以及优惠结束后的实际月费。',
    checks: [
      '当前地址是否可以安装',
      '促销结束后价格如何变化',
      '设备和安装是否产生额外费用',
    ],
  },
  {
    name: 'AT&T Fiber',
    href: '/internet/att-fiber',
    summary:
      '如果地址有 Fiber，可重点比较上传需求、长期价格、设备条件和安装方式。',
    checks: [
      '地址是否真正有 Fiber',
      '上下行需求是否重要',
      '安装和账户条件是否合适',
    ],
  },
  {
    name: 'Spectrum',
    href: '/internet/spectrum',
    summary:
      '比较时先确认地址、长期月费、设备和安装条件，不要只看当前宣传价格。',
    checks: [
      '具体地址是否覆盖',
      '当前与长期费用',
      '设备和安装安排',
    ],
  },
  {
    name: 'Frontier Fiber',
    href: '/internet/frontier',
    summary:
      'Frontier 的可用性高度依赖具体地址，有 Fiber 时再进一步比较费用和安装条件。',
    checks: [
      '地址是否有 Fiber',
      '实际长期费用',
      '安装和设备条件',
    ],
  },
]

const wrongReasonsToSwitch = [
  {
    title: '只有一个房间 Wi-Fi 弱',
    description:
      '这更可能是家庭网络覆盖问题。换运营商后，如果 Router 位置和环境没有变化，问题仍可能存在。',
  },
  {
    title: '第一期账单特别高',
    description:
      '先检查安装、激活、设备或账单周期等一次性费用，不一定代表以后每个月都这么高。',
  },
  {
    title: '只有一台设备速度慢',
    description:
      '先排查设备本身、Wi-Fi 连接和软件问题，不能直接判断是运营商速度不够。',
  },
  {
    title: '看到另一家广告价格更低',
    description:
      '广告价不等于长期总成本。促销期限、设备和安装费用都要一起算。',
  },
]

export default function InternetProvidersPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/internet/diagnosis"
          className="inline-flex items-center gap-2 text-sm text-[#526170] transition hover:text-[#164B78]"
        >
          <ArrowLeft size={16} />
          返回宽带问题诊断
        </Link>

        {/* HERO */}
        <section className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm font-bold tracking-wide text-[#2786A5]">
            美国家庭宽带比较
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            想换宽带？
            <br className="sm:hidden" />
            先比较长期成本，再决定换哪家
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
            Xfinity、AT&amp;T Fiber、Spectrum、Frontier
            不能只看谁现在广告价格最低。先确认地址、真实长期月费、设备和安装条件，
            再判断换网到底值不值得。
          </p>
        </section>

        {/* 先判断是否真的应该来到这里 */}
        <section className="mt-12 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold text-[#2786A5]">
                先确认一件事
              </p>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                你是真的需要换运营商，还是只需要解决当前问题？
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#526170]">
                如果你只是 Wi-Fi 某个房间弱、设备异常、第一期账单偏高，
                换运营商未必解决问题。只有确认问题来自长期价格、线路质量、
                地址变化或当前服务确实不合适后，比较运营商才有意义。
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="/internet/diagnosis"
                className="flex items-center justify-between rounded-2xl border border-[#D5E5EC] bg-white p-4 font-bold text-[#164B78] transition hover:border-[#2786A5]"
              >
                还没判断清楚问题
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/internet/price-hike"
                className="flex items-center justify-between rounded-2xl border border-[#D5E5EC] bg-white p-4 font-bold text-[#164B78] transition hover:border-[#2786A5]"
              >
                主要问题是账单涨价
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* 五个比较维度 */}
        <section className="mt-16">
          <p className="text-sm font-bold text-[#2786A5]">
            不要先问哪家最好
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            真正值得比较的是这 5 件事
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {comparisonDimensions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#D5E5EC] bg-white p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F8FA] text-[#164B78]">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-bold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-[#526170]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 真正比较运营商 */}
        <section className="mt-16">
          <p className="text-sm font-bold text-[#2786A5]">
            已经确认需要开始比较
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            再看不同运营商分别要核对什么
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-[#526170]">
            下面不是“谁最好”的排名。每个运营商是否适合你，都要回到具体地址、
            当前价格和实际使用需求。
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {providers.map((provider) => (
              <ProviderCard
                key={provider.name}
                name={provider.name}
                href={provider.href}
                summary={provider.summary}
                checks={provider.checks}
              />
            ))}
          </div>
        </section>

        {/* 不应该因为这些原因马上换 */}
        <section className="mt-16 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <p className="text-sm font-bold text-[#2786A5]">
            很多人换网之前会误判
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            这 4 种情况，先不要急着换运营商
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {wrongReasonsToSwitch.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#D5E5EC] bg-white p-5"
              >
                <div className="flex gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#2786A5]"
                  />

                  <div>
                    <h3 className="font-bold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-[#526170]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 长期成本 */}
        <section className="mt-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <InfoCard
              icon={<CircleDollarSign size={24} />}
              title="不要只比较“每月多少钱”"
            >
              <p>
                真正应该比较的是：
                <strong className="text-[#202D3A]">
                  基础月费 + 设备 + 安装 + 附加服务 + 促销结束后的价格
                </strong>
                。
              </p>

              <p>
                如果当前宽带只是促销结束后变贵，可以先判断留下来、
                调整方案还是换网哪个长期成本更合理。
              </p>

              <Link
                href="/internet/price-hike"
                className="inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
              >
                查看宽带涨价后的判断
                <ArrowRight size={16} />
              </Link>
            </InfoCard>

            <InfoCard
              icon={<ShieldCheck size={24} />}
              title="新运营商确认好之前，不要先取消旧宽带"
            >
              <p>
                网站显示“可安装”只是第一步。真正切换前，还要确认地址、
                安装时间、设备和订单状态。
              </p>

              <p>
                搬家、新建地址、公寓 Unit 或旧账户占用，都可能影响最终安装。
              </p>

              <Link
                href="/internet/diagnosis"
                className="inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
              >
                地址或安装有问题，先做诊断
                <ArrowRight size={16} />
              </Link>
            </InfoCard>
          </div>
        </section>

        {/* Residential / business */}
        <section className="mt-16 rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4F8FA] text-[#164B78]">
              <Home size={22} />
            </div>

            <div>
              <h2 className="text-xl font-black">
                住家宽带和商业宽带不要直接混在一起比较
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#526170]">
                两者的价格结构、服务条款、设备和支持方式可能不同。
                如果是办公室、店铺或其他商业用途，应根据商业场景单独判断，
                不能简单认为商业宽带一定更快或更稳定。
              </p>

              <Link
                href="/internet/business-vs-residential"
                className="mt-4 inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
              >
                查看住家与商业宽带区别
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 最终出口 */}
        <section className="mx-auto mt-16 max-w-4xl text-center">
          <h2 className="text-2xl font-black sm:text-3xl">
            比较的目标不是找“最好”的运营商
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#526170]">
            而是找到在你的地址、使用需求和长期预算下，
            更合适、成本也更清楚的方案。
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/internet/diagnosis"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3 font-bold text-white transition hover:bg-[#103B60]"
            >
              还没判断清楚，先做诊断
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/internet/faq"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3 font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
            >
              查看宽带常见问题
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <p className="mt-12 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。
        </p>
      </div>
    </main>
  )
}

function ProviderCard({
  name,
  href,
  summary,
  checks,
}: {
  name: string
  href: string
  summary: string
  checks: string[]
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-[#D5E5EC] bg-white p-6 transition hover:border-[#2786A5] hover:shadow-sm"
    >
      <h3 className="text-xl font-black">{name}</h3>

      <p className="mt-3 text-sm leading-6 text-[#526170]">
        {summary}
      </p>

      <p className="mt-5 text-sm font-bold text-[#202D3A]">
        比较前先确认：
      </p>

      <ul className="mt-3 space-y-2">
        {checks.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-sm leading-6 text-[#526170]"
          >
            <CheckCircle2
              size={16}
              className="mt-1 shrink-0 text-[#2786A5]"
            />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
        查看 {name} 的比较条件
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

      <h2 className="mt-4 text-xl font-black">{title}</h2>

      <div className="mt-4 space-y-4 text-sm leading-7 text-[#526170]">
        {children}
      </div>
    </div>
  )
}
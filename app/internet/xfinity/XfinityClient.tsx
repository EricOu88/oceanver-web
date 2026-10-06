'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  CircleHelp,
  Gauge,
  MapPin,
  Router,
  ShieldCheck,
  WifiOff,
} from 'lucide-react'

const problemCards = [
  {
    icon: <CircleDollarSign size={22} />,
    title: '账单越来越贵',
    description:
      '先确认是促销结束、基础月费、设备费、AutoPay 折扣还是一次性收费。',
    href: '/internet/xfinity/faq/xfinity-price-increase',
    action: '查看 Xfinity 涨价判断',
  },
  {
    icon: <Gauge size={22} />,
    title: '网速慢 / Wi-Fi 不稳定',
    description:
      '先判断是家庭 Wi-Fi、单台设备，还是入户线路和服务本身。',
    href: '/internet/diagnosis',
    action: '进入宽带问题诊断',
  },
  {
    icon: <WifiOff size={22} />,
    title: '断网 / 经常掉线',
    description:
      '确认是否所有设备同时受影响、Gateway 灯号以及是否存在区域中断。',
    href: '/internet/xfinity/faq/xfinity-outage',
    action: '查看断网问题',
  },
  {
    icon: <Router size={22} />,
    title: '设备 / Gateway 问题',
    description:
      '设备费、退还、激活、自购 Modem 或设备灯号异常，都应分别判断。',
    href: '/internet/xfinity/faq',
    action: '查看设备相关问题',
  },
  {
    icon: <MapPin size={22} />,
    title: '安装 / 地址问题',
    description:
      'Unit、旧账户、地址数据库和线路条件都可能影响实际安装结果。',
    href: '/internet/diagnosis',
    action: '判断地址与安装问题',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: '想换运营商',
    description:
      '先确认问题是不是长期价格或线路质量，再比较其他运营商。',
    href: '/internet/providers',
    action: '开始比较宽带方案',
  },
]

const doNotSwitchYet = [
  '只有一个房间 Wi-Fi 弱',
  '只有一台设备速度慢',
  '第一期账单有一次性费用',
  '还没有确认涨价是不是 recurring',
  '新运营商的地址和安装条件还没确认',
]

const startComparing = [
  '基础月费已经连续多期明显上涨',
  '促销结束后的长期价格明显超出预算',
  '线路或服务质量长期不稳定，排查后仍无改善',
  '搬家后当前服务条件不再适合',
  '已经确认其他运营商在地址上可用，并且长期成本更合理',
]

export default function XfinityClient() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/internet/providers"
          className="inline-flex items-center gap-2 text-sm text-[#526170] transition hover:text-[#164B78]"
        >
          <ArrowLeft size={16} />
          返回宽带运营商比较
        </Link>

        {/* HERO */}
        <section className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm font-bold tracking-wide text-[#2786A5]">
            Xfinity 宽带判断指南
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Xfinity 有问题，
            <br className="sm:hidden" />
            先判断原因，再决定要不要换
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
            如果你正在用 Xfinity，最常见的问题不是“该买哪个套餐”，
            而是账单涨价、Wi-Fi、掉线、设备、地址和安装。
            先判断问题属于哪一类，再决定继续用、调整还是比较其他运营商。
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/internet/diagnosis"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3 font-bold text-white transition hover:bg-[#103B60]"
            >
              先做宽带问题诊断
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/internet/xfinity/faq"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3 font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
            >
              查看 Xfinity FAQ
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* 问题入口 */}
        <section className="mt-16">
          <p className="text-sm font-bold text-[#2786A5]">
            先从问题本身开始
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            你现在遇到的是哪一种 Xfinity 问题？
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problemCards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border border-[#D5E5EC] bg-white p-6 transition hover:border-[#2786A5] hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8FA] text-[#164B78]">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-lg font-black">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#526170]">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#164B78]">
                  {item.action}
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 核心判断 */}
        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <InfoCard
            title="如果最主要的问题是账单涨价"
            icon={<CircleDollarSign size={23} />}
          >
            <p>
              先比较最近两到三期账单，不要只看总额。
              找出变化来自基础月费、Promotion / Credit、AutoPay、
              设备还是一次性收费。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/internet/xfinity/faq/xfinity-price-increase"
                className="inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
              >
                查看 Xfinity 涨价专项
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/bill-optimization"
                className="inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
              >
                做完整账单检查
                <ArrowRight size={16} />
              </Link>
            </div>
          </InfoCard>

          <InfoCard
            title="如果主要问题是速度或稳定性"
            icon={<Gauge size={23} />}
          >
            <p>
              不要先把 Wi-Fi 慢理解成套餐速度不够。
              如果靠近 Router 正常、网线正常，只有部分房间慢，
              更可能是家庭网络覆盖问题。
            </p>

            <Link
              href="/internet/diagnosis"
              className="inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
            >
              判断 Wi-Fi、设备还是线路
              <ArrowRight size={16} />
            </Link>
          </InfoCard>
        </section>

        {/* 不要急着换 */}
        <section className="mt-16 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <p className="text-sm font-bold text-[#2786A5]">
            Xfinity 有问题，不等于一定要换
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            这几种情况先不要急着换运营商
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {doNotSwitchYet.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-[#D5E5EC] bg-white p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#2786A5]"
                />

                <p className="text-sm leading-6 text-[#526170]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 值得比较 */}
        <section className="mt-16">
          <p className="text-sm font-bold text-[#2786A5]">
            什么情况下值得开始比较其他运营商
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            先确认是长期问题，再进入换网比较
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {startComparing.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-[#D5E5EC] bg-white p-5"
              >
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-[#164B78]"
                />

                <p className="text-sm leading-6 text-[#526170]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/internet/providers"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-6 py-3 font-bold text-white transition hover:bg-[#103B60]"
          >
            比较不同宽带运营商
            <ArrowRight size={18} />
          </Link>
        </section>

        {/* FAQ */}
        <section className="mt-16 rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <p className="text-sm font-bold text-[#2786A5]">
            Xfinity 专项知识库
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            常见 Xfinity 问题
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <FAQLink
              title="Xfinity 账单突然上涨"
              href="/internet/xfinity/faq/xfinity-price-increase"
            />

            <FAQLink
              title="Xfinity 提前取消和合约问题"
              href="/internet/xfinity/faq/xfinity-contract-early-termination"
            />

            <FAQLink
              title="Xfinity 账单为什么每个月不一样"
              href="/internet/xfinity/faq/xfinity-bill-changes"
            />

            <FAQLink
              title="Xfinity Data 使用与限制"
              href="/internet/xfinity/faq/xfinity-data-cap"
            />

            <FAQLink
              title="Xfinity 经常断网怎么办"
              href="/internet/xfinity/faq/xfinity-outage"
            />

            <FAQLink
              title="查看全部 Xfinity FAQ"
              href="/internet/xfinity/faq"
            />
          </div>
        </section>

        {/* 人工边界 */}
        <section className="mx-auto mt-16 max-w-4xl text-center">
          <CircleHelp
            size={28}
            className="mx-auto text-[#2786A5]"
          />

          <h2 className="mt-4 text-2xl font-black">
            具体账户和地址状态，页面无法直接读取
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#526170]">
            当前 Promotion、Credit、设备记录、地址 serviceability
            和最终订单条件，都可能因账户和地址而不同。
            页面可以帮助判断方向，最终仍需结合实际记录核实。
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3 text-sm font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
          >
            需要时进入人工核实
            <ArrowRight size={16} />
          </Link>
        </section>

        <p className="mt-12 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。
        </p>
      </div>
    </main>
  )
}

function InfoCard({
  title,
  icon,
  children,
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
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

function FAQLink({
  title,
  href,
}: {
  title: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-4 font-bold text-[#202D3A] transition hover:border-[#2786A5]"
    >
      <span>{title}</span>

      <ArrowRight
        size={17}
        className="shrink-0 text-[#164B78] transition group-hover:translate-x-0.5"
      />
    </Link>
  )
}
'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  CircleHelp,
  RefreshCcw,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'


const hikeReasons = [
  {
    title: '原来的优惠或 Credit 到期',
    description:
      '促销结束后，基础月费可能恢复到当前账户适用的正常价格。',
  },
  {
    title: '基础月费发生变化',
    description:
      '即使没有更换套餐，运营商也可能调整部分服务的基础价格。',
  },
  {
    title: 'AutoPay / Paperless 折扣变化',
    description:
      '付款方式、电子账单设置或账户资格变化，都可能让原来的折扣消失。',
  },
  {
    title: '设备费或附加服务增加',
    description:
      'Gateway、Router、Extender、附加服务或设备记录变化，都可能增加 recurring charge。',
  },
  {
    title: '一次性费用混在账单里',
    description:
      '安装、激活、Technician、设备事件或账单周期调整，可能只影响一期账单。',
  },
  {
    title: '套餐、速度档位或组合服务变化',
    description:
      '如果近期改过速度、Bundle 或服务内容，总价也可能随之变化。',
  },
]

const stayConditions = [
  '涨价来自一次性费用，而不是长期 recurring charge',
  '服务质量稳定，长期价格仍在你可接受范围内',
  '当前问题主要是 Wi-Fi、Router 或设备，而不是运营商本身',
  '新运营商的地址、安装和长期价格还没有确认',
]

const compareConditions = [
  '基础月费已经连续两期或以上明显上涨',
  '原有优惠结束后，新的长期价格超出预算',
  '设备费或附加项目使总成本长期偏高',
  '服务质量长期不稳定，而且多次排查仍没有改善',
  '搬家后当前运营商条件明显不再合适',
]

export default function PriceHikeClient() {
  return (
    <>
      <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
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
              宽带长期涨价判断
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              宽带账单涨了，
              <br className="sm:hidden" />
              下一步是留、调还是换？
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
              先确认涨价是不是长期的，再比较当前服务质量、真实月费、
              新方案长期成本和切换条件。不是所有涨价都需要马上换运营商。
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/bill-optimization"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3 font-bold text-white transition hover:bg-[#103B60]"
              >
                还没确认原因，先检查账单
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/internet/providers"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3 font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
              >
                已经确认长期涨价，开始比较
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>

          {/* 涨价原因 */}
          <section className="mt-16">
            <p className="text-sm font-bold text-[#2786A5]">
              先确认到底是哪一项变了
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              宽带账单变贵，常见原因有这 6 类
            </h2>

            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {hikeReasons.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#D5E5EC] bg-white p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F8FA] text-[#164B78]">
                    <CircleDollarSign size={21} />
                  </div>

                  <h3 className="mt-4 font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#526170]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 一次性 vs 长期 */}
          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <InfoCard
              icon={<RefreshCcw size={23} />}
              title="先判断：只是这一次高，还是以后都会高"
            >
              <p>
                安装、激活、Technician、设备事件或账期调整，
                可能只影响一期账单。
              </p>

              <p>
                真正需要重点判断的是：
                <strong className="text-[#202D3A]">
                  同一项收费是否已经连续出现，以及它是不是 recurring。
                </strong>
              </p>

              <Link
                href="/bill-optimization"
                className="inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
              >
                对比最近两期账单
                <ArrowRight size={16} />
              </Link>
            </InfoCard>

            <InfoCard
              icon={<TrendingUp size={23} />}
              title="如果已经连续涨了两期以上"
            >
              <p>
                如果基础月费、设备费或其他 recurring charge
                已经连续出现，就更接近长期成本变化。
              </p>

              <p>
                到这一步才值得认真比较：
                继续留、调整现有方案，还是换到其他运营商。
              </p>
            </InfoCard>
          </section>

          {/* 判断 promo */}
          <section className="mt-16 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
            <p className="text-sm font-bold text-[#2786A5]">
              判断是不是优惠到期
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              先看账单，不要只看总金额
            </h2>

            <ol className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                '对比本月和上月相同服务项目。',
                '查看 Promotion、Discount 或 Credit 是否减少或消失。',
                '确认基础 Internet 月费是否变化。',
                '检查 AutoPay / Paperless Billing 折扣。',
                '查看 Equipment、Gateway 或其他 recurring charge。',
                '排除 Installation、Activation、Prorated charge 等一次性项目。',
              ].map((item, index) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-[#D5E5EC] bg-white p-4 text-sm leading-6 text-[#526170]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F4F8FA] text-xs font-black text-[#164B78]">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16 rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
            <p className="text-sm font-bold text-[#2786A5]">
              优惠快到期时先准备
            </p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              不用等到涨价以后才开始查
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#526170]">
              不给统一“提前几天”的固定答案。更稳妥的做法是：一旦账单、订单或账户里已经能看到 Promotion / Credit 的结束信号，就开始把后续价格和切换条件查清楚。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                '保存当前账单与 Promotion / Credit 名称、金额和适用条件。',
                '确认优惠结束后的常规价格，以及设备和附加费用是否会继续。',
                '确认当前地址有哪些真实可用的替代方案，不只看广告覆盖图。',
                '如果考虑换网，先确认新服务可安装、预计启用时间和设备安排。',
                '旧服务不要过早取消；先把新服务条件和切换顺序确认清楚。',
                '涉及重新办理资格、当前优惠或账户特殊条件时，必须按真实账户核实。',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-4">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#2786A5]" />
                  <p className="text-sm leading-6 text-[#526170]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 不一定要换 */}
          <section className="mt-16">
            <p className="text-sm font-bold text-[#2786A5]">
              涨价不等于一定要换
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              这几种情况，可以先不急着换运营商
            </h2>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {stayConditions.map((item) => (
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

          {/* 值得开始比较 */}
          <section className="mt-16 rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
            <p className="text-sm font-bold text-[#2786A5]">
              什么情况值得认真比较新方案
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              出现这些情况，可以进入比较阶段
            </h2>

            <div className="mt-6 space-y-3">
              {compareConditions.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl bg-[#F4F8FA] p-4"
                >
                  <ShieldCheck
                    size={19}
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
              开始比较宽带方案
              <ArrowRight size={18} />
            </Link>
          </section>

          {/* 运营商专项 */}
          <section className="mt-16">
            <p className="text-sm font-bold text-[#2786A5]">
              已经知道当前是哪家运营商
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              可以继续查看对应的账单问题
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#526170]">
              不同运营商的账单结构、设备和账户规则不同。
              如果已经知道当前运营商，可以继续查看专项 FAQ。
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <ProviderLink
                name="Xfinity"
                description="查看 Xfinity 账单上涨和收费项目判断。"
                href="/internet/xfinity/faq/xfinity-bill-sudden-increase"
              />

              <ProviderLink
                name="Spectrum"
                description="查看 Spectrum 账单、费用和账户相关常见问题。"
                href="/internet/spectrum/faq"
              />

              <ProviderLink
                name="AT&T Fiber"
                description="查看 AT&T Fiber 价格变化和账单判断。"
                href="/internet/att/fiber/faq/att-fiber-price-increase"
              />

              <ProviderLink
                name="Frontier"
                description="查看 Frontier 账单、地址和长期成本相关问题。"
                href="/internet/frontier/faq"
              />
            </div>
          </section>

          {/* 三个出口 */}
          <section className="mt-16 grid gap-4 md:grid-cols-3">
            <DecisionCard
              title="还没看懂账单"
              description="先确认到底是哪一项费用增加。"
              href="/bill-optimization"
              action="继续账单检查"
            />

            <DecisionCard
              title="不确定是不是宽带本身的问题"
              description="先排除 Wi-Fi、设备、线路和地址问题。"
              href="/internet/diagnosis"
              action="进入宽带诊断"
            />

            <DecisionCard
              title="已经确认长期成本太高"
              description="再比较不同运营商的长期费用和安装条件。"
              href="/internet/providers"
              action="开始比较运营商"
            />
          </section>

          {/* 人工边界 */}
          <section className="mx-auto mt-16 max-w-4xl text-center">
            <CircleHelp
              size={28}
              className="mx-auto text-[#2786A5]"
            />

            <h2 className="mt-4 text-2xl font-black">
              有些价格只能结合具体账户确认
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#526170]">
              当前优惠资格、账户 Credit、设备记录和最终可选方案，
              都可能因账户和地址而不同。页面可以帮助判断方向，
              但不能代替运营商后台确认。
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
            最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与官方规则为准。
          </p>
        </div>
      </main>
    </>
  )
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
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

function ProviderLink({
  name,
  description,
  href,
}: {
  name: string
  description: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-[#D5E5EC] bg-white p-5 transition hover:border-[#2786A5] hover:shadow-sm"
    >
      <h3 className="font-black">
        {name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#526170]">
        {description}
      </p>

      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#164B78]">
        查看专项问题
        <ArrowRight
          size={15}
          className="transition group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  )
}

function DecisionCard({
  title,
  description,
  href,
  action,
}: {
  title: string
  description: string
  href: string
  action: string
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 transition hover:border-[#2786A5]"
    >
      <h3 className="font-black">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#526170]">
        {description}
      </p>

      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#164B78]">
        {action}
        <ArrowRight
          size={15}
          className="transition group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  )
}

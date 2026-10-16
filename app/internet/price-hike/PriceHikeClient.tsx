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

const verificationChecks = [
  '基础月费增加：确认调整金额、生效日期，以及是否有价格变化通知。',
  '优惠或 Credit 消失：确认结束日期、适用条件和结束后的月费。',
  '设备费或附加项目增加：核对设备记录、服务名称及收费是否持续。',
  '同时存在服务质量问题：将账单变化与 Wi-Fi、设备或线路故障分开记录，分别排查。',
  '近期搬家或变更服务：核对新旧地址、速度档位、组合服务及按比例计费。',
]

export default function PriceHikeClient() {
  return (
    <>
      <main className="compact-page min-h-screen bg-[#FCFDFE] px-4 py-4 text-[#202D3A] sm:px-6 sm:py-6">
        <div className="mx-auto max-w-6xl">
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
              美国宽带账单涨价原因排查
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              现有宽带账单涨价，先确认哪一项变化
            </h1>
            <p data-page-answer className="best-answer speakable-summary mt-5 text-left leading-7 text-[#526170]">
              宽带账单变贵，可能来自优惠到期、基础月费调整、AutoPay 折扣变化、设备或附加服务收费、一次性费用，以及套餐、速度档位或组合服务变化。先找出变化项目、金额和生效账期，再向运营商确认该费用是否会持续收取。
            </p>
            <div className="mt-6 grid gap-4 text-left md:grid-cols-2" aria-label="选择账单检查方式">
              <section aria-labelledby="self-check-heading" className="flex flex-col rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 sm:p-6">
                <h2 id="self-check-heading" className="text-xl font-black">自己查</h2>
                <p className="mt-3 flex-1 leading-7 text-[#526170]">按步骤核对账单，找出涨价原因。</p>
                <a href="#bill-self-check" className="page-nav-button mt-5 min-h-12 justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78]">
                  开始自助检查 <ArrowRight size={16} aria-hidden="true" />
                </a>
              </section>
              <section aria-labelledby="assisted-check-heading" data-contact-location="price_hike_hero" className="flex flex-col rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 sm:p-6">
                <h2 id="assisted-check-heading" className="text-xl font-black">客服帮查</h2>
                <p className="mt-3 flex-1 leading-7 text-[#526170]">不想自己查？中文客服协助核对账单。</p>
                <div className="mt-5 flex flex-col gap-3">
                  <a href="tel:15108496191" className="page-nav-button min-h-12 justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78]">电话咨询：510-849-6191</a>
                  <Link href="/contact#wechat-qr" data-contact-method="wechat" className="page-nav-button min-h-12 justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78]">微信咨询</Link>
                </div>
              </section>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#526170]">适合已经使用美国宽带、发现账单总额增加、月费变贵或折扣消失的用户。</p>

          </section>

          {/* 涨价原因 */}
          <section id="bill-self-check" tabIndex={-1} aria-labelledby="bill-self-check-heading" className="mt-4 scroll-mt-24">
            <p className="text-sm font-bold text-[#2786A5]">
              先确认到底是哪一项变了
            </p>

            <h2 id="bill-self-check-heading" className="mt-2 text-2xl font-black sm:text-3xl">
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

          {/* 按账单证据继续判断：不重复创建专题页面 */}
          <section className="mt-4" aria-labelledby="bill-evidence-heading">
            <p className="text-sm font-bold text-[#2786A5]">按实际账单分流</p>
            <h2 id="bill-evidence-heading" className="mt-2 text-2xl font-black sm:text-3xl">
              找到变化项目后，下一步怎么判断？
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#526170]">
              建议同时打开最近两期完整账单，按相同项目逐项比较。以下是排查方向，不代表已经核实你的账户。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: '优惠或 Credit 减少',
                  check: '找出 Promotion / Discount / Credit 的名称、金额和结束说明。',
                  caution: '不能仅凭优惠消失，就认定原价可以续回。',
                },
                {
                  title: '自动付款折扣消失',
                  check: '核对 AutoPay、无纸账单、付款方式及对应账期。Xfinity 当前每月 $10 的相关折扣要求符合资格的 Internet 账户使用银行账户自动扣款并启用无纸账单；信用卡、借记卡不符合该折扣条件，变更后可能需要最多两个账期显示。其他运营商及旧优惠按各自规则核实。',
                  caution: '重新设置不代表之前少给的折扣一定会补发。',
                },
                {
                  title: '设备或附加服务收费增加',
                  check: '分开比较 Gateway、Router、Extender、租赁费和附加项目。',
                  caution: '自行购买设备前，仍需核对兼容性与支持责任。',
                },
                {
                  title: '只有本期出现额外费用',
                  check: '查看安装、激活、技术员上门、按比例计费及调整项目。',
                  caution: '一次性收费不等于以后每个月都会增加。',
                },
                {
                  title: '基础 Internet 月费变高',
                  check: '对比同名基础月费，查看运营商通知和新账期。',
                  caution: '尚未核对切换成本前，不要直接取消现有服务。',
                },
                {
                  title: '取消服务后仍收到账单',
                  check: '核对服务终止日期、最后账期、设备归还及付款记录。',
                  caution: '最后账单不一定是错误收费，应先确认账单明细。',
                  href: '/internet/faq/after-cancel-final-bill',
                  action: '继续查看取消后的最后账单',
                },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#D5E5EC] bg-white p-5">
                  <h3 className="font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#526170]"><strong className="text-[#202D3A]">先检查：</strong>{item.check}</p>
                  <p className="mt-2 text-sm leading-7 text-[#526170]"><strong className="text-[#202D3A]">不要直接推断：</strong>{item.caution}</p>
                  {item.href && (
                    <Link href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#164B78] underline underline-offset-4">
                      {item.action} <ArrowRight size={15} />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* 一次性 vs 长期 */}
          <section className="mt-4 grid gap-6 lg:grid-cols-2">
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
                  增加的项目是持续性月费，还是一次性费用；应结合账单标注、适用条款和运营商确认判断。
                </strong>
              </p>

              <p>对比最近两期账单时，请按同名收费项目核对，不要只比较应付总额。</p>
            </InfoCard>

            <InfoCard
              icon={<TrendingUp size={23} />}
              title="如何确认增加的费用会不会持续"
            >
              <p>
                对比最近两期账单，有助于发现重复收费；是否属于持续费用，还应核对项目说明、生效日期和结束条件。
              </p>

              <p>
                即使只出现一期，也可以向运营商确认后续是否继续收取，无需等待第二期才开始核实。
              </p>
            </InfoCard>
          </section>

          {/* 判断 promo */}
          <section className="mt-4 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
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

          <section className="mt-4 rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
            <p className="text-sm font-bold text-[#2786A5]">
              优惠快到期时先准备
            </p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              不用等到涨价以后才开始查
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#526170]">
              不给统一“提前几天”的固定答案。一旦账单、订单或账户显示 Promotion / Credit 即将结束，就记录结束日期，并向运营商确认结束后的基础月费、折扣及设备收费。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                '保存当前账单与 Promotion / Credit 名称、金额和适用条件。',
                '确认优惠结束后的常规价格，以及设备和附加费用是否会继续。',
                '核对优惠结束日期，以及结束后的价格从哪个账期生效。',
                '确认 AutoPay / Paperless 折扣是否仍适用，有无付款方式或资格变化。',
                '如另行考虑换网，先确认新服务的安装和启用安排，不要过早取消旧服务。',
                '对无法解释的优惠、Credit 或收费，记录项目名称、金额和运营商答复。',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-4">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#2786A5]" />
                  <p className="text-sm leading-6 text-[#526170]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 不一定要换 */}
          <section className="mt-4">
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

          {/* 收费核实清单 */}
          <section className="mt-4 rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
            <p className="text-sm font-bold text-[#2786A5]">
              哪些变化还需要向运营商确认
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              发现这些情况，先核实收费依据
            </h2>

            <div className="mt-6 space-y-3">
              {verificationChecks.map((item) => (
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

            <p className="mt-5 text-sm leading-7 text-[#526170]">联系运营商时，可逐项询问：这笔费用为什么增加、何时生效、是否持续收取，以及是否需要更正账单。</p>
          </section>

          {/* 运营商专项 */}
          <section className="mt-4">
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
          <section className="mt-4 grid gap-4 md:grid-cols-3">
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
              title="已核实涨价原因，仍需咨询方案"
              description="账单项目和后续月费已确认后，如仍需评估调整或换网，可前往 BayMediaStar 咨询。"
              href="https://baymediastar.com/internet/price-hike"
              action="原因确认后，前往 BayMediaStar 咨询"
            />
          </section>

          {/* 人工边界 */}
          <section className="mx-auto mt-4 max-w-4xl text-center">
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

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#526170]">
              咨询前可准备运营商名称、最近两期账单中变化的项目、优惠名称及设备费用；分享账单前请遮盖姓名、地址和账户号码。
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm font-semibold leading-7 text-[#526170]">
              请勿在公开评论中提交账户密码、验证码或完整账户号码；账户核验请使用官方或已确认安全的渠道。
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#526170]">核实具体收费依据、是否持续收取或是否需要更正账单，请以运营商对当前账户的确认为准。</p>
          </section>

        <section aria-labelledby="internet-official-sources" className="mt-4 rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 id="internet-official-sources" className="text-2xl font-black">官方规则与适用范围</h2>
          <p className="mt-3 text-sm leading-7 text-[#526170]">核实日期：2026年10月11日。以下来源用于核对对应运营商的规则，不代表已经核实你的账户，也不能套用于其他运营商、商业账户或所有旧套餐。最终以当前账单、订单和活动条款为准。</p>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[#526170]">
            <li><a href="https://www.xfinity.com/support/articles/automatic-payment-paperless-billing" className="font-semibold text-[#164B78] underline underline-offset-4">Xfinity 自动付款与无纸账单折扣</a>：付款方式、服务资格及生效账期会影响折扣；此规则仅用于核对符合条件的 Xfinity 账户。</li>
            <li><a href="https://www.xfinity.com/support/articles/most-common-taxes-fees-surcharges-on-your-bill" className="font-semibold text-[#164B78] underline underline-offset-4">Xfinity 设备租赁与其他收费</a>：设备费可能包含在服务价格或促销中，促销结束后可能恢复；按实际租赁设备和账单项目确认。</li>
            <li><a href="https://www.xfinity.com/support/articles/new-bill-design" className="font-semibold text-[#164B78] underline underline-offset-4">Xfinity 账单阅读说明</a>：区分月费、部分账期、一次性费用和税费，并核对账单变化说明。</li>
          </ul>
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

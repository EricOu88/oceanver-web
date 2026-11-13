import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://oceanver.com/cellphone/att/old-plan-bill-change'
const TITLE = 'AT&T 旧手机套餐账单涨价？先核对计划通知、折扣和设备分期｜Oceanver'
const DESCRIPTION = '现有 AT&T 手机用户发现旧套餐月费上涨，先核对实际计划名称、官方调价通知、每线费用、AutoPay、设备分期和 Bill Credit，避免把一次性收费误认为长期涨价。'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, locale: 'zh_CN', siteName: 'Oceanver', type: 'article' },
}

const checks = [
  { name: '实际旧计划名称', detail: '在最近两期账单及账户中的 Wireless Plan 找到完整名称，不要只凭 Unlimited 或 Mobile Share 等简称推断调价规则。' },
  { name: '官方调价通知', detail: '在账单通知、账户消息或运营商发出的通知中核实是否受影响、何时生效、按账户还是按线路计费。未收到通知不代表一定不会变化。' },
  { name: '基础月费及每条线路', detail: '将各线路同名 Plan Charge 分开对照，并确认 Family / Multi-line Discount 是否随线路数变化。家庭总账单增加不等于每条线同额涨价。' },
  { name: 'Promotion / Signature / AutoPay', detail: '分别比较活动优惠、雇主折扣、自动付款与无纸账单相关的抵扣是否减少；核实资格、生效日期与支付方式。' },
  { name: '手机分期与 Bill Credit', detail: '对照设备月供、以旧换新优惠抵扣与剩余分期期数。月供不变而优惠抵扣停止，同样可能让总账单变高。' },
  { name: '一次性项目及按比例收费', detail: '检查 Activation、Upgrade、Prorated Charges、Add-on、Taxes、Fees、Prior Balance 和 Adjustments，避免把仅本期存在的项目当作未来每月固定费用。' },
] as const

const faqs = [
  { q: 'AT&T 旧套餐涨价，是不是每条手机线都统一加价？', a: '不是。不同已停售套餐的调整方式可能不同，可能按账户或按特定线路计算。必须用账单上的完整计划名称与本账户收到的 AT&T 调整通知逐项核对，不能套用网上其他客户的涨幅。' },
  { q: '怎样在 AT&T 账户里看账单到底哪里变了？', a: '登录 AT&T Billing Center，查找 See what changed。AT&T 官方说明：最近账单变动达到 5 美元时可能显示该入口。也可以下载最近两期账单 PDF 对照同名收费及抵扣。' },
  { q: '手机套餐没换，为什么账单增加？', a: '原因不一定是基础套餐调价，也可能是活动抵扣到期、AutoPay 设置变化、设备分期抵扣减少、附加服务、按比例收费或一次性项目。先明确差额属于哪一项。' },
  { q: '新套餐宣传价格更低，旧计划要立刻转吗？', a: '不建议只看新套餐标价。需先核对现有多线优惠、设备分期、未发完的 Bill Credit、重要服务权益及换计划后的资格；修改前向 AT&T 确认。' },
  { q: 'AT&T 客户服务摘要能证明所有优惠都会保留吗？', a: '不能。AT&T 官方说明 Customer Service Summary 未必显示账户全部促销或特别优惠，应再核对实际账单、优惠条款及官方客服确认。' },
  { q: '只想请人看账单，需要提供账户密码吗？', a: '不需要向第三方提供密码、短信验证码或完整支付资料。可在遮盖账户号码、地址、条码与个人信息后，整理有疑问的收费名称、金额和账期供沟通。' },
] as const

export default function AttOldPlanBillChangePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 text-[#202D3A] sm:px-6">
      <nav aria-label="页面位置" className="text-sm text-[#526170]">
        <Link href="/cellphone/price-hike" className="underline">手机账单综合诊断</Link> / AT&amp;T 旧计划
      </nav>
      <header className="mt-6 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6">
        <p className="text-sm font-bold text-[#2786A5]">已有 AT&amp;T 手机用户 · 旧计划账单核对</p>
        <h1 className="mt-3 text-3xl font-black">AT&amp;T 旧手机套餐涨价，先核对哪一项？</h1>
        <p className="mt-4 leading-8">不要看到家庭总账单增加就认定每条线路都涨了同样金额。先确认旧套餐的完整名称、官方通知与生效账期，再区分基础月费、折扣、设备分期及一次性收费。</p>
        <p className="mt-3 text-sm leading-7">本页只提供对账步骤，不查询实时账户，也不保证撤销调价、恢复旧优惠或退款。具体费用和适用规则以 AT&amp;T 账户、正式账单及官方答复为准。</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-black">拿最近两期账单，核对这六类项目</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {checks.map(({ name, detail }, i) => (
            <article key={name} className="rounded-xl border border-[#D5E5EC] bg-white p-5">
              <h3 className="font-bold">{i + 1}. {name}</h3>
              <p className="mt-2 leading-7 text-[#526170]">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-[#D5E5EC] bg-white p-6">
        <h2 className="text-2xl font-black">如何利用 AT&amp;T 官方账户记录</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7">
          <li>登录 AT&amp;T Billing Center，下载本期与上期的账单 PDF，并检查账单周期及付款、结转余额。</li>
          <li>查找 <strong>See what changed</strong>，逐项展开变化明细；AT&amp;T 对变动金额达到 $5 的账单提供这一比较功能。</li>
          <li>查看 <strong>Customer Service Summary</strong> 与运营商的计划调整通知，核对计划名称、变更日期和当前适用价格；摘要不一定列出全部促销优惠。</li>
          <li>把各项目按“持续每月费用”“暂时折扣变化”“一次性费用或按比例收费”分开记录，再向 AT&amp;T 核实争议项目。</li>
        </ol>
        <p className="mt-4 text-sm leading-7 text-[#526170]">注意：以官方账户显示为准。某个入口在你的账户中未显示时，可以直接下载完整账单或联系运营商确认。</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-black">常见问题</h2>
        <div className="mt-4 space-y-4">
          {faqs.map(({ q, a }) => (
            <article key={q} className="rounded-xl border border-[#D5E5EC] p-5">
              <h3 className="font-bold">{q}</h3>
              <p className="mt-2 leading-7 text-[#526170]">{a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6">
        <h2 className="text-xl font-black">官方核对资料</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">
          <li><a className="underline" href="https://www.att.com/support/article/my-account/KM1051879/">AT&amp;T：Find out why your bill changed</a> — 账单差异、费用类型及 See what changed 操作</li>
          <li><a className="underline" href="https://www.att.com/support/article/my-account/KM1009093/">AT&amp;T：Review your customer service summary</a> — 计划变更与服务摘要</li>
          <li><a className="underline" href="https://www.att.com/support/article/my-account/KM1008625/">AT&amp;T：View or print your bill</a> — 查看与下载历史账单</li>
          <li><a className="underline" href="https://www.att.com/how-to/understand-your-bill-prorated-charge">AT&amp;T：Understanding prorated charges</a> — 账单周期内按比例收费</li>
        </ul>
        <p className="mt-4 text-xs leading-6 text-[#526170]">信息核对：2026 年 11 月 12 日。本页不列出未经逐一确认的 2026 年旧计划统一涨幅；历史调价请以具体计划官方通知为准。</p>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
    </main>
  )
}

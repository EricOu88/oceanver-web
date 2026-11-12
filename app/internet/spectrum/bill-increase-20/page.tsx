import type { Metadata } from 'next'
import Link from 'next/link'

const url = 'https://oceanver.com/internet/spectrum/bill-increase-20'
const title = 'Spectrum 账单为什么比上个月多了 $20？逐项检查收费明细｜Oceanver'
const description = 'Spectrum 宽带账单突然多了 20 美元？对照两期账单检查 Internet 基础月费、Promotion、AutoPay、WiFi 设备、附加服务与一次性收费，区分长期涨价和单月变化。'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: 'Oceanver', locale: 'zh_CN', type: 'article' },
}

const checks = [
  { name: 'Internet / Internet Service', clue: '基础服务费变高', action: '对照同一速度档位的上期金额，查找价格调整通知及生效日期；确认是否属于后续每月持续收费。' },
  { name: 'Promotion / Promotional Discount / Credit', clue: '原来的负数优惠减少或消失', action: '对照之前账单及订单中的折扣名称、金额和期限；先确认是哪项优惠结束，不要将其误认成新增设备费。' },
  { name: 'Auto Pay / 自动付款', clue: '付款折扣消失或出现失败费用', action: '查看账户的 Auto Pay 状态、付款方式和支付历史，确认是否符合当前活动的折扣资格；不要假定重新开启后一定追溯补发。' },
  { name: 'WiFi / Router / Equipment', clue: '设备费用新增或变高', action: '对照账户中实际登记的设备、收费周期和设备归属；区分 Modem、路由器和其他 Wi-Fi 设备，先向运营商确认再决定更换。' },
  { name: 'Add-on / TV / Voice / 其他服务', clue: '附加项目开始计费', action: '核对订单、服务变更记录和附加项目的名称，确认是否为每月持续项目以及取消是否影响原套餐条件。' },
  { name: 'One-time Charges / Adjustments / Taxes', clue: '本期出现一次性项目或余额', action: '核对安装、上门服务、余额结转、调整、滞纳或税费等行项目，并检查收费日期与账期。' },
]

const steps = [
  '在 My Spectrum App 打开 Billing → View Statements，下载本期和上期的完整账单；不要只看首页总额。',
  '确认两个账单属于同一账户、同一服务地址，并核对账单周期和 Prior Balance / Payments。',
  '逐行比较服务月费、折扣、设备、附加服务、税费及一次性调整，写下每个项目的差额。',
  '把差额分为持续月费与本期一次性费用；如暂时无法判断，可再查看前一个账期。',
  '对照开户订单、促销说明及运营商通知，向 Spectrum 询问无法解释的行项目。',
  '若确认账单存在差异，及时向 Spectrum 提出争议，并保留工单与回复记录。',
]

const faqs = [
  { q: 'Spectrum 账单突然多 $20，是不是一定涨价了？', a: '不是。可能是原本 $20 的优惠结束、基础服务费调整、设备费或附加项目出现，也可能是一次性收费。应比较两期完整账单的同名项目，不能只凭总额判断。' },
  { q: '账单上的 Promotion 或 Credit 消失是什么意思？', a: '可能是优惠期结束、资格或账单条件变化。请对照原始订单、旧账单中的同名抵扣及活动截止日期，不能推断原优惠必然可以恢复。' },
  { q: '可以自己更改 Auto Pay 后要求退回差额吗？', a: '可以先核对自动付款资格及历史记录，但是否恢复折扣、何时生效或是否补发，由 Spectrum 按账户与活动条款确认。' },
  { q: 'Modem 和 Wi-Fi Router 一定都收费吗？', a: '不一定。服务包含的设备、Wi-Fi 功能和额外设备费用可能因套餐及促销不同而变化。应以账单与账户设备清单为准。' },
  { q: '如何查 Spectrum 过去两个月账单？', a: '登录 My Spectrum App，进入 Billing，再打开 View Statements，选择相应月份查看账单。也可通过 Spectrum 官方账户网站查询。' },
  { q: '发现 Spectrum 账单有错误，多久内提出？', a: 'Spectrum 官方账单说明要求在账单日期起 60 天内联系运营商报告账单差异。具体争议和调整结果以运营商处理为准。' },
  { q: '需要把账户密码或完整账单发给第三方吗？', a: '不需要提供密码、登录验证码或完整支付信息。需要人工协助时，应遮盖账户号码、详细地址、条码及个人身份资料。' },
]

export default function SpectrumBillTwentyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-6 flex flex-wrap gap-4 text-sm text-[#164B78]" aria-label="页面导航">
          <Link href="/internet/spectrum" className="underline underline-offset-4">Spectrum 问题判断</Link>
          <Link href="/internet/spectrum/faq" className="underline underline-offset-4">Spectrum 常见问题</Link>
          <Link href="/internet/price-hike" className="underline underline-offset-4">宽带账单综合核对</Link>
        </nav>
        <header>
          <p className="text-sm font-bold text-[#2786A5]">Spectrum 账单诊断 · 已在使用的客户</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Spectrum 账单为什么比上个月多了 $20？逐项检查收费明细</h1>
          <p className="mt-4 leading-8 text-[#526170]">
            这多出的 $20 不一定是 Spectrum 把套餐价格提高了 $20。原有折扣到期、自动付款优惠变化、Wi-Fi 设备费、
            附加服务或一次性收费，都可能改变本期应付金额。先拿出最近两期完整账单，找到发生变化的具体行项目。
          </p>
          <div className="mt-5 rounded-2xl border border-[#D8E2EA] bg-[#EDF5F9] p-5">
            <h2 className="font-black">先看结论</h2>
            <p className="mt-2 leading-7">如果上期 $60、本期 $80，先确认 $20 差额究竟来自基础月费 +$20、原促销折扣减少 $20，还是新增收费。只有确定属于持续性月费，才能合理判断后续账单是否还会同样增加。</p>
            <p className="mt-2 text-sm text-[#526170]">文中的 $60、$80 和 $20 是说明核对方法的假设数字，不是 Spectrum 官方报价或真实客户案例。</p>
          </div>
        </header>

        <section className="mt-9">
          <h2 className="text-2xl font-black">两期账单差了 $20，先用这个例子理解</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#D8E2EA]">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead className="bg-[#EDF5F9]"><tr><th className="p-3">项目（假设）</th><th className="p-3">上月</th><th className="p-3">本月</th><th className="p-3">变化</th></tr></thead>
              <tbody>
                <tr className="border-t"><td className="p-3">Internet 基础服务</td><td className="p-3">$80</td><td className="p-3">$80</td><td className="p-3">$0</td></tr>
                <tr className="border-t"><td className="p-3">Promotional Discount</td><td className="p-3">−$20</td><td className="p-3">$0</td><td className="p-3">+$20</td></tr>
                <tr className="border-t font-bold"><td className="p-3">合计</td><td className="p-3">$60</td><td className="p-3">$80</td><td className="p-3">+$20</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 leading-7 text-[#526170]">这里基础月费没有变化，差额来自优惠消失。如果你实际账单显示的是设备费或一次性项目，原因就完全不同。不要照抄例子中的金额来判断自己的账户。</p>
        </section>

        <section className="mt-9">
          <h2 className="text-2xl font-black">逐项检查 Spectrum 账单的 6 类收费</h2>
          <div className="mt-4 grid gap-4">
            {checks.map((item, index) => (
              <article key={item.name} className="rounded-2xl border border-[#D8E2EA] bg-white p-5">
                <h3 className="font-black">{index + 1}. {item.name}</h3>
                <p className="mt-2 text-sm font-semibold text-[#164B78]">出现的变化：{item.clue}</p>
                <p className="mt-2 leading-7 text-[#526170]">{item.action}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-[#526170]">账单项目名称及显示方式可能随套餐、账期和服务组合不同；上表用于识别常见费用类别，不代表每个 Spectrum 账户都有这些项目。</p>
        </section>

        <section className="mt-9 rounded-2xl border border-[#D8E2EA] bg-[#EDF5F9] p-5 sm:p-6">
          <h2 className="text-2xl font-black">六步查明 $20 差额</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7">{steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>

        <section className="mt-9">
          <h2 className="text-2xl font-black">常见问题 FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map(({q,a}) => (
              <article key={q} className="rounded-xl border border-[#D8E2EA] bg-white p-5">
                <h3 className="font-bold">{q}</h3><p className="mt-2 leading-7 text-[#526170]">{a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-9 rounded-2xl border border-[#D8E2EA] p-5">
          <h2 className="text-xl font-black">核实依据与服务边界</h2>
          <p className="mt-3 leading-7">本页是对已有 Spectrum 账单的解释方法，不提供实时账户查询，不代表 Spectrum 官方客服，也不承诺降价、退款或优惠恢复。最终金额与争议结果以 Spectrum 当前账单、订单及官方回复为准。</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#164B78]">
            <li><a href="https://www.spectrum.net/support/manage-account/understanding-your-statement-bill" className="underline">Spectrum 官方：Understanding Your Bill</a></li>
            <li><a href="https://www.spectrum.net/support/manage-account/my-spectrum-app-billing-payment" className="underline">Spectrum 官方：My Spectrum App 账单与付款</a></li>
            <li><a href="https://www.spectrum.net/support/account-and-billing/billing-payment-faq" className="underline">Spectrum 官方：Billing &amp; Payment FAQ</a></li>
          </ul>
          <p className="mt-4 text-sm text-[#526170]">资料核对日期：2026 年 11 月 11 日。需要人工协助时，请先遮盖完整账号、详细地址、支付信息、条码和任何验证码。</p>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    </main>
  )
}

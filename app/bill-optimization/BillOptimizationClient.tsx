import Link from 'next/link'

const providers = [
  { name: 'AT&T 宽带', href: '/internet/att-fiber/price-increase', detail: '旧套餐调价、Fiber / Internet Air 区别、AutoPay 与折扣' },
  { name: 'Xfinity 网络', href: '/internet/xfinity/faq#xfinity-price-checklist', detail: '促销到期、Gateway、xFi 与旧套餐数据收费' },
  { name: 'Spectrum 宽带', href: '/internet/spectrum/price-increase', detail: '18 项排查：优惠、基础月费、Advanced WiFi 与捆绑' },
  { name: 'Frontier 宽带', href: '/internet/frontier/price-increase', detail: '促销价、价格保证、退网账期及设备归还' },
  { name: 'Verizon Fios 网络', href: '/internet/price-hike#verizon-fios', detail: 'Fios 专项：AutoPay、Mobile + Home、路由器与最终账单' },
]

export default function BillOptimizationClient() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6">
      <div className="mx-auto max-w-5xl">
        <nav className="text-sm font-semibold"><Link href="/" className="text-[#164B78] underline">← 返回首页</Link></nav>
        <header className="mt-6">
          <p className="text-sm font-bold text-[#2786A5]">Oceanver · 账单诊断总入口</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">手机与宽带账单变贵？先找到涨价原因</h1>
          <p data-page-answer className="best-answer speakable-summary mt-5 max-w-4xl text-lg leading-8">
            账单变贵不一定是运营商统一加价。先比较最近两期账单的基础月费、Promotion / Credit、设备与一次性收费。不同运营商的优惠、设备和取消规则不同，请先选择品牌再按专属清单核对。
          </p>
        </header>
        <section className="mt-8 rounded-3xl border border-[#D5E5EC] bg-[#EDF5F9] p-5 sm:p-7" aria-labelledby="provider-heading">
          <h2 id="provider-heading" className="text-2xl font-black">运营商的涨价各不同</h2>
          <p className="mt-2 leading-7">选择您正在使用的宽带运营商，查看具体收费原因及处理步骤。</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {providers.map((provider) => (
              <Link key={provider.name} href={provider.href} className="group flex min-h-36 flex-col justify-between rounded-2xl border border-[#B7CBD9] bg-white p-5 transition hover:border-[#164B78] hover:shadow-md focus-visible:outline-2 focus-visible:outline-[#164B78]">
                <span className="text-xl font-black">{provider.name}</span>
                <span className="mt-2 text-sm leading-6 text-[#526170]">{provider.detail}</span>
                <span className="mt-3 font-bold text-[#164B78]">查看该品牌涨价原因 →</span>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-[#526170]">Verizon Fios 暂在已有的宽带涨价指南中设专项章节，不新增网址；所有条目均以具体账户和官方通知为准。</p>
        </section>
        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#D8E2EA] bg-white p-6">
            <h2 className="text-xl font-black">三步核对最近两期账单</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
              <li>确认同一账户和账期，对比总额差异。</li>
              <li>逐行比较基础月费、折扣、设备、附加项目和一次性费用。</li>
              <li>分清每月持续涨价与单月收费，再进入上方品牌详情。</li>
            </ol>
          </article>
          <article className="rounded-2xl border border-[#D8E2EA] bg-white p-6">
            <h2 className="text-xl font-black">手机账单有问题？</h2>
            <p className="mt-3 leading-7">手机账单还要检查家庭线路、设备分期、Trade-in 抵扣、保险及漫游。相关细节不放在宽带品牌区重复介绍。</p>
            <Link href="/cellphone/price-hike" className="mt-4 inline-block font-bold text-[#164B78] underline">查看手机涨价专项 →</Link>
          </article>
        </section>
        <section className="mt-8 rounded-2xl bg-[#EDF5F9] p-6">
          <h2 className="text-xl font-black">仍看不懂是哪项费用？</h2>
          <p className="mt-2 leading-7">先保存两期账单并遮盖账户号码、支付信息及个人资料；记录新增收费行、金额及日期，再请运营商确认争议或退款资格。</p>
          <div className="mt-4 flex flex-wrap gap-3 font-bold text-[#164B78]">
            <Link href="/internet/price-hike" className="underline">宽带通用排查 →</Link>
            <Link href="/internet/faq/after-cancel-final-bill" className="underline">取消后的最终账单 →</Link>
            <Link href="/contact" className="underline">中文人工核对 →</Link>
          </div>
        </section>
        <p className="mt-8 text-center text-xs text-[#526170]">最后更新：2026 年 11 月 12 日（美西时间）｜价格、优惠和收费资格以运营商当前账单与官方政策为准。</p>
      </div>
    </main>
  )
}

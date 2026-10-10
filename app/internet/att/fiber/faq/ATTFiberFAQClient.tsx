import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { allCategories } from './faq-data'

const coreDetailPages = [
  ['att-fiber-price-increase', '账单为什么涨价'],
  ['att-fiber-frequent-disconnections', '经常断网怎么判断'],
  ['att-fiber-outage-duration', '停网多久能恢复'],
  ['att-fiber-equipment-fee', '设备收费怎么判断'],
  ['att-fiber-cancel-termination-fee', '取消与违约金怎么核对'],
  ['att-fiber-buried-wire-installation', '临时光纤线一直没埋怎么办'],
] as const

export default function ATTFiberFAQClient() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
      <header className="mb-10">
        <h1 className="text-3xl font-black leading-tight text-[#202D3A] md:text-4xl">
          AT&amp;T Fiber 常见问题
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#526170]">
          按地址、使用需求、账单、安装和账户问题整理的判断信息。覆盖资格、费用与订单结果可能变化，请以当前地址、账户和运营商规则为准。
        </p>
      </header>

      <div className="space-y-10">
        {allCategories.map((category) => (
          <section key={category.id} aria-labelledby={`${category.id}-heading`}>
            <h2 id={`${category.id}-heading`} className="mb-3 border-b border-[#D5E5EC] pb-3 text-xl font-bold text-[#202D3A]">
              {category.title}
            </h2>
            <div className="divide-y divide-[#D5E5EC] rounded-2xl border border-[#D5E5EC] bg-white">
              {category.items.map((item) => (
                <details key={item.question} className="group p-4 md:p-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold leading-6 text-[#202D3A] marker:hidden">
                    <span>{item.question}</span>
                    <ChevronDown aria-hidden="true" size={18} className="mt-1 shrink-0 text-[#246B95] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-6 text-[#526170] md:text-base md:leading-7">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-10">
        <p className="text-sm font-bold text-[#2786A5]">重点判断页</p>
        <h2 className="mt-2 text-2xl font-black text-[#202D3A]">需要完整步骤时继续看</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coreDetailPages.map(([slug, title]) => (
            <Link
              key={slug}
              href={`/internet/att/fiber/faq/${slug}`}
              className="group rounded-2xl border border-[#D5E5EC] bg-white p-4 transition hover:border-[#2786A5]"
            >
              <span className="font-bold leading-6 text-[#202D3A]">{title}</span>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#164B78]">
                查看判断步骤
                <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <nav aria-label="相关宽带判断页面" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#D5E5EC] pt-6 text-sm font-semibold text-[#164B78]">
        <Link href="/internet/att-fiber" className="hover:text-[#103B60]">AT&amp;T Fiber 判断页</Link>
        <Link href="/internet/diagnosis" className="hover:text-[#103B60]">宽带问题诊断</Link>
        <Link href="/internet/providers" className="hover:text-[#103B60]">比较宽带长期成本</Link>
        <Link href="/internet/price-hike" className="hover:text-[#103B60]">宽带涨价判断</Link>
        <Link href="/contact" className="hover:text-[#103B60]">需要时进入人工核实</Link>
      </nav>
    </main>
  )
}

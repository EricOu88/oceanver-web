import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { allCategories } from './faq-data'

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

      <nav aria-label="相关宽带判断页面" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#D5E5EC] pt-6 text-sm font-semibold text-[#164B78]">
        <Link href="/internet/diagnosis" className="hover:text-[#103B60]">宽带问题诊断</Link>
        <Link href="/internet/providers" className="hover:text-[#103B60]">比较宽带长期成本</Link>
        <Link href="/internet/price-hike" className="hover:text-[#103B60]">宽带涨价判断</Link>
      </nav>
    </main>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const LAST_UPDATED =
  '最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。'

const checks = [
  {
    title: '当前地址到底能不能装？',
    body: '确认完整地址、Unit、线路类型、现有设施和订单查询结果；不能只凭城市或附近住户判断。',
    href: '/internet/frontier/faq',
    link: '查看地址与技术类型问题',
  },
  {
    title: '当前宽带真的需要换吗？',
    body: '单房间 Wi-Fi 慢、单设备异常、一次 outage 或 Router 问题，都不一定需要更换运营商。',
    href: '/internet/diagnosis',
    link: '先判断宽带问题发生在哪一层',
  },
  {
    title: 'Fiber 和 DSL 要先分清',
    body: '不同地址可能提供不同接入技术；上传、延迟、稳定性和可订方案应按当前地址确认。',
    href: '/internet/frontier/faq',
    link: '查看 Fiber、DSL 与地址问题',
  },
  {
    title: '长期成本怎么比较？',
    body: '把持续月费、促销或抵扣条件、设备、安装、附加服务和旧宽带取消成本放在一起比较。',
    href: '/internet/providers',
    link: '比较宽带长期成本与条件',
  },
  {
    title: '安装条件是否适合？',
    body: '确认现有线路、是否需要技术员、物业条件、设备位置，以及新旧服务如何衔接。',
    href: '/internet/frontier/faq',
    link: '查看 Frontier 安装与设备问题',
  },
  {
    title: '什么情况下值得换 Frontier？',
    body: '当地址实际可用、现有服务长期不合需求、问题不只是 Wi-Fi 且切换总成本合理时，再进入比较。',
    href: '/internet/providers',
    link: '继续比较现有宽带选择',
  },
]

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://oceanver.com/internet/frontier#webpage',
  url: 'https://oceanver.com/internet/frontier',
  name: 'Frontier 值不值得换？先看地址、需求和长期成本｜美国鸿达电讯',
  description:
    '从地址可用性、服务类型、网络需求、长期成本和安装条件判断 Frontier 是否适合当前情况。',
  inLanguage: 'zh-CN',
}

export default function FrontierClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <main className="min-h-screen bg-[#FCFDFE] text-[#202D3A]">
        <div className="border-b border-[#D5E5EC] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-4">
            <Link href="/internet/providers" className="text-sm font-semibold text-[#526170] hover:text-[#164B78]">
              ← 返回宽带比较
            </Link>
          </div>
        </div>

        <section className="bg-[#F4F8FA]">
          <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
            <p className="mb-4 inline-flex rounded-full border border-[#D5E5EC] bg-white px-3 py-1 text-sm font-semibold text-[#246B95]">
              Frontier 宽带问题判断
            </p>
            <h1 className="max-w-4xl text-3xl font-black leading-tight md:text-5xl">
              Frontier 值不值得换？先看地址、需求和长期成本
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#526170] md:text-lg">
              是否值得换 Frontier，不能只看 Fiber、广告速度或首月价格。先确认当前地址实际可用性，再比较现有宽带的长期成本、稳定性、上传需求和安装条件。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/internet/diagnosis"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 font-bold text-white hover:bg-[#103B60]"
              >
                不知道问题在哪？先诊断 <ArrowRight size={18} />
              </Link>
              <Link
                href="/internet/frontier/faq"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#164B78] bg-white px-6 font-bold text-[#164B78] hover:bg-[#F4F8FA]"
              >
                查看 Frontier 常见问题 <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <h2 className="mb-6 text-2xl font-black md:text-3xl">更换前，先核对这六个问题</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {checks.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#D5E5EC] bg-white p-5 shadow-sm md:p-6">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 leading-7 text-[#526170]">{item.body}</p>
                <Link href={item.href} className="mt-4 inline-flex items-center gap-1 font-semibold text-[#164B78] hover:text-[#103B60]">
                  {item.link} <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#F4F8FA]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2 md:py-16">
            <div>
              <h2 className="text-2xl font-black">先不要急着换 Frontier</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#526170]">
                <li>问题只发生在一个房间或一台设备</li>
                <li>刚更换 Router，或只遇到一次区域 outage</li>
                <li>只有第一期账单异常，尚未确认费用来源</li>
                <li>还不能确定问题来自 Wi-Fi、设备还是运营商线路</li>
              </ul>
              <p className="mt-4 leading-7 text-[#202D3A]">先确认问题根因，再决定是否需要比较运营商。</p>
            </div>
            <div>
              <h2 className="text-2xl font-black">什么时候 Frontier 更值得比较？</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#526170]">
                <li>当前地址实际提供可订的 Frontier 服务</li>
                <li>上传或稳定性需求与现有服务有明确差距</li>
                <li>当前宽带持续费用或体验长期不合需求</li>
                <li>把安装、设备和切换成本算入后仍有比较价值</li>
              </ul>
              <p className="mt-4 leading-7 text-[#202D3A]">Fiber 不代表对每个地址、每种需求都更合适，最终以具体地址和当前方案为准。</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/internet/home-network-guide" className="rounded-2xl border border-[#D5E5EC] bg-white p-5 font-bold text-[#164B78]">
              Wi-Fi / 家庭网络判断
            </Link>
            <Link href="/internet/price-hike" className="rounded-2xl border border-[#D5E5EC] bg-white p-5 font-bold text-[#164B78]">
              账单持续涨价判断
            </Link>
            <Link href="/internet/frontier/faq" className="rounded-2xl border border-[#D5E5EC] bg-white p-5 font-bold text-[#164B78]">
              Frontier 常见问题
            </Link>
          </div>
          <div className="mt-6 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5">
            <h2 className="font-black">什么时候需要人工核实？</h2>
            <p className="mt-2 text-sm leading-6 text-[#526170]">
              当前地址可用技术、订单状态、安装条件、设备记录、具体价格和资格都需要结合实时账户与地址确认。
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]">
              需要时进入人工核实 <ArrowRight size={16} />
            </Link>
          </div>
          <p className="mt-6 text-sm leading-6 text-[#526170]">
            商业宽带应按 SLA、固定 IP、线路和合同条件单独判断，不与住家宽带混在一起比较。
          </p>
        </section>

        <div className="mx-auto max-w-6xl px-5 pb-10 text-xs text-[#526170]">{LAST_UPDATED}</div>
      </main>
    </>
  )
}

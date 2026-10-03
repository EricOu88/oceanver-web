import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Wifi,
  TrendingUp,
  ShieldCheck,
  Home,
  Building2,
  ArrowRight,
  HelpCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: '不同宽带运营商怎么比较？| 美国鸿达电讯',
  description:
    '面向全美中文用户整理宽带运营商比较维度，包括地址可用性、速度需求、设备费用、促销期限、合同条件与实际月费。',
  alternates: {
    canonical: 'https://oceanver.com/internet/providers',
  },
}

export default function InternetProvidersPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* ===== 返回主页 ===== */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
        >
          ← 返回主页
        </Link>
      </div>

      {/* ================= HERO ================= */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900">
          美国宽带运营商对比（Xfinity / AT&amp;T / Spectrum / Frontier）
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-center text-base md:text-lg text-slate-600 leading-relaxed">
          美国宽带运营商主要分为有线（Cable）和光纤（Fiber）两类。
          不同地址、不同城市，可选运营商差异很大。
          下面按地址可用性、速度需求、设备费用、促销期限、合同条件和实际月费，
          帮你建立比较不同宽带运营商的判断框架。
        </p>
      </section>

      {/* ================= 顶部提示：先看 FAQ ================= */}
      <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 bg-amber-50 border border-amber-200 rounded-2xl">
        <p className="text-slate-800 text-base md:text-lg">
          <span className="font-semibold">不确定哪家宽带适合你？</span>
          <span className="text-slate-700"> 先查看美国宽带常见问题，了解不同类型与常见坑点</span>
        </p>
        <Link
          href="/internet/faq"
          className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-xl font-semibold transition shrink-0"
        >
          <HelpCircle size={18} />
          查看宽带常见问题
        </Link>
      </section>

      {/* ================= 决策树 4 卡 ================= */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* 1️⃣ Xfinity */}
        <DecisionCard
          icon={<Wifi size={28} />}
          provider="Xfinity"
          title="先核对地址与促销期限"
          desc="比较 Xfinity 时，先确认地址能否安装、下载上传需求、设备费用和促销结束后的实际月费。"
          who="需要核对地址、费用和安装条件的用户"
          highlights={[
            '地址可用性与安装方式',
            '促销期限与恢复价格',
            '设备费、税费与实际月费',
          ]}
          cta="查看 Xfinity 比较维度"
          href="/internet/xfinity"
        />

        {/* 2️⃣ AT&T Fiber */}
        <DecisionCard
          icon={<ShieldCheck size={28} />}
          provider="AT&T Fiber"
          title="核对上传需求与设备条件"
          desc="比较 AT&T Fiber 时，重点确认地址可用性、上下行需求、设备费用、合同和提前退出条件。"
          who="远程办公、视频会议或有上传需求的用户"
          highlights={[
            '地址是否支持光纤安装',
            '上下行与设备需求',
            '合同、促销和实际月费',
          ]}
          cta="查看 AT&T Fiber 比较维度"
          href="/internet/att-fiber"
        />

        {/* 3️⃣ Frontier Fiber */}
        <DecisionCard
          icon={<TrendingUp size={28} />}
          provider="Frontier Fiber"
          title="确认局部地址与条件"
          desc="比较 Frontier Fiber 时，不能只看宣传价格，需要核对具体地址、安装条件、促销期限和退出成本。"
          who="正在核对光纤可用性与总成本的用户"
          highlights={[
            '具体地址是否可装',
            '促销后价格与设备费',
            '合同和提前退出条件',
          ]}
          cta="查看 Frontier 比较维度"
          href="/internet/frontier"
        />

        {/* 4️⃣ Spectrum */}
        <DecisionCard
          icon={<Home size={28} />}
          provider="Spectrum"
          title="核对可用性与长期费用"
          desc="比较 Spectrum 时，重点确认地址是否可用、设备费用、数据条件、促销期限和实际总月费。"
          who="需要比较安装条件和长期费用的用户"
          highlights={[
            '具体地址和安装条件',
            '设备费用与数据条件',
            '促销结束后的总月费',
          ]}
          cta="查看 Spectrum 比较维度"
          href="/internet/spectrum"
        />
      </section>

      {/* ================= 账单涨价入口模块 ================= */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900">
          已经在用这些运营商，账单变贵了？
        </h3>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          很多用户不是用多了，而是优惠到期或老用户没拿到新方案。
        </p>
        <Link
          href="/bill-optimization"
          className="inline-flex items-center gap-2 border-2 border-slate-400 bg-transparent hover:bg-slate-100 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-all"
        >
          查看账单是否还能降价
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* ================= 住家 vs 商业 提示 ================= */}
      <section className="bg-slate-100 rounded-3xl p-10 space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Building2 /> 住家宽带 vs 商业宽带
        </h2>
        <p className="text-lg text-slate-700">
          同一家运营商，<strong>住家和商业完全是两套逻辑</strong>。
          商业宽带通常更稳定、价格结构不同，更适合公司、店铺、诊所等场景。
          如需返回判断入口，请回到<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">美国鸿达电讯首页</Link>。
          常见问题如<Link href="/internet/providers/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">宽带账单为什么会突然涨价？</Link>和<Link href="/internet/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">没有 SSN 可以办宽带吗？</Link>都有详细解答。
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold"
        >
          告诉我你的宽带判断问题
          <ArrowRight size={20} />
        </Link>
      </section>
    </main>
  )
}

/* ================= 子组件 ================= */

function DecisionCard({
  icon,
  provider,
  title,
  desc,
  who,
  highlights,
  cta,
  href,
}: {
  icon: React.ReactNode
  provider: string
  title: string
  desc: string
  who: string
  highlights: string[]
  cta: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="border rounded-3xl p-8 space-y-5 hover:bg-slate-50 transition group"
      aria-label={`查看 ${provider} 宽带方案`}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
          {icon}
        </div>
        <div>
          {/* 运营商名（纯文本） */}
          <h3 className="text-xl font-black text-slate-900">
            {provider}
          </h3>
          <p className="text-sm font-semibold text-slate-500">
            {title}
          </p>
        </div>
      </div>

      {/* 1–2 行说明 */}
      <p className="text-slate-600 leading-relaxed line-clamp-2">
        {desc}
      </p>

      <p className="text-slate-600 font-medium">
        适合：{who}
      </p>

      <ul className="space-y-2 text-slate-700">
        {highlights.map((h) => (
          <li key={h}>• {h}</li>
        ))}
      </ul>

      {/* 明确指向子页的 Link */}
      <div className="text-blue-600 font-semibold group-hover:underline">
        {cta} →
      </div>
    </Link>
  )
}

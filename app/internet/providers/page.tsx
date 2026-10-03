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
  title: '美国宽带怎么选？(中文服务) - 湾区/Fremont 实体店咨询 | 鸿达电信',
  description:
    '鸿达电信代理全美主流宽带业务，包括 Xfintiy, Spectrum, AT&T, Frontier 及 Cox。专为华人家庭提供全中文申请安装服务，一站式对比各运营商资费与最新优惠活动，让您在美国办理网络省时省力又省钱，尊享超值光纤宽带体验！',
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
          下面我们按「覆盖范围、价格稳定性、是否支持中文办理」
          帮你快速对比主流美国宽带公司。
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
          title="覆盖最广 · 促销力度大"
          desc="Cable 宽带代表，湾区和全美覆盖最广，前期价格低，但优惠期结束后容易涨价。"
          who="租房 / 普通家庭 / 想先拿促销价"
          highlights={[
            '湾区 & 全美覆盖最广',
            '前期促销力度大',
            '住家 & 商业都可选',
          ]}
          cta="查看 Xfinity 详细方案"
          href="/internet/xfinity"
        />

        {/* 2️⃣ AT&T Fiber */}
        <DecisionCard
          icon={<ShieldCheck size={28} />}
          provider="AT&T Fiber"
          title="速度与稳定性优先"
          desc="真光纤到户，上下行对称，延迟低，适合远程办公、直播和高要求用户。"
          who="重度办公 / 远程 / 高端用户"
          highlights={[
            '真光纤到户（上下行对称）',
            '延迟低，体验好',
            '价格相对透明',
          ]}
          cta="查看 AT&T Fiber 覆盖"
          href="/internet/att-fiber"
        />

        {/* 3️⃣ Frontier Fiber */}
        <DecisionCard
          icon={<TrendingUp size={28} />}
          provider="Frontier Fiber"
          title="隐藏型高性价比光纤"
          desc="部分老社区其实有光纤覆盖，价格通常比 AT&T 更友好，稳定性很好。"
          who="懂行用户 / 老社区 / 隐藏光纤"
          highlights={[
            '很多地址有光纤但没人告诉你',
            '价格比 AT&T 更友好',
            '稳定性非常好',
          ]}
          cta="查看 Frontier 是否可装"
          href="/internet/frontier"
        />

        {/* 4️⃣ Spectrum */}
        <DecisionCard
          icon={<Home size={28} />}
          provider="Spectrum"
          title="价格结构相对稳定"
          desc="Cable 宽带，很多老社区唯一选择，适合不想频繁谈价的长期用户。"
          who="长期使用 / 讨厌谈价"
          highlights={[
            '价格结构相对稳定',
            '通常无流量上限',
            '很多老社区唯一选择',
          ]}
          cta="查看 Spectrum 方案"
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
          如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">鸿达电讯 Bay Media Star 首页</Link>。
          常见问题如<Link href="/internet/providers/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">宽带账单为什么会突然涨价？</Link>和<Link href="/internet/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">没有 SSN 可以办宽带吗？</Link>都有详细解答。
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold"
        >
          直接告诉我使用场景
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

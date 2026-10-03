'use client'

import Link from 'next/link'
import { Wifi, Building2, ArrowRight, ShieldCheck } from 'lucide-react'

export default function InternetClient() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">

      {/* ================= HERO ================= */}
      <section className="space-y-6">

        <p className="text-sm text-slate-500">
  面向全美中文用户提供宽带信息与中文协助
</p>

        <h1 className="text-5xl font-extrabold leading-tight">
          美国宽带怎么选？中文帮你搞定
        </h1>
        <p className="text-xl text-slate-700 max-w-3xl">
          地址覆盖查询 · 中文办理 · 涨价处理  
          支持 Xfinity / AT&T Fiber / Spectrum
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold"
        >
          查询我这个地址能装什么宽带
          <ArrowRight size={20} />
        </Link>
      </section>

      {/* ================= 能帮你解决什么 ================= */}
      <section className="grid md:grid-cols-3 gap-8">
        <Feature
          title="地址能装哪家？"
          desc="不同地址支持的宽带运营商完全不同，需单独查询。"
        />
        <Feature
          title="为什么账单突然涨价？"
          desc="优惠期结束是最常见原因，可协助重新谈价或换方案。"
        />
        <Feature
          title="住家 vs 商业怎么选？"
          desc="商用更稳定、价格结构不同，适合公司和店铺。"
        />
      </section>

      {/* ================= 宽带类型 ================= */}
      <section className="grid md:grid-cols-2 gap-10">
        <TypeCard
          icon={<Wifi size={28} />}
          title="住家宽带（家庭 / 租房）"
          desc="适合家庭、租房用户，价格灵活，促销多。"
          href="/internet/providers"
        />

        <TypeCard
          icon={<Building2 size={28} />}
          title="商业宽带（公司 / 店铺）"
          desc="稳定性更高，适合办公室、餐厅、商铺。"
          href="/internet/providers"
        />
      </section>

      {/* ================= 运营商入口 ================= */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">主流美国宽带运营商</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ProviderEntry
            name="Xfinity"
            desc="覆盖最广，住家与商业宽带选择灵活"
            href="/internet/xfinity"
          />
          <ProviderEntry
            name="AT&T Fiber"
            desc="真光纤，对称上下行，稳定性高"
            href="/internet/att-fiber"
          />
          <ProviderEntry
            name="Spectrum"
            desc="价格相对稳定，无流量上限"
            href="/internet/providers"
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-100 rounded-3xl p-12 text-center space-y-6">
        <ShieldCheck size={36} className="mx-auto" />
        <h2 className="text-3xl font-bold">
          不确定哪家宽带适合你？
        </h2>
        <p className="text-lg text-slate-700">
          中文顾问免费帮你查询地址覆盖、对比方案、预约安装
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black text-white px-10 py-4 rounded-2xl text-lg font-semibold"
        >
          联系宽带顾问
        </Link>
      </section>

    </main>
  )
}

/* ===== 小组件 ===== */

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border rounded-3xl p-8 space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-slate-700">{desc}</p>
    </div>
  )
}

function TypeCard({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="border rounded-3xl p-10 space-y-6 hover:bg-slate-50 transition"
    >
      {icon}
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-slate-700">{desc}</p>
      <div className="text-blue-600 font-semibold">
        查看详情 →
      </div>
    </Link>
  )
}

function ProviderEntry({
  name,
  desc,
  href,
}: {
  name: string
  desc: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="border rounded-3xl p-8 space-y-4 hover:bg-slate-50 transition"
    >
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-slate-700">{desc}</p>
      <span className="text-blue-600 font-medium">
        查看方案 →
      </span>
    </Link>
  )
}

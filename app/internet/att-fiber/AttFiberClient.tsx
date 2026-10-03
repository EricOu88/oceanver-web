'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Wifi,
  Home,
  Building2,
  ArrowRight,
  Phone,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react'
import AttFiberServiceSchema from './AttFiberServiceSchema'

export default function AttFiberClient() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AttFiberServiceSchema />

      <main className="min-h-screen bg-white text-slate-900">

        {/* 顶部返回 */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            <Link
              href="/internet/providers"
              className="text-sm font-semibold text-slate-700 hover:text-blue-700"
            >
              ← 返回宽带对比页
            </Link>

            <div className="flex gap-2">
              <a
                href="tel:15108496191"
                className="hidden sm:flex items-center gap-1 px-4 py-2 border rounded-full text-xs font-bold"
              >
                <Phone size={14} />
                电话咨询
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold"
              >
                <MessageCircle size={14} />
                微信咨询
              </Link>
            </div>
          </div>
        </div>

        {/* HERO */}
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-6 py-14">
            <div className="max-w-3xl space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                AT&T Fiber 真光纤 · 用户视角
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                你是在找「真正稳定的光纤宽带」吗？
              </h1>

              <p className="text-lg text-slate-700">
                AT&T Fiber 是<strong>真·光纤到户</strong>，
                在稳定性、延迟、上传速度上明显优于普通有线宽带。
                但不是所有地址都能装，也不一定适合所有人。
                如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">美国鸿达电讯首页</Link>。
                常见问题如<Link href="/internet/att/fiber/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">AT&T Fiber 会涨价吗？</Link>都有详细解答。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2"
                >
                  查我这个地址能不能装 <ArrowRight />
                </Link>

                <Link
                  href="/internet/price-hike"
                  className="border-2 px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2"
                >
                  宽带涨价怎么办 <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 住家 vs 商业 */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6">

            {/* 住家 */}
            <PlanCard
              icon={<Home />}
              badge="住家宽带 Residential"
              title="适合家庭 / 公寓 / 稳定远程办公"
              pros={[
                '上下行对称，视频会议更稳',
                '延迟低，适合远程办公/学习',
                '长期稳定，不靠短期促销',
              ]}
              cons={[
                '必须地址支持 AT&T 光纤',
                '价格通常高于促销型宽带',
              ]}
            />

            {/* 商业 */}
            <PlanCard
              icon={<Building2 />}
              badge="商业宽带 Business"
              title="适合公司 / 店铺 / 对网络极度敏感"
              pros={[
                '更高稳定性，适合营业环境',
                '支持静态 IP（部分方案）',
                '更适合长期使用，不频繁涨价',
              ]}
              cons={[
                '月费高于住家方案',
                '部分地址只能装商业',
              ]}
            />
          </div>
        </section>

        {/* GEO */}
        <section className="bg-slate-50 py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-4">
            <h2 className="text-3xl font-bold">
              哪些地址更常见 AT&T Fiber？
            </h2>
            <p className="text-slate-700">
              AT&T Fiber 的可用性需要按详细地址查询，<strong>同一城市不同街区差异也可能很大</strong>，
              必须按地址查询。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 text-center">
          <h2 className="text-3xl font-bold mb-4">
            不确定 AT&T Fiber 是否适合你？
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            中文顾问可免费帮你查询地址、对比 Xfinity / Spectrum / Frontier。
            如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">美国鸿达电讯首页</Link>。
            常见问题如<Link href="/internet/att/fiber/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">AT&T Fiber 会涨价吗？</Link>都有详细解答。
          </p>

          <Link
            href="/contact"
            className="inline-block bg-black text-white px-10 py-4 rounded-2xl text-lg font-bold"
          >
            直接找中文顾问
          </Link>
        </section>

        {/* AT&T Fiber 常见问题模块 - 反向链接到独立 FAQ 页面 */}
        <section className="bg-slate-50 py-12 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
              AT&T Fiber 常见问题
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link
                href="/internet/att/fiber/faq/att-fiber-coverage-areas"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  AT&T Fiber 覆盖哪些地区？我家能装吗？
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  AT&T Fiber 覆盖范围需要按详细地址查询，城市内不同街区也可能不同...
                </p>
              </Link>
              <Link
                href="/internet/att/fiber/faq/att-fiber-true-fiber-to-home"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  AT&T Fiber 真的有光纤到家吗？
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  AT&T Fiber 是真光纤到户，与 Cable 宽带技术不同，稳定性和速度更优...
                </p>
              </Link>
              <Link
                href="/internet/att/fiber/faq/att-fiber-speed-performance"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  AT&T Fiber 网速真实吗？
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  AT&T Fiber 实际速度通常接近宣传速度，上下行对称，稳定性高...
                </p>
              </Link>
              <Link
                href="/internet/att/fiber/faq/att-fiber-price-increase"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  AT&T Fiber 会涨价吗？第一年后多少钱？
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  AT&T Fiber 促销期限和后续月费可能变化，需核对当前账单条款...
                </p>
              </Link>
              <Link
                href="/internet/att/fiber/faq/att-fiber-frequent-disconnections"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  AT&T Fiber 经常断网怎么办？
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  常见原因包括设备故障、线路问题、光纤连接不良...
                </p>
              </Link>
            </div>
            <div className="text-center">
              <Link
                href="/internet/att/fiber/faq"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg"
              >
                查看所有 AT&T Fiber FAQ
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

/* ===== 子组件 ===== */

function PlanCard({
  icon,
  badge,
  title,
  pros,
  cons,
}: {
  icon: React.ReactNode
  badge: string
  title: string
  pros: string[]
  cons: string[]
}) {
  return (
    <div className="border rounded-3xl p-6 space-y-5 bg-white">
      <div className="flex justify-between items-start">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-sm font-semibold">
            {badge}
          </span>
          <h3 className="text-2xl font-bold mt-4">{title}</h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <ul className="space-y-2">
        {pros.map((p) => (
          <li key={p} className="flex gap-2 text-slate-700">
            <CheckCircle2 className="text-green-600" size={18} />
            {p}
          </li>
        ))}
      </ul>

      <ul className="text-sm text-slate-500 space-y-1">
        {cons.map((c) => (
          <li key={c}>• {c}</li>
        ))}
      </ul>
    </div>
  )
}

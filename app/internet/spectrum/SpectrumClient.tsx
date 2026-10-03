'use client'

import React, { type ReactNode } from 'react'
import Link from 'next/link'
import {
  Wifi,
  ArrowRight,
  Phone,
  CheckCircle2,
  TrendingUp,
  MessageCircle,
  Home,
  Building2,
} from 'lucide-react'
import SpectrumServiceSchema from './SpectrumServiceSchema'

export default function SpectrumClient() {
  // 统一 FAQ 基础路径，避免 Search Console 抓取到不同的路径版本
  const FAQ_BASE_PATH = "/internet/spectrum/faq"

  return (
    <>
      <SpectrumServiceSchema />

      <main className="min-h-screen bg-white text-slate-900">
        {/* 顶部导航 - 使用 div 与 SSR 输出一致，避免 hydration 报错 */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            <Link
              href="/internet/providers"
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              ← 返回宽带对比页
            </Link>

            <div className="flex gap-2">
              <a
                href="tel:15108496191"
                className="hidden sm:flex items-center gap-1 px-4 py-2 border rounded-full text-xs font-bold hover:bg-slate-50 transition-colors"
              >
                <Phone size={14} />
                电话咨询
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-colors"
              >
                <MessageCircle size={14} />
                微信咨询
              </Link>
            </div>
          </div>
        </div>

        {/* HERO 区域 */}
        <section className="bg-gradient-to-b from-slate-100 to-white">
          <div className="max-w-7xl mx-auto px-6 py-14">
            <div className="max-w-3xl space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-slate-200 text-slate-800 text-sm font-semibold">
                Spectrum 宽带 · 不爱折腾型选择
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Spectrum 宽带速度稳定吗？价格会不会突然涨价？
              </h1>

              <p className="text-lg text-slate-700 leading-relaxed">
                用户比较 Xfinity、AT&T 和 Spectrum 时，通常需要同时查看<strong>价格结构、地址、设备、网络负载和促销条件</strong>，不能只按价格或品牌判断。
                如需了解更多服务，请返回 <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">鸿达电讯首页</Link>。
                常见问题如 <Link href={`${FAQ_BASE_PATH}/spectrum-bill-increase`} className="text-blue-600 hover:text-blue-700 font-semibold underline">Spectrum 宽带会不会涨价？</Link> 都有详细解答。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 transition-all"
                >
                  查我这个地址能不能装 <ArrowRight size={20} />
                </Link>

                <Link
                  href="/internet/providers"
                  className="border-2 border-slate-200 hover:border-slate-300 px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 transition-all"
                >
                  和其他宽带对比
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 方案选择 */}
        <section className="py-12" aria-labelledby="plan-selection">
          <h2 id="plan-selection" className="sr-only">方案选择</h2>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
            <PlanCard
              icon={<Home className="text-blue-600" />}
              title="Spectrum 住家宽带适合你，如果你："
              points={[
                '不追求最低价，只想省心',
                '不想一年一次打电话谈价',
                '家庭日常上网 / 视频 / 办公',
              ]}
            />
            <PlanCard
              icon={<Building2 className="text-blue-600" />}
              title="Spectrum 商业宽带适合你，如果你："
              points={[
                '小公司 / 店铺 / 工作室',
                '不希望账单频繁变动',
                '网络稳定比极限速度更重要',
              ]}
            />
          </div>
        </section>

        {/* 核心优势 */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-2 text-slate-900">
              <TrendingUp className="text-blue-600" /> 用户选择 Spectrum 的真实原因
            </h2>

            <ul className="grid gap-4 text-slate-700">
              {[
                '月费结构相对稳定，不靠低价诱导',
                '通常无流量上限，适合家庭长期使用',
                '覆盖范围广，很多老社区只能选 Spectrum'
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={20} />
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 常见问题模块 - 统一路径 */}
        <section className="py-16 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
              Spectrum 常见问题解答
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                { slug: 'spectrum-bill-increase', q: 'Spectrum 会不会涨价？', a: '大多数套餐在促销期结束后会恢复原价...' },
                { slug: 'spectrum-installation', q: 'Spectrum 安装要多久？', a: '不同房型流程不同，最快当天完成...' },
                { slug: 'spectrum-coverage', q: '哪些地址有 Spectrum？', a: '可用性取决于详细地址和当前覆盖查询结果，不能仅凭城市或邻近地址判断。' },
                { slug: 'spectrum-retention', q: '账单涨价了怎么办？', a: '先核对促销期限、设备费和账单项目，再向运营商核实当前方案与可用资格。' },
                { slug: 'spectrum-speed', q: 'Spectrum 速度怎么样？', a: 'Cable 宽带，速度稳定，适合日常使用...' },
              ].map((faq) => (
                <Link
                  key={faq.slug}
                  href={`${FAQ_BASE_PATH}/${faq.slug}`}
                  className="block p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {faq.a}
                  </p>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                href={FAQ_BASE_PATH}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-[1.02]"
              >
                查看所有 Spectrum 问答 <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function PlanCard({ icon, title, points }: { icon: ReactNode; title: string; points: string[] }) {
  return (
    <div className="border border-slate-200 rounded-3xl p-8 bg-white hover:border-blue-200 transition-colors">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-3 text-slate-700">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={18} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

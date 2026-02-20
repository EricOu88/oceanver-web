'use client'

import Link from 'next/link'
import {
  Wifi,
  ArrowRight,
  Phone,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Home,
  Building2,
} from 'lucide-react'
import FrontierServiceSchema from './FrontierServiceSchema'

export default function FrontierClient() {
  return (
    <>
      <FrontierServiceSchema />

      <main className="min-h-screen bg-white text-slate-900">

        {/* 顶部 */}
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
        <section className="bg-gradient-to-b from-indigo-50 to-white">
          <div className="max-w-7xl mx-auto px-6 py-14">
            <div className="max-w-3xl space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
                Frontier Fiber · 湾区隐藏款光纤
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                为什么很多湾区用户装了 Frontier，
                <br />却很少有人主动推荐？
              </h1>

              <p className="text-lg text-slate-700">
                Frontier Fiber 是<strong>真光纤到户</strong>，
                在部分湾区城市非常稳定、价格结构简单。
                但覆盖范围有限、宣传少，导致很多人<strong>不知道自己地址其实能装</strong>。
                如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">鸿达电讯 Bay Media Star 首页</Link>。
                常见问题如<Link href="/internet/frontier/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">Frontier 宽带会不会涨价？</Link>都有详细解答。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2"
                >
                  查我这个地址能不能装 <ArrowRight />
                </Link>

                <Link
                  href="/internet/providers"
                  className="border-2 px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2"
                >
                  和其他宽带对比 <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 适合谁 */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6">

            <PlanCard
              icon={<Home />}
              title="Frontier 住家光纤适合你，如果你："
              points={[
                '不追求促销噱头，更在意长期稳定',
                '远程办公 / 视频会议 / 云端工作',
                '不想每年都打电话重新谈价',
              ]}
            />

            <PlanCard
              icon={<Building2 />}
              title="Frontier 商业光纤适合你，如果你："
              points={[
                '公司或工作室需要稳定网络',
                '不希望频繁断线影响业务',
                '希望价格结构简单、长期可控',
              ]}
            />
          </div>
        </section>

        {/* GEO */}
        <section className="bg-slate-50 py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <MapPin /> Frontier 在湾区常见覆盖城市
            </h2>

            <p className="text-slate-700">
              Frontier Fiber 在以下城市的<strong>部分社区</strong>覆盖率较高。
              如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">鸿达电讯 Bay Media Star 首页</Link>。
              常见问题如<Link href="/internet/frontier/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">Frontier 宽带会不会涨价？</Link>都有详细解答。
            </p>

            <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
              <li>• San Jose（部分新社区）</li>
              <li>• Sunnyvale</li>
              <li>• Santa Clara</li>
              <li>• Fremont（个别区域）</li>
            </ul>

            <p className="text-sm text-slate-500">
              ⚠️ 同一城市不同街区差异极大，必须精确到地址查询
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 text-center">
          <h2 className="text-3xl font-bold mb-4">
            不确定 Frontier 是否比 Xfinity / AT&T 更适合你？
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            中文顾问可帮你横向对比三家宽带，只推荐真正适合的
          </p>

          <Link
            href="/contact"
            className="inline-block bg-black text-white px-10 py-4 rounded-2xl text-lg font-bold"
          >
            直接找中文顾问
          </Link>
        </section>

        {/* Frontier 常见问题模块 - 反向链接到独立 FAQ 页面 */}
        <section className="bg-slate-50 py-12 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
              Frontier 常见问题
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link
                href="/internet-wifi/frontier/faq/frontier-coverage-areas"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Frontier 宽带覆盖哪些地区？
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  Frontier Fiber 覆盖范围有限，主要在湾区部分城市...
                </p>
              </Link>
              <Link
                href="/internet/frontier/faq/frontier-fiber-vs-dsl"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Frontier 的光纤和 DSL 有什么区别？
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  Fiber 速度快、稳定，上下行对称；DSL 速度慢...
                </p>
              </Link>
              <Link
                href="/internet-wifi/frontier/faq/frontier-installation-time"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Frontier 安装需要多久？
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  新安装通常需要 2-4 周预约时间...
                </p>
              </Link>
              <Link
                href="/internet/frontier/faq/frontier-frequent-disconnections"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Frontier 网络常断线怎么办？
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  常见原因包括 ONT 故障、线路问题...
                </p>
              </Link>
              <Link
                href="/internet-wifi/frontier/faq/frontier-customer-service"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Frontier 客服好用吗？怎么投诉？
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  Reddit 普遍抱怨电话客服排队时间极长...
                </p>
              </Link>
            </div>
            <div className="text-center">
              <Link
                href="/internet/frontier/faq"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg"
              >
                查看所有 Frontier FAQ
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
  title,
  points,
}: {
  icon: React.ReactNode
  title: string
  points: string[]
}) {
  return (
    <div className="border rounded-3xl p-6 bg-white space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <ul className="space-y-2 text-slate-700">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <CheckCircle2 className="text-green-600" size={18} />
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}

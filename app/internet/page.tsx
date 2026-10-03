import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Wifi,
  MapPin,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  Home,
  HelpCircle,
} from 'lucide-react'
import SEOServiceSignal from '@/app/components/SEOServiceSignal'
import FAQPageSchema from '@/app/components/FAQPageSchema'
import GradientBannerCTA from '@/app/components/cta/GradientBannerCTA'
import { getHreflangAlternates } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: '美国宽带套餐与账单问题判断 | 美国鸿达电讯',
  description:
    '面向美国中文用户整理 Xfinity、AT&T Fiber、Spectrum、Frontier 等宽带套餐信息、地址覆盖核对和优惠到期后的账单判断。',
  alternates: getHreflangAlternates('/internet'),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function InternetPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* ================= 返回首页按钮 ================= */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <Home size={18} />
          <span>返回首页</span>
        </Link>
      </div>

      {/* ================= HERO ================= */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
          <Wifi size={16} />
          全美宽带信息与中文协助
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold">
          美国宽带申请 (中文服务)
        </h1>

        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          查地址覆盖 · 中文办理 · 解决宽带涨价  
          支持 Xfinity / AT&T Fiber / Spectrum / Frontier
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-center sm:gap-6">
          {/* 主 CTA：改成 /cellphone 同款渐变大胶囊条（跳转不变） */}
          <div className="w-full sm:flex-1 sm:max-w-3xl">
            <GradientBannerCTA
              href="/internet/providers"
              title="查看各大宽带运营商详细对比方案"
              subtitle="Xfinity · AT&T Fiber · Spectrum · Frontier"
            />
          </div>

          {/* 微信按钮：高度匹配主 CTA，垂直对齐，视觉协调 */}
          <div className="w-full sm:w-auto sm:flex sm:items-stretch">
            <Link
              href="/contact"
              className="group relative inline-flex w-full sm:h-full items-center justify-center gap-3
                         bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800
                         px-8 py-6 sm:py-8 md:py-12 rounded-[3rem] md:rounded-[4rem]
                         text-lg md:text-xl font-bold text-white transition-all duration-300
                         shadow-md hover:shadow-xl transform hover:scale-[1.01]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors group-hover:bg-white/30">
                <MessageCircle size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="whitespace-nowrap">
                联系中文客服
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 主 CTA（对标 cellphone 蓝条） ================= */}
      <section>
        <Link
          href="/internet/diagnosis"
          className="block w-full text-center
                     bg-gradient-to-r from-blue-600 to-indigo-600
                     text-white py-6 rounded-[2.5rem]
                     text-xl font-bold shadow-lg hover:opacity-95 transition"
        >
          美国宽带涨价问题诊断及解决方案 →
        </Link>
      </section>

      {/* ================= 美国宽带常见问题与解决方案 ================= */}
      <section className="border rounded-3xl p-8 bg-white shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <HelpCircle className="text-blue-600" size={22} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                美国宽带常见问题与解决方案
              </h2>
            </div>
            <p className="text-slate-600 text-lg">
              解答美国宽带涨价、覆盖、安装、合同、中文办理等高频问题。
              如果你发现宽带或手机账单在优惠期后突然涨价，可以查看我们的<Link href="/bill-optimization" className="text-blue-600 hover:text-blue-700 font-semibold underline">手机与宽带账单涨价优化服务</Link>，帮助你判断是否该续约、换套餐或更换运营商。
            </p>
          </div>
          <Link
            href="/internet/faq"
            className="inline-flex items-center justify-center gap-2
                       bg-blue-600 hover:bg-blue-700 text-white
                       px-6 py-3 rounded-xl font-semibold transition shrink-0"
          >
            查看全部宽带 FAQ
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ================= 能帮你解决什么 ================= */}
      <section className="grid md:grid-cols-3 gap-6">
        <FeatureCard
          icon={<MapPin size={28} />}
          title="地址覆盖查询"
          desc="不同地址支持的宽带运营商完全不同，必须查地址才准确。"
        />

        <Link
          href="/bill-optimization"
          className="border rounded-3xl p-6 space-y-3 text-center hover:bg-blue-50 hover:border-blue-300 transition"
        >
          <div className="mx-auto w-12 h-12 rounded-2xl
                          bg-blue-50 text-blue-700
                          flex items-center justify-center">
            <TrendingUp size={28} />
          </div>
          <h3 className="text-xl font-bold">宽带涨价处理</h3>
          <p className="text-slate-600">优惠期结束后月费上涨？可协助重新谈价或更换方案。</p>
        </Link>

        <FeatureCard
          icon={<MessageCircle size={28} />}
          title="中文办理支持"
          desc="无需英文沟通，中文一步搞定安装、转网与账单问题。"
        />
      </section>

      {/* ================= 运营商入口 ================= */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">
          主流美国宽带运营商
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <ProviderCard
            name="Xfinity"
            desc="覆盖最广，住家与商业宽带选择灵活"
            href="/internet/xfinity"
          />
          <ProviderCard
            name="AT&T Fiber"
            desc="真光纤，对称上下行，稳定性极高"
            href="/internet/att-fiber"
          />
          <ProviderCard
            name="Spectrum"
            desc="价格结构相对稳定，无流量上限"
            href="/internet/spectrum"
          />
          <ProviderCard
            name="Frontier Fiber"
            desc="部分地区高速光纤，价格竞争力强"
            href="/internet/frontier"
          />
        </div>
      </section>

      {/* ================= SEO 服务信号模块 ================= */}
      <SEOServiceSignal />

      {/* ================= 底部 CTA ================= */}
      <section className="bg-slate-100 rounded-3xl p-8 text-center space-y-4">
        <h2 className="text-3xl font-bold">
          不确定你家能装哪家宽带？
        </h2>
        <p className="text-lg text-slate-600">
          中文顾问免费帮你查地址覆盖、对比方案、预约安装。
          如果你发现宽带或手机账单在优惠期后突然涨价，可以查看我们的<Link href="/bill-optimization" className="text-blue-600 hover:text-blue-700 font-semibold underline">手机与宽带账单涨价优化服务</Link>，帮助你判断是否该续约、换套餐或更换运营商。
          如需了解更多通信问题说明，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">美国鸿达电讯首页</Link>。
          常见问题如<Link href="/internet/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">宽带账单为什么会突然涨价？</Link>和<Link href="/internet/providers/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">没有 SSN 可以办宽带吗？</Link>都有详细解答。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black text-white px-10 py-4
                     rounded-2xl text-lg font-semibold"
        >
          直接找中文顾问
        </Link>
      </section>

      {/* ================= FAQ Schema ================= */}
      <FAQPageSchema />
    </main>
  )
}

/* ================= 子组件 ================= */

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="border rounded-3xl p-6 space-y-3 text-center">
      <div className="mx-auto w-12 h-12 rounded-2xl
                      bg-blue-50 text-blue-700
                      flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  )
}

function ProviderCard({
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
      className="border rounded-3xl p-6 space-y-3
                 hover:bg-slate-50 transition"
    >
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-slate-600">{desc}</p>
      <span className="text-blue-600 font-semibold">
        查看方案 →
      </span>
    </Link>
  )
}

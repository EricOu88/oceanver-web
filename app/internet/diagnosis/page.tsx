import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import WhyUsPreviewCard from '@/app/components/WhyUsPreviewCard'

import {
  MapPin,
  DollarSign,
  MessageCircle,
  ArrowRight,
  HelpCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: '美国宽带问题诊断｜地址覆盖 · 宽带涨价 · 中文办理支持',
  description:
    '美国鸿达电讯帮助中文用户判断宽带地址覆盖、优惠到期、账单涨价和安装问题。资格、价格与可选方案以具体地址、账户及运营商审核为准。',
  alternates: {
    canonical: 'https://oceanver.com/internet/diagnosis',
  },
  openGraph: {
    title: '美国宽带问题诊断｜地址覆盖 · 宽带涨价 · 中文办理支持',
    description: '判断宽带地址覆盖、优惠到期、账单涨价和安装问题，具体结果以地址、账户及运营商审核为准。',
    url: 'https://oceanver.com/internet/diagnosis',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: { index: false, follow: false },
}

export default function InternetDiagnosisPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-14">
      {/* ================= 返回首页 ================= */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 transition"
        >
          ← 返回首页
        </Link>
      </div>

      {/* ================= 唯一 H1：宽带问题诊断 ================= */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
          宽带问题诊断
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          地址覆盖、宽带涨价、中文办理——先判断，再决定要不要换。
          如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">美国鸿达电讯首页</Link>。
          常见问题如<Link href="/internet/providers/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">宽带账单为什么会突然涨价？</Link>和<Link href="/internet/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">没有 SSN 可以办宽带吗？</Link>都有详细解答。
        </p>
      </section>

      {/* ================= 三大模块：地址覆盖 / 涨价处理 / 中文支持 ================= */}
      <section className="grid md:grid-cols-3 gap-6">
        {/* 模块 1：地址覆盖 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
            <MapPin className="text-blue-600" size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            地址覆盖
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            官网显示能装，现场却装不上？系统覆盖 ≠ 实际可装，楼内线路、接口或物业限制都很常见。
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            我们先查真实地址覆盖，结合安装经验判断你家到底能装哪几家，避免选错运营商白跑一趟。
          </p>
          <Link
            href="/internet/providers/faq#faq-10"
            className="mt-auto inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline"
          >
            怎么查询地址能装哪些宽带？
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 模块 2：涨价处理 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
            <DollarSign className="text-amber-800" size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            涨价处理
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            账单突然变贵，可能与优惠期结束、折扣失效、设备费或套餐调整有关。
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            我们帮你结合当前账单、地址、账户资格和使用需求，判断是否需要调整套餐或更换运营商。价格和结果以运营商审核为准。
          </p>
          <Link
            href="/internet/providers/faq#faq-2"
            className="mt-auto inline-flex items-center gap-2 text-amber-700 font-bold text-sm hover:underline"
          >
            宽带为什么第一年便宜第二年涨价？
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 模块 3：中文支持 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
            <MessageCircle className="text-emerald-600" size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            中文支持
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            打英文客服等半天、说不清需求？新移民、留学生办宽带最怕语言障碍和隐性条款。
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            全程中文沟通，查覆盖、比方案、办续约都我们来做，你只需提供地址和账单，不用反复折腾。
          </p>
          <Link
            href="/internet/providers"
            className="mt-auto inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors"
          >
            查看运营商对比，选好再中文办理
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ================= 我们怎么选（保留 WhyUsPreviewCard + 三步说明） ================= */}
      <section className="bg-slate-50 rounded-3xl p-8 space-y-8">
        <h2 className="text-2xl font-bold text-center text-slate-900">
          我们是如何帮客户选美国宽带的？
        </h2>
        <WhyUsPreviewCard />
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2">第一步：查真实地址覆盖</h3>
            <p className="text-slate-600 text-sm">不是只看官网系统，而是结合实际安装经验判断。</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2">第二步：判断是否「值得处理」</h3>
            <p className="text-slate-600 text-sm">有些账单没必要折腾，我们会直接告诉你。</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2">第三步：选长期更省的方案</h3>
            <p className="text-slate-600 text-sm">不是只看第一年价格，而是看整体长期成本。</p>
          </div>
        </div>
        <p className="text-center text-slate-600">
          全程中文沟通，不需要你反复打英文客服电话。
        </p>
      </section>

      {/* ================= 五大坑（保留） ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-center text-slate-900">
          新移民 / 华人装美国宽带，最常见的 5 个坑
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Pit title="1️⃣ 没有 SSN 能不能装？" desc="是否可以办理取决于具体运营商、套餐、地址及账户审核要求。" />
          <Pit title="2️⃣ 为什么账单后来变贵？" desc="可能是优惠到期、折扣失效、设备费变化或套餐调整，需要结合账单确认。" />
          <Pit title="3️⃣ 地址显示能装，结果装不上？" desc="系统显示 ≠ 现场可装，这是美国宽带最常见问题之一。" />
          <Pit title="4️⃣ 被捆绑手机 / TV 套餐怎么办？" desc="很多销售会强推捆绑，其实是可以避免的。" />
          <Pit title="5️⃣ 账单已经涨了还能处理吗？" desc="很多情况是可以重新调整方案的，不一定只能忍。" />
        </div>
      </section>

      {/* ================= FAQ（保留） ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-center text-slate-900">
          美国宽带常见问题（FAQ）
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <Faq q="美国宽带为什么每年都会涨价？">
            因为大多数套餐是促销价，到期后会自动恢复标准价格。
          </Faq>
          <Faq q="Xfinity 第二年涨价能处理吗？">
            很多情况下可以重新调整方案，甚至更换更合适的套餐。
          </Faq>
          <Faq q="AT&T Fiber 一定比 Xfinity 好吗？">
            如果地址支持光纤，稳定性通常更好，但并非所有地址都有。
          </Faq>
          <Faq q="公寓写能装，为什么实际装不上？">
            楼内线路、管理规定或接口问题是常见原因。
          </Faq>
          <Faq q="新移民没有 SSN 能装宽带吗？">
            是否可以办理取决于具体运营商、套餐、地址及账户审核要求。
          </Faq>
          <Faq q="可以只装宽带不办手机吗？">
            可以，不必被强制捆绑。
          </Faq>
          <Faq q="宽带账单已经涨了还能救吗？">
            可以先检查优惠、设备费、附加服务和套餐变化，再根据账户资格判断可选方案。
            {' '}
            <Link href="/bill-optimization" className="text-blue-600 hover:underline font-semibold">
              免费判断你的账单是否值得处理 →
            </Link>
          </Faq>
          <Faq q="可以远程帮我查地址吗？">
            可以，提供地址即可远程判断。
          </Faq>
        </div>
        <div className="text-center">
          <Link
            href="/internet/providers/faq"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
          >
            <HelpCircle size={18} />
            查看完整宽带 FAQ（10 个关键问题）
          </Link>
        </div>
      </section>

      {/* ================= 底部 CTA ================= */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="border border-slate-200 rounded-3xl p-8 space-y-4 bg-white">
          <h3 className="text-xl font-bold text-slate-900">不确定自己地址适合哪一家？</h3>
          <p className="text-slate-600 text-sm">
            中文快速判断是否值得处理，不强推、不乱卖。
          </p>
          <Link
            href="/contact#wechat"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
          >
            微信中文咨询
            <MessageCircle size={18} />
          </Link>
        </div>
        <div className="border border-slate-200 rounded-3xl p-8 space-y-4 bg-white">
          <h3 className="text-xl font-bold text-slate-900">已经确定要换宽带</h3>
          <p className="text-slate-600 text-sm">
            直接查看各大宽带运营商方案对比
          </p>
          <Link
            href="/internet/providers"
            className="inline-flex items-center gap-2 border-2 border-slate-300 px-6 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors"
          >
            查看运营商对比
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ================= FAQ Schema ================= */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: '新移民没有 SSN 能装美国宽带吗？', acceptedAnswer: { '@type': 'Answer', text: '是否可以办理取决于具体运营商、套餐、地址及账户审核要求。' } },
            { '@type': 'Question', name: '美国宽带账单为什么后来会涨价？', acceptedAnswer: { '@type': 'Answer', text: '可能是优惠到期、折扣失效、设备费变化或套餐调整，需要结合当前账单确认。' } },
            { '@type': 'Question', name: '地址显示能装为什么实际装不上？', acceptedAnswer: { '@type': 'Answer', text: '楼内线路或现场条件限制是常见原因。' } },
          ],
        })}
      </Script>

      {/* ================= Service Schema ================= */}
      <Script id="service-schema-diagnosis" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: '美国宽带问题诊断与咨询服务',
          serviceType: 'Internet Service Evaluation',
          description: '为新移民和华人用户提供美国宽带账单涨价判断、地址覆盖分析，以及是否值得更换宽带方案的中文咨询服务。',
          provider: { '@type': 'LocalBusiness', name: '美国鸿达电讯', url: 'https://oceanver.com', telephone: '+1-510-849-6191' },
          areaServed: { '@type': 'Country', name: 'United States' },
          availableChannel: { '@type': 'ServiceChannel', serviceLocation: { '@type': 'VirtualLocation', url: 'https://oceanver.com' } },
          audience: { '@type': 'Audience', audienceType: 'Chinese-speaking residents in the United States' },
        })}
      </Script>
    </main>
  )
}

function Pit({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-slate-200 rounded-2xl p-6 space-y-2 hover:shadow-md transition">
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  )
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="border border-slate-200 rounded-2xl p-6">
      <h4 className="font-bold text-slate-900 mb-2">{q}</h4>
      <p className="text-slate-600 text-sm">{children}</p>
    </div>
  )
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, Search } from 'lucide-react';
import { ProvidersShell } from './ProvidersShell';
import ProblemCards from './ProblemCards';
import { BottomCTAButton } from './BottomCTAButton';

export const metadata: Metadata = {
  title: '美国手机套餐推荐湾区中文办理 AT&T, T-Mobile, Ultra Mobile - 鸿达电讯',
  description:
    '湾区华人办理美国手机卡与套餐怎么选？本页对比 AT&T、T-Mobile、Verizon、Ultra Mobile 等主流运营商，支持中文咨询、微信办理与 Fremont 到店服务，适合新移民、家庭合约与预付费用户。',
  alternates: {
    canonical: 'https://oceanver.com/cellphone/providers',
  },
  openGraph: {
    title: '美国手机套餐推荐湾区中文办理 AT&T, T-Mobile, Ultra Mobile - 鸿达电讯',
    description:
      '湾区华人办理美国手机卡与套餐怎么选？本页对比 AT&T、T-Mobile、Verizon、Ultra Mobile 等主流运营商，支持中文咨询、微信办理与 Fremont 到店服务，适合新移民、家庭合约与预付费用户。',
    url: 'https://baymediastar.com/cellphone/providers',
    siteName: '鸿达电讯 Bay Media Star',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function CellphoneProvidersPage() {
  return (
    <ProvidersShell>
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* HERO */}
          <section className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              美国/湾区手机卡办理与运营商套餐选择指南（中文）
            </h1>
            <div className="max-w-3xl mx-auto text-center text-base md:text-lg text-slate-600 leading-relaxed space-y-2">
              <p>美国/湾区手机卡办理，中文服务，微信办理与 Fremont 到店服务。</p>
              <p>适合新移民、家庭合约与预付费用户，方案推荐合适，到店/远程都方便。</p>
              <p>建议先选类型，再选运营商，避免踩坑。</p>
            </div>
            <p className="max-w-3xl mx-auto text-center text-base md:text-lg text-slate-600 leading-relaxed">
              不同手机运营商在
              <strong className="text-slate-900">价格、信号覆盖、国际使用、账单稳定性</strong>
              方面差异很大。选错运营商可能导致信号差、国际漫游费用高、账单突然涨价等问题。
              <strong className="text-blue-600">中文协助可以帮您避免踩坑，找到最适合的方案。</strong>
              如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">鸿达电讯 Bay Media Star 首页</Link>。
              常见问题如<Link href="/cellphone/faq/how-to-choose-us-cellphone-plan" className="text-blue-600 hover:text-blue-700 font-semibold underline">没有 SSN 可以办手机卡吗？</Link>和<Link href="/cellphone/faq/prepaid-vs-postpaid" className="text-blue-600 hover:text-blue-700 font-semibold underline">预付费和后付费手机卡有什么区别？</Link>都有详细解答。
            </p>
          </section>

          {/* 不知道怎么选？ */}
          <section className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-black text-slate-900 mb-2">🤔 不知道怎么选？</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  刚到美国，面对各种手机套餐不知道从哪开始？
                  <strong className="text-slate-900">先了解 Prepaid、Postpaid、Family Plan 三种类型的区别</strong>，
                  掌握「先选类型，再选运营商」的核心思路，选起来更高效。
                </p>
                <Link
                  href="/cellphone/faq/how-to-choose-us-cellphone-plan"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm transition"
                >
                  查看《美国手机套餐怎么选》完整指南 →
                </Link>
              </div>
            </div>
          </section>

          {/* 首屏弱干扰引导 */}
          <section className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-slate-700 text-sm md:text-base">
                不确定选哪家？
                <span className="font-semibold text-slate-900"> 👉 用 1 分钟帮你判断最合适的手机套餐</span>
              </p>
              <Link
                href="/cellphone/diagnosis"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shrink-0"
              >
                开始套餐诊断
              </Link>
            </div>
          </section>

          {/* 问题导向的卡片网格（Server Component，solutions 无 hydration） */}
          <ProblemCards />
        </div>
      </main>

      {/* Testimonials 模块 */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 text-center">湾区用户真实评价</h2>
          <p className="text-center text-slate-600 mb-12">中文沟通清楚，方案推荐更省心；到店/远程都方便。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
              <p className="text-slate-700 leading-relaxed mb-3">
                “刚来美国不懂怎么选套餐，中文解释特别清楚，帮我对比了 AT&T 和 T-Mobile 的覆盖和费用，最后选到合适的预付费方案，办得很快。”
              </p>
              <p className="font-semibold text-slate-900">— 来自 San Jose 的小王</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
              <p className="text-slate-700 leading-relaxed mb-3">
                “家里 4 条线想省月费又怕麻烦，他们直接按我们用量推荐家庭方案，还提醒转网注意事项。到店办理很顺畅，之后账单问题也能中文沟通。”
              </p>
              <p className="font-semibold text-slate-900">— Fremont 家庭用户</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
              <p className="text-slate-700 leading-relaxed mb-3">
                “没有 SSN 也能办理，流程讲得很细，哪些材料要带、哪些套餐更稳都说明白了。远程微信也能办，特别省心。”
              </p>
              <p className="font-semibold text-slate-900">— 东湾新移民</p>
            </div>
          </div>
        </div>
      </section>

      {/* 双 CTA 按钮组（对比表后） */}
      <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">需要帮助？立即联系中文客服</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white text-lg px-8 py-4 rounded-xl shadow w-full sm:w-auto min-h-[48px] flex items-center justify-center font-black transition-all hover:bg-blue-700"
            >
              添加微信咨询（中文客服）
            </Link>
            <Link
              href="/contact"
              className="border border-blue-700 text-blue-700 bg-white hover:bg-blue-50 text-lg px-8 py-4 rounded-xl w-full sm:w-auto min-h-[48px] flex items-center justify-center font-black transition-all"
            >
              预约 Fremont 店面（到店办理）
            </Link>
          </div>
        </div>
      </section>

      {/* 相关指南（来自博客） */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 text-center">相关指南（来自博客）</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Link
              href="/blog/bay-area-internet-guide"
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900">新移民入境攻略：刚到美国如何办理手机卡更省钱</h3>
            </Link>
            <Link
              href="#"
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900">预付费 vs 合约：哪种更适合你</h3>
              {/* TODO: Replace with real blog link when available */}
            </Link>
            <Link
              href="#"
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900">转网不换号（Port-in）流程：如何避免断联</h3>
              {/* TODO: Replace with real blog link when available */}
            </Link>
          </div>
        </div>
      </section>

      {/* 底部入口区域 */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link
              href="/cellphone/faq"
              className="bg-white border-2 border-blue-200 rounded-3xl p-8 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <HelpCircle size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">美国手机常见问题</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                完整FAQ知识库，包含售前与售后常见问题详细解答，帮助您全面了解手机套餐选择、办理流程和常见坑点。
              </p>
              <div className="text-blue-600 font-semibold group-hover:underline">查看完整FAQ →</div>
            </Link>

            <Link
              href="/cellphone/diagnosis"
              className="bg-white border-2 border-orange-200 rounded-3xl p-8 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-800 flex items-center justify-center">
                  <Search size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">手机套餐诊断</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                根据你的城市、使用需求和预算，快速判断你适合哪种手机方案，避免选错套餐。
              </p>
              <div className="text-orange-800 font-semibold group-hover:underline">开始 1 分钟诊断 →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ下方强转化CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
            需要帮助？立即联系中文客服
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Link
              href="/contact"
              className="bg-blue-600 text-white text-lg px-8 py-4 rounded-xl shadow w-full sm:w-auto min-h-[48px] flex items-center justify-center font-black transition-all hover:bg-blue-700"
            >
              添加微信咨询（中文客服）
            </Link>
            <Link
              href="/contact"
              className="border border-blue-700 text-blue-700 bg-white hover:bg-blue-50 text-lg px-8 py-4 rounded-xl w-full sm:w-auto min-h-[48px] flex items-center justify-center font-black transition-all"
            >
              预约 Fremont 店面（到店办理）
            </Link>
          </div>
          <p className="text-slate-700 text-lg mb-8 leading-relaxed">
            根据你的城市、使用需求和预算，快速判断你适合哪种手机方案，避免选错套餐。
          </p>
          <Link
            href="/cellphone/diagnosis"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-black transition-all shadow-lg hover:shadow-xl"
          >
            👉 开始手机套餐诊断
          </Link>
        </div>
      </section>

      {/* 底部联系区 */}
      <section className="pb-20 px-4 md:pb-20 mb-16 md:mb-0">
        <div className="max-w-4xl mx-auto">
          <BottomCTAButton />
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} BAY MEDIA STAR · OFFICIAL PARTNER
        </p>
      </footer>
    </ProvidersShell>
  );
}

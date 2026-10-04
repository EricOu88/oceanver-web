import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: 'https://oceanver.com/cellphone/faq' },
  title: '美国手机常见问题 FAQ｜美国鸿达电讯',
  description:
    '美国手机套餐常见问题解答，包括 Prepaid、Postpaid、Family Plan 的区别，如何选择运营商，以及新移民和留学生常见问题。',
};

export default function CellphoneFAQPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* 返回链接 */}
        <div className="mb-6">
          <Link
            href="/cellphone/providers"
            className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 transition"
          >
            ← 返回手机套餐选择
          </Link>
        </div>

        {/* H1 */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            美国手机常见问题 FAQ
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            解答关于美国手机套餐选择、办理流程和常见问题的疑问。
          </p>
        </header>

        {/* 新手必读区块 */}
        <section className="mb-12 p-6 bg-gradient-to-r from-[#FCFDFE] to-[#EDF5F9] border-2 border-[#D8E2EA] rounded-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#164B78] rounded-xl flex items-center justify-center shrink-0">
              <BookOpen className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-slate-900 mb-2">
                📖 新手必读
              </h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                刚到美国不知道选哪家手机套餐？先看这篇完整指南，了解 Prepaid、Postpaid、Family Plan 三种类型的区别，
                掌握<strong className="text-slate-900">「先选类型，再选运营商」</strong>的核心思路。
              </p>
              <Link
                href="/cellphone/faq/how-to-choose-us-cellphone-plan"
                className="inline-flex items-center gap-2 bg-[#164B78] hover:bg-[#103B60] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
              >
                查看《美国手机套餐怎么选》新手指南
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ 列表 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            常见问题
          </h2>
          <div className="space-y-4">
            <Link
              href="/cellphone/faq/how-to-choose-us-cellphone-plan"
              className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-blue-600" size={24} />
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600">
                    美国手机套餐怎么选？新手一篇就懂
                  </h3>
                </div>
                <ArrowRight className="text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" size={20} />
              </div>
              <p className="text-slate-600 text-sm mt-2 ml-9">
                完整指南：Prepaid vs Postpaid vs Family Plan，4个自我判断问题，常见误区，先选类型再选运营商。
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ 列表 - 添加 TOP 2 */}
        <div className="space-y-4 mb-8">
          <Link
            href="/cellphone/faq/prepaid-vs-postpaid"
            className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HelpCircle className="text-blue-600" size={24} />
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600">
                  Prepaid vs Postpaid：预付费和后付费对比
                </h3>
              </div>
              <ArrowRight className="text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" size={20} />
            </div>
            <p className="text-slate-600 text-sm mt-2 ml-9">
              详细对比 Prepaid 和 Postpaid 两种套餐类型，包括信用要求、合约、价格稳定性、信号覆盖等。
            </p>
          </Link>
        </div>

        {/* CTA 引导到诊断 */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <div className="bg-blue-700 rounded-3xl p-10 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              还有具体问题？
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              如果你遇到的是账单变贵、信号差、转号、eSIM 或设备分期问题，可以进入手机问题诊断继续排查。
            </p>
            <Link
              href="/cellphone/diagnosis"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              进入手机问题诊断
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, X, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prepaid vs Postpaid：美国预付费和后付费手机套餐对比 | 鸿达电信',
  description:
    'Prepaid（预付费）和 Postpaid（后付费）手机套餐有什么区别？哪个更适合你？本文详细对比两种套餐类型，帮你做出正确选择。',
  keywords: [
    'Prepaid vs Postpaid',
    '预付费 vs 后付费',
    '预付费手机套餐',
    '后付费手机套餐',
    '合约手机',
    '无合约手机',
    '美国手机套餐对比',
    '手机套餐选择'
  ],
  alternates: {
    canonical: 'https://oceanver.com/cellphone/faq/prepaid-vs-postpaid',
  },
  openGraph: {
    title: 'Prepaid vs Postpaid：美国预付费和后付费手机套餐对比',
    description: '详细对比 Prepaid 和 Postpaid 两种手机套餐类型，帮你做出正确选择。',
    type: 'article',
  },
};

export default function PrepaidVsPostpaidPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* 返回链接 */}
        <div className="mb-6">
          <Link
            href="/cellphone/faq"
            className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 transition"
          >
            ← 返回手机套餐 FAQ
          </Link>
        </div>

        {/* H1 标题 */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Prepaid vs Postpaid：预付费和后付费手机套餐对比
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            刚到美国选手机套餐，最常遇到的问题是：<strong className="text-slate-900">Prepaid（预付费）和 Postpaid（后付费）有什么区别？</strong>
            哪个更适合我？本文详细对比两种套餐类型，帮你做出正确选择。
          </p>
        </header>

        {/* 核心区别 */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            核心区别
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
            <p className="text-slate-900 font-semibold text-lg mb-2">
              💡 一句话总结
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Prepaid（预付费）</strong>：先充值后使用，无需SSN和信用检查，无合约，灵活自由。
              <strong>Postpaid（后付费）</strong>：先使用后付费，需要SSN和信用检查，可能有合约，功能更全面。
            </p>
          </div>

          {/* 对比表格 */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              {/* Prepaid 列 */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-slate-900 mb-4">Prepaid（预付费）</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">无需SSN和信用检查</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">无合约绑定，随时停用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">价格透明，不会突然涨价</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">适合短期使用或试用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">通常没有多线折扣</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">需要提前充值</span>
                  </li>
                </ul>
              </div>

              {/* Postpaid 列 */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-slate-900 mb-4">Postpaid（后付费）</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">信号覆盖通常更好</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">多线有折扣，家庭更划算</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">可以先使用后付费</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">功能更全面</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">需要SSN和信用检查</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">可能有合约，提前解约要罚款</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 详细对比 */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            详细对比
          </h2>

          <div className="space-y-8">
            {/* 1. 信用要求 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. 信用要求</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Prepaid</p>
                  <p className="text-slate-600 text-sm">无需SSN，无需信用检查，任何人都可以办理。</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Postpaid</p>
                  <p className="text-slate-600 text-sm">需要SSN和信用记录，信用不好可能被拒或要求押金。</p>
                </div>
              </div>
            </div>

            {/* 2. 合约 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. 合约绑定</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Prepaid</p>
                  <p className="text-slate-600 text-sm">无合约，随时可以停用或更换，完全自由。</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Postpaid</p>
                  <p className="text-slate-600 text-sm">可能有合约（特别是分期买手机），提前解约需要支付违约金。</p>
                </div>
              </div>
            </div>

            {/* 3. 价格稳定性 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. 价格稳定性</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Prepaid</p>
                  <p className="text-slate-600 text-sm">价格固定，不会突然涨价，透明可控。</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Postpaid</p>
                  <p className="text-slate-600 text-sm">促销期结束后可能涨价，需要主动续约或换方案。</p>
                </div>
              </div>
            </div>

            {/* 4. 多线折扣 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">4. 多线折扣</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Prepaid</p>
                  <p className="text-slate-600 text-sm">通常没有多线折扣，每条线独立计费。</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Postpaid</p>
                  <p className="text-slate-600 text-sm">Family Plan 多线共享流量，人均成本更低。</p>
                </div>
              </div>
            </div>

            {/* 5. 信号覆盖 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">5. 信号覆盖</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Prepaid</p>
                  <p className="text-slate-600 text-sm">使用主流运营商网络，但可能优先级较低。</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Postpaid</p>
                  <p className="text-slate-600 text-sm">通常有更好的网络优先级，信号更稳定。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 适合人群 */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            适合人群
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">选择 Prepaid 如果你：</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <span>没有SSN或信用记录</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <span>短期使用（几个月）</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <span>不想被合约绑定</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <span>价格敏感，担心突然涨价</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <span>只需要1-2条线</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">选择 Postpaid 如果你：</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>有SSN和良好信用记录</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>长期在美（1年以上）</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>需要3条以上线路</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>对信号稳定性要求高</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>商务或家庭使用</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 常见误区 */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            常见误区
          </h2>

          <div className="space-y-6">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3 mb-2">
                <AlertCircle className="text-amber-800 shrink-0 mt-0.5" size={24} />
                <h3 className="text-xl font-bold text-slate-900">
                  误区 1：Prepaid 信号一定比 Postpaid 差
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed ml-9">
                不一定。很多 Prepaid 套餐使用主流运营商（如 AT&T、T-Mobile）的网络，信号覆盖基本相同。
                区别在于网络优先级，Postpaid 在拥堵时可能优先，但日常使用差异不大。
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3 mb-2">
                <AlertCircle className="text-amber-800 shrink-0 mt-0.5" size={24} />
                <h3 className="text-xl font-bold text-slate-900">
                  误区 2：Postpaid 一定比 Prepaid 贵
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed ml-9">
                不一定。对于单线用户，Prepaid 可能更便宜。但对于多线家庭，Postpaid 的 Family Plan 人均成本通常更低。
                关键要看你的使用场景和线路数量。
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3 mb-2">
                <AlertCircle className="text-amber-800 shrink-0 mt-0.5" size={24} />
                <h3 className="text-xl font-bold text-slate-900">
                  误区 3：没有 SSN 就不能办 Postpaid
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed ml-9">
                确实，Postpaid 通常需要 SSN。但如果你没有 SSN，Prepaid 是完全可行的选择，
                很多新移民和留学生都用 Prepaid，功能上完全够用。
              </p>
            </div>
          </div>
        </section>

        {/* CTA 引导到诊断 */}
        <section className="bg-blue-700 rounded-3xl p-10 text-white text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            还是不确定选哪种类型？
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            用我们的智能诊断工具，1 分钟帮你判断适合 Prepaid 还是 Postpaid，并推荐具体运营商方案。
          </p>
          <Link
            href="/cellphone/diagnosis"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            👉 开始 1 分钟智能诊断
            <ArrowRight size={20} />
          </Link>
        </section>

        {/* 相关链接 */}
        <div className="border-t border-slate-200 pt-8">
          <p className="text-slate-600 mb-4">相关文章：</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/cellphone/faq/how-to-choose-us-cellphone-plan"
              className="text-blue-600 hover:underline font-semibold"
            >
              美国手机套餐怎么选？新手一篇就懂 →
            </Link>
            <Link
              href="/cellphone/providers"
              className="text-blue-600 hover:underline font-semibold"
            >
              手机运营商对比 →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

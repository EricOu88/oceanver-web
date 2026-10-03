import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, X, AlertCircle, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '美国手机套餐怎么选？新手一篇就懂 | 鸿达电信',
  description:
    '刚到美国不知道选哪家手机套餐？本文帮你快速判断适合你的手机方案类型（Prepaid/Postpaid/Family），并引导智能诊断。先选类型，再选运营商。',
  keywords: [
    '美国手机套餐',
    '手机套餐怎么选',
    '手机套餐新手指南',
    'Prepaid vs Postpaid',
    '家庭手机套餐',
    '预付费手机',
    '合约手机',
    '美国手机运营商',
    '手机套餐选择'
  ],
  alternates: {
    canonical: 'https://oceanver.com/cellphone/faq/how-to-choose-us-cellphone-plan',
  },
  openGraph: {
    title: '美国手机套餐怎么选？新手一篇就懂',
    description: '刚到美国不知道选哪家手机套餐？本文帮你快速判断适合你的手机方案类型。',
    type: 'article',
  },
};

export default function HowToChooseCellphonePlanPage() {
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

        {/* H1 标题 */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            美国手机套餐怎么选？新手一篇就懂
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            刚到美国，面对 AT&T、T-Mobile、Verizon 这些运营商，不知道选哪家？
            其实<strong className="text-slate-900">先选类型，再选运营商</strong>，思路就清晰了。
          </p>
        </header>

        {/* 核心观点 */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-12">
          <p className="text-slate-900 font-semibold text-lg mb-2">
            💡 核心思路
          </p>
          <p className="text-slate-700 leading-relaxed">
            美国手机套餐主要分为 <strong>Prepaid（预付费）</strong>、<strong>Postpaid（后付费/合约）</strong> 和 <strong>Family Plan（家庭套餐）</strong> 三种类型。
            先确定你适合哪种类型，再去对比具体运营商，这样选起来更高效。
          </p>
        </div>

        {/* 三种套餐类型对比 */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            三种套餐类型对比
          </h2>

          <div className="space-y-8">
            {/* Prepaid */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                1. Prepaid（预付费）
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">优点</p>
                  <ul className="space-y-2">
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
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">缺点</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">通常没有多线折扣</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">需要提前充值</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">部分功能可能受限</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">适合人群：</strong>留学生、新移民（无SSN）、短期访客、不想被合约绑定的用户。
              </p>
            </div>

            {/* Postpaid */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                2. Postpaid（后付费/合约）
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">优点</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">通常信号覆盖更好</span>
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
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">缺点</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">需要SSN和信用检查</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">可能有合约，提前解约要罚款</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">促销期结束后可能涨价</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">适合人群：</strong>有SSN和信用记录、长期在美、家庭多线用户、商务用户。
              </p>
            </div>

            {/* Family Plan */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                3. Family Plan（家庭套餐）
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">优点</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">多线共享流量，人均成本低</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">统一账单管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">通常有额外折扣和福利</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">缺点</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">需要主账户有SSN和信用</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">一人欠费影响全组</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700">需要协调多人需求</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">适合人群：</strong>家庭用户（2-5线）、朋友合办、公司统一管理。
              </p>
            </div>
          </div>
        </section>

        {/* 4个自我判断问题 */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            4 个自我判断问题
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            回答下面 4 个问题，你就能快速判断自己适合哪种类型：
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                问题 1：你有 SSN 和信用记录吗？
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">✓ 有</span>
                  <span>→ 可以考虑 Postpaid 或 Family Plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">✗ 没有</span>
                  <span>→ 只能选 Prepaid（预付费）</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                问题 2：你是长期在美还是短期使用？
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">长期（1年以上）</span>
                  <span>→ Postpaid 或 Family Plan 更划算</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">短期（几个月）</span>
                  <span>→ Prepaid 更灵活</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                问题 3：你需要几条线？
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">1-2 条</span>
                  <span>→ Prepaid 或 Postpaid 都可以</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">3 条以上</span>
                  <span>→ Family Plan 通常更划算</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                问题 4：你最看重什么？
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">灵活性和无合约</span>
                  <span>→ Prepaid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">信号稳定和功能全面</span>
                  <span>→ Postpaid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">多线性价比</span>
                  <span>→ Family Plan</span>
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
                  误区 1：只看价格，不看类型
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed ml-9">
                很多人直接对比 AT&T 和 T-Mobile 的价格，但忽略了类型差异。
                Prepaid 的 $30 和 Postpaid 的 $30 完全不是一回事，前者是固定价格，后者可能只是促销价。
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3 mb-2">
                <AlertCircle className="text-amber-800 shrink-0 mt-0.5" size={24} />
                <h3 className="text-xl font-bold text-slate-900">
                  误区 2：以为没有 SSN 就不能办手机
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed ml-9">
                这是最大的误解。Prepaid（预付费）套餐不需要 SSN，也不需要信用检查。
                很多新移民和留学生都用 Prepaid，完全没问题。
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3 mb-2">
                <AlertCircle className="text-amber-800 shrink-0 mt-0.5" size={24} />
                <h3 className="text-xl font-bold text-slate-900">
                  误区 3：以为合约套餐一定更贵
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed ml-9">
                对于家庭多线用户，Family Plan 的人均成本通常比 Prepaid 更低。
                关键是要看你的使用场景和需求。
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3 mb-2">
                <AlertCircle className="text-amber-800 shrink-0 mt-0.5" size={24} />
                <h3 className="text-xl font-bold text-slate-900">
                  误区 4：直接选最便宜的运营商
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed ml-9">
                价格只是因素之一。信号覆盖、国际使用、账单稳定性都很重要。
                选错了运营商，即使便宜也可能用得不爽。
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
            用我们的智能诊断工具，1 分钟帮你判断适合哪种手机方案类型，并推荐具体运营商。
          </p>
          <Link
            href="/cellphone/diagnosis"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            👉 开始 1 分钟智能诊断
            <ArrowRight size={20} />
          </Link>
        </section>

        {/* 总结 */}
        <section className="bg-slate-100 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-4">
            总结
          </h2>
          <ol className="space-y-3 text-slate-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="font-black text-blue-600 shrink-0">1.</span>
              <span><strong>先选类型：</strong>根据 SSN、使用时长、线路数量判断适合 Prepaid、Postpaid 还是 Family Plan。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-black text-blue-600 shrink-0">2.</span>
              <span><strong>再选运营商：</strong>在确定的类型下，对比 AT&T、T-Mobile、Verizon 等运营商的信号、价格、国际支持。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-black text-blue-600 shrink-0">3.</span>
              <span><strong>避免误区：</strong>不要只看价格，不要以为没 SSN 就不能办，不要直接选最便宜的。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-black text-blue-600 shrink-0">4.</span>
              <span><strong>不确定就诊断：</strong>用智能诊断工具快速判断，或咨询中文客服获取专业建议。</span>
            </li>
          </ol>
        </section>

        {/* 相关链接 */}
        <div className="border-t border-slate-200 pt-8">
          <p className="text-slate-600 mb-4">相关文章：</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/cellphone/providers"
              className="text-blue-600 hover:underline font-semibold"
            >
              手机运营商对比 →
            </Link>
            <Link
              href="/cellphone/diagnosis"
              className="text-blue-600 hover:underline font-semibold"
            >
              手机套餐智能诊断 →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

'use client';

import Link from 'next/link';
import {
  Smartphone,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  BarChart3,
  Zap,
} from 'lucide-react';

import BackToHomeButton from '@/app/components/BackToHomeButton';
import ContactEntry from '@/app/components/contact/ContactEntry';

const FAQ_ITEMS = [
  {
    href: '/cellphone/faq/how-to-choose-us-cellphone-plan',
    title: '美国手机套餐怎么选？新手一篇就懂',
    desc: 'Prepaid vs Postpaid vs Family Plan，先选类型再选运营商',
  },
  {
    href: '/cellphone/faq/prepaid-vs-postpaid',
    title: 'Prepaid vs Postpaid：预付费和后付费对比',
    desc: '信用要求、合约、价格稳定性，帮你做出正确选择',
  },
  {
    href: '/blog/bay-area-phone-card-guide',
    title: '湾区电话卡办理指南',
    desc: '湾区相关电话卡覆盖与套餐问题',
  },
  {
    href: '/blog/how-to-save-on-phone-bills',
    title: '如何省电话费',
    desc: '降低手机月费、避免账单涨价的小技巧',
  },
  {
    href: '/cellphone/faq',
    title: '更多手机套餐 FAQ',
    desc: '完整常见问题列表',
  },
];

export default function CellphoneClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <BackToHomeButton />

      {/* ===================== H1 + 定位段 ===================== */}
      <section className="pt-16 pb-10 bg-gradient-to-b from-blue-50/80 via-indigo-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
            美国手机套餐与电话卡选择
          </h1>
          <div className="text-lg text-slate-700 leading-relaxed space-y-3">
            <p>
              选择美国手机套餐或电话卡，第一步不是比价格，而是<strong className="text-slate-900">先选对「类型」</strong>。
            </p>
            <p>
              不同类型适合的人群不同：<strong className="text-slate-900">预付费电话卡</strong>（灵活省心）、
              <strong className="text-slate-900">AT&T 家庭合约机</strong>（长期更划算）、
              <strong className="text-slate-900">AT&T 商业手机方案</strong>（多线/企业更合适）。
            </p>
            <p>
              本页面向美国中文用户提供信息与协助；具体办理资格和方式以运营商政策、账户状态及所在地址为准。
            </p>
          </div>
        </div>
      </section>

      {/* ===================== 三大类型卡片 ===================== */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* 卡片1：预付费 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-blue-400 transition-shadow shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="text-blue-600" size={24} />
                </div>
                <h2 className="text-xl font-black text-slate-900">预付费电话卡（Prepaid）</h2>
              </div>
              <p className="text-slate-600 text-sm font-semibold mb-4">适合：新移民 / 留学生 / 无 SSN / 预算优先</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-700">无需合约、可随时换套餐、办理快</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-700">无信用检查，落地即用</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-700">国内可下单，顺丰包邮到中美</span>
                </li>
              </ul>
              <Link
                href="/cellphone/prepaid"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition"
              >
                进入预付费专区
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* 卡片2：AT&T 家庭 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-cyan-400 transition-shadow shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Users className="text-cyan-600" size={24} />
                </div>
                <h2 className="text-xl font-black text-slate-900">AT&T 家庭合约机</h2>
              </div>
              <p className="text-slate-600 text-sm font-semibold mb-4">适合：家庭多线 / 长期使用 / 想要 iPhone/Samsung 合约</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-700">多线更优惠、正规账单、长期更稳定</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-700">携号转网有补贴</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-700">合约机免费或低价拿新手机</span>
                </li>
              </ul>
              <Link
                href="/cellphone/att-family"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition"
              >
                查看 AT&T 家庭方案
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* 卡片3：AT&T 商业 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-indigo-400 transition-shadow shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Building2 className="text-indigo-600" size={24} />
                </div>
                <h2 className="text-xl font-black text-slate-900">AT&T 商业手机方案</h2>
              </div>
              <p className="text-slate-600 text-sm font-semibold mb-4">适合：公司/店铺/团队多线、需要商业账单与管理</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-700">商业专属折扣、可扩展多号码</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-700">商业账单便于报销</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-700">多线共享流量，人均成本更低</span>
                </li>
              </ul>
              <Link
                href="/cellphone/att-business"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition"
              >
                查看 AT&T 商业方案
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 教育模块：为什么要先选类型 ===================== */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
            为什么选电话卡或手机方案要先看类型？
          </h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={22} />
              <div>
                <strong className="text-slate-900">预付费 ≠ 合约机</strong>
                <span className="text-slate-700"> — 是否绑定合约、费用结构完全不同</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={22} />
              <div>
                <strong className="text-slate-900">家庭 ≠ 商业</strong>
                <span className="text-slate-700"> — 优惠方式、账单与管理方式不同</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={22} />
              <div>
                <strong className="text-slate-900">身份/信用不同</strong>
                <span className="text-slate-700"> — 可选方案与办理流程不同</span>
              </div>
            </li>
          </ul>
          <p className="text-slate-600 mb-6 text-center">
            不确定选哪类？点下面「快速判断」或直接微信/电话咨询。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/cellphone/diagnosis"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition"
            >
              <Zap size={18} />
              快速判断
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== Providers 入口 ===================== */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">如果想先从运营商开始了解</h2>
          <p className="text-slate-600 mb-6">按 AT&T、T-Mobile、Verizon、Ultra、Gen Mobile 等运营商与适用场景对比选择。</p>
          <Link
            href="/cellphone/providers"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg md:text-xl rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-out min-h-[48px]"
          >
            <BarChart3 size={20} />
            主流运营商选择方案
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ===================== 常见问题入口 ===================== */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-slate-900 mb-6">美国手机卡常见问题</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition group"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <HelpCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600">{item.title}</h3>
                      <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="text-slate-400 group-hover:text-blue-600 flex-shrink-0" size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== GEO 信任模块 ===================== */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">全美中文协助</h2>
          <ul className="space-y-3 mb-8 text-slate-700">
            <li className="flex items-center gap-2">
              <HelpCircle className="text-blue-600 flex-shrink-0" size={20} />
              <span>套餐资格、网络覆盖与办理方式需按运营商和地址核实</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
              <span>可通过电话或微信获取中文服务</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
              <span>办理前先免费评估适合方案</span>
            </li>
          </ul>
          <div className="max-w-2xl mx-auto">
            <ContactEntry
              title="需要中文客服帮你选方案？"
              subtitle="加微信最快｜也可电话或短信联系"
            />
          </div>
        </div>
      </section>

      <footer className="py-8 border-t text-center">
        <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} BAY MEDIA STAR
        </p>
      </footer>
    </div>
  );
}

'use client';

import Link from 'next/link';
import {
  Smartphone,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Zap,
  ChevronLeft,
} from 'lucide-react';

import BackToHomeButton from '@/app/components/BackToHomeButton';
import ContactEntry from '@/app/components/contact/ContactEntry';

/* ===================== 三大类型分流卡片 ===================== */
const TYPE_CARDS = [
  {
    title: '预付费电话卡（Prepaid）',
    desc: '适合：新移民、留学生、无 SSN、预算优先',
    bullets: ['无需合约、可随时换套餐', '无信用检查、办理快', '不同人群适合不同类型'],
    href: '/cellphone/prepaid',
    icon: Smartphone,
    color: 'blue',
  },
  {
    title: 'AT&T 家庭合约机',
    desc: '适合：家庭多线、长期使用、想要合约机',
    bullets: ['多线更优惠、正规账单', '携号转网有补贴', '不同人群适合不同类型'],
    href: '/cellphone/att-family',
    icon: Users,
    color: 'cyan',
  },
  {
    title: 'AT&T 商业手机方案',
    desc: '适合：公司、店铺、团队多线',
    bullets: ['商业专属折扣、可扩展多号码', '商业账单便于报销', '不同人群适合不同类型'],
    href: '/cellphone/att-business',
    icon: Building2,
    color: 'indigo',
  },
];

/* ===================== 湾区运营商快速对比 ===================== */
const OPERATOR_COMPARE = [
  { name: 'Gen Mobile', type: 'Prepaid', crowd: '留学生/回国漫游/预算优先', strength: '低价、国际漫游', difficulty: '低', href: '/cellphone/prepaid' },
  { name: 'Ultra Mobile', type: 'Prepaid', crowd: '新移民/无 SSN/短期', strength: '无 SSN、灵活', difficulty: '低', href: '/cellphone/prepaid' },
  { name: 'T-Mobile', type: 'Prepaid/Family', crowd: '城市用户/国际使用', strength: '国际漫游、城市覆盖', difficulty: '中', href: '/cellphone/prepaid' },
  { name: 'AT&T', type: 'Family/Business', crowd: '家庭多线/商业多线', strength: '覆盖广、合约机优惠', difficulty: '中', href: '/cellphone/att-family' },
  { name: 'Verizon', type: 'Family', crowd: '信号优先/郊区/乡村', strength: '信号最强、覆盖广', difficulty: '中', href: '/cellphone/att-family' },
];

/* ===================== 按场景推荐 ===================== */
const SCENARIO_RECOMEND = [
  { scenario: '新移民 / 无 SSN', desc: '无法办理合约套餐，预付费无需信用检查，落地即用。', href: '/cellphone/prepaid' },
  { scenario: '留学生 / 预算优先', desc: '预付费灵活、可随时换，国内可下单包邮到美，回国也可用。', href: '/cellphone/prepaid' },
  { scenario: '家庭多线 / 长期使用', desc: '家庭合约多线更优惠，正规账单，携号转网有补贴。', href: '/cellphone/att-family' },
  { scenario: '公司 / 店铺 / 团队多线', desc: '商业方案专属折扣，可扩展多号码，商业账单便于报销。', href: '/cellphone/att-business' },
  { scenario: '经常回国 / 国际使用', desc: '预付费方案多含国际漫游，或可搭配 WiFi Calling。', href: '/cellphone/prepaid' },
];

/* ===================== 运营商分组与详情卡 ===================== */
const OPERATOR_CARDS = [
  { name: 'Gen Mobile', type: 'Prepaid', tagline: '适合留学生、回国漫游、预算优先用户', pros: ['低价月费', '国际漫游友好', '国内可激活'], cons: ['MVNO 依赖 T-Mobile 网络'], href: '/cellphone/genmobile' },
  { name: 'Ultra Mobile', type: 'Prepaid', tagline: '适合新移民、无 SSN、短期用户', pros: ['无 SSN 可办', '灵活无合约', '邮寄中美'], cons: ['预付费流量有限'], href: '/cellphone/ultra' },
  { name: 'T-Mobile', type: 'Prepaid', tagline: '适合城市用户、国际漫游需求', pros: ['国际漫游好', '城市 5G 覆盖', '预付费可选'], cons: ['郊区信号相对弱'], href: '/cellphone/tmobile' },
  { name: 'AT&T 家庭', type: 'Family', tagline: '适合家庭多线、长期使用', pros: ['覆盖广', '合约机优惠', '携号转网补贴'], cons: ['需信用或押金'], href: '/cellphone/att-family' },
  { name: 'AT&T 商业', type: 'Business', tagline: '适合公司、店铺、团队多线', pros: ['商业专属折扣', '可扩展多号码', '商业账单'], cons: ['需商业资格'], href: '/cellphone/att-business' },
  { name: 'Verizon', type: 'Family', tagline: '适合信号优先、郊区乡村用户', pros: ['信号最强', '郊区覆盖好', '高速网络'], cons: ['价格偏高'], href: '/cellphone/verizon' },
];

/* ===================== Providers FAQ ===================== */
const PROVIDER_FAQ = [
  { q: '湾区哪个运营商信号比较稳定？', a: 'AT&T、Verizon 在湾区覆盖较广；T-Mobile 城市好、郊区稍弱；预付费 MVNO 依赖主网。' },
  { q: '预付费电话卡和合约机有什么区别？', a: '预付费：先付费后使用，无合约、无信用检查。合约机：需信用审核，有合约，可低价或免费拿手机。' },
  { q: '没有 SSN 可以选择哪些运营商？', a: '预付费方案如 Gen Mobile、Ultra Mobile、T-Mobile 预付费等，通常无需 SSN。' },
  { q: '家庭多线适合哪类方案？', a: 'AT&T、Verizon、T-Mobile 家庭套餐，多线共享更划算，适合长期使用。' },
  { q: '商业手机方案通常需要什么资料？', a: '通常需要 EIN（税号）、营业执照等商业资格，具体以运营商要求为准。' },
  { q: '在湾区办卡可以远程吗？', a: '可以。支持远程办理、邮寄 SIM 或 eSIM 激活，中文客服协助。' },
];

export default function ProvidersClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <BackToHomeButton />

      {/* 顶部导航 */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/cellphone" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 group-hover:text-blue-600 group-hover:bg-blue-50 transition">
              <ChevronLeft size={18} />
            </div>
            <span className="font-bold text-sm text-slate-600 group-hover:text-blue-600">返回电话卡总览</span>
          </Link>
        </div>
      </nav>

      <main className="pb-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* ===================== 1. H1 + 定位段 ===================== */}
          <section className="pt-12 pb-10">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight text-center">
              湾区手机运营商与电话卡选择指南（华人中文）
            </h1>
            <div className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed space-y-3 text-center">
              <p>
                在湾区选手机运营商，第一步不是比价格，而是<strong className="text-slate-900">先选「类型」再选「运营商」</strong>。
              </p>
              <p>
                不同类型适合不同人群：预付费（灵活省心）、家庭合约（长期划算）、商业方案（多线企业）。本页提供<strong className="text-slate-900">对比与正确入口</strong>，华人中文服务，帮你高效决策。
              </p>
            </div>
          </section>

          {/* ===================== 2. 三大类型分流 ===================== */}
          <section className="py-10">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">三大类型先选</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {TYPE_CARDS.map((card) => {
                const Icon = card.icon;
                const iconBg = card.color === 'blue' ? 'bg-blue-100' : card.color === 'cyan' ? 'bg-cyan-100' : 'bg-indigo-100';
                const iconColor = card.color === 'blue' ? 'text-blue-600' : card.color === 'cyan' ? 'text-cyan-600' : 'text-indigo-600';
                return (
                  <div
                    key={card.title}
                    className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-shadow shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
                        <Icon className={iconColor} size={22} />
                      </div>
                      <h3 className="text-lg font-black text-slate-900">{card.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">{card.desc}</p>
                    <ul className="space-y-1 mb-4">
                      {card.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="text-green-500 shrink-0" size={14} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition"
                    >
                      进入
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ===================== 3. 湾区运营商快速对比 ===================== */}
          <section className="py-10 bg-slate-50 rounded-2xl px-4 md:px-6">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">湾区运营商快速对比</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-3 px-3 font-bold text-slate-900">运营商</th>
                    <th className="text-left py-3 px-3 font-bold text-slate-900">类型</th>
                    <th className="text-left py-3 px-3 font-bold text-slate-900">适合人群</th>
                    <th className="text-left py-3 px-3 font-bold text-slate-900">主要优势</th>
                    <th className="text-left py-3 px-3 font-bold text-slate-900">办理难度</th>
                    <th className="text-left py-3 px-3 font-bold text-slate-900">中文协助</th>
                  </tr>
                </thead>
                <tbody>
                  {OPERATOR_COMPARE.map((row) => (
                    <tr key={row.name} className="border-b border-slate-100 hover:bg-white/60">
                      <td className="py-3 px-3 font-semibold text-slate-900">{row.name}</td>
                      <td className="py-3 px-3 text-slate-600">{row.type}</td>
                      <td className="py-3 px-3 text-slate-600">{row.crowd}</td>
                      <td className="py-3 px-3 text-slate-600">{row.strength}</td>
                      <td className="py-3 px-3 text-slate-600">{row.difficulty}</td>
                      <td className="py-3 px-3">
                        <Link href={row.href} className="text-blue-600 hover:text-blue-700 font-semibold">
                          进入 →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ===================== 4. 按使用场景推荐 ===================== */}
          <section className="py-10">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">按使用场景推荐</h2>
            <div className="space-y-4">
              {SCENARIO_RECOMEND.map((s) => (
                <Link
                  key={s.scenario}
                  href={s.href}
                  className="block p-5 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600">{s.scenario}</h3>
                      <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                    </div>
                    <ArrowRight className="text-slate-400 group-hover:text-blue-600 shrink-0" size={20} />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ===================== 5. 运营商分组目录 + 详情卡 ===================== */}
          <section className="py-10 bg-slate-50 rounded-2xl px-4 md:px-6">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">运营商分组目录</h2>
            <p className="text-slate-600 text-center mb-8">按适用类型分组，不按知名度排序</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-black text-slate-800 mb-4">预付费（Prepaid）</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {OPERATOR_CARDS.filter((o) => o.type === 'Prepaid' || o.type.startsWith('Prepaid')).map((op) => (
                    <OperatorCard key={op.name} op={op} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-800 mb-4">家庭合约（Postpaid / Family）</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {OPERATOR_CARDS.filter((o) => o.type.includes('Family')).map((op) => (
                    <OperatorCard key={op.name} op={op} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-800 mb-4">商业（Business）</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {OPERATOR_CARDS.filter((o) => o.type.includes('Business')).map((op) => (
                    <OperatorCard key={op.name} op={op} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ===================== 6. GEO 本地信号 ===================== */}
          <section className="py-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">湾区本地服务</h2>
            <ul className="space-y-3 mb-8 text-slate-700 max-w-2xl mx-auto">
              <li className="flex items-center gap-2">
                <MapPin className="text-blue-600 shrink-0" size={20} />
                服务覆盖：东湾、南湾、北湾（Fremont、San Jose、Milpitas 等）
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                中文服务，全程协助
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                到店办理 + 远程办理
              </li>
            </ul>
            <div className="max-w-2xl mx-auto">
              <ContactEntry title="需要中文客服帮你选运营商？" subtitle="加微信最快｜也可电话或短信联系" />
            </div>
          </section>

          {/* ===================== 7. Providers 专属 FAQ ===================== */}
          <section className="py-12 bg-slate-50 rounded-2xl px-4 md:px-6">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">如何选运营商？常见问题</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {PROVIDER_FAQ.map((faq) => (
                <details key={faq.q} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <summary className="px-4 py-3 cursor-pointer font-semibold text-slate-900 list-none flex items-center justify-between">
                    {faq.q}
                    <span className="text-slate-400 group-open:rotate-180">▼</span>
                  </summary>
                  <p className="px-4 py-3 pt-0 text-slate-600 text-sm border-t border-slate-100">{faq.a}</p>
                </details>
              ))}
            </div>
            <p className="text-center text-slate-600 text-sm mt-6">
              更多问题可查看 <Link href="/cellphone" className="text-blue-600 hover:text-blue-700 font-semibold">电话卡总览</Link> 或联系客服。
            </p>
          </section>

          {/* 底部入口 */}
          <section className="py-10 text-center">
            <Link href="/cellphone/diagnosis" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition">
              <Zap size={18} />
              不确定选哪类？1 分钟快速判断
            </Link>
          </section>

        </div>
      </main>

      <footer className="py-8 border-t text-center">
        <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em]">© {new Date().getFullYear()} BAY MEDIA STAR</p>
      </footer>
    </div>
  );
}

function OperatorCard({ op }: { op: (typeof OPERATOR_CARDS)[0] }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
      <h4 className="font-black text-slate-900">{op.name}</h4>
      <p className="text-sm text-slate-600 mt-1 mb-3">{op.tagline}</p>
      <ul className="space-y-1 text-sm text-slate-700 mb-2">
        {op.pros.map((p) => (
          <li key={p} className="flex items-center gap-1">
            <CheckCircle2 className="text-green-500 shrink-0" size={14} />
            {p}
          </li>
        ))}
      </ul>
      <ul className="space-y-1 text-sm text-slate-500 mb-4">
        {op.cons.map((c) => (
          <li key={c}>· {c}</li>
        ))}
      </ul>
      <Link href={op.href} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold text-sm">
        查看详情
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}

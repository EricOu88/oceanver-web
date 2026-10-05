'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  HelpCircle,
  House,
  Plane,
  Search,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react';

import BackToHomeButton from '@/app/components/BackToHomeButton';
import ContactEntry from '@/app/components/contact/ContactEntry';

const PROBLEM_CARDS = [
  {
    icon: CircleDollarSign,
    title: '手机账单越来越贵',
    desc: '先核对套餐、线路、设备分期和附加费用，判断到底是哪一部分涨了。',
    href: '/cellphone/diagnosis',
    linkText: '开始检查账单',
  },
  {
    icon: Smartphone,
    title: '想换一部新手机',
    desc: '不要只看“免费手机”。先比较新套餐月费、设备优惠和 24–36 个月总成本。',
    href: '/cellphone/providers',
    linkText: '判断换机是否划算',
  },
  {
    icon: Search,
    title: '想换运营商',
    desc: 'AT&T、T-Mobile、Verizon 或其他方案，先比较信号、月费和长期成本。',
    href: '/cellphone/providers',
    linkText: '开始比较',
  },
  {
    icon: Users,
    title: '家里有多条手机线',
    desc: '家庭计划不能只看单线价格，还要比较线路数量、设备优惠和家庭总账单。',
    href: '/cellphone/family-plan-guide',
    linkText: '查看家庭计划判断方法',
  },
  {
    icon: ShieldCheck,
    title: '没有 SSN / 刚到美国',
    desc: '可以先了解哪些手机方案不需要信用审核，以及开户时通常需要准备什么。',
    href: '/cellphone/faq/no-ssn-us-cellphone-internet',
    linkText: '查看无 SSN 指南',
  },
  {
    icon: Plane,
    title: 'Prepaid / 回国 / 国际使用',
    desc: '短期使用、预算优先、回国保号或国际使用，需要重点比较灵活性和实际使用条件。',
    href: '/cellphone/prepaid',
    linkText: '查看预付费方案',
  },
];

const DECISION_POINTS = [
  {
    title: '现在真实月费是多少？',
    desc: '不要只看套餐名称，要看账单最终实际支付金额。',
  },
  {
    title: '换过去以后真实月费是多少？',
    desc: '把线路费、设备、AutoPay、附加服务和可能变化的优惠一起计算。',
  },
  {
    title: '手机优惠需要保持多久？',
    desc: '很多设备优惠通过 24 或 36 个月账单抵扣发放。',
  },
  {
    title: '提前退出会损失什么？',
    desc: '换网、提前还机或关闭线路，都可能影响剩余优惠。',
  },
];

const FAQ_ITEMS = [
  {
    href: '/cellphone/faq/how-to-choose-us-cellphone-plan',
    title: '美国手机套餐到底应该怎么选？',
    desc: '先看自己的使用情况，再决定 Prepaid、Postpaid 或家庭方案。',
  },
  {
    href: '/cellphone/faq/prepaid-vs-postpaid',
    title: 'Prepaid 和 Postpaid 有什么区别？',
    desc: '比较信用要求、灵活性、设备优惠和长期费用。',
  },
  {
    href: '/cellphone/faq/no-ssn-us-cellphone-internet',
    title: '没有 SSN 可以办美国手机卡吗？',
    desc: '了解无 SSN、新移民和留学生常见办理方式。',
  },
  {
    href: '/cellphone/family-plan-guide',
    title: '家庭多条线怎么比较才真正省钱？',
    desc: '不要只比较单线价格，要看整个家庭的长期总成本。',
  },
  {
    href: '/cellphone/providers',
    title: '换运营商之前需要比较什么？',
    desc: '月费、信号、设备优惠、长期成本和退出条件一起看。',
  },
  {
    href: '/cellphone/faq',
    title: '更多美国手机常见问题',
    desc: '查看完整手机问题库。',
  },
];

export default function CellphoneClient() {
  return (
    <div className="min-h-screen bg-white text-[#202D3A] font-sans">
      <BackToHomeButton />

      {/* ===================== HERO ===================== */}
      <section className="pt-16 pb-14 bg-[#F4F8FA]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm md:text-base font-bold text-[#164B78] mb-4">
            美国手机套餐 · 中文判断入口
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-[#202D3A] mb-6 leading-tight">
            美国手机套餐有问题？
            <br className="hidden md:block" />
            先从你的情况开始
          </h1>

          <div className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed space-y-3 text-[#202D3A]/75">
            <p>
              账单涨价、想换手机、准备转网、家庭多线、没有 SSN，
              <strong className="text-[#202D3A]">
                不需要先懂运营商。
              </strong>
            </p>

            <p>
              先把你的实际问题弄清楚，再判断继续用、换套餐还是换运营商。
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/cellphone/diagnosis"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#164B78] hover:bg-[#103B60] text-white font-bold rounded-xl transition"
            >
              <Search size={18} />
              1 分钟手机方案检查
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-[#164B78]/25 hover:border-[#164B78] text-[#164B78] font-bold rounded-xl transition"
            >
              中文人工帮我判断
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== 问题入口 ===================== */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              你现在遇到的是哪一种问题？
            </h2>

            <p className="max-w-2xl mx-auto text-[#202D3A]/65">
              不先推荐运营商。先从真实问题进入，判断会更准确。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROBLEM_CARDS.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group bg-white border border-[#164B78]/15 rounded-2xl p-6 hover:border-[#164B78]/45 hover:shadow-md transition"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F4F8FA] flex items-center justify-center mb-4">
                    <Icon className="text-[#164B78]" size={22} />
                  </div>

                  <h3 className="text-xl font-black mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#202D3A]/65 mb-5">
                    {item.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-bold text-[#164B78]">
                    {item.linkText}
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== 核心原则 ===================== */}
      <section className="py-14 bg-[#F4F8FA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              换套餐之前，先算清楚 4 件事
            </h2>

            <p className="text-[#202D3A]/65">
              优惠只是其中一部分，真正要比较的是长期总成本。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {DECISION_POINTS.map((item, index) => (
              <div
                key={item.title}
                className="bg-white border border-[#164B78]/15 rounded-2xl p-6"
              >
                <p className="text-sm font-black text-[#164B78] mb-2">
                  0{index + 1}
                </p>

                <h3 className="text-xl font-black mb-2">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-[#202D3A]/65">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-8 bg-white border-2 border-[#164B78]/15 rounded-2xl p-7 text-center">
            <p className="text-2xl md:text-3xl font-black mb-2">
              手机免费，不等于套餐便宜。
            </p>

            <p className="text-[#202D3A]/65">
              如果为了设备优惠长期支付更高月费，
              三年下来可能反而花得更多。
            </p>
          </div>
        </div>
      </section>

      {/* ===================== 判断还是购买 ===================== */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-[#164B78]/15 rounded-2xl p-7">
              <Search className="text-[#164B78] mb-4" size={28} />

              <h2 className="text-2xl font-black mb-3">
                还不知道该不该换？
              </h2>

              <p className="text-[#202D3A]/65 leading-relaxed mb-5">
                先做手机方案判断。根据现在的套餐、月费、线路数量和换机需求，
                再决定下一步。
              </p>

              <Link
                href="/cellphone/diagnosis"
                className="inline-flex items-center gap-2 font-bold text-[#164B78]"
              >
                开始快速判断
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="border border-[#164B78]/15 rounded-2xl p-7">
              <House className="text-[#164B78] mb-4" size={28} />

              <h2 className="text-2xl font-black mb-3">
                已经准备比较方案？
              </h2>

              <p className="text-[#202D3A]/65 leading-relaxed mb-5">
                如果已经准备换运营商或换手机，再进一步比较月费、
                信号、设备优惠和长期成本。
              </p>

              <Link
                href="/cellphone/providers"
                className="inline-flex items-center gap-2 font-bold text-[#164B78]"
              >
                进入方案比较
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ / GEO 知识入口 ===================== */}
      <section className="py-14 bg-[#F4F8FA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <HelpCircle className="text-[#164B78]" size={24} />

            <h2 className="text-3xl md:text-4xl font-black">
              美国手机常见问题
            </h2>
          </div>

          <p className="text-center text-[#202D3A]/65 mb-9">
            这些也是办理前和使用过程中最容易遇到的问题。
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {FAQ_ITEMS.map((item) => (
              <Link
                key={item.href + item.title}
                href={item.href}
                className="group bg-white border border-[#164B78]/15 rounded-xl p-5 hover:border-[#164B78]/45 transition"
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-black mb-1 group-hover:text-[#164B78] transition">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#202D3A]/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-[#164B78] shrink-0 mt-1 group-hover:translate-x-1 transition"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 中文服务 / 人工入口 ===================== */}
      <section id="contact" className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black mb-3">
              不确定怎么办？把情况告诉我们
            </h2>

            <p className="max-w-2xl mx-auto text-[#202D3A]/65 leading-relaxed">
              告诉我们现在的运营商、线路数量、每月账单和你想解决的问题，
              可以帮你一起判断继续留、调整套餐还是换运营商。
            </p>
          </div>

          <div className="mb-8 max-w-2xl mx-auto">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[#164B78] shrink-0 mt-0.5"
                  size={19}
                />
                <span>面向全美中文用户</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[#164B78] shrink-0 mt-0.5"
                  size={19}
                />
                <span>湾区可到店，也可远程沟通</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[#164B78] shrink-0 mt-0.5"
                  size={19}
                />
                <span>先判断问题，再确认具体方案和资格</span>
              </li>
            </ul>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactEntry
              title="需要中文人员帮你判断手机方案？"
              subtitle="加微信最快｜也可电话或短信联系"
            />
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-[#164B78]/10 text-center">
        <p className="text-xs font-bold text-[#202D3A]/35">
          © {new Date().getFullYear()} 美国鸿达电讯
        </p>
      </footer>
    </div>
  );
}
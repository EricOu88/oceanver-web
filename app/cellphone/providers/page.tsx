import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  HelpCircle,
  Search,
  ShieldCheck,
} from 'lucide-react';

import { ProvidersShell } from './ProvidersShell';
import ProblemCards from './ProblemCards';
import { BottomCTAButton } from './BottomCTAButton';

export const metadata: Metadata = {
  title: '手机套餐要不要换？先算清楚再决定 | 美国鸿达电讯',
  description:
    '面向全美中文用户判断手机套餐是否值得更换。比较当前月费、家庭线路、换机优惠、36个月总成本、信号、资格与退出成本，再决定是否换运营商。',
  alternates: {
    canonical: 'https://oceanver.com/cellphone/providers',
  },
  openGraph: {
    title: '手机套餐要不要换？先算清楚再决定 | 美国鸿达电讯',
    description:
      '不要只看免费手机或促销价格。先比较当前账单、换网后的长期总成本、设备优惠和退出成本，再决定是否值得换。',
    url: 'https://oceanver.com/cellphone/providers',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

const COST_CHECKS = [
  {
    title: '现在每月实际花多少？',
    desc: '看真实账单，不只看套餐标价。把线路费、设备分期、附加服务和折扣一起算进去。',
  },
  {
    title: '换过去以后每月多少？',
    desc: '确认线路数量、AutoPay、税费、设备费用和优惠资格，不要只看广告中的最低价格。',
  },
  {
    title: '手机优惠要拿多久？',
    desc: '很多换机优惠通过 24 或 36 个月 bill credit 发放，提前离开可能拿不完。',
  },
  {
    title: '三年下来到底花多少？',
    desc: '把套餐增加的费用和手机优惠放在一起计算，才能判断换网以后到底有没有省钱。',
  },
];

const DONT_SWITCH = [
  '现在的套餐已经很便宜，而且信号和使用都没有明显问题。',
  '为了拿新手机，需要长期支付明显更高的套餐月费。',
  '现有手机还能正常使用，并没有真正的换机需求。',
  '需要持续 24–36 个月才能拿完设备优惠。',
  '家庭计划只有一条线想调整，其他号码不想一起变化。',
  '新运营商在家里、公司或通勤路线上的信号还没有确认。',
];

const FAQS = [
  {
    q: '换运营商一定会更便宜吗？',
    a: '不一定。需要比较当前真实月费、新方案月费、设备费用、优惠期限以及提前退出成本。有时手机优惠很高，但三年套餐总支出反而更贵。',
  },
  {
    q: '为什么不能只看“免费手机”？',
    a: '因为很多免费或低价手机依赖长期账单抵扣。如果为了手机优惠把每月套餐提高很多，增加的月费可能超过手机本身省下的钱。',
  },
  {
    q: '家庭计划是不是线路越多越划算？',
    a: '不一定。虽然多线以后单线价格可能下降，但还要看每条线的数据需求、设备优惠、附加服务和家庭总账单。',
  },
  {
    q: '没有 SSN 可以办美国手机套餐吗？',
    a: '很多 Prepaid 或不需要信用审核的方案可以办理。具体要结合运营商、付款方式和开户资格判断。',
  },
  {
    q: '信号应该怎么比较？',
    a: '不能只看运营商品牌。最好结合家里、公司、通勤路线以及经常活动的地点判断实际覆盖。',
  },
  {
    q: '什么时候继续保留原套餐更合适？',
    a: '如果目前月费合理、信号稳定、没有迫切换机需求，而且新方案长期总成本没有明显优势，继续使用原套餐往往更合理。',
  },
];

export default function CellphoneProvidersPage() {
  return (
    <ProvidersShell>
      <main>
        {/* HERO */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm md:text-base font-bold text-blue-700 mb-4">
              手机套餐判断 · 换网前先算清楚
            </p>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              手机套餐要不要换？
              <br className="hidden md:block" />
              先算清楚，再决定换哪家
            </h1>

            <div className="max-w-3xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed space-y-3">
              <p>
                已经有套餐、账单变贵、想换手机、准备转网，
                <strong className="text-slate-900">
                  不要先从“哪家优惠最大”开始。
                </strong>
              </p>

              <p>
                先比较现在每月花多少、新方案长期要花多少、
                手机优惠条件和退出成本，再判断是否真的值得换。
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/cellphone/diagnosis"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3.5 rounded-xl font-black transition"
              >
                <Search size={18} />
                开始手机方案检查
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white hover:border-blue-400 hover:text-blue-700 text-slate-700 px-7 py-3.5 rounded-xl font-black transition"
              >
                <Calculator size={18} />
                让中文人员帮我算
              </Link>
            </div>
          </div>
        </section>

        {/* 用户问题入口 */}
        <section className="py-10 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                先从你现在的问题开始
              </h2>

              <p className="text-slate-600 max-w-2xl mx-auto">
                不需要先懂运营商，也不需要先懂套餐名称。
                先告诉我们你遇到什么问题。
              </p>
            </div>

            <ProblemCards />
          </div>
        </section>

        {/* 四个数字 */}
        <section className="py-14 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-9">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                换运营商之前，先看这 4 个数字
              </h2>

              <p className="text-slate-600">
                真正决定是否划算的，不只是手机优惠，而是长期总成本。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {COST_CHECKS.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-2xl p-6"
                >
                  <div className="text-sm font-black text-blue-700 mb-2">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-8 p-6 border-2 border-blue-100 rounded-2xl bg-blue-50/40 text-center">
              <p className="text-2xl font-black text-slate-900">
                手机免费，不等于套餐便宜。
              </p>

              <p className="text-slate-600 mt-2">
                如果为了拿手机而长期支付更高月费，
                三年下来可能反而花得更多。
              </p>
            </div>
          </div>
        </section>

        {/* 不建议换 */}
        <section className="py-14 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                有这些情况，先不要急着换
              </h2>

              <p className="text-slate-600">
                换运营商不是目的。真正目标是降低长期成本，同时保持适合自己的服务。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {DONT_SWITCH.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-5"
                >
                  <CheckCircle2
                    size={19}
                    className="text-blue-700 shrink-0 mt-0.5"
                  />

                  <p className="text-slate-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 判断原则 */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-2xl p-7">
                <ShieldCheck
                  size={28}
                  className="text-blue-700 mb-4"
                />

                <h2 className="text-2xl font-black text-slate-900 mb-3">
                  先判断，再选运营商
                </h2>

                <p className="text-slate-600 leading-relaxed mb-5">
                  AT&T、T-Mobile、Verizon、Prepaid 或其他方案都只是选择。
                  真正应该先确认的是预算、线路数量、信号、设备需求和长期使用计划。
                </p>

                <Link
                  href="/cellphone/diagnosis"
                  className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-800"
                >
                  开始 1 分钟判断
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="border border-slate-200 rounded-2xl p-7">
                <HelpCircle
                  size={28}
                  className="text-blue-700 mb-4"
                />

                <h2 className="text-2xl font-black text-slate-900 mb-3">
                  不确定条件？先看问题库
                </h2>

                <p className="text-slate-600 leading-relaxed mb-5">
                  无 SSN、Prepaid、家庭计划、换网、账单、国际使用等常见问题，
                  可以先查看中文说明，再决定下一步。
                </p>

                <Link
                  href="/cellphone/faq"
                  className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-800"
                >
                  查看手机常见问题
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">
              换手机套餐常见问题
            </h2>

            <div className="space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 font-bold text-slate-900 flex justify-between gap-4">
                    {faq.q}
                    <span className="text-slate-400 group-open:rotate-45 transition">
                      +
                    </span>
                  </summary>

                  <div className="px-5 pb-5">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 人工 CTA */}
        <section className="py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              不想自己算？直接让我们帮你核对
            </h2>

            <p className="text-slate-600 leading-relaxed mb-7 max-w-2xl mx-auto">
              告诉我们你现在的运营商、线路数量、月费和换机需求，
              可以一起判断继续留、换套餐还是换运营商更合适。
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-black transition"
            >
              中文咨询
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* 原有底部 CTA */}
        <section className="pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <BottomCTAButton />
          </div>
        </section>
        <p className="mx-auto mb-8 max-w-6xl px-4 text-center text-xs text-[#526170]">最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与官方规则为准。</p>
      </main>

      <footer className="py-10 border-t border-slate-100 text-center">
        <p className="text-xs font-bold text-slate-400">
          © {new Date().getFullYear()} 美国鸿达电讯
        </p>
      </footer>
    </ProvidersShell>
  );
}

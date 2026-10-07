import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  HelpCircle,
  Layers3,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '美国手机方案怎么选？先判断需求，再比较方案 | 美国鸿达电讯',
  description:
    '美国手机方案选择方法：先判断使用时间、线路数量、设备状态、信号、国际使用和账户条件，再决定是否比较 Prepaid、Postpaid、家庭多线或其他方案。',
  alternates: {
    canonical: 'https://oceanver.com/cellphone/faq/how-to-choose-us-cellphone-plan',
  },
  openGraph: {
    title: '美国手机方案怎么选？先判断需求，再比较方案',
    description:
      '不要先从运营商和促销开始。先判断自己的使用条件，再进入方案比较。',
    type: 'article',
  },
};

const CHECKS = [
  {
    icon: Smartphone,
    title: '你现在遇到的是“问题”，还是“选择”？',
    text: '如果是账单、信号、eSIM、转号或设备分期异常，先解决问题；如果当前使用正常，只是准备换方案，再进入比较。',
  },
  {
    icon: Users,
    title: '是一条线，还是家庭多线？',
    text: '多线账户要逐条看设备余额、Bill Credit、转网条件和不同成员的需求，不应只按“每线价格”判断。',
  },
  {
    icon: CircleDollarSign,
    title: '真实支出是什么？',
    text: '看当前账单、设备分期、附加服务、折扣和税费，不要只记住套餐广告价。',
  },
  {
    icon: ShieldCheck,
    title: '哪些条件必须核实？',
    text: '当前资格、信用要求、设备兼容、解锁、Promotion、Trade-in 和真实价格都可能随账户与运营商规则变化。',
  },
];

const TYPES = [
  {
    title: 'Prepaid（预付费）',
    text: '通常更强调预先付费和灵活性，但具体身份要求、功能、价格和国际使用能力要看当前运营商与套餐。',
  },
  {
    title: 'Postpaid（后付费）',
    text: '通常以月度账单和账户关系为核心，可能涉及信用、设备分期、Bill Credit 或多线结构；不能简单理解成“信号一定更好”或“必须有 SSN”。',
  },
  {
    title: '家庭多线',
    text: '重点不是“线越多越便宜”，而是每条线是否适合同步变更，以及设备和 Credit 会不会被影响。',
  },
];

export default function HowToChooseCellphonePlanPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] text-[#202D3A]">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="mb-8">
          <Link
            href="/cellphone/faq"
            className="text-sm font-bold text-[#526170] transition hover:text-[#164B78]"
          >
            ← 返回手机问题库
          </Link>
        </div>

        <header className="mb-12">
          <p className="mb-3 text-sm font-bold text-[#246B95]">手机方案选择方法</p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            美国手机方案怎么选？
            <br className="hidden md:block" />
            先判断需求，再比较方案
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#526170]">
            不要先从“AT&T、T-Mobile、Verizon 哪家最好”开始。先看你现在的问题、
            使用时间、线路数量、设备状态、信号和国际使用，再决定是否需要比较不同方案。
          </p>
        </header>

        <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7 md:p-8">
          <h2 className="text-2xl font-black">先回答这 4 个问题</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {CHECKS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-xl border border-[#D5E5EC] bg-white p-5">
                  <Icon className="mb-3 text-[#2786A5]" size={24} />
                  <h3 className="font-black">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#526170]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">Prepaid、Postpaid、家庭多线，应该怎么理解？</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-[#526170]">
            这些只是不同的账户和付费结构，不是“好 / 坏”的排名。最重要的是看它是否符合你的实际条件。
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {TYPES.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-[#526170]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#D5E5EC] bg-white p-7 md:p-8">
          <div className="flex gap-3">
            <HelpCircle className="mt-1 shrink-0 text-[#2786A5]" size={26} />
            <div>
              <h2 className="text-2xl font-black">什么时候不要继续看“套餐对比”？</h2>
              <div className="mt-4 space-y-3 text-[#526170]">
                {[
                  '你真正的问题是账单异常、信号、eSIM、转号或设备分期。',
                  '你还不知道家庭成员哪些号码适合一起变更。',
                  '设备余额、Bill Credit 或解锁状态还没有确认。',
                  '你只是看到某个手机促销，但当前套餐本身并没有问题。',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#246B95]" size={18} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">下一步去哪？</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Link
              href="/cellphone/diagnosis"
              className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 transition hover:border-[#246B95]"
            >
              <Layers3 className="mb-4 text-[#2786A5]" size={26} />
              <h3 className="text-xl font-black">还没判断清楚</h3>
              <p className="mt-2 leading-relaxed text-[#526170]">
                从账单、信号、设备、转号等现象开始判断。
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
                进入手机问题诊断 <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/cellphone/family-plan-guide"
              className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 transition hover:border-[#246B95]"
            >
              <Users className="mb-4 text-[#2786A5]" size={26} />
              <h3 className="text-xl font-black">家庭多线</h3>
              <p className="mt-2 leading-relaxed text-[#526170]">
                逐条线路判断哪些适合一起变更、哪些应该暂缓。
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
                进入家庭多线指南 <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/cellphone/providers"
              className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 transition hover:border-[#246B95]"
            >
              <CircleDollarSign className="mb-4 text-[#2786A5]" size={26} />
              <h3 className="text-xl font-black">已经确定要比较</h3>
              <p className="mt-2 leading-relaxed text-[#526170]">
                再比较真实账单、设备成本、信号和转网代价。
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
                进入方案比较 <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </section>

        <p className="text-center text-xs text-[#526170]">
          最后更新：2026年10月｜套餐、资格、设备优惠及账户结果可能随运营商政策变化，请以当前账户与实际活动规则为准。
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: '美国手机方案怎么选？先判断需求，再比较方案',
              description:
                '先判断使用条件、线路数量、设备状态、信号和账户条件，再决定是否比较 Prepaid、Postpaid、家庭多线或其他方案。',
              mainEntityOfPage:
                'https://oceanver.com/cellphone/faq/how-to-choose-us-cellphone-plan',
              inLanguage: 'zh-CN',
              dateModified: '2026-10-06',
              author: {
                '@type': 'Organization',
                name: '美国鸿达电讯',
              },
            }),
          }}
        />
      </div>
    </main>
  );
}

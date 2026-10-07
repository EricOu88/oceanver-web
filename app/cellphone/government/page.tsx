import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleHelp, ShieldCheck } from 'lucide-react';

const pageUrl = 'https://oceanver.com/cellphone/government';

export const metadata: Metadata = {
  title: 'Lifeline 政府手机补助怎么判断？资格与核实边界｜美国鸿达电讯',
  description:
    '说明 Lifeline 政府通信补助应先确认哪些资格、资料和当前州规则。是否符合、可获得什么福利及设备，需以当前官方项目和服务商规则为准。',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Lifeline 政府手机补助怎么判断？｜美国鸿达电讯',
    description:
      '先理解资格与核实边界，再决定是否申请。福利、设备和资格以当前官方项目规则为准。',
    url: pageUrl,
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

const checks = [
  '你所在州当前是否有可用的 Lifeline 服务商与计划。',
  '你是否通过收入或符合条件的政府项目满足当前资格规则。',
  '申请时需要哪些身份证明、住址或项目证明。',
  '家庭或住址是否已存在相关 Lifeline 福利，是否受“一户一项”等当前规则影响。',
  '当前计划实际提供的是服务、设备、流量或其他福利中的哪些内容。',
  '资格复核、续期、失去资格后的处理方式。',
];

const notAssume = [
  '持有某一种福利卡就一定能通过。',
  '一定可以获得免费智能手机。',
  '一定是每月 $0，或所有费用都为零。',
  '所有州、服务商和申请渠道要求都一样。',
  '固定材料、固定审核时间或固定年审方式长期不变。',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: 'Lifeline 政府手机补助怎么判断？',
  description: 'Lifeline 政府通信补助资格与核实边界说明。',
  inLanguage: 'zh-CN',
};

export default function GovernmentPhonePage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-5xl">
        <Link href="/cellphone" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回手机问题
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            Government / Lifeline 资格判断
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            Lifeline 政府手机补助怎么判断？先确认资格，再看能拿到什么
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526170] sm:text-lg">
            这不是“免费手机保证页”。Lifeline 的资格、服务商、设备和福利内容可能随州、项目和时间变化。
            网站只负责告诉你该核对什么，最终结果以当前官方项目和服务商规则为准。
          </p>
        </header>

        <section className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <ShieldCheck className="text-[#246B95]" size={30} />
          <h2 className="mt-4 text-2xl font-black sm:text-3xl">申请前先核对 6 件事</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {checks.map((item, index) => (
              <div key={item} className="rounded-2xl bg-[#F4F8FA] p-5">
                <p className="text-sm font-bold text-[#2786A5]">0{index + 1}</p>
                <p className="mt-2 leading-7 text-[#526170]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-12 md:grid-cols-2">
          <article className="rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-7">
            <CircleHelp className="text-[#246B95]" size={28} />
            <h2 className="mt-4 text-2xl font-black">不要把这些说法当成固定规则</h2>
            <ul className="mt-5 space-y-3">
              {notAssume.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-[#526170]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2786A5]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-7">
            <CheckCircle2 className="text-[#246B95]" size={28} />
            <h2 className="mt-4 text-2xl font-black">什么时候值得继续核实</h2>
            <ul className="mt-5 space-y-3 text-[#526170]">
              <li>你已经知道自己所在州和当前住址。</li>
              <li>你能说明自己是按收入还是某项政府项目判断资格。</li>
              <li>你愿意按当前项目规则提供必要资料。</li>
              <li>你理解“资格通过”不等于固定设备、固定费用或固定福利内容。</li>
            </ul>
          </article>
        </section>

        <section className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">网页能解释规则，但不能替你确认当前资格</h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#526170]">
            资格状态、所在州可用服务商、当前计划内容、设备是否提供、需要哪些证明以及复核要求，都需要按当前项目与申请渠道核实。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white hover:bg-[#103B60]">
              需要时进入人工核实
              <ArrowRight size={18} />
            </Link>
            <Link href="/cellphone/prepaid" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3.5 font-bold text-[#246B95] hover:border-[#246B95]">
              不符合补助？看看 Prepaid 判断
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <p className="py-8 text-center text-xs leading-6 text-[#526170]">
          最后更新：2026年10月｜Lifeline 资格、服务商、设备与福利内容可能随州、项目和官方规则变化，请以当前官方项目要求为准。
        </p>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleHelp, Search, ShieldCheck } from 'lucide-react';

const pageUrl = 'https://oceanver.com/cellphone/providers';

export const metadata: Metadata = {
  title: '手机方案怎么比较？先看长期条件再决定｜美国鸿达电讯',
  description:
    '已经确定要比较手机方案时，先比较真实账单、线路需求、设备分期、Bill Credit、信号、转网条件和退出成本。具体价格与资格需按当前账户核实。',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '手机方案怎么比较？先看长期条件再决定｜美国鸿达电讯',
    description:
      '不要只看运营商品牌或单个优惠。先把真实账单、线路、设备、信号与退出条件放在一起比较，再决定是否值得变更。',
    url: pageUrl,
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

const compareItems = [
  {
    title: '当前真实账单',
    desc: '先看现在实际支付什么：线路、设备分期、附加项目、税费与仍在生效的账单抵扣。',
  },
  {
    title: '每条线路的需求',
    desc: '家庭多线不要只看总价。分别确认谁需要换机、谁只想降月费、谁有国际使用或长期保号需求。',
  },
  {
    title: '设备分期与 Bill Credit',
    desc: '确认每条线路是否仍有设备余额、Promotion 或 Bill Credit，以及变更后可能受到什么影响。',
  },
  {
    title: '信号与实际使用地点',
    desc: '运营商品牌不能代替实际体验。家里、公司、通勤路线和常去地点的表现都需要单独判断。',
  },
  {
    title: '转网与设备条件',
    desc: '确认号码状态、Account Number、Transfer PIN、IMEI 兼容性和解锁状态，不要在号码转移完成前主动取消旧线路。',
  },
  {
    title: '退出与后续成本',
    desc: '比较的不只是开始时的优惠，还要看未来如果换设备、减线、转网或结束服务时会发生什么。',
  },
];

const notReady = [
  '还不知道自己真正的问题是账单、信号、设备还是转网。',
  '只看到某个广告优惠，还没有核对真实账户条件。',
  '家庭多线中仍有人有设备余额或持续中的 Bill Credit。',
  '新方案在主要使用地点的实际信号还没有确认。',
  '号码转移资料、IMEI 或解锁状态还没有准备好。',
  '只是想拿新手机，但还没有比较长期总支出与退出影响。',
];

const readyToCompare = [
  '已经确认当前问题不是单纯账单错误或设备故障。',
  '已经知道哪些线路要动、哪些线路应该保持不变。',
  '已经核对现有设备分期与 Bill Credit 状态。',
  '已经确认主要使用地点的信号需求。',
  '已经准备好把多个方案放在同一条件下比较。',
];

const boundaries = [
  '当前账户的真实多线价格',
  '具体 plan tier 与适用条件',
  'Promotion / Trade-in / Upgrade eligibility',
  '设备余额与每月 Bill Credit 状态',
  'IMEI、eSIM 与解锁状态',
  '转网后台状态与当前活动资格',
];

const faqs = [
  {
    question: '换运营商一定会更便宜吗？',
    answer:
      '不一定。真正要比较的是当前真实账单、新方案的长期成本、设备分期、账单抵扣、线路数量和退出条件，而不是只看广告中的一个价格。',
  },
  {
    question: '为什么不能只看“免费手机”或 Trade-in？',
    answer:
      '因为设备优惠通常附带资格与持续条件。是否真的省钱，要和套餐成本、设备余额、Bill Credit 和未来退出影响一起看。',
  },
  {
    question: '家庭计划是不是线路越多越适合一起换？',
    answer:
      '不一定。家庭多线应逐条判断。有人可能适合现在变更，也有人因为设备余额、账单抵扣或使用需求更适合暂时保持原状。',
  },
  {
    question: '没有 SSN 时应该在这里比较吗？',
    answer:
      '如果核心问题是开户资格，先进入手机问题诊断或相关知识页。Providers 页面只负责“已经确定要比较方案以后，应该比较哪些条件”。',
  },
  {
    question: '信号应该怎么比较？',
    answer:
      '应结合家里、公司、通勤路线和常去地点判断实际体验。运营商品牌、账户类型或一次测速都不能单独代表长期使用结果。',
  },
  {
    question: '什么时候应该继续保留原方案？',
    answer:
      '如果当前费用、信号和设备状态都能满足需求，而新方案没有明确的长期优势，继续保留原方案也是合理结果。',
  },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: '手机方案怎么比较？先看长期条件再决定',
  description:
    '已经确定要比较手机方案时，用真实账单、线路需求、设备分期、Bill Credit、信号和转网条件做同条件比较。',
  inLanguage: 'zh-CN',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function CellphoneProvidersPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mx-auto max-w-5xl">
        <Link href="/cellphone" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回手机问题
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            手机方案比较
          </p>

          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            已经确定要比较手机方案？先把条件放在同一张表里
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526170] sm:text-lg">
            这里不负责告诉你“哪家最好”，也不做精确价格计算。它只解决一个问题：
            <strong className="text-[#202D3A]"> 当你已经决定比较方案时，应该比较哪些条件，才不会只被单个优惠带着走。</strong>
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cellphone/diagnosis"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white transition hover:bg-[#103B60]"
            >
              <Search size={18} />
              还没确定？先做手机问题判断
            </Link>

            <Link
              href="/cellphone/family-plan-guide"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3.5 font-bold text-[#246B95] transition hover:border-[#246B95]"
            >
              家庭多线先逐条判断
              <ArrowRight size={18} />
            </Link>
          </div>
        </header>

        <section className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <div className="mb-7">
            <h2 className="text-2xl font-black sm:text-3xl">真正值得放在一起比较的 6 个条件</h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#526170]">
              这些条件比“某家现在送什么”更稳定，也更适合长期判断。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {compareItems.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-[#D5E5EC] bg-[#FCFDFE] p-5">
                <p className="text-sm font-bold text-[#2786A5]">0{index + 1}</p>
                <h3 className="mt-1 text-lg font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-[#526170]">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-12 md:grid-cols-2">
          <article className="rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-7">
            <CircleHelp className="mb-4 text-[#246B95]" size={28} />
            <h2 className="text-2xl font-black">这些情况还不适合直接比较运营商</h2>
            <ul className="mt-5 space-y-3">
              {notReady.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-[#526170]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2786A5]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-7">
            <CheckCircle2 className="mb-4 text-[#246B95]" size={28} />
            <h2 className="text-2xl font-black">这些条件基本清楚后，再进入方案比较</h2>
            <ul className="mt-5 space-y-3">
              {readyToCompare.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-[#526170]">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#2786A5]" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <ShieldCheck className="mb-4 text-[#246B95]" size={30} />
          <h2 className="text-2xl font-black sm:text-3xl">网页能判断方向，但不能给出你的准确数字</h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#526170]">
            手机方案变量很多。以下内容必须结合当前账户、设备与活动后台确认，不能用网站上的固定数字代替。
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {boundaries.map((item) => (
              <div key={item} className="rounded-xl bg-[#F4F8FA] px-4 py-3 font-semibold text-[#202D3A]">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white transition hover:bg-[#103B60]"
            >
              需要准确数字时进入人工核实
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-black sm:text-3xl">方案比较常见问题</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-2xl border border-[#D5E5EC] bg-white">
                <summary className="cursor-pointer list-none px-5 py-4 font-bold">
                  {item.question}
                </summary>
                <p className="px-5 pb-5 leading-7 text-[#526170]">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black">下一步怎么走</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href="/cellphone/diagnosis" className="rounded-2xl bg-white p-5 font-bold text-[#246B95]">
              还没判断清楚 → 手机问题诊断
            </Link>
            <Link href="/cellphone/family-plan-guide" className="rounded-2xl bg-white p-5 font-bold text-[#246B95]">
              家庭多线 → 家庭计划判断
            </Link>
            <Link href="/cellphone/faq" className="rounded-2xl bg-white p-5 font-bold text-[#246B95]">
              先查知识 → 手机常见问题
            </Link>
          </div>
        </section>

        <p className="py-8 text-center text-xs leading-6 text-[#526170]">
          最后更新：2026年10月｜套餐、资格、设备优惠及账户结果可能随运营商政策变化，请以当前账户与实际活动规则为准。
        </p>
      </div>
    </main>
  );
}

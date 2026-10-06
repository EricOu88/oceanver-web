import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, CircleHelp, Search } from 'lucide-react';

const pageUrl = 'https://oceanver.com/cellphone/faq';

export const metadata: Metadata = {
  title: '美国手机常见问题｜账单、信号、转网、eSIM、家庭计划｜美国鸿达电讯',
  description:
    '按账单、信号、SIM/eSIM、转号、设备分期与 Trade-in、家庭多线、国际使用和不确定问题整理美国手机常见问题。需要实际账户条件时再进入人工核实。',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '美国手机常见问题｜美国鸿达电讯',
    description:
      '先理解常见问题，再决定是否需要诊断、比较方案或核实实际账户条件。',
    url: pageUrl,
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

const categories = [
  {
    title: '账单为什么变贵？',
    description: '先区分套餐月费、设备分期、Bill Credit、附加项目和一次性费用，不要把所有涨价都理解成套餐涨价。',
    next: '/bill-optimization',
    nextLabel: '查看账单检查',
  },
  {
    title: '信号差、网速慢怎么办？',
    description: '先比较地点、设备、网络模式和是否多台手机同时异常；一次测速或运营商品牌不能单独说明原因。',
    next: '/cellphone/diagnosis',
    nextLabel: '进入手机问题诊断',
  },
  {
    title: 'SIM / eSIM 出问题怎么办？',
    description: '换机、删除 eSIM、激活异常或设备不兼容时，先确认线路状态、设备支持和当前账户配置。',
    next: '/cellphone/diagnosis',
    nextLabel: '进入手机问题诊断',
  },
  {
    title: '转号、Port、解锁要先查什么？',
    description: '转网前要确认号码仍有效、Account Number、Transfer PIN、设备解锁和 IMEI 兼容；号码完全转移前不要主动取消旧线路。',
    next: '/cellphone/diagnosis',
    nextLabel: '进入手机问题诊断',
  },
  {
    title: '设备分期、Trade-in、Bill Credit 怎么判断？',
    description: '设备余额、促销资格和月度账单抵扣会影响是否适合现在变更。网站可以解释判断逻辑，但不能替代真实账户状态。',
    next: '/cellphone/diagnosis',
    nextLabel: '进入手机问题诊断',
  },
  {
    title: '家庭多线要不要一起换？',
    description: '家庭计划不应只看单线价格。要逐条确认谁需要换机、谁仍有设备余额或 Credit、谁暂时不适合转号。',
    next: '/cellphone/family-plan-guide',
    nextLabel: '查看家庭多线判断',
  },
  {
    title: '回国、国际使用、长期保号怎么考虑？',
    description: '先明确是短期旅行、长期保号、收验证码、Wi-Fi Calling 还是日常国际使用，再判断哪种账户形式更合适。',
    next: '/cellphone/prepaid',
    nextLabel: '查看 Prepaid 使用场景',
  },
  {
    title: '我连问题属于哪一类都不确定',
    description: '不用先懂套餐或运营商。先从现象开始，把问题缩小到账单、设备、号码、信号或账户条件。',
    next: '/cellphone/diagnosis',
    nextLabel: '从现象开始判断',
  },
];

const quickAnswers = [
  {
    question: '换运营商一定能省钱吗？',
    answer:
      '不一定。要把当前真实账单、新方案的长期成本、设备分期、Bill Credit、信号和退出条件放在一起比较。',
  },
  {
    question: '没有 SSN 就只能用 Prepaid 吗？',
    answer:
      '不能这样一概而论。可选方案取决于运营商、账户资格、身份与办理条件。无 SSN 更适合进入资格知识页或人工核实，而不是用一句固定规则判断。',
  },
  {
    question: 'Postpaid 一定比 Prepaid 信号好吗？',
    answer:
      '不能只凭付款形式判断。实际体验还取决于具体套餐层级、网络管理、设备和使用地点。',
  },
  {
    question: '家庭线路越多就一定越便宜吗？',
    answer:
      '不一定。即使单线价格下降，也要看全家总账单、设备分期、附加项目和每条线真实需求。',
  },
  {
    question: 'Business 账户一定比个人账户更快吗？',
    answer:
      '不能。Business / Consumer 标签本身不能单独决定体验；需要结合具体 plan tier、设备、地点和当前网络环境判断。',
  },
  {
    question: '网页什么时候不能继续判断？',
    answer:
      '涉及当前账户价格、Promotion / Trade-in / Upgrade 资格、设备余额、Bill Credit、IMEI、eSIM、解锁、Port 状态或后台资格时，需要结合真实账户核实。',
  },
];

const guides = [
  {
    title: 'Prepaid 和 Postpaid 有什么区别？',
    href: '/cellphone/faq/prepaid-vs-postpaid',
    description: '只解释付款与账户形式的差异，不把它当成运营商排名。',
  },
  {
    title: '手机套餐类型怎么理解？',
    href: '/cellphone/faq/how-to-choose-us-cellphone-plan',
    description: '帮助理解 Prepaid、Postpaid 和家庭多线的基本差异。',
  },
  {
    title: '没有 SSN 时哪些资格要确认？',
    href: '/cellphone/faq/no-ssn-us-cellphone-internet',
    description: '把身份与资格问题单独理解，不和价格、信号或家庭多线混在一起。',
  },
  {
    title: 'Business 和 Consumer 为什么体验可能不同？',
    href: '/cellphone/att/business-faq',
    description: '用于账户类型和套餐层级的判断，不做“Business 一定更好”的结论。',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: quickAnswers.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function CellphoneFAQPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mx-auto max-w-5xl">
        <Link href="/cellphone" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回手机问题
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            手机问题知识库
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            美国手机常见问题：先理解，再决定下一步
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526170] sm:text-lg">
            这里不是套餐销售页，也不是运营商排名。先按问题类型理解常见原因和判断边界；
            如果还不知道问题属于哪一类，再进入手机问题诊断。
          </p>

          <div className="mt-7">
            <Link
              href="/cellphone/diagnosis"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white transition hover:bg-[#103B60]"
            >
              <Search size={18} />
              不确定问题？先做手机问题诊断
            </Link>
          </div>
        </header>

        <section>
          <div className="mb-7">
            <h2 className="text-2xl font-black sm:text-3xl">按你现在遇到的问题找答案</h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#526170]">
              八类问题对应的是八种判断方向，不代表一定需要换套餐或换运营商。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {categories.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#D5E5EC] bg-white p-5">
                <CircleHelp className="text-[#2786A5]" size={24} />
                <h3 className="mt-3 text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-[#526170]">{item.description}</p>
                <Link
                  href={item.next}
                  className="mt-4 inline-flex items-center gap-2 font-bold text-[#246B95] hover:text-[#103B60]"
                >
                  {item.nextLabel}
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-black sm:text-3xl">先把几个容易误判的问题说清楚</h2>
          <div className="mt-6 space-y-3">
            {quickAnswers.map((item) => (
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
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#164B78] text-white">
              <BookOpen size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-black">需要理解某个具体概念？</h2>
              <p className="mt-2 leading-7 text-[#526170]">
                下面这些页面只负责解释各自的知识主题，不重复承担手机问题诊断。
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {guides.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl bg-white p-5 transition hover:ring-1 hover:ring-[#246B95]"
              >
                <h3 className="font-black text-[#202D3A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#526170]">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">什么时候需要人工核实？</h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#526170]">
            当问题涉及真实账户价格、当前 Promotion / Trade-in / Upgrade 资格、设备余额、Bill Credit、
            IMEI、eSIM、解锁、Port 状态或运营商后台资格时，网页不能替代账户核实。
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white transition hover:bg-[#103B60]"
            >
              需要时进入人工核实
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/cellphone/providers"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3.5 font-bold text-[#246B95] transition hover:border-[#246B95]"
            >
              已确定要比较方案
              <ArrowRight size={18} />
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

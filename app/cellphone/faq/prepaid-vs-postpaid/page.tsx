import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prepaid vs Postpaid：美国预付费和后付费怎么选 | 美国鸿达电讯',
  description:
    '比较 Prepaid 与 Postpaid 时，不只看是否需要 SSN 或月费。应同时看账户资格、设备分期、Bill Credit、家庭多线、国际使用和退出条件。',
  alternates: {
    canonical: 'https://oceanver.com/cellphone/faq/prepaid-vs-postpaid',
  },
  openGraph: {
    title: 'Prepaid vs Postpaid：美国预付费和后付费怎么选',
    description:
      '从账户结构、设备、家庭多线、国际使用和变更成本理解 Prepaid 与 Postpaid 的区别。',
    type: 'article',
  },
};

const ROWS = [
  {
    label: '付费方式',
    prepaid: '通常先付费再使用，账单结构往往更直接。',
    postpaid: '通常按账单周期结算，账户结构可能更复杂。',
  },
  {
    label: '开户与资格',
    prepaid: '很多方案不依赖传统信用审核，但具体身份、付款和激活要求仍要看当前规则。',
    postpaid: '可能涉及信用、身份或账户资格审核；是否需要 SSN、押金或其他材料不能一概而论。',
  },
  {
    label: '设备与优惠',
    prepaid: '通常更适合自带设备或不希望被长期设备 Credit 绑定的人。',
    postpaid: '更常见设备分期、Trade-in、Bill Credit 等结构，换方案前需要核对剩余条件。',
  },
  {
    label: '家庭多线',
    prepaid: '是否有多线优惠、共享结构或管理功能取决于具体方案。',
    postpaid: '多线结构通常更常见，但“每线更便宜”不等于家庭总成本一定更低。',
  },
  {
    label: '退出与变更',
    prepaid: '一般更灵活，但号码转移、余额和账户状态仍需处理。',
    postpaid: '退出时要特别检查设备余额、Bill Credit、解锁和号码转移条件。',
  },
];

const QUESTIONS = [
  '你更看重灵活性，还是设备/多线功能？',
  '现在有没有设备分期、Trade-in 或 Bill Credit？',
  '是一条线，还是多人家庭账户？',
  '常用地点的信号和热点需求是什么？',
  '是否经常在中国或其他国家使用？',
  '如果今天变更，旧账户会失去什么？',
];

export default function PrepaidVsPostpaidPage() {
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
          <p className="mb-3 text-sm font-bold text-[#246B95]">手机账户类型</p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            Prepaid vs Postpaid：
            <br className="hidden md:block" />
            不要只用“有没有 SSN”来判断
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#526170]">
            预付费和后付费的核心差别是账户、付费和设备结构不同。真正选择时，还要看家庭线路、
            设备余额、Bill Credit、国际使用和退出条件。
          </p>
        </header>

        <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7 md:p-8">
          <div className="flex gap-3">
            <ShieldCheck className="mt-1 shrink-0 text-[#2786A5]" size={28} />
            <div>
              <h2 className="text-2xl font-black">先纠正一个常见误区</h2>
              <p className="mt-3 leading-relaxed text-[#526170]">
                不能简单写成“Prepaid 一定不需要 SSN、Postpaid 一定需要 SSN”，也不能写成
                “Postpaid 信号一定更好”。具体开户资格、网络优先级、功能和价格取决于运营商、
                套餐、账户和当时规则。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">真正应该比较什么？</h2>
          <div className="mt-7 overflow-hidden rounded-2xl border border-[#D5E5EC] bg-white">
            <div className="grid grid-cols-[0.8fr_1.1fr_1.1fr] border-b border-[#D5E5EC] bg-[#F4F8FA] text-sm font-black md:text-base">
              <div className="p-4">比较项目</div>
              <div className="p-4">Prepaid</div>
              <div className="p-4">Postpaid</div>
            </div>
            {ROWS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[0.8fr_1.1fr_1.1fr] border-b border-[#D5E5EC] last:border-b-0"
              >
                <div className="p-4 font-black">{row.label}</div>
                <div className="p-4 leading-relaxed text-[#526170]">{row.prepaid}</div>
                <div className="p-4 leading-relaxed text-[#526170]">{row.postpaid}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#D5E5EC] bg-white p-7 md:p-8">
          <h2 className="text-2xl font-black">决定之前先回答这 6 个问题</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {QUESTIONS.map((item) => (
              <div key={item} className="flex gap-3 rounded-xl bg-[#F4F8FA] p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#246B95]" size={18} />
                <p className="text-[#526170]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">下一步按你的情况继续</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Link
              href="/cellphone/diagnosis"
              className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 transition hover:border-[#246B95]"
            >
              <RefreshCcw className="mb-4 text-[#2786A5]" size={26} />
              <h3 className="text-xl font-black">先判断问题</h3>
              <p className="mt-2 leading-relaxed text-[#526170]">
                如果你是因为账单、信号、设备或转号才想换，先找出问题原因。
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
                进入 Diagnosis <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/cellphone/family-plan-guide"
              className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 transition hover:border-[#246B95]"
            >
              <Users className="mb-4 text-[#2786A5]" size={26} />
              <h3 className="text-xl font-black">家庭多线</h3>
              <p className="mt-2 leading-relaxed text-[#526170]">
                多条线路不要只按单线价格选，先逐条核对设备和 Credit 状态。
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
                看家庭多线判断 <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/cellphone/providers"
              className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 transition hover:border-[#246B95]"
            >
              <CreditCard className="mb-4 text-[#2786A5]" size={26} />
              <h3 className="text-xl font-black">已经确定要比较</h3>
              <p className="mt-2 leading-relaxed text-[#526170]">
                再比较真实账单、设备成本、信号、国际使用和转网代价。
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
                进入方案比较 <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7 md:p-8">
          <div className="flex gap-3">
            <Smartphone className="mt-1 shrink-0 text-[#2786A5]" size={26} />
            <div>
              <h2 className="text-2xl font-black">哪些信息网页无法替你确认？</h2>
              <p className="mt-3 leading-relaxed text-[#526170]">
                当前开户资格、是否需要信用审核或押金、具体设备兼容、Promotion、Trade-in、
                Bill Credit、真实多线价格和国际使用规则，都要以当前账户与运营商规则为准。
              </p>
            </div>
          </div>
        </section>

        <p className="mt-8 text-center text-xs text-[#526170]">
          最后更新：2026年10月｜套餐、资格、设备优惠及账户结果可能随运营商政策变化，请以当前账户与实际活动规则为准。
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Prepaid vs Postpaid：美国预付费和后付费怎么选',
              description:
                '从账户结构、设备、家庭多线、国际使用和变更成本理解 Prepaid 与 Postpaid 的区别。',
              mainEntityOfPage:
                'https://oceanver.com/cellphone/faq/prepaid-vs-postpaid',
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

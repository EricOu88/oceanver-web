import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const pageUrl = 'https://oceanver.com/cellphone/faq/how-to-choose-us-cellphone-plan';

export const metadata: Metadata = {
  title: '美国手机套餐类型怎么选？先分清 Prepaid、Postpaid、家庭多线｜美国鸿达电讯',
  description:
    '帮助理解 Prepaid、Postpaid 与家庭多线三种常见账户形式各自解决什么问题。先判断使用场景，再决定是否进入方案比较。',
  alternates: { canonical: pageUrl },
};

const types = [
  {
    title: 'Prepaid',
    role: '更适合先控制账户复杂度和使用时长。',
    checks: ['短期或测试使用', '不依赖复杂设备促销', '希望更灵活调整', '国际/保号需求需单独核对'],
    href: '/cellphone/prepaid',
    label: '查看 Prepaid 使用场景',
  },
  {
    title: 'Postpaid',
    role: '更适合需要长期账户、设备分期或复杂多线管理的人。',
    checks: ['可能涉及身份/信用资格', '可能结合设备分期与 Promotion', '账单结构更复杂', '实际成本要看真实账户'],
    href: '/cellphone/providers',
    label: '已确定比较时进入方案比较',
  },
  {
    title: '家庭多线',
    role: '不是单独一种网络，而是多条线路一起管理的账户场景。',
    checks: ['逐条确认设备余额', '逐条确认 Bill Credit', '成员需求可能不同', '不要默认全家一起换'],
    href: '/cellphone/family-plan-guide',
    label: '查看家庭多线判断',
  },
];

const questions = [
  '我计划使用多久？',
  '我需要几条线路？',
  '我是否需要换手机或设备分期？',
  '我是否有 Trade-in / Promotion / Bill Credit？',
  '我最常使用手机的地点在哪里？',
  '我是否有回国、漫游、Wi-Fi Calling 或长期保号需求？',
];

export default function HowToChooseCellphonePlanPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link href="/cellphone/faq" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回手机问题知识库
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            手机套餐类型基础
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            美国手机套餐类型怎么选？先分清账户形式，再谈运营商
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526170] sm:text-lg">
            Prepaid、Postpaid 和家庭多线解决的是不同账户与使用场景问题。
            先理解自己需要哪种结构，再决定是否值得比较具体方案。
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          {types.map((item) => (
            <article key={item.title} className="rounded-3xl border border-[#D5E5EC] bg-white p-6">
              <h2 className="text-2xl font-black">{item.title}</h2>
              <p className="mt-3 leading-7 text-[#526170]">{item.role}</p>
              <ul className="mt-5 space-y-3">
                {item.checks.map((check) => (
                  <li key={check} className="flex gap-2 text-sm leading-6 text-[#526170]">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#2786A5]" size={17} />
                    {check}
                  </li>
                ))}
              </ul>
              <Link href={item.href} className="mt-6 inline-flex items-center gap-2 font-bold text-[#246B95]">
                {item.label}
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-black sm:text-3xl">先回答这 6 个问题</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {questions.map((item, index) => (
              <div key={item} className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5">
                <p className="text-sm font-bold text-[#2786A5]">0{index + 1}</p>
                <p className="mt-2 font-black">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">不要从这些结论开始</h2>
          <ul className="mt-5 space-y-3 leading-7 text-[#526170]">
            <li>• Prepaid 一定适合没有 SSN 的所有人。</li>
            <li>• Postpaid 一定信号更好或更快。</li>
            <li>• 家庭线路越多一定越便宜。</li>
            <li>• 某个品牌的优惠最大，所以一定最省钱。</li>
            <li>• “免费手机”就等于长期总成本最低。</li>
          </ul>
        </section>

        <section className="mt-12 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black">还不知道自己属于哪种情况？</h2>
          <p className="mt-3 leading-7 text-[#526170]">
            不要继续猜套餐类型。直接从账单、信号、设备、号码或家庭多线问题开始判断。
          </p>
          <Link href="/cellphone/diagnosis" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white hover:bg-[#103B60]">
            进入手机问题诊断
            <ArrowRight size={18} />
          </Link>
        </section>

        <p className="py-8 text-center text-xs leading-6 text-[#526170]">
          最后更新：2026年10月｜套餐形式、资格、设备优惠及账户规则可能变化，请以当前运营商规则与实际账户为准。
        </p>
      </div>
    </main>
  );
}

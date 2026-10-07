'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  HelpCircle,
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
    desc: '先核对套餐、线路、设备分期、Bill Credit 和附加费用，判断到底是哪一部分发生变化。',
    href: '/cellphone/diagnosis',
    linkText: '开始检查账单',
  },
  {
    icon: Smartphone,
    title: '想换手机或设备',
    desc: '先确认设备余额、Trade-in、Bill Credit、升级资格和当前套餐，再判断变更会不会增加长期成本。',
    href: '/cellphone/diagnosis',
    linkText: '先判断设备与账户',
  },
  {
    icon: Search,
    title: '想换运营商',
    desc: '先确认为什么想换：价格、信号、设备、家庭多线还是国际使用。问题清楚以后再比较方案。',
    href: '/cellphone/diagnosis',
    linkText: '先判断要不要换',
  },
  {
    icon: Users,
    title: '家里有多条手机线',
    desc: '家庭多线不能只看单线价格，要逐条核对设备余额、Credit、转网条件和每个人的实际需求。',
    href: '/cellphone/family-plan-guide',
    linkText: '进入家庭多线判断',
  },
  {
    icon: ShieldCheck,
    title: '没有 SSN / 刚到美国',
    desc: '不要简单理解成“能办”或“不能办”。先区分身份验证、信用审核、账户类型和设备条件。',
    href: '/cellphone/faq/no-ssn-us-cellphone-internet',
    linkText: '查看开户资格判断',
  },
  {
    icon: Plane,
    title: 'Prepaid / 回国 / 国际使用',
    desc: '先看账户结构、灵活性、设备状态、国际使用方式和退出条件，再判断哪种类型适合。',
    href: '/cellphone/faq/prepaid-vs-postpaid',
    linkText: '比较 Prepaid / Postpaid',
  },
];

const DECISION_POINTS = [
  {
    title: '问题到底出在哪里？',
    desc: '先分清是账单、信号、设备、转号、家庭多线还是国际使用，不要一开始就选运营商。',
  },
  {
    title: '现在真实账户是什么状态？',
    desc: '核对真实账单、线路数量、设备余额、Bill Credit、解锁和当前资格。',
  },
  {
    title: '哪些变化会带来代价？',
    desc: '变更线路、设备或运营商之前，要看可能失去的 Credit、设备条件和转网成本。',
  },
  {
    title: '什么时候才进入方案比较？',
    desc: '只有当问题和账户条件基本清楚以后，再比较不同方案，避免把促销当成答案。',
  },
];

const KNOWLEDGE_LINKS = [
  {
    href: '/cellphone/faq/how-to-choose-us-cellphone-plan',
    title: '美国手机方案应该怎么选？',
    desc: '先判断需求、线路和账户条件，再决定是否进入方案比较。',
  },
  {
    href: '/cellphone/faq/prepaid-vs-postpaid',
    title: 'Prepaid 和 Postpaid 到底怎么比？',
    desc: '从账户、设备、多线和退出条件理解两种结构，不用绝对化规则判断。',
  },
  {
    href: '/cellphone/faq/no-ssn-us-cellphone-internet',
    title: '没有 SSN 怎么判断手机或宽带资格？',
    desc: '区分身份验证、信用审核、设备和地址条件，再决定下一步。',
  },
  {
    href: '/cellphone/faq/promo-credit-not-received',
    title: 'Trade-in、Bill Credit 或转网奖励还没到账？',
    desc: '先分清优惠类型，再核对订单、设备验收、线路资格和账单记录。',
  },
  {
    href: '/cellphone/family-plan-guide',
    title: '家庭多条线要不要一起变更？',
    desc: '逐条核对设备、Credit、转网条件和成员需求。',
  },
  {
    href: '/cellphone/providers',
    title: '已经确定要比较方案？',
    desc: '再比较真实账单、设备成本、信号、国际使用和转网代价。',
  },
  {
    href: '/cellphone/att/business-faq',
    title: 'Business 和 Consumer 账户有什么不同？',
    desc: '比较账户类型、套餐层级、热点与数据政策，不直接假设商业账户一定更快或更便宜。',
  },
  {
    href: '/cellphone/government',
    title: 'Lifeline 政府通信补助怎么判断资格？',
    desc: '从收入、政府福利项目、家庭状态和当前服务条件判断，ACP 已结束。',
  },
  {
    href: '/cellphone/faq',
    title: '进入完整手机问题库',
    desc: '从账单、信号、eSIM、转号、设备分期等问题继续查。',
  },
];

export default function CellphoneClient() {
  return (
    <div className="min-h-screen bg-[#FCFDFE] text-[#202D3A] font-sans">
      <BackToHomeButton />

      <section className="bg-[#F4F8FA] pb-14 pt-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm font-bold text-[#246B95] md:text-base">
            美国手机问题中心
          </p>

          <h1 className="mb-6 text-4xl font-black leading-tight md:text-5xl">
            先把问题判断清楚，
            <br className="hidden md:block" />
            再决定要不要换方案
          </h1>

          <div className="mx-auto max-w-3xl space-y-3 text-base leading-relaxed text-[#526170] md:text-lg">
            <p>
              账单涨价、信号不好、想换手机、准备转网、家庭多线、没有 SSN，
              <strong className="text-[#202D3A]">都不需要先从运营商开始。</strong>
            </p>
            <p>
              先判断问题和账户条件，再进入对应知识节点；只有方向清楚以后，才比较方案或核实真实账户。
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/cellphone/diagnosis"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-7 py-3.5 font-bold text-white transition hover:bg-[#103B60]"
            >
              <Search size={18} />
              从手机问题诊断开始
            </Link>

            <Link
              href="/cellphone/faq"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-7 py-3.5 font-bold text-[#164B78] transition hover:border-[#246B95]"
            >
              <HelpCircle size={18} />
              浏览手机问题库
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-black md:text-4xl">
              你现在遇到的是哪一种问题？
            </h2>
            <p className="mx-auto max-w-2xl text-[#526170]">
              先从真实问题进入。不同问题会走向不同节点，不需要先懂套餐名称。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROBLEM_CARDS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-[#D5E5EC] bg-white p-6 transition hover:border-[#246B95] hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8FA]">
                    <Icon className="text-[#2786A5]" size={22} />
                  </div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mb-5 mt-2 text-sm leading-relaxed text-[#526170]">
                    {item.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-[#164B78]">
                    {item.linkText}
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8FA] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-black md:text-4xl">
              先判断这 4 件事
            </h2>
            <p className="text-[#526170]">
              Oceanver 不先替你选运营商，而是先把影响决定的条件找出来。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {DECISION_POINTS.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#D5E5EC] bg-white p-6"
              >
                <p className="mb-2 text-sm font-black text-[#246B95]">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-[#526170]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#D5E5EC] p-7">
              <Search className="mb-4 text-[#2786A5]" size={28} />
              <h2 className="text-2xl font-black">还不知道该不该换？</h2>
              <p className="mb-5 mt-3 leading-relaxed text-[#526170]">
                先进入 Diagnosis。根据你实际遇到的现象，把问题范围缩小，再决定下一步。
              </p>
              <Link
                href="/cellphone/diagnosis"
                className="inline-flex items-center gap-2 font-bold text-[#164B78]"
              >
                开始问题判断
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="rounded-2xl border border-[#D5E5EC] p-7">
              <CircleDollarSign className="mb-4 text-[#2786A5]" size={28} />
              <h2 className="text-2xl font-black">已经确定要比较方案？</h2>
              <p className="mb-5 mt-3 leading-relaxed text-[#526170]">
                进入 Providers，比真实账单、设备成本、家庭结构、信号和转网代价，而不是只看广告优惠。
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

      <section className="bg-[#F4F8FA] py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-9 flex items-center justify-center gap-2">
            <HelpCircle className="text-[#2786A5]" size={24} />
            <h2 className="text-3xl font-black md:text-4xl">手机知识节点</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {KNOWLEDGE_LINKS.map((item) => (
              <Link
                key={item.href + item.title}
                href={item.href}
                className="group rounded-xl border border-[#D5E5EC] bg-white p-5 transition hover:border-[#246B95]"
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-black transition group-hover:text-[#164B78]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#526170]">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="mt-1 shrink-0 text-[#164B78] transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-black">
              网页无法确认的，再进入人工核实
            </h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-[#526170]">
              实际多线价格、当前 Promotion、Trade-in / Upgrade 资格、设备余额、
              Bill Credit、IMEI、解锁和真实账户状态，需要结合当前账户与规则确认。
            </p>
          </div>

          <div className="mx-auto mb-8 max-w-2xl">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#246B95]"
                  size={19}
                />
                <span>先判断问题，再补齐真实账户数据</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#246B95]"
                  size={19}
                />
                <span>网页不承诺固定价格、固定资格或固定促销结果</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#246B95]"
                  size={19}
                />
                <span>需要准确数字时再核实当前账户</span>
              </li>
            </ul>
          </div>

          <div className="mx-auto max-w-2xl">
            <ContactEntry
              title="需要准确数字时进入人工核实"
              subtitle="带上当前账单、线路和设备情况，会更容易核对"
            />
          </div>
        </div>
      </section>

      <p className="mx-auto mt-8 max-w-6xl px-4 text-center text-xs text-[#526170]">
        最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与实际活动规则为准。
      </p>

      <footer className="border-t border-[#D5E5EC] py-8 text-center">
        <p className="text-xs font-bold text-[#526170]">
          © {new Date().getFullYear()} 美国鸿达电讯
        </p>
      </footer>
    </div>
  );
}

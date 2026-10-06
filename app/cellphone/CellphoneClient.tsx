'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CircleDollarSign,
  CircleHelp,
  Plane,
  Search,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react';

import BackToHomeButton from '@/app/components/BackToHomeButton';

const problemCards = [
  {
    icon: CircleDollarSign,
    title: '账单变贵或出现不明费用',
    desc: '先区分套餐月费、设备分期、Bill Credit、附加项目和一次性费用。',
    href: '/cellphone/diagnosis',
    label: '先判断账单问题',
  },
  {
    icon: Smartphone,
    title: '信号、网速、SIM / eSIM 异常',
    desc: '先看地点、设备、线路状态和网络模式，不先把问题归因于运营商品牌。',
    href: '/cellphone/diagnosis',
    label: '进入手机问题诊断',
  },
  {
    icon: Search,
    title: '准备转网或比较方案',
    desc: '先确认号码、设备、信号和退出条件，再比较长期成本。',
    href: '/cellphone/providers',
    label: '进入方案比较',
  },
  {
    icon: Users,
    title: '家庭有多条手机线',
    desc: '逐条检查设备余额、Bill Credit、换机需求和转号准备，不默认全家一起动。',
    href: '/cellphone/family-plan-guide',
    label: '查看家庭多线判断',
  },
  {
    icon: ShieldCheck,
    title: '没有 SSN / 刚到美国',
    desc: '先理解哪些条件属于身份与资格问题，不用一句“能办 / 不能办”直接下结论。',
    href: '/cellphone/faq/no-ssn-us-cellphone-internet',
    label: '查看无 SSN 资格说明',
  },
  {
    icon: Plane,
    title: 'Prepaid / 回国 / 国际使用',
    desc: '先分清短期使用、长期保号、收验证码、Wi-Fi Calling、漫游和 eSIM 的实际需求。',
    href: '/cellphone/prepaid',
    label: '查看 Prepaid 使用场景',
  },
];

const principles = [
  ['先看真实问题', '账单、信号、设备、号码和家庭需求的处理路径不同。'],
  ['先看当前账户', '价格、设备余额、Bill Credit 和资格不能用网站固定数字代替。'],
  ['先看使用场景', '家里、公司、通勤、国际使用和线路数量会改变判断。'],
  ['最后才比较方案', '只有问题已经基本判断清楚，才进入运营商或方案比较。'],
];

export default function CellphoneClient() {
  return (
    <div className="min-h-screen bg-[#FCFDFE] text-[#202D3A]">
      <BackToHomeButton />

      <section className="bg-[#F4F8FA] px-4 pb-14 pt-16 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-bold text-[#246B95] md:text-base">美国手机问题 · 中文判断入口</p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            手机有问题？先判断发生了什么，再决定要不要换
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#526170] md:text-lg">
            账单涨价、信号差、想换手机、准备转网、家庭多线、没有 SSN 或回国使用，
            都不需要先从运营商品牌开始。
          </p>
          <Link
            href="/cellphone/diagnosis"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-7 py-3.5 font-bold text-white transition hover:bg-[#103B60]"
          >
            <Search size={18} />
            从手机问题诊断开始
          </Link>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 text-center">
            <h2 className="text-3xl font-black md:text-4xl">你现在遇到的是哪一种情况？</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[#526170]">
              每个入口只负责一种问题，不把套餐销售、故障排查和资格核实混在一起。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {problemCards.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-[#D5E5EC] bg-white p-6 transition hover:border-[#246B95]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8FA]">
                    <Icon className="text-[#246B95]" size={22} />
                  </div>
                  <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#526170]">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#246B95]">
                    {item.label}
                    <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8FA] px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black md:text-4xl">Oceanver 的手机判断顺序</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {principles.map(([title, desc], index) => (
              <article key={title} className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
                <p className="text-sm font-bold text-[#2786A5]">0{index + 1}</p>
                <h3 className="mt-1 text-xl font-black">{title}</h3>
                <p className="mt-2 leading-7 text-[#526170]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-[#D5E5EC] bg-white p-7">
            <CircleHelp className="text-[#246B95]" size={28} />
            <h2 className="mt-4 text-2xl font-black">只是想先理解问题？</h2>
            <p className="mt-3 leading-7 text-[#526170]">
              手机 FAQ 按账单、信号、eSIM、转号、设备、家庭和国际使用整理常见判断原则。
            </p>
            <Link href="/cellphone/faq" className="mt-5 inline-flex items-center gap-2 font-bold text-[#246B95]">
              查看手机问题知识库
              <ArrowRight size={16} />
            </Link>
          </article>

          <article className="rounded-3xl border border-[#D5E5EC] bg-white p-7">
            <Search className="text-[#246B95]" size={28} />
            <h2 className="mt-4 text-2xl font-black">已经确定要比较方案？</h2>
            <p className="mt-3 leading-7 text-[#526170]">
              Providers 页面只负责比较条件，不承诺哪家一定更便宜、更快或更适合所有人。
            </p>
            <Link href="/cellphone/providers" className="mt-5 inline-flex items-center gap-2 font-bold text-[#246B95]">
              进入手机方案比较
              <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-[#F4F8FA] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-black">哪些情况网页不能确认？</h2>
          <p className="mx-auto mt-3 max-w-3xl leading-7 text-[#526170]">
            当前账户价格、Promotion / Trade-in / Upgrade 资格、设备余额、Bill Credit、IMEI、eSIM、解锁、
            Port 状态和运营商后台资格，都需要结合真实账户核实。
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white hover:bg-[#103B60]">
            需要时进入人工核实
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <p className="px-4 py-8 text-center text-xs leading-6 text-[#526170]">
        最后更新：2026年10月｜套餐、资格、设备优惠及账户结果可能随运营商政策变化，请以当前账户与实际活动规则为准。
      </p>
    </div>
  );
}

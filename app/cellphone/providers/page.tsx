import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  Globe2,
  Layers3,
  RefreshCcw,
  ShieldCheck,
  Signal,
  Smartphone,
  Users,
} from 'lucide-react';

import { ProvidersShell } from './ProvidersShell';

export const metadata: Metadata = {
  title: '手机方案怎么比？别只看月费和手机优惠 | 美国鸿达电讯',
  description:
    '已经确定要比较手机方案时，先核对真实账单、设备余额、Bill Credit、家庭多线、信号、国际使用和转网条件，再判断是否值得更换。',
  alternates: {
    canonical: 'https://oceanver.com/cellphone/providers',
  },
  openGraph: {
    title: '手机方案怎么比？别只看月费和手机优惠 | 美国鸿达电讯',
    description:
      '比较手机方案时，不只看套餐标价。设备余额、Bill Credit、家庭线路、信号、国际使用和转网条件，都可能改变最终结果。',
    url: 'https://oceanver.com/cellphone/providers',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

const COMPARE_ITEMS = [
  {
    icon: CircleDollarSign,
    title: '现在每月实际支出',
    text: '先看真实账单，而不是只看套餐名称或广告价格。把线路费、设备分期、附加服务、税费与当前折扣一起看。',
  },
  {
    icon: Smartphone,
    title: '设备相关成本',
    text: '逐条线路核对设备余额、Trade-in、Bill Credit 与升级条件。换方案可能改变尚未完成的设备成本。',
  },
  {
    icon: Users,
    title: '家庭多线关系',
    text: '不要默认所有号码必须一起变更。先看每条线是否有设备余额、Credit、转网条件和不同使用需求。',
  },
  {
    icon: Signal,
    title: '网络与使用场景',
    text: '比较常用地点的实际体验，包括家里、公司、通勤路线、热点需求，以及是否经常在中国或其他国家使用。',
  },
  {
    icon: RefreshCcw,
    title: '转网代价',
    text: '确认号码转移、解锁状态、设备兼容、旧账户余额，以及变更后可能失去的 Credit 或其他账户权益。',
  },
  {
    icon: ShieldCheck,
    title: '真实账户条件',
    text: '最终价格和资格通常取决于当前账户。网页可以帮你判断方向，但不能代替真实账户与当前活动规则的核实。',
  },
];

const NETWORK_LINKS = [
  {
    icon: Users,
    title: '家庭多线怎么处理？',
    text: '如果家里每条线状态不同，先判断哪些适合一起变更、哪些应该暂缓。',
    href: '/cellphone/family-plan-guide',
    label: '进入家庭多线判断',
  },
  {
    icon: Layers3,
    title: '还没确定要不要换？',
    text: '如果问题本身还没判断清楚，不要先比较运营商，先回到手机问题诊断。',
    href: '/cellphone/diagnosis',
    label: '回到手机问题诊断',
  },
  {
    icon: Globe2,
    title: 'eSIM、信号、转号、国际使用',
    text: '这些属于具体问题节点，不需要在比较页面重复展开，可以进入手机问题库继续查。',
    href: '/cellphone/faq',
    label: '查看手机问题库',
  },
];

const DONT_RUSH = [
  '目前账单、信号和使用体验都稳定，只是被某个手机优惠吸引。',
  '仍有重要设备余额或 Bill Credit 没有核对清楚。',
  '家庭里只有部分号码准备变更，其他线路条件完全不同。',
  '新方案的真实多线价格、资格或附加条件还没有确认。',
  '主要问题其实是信号、eSIM、设备或转号故障，而不是套餐本身。',
  '常用地点的网络体验还没有验证。',
];

const HUMAN_CHECKS = [
  '实际多线价格与当前套餐层级',
  '当前 Promotion、Trade-in、Upgrade 资格',
  '设备余额与尚未发完的 Bill Credit',
  'IMEI 兼容性与设备解锁状态',
  '号码转移状态与账户特殊条件',
  '当前活动、折扣与真实账户结果',
];

export default function CellphoneProvidersPage() {
  return (
    <ProvidersShell>
      <main className="bg-[#FCFDFE] text-[#202D3A]">
        <section className="px-4 py-14 md:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm font-bold text-[#246B95] md:text-base">
              手机方案比较
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-5xl">
              不要只看月费和手机优惠，
              <br className="hidden md:block" />
              先把真正会影响结果的项目比清楚
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#526170] md:text-lg">
              当你已经判断“可能值得换”以后，再进入方案比较。设备余额、Bill Credit、
              家庭多线、信号、国际使用和转网条件，都可能让同一个报价产生完全不同的结果。
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/cellphone/diagnosis"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-7 py-3.5 font-black text-white transition hover:bg-[#103B60]"
              >
                还没确定要不要换？先做问题判断
                <ArrowRight size={18} />
              </Link>
              <a
                href="#compare"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-7 py-3.5 font-black text-[#164B78] transition hover:border-[#246B95]"
              >
                已经确定要比较方案
              </a>
            </div>
          </div>
        </section>

        <section id="compare" className="border-y border-[#D5E5EC] bg-[#F4F8FA] px-4 py-14">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-9 max-w-3xl text-center">
              <h2 className="text-3xl font-black md:text-4xl">比较手机方案，先看这 6 件事</h2>
              <p className="mt-3 leading-relaxed text-[#526170]">
                运营商只是候选方案。先把自己的账户状态和使用条件看清楚，再比较哪种方案更合适。
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {COMPARE_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
                    <Icon className="mb-4 text-[#2786A5]" size={26} />
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-[#526170]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-black md:text-4xl">哪些情况先不要急着换</h2>
              <p className="mt-3 text-[#526170]">
                比较不是为了强行得出“必须换”的结论，而是先排除不适合立即变更的情况。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {DONT_RUSH.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-[#D5E5EC] bg-white p-5">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#246B95]" size={19} />
                  <p className="leading-relaxed text-[#526170]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F4F8FA] px-4 py-14">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-black md:text-4xl">发现具体问题，就进入对应节点</h2>
              <p className="mt-3 text-[#526170]">
                这页只负责“怎么比较”。具体问题不在这里重复回答，而是继续进入对应的问题节点。
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {NETWORK_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex flex-col rounded-2xl border border-[#D5E5EC] bg-white p-6">
                    <Icon className="mb-4 text-[#2786A5]" size={26} />
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 flex-1 leading-relaxed text-[#526170]">{item.text}</p>
                    <Link
                      href={item.href}
                      className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
                    >
                      {item.label}
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-14">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#D5E5EC] bg-white p-7">
              <CreditCard className="mb-4 text-[#2786A5]" size={28} />
              <h2 className="text-2xl font-black">为什么不能只看月费？</h2>
              <p className="mt-3 leading-relaxed text-[#526170]">
                因为月费只是其中一项。设备余额、尚未完成的 Bill Credit、家庭线路结构、
                税费、附加服务和变更成本，都可能改变最终结果。网页应该先帮你把这些变量找出来，
                而不是给出一个看似精确但实际不可靠的长期总价。
              </p>
            </div>
            <div className="rounded-2xl border border-[#D5E5EC] bg-white p-7">
              <ShieldCheck className="mb-4 text-[#2786A5]" size={28} />
              <h2 className="text-2xl font-black">什么时候才值得进入人工核实？</h2>
              <p className="mt-3 leading-relaxed text-[#526170]">
                当方向已经判断清楚，但结果取决于真实账户、设备或当前活动规则时，再进入人工核实。
                这一步不是重新做销售推荐，而是把网页无法确认的数据补齐。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F4F8FA] px-4 py-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-black md:text-4xl">这些信息需要真实账户才能确认</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {HUMAN_CHECKS.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-[#D5E5EC] bg-white p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#246B95]" size={18} />
                  <span className="text-[#526170]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-8 py-4 font-black text-white transition hover:bg-[#103B60]"
              >
                需要准确数字时进入人工核实
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <p className="mx-auto max-w-6xl px-4 py-8 text-center text-xs text-[#526170]">
          最后更新：2026年10月｜套餐、资格、设备优惠及账户结果可能随运营商政策变化，请以当前账户与实际活动规则为准。
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: '手机方案怎么比？别只看月费和手机优惠',
              description:
                '已经确定要比较手机方案时，先核对真实账单、设备余额、Bill Credit、家庭多线、信号、国际使用和转网条件，再判断是否值得更换。',
              url: 'https://oceanver.com/cellphone/providers',
              inLanguage: 'zh-CN',
              dateModified: '2026-10-06',
            }),
          }}
        />
      </main>
    </ProvidersShell>
  );
}

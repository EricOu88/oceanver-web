import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CircleDollarSign,
  CreditCard,
  HelpCircle,
  Layers3,
  RefreshCcw,
  Signal,
  Smartphone,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '美国手机问题库｜按问题继续查 | 美国鸿达电讯',
  description:
    '美国手机问题知识入口。按账单、信号、eSIM、转号、设备分期、家庭多线、国际使用等问题继续查，不需要先选择运营商。',
  alternates: { canonical: 'https://oceanver.com/cellphone/faq' },
  openGraph: {
    title: '美国手机问题库｜按问题继续查',
    description:
      '从账单、信号、eSIM、转号、设备分期、家庭多线和国际使用等问题继续查，再决定是否需要比较方案或人工核实。',
    url: 'https://oceanver.com/cellphone/faq',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

const TOPICS = [
  {
    icon: CircleDollarSign,
    title: '账单为什么变贵？',
    text: '先判断是套餐、设备分期、Credit、附加服务还是账户变化，再决定要不要比较其他方案。',
    href: '/cellphone/diagnosis',
    label: '进入账单问题判断',
  },
  {
    icon: Signal,
    title: '信号或上网不好',
    text: '先区分是单一设备、固定地点还是多个地点都出现问题，避免把设备故障误判成运营商问题。',
    href: '/cellphone/diagnosis',
    label: '进入信号问题判断',
  },
  {
    icon: Smartphone,
    title: 'SIM / eSIM / 设备兼容',
    text: '换手机、换 eSIM、IMEI、解锁或激活问题，需要先确认设备和账户条件。',
    href: '/cellphone/diagnosis',
    label: '进入设备问题判断',
  },
  {
    icon: RefreshCcw,
    title: '转号与换运营商',
    text: '先确认号码状态、账户资料、Transfer PIN、设备余额和尚未完成的 Credit，再决定什么时候转。',
    href: '/cellphone/diagnosis',
    label: '进入转号问题判断',
  },
  {
    icon: CreditCard,
    title: '设备分期 / Trade-in / Bill Credit',
    text: '手机优惠和设备账单可能影响长期成本，也会影响什么时候适合变更线路。',
    href: '/cellphone/diagnosis',
    label: '进入设备账单判断',
  },
  {
    icon: Users,
    title: '家庭多线',
    text: '家庭计划不要只看每线价格。每条线的设备余额、Credit、转网条件和使用需求都可能不同。',
    href: '/cellphone/family-plan-guide',
    label: '进入家庭多线指南',
  },
  {
    icon: Layers3,
    title: '已经确定要比较方案',
    text: '如果问题已经判断清楚，再比较真实账单、设备成本、家庭结构、信号、国际使用与转网代价。',
    href: '/cellphone/providers',
    label: '进入手机方案比较',
  },
  {
    icon: HelpCircle,
    title: '还是不确定属于哪类',
    text: '不用先选运营商或套餐名称，从现象开始回答问题，系统会继续缩小范围。',
    href: '/cellphone/diagnosis',
    label: '从手机问题诊断开始',
  },
];

export default function CellphoneFAQPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] text-[#202D3A]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8">
          <Link
            href="/cellphone"
            className="text-sm font-bold text-[#526170] transition hover:text-[#164B78]"
          >
            ← 返回手机问题中心
          </Link>
        </div>

        <header className="mx-auto mb-12 max-w-4xl">
          <p className="mb-3 text-sm font-bold text-[#246B95]">手机问题库</p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            按问题继续查，不需要先选运营商
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#526170]">
            这里不是套餐目录。先找到你正在遇到的问题，再进入对应判断节点；只有当方向已经清楚时，才进入方案比较或人工核实。
          </p>
        </header>

        <section>
          <div className="grid gap-5 md:grid-cols-2">
            {TOPICS.map((topic) => {
              const Icon = topic.icon;
              return (
                <article
                  key={topic.title}
                  className="flex flex-col rounded-2xl border border-[#D5E5EC] bg-white p-6"
                >
                  <Icon className="mb-4 text-[#2786A5]" size={26} />
                  <h2 className="text-xl font-black">{topic.title}</h2>
                  <p className="mt-2 flex-1 leading-relaxed text-[#526170]">{topic.text}</p>
                  <Link
                    href={topic.href}
                    className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78] transition hover:text-[#103B60]"
                  >
                    {topic.label}
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7 md:p-8">
          <h2 className="text-2xl font-black">这个问题库怎么和其他页面连接？</h2>
          <div className="mt-4 grid gap-4 text-[#526170] md:grid-cols-3">
            <div>
              <strong className="text-[#202D3A]">还没判断清楚</strong>
              <p className="mt-1 leading-relaxed">去 Diagnosis，从现象开始缩小问题范围。</p>
            </div>
            <div>
              <strong className="text-[#202D3A]">已经知道问题</strong>
              <p className="mt-1 leading-relaxed">进入对应知识节点，例如家庭多线、设备、转号或信号问题。</p>
            </div>
            <div>
              <strong className="text-[#202D3A]">已经确定要比较</strong>
              <p className="mt-1 leading-relaxed">再进入 Providers，比真实账户条件，而不是只看广告价格。</p>
            </div>
          </div>
        </section>

        <p className="mt-8 text-center text-xs text-[#526170]">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与实际活动规则为准。
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: '美国手机问题库',
              description:
                '按账单、信号、eSIM、转号、设备分期、家庭多线和方案比较等问题继续查的手机知识入口。',
              url: 'https://oceanver.com/cellphone/faq',
              inLanguage: 'zh-CN',
              dateModified: '2026-10-06',
            }),
          }}
        />
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  ExternalLink,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lifeline 政府通信补助怎么判断资格？ | 美国鸿达电讯',
  description:
    'Lifeline 政府通信补助资格判断。先看收入或符合条件的政府福利项目，再确认当前服务商、设备和账户规则。ACP 已结束，不应再按 ACP 申请。',
  alternates: {
    canonical: 'https://oceanver.com/cellphone/government',
  },
  openGraph: {
    title: 'Lifeline 政府通信补助怎么判断资格？',
    description:
      '从收入、政府福利项目、家庭资格和当前服务条件判断 Lifeline；ACP 已结束。',
    url: 'https://oceanver.com/cellphone/government',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

const QUALIFY_PATHS = [
  {
    title: '按收入判断',
    text: 'Lifeline 可以按家庭收入资格申请。具体收入门槛会按年度联邦贫困线更新，不能长期固定写死。',
  },
  {
    title: '按政府福利项目判断',
    text: '例如 Medicaid、SNAP、SSI、Federal Public Housing Assistance 等符合条件的项目；实际名单以 USAC 当前规则为准。',
  },
  {
    title: '每户只能有一个 Lifeline benefit',
    text: 'Lifeline 是按 household 计算，不是每个人都可以重复拿一个 benefit。家庭成员和地址关系需要按当前规则判断。',
  },
];

const VERIFY = [
  '当前是否符合收入或指定政府福利项目资格',
  '当前家庭是否已经有其他 Lifeline benefit',
  '所在州是否有额外流程或资格核实要求',
  '当前服务商是否参与 Lifeline',
  '当前可用设备、服务内容和费用',
  '身份、地址与资格文件是否需要进一步核实',
];

export default function GovernmentPhonePage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-12 text-[#202D3A] md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Link
            href="/cellphone"
            className="text-sm font-bold text-[#526170] transition hover:text-[#164B78]"
          >
            ← 返回手机问题中心
          </Link>
        </div>

        <header className="mb-12">
          <p className="mb-3 text-sm font-bold text-[#246B95]">
            政府通信补助资格判断
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            Lifeline 怎么判断资格？
            <br className="hidden md:block" />
            先别把它和 ACP 混在一起
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#526170]">
            ACP 已结束。现在仍然存在的是 Lifeline。是否符合资格，要看家庭收入、
            符合条件的政府福利项目、household 状态和当前服务商规则，而不是看到
            “免费手机”就直接判断自己一定符合。
          </p>
        </header>

        <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7 md:p-8">
          <div className="flex gap-3">
            <ShieldCheck className="mt-1 shrink-0 text-[#2786A5]" size={28} />
            <div>
              <h2 className="text-2xl font-black">先确认一件最重要的事</h2>
              <p className="mt-3 leading-relaxed text-[#526170]">
                Affordable Connectivity Program（ACP）已经结束，不应继续把
                ACP 和 Lifeline 当成同一个项目，也不应继续收集用户资料声称可以申请 ACP。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">Lifeline 主要从这 3 条路径判断</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {QUALIFY_PATHS.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#D5E5EC] bg-white p-6"
              >
                <CheckCircle2 className="mb-4 text-[#2786A5]" size={24} />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-[#526170]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#D5E5EC] bg-white p-7 md:p-8">
          <h2 className="text-2xl font-black">这些旧说法不要继续直接使用</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              '“有 Medicaid 就一定拿免费手机。”',
              '“每月一定是 $0。”',
              '“一定送某款智能手机。”',
              '“固定需要某种州 ID、SSN 后四位或固定材料组合。”',
              '“20–30 分钟一定可以现场办完。”',
              '“一定包含某些国际通话或固定流量。”',
              '“每个人都可以单独重复申请一个 benefit。”',
              '“ACP 现在还可以继续申请。”',
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-xl bg-[#F4F8FA] p-4">
                <CircleHelp className="mt-0.5 shrink-0 text-[#246B95]" size={18} />
                <p className="text-[#526170]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">哪些信息必须按当前规则核实？</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {VERIFY.map((item) => (
              <div key={item} className="flex gap-3 rounded-xl border border-[#D5E5EC] bg-white p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#246B95]" size={18} />
                <p className="text-[#526170]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7">
            <Smartphone className="mb-4 text-[#2786A5]" size={28} />
            <h2 className="text-2xl font-black">如果你真正的问题是手机套餐</h2>
            <p className="mt-3 leading-relaxed text-[#526170]">
              如果你是在处理账单、信号、eSIM、转号或设备分期，不要停在政府补助页，
              直接回到手机问题诊断。
            </p>
            <Link
              href="/cellphone/diagnosis"
              className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
            >
              进入手机问题诊断
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7">
            <ShieldCheck className="mb-4 text-[#2786A5]" size={28} />
            <h2 className="text-2xl font-black">如果你要确认 Lifeline 资格</h2>
            <p className="mt-3 leading-relaxed text-[#526170]">
              先以 USAC / National Verifier 当前规则为准，再核实服务商、设备和账户条件。
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://www.usac.org/lifeline/consumer-eligibility/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
              >
                查看 USAC 当前资格规则
                <ExternalLink size={16} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
              >
                需要确认当前资格时进入人工核实
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <p className="mt-10 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜Lifeline 资格、服务内容、设备与州级流程可能变化，请以 USAC、National Verifier 和当前服务商规则为准。ACP 已于 2024 年结束。
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Lifeline 政府通信补助怎么判断资格？',
              description:
                '从收入、政府福利项目、家庭资格和当前服务条件判断 Lifeline；ACP 已结束。',
              url: 'https://oceanver.com/cellphone/government',
              inLanguage: 'zh-CN',
              dateModified: '2026-10-06',
            }),
          }}
        />
      </div>
    </main>
  );
}

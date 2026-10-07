import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Home,
  ShieldCheck,
  Smartphone,
  UserRoundCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '没有 SSN，手机和家庭宽带怎么判断？ | 美国鸿达电讯',
  description:
    '没有 SSN 时，手机和家庭宽带的开户条件并不相同。先区分身份验证、信用审核、设备与地址条件，再决定 Prepaid、Postpaid 或宽带服务下一步怎么查。',
  alternates: {
    canonical: 'https://oceanver.com/cellphone/faq/no-ssn-us-cellphone-internet',
  },
  openGraph: {
    title: '没有 SSN，手机和家庭宽带怎么判断？',
    description:
      '先区分身份验证、信用审核、设备和地址条件，不要把“没有 SSN”简单等同于“不能办”或“一定能办”。',
    type: 'article',
  },
};

const CHECKS = [
  {
    icon: UserRoundCheck,
    title: '身份验证',
    text: '运营商可能要求姓名、证件、地址或其他身份资料。不同服务和不同账户类型的要求并不相同。',
  },
  {
    icon: CreditCard,
    title: '信用与付款条件',
    text: '是否进行信用审核、是否需要押金或其他付款安排，要以当前运营商和账户结果为准，不能用固定金额或统一规则回答。',
  },
  {
    icon: Smartphone,
    title: '手机服务',
    text: 'Prepaid、Postpaid、eSIM、自带设备和多线账户的条件不同。没有 SSN 只是一个条件，不是唯一决定因素。',
  },
  {
    icon: Home,
    title: '家庭宽带',
    text: '宽带还要同时看服务地址、覆盖、账户状态和安装条件。手机能办，不代表同样的资格规则适用于家庭宽带。',
  },
];

const DONT_ASSUME = [
  '“没有 SSN 就一定只能办 Prepaid。”',
  '“没有 SSN 一定可以办某个 Postpaid。”',
  '“押金一定是多少、用多久一定会返还。”',
  '“护照一定可以替代所有身份或信用要求。”',
  '“人在中国就一定可以完成美国号码或 eSIM 激活。”',
  '“通过代理就可以绕过运营商资格要求。”',
];

export default function NoSsnCellphoneInternetPage() {
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
          <p className="mb-3 text-sm font-bold text-[#246B95]">开户资格判断</p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            没有 SSN，手机和家庭宽带怎么判断？
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#526170]">
            “没有 SSN”本身不能直接得出“能办”或“不能办”的结论。先把身份验证、信用审核、
            付款方式、设备和服务地址分开看，再判断下一步。
          </p>
        </header>

        <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7 md:p-8">
          <div className="flex gap-3">
            <ShieldCheck className="mt-1 shrink-0 text-[#2786A5]" size={28} />
            <div>
              <h2 className="text-2xl font-black">先记住一个原则</h2>
              <p className="mt-3 leading-relaxed text-[#526170]">
                SSN、身份验证和信用审核是不同概念。不同运营商、账户类型、设备方案和服务地址，
                可能使用不同的核实方式。网页可以帮你判断需要检查什么，但不能替代当前资格结果。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">先分清这 4 件事</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {CHECKS.map((item) => {
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
        </section>

        <section className="rounded-2xl border border-[#D5E5EC] bg-white p-7 md:p-8">
          <h2 className="text-2xl font-black">这些结论不要直接相信</h2>
          <div className="mt-5 space-y-3">
            {DONT_ASSUME.map((item) => (
              <div key={item} className="flex gap-3 rounded-xl bg-[#F4F8FA] p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#246B95]" size={18} />
                <p className="text-[#526170]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">按你要办的服务继续</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Link
              href="/cellphone/diagnosis"
              className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 transition hover:border-[#246B95]"
            >
              <Smartphone className="mb-4 text-[#2786A5]" size={26} />
              <h3 className="text-xl font-black">手机问题还没判断清楚</h3>
              <p className="mt-2 leading-relaxed text-[#526170]">
                从 eSIM、设备兼容、账单、转号或账户问题继续判断。
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
                进入手机 Diagnosis <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/cellphone/faq/prepaid-vs-postpaid"
              className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 transition hover:border-[#246B95]"
            >
              <CreditCard className="mb-4 text-[#2786A5]" size={26} />
              <h3 className="text-xl font-black">比较账户类型</h3>
              <p className="mt-2 leading-relaxed text-[#526170]">
                了解 Prepaid 与 Postpaid 的账户、设备和变更结构，而不是只看有没有 SSN。
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
                比较 Prepaid / Postpaid <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/cellphone/family-plan-exit-account-holder"
              className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 transition hover:border-[#246B95]"
            >
              <CreditCard className="mb-4 text-[#2786A5]" size={26} />
              <h3 className="text-xl font-black">家庭组退出 / 账单责任转移</h3>
              <p className="mt-2 leading-relaxed text-[#526170]">
                没有 SSN、成员异地或户主失联时，先判断账户角色、号码控制权和当前验证条件。
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
                查看家庭计划退出判断 <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/internet"
              className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 transition hover:border-[#246B95]"
            >
              <Home className="mb-4 text-[#2786A5]" size={26} />
              <h3 className="text-xl font-black">要办家庭宽带</h3>
              <p className="mt-2 leading-relaxed text-[#526170]">
                宽带要另外检查地址覆盖、账户、安装和当前价格条件。
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
                进入宽带问题中心 <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7 md:p-8">
          <h2 className="text-2xl font-black">什么时候需要人工核实？</h2>
          <p className="mt-3 leading-relaxed text-[#526170]">
            当结果取决于当前运营商的身份要求、信用审核、押金、设备资格、eSIM 激活、
            服务地址或实时账户条件时，需要按真实申请条件核实。任何固定金额、固定材料清单或
            “一定可以”的说法，都不应作为长期通用答案。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-6 py-3 font-black text-white transition hover:bg-[#103B60]"
          >
            需要确认当前资格时进入人工核实
            <ArrowRight size={17} />
          </Link>
        </section>

        <p className="mt-8 text-center text-xs text-[#526170]">
          最后更新：2026年10月｜资格、身份审核、信用要求、设备与服务条件可能随运营商政策变化，请以当前申请结果和实际规则为准。
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: '没有 SSN，手机和家庭宽带怎么判断？',
              description:
                '先区分身份验证、信用审核、设备和地址条件，再判断手机或家庭宽带下一步怎么查。',
              mainEntityOfPage:
                'https://oceanver.com/cellphone/faq/no-ssn-us-cellphone-internet',
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

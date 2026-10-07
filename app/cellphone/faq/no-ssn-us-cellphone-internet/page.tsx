import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleHelp } from 'lucide-react';

const pageUrl = 'https://oceanver.com/cellphone/faq/no-ssn-us-cellphone-internet';

export const metadata: Metadata = {
  title: '没有 SSN 可以办美国手机或宽带吗？资格判断指南｜美国鸿达电讯',
  description:
    '没有 SSN 时，手机和宽带的资格判断方式不同。先区分手机账户、宽带地址、身份、信用、付款与设备条件，再按当前运营商规则核实。',
  alternates: { canonical: pageUrl },
};

const mobileChecks = [
  '是 Prepaid、Postpaid 还是家庭多线账户。',
  '运营商当前是否要求身份或信用审核。',
  '是否需要设备分期、Trade-in 或 Promotion。',
  '付款方式、账单地址和设备兼容条件。',
];

const internetChecks = [
  '当前地址是否有服务覆盖。',
  '申请人身份、信用或付款要求。',
  '地址是否已有旧账户、余额或设备记录。',
  '安装、设备与押金等当前条件。',
];

const myths = [
  ['没有 SSN 就一定只能办 Prepaid', '不能一概而论。不同运营商和账户类型可能有不同资格路径。'],
  ['有护照就一定能开所有后付费账户', '不能。身份文件只是条件之一，信用、地址、付款和账户政策也可能影响结果。'],
  ['宽带和手机的无 SSN 规则一样', '不一样。宽带更依赖服务地址和该地址当前账户条件，手机更依赖账户类型、设备与线路资格。'],
  ['授权代理可以保证通过', '不能保证。代理可以协助理解和提交，但最终资格由运营商与当前规则决定。'],
];

export default function NoSsnGuidePage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link href="/cellphone/faq" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回手机问题知识库
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            身份与资格判断
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            没有 SSN 可以办美国手机或宽带吗？先把两套资格逻辑分开
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526170] sm:text-lg">
            “没有 SSN”不是一个单一答案。手机和家庭宽带的审核条件不同，
            运营商、账户类型、地址、设备、信用和付款方式都会影响结果。
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-7">
            <h2 className="text-2xl font-black">手机账户先看什么</h2>
            <ul className="mt-5 space-y-3">
              {mobileChecks.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-[#526170]">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#2786A5]" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/cellphone/prepaid" className="mt-6 inline-flex items-center gap-2 font-bold text-[#246B95]">
              看 Prepaid 使用场景
              <ArrowRight size={16} />
            </Link>
          </article>

          <article className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-7">
            <h2 className="text-2xl font-black">家庭宽带先看什么</h2>
            <ul className="mt-5 space-y-3">
              {internetChecks.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-[#526170]">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#2786A5]" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/internet/diagnosis" className="mt-6 inline-flex items-center gap-2 font-bold text-[#246B95]">
              进入宽带问题诊断
              <ArrowRight size={16} />
            </Link>
          </article>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-black sm:text-3xl">不要把这些说法当成固定规则</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {myths.map(([title, answer]) => (
              <article key={title} className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5">
                <CircleHelp className="text-[#2786A5]" size={22} />
                <h3 className="mt-3 font-black">{title}</h3>
                <p className="mt-2 leading-7 text-[#526170]">{answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">哪些情况必须人工核实？</h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#526170]">
            当前身份文件是否接受、是否需要信用审核或押金、账户是否可开、设备融资资格、地址覆盖和旧账户状态，
            都属于实时资格问题，网页不能保证结果。
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white hover:bg-[#103B60]">
            需要时进入人工核实
            <ArrowRight size={18} />
          </Link>
        </section>

        <p className="py-8 text-center text-xs leading-6 text-[#526170]">
          最后更新：2026年10月｜身份、信用、地址、押金与账户资格可能随运营商规则变化，请以当前申请条件为准。
        </p>
      </div>
    </main>
  );
}

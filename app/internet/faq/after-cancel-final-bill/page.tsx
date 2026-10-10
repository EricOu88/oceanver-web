import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  ReceiptText,
  Router,
  ShieldCheck,
} from 'lucide-react';

const pageUrl = 'https://oceanver.com/internet/faq/after-cancel-final-bill';

export const metadata: Metadata = {
  title: { absolute: '宽带取消以后，怎么确认账户真的结束了？｜美国鸿达电讯' },
  description:
    '宽带取消后，按取消确认、Final Bill、设备归还、AutoPay、未结余额和账户状态逐项检查，避免旧服务继续收费或设备记录未关闭。',
  alternates: { canonical: pageUrl },
};

const checks = [
  '取消确认：保存 cancellation confirmation、case number、聊天或邮件记录，并确认生效日期。',
  'Final Bill：核对最终账单周期、未结余额、adjustment、refund 或 prorated charge。',
  '设备归还：保存设备序列号、门店收据或物流 tracking，确认账户设备清单是否同步。',
  'AutoPay：确认旧账户是否还会自动扣款；不要只因为服务不能上网就认为账户已经关闭。',
  '账户状态：查看服务是否仍显示 active、pending cancellation、past due 或其他未完成状态。',
  '后续联系：如果取消后仍持续收到运营商电话、邮件或账单，先核实它对应的是营销联系、设备、余额还是仍未关闭的服务。',
];

const danger = [
  '取消确认日期与实际停止服务日期对不上。',
  'Final Bill 仍出现新的 recurring charge。',
  '已经退还设备，但账户仍显示未归还或继续收费。',
  'AutoPay 在取消后继续发生新的扣款。',
  '旧账户仍显示 active，或新旧地址 / 账户记录互相混淆。',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: '宽带取消以后，怎么确认账户真的结束了？',
  description:
    '帮助检查宽带取消后的 Final Bill、设备归还、AutoPay、余额和账户状态，并说明什么时候需要进一步人工核实。',
  inLanguage: 'zh-CN',
  dateModified: '2026-10-07',
};

export default function AfterCancelFinalBillPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-4xl">
        <Link href="/internet/faq" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回宽带问题库
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            取消后账户检查
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            宽带取消以后，怎么确认账户真的结束了？
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
            “已经打电话取消”不等于所有后续事项都自动结束。真正需要确认的是：
            服务状态、Final Bill、设备归还、AutoPay 和未结余额是不是都已经闭环。
          </p>
        </header>

        <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <div className="flex gap-3">
            <FileCheck2 className="mt-1 shrink-0 text-[#2786A5]" size={27} />
            <div>
              <h2 className="text-2xl font-black">先保存“取消成功”的证据</h2>
              <p className="mt-3 leading-7 text-[#526170]">
                记录取消日期、生效日期、确认号码或书面记录。后面如果账单、设备或账户状态出现争议，
                这些记录比“我已经打过电话”更有用。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">取消后至少检查这 6 项</h2>
          <div className="mt-6 space-y-3">
            {checks.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-[#D5E5EC] bg-white p-5">
                <CheckCircle2 className="mt-1 shrink-0 text-[#246B95]" size={18} />
                <p className="leading-7 text-[#526170]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
            <ReceiptText className="mb-4 text-[#2786A5]" size={27} />
            <h2 className="text-2xl font-black">Final Bill 要看什么？</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[#526170]">
              <li>取消生效日期和账单周期是否一致。</li>
              <li>是否仍有 recurring service charge。</li>
              <li>是否有设备、未结余额、adjustment 或 refund。</li>
              <li>不要只看总额，要看每一行项目对应什么。</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
            <Router className="mb-4 text-[#2786A5]" size={27} />
            <h2 className="text-2xl font-black">设备退了为什么还可能有问题？</h2>
            <p className="mt-3 text-sm leading-7 text-[#526170]">
              物流显示送达、门店收件和账户系统完成设备移除，不一定在同一时间发生。
              所以应保存设备序列号、收据或 tracking，并对照账户中的设备记录。
            </p>
          </article>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <div className="flex gap-3">
            <ShieldCheck className="mt-1 shrink-0 text-[#2786A5]" size={27} />
            <div>
              <h2 className="text-2xl font-black">出现这些情况，应该进一步核实</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#526170]">
                {danger.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-5 py-3 font-bold text-white transition hover:bg-[#103B60]"
          >
            需要时进入人工核实
            <ArrowRight size={16} />
          </Link>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">下一步去哪</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/bill-optimization" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">取消后仍有账单问题</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">继续按行项目检查 recurring charge、设备、adjustment 和 AutoPay。</p>
            </Link>
            <Link href="/internet/diagnosis" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">新旧地址或设备状态也有问题</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">回到宽带 Diagnosis，区分搬家、设备、地址和账户记录问题。</p>
            </Link>
          </div>
        </section>

        <p className="mt-10 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜取消流程、账单结算、设备归还与账户状态可能因运营商和账户不同，请以当前账户与书面确认记录为准。
        </p>
      </div>
    </main>
  );
}

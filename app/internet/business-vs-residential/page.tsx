import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleHelp } from 'lucide-react';

const pageUrl = 'https://oceanver.com/internet/business-vs-residential';

export const metadata: Metadata = {
  title: '商业宽带还是住宅宽带？先看使用条件与账户要求｜美国鸿达电讯',
  description:
    '比较 Business 与 Residential 宽带时，先看地址、用途、静态 IP、支持方式、SLA、上传需求和服务条款。不是所有商业用途都必须自动选择 Business。',
  alternates: { canonical: pageUrl },
};

const compare = [
  ['使用地址与服务条款', '先确认该地址允许哪些账户类型，以及服务条款是否适合实际用途。'],
  ['静态 IP', '只有确实需要固定公网 IP、特定 VPN 或服务器架构时，才应把静态 IP 当成关键条件。'],
  ['故障响应与 SLA', '部分商业方案可能提供不同支持或 SLA，但不是所有 Business 计划都有同样保障。'],
  ['上传与网络架构', '视频会议、云备份、监控或服务器对上传与稳定性的需求不同，应看具体技术与 plan tier。'],
  ['价格与合同条件', '商业和住宅方案的实际价格、期限、设备和费用结构都需要按地址和当前报价确认。'],
  ['业务连续性', '如果网络中断会直接影响收银、电话、监控或远程办公，应把恢复方式和备用方案一起考虑。'],
];

const notAutomatic = [
  '“开公司”不等于任何情况下都必须买 Business。',
  'Business 不等于一定更快、更稳定或一定有静态 IP。',
  'Residential 不等于一定不能用于任何居家办公。',
  'SLA、支持优先级和静态 IP 都要看具体计划，不应按标签推断。',
];

export default function BusinessVsResidentialPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link href="/internet" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回宽带问题
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            Business / Residential 判断
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            商业宽带还是住宅宽带？先看业务需求，不用“公司”两个字直接决定
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526170] sm:text-lg">
            账户标签本身不能保证速度、SLA、静态 IP 或技术支持。真正要比较的是地址、用途、计划层级和业务中断成本。
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {compare.map(([title, desc], index) => (
            <article key={title} className="rounded-2xl border border-[#D5E5EC] bg-white p-5">
              <p className="text-sm font-bold text-[#2786A5]">0{index + 1}</p>
              <h2 className="mt-1 text-xl font-black">{title}</h2>
              <p className="mt-2 leading-7 text-[#526170]">{desc}</p>
            </article>
          ))}
        </section>

        <section className="py-12">
          <CircleHelp className="text-[#246B95]" size={28} />
          <h2 className="mt-4 text-2xl font-black sm:text-3xl">不要从这些绝对结论开始</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {notAutomatic.map((item) => (
              <div key={item} className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 font-semibold leading-7 text-[#526170]">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <CheckCircle2 className="text-[#246B95]" size={28} />
          <h2 className="mt-4 text-2xl font-black">什么情况下值得认真比较 Business</h2>
          <ul className="mt-5 space-y-3 leading-7 text-[#526170]">
            <li>• 网络中断会直接影响营业或关键业务。</li>
            <li>• 确实需要静态 IP、特定 VPN、服务器或监控架构。</li>
            <li>• 对故障响应、支持方式或 SLA 有明确要求。</li>
            <li>• 上传、并发、语音或云端应用是核心业务需求。</li>
            <li>• 当前住宅方案的服务条款或技术条件不能满足实际使用。</li>
          </ul>
        </section>

        <section className="mt-12 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black">下一步</h2>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/internet/diagnosis" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3.5 font-bold text-[#246B95]">
              先判断当前网络问题
              <ArrowRight size={18} />
            </Link>
            <Link href="/internet/providers" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white hover:bg-[#103B60]">
              已确定要比较宽带方案
              <ArrowRight size={18} />
            </Link>
          </div>
          <p className="mt-6 leading-7 text-[#526170]">
            具体地址可用账户类型、静态 IP、SLA、价格、合同和安装条件需要按当前地址与计划核实。
          </p>
          <Link href="/contact" className="mt-4 inline-flex items-center gap-2 font-bold text-[#246B95]">
            需要时进入人工核实
            <ArrowRight size={16} />
          </Link>
        </section>

        <p className="py-8 text-center text-xs leading-6 text-[#526170]">
          最后更新：2026年10月｜Business / Residential 的价格、SLA、静态 IP、支持和账户资格需以当前地址与计划规则为准。
        </p>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleHelp } from 'lucide-react';

const pageUrl = 'https://oceanver.com/cellphone/faq/prepaid-vs-postpaid';

export const metadata: Metadata = {
  title: 'Prepaid 和 Postpaid 有什么区别？美国手机账户形式判断｜美国鸿达电讯',
  description:
    '比较 Prepaid 与 Postpaid 的付款方式、账户资格、设备促销、多线管理和灵活性。具体价格、信用要求、网络优先级与资格需按当前计划核实。',
  alternates: { canonical: pageUrl },
};

const rows = [
  ['付款方式', '通常先付费再使用', '通常按账期后付费'],
  ['账户资格', '通常更少依赖信用审核，但仍可能有身份、付款或激活条件', '可能涉及身份、信用或其他账户资格，不能一概而论'],
  ['设备优惠', '常见结构相对简单，但具体设备政策按计划确认', '可能结合设备分期、Trade-in、Promotion 或 Bill Credit'],
  ['多线管理', '可能支持多线，但规则因计划而异', '家庭或商业多线可能有不同账户结构和资格条件'],
  ['灵活性', '更适合短期、测试网络或希望降低账户复杂度的人', '更适合需要长期账户、设备融资或多线管理的人'],
  ['网络体验', '不能仅凭 Prepaid 标签判断速度或覆盖', '也不能仅凭 Postpaid 标签判断速度或优先级'],
];

const myths = [
  ['Prepaid 一定不需要 SSN', '不能这么绝对。具体身份、付款和开户条件取决于运营商与当前计划。'],
  ['Postpaid 一定比 Prepaid 信号好', '不能。地点、设备、频段、拥堵和具体套餐层级都会影响体验。'],
  ['Postpaid 一定更贵', '不能只看账户形式。线路数量、设备、促销和实际账单都会改变结果。'],
  ['Prepaid 一定没有家庭多线', '不同计划可能有不同多线结构，应查看当前计划而不是依赖固定规则。'],
];

export default function PrepaidVsPostpaidPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link href="/cellphone/faq" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回手机问题知识库
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            账户形式知识
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            Prepaid 和 Postpaid 有什么区别？先看账户结构，不先判断谁更好
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526170] sm:text-lg">
            这两个词描述的是付款与账户结构，不等于信号等级、价格高低或服务质量排名。
            真正选择时还要结合设备、线路数量、使用时长和当前资格。
          </p>
        </header>

        <section className="overflow-hidden rounded-3xl border border-[#D5E5EC] bg-white">
          <div className="grid grid-cols-3 bg-[#F4F8FA] px-4 py-4 text-sm font-black sm:px-6">
            <div>比较项目</div><div>Prepaid</div><div>Postpaid</div>
          </div>
          {rows.map(([label, prepaid, postpaid]) => (
            <div key={label} className="grid grid-cols-3 gap-3 border-t border-[#D5E5EC] px-4 py-5 text-sm leading-6 sm:px-6">
              <div className="font-black">{label}</div>
              <div className="text-[#526170]">{prepaid}</div>
              <div className="text-[#526170]">{postpaid}</div>
            </div>
          ))}
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-black sm:text-3xl">4 个常见误区</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {myths.map(([title, answer]) => (
              <article key={title} className="rounded-2xl border border-[#D5E5EC] bg-white p-5">
                <CircleHelp className="text-[#2786A5]" size={22} />
                <h3 className="mt-3 font-black">{title}</h3>
                <p className="mt-2 leading-7 text-[#526170]">{answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <CheckCircle2 className="text-[#246B95]" size={28} />
          <h2 className="mt-4 text-2xl font-black">怎么决定下一步</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href="/cellphone/prepaid" className="rounded-2xl bg-white p-5 font-bold text-[#246B95]">
              想判断 Prepaid 是否适合 → 使用场景指南
            </Link>
            <Link href="/cellphone/family-plan-guide" className="rounded-2xl bg-white p-5 font-bold text-[#246B95]">
              家庭多线 → 家庭计划判断
            </Link>
            <Link href="/cellphone/diagnosis" className="rounded-2xl bg-white p-5 font-bold text-[#246B95]">
              有具体问题 → 手机问题诊断
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">哪些内容必须按当前账户核实？</h2>
          <p className="mt-3 leading-7 text-[#526170]">
            具体价格、信用与身份要求、网络优先级、设备分期、Promotion、Bill Credit、多线资格和国际使用条件都可能变化。
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white hover:bg-[#103B60]">
            需要时进入人工核实
            <ArrowRight size={18} />
          </Link>
        </section>

        <p className="py-8 text-center text-xs leading-6 text-[#526170]">
          最后更新：2026年10月｜账户资格、价格、设备优惠和网络政策可能随运营商规则变化，请以当前计划与实际账户为准。
        </p>
      </div>
    </main>
  );
}

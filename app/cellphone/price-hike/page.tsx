import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Layers3,
  ShieldCheck,
  Users,
} from 'lucide-react';

const pageUrl = 'https://oceanver.com/cellphone/price-hike';

export const metadata: Metadata = {
  title: { absolute: '手机套餐涨价了，要留、改还是换？｜美国鸿达电讯' },
  description:
    '手机套餐涨价时，先区分基础月费、每线费用、AutoPay、Free Line、多线折扣、设备与 Bill Credit，再判断保留旧计划、调整方案或换运营商。',
  alternates: { canonical: pageUrl },
};

const reasons = [
  ['基础月费或每线费用变化', '先比较最近几期账单里的同名 recurring charge，不只看账户总额。'],
  ['AutoPay / Paperless 折扣变化', '付款方式、自动付款状态或账户资格变化，可能让折扣减少或消失。'],
  ['Free Line / 多线折扣变化', '线路数量变化、旧优惠到期或账户结构改变，都可能让剩余线路重新计价。'],
  ['设备分期 / Bill Credit 变化', '设备月供、Trade-in Credit 或 Promotion 停止，可能让“套餐没变”但账单变贵。'],
  ['附加服务、保险、国际功能', '新增 add-on 或长期服务费也会放大家庭总账单。'],
  ['旧计划被调整或迁移', '旧套餐继续保留、转新方案或重新组合线路，都可能影响价格与现有优惠。'],
];

const beforeSwitch = [
  '每条线路当前月费和家庭总账单。',
  '线路数变化后，多线折扣 / Free Line 是否仍成立。',
  '每台设备剩余余额和未发 Bill Credit。',
  'AutoPay / Paperless 当前是否有效。',
  '旧计划上仍保留的 Promotion、账户折扣或其他特殊条件。',
  '新方案是否真的降低长期总成本，而不是只看第一期宣传价格。',
];

const stay = [
  '涨幅主要来自一次性项目，而 recurring 月费没有持续变化。',
  '旧计划虽然变贵，但仍保留重要的多线、设备或账户优惠。',
  '换计划会损失的 Credit 或设备权益大于潜在月费节省。',
  '当前信号、使用体验和总成本仍在可接受范围内。',
];

const compare = [
  '持续月费已经明显上涨，而且不是一次性费用。',
  '多条线路一起涨价，家庭总账单增幅已经超出预算。',
  '原有 Free Line / 多线折扣 / AutoPay 优惠失去后，长期成本明显上升。',
  '旧计划权益已经不适合实际需求，且新方案的完整成本更合理。',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: '手机套餐涨价了，要留、改还是换？',
  description:
    '手机套餐涨价判断页，帮助区分月费、多线折扣、AutoPay、设备分期和 Bill Credit 的变化，再决定是否调整或换运营商。',
  inLanguage: 'zh-CN',
  dateModified: '2026-10-07',
};

export default function CellphonePriceHikePage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="mx-auto max-w-5xl">
        <Link href="/cellphone" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回手机问题中心
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            手机长期涨价判断
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            手机套餐涨价了，是继续留、改现有计划，还是换运营商？
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
            先别把“账单变贵”直接理解成“运营商涨价”。家庭账单可能同时受到每线价格、AutoPay、多线折扣、
            Free Line、设备分期和 Bill Credit 影响。先找出哪一层变了，再决定要不要动方案。
          </p>
        </header>

        <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <div className="flex gap-3">
            <CircleDollarSign className="mt-1 shrink-0 text-[#2786A5]" size={27} />
            <div>
              <h2 className="text-2xl font-black">先确认：到底是哪一项让账单变贵</h2>
              <p className="mt-3 leading-7 text-[#526170]">
                同样是“每月多付了钱”，原因可能完全不同。判断错误，可能会为了一个小变化损失更大的设备 Credit 或家庭折扣。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">常见的 6 类变化</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-[#D5E5EC] bg-white p-5">
                <h3 className="font-black">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#526170]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <div className="flex gap-3">
            <Users className="mt-1 shrink-0 text-[#2786A5]" size={26} />
            <div>
              <h2 className="text-2xl font-black">为什么少一条线，剩下的人反而可能更贵？</h2>
              <p className="mt-3 leading-7 text-[#526170]">
                家庭计划常按线路数、账户结构和特定 Promotion 共同定价。
                当成员退出、免费线消失或账户结构变化时，不能只减去“那一条线原来的价格”，
                剩余线路也可能重新计算。
              </p>
              <Link href="/cellphone/family-plan-guide" className="mt-5 inline-flex font-semibold text-[#164B78] hover:text-[#103B60]">
                继续检查家庭多线结构 →
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black">换新计划以前，至少先核对这 6 件事</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {beforeSwitch.map((item) => (
              <div key={item} className="flex gap-3 rounded-xl bg-white p-4">
                <CheckCircle2 className="mt-1 shrink-0 text-[#246B95]" size={18} />
                <p className="text-sm leading-7 text-[#526170]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
            <Layers3 className="mb-4 text-[#2786A5]" size={27} />
            <h2 className="text-2xl font-black">哪些情况可以先不换？</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[#526170]">
              {stay.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <article className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
            <ShieldCheck className="mb-4 text-[#2786A5]" size={27} />
            <h2 className="text-2xl font-black">哪些情况值得认真比较？</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[#526170]">
              {compare.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black">网页不能替你确认什么？</h2>
          <p className="mt-3 leading-7 text-[#526170]">
            当前多线价格、Free Line / Promotion 是否仍有效、设备融资余额、未发 Bill Credit、
            AutoPay 条件和旧计划迁移后的实际价格，都需要结合真实账户与当前运营商规则确认。
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-5 py-3 font-bold text-white hover:bg-[#103B60]">
            需要准确数字时进入人工核实 <ArrowRight size={16} />
          </Link>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">相关问题继续去哪</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/bill-optimization" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">还没确定哪一项变贵</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">先按账单项目把 recurring 月费、设备、Credit 和一次性收费拆开。</p>
            </Link>
            <Link href="/cellphone/faq/promo-credit-not-received" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">主要是 Trade-in / Bill Credit 不对</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">继续核对订单、设备验收和优惠发放状态。</p>
            </Link>
            <Link href="/cellphone/family-plan-exit-account-holder" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">成员退出后家庭价格变化</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">先处理户主权限、保号和线路退出路径，再重算家庭结构。</p>
            </Link>
            <Link href="/cellphone/providers" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">已经确定值得比较其他方案</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">再比较真实长期成本、设备和转网代价。</p>
            </Link>
          </div>
        </section>

        <p className="mt-10 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜价格、资格、折扣、Free Line、设备与账户结果可能随运营商政策变化，请以当前账户与实际规则为准。
        </p>
      </div>
    </main>
  );
}

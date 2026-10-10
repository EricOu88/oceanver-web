import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileSearch,
  ReceiptText,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

const pageUrl = 'https://oceanver.com/cellphone/faq/promo-credit-not-received';

export const metadata: Metadata = {
  title: { absolute: '手机优惠、Trade-in 或 Bill Credit 还没到账怎么办？｜美国鸿达电讯' },
  description:
    '手机 Trade-in、Bill Credit、转网奖励、AutoPay 折扣或多线优惠没有按预期出现时，先核对订单、设备验收、资格与账单记录，再判断是否需要人工核实。',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '手机优惠、Trade-in 或 Bill Credit 还没到账怎么办？',
    description:
      '先分清是哪一种优惠没出现，再核对订单、设备验收、账户资格和账单记录；网页无法确认后台状态时再进入人工核实。',
    url: pageUrl,
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

const promoTypes = [
  {
    title: 'Trade-in / 换机抵扣',
    text: '重点核对旧设备是否已寄出或交回、设备是否被接收与验收、订单中对应哪条线，以及账单抵扣是否已经开始出现。',
  },
  {
    title: 'Monthly Bill Credit',
    text: '重点核对活动对应的线路、设备融资、套餐条件、已经出现过几期 Credit，以及最近是否改过线路、套餐或设备。',
  },
  {
    title: '转网奖励 / Port-in Reward',
    text: '重点核对号码是否已完成转入、奖励是否需要额外登记、订单或账户是否显示 pending / submitted / completed 等状态。',
  },
  {
    title: 'AutoPay / Paperless 折扣',
    text: '重点核对付款方式、自动付款状态、账单周期和该账户当前是否满足折扣条件，不要只看广告页面。',
  },
  {
    title: '家庭多线 / 账户级优惠',
    text: '重点核对具体适用于哪几条线、是否要求特定账户结构，以及新增、取消或转出线路后账户条件有没有变化。',
  },
];

const checks = [
  '原始订单或 Order Confirmation：优惠名称、设备、线路和当时显示的条件。',
  'Trade-in receipt / tracking / 设备交回凭证：确认旧设备的交付与接收记录。',
  '最近几期账单：逐期记录 Promotion、Credit、设备分期和线路月费。',
  '当前账户中的设备融资与线路状态：确认设备和 Promotion 是否仍对应原线路。',
  '最近是否做过升级、换套餐、付清设备、转网、取消线路或更换付款方式。',
];

const waitSignals = [
  '订单和设备状态仍显示处理中，而且没有出现资格取消、设备拒收或订单异常提示。',
  '账单中已经出现对应 Promotion / Credit，只是尚未完整反映所有项目。',
  '当前线路、设备和账户条件与原订单相比没有发生明显变化。',
];

const verifySignals = [
  '设备已经交回，但账户长期没有对应验收或 Trade-in 状态。',
  '原本已经出现的 Bill Credit 突然停止，且账单没有说明原因。',
  '订单显示的 Promotion 与当前账单完全对不上。',
  '线路、设备、套餐或付款方式变更后，不确定优惠资格是否受到影响。',
  '涉及真实 eligibility、设备验收、reward 后台状态或未发 Credit 余额。',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: '手机优惠、Trade-in 或 Bill Credit 还没到账怎么办？',
  description:
    '帮助判断手机 Trade-in、Bill Credit、转网奖励、AutoPay 或多线优惠没有按预期出现时应先检查什么，以及哪些结果需要结合真实账户核实。',
  inLanguage: 'zh-CN',
  dateModified: '2026-10-07',
};

export default function PromoCreditNotReceivedPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-4xl">
        <Link
          href="/cellphone/faq"
          className="text-sm font-semibold text-[#246B95] transition hover:text-[#103B60]"
        >
          ← 返回手机问题库
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            手机优惠 / Credit 判断
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            Trade-in、Bill Credit 或转网奖励还没到账，先查哪一步？
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
            “优惠没到账”不是一个单一问题。先分清是哪一种优惠，再把订单、设备验收、线路资格和每期账单对起来。
            公开网页不能读取运营商后台，所以不要用广告金额或别人的到账时间推断自己的结果。
          </p>
        </header>

        <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <div className="flex gap-3">
            <FileSearch className="mt-1 shrink-0 text-[#2786A5]" size={27} />
            <div>
              <h2 className="text-2xl font-black">第一步：先确认“没到账”的到底是什么</h2>
              <p className="mt-3 leading-7 text-[#526170]">
                Trade-in、Monthly Bill Credit、转网奖励和 AutoPay 折扣的触发条件不同。
                如果把它们混在一起，很容易误以为“所有优惠都应该同时出现”。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">常见的 5 类优惠</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {promoTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#D5E5EC] bg-white p-5 sm:p-6"
              >
                <CircleDollarSign className="mb-3 text-[#2786A5]" size={24} />
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#526170]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <div className="flex gap-3">
            <ReceiptText className="mt-1 shrink-0 text-[#2786A5]" size={26} />
            <div>
              <h2 className="text-2xl font-black">第二步：把这 5 组记录放在一起看</h2>
              <p className="mt-2 leading-7 text-[#526170]">
                不要只看“总账单有没有变便宜”。真正要看的是原订单和当前账户之间哪里不一致。
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {checks.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-[#246B95]" size={18} />
                <span className="leading-7 text-[#526170]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
            <Clock3 className="mb-4 text-[#2786A5]" size={27} />
            <h2 className="text-2xl font-black">什么时候可以先继续观察？</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[#526170]">
              {waitSignals.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-4 text-sm font-semibold text-[#246B95]">
              这里故意不写固定“几天 / 几个账期”，因为不同活动、订单和账户的处理条件可能不同。
            </p>
          </article>

          <article className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6">
            <ShieldCheck className="mb-4 text-[#2786A5]" size={27} />
            <h2 className="text-2xl font-black">什么时候应该进一步核实？</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[#526170]">
              {verifySignals.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <div className="flex gap-3">
            <Smartphone className="mt-1 shrink-0 text-[#2786A5]" size={26} />
            <div>
              <h2 className="text-2xl font-black">哪些操作先不要急着做？</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#526170]">
                <li>不要因为 Credit 暂时没出现，就先取消原线路或把号码转走。</li>
                <li>不要在没有确认影响前，提前付清设备、改套餐或改账户结构。</li>
                <li>不要只凭公开广告页面判断自己一定符合某个 Promotion。</li>
                <li>不要把一条线路的优惠条件直接套到家庭其他线路上。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black">网页不能替你确认什么？</h2>
          <p className="mt-3 leading-7 text-[#526170]">
            Promotion eligibility、Trade-in 实际验收结果、Reward 后台状态、Upgrade eligibility、
            当前设备余额以及还剩多少未发 Bill Credit，都依赖真实账户和当前运营商后台。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-5 py-3 font-bold text-white transition hover:bg-[#103B60]"
          >
            需要时进入人工核实
            <ArrowRight size={16} />
          </Link>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">相关问题继续去哪</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/cellphone/diagnosis" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">账单或设备问题还没判断清楚</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">回到手机 Diagnosis，从账单、设备或转网现象重新判断。</p>
            </Link>
            <Link href="/cellphone/family-plan-guide" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">家庭多条线都有不同 Credit</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">逐条核对设备、Credit、换机和转网状态，不把全家当成一条线。</p>
            </Link>
            <Link href="/cellphone/providers" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">已经确认值得比较方案</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">优惠与设备状态清楚以后，再比较真实长期成本和转网代价。</p>
            </Link>
            <Link href="/bill-optimization" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">账单总额也在变贵</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">把设备、Credit、套餐和其他 recurring charge 一起检查。</p>
            </Link>
          </div>
        </section>

        <p className="mt-10 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与实际活动规则为准。
        </p>
      </div>
    </main>
  );
}

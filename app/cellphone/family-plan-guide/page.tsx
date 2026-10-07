import type { Metadata } from 'next';
import Link from 'next/link';

const pageUrl = 'https://oceanver.com/cellphone/family-plan-guide';

export const metadata: Metadata = {
  title: '家庭计划要不要一起换？家庭多线判断指南｜美国鸿达电讯',
  description:
    '从线路需求、设备分期、Bill Credit 和转网准备判断家庭成员是否适合一起变更。实际价格、资格与账户状态需结合当前账户核实。',
  alternates: { canonical: pageUrl },
};

const memberTypes = [
  ['只想降月费，不换手机', '先看账单变化来自月费、设备、抵扣还是一次性项目。'],
  ['想换手机，但只有部分成员需要', '区分需要换机的线路与可以继续使用现有设备的线路。'],
  ['全家都准备换运营商', '逐条确认号码、账户资料和设备状态，不默认所有线路同一天操作。'],
  ['有人仍有设备分期', '记录对应线路的剩余设备余额，并核对提前变更的影响。'],
  ['有人仍在拿 Promotion / Bill Credit', '确认抵扣是否仍在发、适用哪条线，以及变更后可能发生什么。'],
  ['有人暂时不能转号', '单独标记账户、Transfer PIN、号码状态或解锁条件未确认的线路。'],
  ['有人主要用于国际 / 回国', '单独核对收短信、漫游、Wi-Fi Calling、双卡和长期保号需求。'],
];

const reviewItems = [
  '实际多线价格和当前套餐层级',
  'Promotion、Trade-in 与 Upgrade eligibility',
  '每条线路的设备余额和 Monthly Bill Credit 状态',
  '号码 Port status、IMEI 兼容性与 Unlock 状态',
  '当前活动条件及账户后台显示',
];

const transferItems = [
  '每条线路当前使用的号码，以及号码是否仍 active',
  '对应账户的 Account Number 和 Transfer PIN',
  '手机是否已解锁，IMEI 是否兼容目标网络',
  '设备余额、未完成的 Promotion / Bill Credit',
  '这条线路是否准备现在转出，还是应暂时保持不变',
];

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: '家庭计划要不要一起换？先把每条线的情况分清楚',
  description: '家庭多线变更判断指南，说明逐条核对线路需求、设备分期、账单抵扣和转网条件的思路。',
  inLanguage: 'zh-CN',
};

export default function FamilyPlanGuidePage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <div className="mx-auto max-w-4xl">
        <Link href="/cellphone" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回手机问题
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            家庭多线判断
          </p>
          <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            家庭计划要不要一起换？先把每条线的情况分清楚
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
            家庭计划不能只看“每条线多少钱”。真正要看的是一共有几条线、哪些人需要换手机、哪些设备还在分期、哪些线路还在拿 Bill Credit、是否所有号码都需要一起转，以及当前总账单为什么变化。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/cellphone/diagnosis" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#164B78] px-5 font-bold text-white transition hover:bg-[#103B60]">
              先判断家庭多线问题
            </Link>
            <Link href="/cellphone/providers" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#D5E5EC] bg-white px-5 font-bold text-[#164B78] transition hover:bg-[#F4F8FA]">
              已经确定要比较方案
            </Link>
          </div>
        </header>

        <div className="space-y-8">
          <section className="rounded-2xl border border-[#D5E5EC] bg-white p-5 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">家庭计划最容易看错的地方</h2>
            <p className="mt-4 leading-7 text-[#526170]">
              把总月费简单除以线路数，可能会掩盖成员之间的设备、抵扣和转网状态差异。比较前应先看清每条线现在承担什么费用、享有什么抵扣、是否适合同时变更；实际多线价格要按当前账户和方案核实。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">先把家庭成员分成几类</h2>
            <p className="mt-3 leading-7 text-[#526170]">
              家庭计划的关键不是所有人同时行动，而是每条线现在处于什么状态。
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {memberTypes.map(([title, description]) => (
                <article key={title} className="rounded-2xl border border-[#D5E5EC] bg-white p-5">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#526170]">{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-2xl border border-[#D5E5EC] bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">哪些情况适合一起换</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-[#526170]">
                <li>多条线都没有未确认的设备余额。</li>
                <li>没有重要的未发完 Bill Credit，或已核对变更影响。</li>
                <li>多数成员都准备在相近时间换运营商。</li>
                <li>新方案的实际多线价格已经按当前条件核实。</li>
                <li>每个号码的转网资料都已准备好。</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-[#246B95]">一起换是否合适，仍取决于每条线路的条件。</p>
            </article>
            <article className="rounded-2xl border border-[#D5E5EC] bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">哪些情况先不要一起换</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-[#526170]">
                <li>某条线仍有设备余额或长期账单抵扣。</li>
                <li>只有一两个人需要新手机，其他成员并不需要变更。</li>
                <li>有人尚未准备好 Account Number、Transfer PIN 或解锁条件。</li>
                <li>新方案的实际多线价格或资格还没核实。</li>
                <li>家庭成员的信号、国际使用或设备需求差异较大。</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-[#246B95]">不一定所有线路都要在同一天变更。</p>
            </article>
          </section>

          <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 sm:p-8">
            <h2 className="text-2xl font-bold">设备分期和 Bill Credit 怎么影响决定</h2>
            <p className="mt-4 leading-7 text-[#526170]">
              手机“免费”或 Trade-in 优惠不能脱离对应线路、设备余额和账单抵扣单独判断。提前转出、升级或调整账户是否影响后续 Credit，要看当前订单、账户状态与活动条款；具体周期和资格需以当前账户与实际活动规则为准。
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-[#526170]">
              <li>哪条线有设备分期，剩余设备余额是多少。</li>
              <li>哪条线有 Promotion / Bill Credit，抵扣是否仍在发放。</li>
              <li>变更线路、账户或设备后，哪些抵扣可能受到影响。</li>
            </ul>
            <Link
              href="/cellphone/faq/promo-credit-not-received"
              className="mt-5 inline-flex font-semibold text-[#164B78] hover:text-[#103B60]"
            >
              Trade-in / Bill Credit 还没到账？继续检查 →
            </Link>
          </section>

          <section className="rounded-2xl border border-[#D5E5EC] bg-white p-5 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">转网前，每条线需要检查什么</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-[#526170]">
              {transferItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-5 rounded-xl bg-[#F4F8FA] p-4 font-semibold leading-7 text-[#202D3A]">
              号码完全转移成功前，不要主动取消旧号码。
            </p>
          </section>

          <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 sm:p-8">
            <h2 className="text-2xl font-bold">这些数字需要结合实际账户确认</h2>
            <p className="mt-4 leading-7 text-[#526170]">
              网页可以帮助判断家庭计划应该怎么分析，但以下信息必须结合当前账户核实：
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-[#526170]">
              {reviewItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#164B78] px-5 font-bold text-white transition hover:bg-[#103B60]">
              需要准确数字时进入人工核实
            </Link>
          </section>

          <section className="rounded-2xl border border-[#D5E5EC] bg-white p-5 sm:p-8">
            <h2 className="text-2xl font-bold">下一步去哪</h2>
            <p className="mt-3 leading-7 text-[#526170]">
              还不知道为什么账单变贵、是否应该全家一起换，或哪些线路暂时不能动？先回到诊断；已经明确要比较其他方案，再进入运营商比较。
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 font-semibold">
              <Link href="/cellphone/diagnosis" className="text-[#164B78] hover:text-[#103B60]">返回手机问题诊断 →</Link>
              <Link href="/cellphone/providers" className="text-[#164B78] hover:text-[#103B60]">比较其他手机方案 →</Link>
            </div>
          </section>
        </div>

        <p className="mt-10 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜套餐、资格、设备优惠及账户结果可能随运营商政策变化，请以当前账户与实际活动规则为准。
        </p>
      </div>
    </main>
  );
}

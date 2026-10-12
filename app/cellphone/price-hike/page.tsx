import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  ShieldCheck,
  Users,
} from 'lucide-react';

const pageUrl = 'https://oceanver.com/cellphone/price-hike';

export const metadata: Metadata = {
  title: { absolute: '现有手机账单涨价排查｜多线折扣、设备分期与抵扣｜美国鸿达电讯' },
  description:
    '本页帮助现有手机用户区分套餐月费、线路折扣、设备分期、Bill Credit 与附加服务变化。不同运营商和账户的处理条件不同，应核对当前账单后再行动。',
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

const evidenceBranches = [
  {
    title: '基础月费变高',
    check: '对比同一条线路最近两期的套餐月费与账户通知。',
    caution: '不能只看家庭总额就认定每条线路都涨价。',
  },
  {
    title: 'AutoPay / Paperless 折扣消失',
    check: '核对付款方式、无纸账单设置、折扣资格及生效账期。',
    caution: '恢复设置不代表旧账期折扣一定会补发。',
  },
  {
    title: '家庭成员减线后反而更贵',
    check: '重算剩余线路的多线价格、Free Line 与账户优惠。',
    caution: '减去一条线不一定等于减去它原来的月费。',
    href: '/cellphone/family-plan-guide',
    action: '继续检查家庭计划结构',
  },
  {
    title: 'Trade-in / Bill Credit 减少',
    check: '核对设备订单、分期账单、抵扣名称及发放状态。',
    caution: '不要在确认未发抵扣前贸然升级或取消线路。',
    href: '/cellphone/faq/promo-credit-not-received',
    action: '继续检查优惠抵扣',
  },
  {
    title: '设备分期或附加服务增加',
    check: '分开比较手机月供、保险、国际功能和其他附加项目。',
    caution: '设备费增加不一定代表套餐本身涨价。',
  },
  {
    title: '准备退出家庭计划',
    check: '先确认户主权限、转号资料、设备余额和剩余抵扣。',
    caution: '需要保留号码时，不要先主动关闭原号码。',
    href: '/cellphone/family-plan-exit-account-holder',
    action: '继续核对户主权限和退出路径',
  },
];

const promotionExpiryChecklist = [
  {
    title: '第一步：确认是优惠结束，还是账单项目变化',
    detail: '找出最近三期账单中同一条线路的套餐费、Promotion / Bill Credit、AutoPay 折扣及设备月供，记录第一次变化的账期。',
  },
  {
    title: '第二步：判断优惠还能否恢复',
    detail: '查找原活动名称、优惠起止时间、设备分期及资格通知。不要把设备抵扣期满、活动资格失效和账单错误当成同一件事。',
  },
  {
    title: '第三步：比较留、改、换的真实成本',
    detail: '分别核对保留现有计划、调整套餐和跨网转出的费用变化；设备尾款、可能失去的抵扣及一次性费用由人工结合实际账户确认。',
  },
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
    <main className="compact-page min-h-screen bg-[#FCFDFE] px-4 py-4 text-[#202D3A] sm:px-6 sm:py-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="mx-auto max-w-5xl">
        <nav aria-label="页面返回导航" className="page-nav-row">
            <Link href="/" className="page-nav-button">← 返回首页</Link>
            <Link href="/cellphone" className="page-nav-button">
          ← 返回手机问题中心
        </Link>
          </nav>

        <header className="py-4 sm:py-6">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            手机长期涨价判断
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              现有手机账单涨价：核对多线折扣与设备抵扣
            </h1>
            <section data-page-answer className="best-answer speakable-summary mt-6 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 text-[#202D3A]">
              <h2 className="text-lg font-bold">直接结论</h2>
              <p className="mt-3 leading-7">手机账单变贵时先检查每条线：套餐月费、多线折扣、设备分期、Bill Credit 和附加服务。少一条线不等于只减掉它的费用，剩余线路可能重新计价。</p>
              <dl className="mt-4 space-y-3 text-sm leading-7">
                <div><dt className="font-bold">适用条件</dt><dd>适合现有手机账户收费变化、多线优惠或设备抵扣异常；金额和处理权限以实际账户及运营商审核为准。</dd></div>
                <div><dt className="font-bold">下一步</dt><dd className="flex flex-col gap-2 sm:flex-row sm:gap-4"><Link href="/bill-optimization" className="page-nav-button">先找出具体变化项目</Link><Link href="/cellphone/family-plan-guide" className="page-nav-button">涉及多线变动时核对家庭账户</Link></dd></div>
              </dl>
            </section>

            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600"><Link href="https://baymediastar.com/cellphone/att/price-increase" className="font-semibold underline underline-offset-4">已确认是 AT&T 旧计划调整？查看 AT&T 换套餐成本</Link></p>

        </header>

        <section className="py-4">
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
              <Link href="/cellphone/family-plan-guide" className="page-nav-button">
                继续检查家庭多线结构 →
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-4" aria-labelledby="cellphone-evidence-heading">
          <h2 id="cellphone-evidence-heading" className="text-2xl font-black">找到涨价项目后，按证据继续判断</h2>
          <p className="mt-3 leading-7 text-[#526170]">
            对照最近两期账单，先确认具体线路和收费项目，再决定是否需要调整。以下是通用检查方法，不代表已查看你的账户。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {evidenceBranches.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#D5E5EC] bg-white p-5">
                <h3 className="font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#526170]"><strong className="text-[#202D3A]">先检查：</strong>{item.check}</p>
                <p className="mt-2 text-sm leading-7 text-[#526170]"><strong className="text-[#202D3A]">不要直接推断：</strong>{item.caution}</p>
                {item.href && (
                  <Link href={item.href} className="mt-4 inline-flex items-center gap-2 font-semibold text-[#164B78] underline underline-offset-4">
                    {item.action} <ArrowRight size={16} />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="promo-expiry-check" className="mt-4 rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 id="promo-expiry-check" className="text-2xl font-black">手机优惠到期，先检查再决定是否换网</h2>
          <p className="mt-3 leading-7 text-[#526170]">账单变贵不一定代表运营商提高了套餐标价；也可能是限时优惠结束、自动付款折扣失效，或设备月度抵扣减少。</p>
          <ol className="mt-5 space-y-4">
            {promotionExpiryChecklist.map((item, index) => (
              <li key={item.title} className="rounded-xl border border-[#D5E5EC] bg-[#F4F8FA] p-4">
                <h3 className="font-bold">{index + 1}. {item.title.replace(/^第[一二三]步：/, '')}</h3>
                <p className="mt-2 leading-7 text-[#526170]">{item.detail}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 leading-7 text-[#526170]">如果不知道原优惠是否仍有效，应先联系原运营商核对活动编号和资格；不要在确认前取消号码或提前结清设备。</p>
          <Link href="/cellphone/faq/promo-credit-not-received" className="page-nav-button">抵扣没有到账？继续检查原因 →</Link>
        </section>

        <section className="mt-4 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
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

        <section className="mt-4 grid gap-5 md:grid-cols-2">
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

        <section className="mt-4 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black">网页不能替你确认什么？</h2>
          <p className="mt-3 leading-7 text-[#526170]">
            当前多线价格、Free Line / Promotion 是否仍有效、设备融资余额、未发 Bill Credit、
            AutoPay 条件和旧计划迁移后的实际价格，都需要结合真实账户与当前运营商规则确认。
          </p>
          <p className="mt-4 text-sm leading-7 text-[#526170]">
            咨询前建议准备：运营商名称、最近两期账单中发生变化的收费项目、涉及的线路数量，以及设备分期和 Bill Credit 情况。可先遮盖账单中的姓名、地址和账户号码。
          </p>
          <p className="mt-2 text-sm font-semibold leading-7 text-[#526170]">
            请勿在公开评论或网页中提交账户密码、验证码、完整账户号码或 Transfer PIN；需要核验时通过官方或已确认安全的渠道进行。
          </p>
          <Link href="/contact" className="page-nav-button">
            需要准确数字时进入人工核实 <ArrowRight size={16} />
          </Link>
        </section>

        <section className="mt-4 rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
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

        <section aria-labelledby="cellphone-official-sources" className="mt-4 rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 id="cellphone-official-sources" className="text-2xl font-black">官方规则与适用范围</h2>
          <p className="mt-3 text-sm leading-7 text-[#526170]">核实日期：2026年10月11日。以下来源用于核对对应运营商的规则，不代表已经核实你的账户，也不能套用于其他运营商、商业账户或所有旧套餐。最终以当前账单、订单和活动条款为准。</p>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[#526170]">
            <li><a href="https://www.att.com/support/article/my-account/KM1052054/" className="font-semibold text-[#164B78] underline underline-offset-4">AT&T 折扣与设备抵扣说明</a>：部分设备优惠要求保持服务、账户状态和分期条件；取消、升级或提前结清可能影响抵扣，须核对具体活动。</li>
            <li><a href="https://www.att.com/support/article/wireless/KM1045265/" className="font-semibold text-[#164B78] underline underline-offset-4">AT&T 账单责任转移说明</a>：转责任可能改变多线价格与优惠资格，设备分期需按转移规则处理；不能按原平均每线价格估算剩余账单。</li>
            <li><a href="https://www.verizon.com/support/transfer-your-service/" className="font-semibold text-[#164B78] underline underline-offset-4">Verizon 账户间转线说明</a>：不同优惠的可转移性不同，并受接收账户和套餐资格影响；同运营商转责任与跨运营商携号转出分别核实。</li>
          </ul>
        </section>

        <p className="mt-10 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜价格、资格、折扣、Free Line、设备与账户结果可能随运营商政策变化，请以当前账户与实际规则为准。
        </p>
      </div>
    </main>
  );
}

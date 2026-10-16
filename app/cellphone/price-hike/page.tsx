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
  title: { absolute: '美国手机账单为什么涨价？优惠到期、AutoPay 与设备费用排查｜美国鸿达电讯' },
  description:
    '美国手机账单突然变贵？逐项核对优惠到期、套餐月费、AutoPay、税费、附加服务、设备分期与 Bill Credit。可按步骤自查，也可直接联系中文客服协助核对；具体收费以当前账户及运营商规则为准。',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '美国手机账单为什么涨价？优惠到期、AutoPay 与设备费用排查｜美国鸿达电讯',
    description: '美国手机账单突然变贵？逐项核对优惠到期、套餐月费、AutoPay、税费、附加服务、设备分期与 Bill Credit。可按步骤自查，也可直接联系中文客服协助核对；具体收费以当前账户及运营商规则为准。',
    url: pageUrl,
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
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
  {
    title: '税费或附加收费变化',
    check: '对比同一线路、同名税费及附加收费，记录名称、金额和首次变化账期，并向运营商确认收费依据。',
    caution: '税费或附加收费增加，不等于套餐基础月费一定上涨。',
  },
  {
    title: '只有本期账单特别高',
    check: '核对账单中是否列有一次性费用、按比例计费或调整项目，并确认对应服务日期。',
    caution: '本期应付总额增加，不代表以后每月都会按同样金额收费。',
  },
];

const promotionExpiryChecklist = [
  {
    title: '第一步：确认是优惠结束，还是账单项目变化',
    detail: '先对比手头最近两期账单；需要追溯时再查看更早账期。逐项记录套餐费、Promotion / Bill Credit、AutoPay、税费及设备月供的变化。只有一期账单，也可直接向运营商或中文客服询问。',
  },
  {
    title: '第二步：判断优惠还能否恢复',
    detail: '查找原活动名称、优惠起止时间、设备分期及资格通知。不要把设备抵扣期满、活动资格失效和账单错误当成同一件事。',
  },
  {
    title: '第三步：确认后续是否继续收费，以及是否需要更正',
    detail: '记录变化项目、首次生效账期及运营商说明，确认后续是否持续收费、是否需要更正或补发抵扣。如另行考虑调整或转网，再核对设备余额、未发抵扣及一次性费用。',
  },
];

const billChecklist = [
  '每条线路当前月费和家庭总账单。',
  '线路数变化后，多线折扣 / Free Line 是否仍成立。',
  '每台设备剩余余额和未发 Bill Credit。',
  'AutoPay / Paperless 当前是否有效。',
  '旧计划上仍保留的 Promotion、账户折扣或其他特殊条件。',
  '税费、附加服务及一次性项目是否变化，以及各项费用的生效与结束条件。',
];

const stay = [
  '涨幅主要来自一次性项目，而 recurring 月费没有持续变化。',
  '旧计划虽然变贵，但仍保留重要的多线、设备或账户优惠。',
  '换计划会损失的 Credit 或设备权益大于潜在月费节省。',
  '当前信号、使用体验和总成本仍在可接受范围内。',
];

const verificationChecks = [
  '套餐月费增加：核对项目名称、金额、生效日期及运营商通知。',
  '多条线路费用同时变化：分别列出每条线路及账户级收费，避免只比较平均价格。',
  'Free Line、多线或 AutoPay 折扣减少：核对资格、账户结构及折扣适用账期。',
  '旧计划被迁移或调整：核对迁移通知、原有权益和优惠是否受到影响。',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: '美国手机账单涨价原因与核实步骤',
  description:
    '帮助现有美国手机用户核对套餐月费、优惠与多线折扣、AutoPay、税费、附加服务、设备分期和 Bill Credit 的变化，提供自助检查步骤及中文客服协助入口。',
  inLanguage: 'zh-CN',
  dateModified: '2026-10-16',
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
            美国手机账单涨价原因排查
          </p>
          <h1 className="max-w-4xl text-balance text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              现有手机账单涨价：核对多线折扣与设备抵扣
            </h1>
            <p data-page-answer className="best-answer speakable-summary mt-5 leading-7 text-[#526170]">
              手机账单变贵，可能来自优惠到期、套餐月费或多线折扣变化、AutoPay 折扣变化、税费、附加服务，以及设备分期或 Bill Credit 变化。应按具体线路和收费项目核对，区分持续月费与一次性费用；少一条线也可能使剩余线路重新计价。你可以自己检查，也可以直接请中文客服协助，无需先完成自查。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2" aria-label="选择手机账单检查方式">
              <section aria-labelledby="self-check-heading" className="flex flex-col rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 sm:p-6">
                <h2 id="self-check-heading" className="text-xl font-black">自己查</h2>
                <p className="mt-3 flex-1 leading-7 text-[#526170]">按步骤核对手机账单，找出涨价原因。</p>
                <a href="#cellphone-self-check" className="page-nav-button mt-5 min-h-12 justify-center">
                  开始自助检查 <ArrowRight size={16} aria-hidden="true" />
                </a>
              </section>
              <section aria-labelledby="assisted-check-heading" data-contact-location="cellphone_price_hike_hero" className="flex flex-col rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 sm:p-6">
                <h2 id="assisted-check-heading" className="text-xl font-black">客服帮查</h2>
                <p className="mt-3 flex-1 leading-7 text-[#526170]">不想自己查？中文客服协助核对账单，无需先完成自查。</p>
                <div className="mt-5 flex flex-col gap-3">
                  <a href="tel:15108496191" className="page-nav-button min-h-12 justify-center">电话咨询：510-849-6191</a>
                  <Link href="/contact#wechat-qr" data-contact-method="wechat" className="page-nav-button min-h-12 justify-center">微信咨询</Link>
                </div>
              </section>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#526170]">适合现有手机账户收费变化、多线优惠或设备抵扣异常；金额和处理权限以实际账户及运营商审核为准。</p>

        </header>

        <section id="cellphone-self-check" tabIndex={-1} aria-labelledby="cellphone-self-check-heading" className="scroll-mt-24 py-4">
          <h2 id="cellphone-self-check-heading" className="text-3xl font-black">常见的 6 类变化</h2>
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
              <p className="mt-3 text-sm leading-7 text-[#526170]">核实时请同时查看变更前后的线路数、账户优惠及剩余线路价格。</p>
            </div>
          </div>
        </section>

        <section className="mt-4" aria-labelledby="cellphone-evidence-heading">
          <h2 id="cellphone-evidence-heading" className="text-2xl font-black">找到涨价项目后，按证据继续判断</h2>
          <p className="mt-3 leading-7 text-[#526170]">
            可对照手头最近两期账单，确认具体线路、收费项目和首次变化账期；资料不齐也可以直接联系客服。以下是通用检查方法，不代表已查看你的账户。
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
          <h2 id="promo-expiry-check" className="text-2xl font-black">手机优惠到期，怎样确认增加的是哪笔费用？</h2>
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
          <p className="mt-3 text-sm leading-7 text-[#526170]">抵扣异常时，记录活动名称和未到账账期，结合设备订单及运营商说明继续核实。</p>
        </section>

        <section className="mt-4 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black">核实当前账单，先整理这 6 项信息</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {billChecklist.map((item) => (
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
            <h2 className="text-2xl font-black">哪些变化需要进一步核实？</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[#526170]">
              {verificationChecks.map((item) => <li key={item}>{item}</li>)}
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
            可以直接联系中文客服，不必先完成自查或整理好全部账单。如手头有资料，可提供运营商名称、变化的收费项目、线路数量及设备分期和 Bill Credit 情况；分享前请遮盖姓名、地址和账户号码。
          </p>
          <p className="mt-2 text-sm font-semibold leading-7 text-[#526170]">
            请勿在公开评论或网页中提交账户密码、验证码、完整账户号码或 Transfer PIN；需要核验时通过官方或已确认安全的渠道进行。
          </p>
          <p className="mt-4 text-sm leading-7 text-[#526170]">需要帮助时，可使用页面顶部的电话或微信入口；具体收费、资格及处理结果仍以运营商核实为准。</p>
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
            <Link href="https://baymediastar.com/cellphone/att/price-increase" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">仅适用于已确认 AT&T 旧计划调整</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">前往 BayMediaStar 了解 AT&T 调整套餐成本。其他运营商用户可直接使用首屏电话或微信咨询。</p>
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

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  KeyRound,
  PhoneCall,
  ShieldCheck,
  UserRoundCog,
  Users,
} from 'lucide-react';

const pageUrl = 'https://oceanver.com/cellphone/family-plan-exit-account-holder';

export const metadata: Metadata = {
  title: '家庭计划成员想退出、户主失联或想保号怎么办？｜美国鸿达电讯',
  description:
    '家庭计划成员退出、户主失联、保留号码、账单责任转移、无 SSN、异地或离境时，先判断账户角色、号码控制权、设备余额和授权条件，再决定转出、转责任或注销。',
  alternates: { canonical: pageUrl },
};

const paths = [
  {
    title: '我想退出，但要保留原号码',
    text: '先确认自己是不是账户持有人或授权用户、能否取得 Account Number / Transfer PIN、号码是否 active，以及设备是否还有余额或 Promotion。',
  },
  {
    title: '户主失联，成员拿不到账户资料',
    text: '这类问题的关键不是先找新套餐，而是先确认号码控制权、账户授权状态和运营商允许的转移路径。网页无法代替后台身份验证。',
  },
  {
    title: '户主要解散家庭组',
    text: '不要直接把所有线路一起取消。先逐条确认哪些成员要保号、哪些号码可以转出、哪些设备还有余额，以及哪些人需要接收账单责任。',
  },
  {
    title: '不要号码，只想注销线路',
    text: '保号转出和直接取消是两种不同动作。不要为了退出家庭组误操作成取消号码，除非明确不再需要这个号码。',
  },
  {
    title: '没有 SSN / 人在异地或境外',
    text: '身份验证、账单责任转移、开户资格和远程操作条件可能不同。没有 SSN 不代表一定不能处理，也不能保证一定可以远程完成。',
  },
];

const exitDecisionBranches = [
  {
    title: '户主失联，拿不到转号资料',
    check: '确认自己是否是授权用户、号码是否仍有效，以及运营商是否提供经核验的账户恢复或授权流程。',
    caution: '没有户主授权时，不保证能直接获取 Account Number 或 Transfer PIN；不要尝试绕过身份验证。',
    action: '整理账户资料并联系原运营商核实可行路径。',
  },
  {
    title: '户主拒绝配合，但我想保留号码',
    check: '保留与号码使用、付款有关的记录，核对账户登记人和运营商对号码转移的授权要求。',
    caution: '号码长期由你使用，不一定代表你拥有账户管理权；不要先取消旧线。',
    action: '向运营商咨询争议或授权处理渠道，必要时寻求合适的消费者援助。',
  },
  {
    title: '户主同意，成员要带号码离开',
    check: '取得运营商要求的 Account Number、Transfer PIN 和授权，核对号码 active、设备解锁及目标网络兼容性。',
    caution: '不同运营商的转号 PIN 有效期和账户限制可能不同；成功转入前保持原号码有效。',
    action: '确认新服务已准备好后再发起携号转入。',
  },
  {
    title: '留在同一运营商，只想分开付账',
    check: '咨询当前运营商是否支持账单责任转移，以及接收人的资格、设备分期和优惠变化。',
    caution: '同运营商转责任与跨网携号不是同一流程，优惠可能无法原样保留。',
    action: '先核实转责任资格，再决定是否新开独立账户。',
  },
  {
    title: '人在中国或没有 SSN，能否保号退组？',
    check: '核对当前运营商可接受的身份验证方式、远程办理限制和新账户资格。',
    caution: '不能假定境外远程操作或没有 SSN 一定成功，也不能断言一定失败。',
    action: '准备身份及账户资料，请运营商按具体情况确认。',
  },
];

const checks = [
  '你当前是 Account Holder、Authorized User，还是普通家庭成员？',
  '这个号码是否必须保留？如果不保留，是否确定可以直接取消？',
  '是否能取得 Account Number、Transfer PIN 或其他运营商要求的授权资料？',
  '设备是否仍有分期、未发 Bill Credit、Trade-in 或其他 Promotion？',
  '目标是同运营商转责任，还是跨运营商携号转出？',
  '接收新账户的人是否满足当前身份验证、信用或付款要求？',
  '成员是否人在异地或境外，能否完成当前运营商要求的验证步骤？',
];

const dont = [
  '号码完全转移成功前，不要主动取消旧号码。',
  '不要因为户主失联，就反复提交多笔转网或新账户申请。',
  '不要假设“普通家庭成员”一定拥有与户主相同的账户控制权限。',
  '不要先付清设备、改账户结构或取消 Promotion，除非已经确认这些动作的影响。',
  '不要把论坛中某一家运营商、某一年、某一种账户的处理流程当作通用规则。',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: '家庭计划成员想退出、户主失联或想保号怎么办？',
  description:
    '帮助家庭计划成员判断退出、保号、户主失联、账单责任转移、无 SSN 和异地情况下应先检查什么。',
  inLanguage: 'zh-CN',
  dateModified: '2026-10-07',
};

export default function FamilyPlanExitAccountHolderPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="mx-auto max-w-4xl">
        <nav aria-label="页面返回导航" className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="shrink-0 text-sm font-semibold text-[#246B95] hover:text-[#103B60]">← 返回首页</Link>
          <Link href="/cellphone/family-plan-guide" className="shrink-0 text-sm font-semibold text-[#246B95] hover:text-[#103B60]">返回家庭多线判断 →</Link>
        </nav>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            家庭计划退出 / 保号 / 户主权限
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            想退出家庭计划、户主失联或想保留原号码，先判断什么？
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
            家庭计划退出不是单纯“把一条线移出去”。真正需要先判断的是：
            谁控制账户、号码是否要保留、能不能取得转号资料、设备和 Credit 是否还没结束，以及接收新账户的人是否满足当前验证条件。
          </p>
        </header>

        <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <div className="flex gap-3">
            <UserRoundCog className="mt-1 shrink-0 text-[#2786A5]" size={27} />
            <div>
              <h2 className="text-2xl font-black">第一步：先确认你在账户里的角色</h2>
              <p className="mt-3 leading-7 text-[#526170]">
                Account Holder、Authorized User 和普通成员能做的事情可能不同。
                只有先确认账户角色，才知道哪些操作可以自己完成、哪些需要户主授权或运营商后台验证。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">最常见的 5 种情况</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {paths.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
                <Users className="mb-3 text-[#2786A5]" size={24} />
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#526170]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="exit-decision-heading" className="mt-10">
          <h2 id="exit-decision-heading" className="text-2xl font-black">户主失联与保号：按实际情况判断</h2>
          <p className="mt-3 leading-7 text-[#526170]">先区分是否取得户主授权、是否保留原号码，以及要跨网转出还是同网转责任。每一步以当前运营商的账户规则为准。</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {exitDecisionBranches.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#D5E5EC] bg-white p-5">
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#526170]"><strong className="text-[#202D3A]">先核对：</strong>{item.check}</p>
                <p className="mt-2 text-sm leading-7 text-[#526170]"><strong className="text-[#202D3A]">不要直接推断：</strong>{item.caution}</p>
                <p className="mt-2 text-sm leading-7 text-[#526170]"><strong className="text-[#202D3A]">下一步：</strong>{item.action}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/cellphone/faq/family-plan-leave-keep-number" className="text-[#164B78] underline underline-offset-4">退组保号准备 →</Link>
            <Link href="/cellphone/faq/promo-credit-not-received" className="text-[#164B78] underline underline-offset-4">设备分期与抵扣 →</Link>
            <Link href="/contact" className="text-[#164B78] underline underline-offset-4">需要人工核实 →</Link>
          </div>
        </section>

        <section className="rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <div className="flex gap-3">
            <KeyRound className="mt-1 shrink-0 text-[#2786A5]" size={26} />
            <div>
              <h2 className="text-2xl font-black">转出或转责任前，逐项确认这 7 件事</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-[#526170]">
                {checks.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
            <PhoneCall className="mb-4 text-[#2786A5]" size={27} />
            <h2 className="text-2xl font-black">保号转出和直接取消，不是一回事</h2>
            <p className="mt-3 text-sm leading-7 text-[#526170]">
              如果号码还要继续使用，应先完成对应的号码转移流程；如果明确不要号码，才进入取消线路的路径。
              误把“退出家庭组”理解成“先取消号码”，可能让保号变得更困难。
            </p>
          </article>

          <article className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
            <ShieldCheck className="mb-4 text-[#2786A5]" size={27} />
            <h2 className="text-2xl font-black">设备和 Credit 也要单独检查</h2>
            <p className="mt-3 text-sm leading-7 text-[#526170]">
              一条线可以同时涉及号码、设备融资、Trade-in、Bill Credit 和家庭账户折扣。
              能不能把号码移走，不代表这些设备和优惠会自动跟着转移。
            </p>
          </article>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black">这些操作先不要急着做</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#526170]">
            {dont.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">网页不能替你确认什么？</h2>
          <p className="mt-3 leading-7 text-[#526170]">
            当前 Account Holder / Authorized User 权限、Transfer of Billing Responsibility 资格、
            Transfer PIN、号码 port status、SSN / 身份验证要求、设备余额、Promotion 和 Credit 状态，
            都依赖真实账户和运营商当前流程。
          </p>
          <p className="mt-4 text-sm leading-7 text-[#526170]">
            咨询前可先说明运营商、自己是否为户主或授权用户、是否需要保号，以及设备分期情况。请勿在公开评论中提交账户密码、验证码、完整账户号码、Transfer PIN 或身份证明文件；需要核验时请使用官方或已确认安全的渠道。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-5 py-3 font-bold text-white transition hover:bg-[#103B60]"
          >
            需要时进入人工核实 <ArrowRight size={16} />
          </Link>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">相关问题继续去哪</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/cellphone/diagnosis" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">号码已经在转出 / Port 状态异常</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">回到手机 Diagnosis，按号码状态、账户资料和设备条件继续判断。</p>
            </Link>
            <Link href="/cellphone/faq/no-ssn-us-cellphone-internet" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">没有 SSN 或身份验证条件不清楚</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">区分身份验证、信用审核和账户类型，不用绝对化规则判断。</p>
            </Link>
            <Link href="/cellphone/faq/promo-credit-not-received" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">设备或 Promotion 还没结束</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">先确认设备余额、Trade-in 和未发 Bill Credit，再决定什么时候动线路。</p>
            </Link>
            <Link href="/cellphone/providers" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">已经能安全转出，准备比较方案</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">再比较真实多线成本、设备和转网代价。</p>
            </Link>
          </div>
        </section>

        <section aria-labelledby="family-authorization-policy" className="mt-10 rounded-2xl border border-[#D5E5EC] bg-white p-5 sm:p-8">
          <h2 id="family-authorization-policy" className="text-2xl font-bold">运营商官方规则：同网转责任不等于跨网保号</h2>
          <p className="mt-3 leading-7 text-[#526170]">在同一运营商内将线路移到另一个账单账户，通常涉及原账户授权与接收方资格；跨运营商携号转出则需另行核对原运营商的转号资料及安全验证。</p>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#526170]">
            <li><strong>AT&amp;T：</strong>账单责任转移有发起、接受及资格核验步骤。<a href="https://www.att.com/support/article/wireless/KM1045265/" target="_blank" rel="noopener noreferrer" className="ml-1 text-[#164B78] underline">查看官方说明</a></li>
            <li><strong>T-Mobile：</strong>Change of Responsibility 可能影响套餐和优惠，需核对授权及接收要求。<a href="https://www.t-mobile.com/support/account/transfer-account-or-line-ownership" target="_blank" rel="noopener noreferrer" className="ml-1 text-[#164B78] underline">查看官方说明</a></li>
            <li><strong>Verizon：</strong>账户 Owner/Manager 的权限与接收方资格需要核实。<a href="https://www.verizon.com/support/transfer-your-service/" target="_blank" rel="noopener noreferrer" className="ml-1 text-[#164B78] underline">查看官方说明</a></li>
          </ul>
          <p className="mt-4 leading-7 text-[#526170]">如果户主失联或拒绝配合，不能保证普通成员能自行取得转号 PIN。先联系原运营商咨询合法授权或账户恢复路径；保号转出完成前，不要主动取消旧号码。</p>
        </section>

        <p className="mt-10 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜账户角色、号码转移、身份验证、设备与优惠规则可能随运营商和账户不同，请以当前账户与官方流程为准。
        </p>
      </div>
    </main>
  );
}

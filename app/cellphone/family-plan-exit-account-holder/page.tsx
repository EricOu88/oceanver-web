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
        <Link href="/cellphone/family-plan-guide" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回家庭多线判断
        </Link>

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

        <p className="mt-10 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜账户角色、号码转移、身份验证、设备与优惠规则可能随运营商和账户不同，请以当前账户与官方流程为准。
        </p>
      </div>
    </main>
  );
}

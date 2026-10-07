import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  KeyRound,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  UserRoundCog,
  Users,
} from 'lucide-react';

const pageUrl = 'https://oceanver.com/cellphone/faq/family-plan-leave-keep-number';

export const metadata: Metadata = {
  title: 'Family Plan 成员怎么退出、保号或转到自己名下？｜美国鸿达电讯',
  description:
    '家庭手机计划成员想退出、保留号码、转到自己账户或转去其他运营商时，先判断户主权限、号码状态、设备余额、Transfer PIN、身份核验和是否能联系户主。',
  alternates: { canonical: pageUrl },
};

const paths = [
  {
    title: '保留号码，留在同一家运营商',
    text: '重点是确认当前号码是否可以从原家庭账户转到新的个人或其他账户，以及新账户是否满足身份、信用和账户资格要求。',
  },
  {
    title: '保留号码，转去其他运营商',
    text: '重点是号码仍 active、账户资料完整、Transfer PIN / Account Number 可取得、设备已解锁且设备余额和未发 Credit 已核对。',
  },
  {
    title: '不要这个号码，只想退出',
    text: '重点是确认谁有权限取消线路、设备余额或其他账户责任是否仍存在，以及取消后 Final Bill 如何结算。',
  },
  {
    title: '人在境外，想远程保号或退出',
    text: '重点是能否登录账户、能否取得户主授权和必要账户资料，以及目标方案是否支持你当前所在地完成操作。',
  },
];

const checks = [
  '你是 Account Owner / 户主，还是普通成员？',
  '这个号码需要保留，还是可以直接注销？',
  '目标是留在同一家运营商，还是携号转去别家？',
  '设备是否仍有分期、剩余余额或尚未发完的 Bill Credit？',
  '能否联系到户主，并取得必要授权或账户资料？',
  '号码当前是否 active，设备是否已解锁？',
  '如果要建立新账户，是否涉及身份、信用或 SSN 等资格核验？',
  '成员是否在美国境内，还是需要远程处理？',
];

const dont = [
  '号码还没成功转出或转责任前，不要先让旧账户直接取消这条线。',
  '不要因为自己一直在使用这个号码，就默认自己拥有全部账户权限。',
  '不要在没核对设备余额和 Bill Credit 前，先付清设备或直接转网。',
  '不要假设“没有 SSN”就一定不能接收线路，也不要假设一定可以；要看目标账户和运营商当前规则。',
  '不要只停 AutoPay 来代替正式退出或取消，账单责任和线路状态可能仍然存在。',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: 'Family Plan 成员怎么退出、保号或转到自己名下？',
  description:
    '家庭计划成员退出、保号、同运营商转责任或跨运营商携号时的判断指南。',
  inLanguage: 'zh-CN',
  dateModified: '2026-10-07',
};

export default function FamilyPlanLeaveKeepNumberPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-4xl">
        <Link
          href="/cellphone/family-plan-guide"
          className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]"
        >
          ← 返回家庭多线判断
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            Family Plan 退组 / 保号
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            我不是户主，怎么退出 Family Plan，又不丢号码？
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
            这类问题不能只问“能不能退组”。真正要先判断的是：
            <strong className="text-[#202D3A]">
              号码要不要保留、谁有账户权限、设备还有没有余额，以及你是留在原运营商还是携号转走。
            </strong>
          </p>
        </header>

        <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <div className="flex gap-3">
            <UserRoundCog className="mt-1 shrink-0 text-[#2786A5]" size={27} />
            <div>
              <h2 className="text-2xl font-black">第一步：先分清“号码使用者”和“账户控制者”</h2>
              <p className="mt-3 leading-7 text-[#526170]">
                你一直使用某个号码，不代表你一定拥有账户后台权限。家庭计划通常还有 Account Owner、
                Authorized User、普通成员等不同角色；具体权限要看当前运营商和账户设置。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">先回答这 8 个问题</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {checks.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-[#D5E5EC] bg-white p-5">
                <CheckCircle2 className="mt-1 shrink-0 text-[#246B95]" size={18} />
                <p className="leading-7 text-[#526170]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black">你真正要走的是哪一条路？</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {paths.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#D5E5EC] bg-white p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F8FA] font-black text-[#164B78]">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#526170]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <div className="flex gap-3">
            <KeyRound className="mt-1 shrink-0 text-[#2786A5]" size={26} />
            <div>
              <h2 className="text-2xl font-black">户主失联时，真正卡在哪里？</h2>
              <p className="mt-3 leading-7 text-[#526170]">
                常见障碍不是“号码不能转”，而是缺少账户资料、授权、Transfer PIN、
                Account Number 或身份验证。不同运营商对普通成员能做什么、必须由谁授权，规则不同。
              </p>
              <p className="mt-3 leading-7 text-[#526170]">
                如果户主完全无法联系，网页无法替你判断后台是否存在其他验证或账户恢复路径，
                需要按真实运营商账户状态核实。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6">
            <Smartphone className="mb-4 text-[#2786A5]" size={27} />
            <h2 className="text-2xl font-black">设备余额和 Bill Credit 为什么重要？</h2>
            <p className="mt-3 text-sm leading-7 text-[#526170]">
              号码能不能转出，和设备分期是否结清、未发 Credit 是否受影响，是不同问题。
              变更线路前要把设备融资与 Promotion 单独核对，避免为了保号却产生新的设备成本。
            </p>
            <Link
              href="/cellphone/faq/promo-credit-not-received"
              className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]"
            >
              检查设备与 Credit
              <ArrowRight size={16} />
            </Link>
          </article>

          <article className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6">
            <ShieldCheck className="mb-4 text-[#2786A5]" size={27} />
            <h2 className="text-2xl font-black">没有 SSN 怎么判断？</h2>
            <p className="mt-3 text-sm leading-7 text-[#526170]">
              没有 SSN 不应该直接等于“不能接收线路”。要区分身份验证、信用审核、账户类型和目标运营商的当前要求。
            </p>
            <Link
              href="/cellphone/faq/no-ssn-us-cellphone-internet"
              className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]"
            >
              查看无 SSN 资格判断
              <ArrowRight size={16} />
            </Link>
          </article>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <PhoneCall className="mb-4 text-[#2786A5]" size={27} />
          <h2 className="text-2xl font-black">这些操作先不要急着做</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#526170]">
            {dont.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black">网页不能替你确认什么？</h2>
          <p className="mt-3 leading-7 text-[#526170]">
            Account Owner / Authorized User 权限、Transfer PIN、号码 Port status、
            设备余额、Bill Credit、目标账户身份/信用资格、境外操作限制和后台例外处理，
            都必须结合真实账户和当前运营商规则确认。
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
            <Link href="/cellphone/family-plan-guide" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">全家多条线一起调整</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">逐条核对设备、Credit、成员需求和转网状态。</p>
            </Link>
            <Link href="/cellphone/diagnosis" className="rounded-xl border border-[#D5E5EC] p-4 hover:border-[#246B95]">
              <h3 className="font-black">号码、转网或账户问题还没分清</h3>
              <p className="mt-1 text-sm leading-6 text-[#526170]">回到手机 Diagnosis，从号码状态和账户现象继续判断。</p>
            </Link>
          </div>
        </section>

        <p className="mt-10 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜账户权限、转责任、携号转网、身份核验与设备融资规则可能随运营商变化，请以当前账户与官方规则为准。
        </p>
      </div>
    </main>
  );
}

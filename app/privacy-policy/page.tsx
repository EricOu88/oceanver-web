import type { Metadata } from 'next';
import Link from 'next/link';
import CommunityDiscussionByPath from '@/app/components/community/CommunityDiscussionByPath';

export const metadata: Metadata = {
  title: '隐私政策｜美国鸿达电讯',
  description:
    '美国鸿达电讯隐私政策。说明 Oceanver 在网站与人工核实过程中如何收集、使用和保护用户信息。',
  alternates: {
    canonical: 'https://oceanver.com/privacy-policy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-6 py-12 text-[#202D3A]">
        <Link href="/" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回首页
        </Link>

        <h1 className="mt-8 text-3xl font-extrabold">隐私政策（Privacy Policy）</h1>
        <p className="mb-8 mt-3 text-sm text-[#526170]">最后更新：2026年10月</p>

        <section className="space-y-6 leading-8 text-[#526170]">
          <p>
            美国鸿达电讯（以下简称“我们”）重视用户隐私与个人信息保护。本政策说明 Oceanver 网站以及后续人工核实过程中可能涉及的信息类型和使用方式。
          </p>

          <h2 className="text-xl font-bold text-[#202D3A]">我们可能收集的信息</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>用户主动提供的姓名、电话、微信等联系方式。</li>
            <li>用户提交的问题、留言以及为核实问题主动提供的相关资料。</li>
            <li>基础网站访问数据，用于改善页面与问题导航。</li>
          </ul>

          <h2 className="text-xl font-bold text-[#202D3A]">信息的使用方式</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>回应手机、宽带、账单、账户或资格相关问题。</li>
            <li>在用户主动进入人工核实时，核对其提供的相关条件。</li>
            <li>改进网站内容、问题分类和服务体验。</li>
            <li>不以出售个人信息作为业务模式。</li>
          </ul>

          <h2 className="text-xl font-bold text-[#202D3A]">请不要发送这些敏感信息</h2>
          <p>
            在普通留言、微信或短信中，请不要发送密码、完整 SSN、银行卡完整号码、安全问题答案或其他不必要的敏感凭证。
            如需提供账单或账户截图，请尽量遮挡完整账号、完整地址、条码和其他与问题无关的信息。
          </p>

          <h2 className="text-xl font-bold text-[#202D3A]">联系我们</h2>
          <p>如对隐私或信息处理有疑问，可通过 Oceanver 的人工核实入口联系：510-849-6191。</p>
        </section>
      </main>
      <div className="mx-auto max-w-4xl px-6">
        <CommunityDiscussionByPath />
      </div>
    </>
  );
}

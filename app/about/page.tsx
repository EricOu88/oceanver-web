import type { Metadata } from 'next';
import Link from 'next/link';
import { getCanonicalUrl } from '@/lib/seo-utils';
import CommunityDiscussionByPath from '@/app/components/community/CommunityDiscussionByPath';

export const metadata: Metadata = {
  title: '关于我们｜美国鸿达电讯',
  description:
    '美国鸿达电讯面向美国中文用户整理手机与家庭宽带的账单、网络、设备、账户、地址和变更问题，帮助先判断原因，再决定下一步。',
  alternates: { canonical: getCanonicalUrl('/about') },
};

const AboutSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: '关于我们 - 美国鸿达电讯',
    about: { '@id': 'https://oceanver.com/#organization' },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-[#FCFDFE] px-6 py-12 text-[#202D3A]">
        <AboutSchema />
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm font-semibold text-[#246B95] hover:text-[#164B78]">
            ← 返回首页
          </Link>

          <h1 className="mt-8 text-3xl font-black md:text-4xl">
            关于美国鸿达电讯
          </h1>

          <div className="mt-8 space-y-6 leading-8 text-[#526170]">
            <p>
              Oceanver 的核心不是先推荐某一家运营商，而是帮助美国中文用户把手机和家庭宽带问题先判断清楚。
            </p>

            <p>
              账单变贵、信号或 Wi-Fi 不稳定、设备分期、Trade-in、转号、地址覆盖、安装和搬家，
              往往需要先确认问题发生在哪一层，再决定是继续使用、调整现有服务，还是比较其他方案。
            </p>

            <p>
              因此网站按“问题”组织内容：先进入诊断和知识节点，再根据实际情况进入家庭多线、
              账单检查、运营商比较或其他专项页面。运营商只是解决问题时可能用到的方案之一。
            </p>

            <p>
              有些结果无法靠公开网页确认，例如真实账户价格、当前资格、设备余额、Bill Credit、
              地址 serviceability、订单状态和实时活动条件。遇到这些情况时，再进入人工核实。
            </p>

            <p>
              站内内容用于帮助理解和判断，不代表运营商官方，也不会用固定旧价格、旧促销或单一案例替代当前账户与官方规则。
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/cellphone" className="font-bold text-[#164B78] hover:text-[#103B60]">
              手机问题中心 →
            </Link>
            <Link href="/internet" className="font-bold text-[#164B78] hover:text-[#103B60]">
              宽带问题中心 →
            </Link>
            <Link href="/bill-optimization" className="font-bold text-[#164B78] hover:text-[#103B60]">
              账单问题判断 →
            </Link>
          </div>
        </div>
      </main>
      <div className="mx-auto max-w-4xl px-6">
        <CommunityDiscussionByPath />
      </div>
    </>
  );
}

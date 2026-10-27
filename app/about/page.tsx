import type { Metadata } from 'next';
import Link from 'next/link';
import { getCanonicalUrl } from '@/lib/seo-utils';
import CommunityDiscussionByPath from '@/app/components/community/CommunityDiscussionByPath';

export const metadata: Metadata = {
  title: '关于 Oceanver｜美国手机与宽带问题判断',
  description:
    'Oceanver 由美国鸿达电讯（Bay Media Star Inc.）团队运营，帮助中文用户理解通信账单变化、网络和账户问题，以及调整服务前需要核实的条件。',
  alternates: { canonical: getCanonicalUrl('/about') },
};

const AboutSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: '关于 Oceanver｜美国手机与宽带问题判断',
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
      <main className="compact-page min-h-screen bg-[#FCFDFE] px-6 py-4 text-[#202D3A]">
        <AboutSchema />
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="page-nav-button">
            ← 返回首页
          </Link>

          <h1 className="mt-8 text-3xl font-black md:text-4xl">
            关于 Oceanver
          </h1>

          <p className="mt-3 text-sm text-[#526170]">页面更新：2026年10月26日</p>

          <a
            href="https://www.google.com/search?hl=zh-CN&amp;gl=us&amp;q=%E7%BE%8E%E5%9B%BD%E9%B8%BF%E8%BE%BE%E7%94%B5%E8%AE%AF+(Bay+Media+Star)46292+Warm+Springs+Blvd+%23606,+Fremont,+CA+94539&amp;ludocid=7491769167315326893&amp;lsig=AB86z5XvcsyfCXf381zyps_nU_an#lrd=0x808fc65c7ae0a95f:0x67f81c5d550dd7ad,1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center rounded-md bg-[#164B78] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#103B60] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78]"
          >
            查看 Google 评论 ↗
          </a>

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

          <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 leading-8 text-[#526170]">
            <h2 className="text-xl font-bold text-[#202D3A]">我们与 Bay Media Star 的关系</h2>
            <p className="mt-3">Oceanver 与 Bay Media Star 服务网站同属 Bay Media Star Inc.，由美国鸿达电讯团队运营。Oceanver 侧重账单变化、网络与账户问题的判断；Bay Media Star 侧重手机卡、家庭及商业宽带的覆盖查询、方案核实与办理协助。</p>
            <p className="mt-3">你可以只阅读本站指南，不办理任何业务。需要查询覆盖或咨询办理时，可前往 Bay Media Star；具体条件以运营商审核和办理时核实结果为准。</p>
            <p className="mt-3">Oceanver 问题咨询：<a href="tel:+15108496191" className="font-bold text-[#164B78] underline underline-offset-4">510-849-6191</a></p>
            <a href="https://baymediastar.com/about" className="mt-3 inline-block font-bold text-[#164B78] underline underline-offset-4">了解美国鸿达电讯及办理服务 →</a>
          </section>

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

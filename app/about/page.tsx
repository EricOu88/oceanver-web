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
            <p>Oceanver 是一个面向中文用户的美国手机与宽带问题判断网站。我们帮助你查清账单为什么变化、网络或号码问题应该先检查什么，以及更换套餐、设备或运营商前，需要算清哪些成本、核实哪些条件。</p>
            <p>我们关注问题在哪里、是否需要改变，以及改变是否值得。</p>
          </div>

          <section className="mt-8 space-y-5 leading-8 text-[#526170]" aria-labelledby="questions-title">
            <h2 id="questions-title" className="text-xl font-bold text-[#202D3A]">我们主要帮助你判断三类问题</h2>
            <div><h3 className="font-bold text-[#202D3A]">账单为什么变贵？</h3><p>区分优惠到期、折扣变化、设备收费、一次性费用与长期月费变化，了解应该先核对哪些账单项目。</p></div>
            <div><h3 className="font-bold text-[#202D3A]">出了问题，先检查什么？</h3><p>区分网络服务、设备、Wi-Fi、账户和号码状态等方向，整理下一步需要核实的信息。</p></div>
            <div><h3 className="font-bold text-[#202D3A]">改变服务之前，要算清什么？</h3><p>除了新月费，还要考虑设备余额、优惠条件、一次性费用、服务衔接和实际需求，帮助判断是否值得调整服务。</p></div>
          </section>

          <section className="mt-8 leading-8 text-[#526170]">
            <h2 className="text-xl font-bold text-[#202D3A]">如何使用这里的判断指南</h2>
            <p className="mt-3">先对照自己的问题与账单项目，整理发生时间、费用变化、设备和账户状态，再核实相关条件。阅读时请留意页面的适用范围、信息依据和更新日期；不同账户或设备的结果可能不同。</p>
            <p className="mt-3">真实账户价格、优惠资格、设备余额、账单抵扣、地址覆盖和订单状态，需要向运营商或服务人员进一步核实。公开指南不能替代针对具体账户的确认。</p>
          </section>

          <section className="mt-8 leading-8 text-[#526170]">
            <h2 className="text-xl font-bold text-[#202D3A]">使用边界与内容纠错</h2>
            <p className="mt-3">本站内容用于理解问题和准备核实资料，不代表运营商对具体账户、地址或设备作出的确认。如果发现内容与现行规则不一致，可致电本站问题咨询电话，提供对应页面和问题说明。请勿在公开讨论中提供完整账号、转号 PIN 或其他敏感资料。</p>
            <a href="tel:+15108496191" className="mt-3 inline-block font-bold text-[#164B78] underline underline-offset-4">反馈内容问题：510-849-6191</a>
          </section>

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

import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/app/components/home/HeroSection';
import HomeClientWrapper from './HomeClientWrapper';

const HOME_TITLE = '手机、宽带账单怎么又贵了？费用、网络与转号问题判断｜美国鸿达电讯';
const HOME_DESCRIPTION = '手机或宽带账单变贵、网速变慢、设备收费、新地址安装或准备转号换机时，先判断费用、网络、设备、账户与地址发生了什么，再决定是否需要调整或改变方案。';

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: { canonical: 'https://oceanver.com' },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    siteName: '美国鸿达电讯',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

function BillIncreaseReasons() {
  return (
    <section id="bill-increase-reasons" aria-labelledby="bill-increase-reasons-title" className="bg-white px-5 py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-[1120px]">
        <h2 id="bill-increase-reasons-title" className="text-2xl font-black text-[#202D3A] md:text-3xl">为什么账单会突然变贵？</h2>
        <p className="mt-3 font-semibold text-[#202D3A]">常见原因主要有五类：</p>
        <ol role="list" className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-[#526170] marker:font-semibold marker:text-[#2786A5]">
          <li>促销期结束，恢复标准月费</li>
          <li>AutoPay 等折扣失效</li>
          <li>运营商调价或套餐调整</li>
          <li>设备费或附加服务发生变化</li>
          <li>安装、激活、按比例计费等一次性费用</li>
        </ol>
        <p className="mt-4 leading-7 text-[#526170]">先对比最近两期账单中同一服务项目的变化，再判断这次上涨是否会持续。</p>
        <Link href="/bill-optimization" className="mt-3 inline-flex font-semibold text-[#164B78] hover:text-[#103B60]">按顺序核对账单 →</Link>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <main>
        <HeroSection />
        <BillIncreaseReasons />
        <HomeClientWrapper />
      </main>

      <footer className="border-t border-slate-200 bg-[#FCFDFE] py-12 md:py-14">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-6 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">
          <div className="max-w-md">
            <h2 className="text-xl font-bold text-slate-900">美国鸿达电讯</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              帮助美国中文用户看懂手机和宽带账单，判断问题原因与下一步核实方式。内容依据公开规则、已审核问题与常见咨询情境整理。
            </p>
            <p className="mt-4 text-sm text-slate-600">电话：510-849-6191</p>
          </div>

          <div className="border-t border-slate-200 pt-5 sm:border-t-0 sm:pt-0 lg:border-l lg:pl-8">
            <h3 className="text-sm font-semibold text-slate-900">问题判断</h3>
            <ul className="mt-4 space-y-3 text-sm font-medium text-slate-600">
              <li><Link href="/bill-optimization" className="hover:text-blue-700">账单为什么变贵</Link></li>
              <li><Link href="/cellphone/diagnosis" className="hover:text-blue-700">手机问题诊断</Link></li>
              <li><Link href="/internet/diagnosis" className="hover:text-blue-700">宽带问题诊断</Link></li>
              <li><Link href="/internet/price-hike" className="hover:text-blue-700">宽带涨价后怎么判断</Link></li>
            </ul>
          </div>

          <div className="border-t border-slate-200 pt-5 sm:border-t-0 sm:pt-0 lg:border-l lg:pl-8">
            <h3 className="text-sm font-semibold text-slate-900">常见问题与案例</h3>
            <ul className="mt-4 space-y-3 text-sm font-medium text-slate-600">
              <li><Link href="/cellphone/faq" className="hover:text-blue-700">美国手机常见问题</Link></li>
              <li><Link href="/internet/faq" className="hover:text-blue-700">美国宽带常见问题</Link></li>
              <li><Link href="/why-us" className="hover:text-blue-700">真实问题与处理案例</Link></li>
              <li><Link href="/blog" className="hover:text-blue-700">猜你想问</Link></li>
            </ul>
          </div>

          <div className="border-t border-slate-200 pt-5 sm:border-t-0 sm:pt-0 lg:border-l lg:pl-8">
            <h3 className="text-sm font-semibold text-slate-900">关于与联系</h3>
            <ul className="mt-4 space-y-3 text-sm font-medium text-slate-600">
              <li><Link href="/about" className="hover:text-blue-700">关于我们</Link></li>
              <li><Link href="/contact" className="hover:text-blue-700">问题核实与联系</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-700">隐私政策</Link></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1180px] border-t border-slate-200 px-6 pt-5 text-sm text-slate-500">
          © {new Date().getFullYear()} 美国鸿达电讯
        </div>
      </footer>
    </>
  );
}

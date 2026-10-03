import type { Metadata } from 'next';
import Link from 'next/link';
import GenMobileClient from './GenMobileClient';
import GlobalRoamingSection from './GlobalRoamingSection';
import BackToHomeButton from '@/app/components/BackToHomeButton';

export const metadata: Metadata = {
  title: 'Gen Mobile 手机卡申请说明 | 美国鸿达电讯',
  description:
    'Gen Mobile 预付费手机卡申请说明，介绍账户、设备、国际使用和资格条件。价格、可用地区及激活规则会变化，办理前需核实当前条件。',
  alternates: {
    canonical: 'https://oceanver.com/cellphone/genmobile',
  },
};

export default function GenMobilePage() {
  return (
    <main className="min-h-screen bg-white px-4 md:px-6 py-12">
      <BackToHomeButton />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#E60023]">
          Gen Mobile 预付费手机卡套餐（可邮寄中-美）
        </h1>
        <p className="text-center text-gray-600 mb-12">
          在中国也可上网 · 短信 · 拨打美国。
          如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">美国鸿达电讯首页</Link>。
          常见问题如<Link href="/cellphone/faq/prepaid-vs-postpaid" className="text-blue-600 hover:text-blue-700 font-semibold underline">预付费和后付费手机卡有什么区别？</Link>都有详细解答。
        </p>
        <GlobalRoamingSection />
        <GenMobileClient />
      </div>
    </main>
  );
}

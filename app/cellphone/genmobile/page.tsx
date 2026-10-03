import type { Metadata } from 'next';
import Link from 'next/link';
import GenMobileClient from './GenMobileClient';
import GlobalRoamingSection from './GlobalRoamingSection';
import BackToHomeButton from '@/app/components/BackToHomeButton';

export const metadata: Metadata = {
  title: 'Gen Mobile 便宜手机卡申请指南 - 鸿达电信中文办理',
  description:
    'Gen Mobile 便宜手机卡申请指南。预付费手机卡，价格低，国内可激活，适合省钱用户、短期使用者。旧金山湾区 Fremont 实体店中文协助办理，覆盖 San Jose、Milpitas、Cupertino 及全美 50 州。',
  alternates: {
    canonical: 'https://baymediastar.com/cellphone/genmobile',
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
          如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">鸿达电讯 Bay Media Star 首页</Link>。
          常见问题如<Link href="/cellphone/faq/prepaid-vs-postpaid" className="text-blue-600 hover:text-blue-700 font-semibold underline">预付费和后付费手机卡有什么区别？</Link>都有详细解答。
        </p>
        <GlobalRoamingSection />
        <GenMobileClient />
      </div>
    </main>
  );
}

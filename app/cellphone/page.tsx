import type { Metadata } from 'next';
import CellphoneClient from './CellphoneClient';
import { getHreflangAlternates } from '@/lib/hreflang-utils';

/* ===================== SEO Metadata（Server Only） ===================== */
export const metadata: Metadata = {
  title: '湾区华人电话卡与手机方案总览 - 预付费/AT&T家庭/商业 | 鸿达电信',
  description:
    '美国手机卡中文申请中心：鸿达电信为您精选 T-Mobile, AT&T, Ultra Mobile 及 H2O 等主流运营商套餐。支持无信用检查申请，全美顺丰邮寄到家，提供中文激活指导与售后支持，为您彻底解决在美国通讯的所有后顾之忧，信号稳价格优！',
  keywords: [
    '新移民手机卡',
    '留学生手机卡',
    '湾区手机卡',
    '洛杉矶手机卡',
    'Fremont 手机卡',
    '美国手机卡',
    '美国电话卡',
    'AT&T 手机卡',
    'T-Mobile 手机卡',
    'Verizon 手机卡',
    '美国 eSIM',
    '美国预付费手机卡',
    '美国手机卡 中文办理',
    '无 SSN 手机卡',
    '免 SSN 开卡',
    '新移民落地手机卡',
    '留学生 eSIM',
    '湾区 AT&T',
    '洛杉矶 T-Mobile',
    'San Jose 手机卡',
    'Milpitas 手机卡',
    'Cupertino 手机卡',
    'Irvine 手机卡',
    '短期访客手机卡',
    '探亲手机卡',
  ],
  alternates: getHreflangAlternates('/cellphone'),
  openGraph: {
    title: '湾区华人电话卡与手机方案总览 - 预付费/AT&T家庭/商业 | 鸿达电信',
    description:
      '美国手机卡中文申请中心：鸿达电信为您精选 T-Mobile, AT&T, Ultra Mobile 及 H2O 等主流运营商套餐。支持无信用检查申请，全美顺丰邮寄到家，提供中文激活指导与售后支持，为您彻底解决在美国通讯的所有后顾之忧，信号稳价格优！',
    url: 'https://baymediastar.com/cellphone',
    siteName: 'Bay Media Star 鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ===================== Page（Server Component） ===================== */
export default function CellphonePage() {
  return <CellphoneClient />;
}

import type { Metadata } from 'next';
import WhyUsClient from './WhyUsClient';

export const metadata: Metadata = {
  title: '为什么选择鸿达电讯｜湾区本地中文手机卡与宽带服务团队',
  description:
    '介绍鸿达电讯的服务优势：18年经验、湾区 Fremont 本地门店、正规合作渠道与中文售后支持。帮助用户安心办理美国手机卡与宽带，解决账单涨价等问题。',
  alternates: {
    canonical: 'https://baymediastar.com/why-us',
  },
  openGraph: {
    title: '为什么选择鸿达电讯｜湾区本地中文手机卡与宽带服务团队',
    description:
      '介绍鸿达电讯的服务优势：18年经验、湾区本地门店、正规合作渠道与中文售后支持。',
    url: 'https://baymediastar.com/why-us',
    siteName: '鸿达电讯 Bay Media Star',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function WhyUsPage() {
  return <WhyUsClient />;
}

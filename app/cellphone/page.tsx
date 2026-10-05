import type { Metadata } from 'next';

import CellphoneClient from './CellphoneClient';

export const metadata: Metadata = {
  title: '美国手机套餐怎么选？账单、换机、转网先判断 | 美国鸿达电讯',
  description:
    '美国手机套餐中文判断入口。手机账单涨价、想换新手机、准备转网、家庭多线、没有 SSN、预付费或回国使用，先从真实问题开始判断，再决定是否换套餐或运营商。',
  alternates: {
    canonical: 'https://oceanver.com/cellphone',
  },
  openGraph: {
    title: '美国手机套餐怎么选？先从你的实际问题开始 | 美国鸿达电讯',
    description:
      '账单涨价、换手机、换运营商、家庭多线、无 SSN、Prepaid 与国际使用，不需要先懂运营商，先判断自己的情况。',
    url: 'https://oceanver.com/cellphone',
    siteName: '美国鸿达电讯',
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

export default function CellphonePage() {
  return <CellphoneClient />;
}
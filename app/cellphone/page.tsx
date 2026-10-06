import type { Metadata } from 'next';
import CellphoneClient from './CellphoneClient';

export const metadata: Metadata = {
  title: '美国手机问题怎么判断？账单、信号、转网、家庭多线｜美国鸿达电讯',
  description:
    '美国手机问题中文入口。账单变贵、信号差、SIM/eSIM、转网、设备分期、家庭多线、Prepaid 或国际使用，先从真实问题开始判断，再决定是否比较方案。',
  alternates: { canonical: 'https://oceanver.com/cellphone' },
  openGraph: {
    title: '美国手机问题怎么判断？｜美国鸿达电讯',
    description:
      '不先推荐运营商。先判断账单、信号、设备、号码、家庭或国际使用问题，再决定下一步。',
    url: 'https://oceanver.com/cellphone',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function CellphonePage() {
  return <CellphoneClient />;
}

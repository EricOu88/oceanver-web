import type { Metadata } from 'next';

import CellphoneClient from './CellphoneClient';

export const metadata: Metadata = {
  title: '美国手机问题中心｜账单、换机、转网先判断 | 美国鸿达电讯',
  description:
    '美国手机问题中文入口。账单涨价、信号、换手机、转网、家庭多线、没有 SSN、Prepaid 或国际使用，先从真实问题开始判断，再决定是否比较方案或进入人工核实。',
  alternates: {
    canonical: 'https://oceanver.com/cellphone',
  },
  openGraph: {
    title: '美国手机问题中心｜先判断问题，再决定是否换方案',
    description:
      '账单、信号、设备、转号、家庭多线、无 SSN、Prepaid 与国际使用，都先从问题开始判断。',
    url: 'https://oceanver.com/cellphone',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function CellphonePage() {
  return <CellphoneClient />;
}

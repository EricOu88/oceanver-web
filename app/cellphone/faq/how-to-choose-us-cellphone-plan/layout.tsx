import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '美国手机方案怎么选？先判断需求，再比较方案 | 美国鸿达电讯',
  description:
    '先判断使用条件、线路数量、设备状态、信号和账户条件，再决定是否比较 Prepaid、Postpaid、家庭多线或其他方案。',
};

export default function HowToChooseLayout({ children }: { children: ReactNode }) {
  return children;
}

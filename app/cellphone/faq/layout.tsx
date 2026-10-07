import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '美国手机问题库 | 美国鸿达电讯',
  description:
    '按账单、信号、eSIM、转号、设备分期、家庭多线和国际使用等问题继续查，不需要先选择运营商。',
};

export default function FAQLayout({ children }: { children: ReactNode }) {
  return children;
}

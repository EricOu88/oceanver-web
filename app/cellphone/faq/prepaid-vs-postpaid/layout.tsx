import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Prepaid vs Postpaid：美国预付费和后付费怎么选 | 美国鸿达电讯',
  description:
    '从账户结构、设备、家庭多线、国际使用和变更成本理解 Prepaid 与 Postpaid 的区别，不用绝对化规则判断。',
};

export default function PrepaidVsPostpaidLayout({ children }: { children: ReactNode }) {
  return children;
}

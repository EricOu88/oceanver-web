import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Lifeline 政府通信补助资格判断 | 美国鸿达电讯',
  description:
    '按收入、符合条件的政府福利项目、家庭状态和当前服务规则判断 Lifeline。ACP 已结束，不应再按 ACP 申请。',
};

export default function GovernmentLayout({ children }: { children: ReactNode }) {
  return children;
}

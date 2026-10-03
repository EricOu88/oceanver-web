import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'AT&T 手机套餐申请指南 - 鸿达电信中文办理',
  description:
    'AT&T 手机套餐申请指南。预付费、家庭合约计划、商业计划方案对比，覆盖全美，中文客服协助开通，支持 eSIM 即开即用。具体资格、地址和账户条件需以当前运营商规则为准。',
};

export default function ATTLayout({ children }: { children: ReactNode }) {
  return children;
}

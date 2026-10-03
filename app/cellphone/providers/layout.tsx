import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '湾区手机运营商选择指南 | 华人中文 | 鸿达电信',
  description: '湾区华人手机运营商与电话卡选择指南。预付费、家庭合约、商业方案对比，中文服务，东湾南湾北湾覆盖。',
  keywords: [
    '美国手机套餐',
    '手机运营商',
    '预付费',
    '涨价',
    '国际使用',
    '留学生',
    '信号稳定',
    '手机套餐选择',
    '手机运营商对比',
    '预付费手机',
    '手机账单涨价',
    '国际漫游',
    '商务手机套餐',
    '中文手机服务',
    '手机FAQ',
    '手机诊断'
  ],
  openGraph: {
    title: '美国手机套餐选择指南 | 中文协助 | 运营商对比',
    description: '根据信号稳定、国际使用、预付费等使用场景，帮您找到最合适的美国手机套餐方案。',
    type: 'website',
  },
};

export default function ProvidersLayout({ children }: { children: ReactNode }) {
  return children;
}

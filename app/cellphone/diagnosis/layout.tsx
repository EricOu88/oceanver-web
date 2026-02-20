import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '美国手机套餐怎么选？1 分钟诊断适合你的方案 | 鸿达电信',
  description:
    '不知道选哪家美国手机运营商？通过 5 个问题，快速判断适合你的手机套餐类型。信号稳定、国际使用、预付费、商务套餐——找到最适合的方案。',
  keywords: [
    '美国手机套餐',
    '手机套餐诊断',
    '手机运营商选择',
    '手机套餐怎么选',
    '手机诊断工具',
    '信号稳定手机',
    '国际使用手机',
    '预付费手机',
    '商务手机套餐'
  ],
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
  alternates: {
    canonical: 'https://baymediastar.com/cellphone/diagnosis',
  },
  openGraph: {
    title: '美国手机套餐怎么选？1 分钟诊断适合你的方案',
    description: '通过 5 个问题，快速判断适合你的手机套餐类型。',
    type: 'website',
  },
};

export default function DiagnosisLayout({ children }: { children: ReactNode }) {
  return children;
}

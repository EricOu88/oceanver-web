import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '手机 Trade-in 抵扣为什么消失？账单检查指南 | Oceanver',
  description:
    '了解手机 trade-in credit 可能延迟或停止显示的原因，以及如何检查促销名称、设备分期、线路资格和设备状态。具体结果需按账户与促销条款核实。',
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
    canonical: 'https://oceanver.com/cellphone/diagnosis',
  },
  openGraph: {
    title: '手机 Trade-in 抵扣为什么消失？账单检查指南 | Oceanver',
    description: '检查手机 trade-in credit、设备分期、线路资格和促销状态。',
    type: 'website',
  },
};

export default function DiagnosisLayout({ children }: { children: ReactNode }) {
  return children;
}

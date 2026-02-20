import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Prepaid vs Postpaid：美国预付费和后付费手机套餐对比 | 鸿达电信',
  description:
    'Prepaid（预付费）和 Postpaid（后付费）手机套餐有什么区别？哪个更适合你？本文详细对比两种套餐类型，帮你做出正确选择。',
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
};

export default function PrepaidVsPostpaidLayout({ children }: { children: ReactNode }) {
  return children;
}

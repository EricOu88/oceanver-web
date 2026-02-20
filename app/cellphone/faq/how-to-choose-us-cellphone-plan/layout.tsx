import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '美国手机套餐怎么选？新手一篇就懂 | 鸿达电信',
  description:
    '刚到美国不知道选哪家手机套餐？本文帮你快速判断适合你的手机方案类型（Prepaid/Postpaid/Family），并引导智能诊断。先选类型，再选运营商。',
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

export default function HowToChooseLayout({ children }: { children: ReactNode }) {
  return children;
}

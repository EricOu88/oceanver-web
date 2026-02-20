import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '美国手机套餐常见问题 FAQ | 鸿达电信',
  description:
    '美国手机套餐常见问题解答，包括 Prepaid、Postpaid、Family Plan 的区别，如何选择运营商，以及新移民和留学生常见问题。',
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQLayout({ children }: { children: ReactNode }) {
  return children;
}

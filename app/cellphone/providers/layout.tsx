import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '手机方案比较方法 | 美国鸿达电讯',
  description:
    '已经确定要比较手机方案时，按真实账单、设备余额、Bill Credit、家庭多线、信号、国际使用和转网条件判断，不只看广告月费或手机优惠。',
  openGraph: {
    title: '手机方案比较方法 | 美国鸿达电讯',
    description:
      '比较手机方案时，先核对真实账户条件，再判断是否值得更换。',
    type: 'website',
  },
};

export default function ProvidersLayout({ children }: { children: ReactNode }) {
  return children;
}

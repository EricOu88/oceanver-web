import type { Metadata } from 'next';
import PriceHikeClient from './PriceHikeClient';

export const metadata: Metadata = {
  title: '宽带优惠到期后为什么会涨价？原因与换网判断 | 美国鸿达电讯',
  description:
    '了解宽带促销价结束、标准月费恢复、AutoPay 折扣和设备费变化的判断方法，并比较现有服务与新方案的长期成本。',
  alternates: {
    canonical: 'https://oceanver.com/internet/price-hike',
  },
  openGraph: {
    title: '宽带优惠到期后为什么会涨价？原因与换网判断 | 美国鸿达电讯',
    description:
      '检查促销期限、账单折扣、基础月费和一次性费用，再判断是否需要调整宽带方案。',
    url: 'https://oceanver.com/internet/price-hike',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function PriceHikePage() {
  return <PriceHikeClient />;
}

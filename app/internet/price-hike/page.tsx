import type { Metadata } from 'next';
import PriceHikeClient from './PriceHikeClient';

export const metadata: Metadata = {
  title: '美国宽带涨价应对指南｜如何通过账单诊断与换网来省钱',
  description:
    '分析美国常见宽带涨价原因（Xfinity、Spectrum、AT&T），提供账单检查、套餐调整与换网判断建议。具体价格和可选方案以地址、账户资格及运营商审核为准。',
  alternates: {
    canonical: 'https://oceanver.com/internet/price-hike',
  },
  openGraph: {
    title: '美国宽带涨价应对指南｜如何通过账单诊断与换网来省钱',
    description:
      '分析美国常见宽带涨价原因，提供账单诊断、升级/换网建议。帮助用户控制上网费用。',
    url: 'https://oceanver.com/internet/price-hike',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function PriceHikePage() {
  return <PriceHikeClient />;
}

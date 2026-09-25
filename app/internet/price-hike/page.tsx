import type { Metadata } from 'next';
import PriceHikeClient from './PriceHikeClient';

export const metadata: Metadata = {
  title: '美国宽带涨价应对指南｜如何通过账单诊断与换网来省钱',
  description:
    '分析美国常见宽带涨价原因（Xfinity、Spectrum、AT&T），提供账单诊断、升级/换网建议。帮助用户控制上网费用，适合湾区及全美家庭用户，一年可省 $300-$500。',
  openGraph: {
    title: '美国宽带涨价应对指南｜如何通过账单诊断与换网来省钱',
    description:
      '分析美国常见宽带涨价原因，提供账单诊断、升级/换网建议。帮助用户控制上网费用。',
    siteName: '鸿达电讯 Bay Media Star',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function PriceHikePage() {
  return <PriceHikeClient />;
}

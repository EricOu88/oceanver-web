import type { Metadata } from 'next';
import PriceHikeClient from './PriceHikeClient';

const pageUrl = 'https://oceanver.com/internet/price-hike';

export const metadata: Metadata = {
  title: '宽带优惠到期后为什么会涨价？原因与换网判断 | 美国鸿达电讯',
  description:
    '了解宽带促销价结束、标准月费恢复、AutoPay 折扣和设备费变化的判断方法，并比较现有服务与新方案的长期成本。',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '宽带优惠到期后为什么会涨价？原因与换网判断 | 美国鸿达电讯',
    description:
      '检查促销期限、账单折扣、基础月费和一次性费用，再判断是否需要调整宽带方案。',
    url: pageUrl,
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function PriceHikePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: '宽带账单涨价判断',
    description:
      '帮助判断宽带促销到期、基础月费、AutoPay、设备费用和一次性收费变化，并决定是否需要比较其他方案。',
    inLanguage: 'zh-CN',
    dateModified: '2026-10-06',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PriceHikeClient />
    </>
  );
}

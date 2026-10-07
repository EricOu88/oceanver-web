import type { Metadata } from 'next';
import PriceHikeClient from './PriceHikeClient';

const pageUrl = 'https://oceanver.com/internet/price-hike';

export const metadata: Metadata = {
  title: '宽带账单持续涨价怎么办？先判断原因，再决定留、调还是换｜美国鸿达电讯',
  description:
    '宽带账单持续涨价时，先区分 Promotion 到期、基础月费、AutoPay、设备费和一次性收费，再判断继续留用、调整现有方案或比较其他宽带。',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '宽带账单持续涨价怎么办？先判断原因，再决定留、调还是换｜美国鸿达电讯',
    description:
      '检查 Promotion、基础月费、AutoPay、设备费和一次性费用，再判断是继续留用、调整还是比较其他宽带。',
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
    dateModified: '2026-10-07',
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

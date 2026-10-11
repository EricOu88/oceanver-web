import type { Metadata } from 'next';
import PriceHikeClient from './PriceHikeClient';

const pageUrl = 'https://oceanver.com/internet/price-hike';

export const metadata: Metadata = {
  title: { absolute: '现有宽带账单涨价排查｜优惠到期、AutoPay 与设备费｜美国鸿达电讯' },
  description:
    '先判断增加的是持续月费还是一次性费用，再核对优惠结束、AutoPay 和设备收费。整理清楚后，才能判断是否需要调整现有账户或进一步比较其他服务。',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '现有宽带账单涨价排查｜优惠到期、AutoPay 与设备费｜美国鸿达电讯',
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

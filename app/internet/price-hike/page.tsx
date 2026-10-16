import type { Metadata } from 'next';
import PriceHikeClient from './PriceHikeClient';

const pageUrl = 'https://oceanver.com/internet/price-hike';

export const metadata: Metadata = {
  title: { absolute: '美国宽带账单为什么涨价？优惠到期、AutoPay 与设备费排查｜美国鸿达电讯' },
  description:
    '已在使用的美国宽带账单为什么突然变贵？逐项核对优惠到期、基础月费、AutoPay 折扣、设备与附加服务费，区分持续月费和一次性收费，并整理向运营商核实的问题。',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '美国宽带账单为什么涨价？优惠到期、AutoPay 与设备费排查｜美国鸿达电讯',
    description:
      '对比最近两期宽带账单，检查优惠、基础月费、AutoPay、设备及附加收费，确认增加的是持续费用还是一次性项目。',
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
    name: '美国宽带账单涨价原因与核实步骤',
    description:
      '帮助已在使用美国宽带的用户核对优惠到期、基础月费、AutoPay 折扣、设备及附加收费，区分持续月费与一次性费用，并整理需要运营商确认的账单变化。',
    inLanguage: 'zh-CN',
    dateModified: '2026-10-16',
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

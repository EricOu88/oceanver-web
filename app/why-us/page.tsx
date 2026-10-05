import type { Metadata } from 'next';
import WhyUsClient from './WhyUsClient';
import { getPublicCases } from '@/lib/cases/getPublicCases';
import CommunityDiscussionByPath from '@/app/components/community/CommunityDiscussionByPath';

export const metadata: Metadata = {
  title: { absolute: '真实问题与处理案例｜美国手机与宽带问题｜美国鸿达电讯' },
  description:
    '整理美国中文用户常见的手机、宽带、账单、设备、地址覆盖和网络问题案例，说明判断过程、检查方向和何时需要进一步核实。',
  alternates: {
    canonical: 'https://oceanver.com/why-us',
  },
  openGraph: {
    title: '真实问题与处理案例｜美国手机与宽带问题｜美国鸿达电讯',
    description: '整理美国中文用户常见的手机、宽带、账单、设备、地址覆盖和网络问题案例，说明判断过程、检查方向和何时需要进一步核实。',
    url: 'https://oceanver.com/why-us',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default async function WhyUsPage() {
  const cases = await getPublicCases();
  return <>
    <WhyUsClient cases={cases} />
    <div className="mx-auto max-w-6xl px-6">
      <CommunityDiscussionByPath />
    </div>
  </>;
}

import type { Metadata } from 'next';
import XfinityClient from './XfinityClient';
import DynamicFAQSchema from '@/app/components/seo/DynamicFAQSchema';
import InternalLinks from '@/app/components/seo/InternalLinks';
import { getCanonicalUrl } from '@/lib/seo-utils';

// Xfinity 页面专用 FAQ（用于 Schema）
const xfinityFAQs = [
  {
    question: 'Xfinity 宽带可以安装吗？',
    answer: '具体可用性取决于详细地址、线路设施和当前运营商系统结果，不能仅凭城市判断，办理前需查询地址。',
  },
  {
    question: 'Xfinity 宽带优惠期结束后会涨价吗？',
    answer: '促销期限和到期后的价格会随时间、地址、账户和资格变化。办理前应核对当前条款，并在账单变化时重新确认条件。',
  },
  {
    question: 'Xfinity 住家和商业宽带有什么区别？',
    answer: '住家与商业宽带在支持方式、服务条款、IP 和 SLA 等方面可能不同。是否适合要结合地址、账户、设备、线路数量和实际使用判断。',
  },
  {
    question: 'Xfinity 宽带适合新移民和留学生吗？',
    answer: '部分申请可能支持不同身份或账户条件，但不能一概而论。是否可办需核实身份、信用、地址和当前运营商要求。',
  },
  {
    question: 'Xfinity 宽带安装需要多长时间？',
    answer: '安装或自安装时间取决于地址、设备、预约和当前运营商安排，办理前需确认可选方式和费用。',
  },
];

export const metadata: Metadata = {
  title: 'Xfinity 宽带申请指南 - 鸿达电信中文办理',
  description:
    'Xfinity 宽带申请指南。介绍住家与商业方案、地址覆盖查询、优惠期和账单变化。价格、资格、设备与安装条件以当前运营商规则为准。',
  keywords: [
    'Xfinity 宽带',
    'Xfinity 住家宽带',
    'Xfinity 商业宽带',
    '美国宽带',
    '美国宽带',
    '中文宽带申请',
    '宽带涨价',
    '中文办理',
  ],
  alternates: {
    canonical: getCanonicalUrl('/internet/xfinity'),
  },
  openGraph: {
    title: 'Xfinity 宽带申请指南 - 鸿达电信中文办理',
    description:
      '用用户视角讲清：住家 vs 商业怎么选。支持查地址覆盖、对比套餐、处理优惠期涨价。',
    url: getCanonicalUrl('/internet/xfinity'),
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <DynamicFAQSchema questions={xfinityFAQs} />
      <XfinityClient />
      <InternalLinks pageType="provider" providerFAQUrl="/internet/xfinity/faq" />
    </>
  );
}

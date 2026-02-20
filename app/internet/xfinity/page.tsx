import type { Metadata } from 'next';
import XfinityClient from './XfinityClient';
import DynamicFAQSchema from '@/app/components/seo/DynamicFAQSchema';
import InternalLinks from '@/app/components/seo/InternalLinks';
import { getCanonicalUrl } from '@/lib/seo-utils';
import { getSmartHreflangAlternates } from '@/lib/hreflang-utils';

// Xfinity 页面专用 FAQ（用于 Schema）
const xfinityFAQs = [
  {
    question: 'Xfinity 宽带在 Fremont 可以安装吗？',
    answer: '可以。Xfinity 在 Fremont、San Jose、Milpitas 等湾区城市覆盖广泛。我们提供免费地址覆盖查询服务，1 分钟内即可确认您的地址是否支持安装。',
  },
  {
    question: 'Xfinity 宽带优惠期结束后会涨价吗？',
    answer: '会。Xfinity 促销价格通常持续 12 个月，到期后会恢复标准价，涨幅可达 50-150%。我们可以在到期前帮您重新申请优惠或协商价格。',
  },
  {
    question: 'Xfinity 住家和商业宽带有什么区别？',
    answer: '住家宽带价格更便宜，无 SLA 保障，标准技术支持。商业宽带有 SLA 服务保障、静态 IP 地址、优先技术支持，但价格高 30-50%。普通家庭选住家即可。',
  },
  {
    question: 'Xfinity 宽带适合新移民和留学生吗？',
    answer: '适合。Xfinity 支持无 SSN 办理，新移民、留学生都可以申请。我们提供全程中文服务，协助您完成地址查询、套餐选择和安装预约。',
  },
  {
    question: 'Xfinity 宽带安装需要多长时间？',
    answer: '通常预约后 3-7 个工作日可上门安装。如果地址已有 Xfinity 线路，可以选择自安装套件，邮寄 2-5 天即可。我们可协助您预约安装时间。',
  },
];

export const metadata: Metadata = {
  title: 'Xfinity 宽带申请指南 - 鸿达电信中文办理',
  description:
    'Xfinity 宽带申请指南。住家与商业方案对比，地址覆盖查询，优惠期到期涨价处理。旧金山湾区 Fremont 实体店中文协助办理，覆盖 San Jose、Milpitas、Cupertino 及全美 50 州。',
  keywords: [
    'Xfinity 宽带',
    'Xfinity 住家宽带',
    'Xfinity 商业宽带',
    '美国宽带',
    '湾区宽带',
    'Fremont 宽带',
    'Milpitas 宽带',
    '宽带涨价',
    '中文办理',
  ],
  alternates: {
    ...getSmartHreflangAlternates('/internet/xfinity', getCanonicalUrl('/internet/xfinity')),
  },
  openGraph: {
    title: 'Xfinity 宽带申请指南 - 鸿达电信中文办理',
    description:
      '用用户视角讲清：住家 vs 商业怎么选。支持查地址覆盖、对比套餐、处理优惠期涨价。',
    url: getCanonicalUrl('/internet/xfinity'),
    siteName: 'Bay Media Star 鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

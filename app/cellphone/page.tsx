import type { Metadata } from 'next';
import CellphoneClient from './CellphoneClient';
import { getCanonicalUrl } from '@/lib/seo-utils';

/* ===================== SEO Metadata（Server Only） ===================== */
export const metadata: Metadata = {
  title: '美国手机套餐与电话卡选择指南 | 美国鸿达电讯',
  description:
    '面向美国中文用户整理 T-Mobile、AT&T、Ultra Mobile、H2O 等手机套餐与电话卡信息，说明预付费、家庭套餐、eSIM、账单和资格条件。具体方案以运营商政策与账户审核为准。',
  keywords: [
    '新移民手机卡',
    '留学生手机卡',
    '美国手机卡',
    '美国电话卡',
    'AT&T 手机卡',
    'T-Mobile 手机卡',
    'Verizon 手机卡',
    '美国 eSIM',
    '美国预付费手机卡',
    '美国手机卡 中文办理',
    '无 SSN 手机卡',
    '免 SSN 开卡',
    '新移民落地手机卡',
    '留学生 eSIM',
    '短期访客手机卡',
    '探亲手机卡',
  ],
  alternates: { canonical: getCanonicalUrl('/cellphone') },
  openGraph: {
    title: '美国手机套餐与电话卡选择指南 | 美国鸿达电讯',
    description:
      '面向美国中文用户整理 T-Mobile、AT&T、Ultra Mobile、H2O 等手机套餐与电话卡信息，说明预付费、家庭套餐、eSIM、账单和资格条件。具体方案以运营商政策与账户审核为准。',
    url: 'https://oceanver.com/cellphone',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },

};

/* ===================== Page（Server Component） ===================== */
export default function CellphonePage() {
  return <CellphoneClient />;
}

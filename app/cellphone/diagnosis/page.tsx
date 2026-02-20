import type { Metadata } from 'next';
import DiagnosisClient from './DiagnosisClient';

export const metadata: Metadata = {
  title: '账单诊断与省钱方案｜美国手机卡宽带优化服务',
  description:
    '在线提交手机卡或宽带账单，我们帮你对比运营商资费，找出省钱方案。适合湾区及全美中文用户的一对一账单诊断服务，支持无 SSN 办卡。',
  alternates: {
    canonical: 'https://baymediastar.com/cellphone/diagnosis',
  },
  openGraph: {
    title: '账单诊断与省钱方案｜美国手机卡宽带优化服务',
    description:
      '在线提交手机卡或宽带账单，我们帮你对比运营商资费，找出省钱方案。适合湾区及全美中文用户。',
    url: 'https://baymediastar.com/cellphone/diagnosis',
    siteName: '鸿达电讯 Bay Media Star',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function CellphoneDiagnosisPage() {
  return <DiagnosisClient />;
}

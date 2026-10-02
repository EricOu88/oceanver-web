import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: '联系我们｜Fremont 实体店与全美中文服务',
  description:
    '联系美国鸿达电讯，可前往 Fremont 门店、拨打 510-849-6191 或通过微信获得手机与宽带中文一对一服务。',
  alternates: {
    canonical: 'https://oceanver.com/contact',
  },
  openGraph: {
    title: '联系我们｜Fremont 实体店与全美中文服务',
    description:
      '联系美国鸿达电讯，可前往 Fremont 门店、拨打 510-849-6191 或通过微信获得中文一对一服务。',
    url: 'https://oceanver.com/contact',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: { index: false, follow: false },
};

export default function ContactPage() {
  return <ContactClient />;
}

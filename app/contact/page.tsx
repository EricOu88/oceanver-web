import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: { absolute: '问题核实与联系｜美国手机与宽带问题｜美国鸿达电讯' },
  description: '手机或宽带账单、账户、设备、转号、地址覆盖等问题无法仅靠公开信息判断时，可通过微信、电话或短信进一步核实。美国中文服务，电话 510-849-6191。',
  alternates: {
    canonical: 'https://oceanver.com/contact',
  },
  openGraph: {
    title: '问题核实与联系｜美国手机与宽带问题｜美国鸿达电讯',
    description: '手机或宽带账单、账户、设备、转号、地址覆盖等问题无法仅靠公开信息判断时，可通过微信、电话或短信进一步核实。美国中文服务，电话 510-849-6191。',
    url: 'https://oceanver.com/contact',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '问题核实与联系｜美国手机与宽带问题｜美国鸿达电讯',
    description: '手机或宽带账单、账户、设备、转号、地址覆盖等问题无法仅靠公开信息判断时，可通过微信、电话或短信进一步核实。美国中文服务，电话 510-849-6191。',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

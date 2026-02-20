import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { getSmartHreflangAlternates } from '@/lib/hreflang-utils';

export const metadata: Metadata = {
  title: '联系我们｜Fremont/Milpitas 实体店与全美中文客服',
  description:
    '需要办理美国手机卡或宽带安装？欢迎随时联系鸿达电信专业团队。我们在旧金山湾区设有实体店面，提供贴心的全中文客服支持。您可以扫描微信、拨打电话或亲临门店，我们将为您提供最详尽的资费咨询、方案定制与申请指导，竭诚为您服务。',
  alternates: getSmartHreflangAlternates('/contact'),
  openGraph: {
    title: '联系我们｜Fremont/Milpitas 实体店与全美中文客服',
    description:
      '需要办理美国手机卡或宽带安装？欢迎随时联系鸿达电信专业团队。我们在旧金山湾区设有实体店面，提供贴心的全中文客服支持。您可以扫描微信、拨打电话或亲临门店，我们将为您提供最详尽的资费咨询、方案定制与申请指导，竭诚为您服务。',
    url: 'https://baymediastar.com/contact',
    siteName: '鸿达电讯 Bay Media Star',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

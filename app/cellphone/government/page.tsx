import type { Metadata } from 'next';
import GovernmentClient from './GovernmentClient';

export const metadata: Metadata = {
  title: '美国政府补助手机卡计划介绍｜Lifeline/ACP 中文说明',
  description:
    '解读美国政府手机通信补助项目（Lifeline）条件和申请流程，提供中文协助。持有 Medicaid 白卡或低收入证明即可申请免费手机和每月 $0 月费服务。',
  alternates: {
    canonical: 'https://oceanver.com/cellphone/government',
  },
  openGraph: {
    title: '美国政府补助手机卡计划介绍｜Lifeline/ACP 中文说明',
    description:
      '解读美国政府手机通信补助项目条件和申请流程，提供中文协助。Medicaid 白卡用户可申请免费手机。',
    url: 'https://baymediastar.com/cellphone/government',
    siteName: '鸿达电讯 Bay Media Star',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function GovernmentPhonePage() {
  return <GovernmentClient />;
}

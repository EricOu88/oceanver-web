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
      '解读美国政府手机通信补助项目条件和申请流程，提供中文说明。是否符合 Lifeline 资格、可用设备和月度福利，需以所在州及官方当前规则核实。',
    url: 'https://oceanver.com/cellphone/government',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function GovernmentPhonePage() {
  return <GovernmentClient />;
}

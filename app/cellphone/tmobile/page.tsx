import type { Metadata } from 'next';
import TMobileClient from './TMobileClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://oceanver.com/cellphone/tmobile' },
  title: 'T-Mobile 手机卡申请指南 - 鸿达电信中文办理',
  description:
    'T-Mobile 手机卡申请指南。介绍 5G、eSIM、账户与设备条件，帮助中文用户判断是否适合自己的地址和使用场景。价格、覆盖与资格以当前运营商规则为准。',
};

export default function TMobilePage() {
  return <TMobileClient />;
}

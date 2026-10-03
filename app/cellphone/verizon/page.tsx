import type { Metadata } from 'next';
import VerizonClient from './VerizonClient';

/* ===================== SEO Metadata ===================== */
export const metadata: Metadata = {
  alternates: { canonical: 'https://oceanver.com/cellphone/verizon' },
  title: 'Verizon 手机卡申请指南 - 鸿达电信中文办理',
  description:
    'Verizon 手机卡申请指南。介绍覆盖、设备、账户和套餐条件，帮助中文用户结合地址与实际使用判断是否适合。价格、资格和可用优惠以当前运营商规则为准。',
};

export default function VerizonPage() {
  return <VerizonClient />;
}

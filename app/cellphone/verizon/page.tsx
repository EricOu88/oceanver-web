import type { Metadata } from 'next';
import VerizonClient from './VerizonClient';

/* ===================== SEO Metadata ===================== */
export const metadata: Metadata = {
  alternates: { canonical: 'https://oceanver.com/cellphone/verizon' },
  title: 'Verizon 手机卡申请指南 - 鸿达电信中文办理',
  description:
    'Verizon 手机卡申请指南。全美最稳信号，覆盖全美及偏远地区，适合房车旅行、商务、高速用户，支持转号与新开。旧金山湾区 Fremont 实体店中文协助办理，覆盖 San Jose、Milpitas、Cupertino 及全美 50 州。',
};

export default function VerizonPage() {
  return <VerizonClient />;
}

import type { Metadata } from 'next';
import UltraClient from './UltraClient';

export const metadata: Metadata = {
  title: 'Ultra Mobile 国际电话卡申请指南 - 鸿达电信中文办理',
  description:
    'Ultra Mobile 国际电话卡申请指南。支持中美及 100+ 国家通话，适合华人、留学生、跨国商务用户。旧金山湾区 Fremont 实体店中文协助办理，覆盖 San Jose、Milpitas、Cupertino 及全美 50 州。',
};

export default function UltraPage() {
  return <UltraClient />;
}

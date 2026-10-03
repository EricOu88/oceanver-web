import type { Metadata } from 'next';
import UltraClient from './UltraClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://oceanver.com/cellphone/ultra' },
  title: 'Ultra Mobile 国际电话卡申请指南 - 鸿达电信中文办理',
  description:
    'Ultra Mobile 国际电话卡申请指南。介绍国际通话、设备和账户条件，帮助中文用户结合实际使用场景判断是否适合。国家范围、价格和资格以当前运营商规则为准。',
};

export default function UltraPage() {
  return <UltraClient />;
}

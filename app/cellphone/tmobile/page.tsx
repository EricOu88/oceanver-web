import type { Metadata } from 'next';
import TMobileClient from './TMobileClient';

export const metadata: Metadata = {
  title: 'T-Mobile 手机卡申请指南 - 鸿达电信中文办理',
  description:
    'T-Mobile 手机卡申请指南。高速 5G 覆盖，全美可用，支持 eSIM，即买即用，留学生热门选择。旧金山湾区 Fremont 实体店中文协助办理，覆盖 San Jose、Milpitas、Cupertino 及全美 50 州。',
};

export default function TMobilePage() {
  return <TMobileClient />;
}

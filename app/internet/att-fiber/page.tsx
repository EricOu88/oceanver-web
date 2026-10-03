import type { Metadata } from 'next'
import AttFiberClient from './AttFiberClient'

export const metadata: Metadata = {
  title: 'AT&T Fiber 光纤宽带申请指南 - 鸿达电信中文办理',
  description:
    'AT&T Fiber 光纤宽带申请指南。介绍住家与商业方案、地址覆盖查询、安装与账单变化。实际可用性、价格、设备和服务条件以当前地址及运营商规则为准。',
  alternates: {
    canonical: 'https://oceanver.com/internet/att-fiber',
  },
  openGraph: {
    title: 'AT&T Fiber 光纤宽带申请指南 - 鸿达电信中文办理',
    description:
      '从用户角度讲清楚：AT&T Fiber 住家与商业方案如何比较？哪些地址可用？是否适合更换？',
    url: 'https://oceanver.com/internet/att-fiber',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function Page() {
  return <AttFiberClient />
}

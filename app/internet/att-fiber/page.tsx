import type { Metadata } from 'next'
import AttFiberClient from './AttFiberClient'

export const metadata: Metadata = {
  title: 'AT&T Fiber 光纤宽带申请指南 - 鸿达电信中文办理',
  description:
    'AT&T Fiber 光纤宽带申请指南。真光纤到户，住家与商业方案对比，稳定性高。旧金山湾区 Fremont 实体店中文协助办理，覆盖 San Jose、Milpitas、Cupertino 及全美 50 州，支持地址覆盖查询、安装与涨价处理。',
  alternates: {
    canonical: 'https://baymediastar.com/internet/att-fiber',
  },
  openGraph: {
    title: 'AT&T Fiber 光纤宽带申请指南 - 鸿达电信中文办理',
    description:
      '从用户角度讲清楚：AT&T Fiber 住家 vs 商业怎么选？适合哪些湾区地址？是否值得换？',
    url: 'https://baymediastar.com/internet/att-fiber',
    siteName: 'Bay Media Star 鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function Page() {
  return <AttFiberClient />
}

import type { Metadata } from 'next'
import FrontierClient from './FrontierClient'

export const metadata: Metadata = {
  title: 'Frontier Fiber 光纤宽带申请指南 - 鸿达电信中文办理',
  description:
    'Frontier Fiber 光纤宽带申请指南。真光纤到户服务，部分湾区城市覆盖率高、价格稳定。旧金山湾区 Fremont 实体店中文协助办理，覆盖 San Jose、Milpitas、Cupertino 及全美 50 州，支持地址查询与涨价处理。',
  alternates: {
    canonical: 'https://oceanver.com/internet/frontier',
  },
  openGraph: {
    title: 'Frontier Fiber 光纤宽带申请指南 - 鸿达电信中文办理',
    description:
      'Frontier Fiber 是否适合你？从用户视角讲清覆盖、稳定性、价格与适合人群。',
    url: 'https://baymediastar.com/internet/frontier',
    siteName: 'Bay Media Star 鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function Page() {
  return <FrontierClient />
}

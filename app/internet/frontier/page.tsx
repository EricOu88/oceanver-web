import type { Metadata } from 'next'
import FrontierClient from './FrontierClient'

export const metadata: Metadata = {
  title: 'Frontier Fiber 光纤宽带申请指南 - 鸿达电信中文办理',
  description:
    'Frontier Fiber 光纤宽带申请指南。介绍光纤服务、地址覆盖、安装和账单变化。可用性、价格、设备和资格会随地址、时间及运营商规则变化，办理前需核实。',
  alternates: {
    canonical: 'https://oceanver.com/internet/frontier',
  },
  openGraph: {
    title: 'Frontier Fiber 光纤宽带申请指南 - 鸿达电信中文办理',
    description:
      'Frontier Fiber 是否适合你？从用户视角讲清覆盖、稳定性、价格与适合人群。',
    url: 'https://oceanver.com/internet/frontier',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function Page() {
  return <FrontierClient />
}

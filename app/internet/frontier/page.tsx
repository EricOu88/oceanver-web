import type { Metadata } from 'next'
import FrontierClient from './FrontierClient'

export const metadata: Metadata = {
  title: 'Frontier 值不值得换？地址、需求与长期成本｜美国鸿达电讯',
  description:
    '从地址可用性、网络需求、长期成本和安装条件判断 Frontier 是否适合当前情况，以及现有宽带是否值得更换。',
  alternates: {
    canonical: 'https://oceanver.com/internet/frontier',
  },
  openGraph: {
    title: 'Frontier 值不值得换？地址、需求与长期成本｜美国鸿达电讯',
    description: '从地址可用性、网络需求、长期成本和安装条件判断 Frontier 是否适合当前情况。',
    url: 'https://oceanver.com/internet/frontier',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function Page() {
  return <FrontierClient />
}

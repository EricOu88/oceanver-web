import type { Metadata } from 'next'
import BillOptimizationClient from './BillOptimizationClient'

const title = '手机、宽带账单为什么变贵？账单涨价判断指南｜美国鸿达电讯'
const description =
  '美国手机和家庭宽带账单变贵，常见原因包括优惠到期、AutoPay 折扣失效、设备费、附加服务、套餐调整和一次性费用。先判断费用变化原因，再决定是否需要处理。'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://oceanver.com/bill-optimization',
  },
  openGraph: {
    title,
    description,
    url: 'https://oceanver.com/bill-optimization',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function BillOptimizationPage() {
  return <BillOptimizationClient />
}

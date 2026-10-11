import type { Metadata } from 'next'
import BillOptimizationClient from './BillOptimizationClient'

const title = '手机与宽带账单核对指南｜优惠、设备费与异常收费｜美国鸿达电讯'
const description =
  '本页面向已经收到手机或宽带账单的用户。先比较同名收费、折扣、设备分期与一次性项目，记录变化发生在哪一期；争议、退款或账户修改仍需运营商确认。'

export const metadata: Metadata = {
  title: { absolute: title },
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

import type { Metadata } from 'next'
import BillOptimizationClient from './BillOptimizationClient'

export const metadata: Metadata = {
  title: '账单涨价怎么办？宽带 / 手机月费变贵的解决方案｜美国鸿达电讯',
  description:
    '美国鸿达电讯帮助中文用户检查手机与宽带账单中的费用变化，判断优惠是否到期，并根据当前账单、地址、账户资格和使用需求提供套餐调整或转网建议。',
  alternates: {
    canonical: 'https://oceanver.com/bill-optimization',
  },
  openGraph: {
    title: '账单涨价怎么办？宽带 / 手机月费变贵的解决方案｜美国鸿达电讯',
    description:
      '美国鸿达电讯帮助中文用户检查手机与宽带账单中的费用变化，并根据具体情况提供套餐调整或转网建议。',
    url: 'https://oceanver.com/bill-optimization',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function BillOptimizationPage() {
  return <BillOptimizationClient />
}

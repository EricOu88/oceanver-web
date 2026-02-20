import type { Metadata } from 'next'
import BillOptimizationClient from './BillOptimizationClient'
import { getCanonicalUrl } from '@/lib/seo-utils'

export const metadata: Metadata = {
  title: '账单涨价怎么办？宽带 / 手机月费变贵的解决方案｜鸿达电讯',
  description:
    '美国电信账单深度优化服务：鸿达电信帮您逐行分析手机与网络账单，精准识别不合理收费与隐藏项目，通过申请折扣和套餐重新匹配为您大幅节省月费开支。资深团队协助沟通，平均可为您降低20%至40%的电信开支，让每一分钱都花得值！',
  alternates: {
    canonical: getCanonicalUrl('/bill-optimization'),
  },
  openGraph: {
    title: '账单涨价怎么办？宽带 / 手机月费变贵的解决方案｜鸿达电讯',
    description:
      '美国电信账单深度优化服务：鸿达电信帮您逐行分析手机与网络账单，精准识别不合理收费与隐藏项目，通过申请折扣和套餐重新匹配为您大幅节省月费开支。资深团队协助沟通，平均可为您降低20%至40%的电信开支，让每一分钱都花得值！',
    url: 'https://baymediastar.com/bill-optimization',
    siteName: 'Bay Media Star 鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function BillOptimizationPage() {
  return <BillOptimizationClient />
}
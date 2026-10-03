import type { Metadata } from 'next'
import { CommunityDiscussionClientOnly } from '@/app/components/community/CommunityDiscussionByPath'

export const metadata: Metadata = {
  title: '美国湾区家庭宽带选择指南 | 美国鸿达电讯',
  description:
    '整理湾区家庭宽带选择时需要核对的地址覆盖、套餐条件、促销期限和费用变化，具体可用服务以运营商地址查询为准。',
  keywords: [
    '湾区华人办宽带',
    'Xfinity 折扣',
    'AT&T 光纤',
    'Spectrum 宽带',
    '湾区宽带申请',
    '湾区宽带对比',
    '旧金山湾区宽带',
    '华人宽带服务',
    '湾区宽带优惠',
    '鸿达电讯',
  ],
  alternates: {
    canonical: 'https://baymediastar.com/blog/bay-area-internet-guide',
  },
  openGraph: {
    title: '美国湾区家庭宽带选择指南 | 美国鸿达电讯',
    description:
      '整理湾区家庭宽带选择时需要核对的地址覆盖、套餐条件、促销期限和费用变化，具体可用服务以运营商地址查询为准。',
    url: 'https://baymediastar.com/blog/bay-area-internet-guide',
    siteName: '美国鸿达电讯',
    type: 'article',
    locale: 'zh_CN',
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

export default function BayAreaInternetGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}<CommunityDiscussionClientOnly pageKey="blog:bay-area-internet-guide" /></>
}

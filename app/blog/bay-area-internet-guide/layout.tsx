import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '湾区华人办宽带指南 | Xfinity AT&T 独家折扣 | 鸿达电讯',
  description:
    '为旧金山湾区华人提供最全的电信服务对比。包含 Xfinity, AT&T, Spectrum 宽带优惠申请，手机套餐折上折。Fremont 实体店支持，中文客服，免押金办网。',
  keywords: [
    '湾区华人办宽带',
    'Xfinity 折扣',
    'AT&T 光纤',
    'Spectrum 宽带',
    '湾区宽带申请',
    'Fremont 中文办网',
    '湾区宽带对比',
    '旧金山湾区宽带',
    '华人宽带服务',
    '湾区宽带优惠',
    '鸿达电讯',
    'Bay Media Star',
  ],
  alternates: {
    canonical: 'https://baymediastar.com/blog/bay-area-internet-guide',
  },
  openGraph: {
    title: '湾区华人办宽带指南 | Xfinity AT&T 独家折扣 | 鸿达电讯',
    description:
      '为旧金山湾区华人提供最全的电信服务对比。包含 Xfinity, AT&T, Spectrum 宽带优惠申请，手机套餐折上折。Fremont 实体店支持，中文客服，免押金办网。',
    url: 'https://baymediastar.com/blog/bay-area-internet-guide',
    siteName: 'Bay Media Star 鸿达电讯',
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
  return <>{children}</>
}

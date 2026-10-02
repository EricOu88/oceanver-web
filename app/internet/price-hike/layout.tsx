import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '宽带优惠到期后为什么会涨价？原因与换网判断 | 美国鸿达电讯',
  
  description: '检查宽带促销期限、基础月费、AutoPay 折扣和设备费用变化，判断优惠到期后是否需要调整套餐或比较其他方案。',
  
  // 关键词设置（虽然现在 Google 权重降低，但对 Bing 等依然有效）
  keywords: [
    '美国宽带涨价', 
    'Xfinity账单太贵', 
    '宽带促销到期',
    '宽带账单涨价原因',
    '宽带优惠结束',
    '鸿达电讯', 
    '美国华人办网'
  ],

  // 社交媒体分享时的预览
  openGraph: {
    title: '宽带优惠到期后为什么会涨价？｜美国鸿达电讯',
    description: '检查促销期限、账单折扣、基础月费和一次性费用，再判断是否需要调整宽带方案。',
    url: 'https://oceanver.com/internet/price-hike',
    siteName: '美国鸿达电讯',
    type: 'website',
    images: [
      {
        url: '/og-image-price-hike.jpg',
        width: 1200,
        height: 630,
      }
    ],
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

export default function PriceHikeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

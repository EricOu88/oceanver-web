import type { Metadata } from 'next'

export const metadata: Metadata = {
  // 标题建议：品牌名 + 痛点关键词 + 城市，控制在 60 字符以内
  title: '2026美国宽带账单涨价处理 | Xfinity/AT&T/Spectrum方案判断 | 美国鸿达电讯',
  
  description: '帮助中文用户判断美国 AT&T、Xfinity、Spectrum 宽带账单涨价原因，并根据当前账单、地址、账户资格和实际需求评估套餐调整或换网方案。',
  
  // 关键词设置（虽然现在 Google 权重降低，但对 Bing 等依然有效）
  keywords: [
    '美国宽带涨价', 
    'Xfinity账单太贵', 
    'AT&T降费', 
    'Spectrum账单审计', 
    '美国上网省钱', 
    '鸿达电讯', 
    '美国华人办网'
  ],

  // 社交媒体分享时的预览
  openGraph: {
    title: '美国宽带账单涨价怎么办？｜美国鸿达电讯',
    description: '检查优惠、设备费、附加服务和套餐变化，再根据具体账户情况判断是否需要调整或换网。',
    url: 'https://oceanver.com/internet/price-hike',
    siteName: '美国鸿达电讯',
    type: 'website',
    images: [
      {
        url: '/og-image-price-hike.jpg', // 建议放一张带“Save Money”字样的图片
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

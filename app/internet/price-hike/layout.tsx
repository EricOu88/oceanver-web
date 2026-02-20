import type { Metadata } from 'next'

export const metadata: Metadata = {
  // 标题建议：品牌名 + 痛点关键词 + 城市，控制在 60 字符以内
  title: '2026美国宽带账单涨价处理 | Xfinity/AT&T/Spectrum降费方案 | 鸿达电讯',
  
  // 描述建议：点出“省多少钱”、“中文服务”、“无需SSN”，控制在 160 字符以内
  description: '专业处理美国 AT&T, Xfinity, Spectrum 宽带账单突然涨价问题。通过 Retention 谈价、自备设备及新开户策略，平均帮华人家庭每年节省 $300-$600。旧金山湾区/洛杉矶 18 年口碑，不降费不收费。',
  
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
    title: '美国宽带账单又涨了？别直接交钱，我们帮你降！',
    description: '专业华人账单审计，每年省下数百美金。',
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

export default function PriceHikeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
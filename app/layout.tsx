// app/layout.tsx - 根布局（默认中文）

import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
// import AIQuestionWidget from '@/app/components/AIQuestionWidget' // 暂时注释，使用 SafeAIQuestionWidget
// import SafeAIQuestionWidgetWrapper from '@/app/components/SafeAIQuestionWidgetWrapper' // 暂时隐藏全站公开入口；需要恢复时取消注释

/* ================== 全站默认 SEO / 社交元数据 ================== */
export const metadata: Metadata = {
  metadataBase: new URL('https://oceanver.com'),
  alternates: { canonical: 'https://oceanver.com/' },
  title: {
    default: '美国鸿达电讯｜美国手机与家庭宽带问题判断',
    template: '%s｜美国鸿达电讯',
  },

  description:
    '美国鸿达电讯面向美国中文用户整理手机与家庭宽带的账单、网络、设备、账户、地址和变更问题，帮助先判断原因，再比较方案，并在需要真实账户、地址或资格时进入人工核实。',

  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '美国鸿达电讯',
    title: '美国鸿达电讯｜美国手机与家庭宽带问题判断',
    description:
      '美国鸿达电讯面向美国中文用户整理手机与家庭宽带的账单、网络、设备、账户、地址和变更问题，帮助先判断原因，再比较方案，并在需要真实账户、地址或资格时进入人工核实。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '美国鸿达电讯｜美国手机与家庭宽带问题判断',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '美国鸿达电讯｜美国手机与家庭宽带问题判断',
    description:
      '美国鸿达电讯面向美国中文用户整理手机与家庭宽带的账单、网络、设备、账户、地址和变更问题，帮助先判断原因，再比较方案，并在需要真实账户、地址或资格时进入人工核实。',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

}

/* ================== 全站 Organization Schema ================== */
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://oceanver.com/#organization',
  name: '美国鸿达电讯',
  description:
    '面向美国中文用户整理手机与家庭宽带的账单、网络、设备、账户、地址和变更问题，并在网页无法确认时提供中文人工核实。',
  url: 'https://oceanver.com',
  telephone: '+1-510-849-6191',
  knowsLanguage: ['zh-CN'],
  audience: {
    '@type': 'Audience',
    audienceType: 'Chinese-speaking users in the United States',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
}

/* ================== 根布局 ================== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* DNS 预连接：加速第三方资源加载 */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {/* Google Analytics 4 (GA4) - 延迟加载以减少 TBT */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HM4T9F0SG2"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HM4T9F0SG2');
          `}
        </Script>
      </head>

      <body className="antialiased">
        {/* ================== 页面主体 ================== */}
        {children}

        {/* ================== AI 智能问答组件（右下角悬浮） ================== */}
        {/* <SafeAIQuestionWidgetWrapper /> */}
      </body>
    </html>
  )
}

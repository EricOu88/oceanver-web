// app/layout.tsx - 根布局（默认中文）

import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import ServiceSchemas from '@/app/components/seo/ServiceSchemas'
import MobileContactBarClientOnly from '@/app/components/contact/MobileContactBarClientOnly'
// import AIQuestionWidget from '@/app/components/AIQuestionWidget' // 暂时注释，使用 SafeAIQuestionWidget
// import SafeAIQuestionWidgetWrapper from '@/app/components/SafeAIQuestionWidgetWrapper' // 暂时隐藏全站公开入口；需要恢复时取消注释

/* ================== 全站默认 SEO / 社交元数据 ================== */
export const metadata: Metadata = {
  metadataBase: new URL('https://oceanver.com'),
  title: {
    default: '美国鸿达电讯｜美国手机与家庭宽带中文服务',
    template: '%s｜美国鸿达电讯',
  },

  description:
    '美国鸿达电讯为美国中文用户提供手机套餐、家庭宽带、账单检查、套餐选择和常见通信问题处理信息，并在需要账户、地址或资格核实时提供中文一对一服务。',

  keywords: [
    '美国手机卡中文办理',
    '美国宽带中文办理',
    '湾区手机卡',
    '湾区宽带',
    'Fremont 手机卡',
    'Fremont 宽带',
    '无SSN办手机卡',
    '无SSN办宽带',
    'eSIM中国可激活',
    'Xfinity中文办理',
    'AT&T中文',
    'T-Mobile中文',
    '鸿达电讯',
    '美国鸿达电讯',
  ],

  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '美国鸿达电讯',
    title: '美国鸿达电讯｜美国手机与家庭宽带中文服务',
    description:
      '美国鸿达电讯为美国中文用户提供手机套餐、家庭宽带、账单检查、套餐选择和常见通信问题处理信息，并在需要账户、地址或资格核实时提供中文一对一服务。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '美国鸿达电讯｜美国手机与家庭宽带中文服务',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '美国鸿达电讯｜美国手机与家庭宽带中文服务',
    description:
      '美国鸿达电讯为美国中文用户提供手机套餐、家庭宽带、账单检查、套餐选择和常见通信问题处理信息，并在需要账户、地址或资格核实时提供中文一对一服务。',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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

/* ================== 全站唯一 LocalBusiness Schema ================== */
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://oceanver.com/#localbusiness',
  name: '美国鸿达电讯',
  alternateName: ['鸿达电讯', 'Fremont 中文手机与家庭宽带服务'],
  description: '美国中文手机套餐、家庭宽带、账单检查与通信问题协助服务。',
  url: 'https://oceanver.com',
  telephone: '+1-510-849-6191',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '46292 Warm Springs Blvd #606',
    addressLocality: 'Fremont',
    addressRegion: 'CA',
    postalCode: '94539',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.4764,
    longitude: -121.9281,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '18:00',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Fremont',
    },
    {
      '@type': 'City',
      name: 'San Jose',
    },
    {
      '@type': 'City',
      name: 'Dublin',
    },
    {
      '@type': 'Country',
      name: 'United States',
    },
  ],
  knowsLanguage: ['zh-CN', 'en-US', '中文', 'English'],
  audience: {
    '@type': 'Audience',
    audienceType: 'New immigrants, International students, Chinese-speaking families',
    geographicArea: {
      '@type': 'Country',
      name: 'United States',
    },
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=美国鸿达电讯&query_place_id=ChIJX6ngelzGj4ARrdcNVV0c-Gc',
  sameAs: [
    'https://www.google.com/maps/search/?api=1&query=美国鸿达电讯&query_place_id=ChIJX6ngelzGj4ARrdcNVV0c-Gc',
  ],
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
        
        {/* LocalBusiness JSON-LD（只注入一次） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
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

        {/* ================== 全站 Service Schema（不影响 UI） ================== */}
        <ServiceSchemas />

        {/* ================== 全站唯一移动端悬浮 CTA（全局只引入一次） ================== */}
        <MobileContactBarClientOnly />

        {/* ================== AI 智能问答组件（右下角悬浮） ================== */}
        {/* <SafeAIQuestionWidgetWrapper /> */}
      </body>
    </html>
  )
}

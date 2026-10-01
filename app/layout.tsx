// app/layout.tsx - 根布局（默认中文）

import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import './globals.css'
import ServiceSchemas from '@/app/components/seo/ServiceSchemas'
import MobileContactBarClientOnly from '@/app/components/contact/MobileContactBarClientOnly'
// import AIQuestionWidget from '@/app/components/AIQuestionWidget' // 暂时注释，使用 SafeAIQuestionWidget
import SafeAIQuestionWidgetWrapper from '@/app/components/SafeAIQuestionWidgetWrapper'

/* ================== 全站默认 SEO / 社交元数据 ================== */
export const metadata: Metadata = {
  title: {
    default: '鸿达电讯｜美国手机卡与宽带中文服务',
    template: '%s｜鸿达电讯 Bay Media Star',
  },

  description:
    '鸿达电讯是湾区 Fremont 本地实体店，提供美国手机卡、家庭宽带、ADT 安防等一站式中文服务。支持无 SSN 办卡办网，全美 50 州远程办理，新移民、留学生首选。',

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
    'Bay Media Star',
  ],

  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '鸿达电讯 Bay Media Star',
    title: '鸿达电讯｜美国手机卡与宽带中文服务',
    description:
      '湾区 Fremont 本地实体店，提供美国手机卡、家庭宽带、ADT 安防等一站式中文服务。支持无 SSN 办卡办网，全美 50 州远程办理。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '鸿达电讯 Bay Media Star - 美国手机卡宽带中文服务',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '鸿达电讯｜美国手机卡与宽带中文服务',
    description:
      '湾区 Fremont 本地实体店，提供美国手机卡、家庭宽带等一站式中文服务。支持无 SSN，全美 50 州远程办理。',
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
  '@id': 'https://baymediastar.com',
  name: '鸿达电讯 Bay Media Star',
  alternateName: ['鸿达电讯', 'Bay Media Star Fremont', 'Fremont 中文手机卡宽带', 'Bay Area Chinese Telecom', 'California Chinese Internet Service'],
  description: '旧金山湾区专业中文手机卡与宽带办理服务，支持全美远程办网，Xfinity, AT&T, T-Mobile 授权代理。',
  url: 'https://baymediastar.com',
  logo: 'https://baymediastar.com/bms-logo.png',
  image: 'https://baymediastar.com/logo.png',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '100',
    bestRating: '5',
    worstRating: '1',
  },
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
    'https://baymediastar.com/contact',
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

        {/* ================== 全站 Footer（弱入口，必须有） ================== */}
        <footer className="border-t border-slate-200 mt-20 hidden md:block">          <div
            className="max-w-6xl mx-auto px-6 py-10
                       text-sm text-slate-500
                       flex flex-col
                       justify-between gap-8"
          >
            {/* 左侧：品牌与说明 */}
            <div className="space-y-2">
              <div className="font-semibold text-slate-700">
                Bay Media Star 鸿达电讯
              </div>
              <div>
                美国中文手机 / 宽带 / 网络服务协助
              </div>
              <div>
                © {new Date().getFullYear()} Bay Media Star
              </div>
            </div>

            {/* 右侧：低调导航（why-us 弱入口） */}
            <div className="flex flex-col gap-2">
              <a href="/why-us" className="hover:text-blue-600">
                为什么选择我们
              </a>
              <a href="/internet/diagnosis" className="hover:text-blue-600">
                美国宽带问题诊断
              </a>
              <Link href="/" className="hover:text-blue-600">
                返回首页
              </Link>
            </div>
          </div>
          
          {/* 底部版权区域：关于我们、联系我们、隐私政策 */}
          <div className="max-w-6xl mx-auto px-6 pb-6 border-t border-slate-200 pt-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
              <a href="/about" className="hover:text-blue-600 transition-colors">
                关于我们
              </a>
              <span className="text-slate-300">|</span>
              <a href="/contact" className="hover:text-blue-600 transition-colors">
                联系我们
              </a>
              <span className="text-slate-300">|</span>
              <a href="/privacy-policy" className="hover:text-blue-600 transition-colors">
                隐私政策
              </a>
            </div>
          </div>
        </footer>

        {/* ================== 全站 Service Schema（不影响 UI） ================== */}
        <ServiceSchemas />

        {/* ================== 全站唯一移动端悬浮 CTA（全局只引入一次） ================== */}
        <MobileContactBarClientOnly />

        {/* ================== AI 智能问答组件（右下角悬浮） ================== */}
        <SafeAIQuestionWidgetWrapper />
      </body>
    </html>
  )
}

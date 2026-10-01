// app/page.tsx  （Server Component）
import type { Metadata } from 'next'
import HeroSection from '@/app/components/home/HeroSection'
import ProblemSelection from '@/app/components/home/ProblemSelection'
import TrustIndicators from '@/app/components/home/TrustIndicators'
import ContactEntry from '@/app/components/contact/ContactEntry'
import HomeClientWrapper from './HomeClientWrapper'
import CommunityHighlights from '@/app/components/community/CommunityHighlights'
import HomepageCampaignBanner from '@/app/components/home/HomepageCampaignBanner'

export const metadata: Metadata = {
  title: '鸿达电信 - 旧金山湾区/Fremont 中文电信服务 | 全美手机卡与宽带办理',
  description:
    '专为美国华人提供 Xfinity, AT&T, Spectrum, T-Mobile 宽带与手机套餐申请。实体店经营，全美50州中文咨询。免押金、免信用审核，比官网直办省20%-40%，更有独家账单审计减免服务。',
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
  keywords: [
    '鸿达电讯',
    'bay media star',
    '美国手机卡中文办理',
    '美国宽带中文办理',
    '无SSN办网',
    '无SSN办手机卡',
    '美国白卡激活',
    '美国电话卡',
    '美国手机卡',
    'Fremont 手机卡',
    'Fremont 宽带',
    'Fremont 中文电信',
    'San Jose 手机卡',
    'San Jose 宽带',
    'Milpitas 手机卡',
    'Milpitas 宽带',
    'best internet provider fremont',
    'business wi-fi bay area',
    '美国宽带运营商',
    '美国宽带涨价',
    'Xfinity账单太贵',
    'AT&T降费',
    '湾区中文办网',
    '湾区中文手机卡',
    '新移民办网',
    '留学生手机卡',
    'Bay Area Chinese Service',
  ],
  openGraph: {
    title: '鸿达电信 - 旧金山湾区/Fremont 中文电信服务 | 全美手机卡与宽带办理',
    description:
      '18年湾区实体店，美国手机卡宽带中文办理专家。支持无SSN办网、无SSN办手机卡，Xfinity/AT&T/Spectrum宽带办理，账单涨价处理。服务Fremont/San Jose/Milpitas及全美50州。',
    siteName: 'Bay Media Star 鸿达电讯',
    type: 'website',
    locale: 'zh_CN',
  },
}

export default function Page() {
  return (
    <>
      {/* HeroSection - Server Component，最顶部 */}
      <HeroSection />

      {/* 问题选择三大入口（新增） */}
      <ProblemSelection />

      {/* 信任/特性条（新增） */}
      <TrustIndicators />

      {/* 业务介绍部分 - Client Component（ssr: false 避免 hydration mismatch） */}
      <HomeClientWrapper />

      <HomepageCampaignBanner />

      <CommunityHighlights />

      {/* ContactSection - Server Component，在业务介绍之后 */}
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        <ContactEntry />
      </div>
    </>
  )
}

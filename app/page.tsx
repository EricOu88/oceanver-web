// app/page.tsx  （Server Component）
import type { Metadata } from 'next'
import HeroSection from '@/app/components/home/HeroSection'
import ProblemSelection from '@/app/components/home/ProblemSelection'
import TrustIndicators from '@/app/components/home/TrustIndicators'
import ContactEntry from '@/app/components/contact/ContactEntry'
import HomeClientWrapper from './HomeClientWrapper'
import CommunityHighlights from '@/app/components/community/CommunityHighlights'

export const metadata: Metadata = {
  title: {
    absolute: '美国手机、宽带账单涨价怎么办？｜美国鸿达电讯',
  },
  description:
    '手机或家庭宽带账单突然变贵？美国鸿达电讯帮助中文用户判断涨价原因、优惠是否到期、是否需要换套餐或换运营商，并处理常见手机与宽带问题。',
  openGraph: {
    title: '美国手机、宽带账单涨价怎么办？｜美国鸿达电讯',
    description:
      '手机或家庭宽带账单突然变贵？美国鸿达电讯帮助中文用户判断涨价原因、优惠是否到期、是否需要换套餐或换运营商，并处理常见手机与宽带问题。',
    siteName: '美国鸿达电讯',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '美国手机、宽带账单涨价怎么办？｜美国鸿达电讯',
    description:
      '手机或家庭宽带账单突然变贵？美国鸿达电讯帮助中文用户判断涨价原因、优惠是否到期、是否需要换套餐或换运营商，并处理常见手机与宽带问题。',
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

      <section aria-labelledby="bill-increase-summary-title" className="mx-auto max-w-5xl bg-white px-6 py-12 md:py-16">
        <div className="border-y border-slate-200 py-8 md:py-10">
          <h2 id="bill-increase-summary-title" className="text-2xl font-black text-slate-900 md:text-3xl">
            手机、宽带账单为什么会突然变贵？
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
            手机或家庭宽带账单突然变贵，常见原因包括优惠期结束、AutoPay 或其他折扣失效、设备费变化、附加服务增加、套餐调整，以及运营商价格变化。是否需要换套餐、降速、取消附加服务或换运营商，要结合当前账单、地址、账户资格和实际使用需求判断。
          </p>
          <p className="mt-6 text-sm text-slate-500">
            最后更新：2026年10月 · 内容由美国鸿达电讯团队整理与审核
          </p>
        </div>
      </section>

      {/* 首页下半部 - Server Component；仅局部交互保留 Client 边界 */}
      <HomeClientWrapper />

      <CommunityHighlights />

      {/* ContactSection - Server Component，在业务介绍之后 */}
      <div className="max-w-6xl mx-auto bg-[#EAF2F6] px-6 py-8 md:py-12">
        <ContactEntry />
      </div>
    </>
  )
}

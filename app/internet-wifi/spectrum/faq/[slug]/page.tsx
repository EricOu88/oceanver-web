import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { spectrumFAQContent, type FAQContent } from '../faq-content'
import { spectrumFAQIndex } from '@/app/internet/spectrum/faq/faq-index'
import FAQPageSchema from '@/app/components/seo/FAQPageSchema'

interface SpectrumFAQPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return spectrumFAQIndex.map((item) => ({
    slug: item.slug,
  }))
}

const seoMetadata: Record<string, { title: string; description: string }> = {
  'spectrum-wifi-fee': {
    title: 'Spectrum WiFi费用可以免除吗？自备路由器省钱攻略',
    description: 'Spectrum账单里的WiFi费用是路由器租赁费，每月$5-$10。自备路由器可免除，长期更省钱。中文办理协助确认设备兼容性。',
  },
  'spectrum-troubleshooting': {
    title: 'Spectrum网速慢断线怎么办？自测方法中文报修支持',
    description: 'Spectrum网速慢、经常断线？先自测重启Modem检查线路。通过中文办理可获得更快报修支持，专业诊断网络问题。',
  },
  'spectrum-equipment-return': {
    title: 'Spectrum设备归还必须保留收据避免数百美金费用',
    description: '取消Spectrum服务后必须去UPS归还设备并保留收据。没留收据可能被收取$100-$300设备费。中文办理提醒避免陷阱。',
  },
  'spectrum-moving-service': {
    title: 'Spectrum搬家套餐迁移vs重新申请哪个更划算？',
    description: '搬家时Spectrum优惠套餐可迁移，但有时作为新用户重新申请更划算。中文办理帮您查询新地址覆盖和优惠方案。',
  },
  'spectrum-early-termination': {
    title: 'Spectrum没有合约但退费按月计费留学生必看',
    description: 'Spectrum大部分套餐无合约可随时注销，但退费按月计费即使只用了3天也收整月。中文办理协助处理注销流程。',
  },
}

export async function generateMetadata({ params }: SpectrumFAQPageProps): Promise<Metadata> {
  const { slug } = await params
  const faq = spectrumFAQContent[slug]

  if (!faq) {
    return {
      title: '问题未找到 | 鸿达电讯',
    }
  }

  const seoMeta = seoMetadata[slug]
  const title = seoMeta?.title || `Spectrum ${faq.question} - 详细解答 | 鸿达电讯`
  const description = seoMeta?.description || `${faq.summary} 查看完整解答，了解 Spectrum 宽带${faq.question}的详细情况、官方规则、真实使用体验和适合人群。`

  return {
    title,
    description,
    keywords: [
      'Spectrum',
      'Spectrum 宽带',
      faq.question,
      '湾区宽带',
      'Fremont 宽带',
      'Spectrum FAQ',
      '中文办理',
      ...(slug === 'spectrum-wifi-fee' ? ['自备路由器', 'WiFi费用'] : []),
      ...(slug === 'spectrum-troubleshooting' ? ['网速慢', '断线', '中文报修'] : []),
      ...(slug === 'spectrum-equipment-return' ? ['退还设备', '设备归还'] : []),
      ...(slug === 'spectrum-moving-service' ? ['搬家', '套餐迁移'] : []),
      ...(slug === 'spectrum-early-termination' ? ['无合约', '提前解约'] : []),
    ],
    alternates: {
      canonical: `https://oceanver.com/internet-wifi/spectrum/faq/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://baymediastar.com/internet-wifi/spectrum/faq/${slug}`,
      siteName: 'Bay Media Star 鸿达电讯',
      locale: 'zh_CN',
      type: 'article',
    },
  }
}

// 合并完整答案用于 Schema
const getFullAnswer = (faq: FAQContent): string => {
  if (!faq) {
    return ''
  }
  
  // FAQContent 使用 content 对象存储答案
  if (faq.content) {
    const parts = [
      faq.content.whyCommon,
      faq.content.officialRules,
      faq.content.realUsage,
      faq.content.suitableFor,
    ].filter((part): part is string => Boolean(part))
    return parts.join(' ')
  }
  
  // 默认返回 summary
  return faq.summary || ''
}

export default async function SpectrumFAQDetailPage({ params }: SpectrumFAQPageProps) {
  const { slug } = await params
  const faq = spectrumFAQContent[slug]

  if (!faq) {
    notFound()
  }

  // 获取相关问题（前2个问题，排除当前问题）
  const relatedFAQs = spectrumFAQIndex
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map((item) => spectrumFAQContent[item.slug])
    .filter((content): content is FAQContent => content !== undefined)

  // 合并完整答案用于 Schema
  const fullAnswer = getFullAnswer(faq)

  return (
    <>
      <FAQPageSchema question={faq.question} answer={fullAnswer} />
    <div className="min-h-screen bg-slate-50">
      {/* 返回按钮 */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/internet/spectrum/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              <ArrowLeft size={18} />
              返回 FAQ 总览
            </Link>
            <Link
              href="/internet/spectrum"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              Spectrum 服务页
            </Link>
          </div>
        </div>
      </div>

      {/* 文章内容 */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* H1 标题 - Spectrum + 问题（完全匹配标题） */}
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 leading-tight">
          Spectrum {faq.question}
        </h1>

        {/* H2：这个问题为什么很多人会遇到 */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6">这个问题为什么很多人会遇到</h2>
          <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4">
            {faq.content.whyCommon}
          </p>
        </section>

        {/* H2：Spectrum 官方规则怎么说 */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Spectrum 官方规则怎么说</h2>
          <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4">
            {faq.content.officialRules}
          </p>
        </section>

        {/* H2：真实使用中常见情况 */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6">真实使用中常见情况</h2>
          <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4">
            {faq.content.realUsage}
          </p>
        </section>

        {/* H2：适合哪些人 / 不适合哪些人 */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6">适合哪些人 / 不适合哪些人</h2>
          <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4">
            {faq.content.suitableFor}
          </p>
        </section>

        {/* 相关问题 */}
        {relatedFAQs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">相关问题</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedFAQs.map((related) => (
                <Link
                  key={related.slug}
                  href={`/internet-wifi/spectrum/faq/${related.slug}`}
                  className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {related.question}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">{related.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 固定 CTA - 链接到服务页 */}
        <div className="bg-blue-700 rounded-2xl p-8 text-white mb-12 shadow-xl">
          <h2 className="text-2xl font-black mb-4">中文协助查询 Spectrum 覆盖 / 套餐 / 降价方案</h2>
          <p className="text-blue-100 mb-6 text-lg">
            旧金山湾区 Fremont 实体店中文顾问，帮您查询地址覆盖、对比套餐、处理账单涨价问题。
          </p>
          <Link
            href="/internet/spectrum"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
          >
            前往 Spectrum 服务页
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* 返回链接 */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link
            href="/internet/spectrum/faq"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            返回 FAQ 总览
          </Link>
          <span className="text-slate-300">|</span>
          <Link
            href="/internet/spectrum"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
          >
            返回 Spectrum 服务页
          </Link>
        </div>
      </article>
    </div>
    </>
  )
}

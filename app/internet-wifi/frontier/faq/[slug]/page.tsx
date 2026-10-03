import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { frontierFAQContent, type FrontierFAQContent } from '../faq-content'
import { frontierFAQIndex } from '@/app/internet/frontier/faq/faq-index'
import FAQPageSchema from '@/app/components/seo/FAQPageSchema'

interface FrontierFAQPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return frontierFAQIndex.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: FrontierFAQPageProps): Promise<Metadata> {
  const { slug } = await params
  const faq = frontierFAQContent[slug]

  if (!faq) {
    return {
      title: '问题未找到 | 鸿达电讯',
    }
  }

  return {
    title: `Frontier ${faq.question} - 详细解答 | 鸿达电讯`,
    description: `${faq.summary} 查看完整解答，了解 Frontier 宽带${faq.question}的详细情况、官方规则、真实使用体验和适合人群。`,
    keywords: [
      'Frontier',
      'Frontier 宽带',
      'Frontier Fiber',
      faq.question,
      '湾区宽带',
      'Fremont 宽带',
      'Frontier FAQ',
      '中文办理',
    ],
    alternates: {
      canonical: `https://baymediastar.com/internet-wifi/frontier/faq/${slug}`,
    },
    openGraph: {
      title: `Frontier ${faq.question}`,
      description: faq.summary,
      url: `https://baymediastar.com/internet-wifi/frontier/faq/${slug}`,
      siteName: 'Bay Media Star 鸿达电讯',
      locale: 'zh_CN',
      type: 'article',
    },
  }
}

// 合并完整答案用于 Schema
const getFullAnswer = (faq: FrontierFAQContent): string => {
  if (!faq) {
    return ''
  }
  
  // FrontierFAQContent 使用 content 对象存储答案
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

export default async function FrontierFAQDetailPage({ params }: FrontierFAQPageProps) {
  const { slug } = await params
  const faq = frontierFAQContent[slug]

  if (!faq) {
    notFound()
  }

  const relatedFAQs = frontierFAQIndex
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map((item) => frontierFAQContent[item.slug])
    .filter((content): content is FrontierFAQContent => content !== undefined)

  const fullAnswer = getFullAnswer(faq)

  return (
    <>
      <FAQPageSchema question={faq.question} answer={fullAnswer} />
      <div className="min-h-screen bg-slate-50">
        <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/internet/frontier/faq"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                <ArrowLeft size={18} />
                返回 FAQ 总览
              </Link>
              <Link
                href="/internet/frontier"
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                Frontier 服务页
              </Link>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 leading-tight">
            Frontier {faq.question}
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">这个问题为什么很多用户会遇到</h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4">
              {faq.content.whyCommon}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Frontier 官方规则怎么说</h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4">
              {faq.content.officialRules}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">实际使用中会发生什么</h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4">
              {faq.content.realUsage}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">适合哪些人 / 不适合哪些人</h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4">
              {faq.content.suitableFor}
            </p>
          </section>

          {relatedFAQs.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">相关问题</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedFAQs.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/internet-wifi/frontier/faq/${related.slug}`}
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

          <div className="bg-blue-700 rounded-2xl p-8 text-white mb-12 shadow-xl">
            <h2 className="text-2xl font-black mb-4">中文协助查询 Frontier 覆盖 / 套餐 / 价格对比 / 安装预约</h2>
            <p className="text-blue-100 mb-6 text-lg">
              旧金山湾区 Fremont 实体店中文顾问，帮您查询地址覆盖、对比套餐、处理安装预约问题。
            </p>
            <Link
              href="/internet/frontier"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              前往 Frontier 服务页
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <Link
              href="/internet/frontier/faq"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
            >
              <ArrowLeft size={18} />
              返回 FAQ 总览
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/internet/frontier"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
            >
              返回 Frontier 服务页
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}

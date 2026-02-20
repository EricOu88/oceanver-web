import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { xfinityFAQContent, type XfinityFAQContent } from '@/app/internet-wifi/xfinity/faq/faq-content'
import { xfinityFAQIndex } from '../faq-index'
import FAQPageSchema from '@/app/components/seo/FAQPageSchema'

interface XfinityFAQPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return xfinityFAQIndex.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: XfinityFAQPageProps): Promise<Metadata> {
  const { slug } = await params
  const faq = xfinityFAQContent[slug]

  if (!faq) {
    return { title: '问题未找到 | 鸿达电讯' }
  }

  return {
    title: faq.seo.title,
    description: faq.seo.description,
    keywords: ['Xfinity', 'Xfinity FAQ', 'Xfinity 账单', 'Xfinity 合约', 'Xfinity 取消', 'Xfinity 涨价', 'Xfinity 流量', faq.question],
    alternates: {
      canonical: `https://baymediastar.com/internet/xfinity/faq/${slug}`,
    },
    openGraph: {
      title: faq.seo.title,
      description: faq.seo.description,
      url: `https://baymediastar.com/internet/xfinity/faq/${slug}`,
      siteName: 'Bay Media Star 鸿达电讯',
      locale: 'zh_CN',
      type: 'article',
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
}

// 合并完整答案用于 Schema
const getFullAnswer = (faq: XfinityFAQContent): string => {
  if (!faq) {
    return ''
  }
  
  // XfinityFAQContent 使用 content 对象存储答案
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

export default async function XfinityFAQDetailPage({ params }: XfinityFAQPageProps) {
  const { slug } = await params
  const faq = xfinityFAQContent[slug]

  if (!faq) notFound()

  const relatedFAQs = xfinityFAQIndex
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map((item) => xfinityFAQContent[item.slug])
    .filter((c): c is XfinityFAQContent => c !== undefined)

  const fullAnswer = getFullAnswer(faq)

  return (
    <>
      <FAQPageSchema question={faq.question} answer={fullAnswer} />
      <div className="min-h-screen bg-slate-50">
        <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/internet/xfinity/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
            >
              <ArrowLeft size={18} />
              返回 FAQ 总览
            </Link>
            <Link href="/internet/xfinity" className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition">
              Xfinity 服务页
            </Link>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 leading-tight">{faq.question}</h1>

          <section className="mb-10">
            <h2 className="text-2xl font-black text-slate-900 mb-4">这个问题为什么很多人会遇到</h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">{faq.content.whyCommon}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Xfinity 官方规则怎么说</h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">{faq.content.officialRules}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-black text-slate-900 mb-4">真实使用中常见情况</h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">{faq.content.realUsage}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">适合哪些人 / 不适合哪些人</h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">{faq.content.suitableFor}</p>
          </section>

          {relatedFAQs.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">相关问题</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedFAQs.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/internet/xfinity/faq/${r.slug}`}
                    className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{r.question}</h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{r.summary}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-8 text-white mb-10 shadow-xl">
            <h2 className="text-2xl font-black mb-3">👉 如果你正在被 Xfinity 账单、合约或网络问题困扰</h2>
            <p className="text-blue-100 mb-6 text-lg">
              我们可以帮你中文查询、协商或更换更合适的方案（覆盖、价格、账单、取消服务）。 
            </p>
            <Link
              href="/internet/xfinity"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              前往 Xfinity 服务页
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/internet/xfinity/faq"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
            >
              <ArrowLeft size={18} />
              返回 FAQ 总览
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/internet/xfinity"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
            >
              返回 Xfinity 服务页
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}

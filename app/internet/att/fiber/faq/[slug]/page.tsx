import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { attFiberFAQContent, type ATTFiberFAQContent } from '@/app/internet-wifi/att/fiber/faq/faq-content'
import { attFiberFAQIndex } from '../faq-index'
import FAQPageSchema from '@/app/components/seo/FAQPageSchema'

interface ATTFiberFAQPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return attFiberFAQIndex.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: ATTFiberFAQPageProps): Promise<Metadata> {
  const { slug } = await params
  const faq = attFiberFAQContent[slug]

  if (!faq) {
    return {
      title: '问题未找到 | 鸿达电讯',
    }
  }

  const isBusiness = slug.includes('business')
  const serviceType = isBusiness ? '商业' : '住家'

  return {
    title: `${faq.question} - 详细解答 | 鸿达电讯`,
    description: `${faq.summary} 查看完整解答，了解 AT&T Fiber ${serviceType}宽带${faq.question}的详细情况、官方规则、真实使用体验和适合人群。`,
    keywords: [
      'AT&T Fiber',
      'AT&T Fiber 宽带',
      isBusiness ? 'AT&T Business Fiber' : 'AT&T Fiber',
      faq.question,
      '湾区宽带',
      'Fremont 宽带',
      'AT&T Fiber FAQ',
      '中文办理',
    ],
    alternates: {
      canonical: `https://baymediastar.com/internet/att/fiber/faq/${slug}`,
    },
    openGraph: {
      title: `AT&T Fiber ${faq.question}`,
      description: faq.summary,
      url: `https://baymediastar.com/internet/att/fiber/faq/${slug}`,
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
const getFullAnswer = (faq: ATTFiberFAQContent): string => {
  if (!faq) {
    return ''
  }
  
  // ATTFiberFAQContent 使用 content 对象存储答案
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

export default async function ATTFiberFAQDetailPage({ params }: ATTFiberFAQPageProps) {
  const { slug } = await params
  const faq = attFiberFAQContent[slug]

  if (!faq) {
    notFound()
  }

  // 获取相关问题（前2个问题，排除当前问题）
  const relatedFAQs = attFiberFAQIndex
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map((item) => attFiberFAQContent[item.slug])
    .filter((content): content is ATTFiberFAQContent => content !== undefined)

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
                href="/internet/att/fiber/faq"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                <ArrowLeft size={18} />
                返回 FAQ 总览
              </Link>
              <Link
                href="/internet/att/fiber"
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                AT&T Fiber 服务页
              </Link>
            </div>
          </div>
        </div>

        {/* 文章内容 */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* H1 标题 - AT&T Fiber + 问题 */}
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 leading-tight">
            AT&T Fiber {faq.question}
          </h1>

          {/* H2：这个问题为什么很多人会遇到 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">这个问题为什么很多用户会遇到</h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4">
              {faq.content.whyCommon}
            </p>
          </section>

          {/* H2：AT&T 官方规则怎么说 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">AT&T 官方规则怎么说</h2>
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
                    href={`/internet/att/fiber/faq/${related.slug}`}
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-12 shadow-xl">
            <h2 className="text-2xl font-black mb-4">中文协助查询 AT&T Fiber 覆盖、价格、安装或账单问题</h2>
            <p className="text-blue-100 mb-6 text-lg">
              旧金山湾区 Fremont 实体店中文顾问，帮您查询地址覆盖、对比套餐、处理安装预约和账单问题。
            </p>
            <Link
              href="/internet/att/fiber"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              前往 AT&T Fiber 服务页
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* 返回链接 */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <Link
              href="/internet/att/fiber/faq"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
            >
              <ArrowLeft size={18} />
              返回 FAQ 总览
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/internet/att/fiber"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
            >
              返回 AT&T Fiber 服务页
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}

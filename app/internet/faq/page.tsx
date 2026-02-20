import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, HelpCircle, ChevronRight, ArrowRight } from 'lucide-react'
import { internetFAQData } from './data'

export const metadata: Metadata = {
  title: '美国宽带常见问题 FAQ｜宽带类型、安装、涨价、合约与中文办理 | 鸿达电讯',
  description:
    '美国宽带常见问题成文版知识中枢：光纤/Cable/DSL 区别、安装流程、涨价原因、合同与设备、中文办理等，每题附运营商 FAQ 内链。',
  keywords: [
    '美国宽带常见问题',
    '美国宽带FAQ',
    '宽带类型',
    '宽带安装',
    '宽带涨价',
    '宽带合约',
    '中文办理宽带',
  ],
  alternates: {
    canonical: 'https://baymediastar.com/internet/faq',
  },
  openGraph: {
    title: '美国宽带常见问题 FAQ｜宽带类型、安装、涨价、合约与中文办理',
    description: '美国宽带常见问题成文版知识中枢，覆盖类型区别、安装流程、涨价原因、合同设备、中文办理，每题附运营商 FAQ 推荐。',
    url: 'https://baymediastar.com/internet/faq',
    siteName: 'Bay Media Star 鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

function FAQPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: internetFAQData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function InternetFAQPage() {
  return (
    <>
      <FAQPageSchema />
      <div className="min-h-screen bg-slate-50">
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link
              href="/internet"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              <ArrowLeft size={18} />
              返回宽带首页
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-10">
          {/* 顶部：诊断入口 */}
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-slate-800 text-sm">
              遇到具体问题？可前往{' '}
              <Link
                href="/internet/diagnosis"
                className="font-bold text-amber-800 hover:underline"
              >
                宽带问题诊断
              </Link>{' '}
              页面，按地址覆盖、涨价处理、中文支持一步步排查。
            </p>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              美国宽带常见问题（FAQ）
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-4">
              成文版知识中枢，覆盖宽带类型、安装、涨价、合约与设备、中文办理等，每题附运营商 FAQ 推荐。
            </p>
            <p className="text-slate-700 text-base max-w-2xl mx-auto font-medium">
              本页面解答美国宽带最常见问题，如需个性化方案，请使用{' '}
              <Link
                href="/internet/diagnosis"
                className="text-blue-600 hover:underline font-semibold"
              >
                宽带问题诊断
              </Link>
            </p>
          </div>

          <div className="space-y-10">
            {internetFAQData.map((item, index) => (
              <article
                key={index}
                id={`faq-${index + 1}`}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
                    <HelpCircle className="text-blue-600" size={20} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 pt-0.5">
                    {item.question}
                  </h2>
                </div>
                <div className="pl-12 text-slate-700 leading-relaxed space-y-3">
                  {item.answer.split('\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {item.relatedProviders.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <p className="text-sm font-semibold text-slate-600 mb-2">
                      推荐相关运营商
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.relatedProviders.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition"
                        >
                          {p.name}
                          <ChevronRight size={14} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {/* 统一转化区块 */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <p className="text-slate-700 text-sm mb-3">
                    如果你的情况比较复杂，建议使用宽带问题诊断获取准确方案
                  </p>
                  <Link
                    href="/internet/diagnosis"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition"
                  >
                    开始宽带问题诊断
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/internet/diagnosis"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
            >
              <HelpCircle size={18} />
              遇到具体问题？前往宽带问题诊断
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

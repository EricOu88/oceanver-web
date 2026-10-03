import type { Metadata } from 'next'
import type { ReactElement } from 'react'
import Link from 'next/link'
import { ArrowLeft, HelpCircle, ExternalLink } from 'lucide-react'
import { internetProvidersFAQData } from './data'

export const metadata: Metadata = {
  title: '美国宽带常见问题 FAQ｜选宽带前必看 10 个关键问题 | 鸿达电讯',
  description:
    '美国宽带安装常见问题解答：鸿达电信为您整理了关于 Xfinity, AT&T 等各大运营商的申请流程、设备退还指南、账单减免技巧及安装预约的常见疑问。通过全中文详细指南，让您在申请美国网络服务时不再迷茫，轻松避开所有隐藏陷阱。',
  keywords: [
    '美国宽带常见问题',
    '美国宽带FAQ',
    '宽带价格',
    '宽带合约',
    '宽带涨价',
    '光纤宽带',
    'Cable宽带',
    '宽带安装',
    '宽带速度',
    '宽带覆盖查询',
  ],
  alternates: {
    canonical: 'https://baymediastar.com/internet/providers/faq',
  },
  openGraph: {
    title: '美国宽带常见问题 FAQ｜选宽带前必看 10 个关键问题',
    description: '整理美国宽带最常见的 10 个关键问题，涵盖价格、合约、涨价、安装、速度与覆盖，帮助新移民、留学生和家庭用户避免选错宽带。',
    url: 'https://baymediastar.com/internet/providers/faq',
    siteName: 'Bay Media Star 鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

// FAQPage Schema for SEO
function FAQPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: internetProvidersFAQData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.summary, // 使用摘要作为结构化数据的答案
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function InternetProvidersFAQPage() {
  return (
    <>
      <FAQPageSchema />
      <div className="min-h-screen bg-slate-50">
        {/* 返回按钮 */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link
              href="/internet/providers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              <ArrowLeft size={18} />
              返回宽带运营商对比
            </Link>
          </div>
        </div>

        {/* 页面内容 */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* 标题和引言 */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              美国宽带常见问题（FAQ）
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              这是所有宽带运营商通用的问题合集，涵盖价格、合约、安装、速度等核心问题。
              无论您考虑 <Link href="/internet/att/fiber/faq" className="text-blue-600 hover:underline font-semibold">AT&T Fiber</Link>、
              <Link href="/internet/xfinity/faq" className="text-blue-600 hover:underline font-semibold"> Xfinity</Link>、
              <Link href="/internet/spectrum/faq" className="text-blue-600 hover:underline font-semibold"> Spectrum</Link> 还是
              <Link href="/internet/frontier/faq" className="text-blue-600 hover:underline font-semibold"> Frontier</Link>，
              这些基础知识都能帮您做出更明智的选择。
            </p>
          </div>

          {/* FAQ 列表 */}
          <div className="space-y-16">
            {internetProvidersFAQData.map((item, index) => (
              <article
                key={index}
                id={`faq-${index + 1}`}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <HelpCircle className="text-blue-600" size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 flex-1">
                    {item.question}
                  </h2>
                </div>

                {/* 摘要 */}
                <div className="mb-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                  <p className="text-slate-800 font-semibold leading-relaxed">{item.summary}</p>
                </div>

                {/* 详细内容 */}
                <div className="prose prose-slate max-w-none">
                  {/* 为什么这么多人遇到这个问题 */}
                  {item.whyCommon && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">为什么这么多人遇到这个问题？</h3>
                      <div className="text-slate-700 leading-relaxed space-y-3">
                        {item.whyCommon.split('\n').map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 美国宽带真实规则 */}
                  {item.realRules && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">美国宽带真实规则是怎样的？</h3>
                      <div className="text-slate-700 leading-relaxed space-y-3">
                        {item.realRules.split('\n').map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 真实使用中最常见的情况 */}
                  {item.commonScenarios && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">真实使用中最常见的情况</h3>
                      <div className="text-slate-700 leading-relaxed space-y-3">
                        {item.commonScenarios.split('\n').map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 怎么做最不容易吃亏 */}
                  {item.recommendations && item.recommendations.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">怎么做最不容易吃亏？</h3>
                      <ul className="space-y-3">
                        {item.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">
                              {i + 1}
                            </span>
                            <span className="text-slate-700 leading-relaxed flex-1">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 不同宽带公司的典型差异 */}
                  {item.providerDifferences && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">不同宽带公司的典型差异</h3>
                      <div className="text-slate-700 leading-relaxed space-y-4">
                        {item.providerDifferences.split('\n\n').map((para, paraIndex) => {
                          if (!para.trim()) return null
                          
                          // 检测内链格式 [文本](链接)
                          const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
                          const parts: (string | ReactElement)[] = []
                          let lastIndex = 0
                          let match
                          let linkKey = 0
                          const matches: Array<{index: number, text: string, href: string, length: number}> = []
                          
                          // 收集所有匹配
                          while ((match = linkPattern.exec(para)) !== null) {
                            matches.push({
                              index: match.index,
                              text: match[1],
                              href: match[2],
                              length: match[0].length
                            })
                          }

                          // 构建 parts
                          matches.forEach((m, idx) => {
                            if (m.index > lastIndex) {
                              parts.push(para.substring(lastIndex, m.index))
                            }
                            parts.push(
                              <Link
                                key={`link-${paraIndex}-${idx}`}
                                href={m.href}
                                className="text-blue-600 hover:underline font-semibold"
                              >
                                {m.text}
                              </Link>
                            )
                            lastIndex = m.index + m.length
                          })
                          
                          if (lastIndex < para.length) {
                            parts.push(para.substring(lastIndex))
                          }

                          return (
                            <p key={paraIndex}>
                              {parts.length > 0 ? parts : para}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* 适合哪些人 / 不适合哪些人 */}
                  {item.suitableFor && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">适合哪些人 / 不适合哪些人</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                          <h4 className="font-bold text-green-800 mb-2">✅ 适合：</h4>
                          <ul className="text-slate-700 space-y-1 text-sm">
                            {item.suitableFor.split('、').map((item, i) => (
                              <li key={i}>• {item.trim()}</li>
                            ))}
                          </ul>
                        </div>
                        {item.notSuitableFor && (
                          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                            <h4 className="font-bold text-amber-800 mb-2">❌ 不适合：</h4>
                            <ul className="text-slate-700 space-y-1 text-sm">
                              {item.notSuitableFor.split('、').map((item, i) => (
                                <li key={i}>• {item.trim()}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                {item.cta && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <p className="text-slate-800 font-semibold mb-3">{item.cta}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/internet/diagnosis"
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                      >
                        免费地址覆盖查询
                        <ExternalLink size={18} />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-xl font-bold transition-colors"
                      >
                        中文咨询顾问
                      </Link>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* 底部 CTA 模块 */}
          <div className="mt-16 p-8 bg-blue-700 rounded-2xl text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              不确定您的地址能装哪些宽带？
            </h2>
            <p className="text-lg mb-6 text-blue-50">
              我们提供免费地址覆盖查询服务，帮您找到最适合的宽带方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/internet/diagnosis"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                立即查询地址覆盖
                <ExternalLink size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                联系中文顾问
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

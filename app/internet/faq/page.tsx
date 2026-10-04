import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, HelpCircle, ChevronRight } from 'lucide-react'
import { internetFAQData } from './data'

export const metadata: Metadata = {
  title: '美国宽带常见问题 FAQ｜涨价、安装、设备与 Wi-Fi｜美国鸿达电讯',
  description:
    '整理美国宽带涨价、安装、设备、网速、Wi-Fi、地址覆盖等常见问题，帮助中文用户先理解情况，再判断下一步。',
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
    canonical: 'https://oceanver.com/internet/faq',
  },
  openGraph: {
    title: '美国宽带常见问题 FAQ｜涨价、安装、设备与 Wi-Fi｜美国鸿达电讯',
    description: '整理美国宽带涨价、安装、设备、网速、Wi-Fi、地址覆盖等常见问题，帮助中文用户先理解情况，再判断下一步。',
    url: 'https://oceanver.com/internet/faq',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
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
          <div className="mb-8 rounded-xl border border-[#D8E2EA] bg-[#EDF5F9] p-4">
            <p className="font-bold text-[#202D3A]">遇到具体问题？</p>
            <p className="mt-1 text-sm leading-6 text-[#202D3A]">
              如果你遇到的是账单涨价、网速慢、Wi-Fi、设备、地址覆盖或安装问题，可以进入宽带问题诊断继续排查。{' '}
              <Link
                href="/internet/diagnosis"
                className="font-bold text-[#164B78] hover:underline"
              >
                进入宽带问题诊断
              </Link>{' '}
            </p>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              美国宽带常见问题（FAQ）
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-4">
              整理宽带类型、安装、涨价、设备、网速、Wi-Fi、地址覆盖等常见问题，帮助你先理解情况，再判断下一步。
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
                      相关运营商资料
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
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#D8E2EA] bg-[#EAF2F6] p-6 text-center md:p-8">
            <h2 className="text-2xl font-black text-[#202D3A]">还有具体问题？</h2>
            <p className="mx-auto mt-3 mb-6 max-w-2xl leading-7 text-[#202D3A]">
              如果你的情况涉及账单、网速、Wi-Fi、设备、地址覆盖或安装，可以进入宽带问题诊断继续排查。
            </p>
            <Link
              href="/internet/diagnosis"
              className="inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-6 py-3 font-bold text-white transition-colors hover:bg-[#103B60]"
            >
              进入宽带问题诊断
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

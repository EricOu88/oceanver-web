'use client'

import Link from 'next/link'
import { ArrowLeft, MessageCircle } from 'lucide-react'
// 确保路径指向你现有的 Schema 组件
import SpectrumServiceSchema from '../SpectrumServiceSchema'

export default function SpectrumFAQPage() {
  // 这里列出你最核心的几个 FAQ，必须与 Schema 组件里的内容一致
  const faqs = [
    {
      q: "Spectrum 宽带在湾区会涨价吗？",
      a: "大多数 Spectrum 套餐有 12-24 个月的促销期。促销期结束后会恢复标准价格，但我们可以协助您通过重新绑定服务或申请最新优惠来优化账单。"
    },
    {
      q: "Spectrum 安装需要多久？",
      a: "如果地址以前装过，支持自装（Self-Install），当天开通；如果需要技工上门，通常在 1-3 个工作日内可以预约。"
    },
    {
      q: "我需要签长期合约（Contract）吗？",
      a: "不需要。Spectrum 大多数住家套餐都是月结模式（Month-to-month），没有长期合约限制，随时可以取消或搬迁。"
    }
  ]

  return (
    <>
      {/* 1. 注入结构化数据 - 修复 Search Console 报错的核心 */}
      <SpectrumServiceSchema />

      <main className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* 返回链接 */}
          <Link 
            href="/internet/spectrum" 
            className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-blue-600 mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" /> 返回 Spectrum 详情页
          </Link>

          <h1 className="text-3xl font-black text-slate-900 mb-2">Spectrum 常见问题解答</h1>
          <p className="text-slate-600 mb-8">为您解答关于湾区 Spectrum 宽带安装、价格及服务的疑问。</p>

          {/* FAQ 列表 */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex gap-2">
                  <span className="text-blue-600">Q:</span> {faq.q}
                </h3>
                <p className="text-slate-700 leading-relaxed flex gap-2">
                  <span className="text-green-600 font-bold">A:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* 底部咨询卡片 */}
          <div className="mt-12 bg-blue-600 rounded-3xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">还有其他疑问？</h2>
            <p className="mb-6 opacity-90">我们的中文客服可以为您查询具体地址的最新优惠</p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                <MessageCircle size={18} /> 微信咨询
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

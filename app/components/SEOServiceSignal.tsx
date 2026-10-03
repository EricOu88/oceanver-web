'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, MessageCircle, Phone, HelpCircle, ArrowRight } from 'lucide-react'

const PHONE_DISPLAY = '510-849-6191'
const PHONE_NUMBER = '15108496191'
const WECHAT_ID = '美国鸿达电讯'

function WeChatModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false)

  if (!open) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(WECHAT_ID)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-slate-500 hover:text-slate-800"
        >
          ×
        </button>
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
          <MessageCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">添加在线中文客服</h3>
        <div className="relative aspect-square w-48 mx-auto bg-slate-50 rounded-2xl overflow-hidden border-4 border-white shadow-inner mt-6">
          <Image
            src="/wechat-qr.jpg"
            alt="微信客服"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 text-sm">{WECHAT_ID}</span>
            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs ${
                copied ? 'bg-green-600' : 'bg-blue-700'
              } text-white`}
            >
              {copied ? '已复制' : '复制'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SEOServiceSignal() {
  const [isWeChatOpen, setWeChatOpen] = useState(false)

  return (
    <>
      <WeChatModal open={isWeChatOpen} onClose={() => setWeChatOpen(false)} />
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200 rounded-3xl p-6 md:p-10 my-12">
        {/* 服务覆盖区域 */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-blue-600" size={24} />
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">【服务覆盖区域】</h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-3">
            我们面向美国中文用户提供手机套餐、家庭宽带和通信账单问题的中文协助。实际可用方案需结合运营商政策、账户条件和具体地址确认。
          </p>
          <p className="text-slate-700 leading-relaxed">
            可远程协助查询地址覆盖、套餐价格与安装时间。
          </p>
        </div>

        {/* 地址与账户条件 */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">【需要按地址或账户核实的情况】</h3>
          <p className="text-slate-700 leading-relaxed">
            宽带覆盖、促销资格和部分手机套餐条件会因地址、运营商及账户状态而异；不确定时先核对账单或联系运营商确认。
          </p>
        </div>

        {/* 中文人工协助 */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">【中文人工协助】</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            提供一对一中文咨询服务：
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <button
              onClick={() => setWeChatOpen(true)}
              className="flex items-center gap-3 p-4 bg-white border-2 border-blue-700 rounded-xl hover:bg-blue-50 transition"
            >
              <MessageCircle className="text-blue-700" size={24} />
              <div className="text-left">
                <div className="font-bold text-slate-900">微信：</div>
                <div className="text-sm text-slate-600">页面现有二维码</div>
              </div>
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition"
            >
              <Phone className="text-blue-600" size={24} />
              <div className="text-left">
                <div className="font-bold text-slate-900">电话：</div>
                <div className="text-sm text-slate-600">{PHONE_DISPLAY}</div>
              </div>
            </a>
          </div>
          <p className="text-slate-600 text-sm mt-4">
            服务时间：每天 9:00 – 21:00（美国西岸时间）
          </p>
        </div>

        {/* 常见问题 */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="text-blue-600" size={24} />
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">【常见问题】</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <p className="font-bold text-slate-900 mb-2">Q：我这个地址能安装吗？</p>
              <p className="text-slate-700">A：可以联系我们免费查询，通常 1 分钟内可确认。</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <p className="font-bold text-slate-900 mb-2">Q：多久可以完成安装？</p>
              <p className="text-slate-700">A：多数情况 1–3 个工作日，具体以地址为准。</p>
            </div>
          </div>
        </div>

        {/* 相关服务推荐 */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">【相关服务推荐】</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/internet"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
            >
              美国宽带套餐与覆盖判断
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/cellphone"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
            >
              美国手机套餐中文解析
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/internet/diagnosis"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-semibold transition"
            >
              新移民网络与通信方案
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import Image from 'next/image'
import { Phone, MessageCircle, Mail, Copy, X, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const WECHAT_ID = '美国鸿达电讯'
const PHONE_NUMBER = '15108496191' // For tel: and sms: links
const PHONE_DISPLAY = '510-849-6191' // For display text

export default function ContactEntry({
  title = '看完还是不确定？',
  subtitle = '如果涉及具体账单、账户资格、地址覆盖或促销条件，可以联系中文客服进一步核实。',
  variant = 'default',
}: {
  title?: string
  subtitle?: string
  variant?: 'default' | 'homepage'
}) {
  const [copied, setCopied] = useState(false)
  const [showQRModal, setShowQRModal] = useState(false)

  const copyWechat = () => {
    navigator.clipboard.writeText(WECHAT_ID)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const qrModal = showQRModal && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      onClick={() => setShowQRModal(false)}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => setShowQRModal(false)} className="absolute right-4 top-4 text-slate-400 transition-colors hover:text-slate-700" aria-label="关闭">
          <X size={24} />
        </button>
        <h3 className="mb-2 text-xl font-black text-slate-900">微信客服二维码</h3>
        <p className="mb-6 text-sm text-slate-600">长按保存或扫描添加</p>
        <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-2xl border-4 border-blue-100 bg-white shadow-xl">
          <Image src="/wechat-qr.jpg" alt="微信二维码｜美国鸿达电讯" fill className="object-contain p-2" priority />
        </div>
        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="mb-2 text-sm font-bold text-slate-700">微信号：</p>
          <button
            onClick={() => {
              copyWechat()
              setShowQRModal(false)
            }}
            className="mx-auto flex items-center justify-center gap-2 text-lg font-black text-blue-700 transition-colors hover:text-blue-900"
          >
            {WECHAT_ID}<Copy size={18} />
          </button>
          {copied && <p className="mt-2 text-xs font-semibold text-green-600">已复制到剪贴板</p>}
        </div>
        <p className="mt-4 text-xs text-slate-500">工作时间内可协助核实具体情况</p>
      </div>
    </div>
  )

  if (variant === 'homepage') {
    return (
      <section className="homepage-contact-card grid gap-8 rounded-[30px] border border-[#E8EDF1] bg-white p-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12 md:p-10">
        <div>
          <h2 className="text-2xl font-black text-slate-900 md:text-3xl">{title}</h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-600">{subtitle}</p>
        </div>
        <div className="divide-y divide-[#E9EEF2]">
          <button onClick={() => setShowQRModal(true)} className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-4 text-left first:pt-0 last:pb-0">
            <MessageCircle size={22} aria-hidden="true" className="text-[#2786A5]" />
            <span className="min-w-0">
              <span className="block font-bold text-[#202D3A]">微信咨询</span>
              <span className="mt-1 block text-sm leading-6 text-[#526170]">扫码添加客服<br />说明需要核实的问题<br />微信号：{WECHAT_ID}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#164B78]">查看二维码 <ArrowRight size={15} aria-hidden="true" /></span>
          </button>
          <a href={`tel:${PHONE_NUMBER}`} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
            <Phone size={22} aria-hidden="true" className="text-[#2786A5]" />
            <span className="min-w-0">
              <span className="block font-bold text-[#202D3A]">电话咨询</span>
              <span className="mt-1 block text-sm leading-6 text-[#526170]">直接拨打<br />美国号码，中文服务</span>
            </span>
            <span className="whitespace-nowrap text-sm font-semibold text-[#164B78]">{PHONE_DISPLAY}</span>
          </a>
          <a href={`sms:${PHONE_NUMBER}`} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
            <Mail size={22} aria-hidden="true" className="text-[#2786A5]" />
            <span className="min-w-0">
              <span className="block font-bold text-[#202D3A]">短信咨询</span>
              <span className="mt-1 block text-sm leading-6 text-[#526170]">发送短信<br />说明需要核实的问题</span>
            </span>
            <span className="text-sm font-semibold text-[#526170]">中文服务</span>
          </a>
        </div>
        {qrModal}
      </section>
    )
  }

  return (
    <section className="bg-white border border-[#D8E2EA] rounded-3xl p-4 md:p-6 space-y-4">
      {/* 标题 */}
      <div className="text-center space-y-1">
        <h2 className="text-xl md:text-2xl font-black text-slate-900">
          {title}
        </h2>
        <p className="text-slate-600 text-sm md:text-base">
          {subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-2 md:gap-3 items-stretch">
        {/* ================= 微信（主入口） ================= */}
        <button
          onClick={() => setShowQRModal(true)}
          className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl p-4 md:p-5 flex flex-col items-center text-center gap-2 transition-all shadow-sm hover:shadow-md transform hover:scale-105"
        >
          <MessageCircle size={28} className="text-white md:hidden" strokeWidth={2} />
          <MessageCircle size={32} className="text-white hidden md:block" strokeWidth={2} />
          <div className="space-y-1">
            <h3 className="text-base md:text-lg font-black text-white">微信咨询</h3>
            <p className="text-xs text-white/90 leading-relaxed">
              扫码添加客服<br />
              说明需要核实的问题
            </p>
            <p className="text-xs text-white/80 font-semibold mt-1.5">
              微信号：{WECHAT_ID}
            </p>
          </div>
        </button>

        {/* ================= 电话 ================= */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 rounded-xl p-4 md:p-5 flex flex-col items-center text-center gap-2 transition-all shadow-sm hover:shadow-md transform hover:scale-105"
        >
          <Phone size={28} className="text-blue-700 md:hidden" strokeWidth={2} />
          <Phone size={32} className="text-blue-700 hidden md:block" strokeWidth={2} />
          <div className="space-y-1">
            <h3 className="text-base md:text-lg font-black text-blue-700">电话咨询</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              直接拨打<br />
              美国本地号，中文服务
            </p>
            <p className="text-xs text-slate-700 font-semibold mt-1.5">
              {PHONE_DISPLAY}
            </p>
          </div>
        </a>

        {/* ================= 短信 ================= */}
        <a
          href={`sms:${PHONE_NUMBER}`}
          className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 rounded-xl p-4 md:p-5 flex flex-col items-center text-center gap-2 transition-all shadow-sm hover:shadow-md transform hover:scale-105"
        >
          <Mail size={28} className="text-blue-700 md:hidden" strokeWidth={2} />
          <Mail size={32} className="text-blue-700 hidden md:block" strokeWidth={2} />
          <div className="space-y-1">
            <h3 className="text-base md:text-lg font-black text-blue-700">短信咨询</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              发送短信<br />
              说明需要核实的问题
            </p>
            <p className="text-xs text-slate-700 font-semibold mt-1.5">
              中文服务
            </p>
          </div>
        </a>
      </div>

      {qrModal}
    </section>
  )
}

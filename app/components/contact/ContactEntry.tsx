'use client'

import Image from 'next/image'
import { Phone, MessageCircle, Mail, Copy, X } from 'lucide-react'
import { useState } from 'react'

const WECHAT_ID = '美国鸿达电讯'
const PHONE_NUMBER = '15108496191' // For tel: and sms: links
const PHONE_DISPLAY = '510-849-6191' // For display text

export default function ContactEntry({
  title = '看完还是不确定？',
  subtitle = '如果涉及具体账单、账户资格、地址覆盖或促销条件，可以联系中文客服进一步核实。'
}: {
  title?: string
  subtitle?: string
}) {
  const [copied, setCopied] = useState(false)
  const [showQRModal, setShowQRModal] = useState(false)

  const copyWechat = () => {
    navigator.clipboard.writeText(WECHAT_ID)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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

      {/* 二维码放大模态框 */}
      {showQRModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowQRModal(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQRModal(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="关闭"
            >
              <X size={24} />
            </button>

            <h3 className="text-xl font-black text-slate-900 mb-2">
              微信客服二维码
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              长按保存或扫描添加
            </p>

            <div className="relative mx-auto w-64 h-64 rounded-2xl overflow-hidden border-4 border-blue-100 shadow-xl bg-white">
              <Image
                src="/wechat-qr.jpg"
                alt="微信二维码｜美国鸿达电讯"
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm font-bold text-slate-700 mb-2">
                微信号：
              </p>
              <button
                onClick={() => {
                  copyWechat()
                  setShowQRModal(false)
                }}
                className="text-lg font-black text-blue-700 hover:text-blue-900 transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                {WECHAT_ID}
                <Copy size={18} />
              </button>
              {copied && (
                <p className="text-xs text-green-600 font-semibold mt-2">
                  已复制到剪贴板
                </p>
              )}
            </div>

            <p className="mt-4 text-xs text-slate-500">
              工作时间内可协助核实具体情况
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

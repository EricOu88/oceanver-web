'use client'

import { useState } from 'react'
import { Phone, MessageCircle, X } from 'lucide-react'
import Image from 'next/image'

const PHONE_NUMBER = '15108496191' // For tel: and sms: links (no dashes or plus)
const PHONE_DISPLAY = '510-849-6191' // For display text
const WECHAT_ID = '美国鸿达电讯'

function WeChatModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [cp, setCp] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(WECHAT_ID)
    setCp(true)
    setTimeout(() => setCp(false), 2000)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-8 w-full max-w-sm text-center animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute right-6 top-6 text-slate-500 hover:text-slate-800">
          <X size={24} />
        </button>

        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
          <MessageCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">添加在线中文客服</h3>
        <p className="text-slate-600 font-medium mb-6 text-sm">长按识别二维码 或 复制微信号</p>

        <div className="relative aspect-square w-52 mx-auto bg-slate-50 rounded-2xl overflow-hidden border-4 border-white shadow-inner">
          <Image src="/wechat-qr.jpg" alt="微信客服" fill unoptimized className="object-cover" />
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 text-sm">{WECHAT_ID}</span>
            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${
                cp ? 'bg-green-600' : 'bg-blue-700'
              } text-white`}
            >
              {cp ? '已复制' : '复制微信号'}
            </button>
          </div>

          <div className="p-3 bg-blue-50/80 rounded-2xl border border-dashed border-blue-300">
            <p className="font-mono font-extrabold text-lg text-blue-700 uppercase">美国鸿达电讯</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MobileContactBar() {
  const [isWeChatOpen, setWeChatOpen] = useState(false)

  return (
    <>
      <div
        id="mobile-contact-bar"
        className="fixed bottom-0 inset-x-0 z-[9999] md:hidden"
      >
        {/* 外层留白，避免按钮贴边 */}
        <div className="px-4 pb-4">
          <div className="flex gap-3">
            {/* 左：立即通话 */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex-1 flex items-center justify-center gap-2
                         rounded-xl bg-blue-600
                         py-4 text-white font-bold text-base
                         shadow-lg active:scale-95 transition"
            >
              <Phone size={20} />
              立即通话
            </a>

            {/* 中：微信咨询 */}
            <button
              onClick={() => setWeChatOpen(true)}
              className="flex-1 flex items-center justify-center gap-2
                         rounded-xl bg-emerald-600
                         py-4 text-white font-bold text-base
                         shadow-lg active:scale-95 transition"
            >
              <MessageCircle size={20} />
              微信咨询
            </button>

            {/* 右：免费短信咨询 */}
            <a
              href={`sms:${PHONE_NUMBER}`}
              className="flex-1 flex items-center justify-center gap-2
                         rounded-xl bg-green-500
                         py-4 text-white font-bold text-base
                         shadow-lg active:scale-95 transition"
            >
              <MessageCircle size={20} />
              短信咨询
            </a>
          </div>

          {/* 信任提示（很重要，但不抢眼） */}
          <div className="mt-2 text-center text-xs text-slate-500">
            🇺🇸 美国本地号码 · 🀄 中文回复 · 一般 10 分钟内
          </div>
        </div>
      </div>

      <WeChatModal open={isWeChatOpen} onClose={() => setWeChatOpen(false)} />
    </>
  )
}

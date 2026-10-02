'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import PriceHikeServiceSchema from '@/app/components/schema/PriceHikeServiceSchema';

import {
  AlertTriangle,
  TrendingUp,
  MessageCircle,
  Zap,
  CheckCircle2,
  X,
  ArrowRight,
  Copy
} from 'lucide-react';

/* ===================== 微信弹窗 ===================== */
function WeChatModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [cp, setCp] = useState(false);
  const ID = '美国鸿达电讯';

  const handleCopy = () => {
    navigator.clipboard.writeText(ID);
    setCp(true);
    setTimeout(() => setCp(false), 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-[2rem] shadow-2xl p-8 w-full max-w-sm text-center">
        <button onClick={onClose} className="absolute right-6 top-6 text-slate-500">
          <X size={24} />
        </button>

        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
          <MessageCircle size={32} />
        </div>

        <h3 className="text-xl font-bold mb-1">添加中文客服</h3>
        <p className="text-slate-600 mb-6 text-sm">免费检查你的宽带账单</p>

        <div className="relative aspect-square w-48 mx-auto rounded-2xl overflow-hidden border">
          <Image src="/wechat-qr.jpg" alt="微信客服二维码" fill unoptimized />
        </div>

        <div className="mt-6 flex items-center justify-between bg-slate-50 p-3 rounded-xl border">
          <span className="font-bold text-sm">{ID}</span>
          <button
            onClick={handleCopy}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold text-white ${
              cp ? 'bg-green-600' : 'bg-blue-700'
            }`}
          >
            {cp ? '已复制' : <><Copy size={12} /> 复制</>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PriceHikeClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ✅ Service Schema（只给 Google 看） */}
      <PriceHikeServiceSchema />

      <div className="min-h-screen bg-white text-slate-900">
        <WeChatModal open={open} onClose={() => setOpen(false)} />

        {/* 顶部 */}
        <nav className="border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between">
            <Link href="/internet" className="font-black">← 返回宽带</Link>
            <button onClick={() => setOpen(true)} className="text-blue-700 font-black">
              客服咨询
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-12 bg-slate-50 text-center px-6">
          <div className="inline-flex gap-2 bg-red-100 text-red-700 px-4 py-1 rounded-full text-xs font-bold mb-6">
            <AlertTriangle size={14} />
            多数宽带用户在 12–24 个月后会被涨价
          </div>

          <h1 className="text-3xl md:text-5xl font-black mb-4">
            美国宽带账单涨价解决方案
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600 mb-8">
            Xfinity / Spectrum / AT&T 账单变贵，可能与优惠到期、折扣失效、设备费或套餐变化有关。
            我们根据当前账单、地址、账户资格和使用需求，协助判断是否适合调整套餐或更换运营商。
            如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">美国鸿达电讯首页</Link>。
            常见问题如<Link href="/internet/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">宽带账单为什么会突然涨价？</Link>都有详细解答。
          </p>

          <button
            onClick={() => setOpen(true)}
            className="px-10 py-4 bg-blue-700 text-white rounded-2xl font-black shadow-xl"
          >
            免费检查我的账单
          </button>
        </section>

        {/* 三步 */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { icon: <TrendingUp />, title: '账单审核', desc: '检查隐藏涨价与优惠失效' },
              { icon: <Zap />, title: '转网 / 新户', desc: '结合地址和账户资格比较可选方案' },
              { icon: <CheckCircle2 />, title: 'Retention 谈价', desc: '指导或代沟通争取优惠' },
            ].map((i, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl">
                <div className="mb-4 text-blue-600">{i.icon}</div>
                <h3 className="font-black mb-2">{i.title}</h3>
                <p className="text-sm text-slate-600">{i.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-6 border-t text-center">
          <button
            onClick={() => setOpen(true)}
            className="w-full max-w-3xl mx-auto py-8 bg-slate-900 text-white rounded-[2.5rem] font-black text-xl"
          >
            添加客服 · 开始账单优化 <ArrowRight className="inline ml-2" />
          </button>
        </section>

        <footer className="py-8 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} 美国鸿达电讯 · 宽带账单检查服务
        </footer>
      </div>
    </>
  );
}

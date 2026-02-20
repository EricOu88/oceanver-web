'use client';

import Link from 'next/link';
import { ChevronLeft, MessageCircle } from 'lucide-react';
import { WeChatModalProvider, useWeChatModal } from './WeChatModalContext';
import { MobileFixedCTA } from './MobileFixedCTA';

export function ProvidersShell({ children }: { children: React.ReactNode }) {
  return (
    <WeChatModalProvider>
      <ProvidersShellInner>{children}</ProvidersShellInner>
      <MobileFixedCTA />
    </WeChatModalProvider>
  );
}

function ProvidersShellInner({ children }: { children: React.ReactNode }) {
  const openModal = useWeChatModal();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/cellphone" className="group flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ChevronLeft size={18} />
              </div>
              <span className="font-bold text-sm text-slate-500 group-hover:text-blue-600 transition-colors">返回</span>
            </Link>
            <div className="w-[1px] h-4 bg-slate-200" />
            <Link href="/" className="font-black text-lg tracking-tight">返回首页</Link>
          </div>
          <button
            onClick={openModal}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-xs font-black hover:bg-green-700 transition-all shadow-md active:scale-95"
          >
            <MessageCircle size={16} />
            微信咨询
          </button>
        </div>
      </nav>
      {children}
    </div>
  );
}

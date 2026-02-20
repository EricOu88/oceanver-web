'use client';

import { Zap } from 'lucide-react';
import { useWeChatModal } from './WeChatModalContext';

export function BottomCTAButton() {
  const openModal = useWeChatModal();

  return (
    <button
      onClick={openModal}
      className="group w-full py-10 bg-blue-600 text-white rounded-[2.5rem] shadow-2xl hover:bg-blue-700 transition-all flex flex-col items-center justify-center gap-3"
    >
      <div className="flex items-center gap-4">
        <Zap size={32} className="fill-white" />
        <span className="text-xl md:text-3xl font-black tracking-tight">
          联系客服，免费定制方案
        </span>
      </div>
      <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.3em]">
        WeChat: 美国鸿达电讯
      </p>
    </button>
  );
}

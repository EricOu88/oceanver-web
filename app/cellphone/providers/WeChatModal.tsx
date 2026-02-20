'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, MessageCircle, Copy } from 'lucide-react';

export function WeChatModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-[2rem] shadow-2xl p-8 w-full max-w-sm text-center animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-slate-500 hover:text-slate-800"
        >
          <X size={24} />
        </button>
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
          <MessageCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">添加在线中文客服</h3>
        <p className="text-slate-600 font-medium mb-6 text-sm">
          查询各大运营商最新优惠及套餐
        </p>
        <div className="relative aspect-square w-48 mx-auto bg-slate-50 rounded-2xl overflow-hidden border-4 border-white shadow-inner">
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
            <span className="font-bold text-slate-900 text-sm">{ID}</span>
            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1 ${cp ? 'bg-green-600' : 'bg-blue-700'} text-white`}
            >
              {cp ? '已复制' : <><Copy size={12} /> 复制</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

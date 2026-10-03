'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { useWeChatModal } from './WeChatModalContext';

const buttonColorClasses = 'bg-blue-700 hover:bg-blue-800';

export function CardButtons({
  solutionHref,
  buttonText = '查看适合的方案 →',
}: {
  solutionHref: string;
  buttonText?: string;
}) {
  const openModal = useWeChatModal();

  return (
    <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-slate-100">
      <Link
        href={solutionHref}
        className={`text-center px-4 py-3 rounded-2xl font-black text-sm transition-all active:scale-95 text-white ${buttonColorClasses} group`}
      >
        {buttonText}
      </Link>
      <button
        onClick={openModal}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-black text-sm border border-slate-200 hover:bg-slate-50 transition-all active:scale-95"
      >
        <MessageCircle size={16} className="text-blue-700" />
        咨询中文客服
      </button>
    </div>
  );
}

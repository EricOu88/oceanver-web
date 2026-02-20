'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { useWeChatModal } from './WeChatModalContext';

const buttonColorClasses = {
  blue: 'bg-blue-600 hover:bg-blue-700',
  indigo: 'bg-indigo-600 hover:bg-indigo-700',
  green: 'bg-green-600 hover:bg-green-700',
  orange: 'bg-orange-600 hover:bg-orange-700',
  purple: 'bg-purple-600 hover:bg-purple-700',
} as const;

export function CardButtons({
  solutionHref,
  color,
  buttonText = '查看适合的方案 →',
}: {
  solutionHref: string;
  color: string;
  buttonText?: string;
}) {
  const openModal = useWeChatModal();

  return (
    <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-slate-100">
      <Link
        href={solutionHref}
        className={`text-center px-4 py-3 rounded-2xl font-black text-sm transition-all active:scale-95 text-white ${buttonColorClasses[color as keyof typeof buttonColorClasses] ?? buttonColorClasses.blue} group`}
      >
        {buttonText}
      </Link>
      <button
        onClick={openModal}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-black text-sm border border-slate-200 hover:bg-slate-50 transition-all active:scale-95"
      >
        <MessageCircle size={16} className="text-green-600" />
        咨询中文客服
      </button>
    </div>
  );
}

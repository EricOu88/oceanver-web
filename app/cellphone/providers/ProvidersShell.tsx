import type { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export function ProvidersShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FCFDFE] text-[#202D3A]">
      <nav className="sticky top-0 z-40 border-b border-[#D5E5EC] bg-white/90 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            href="/cellphone"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#526170] transition hover:text-[#164B78]"
          >
            <ChevronLeft size={18} />
            手机问题中心
          </Link>
          <Link
            href="/cellphone/diagnosis"
            className="text-sm font-bold text-[#164B78] transition hover:text-[#103B60]"
          >
            还没判断清楚？先做诊断
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
}

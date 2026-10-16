'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Star } from 'lucide-react';

const links = [
  { href: '/', label: '首页' },
  { href: '/cellphone', label: '手机问题' },
  { href: '/internet', label: '宽带问题' },
  { href: '/blog', label: '博客' },
  { href: '/contact', label: '联系' },
];

export default function SiteHeader() {
  const pathname = usePathname() || '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D5E5EC] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-3 sm:h-16 sm:px-5">
        <Link href="/" aria-label="返回首页" className="shrink-0">
          <Image src="/bms-logo.png" alt="美国鸿达电讯" width={125} height={37} priority className="h-auto w-[100px] sm:w-[125px]" />
        </Link>
        <nav aria-label="全站主导航" className="min-w-0 flex-1 overflow-x-auto overscroll-x-contain whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max min-w-full items-center justify-end gap-1 sm:gap-2">
            {links.filter((link) => pathname !== '/' || link.href !== '/').map((link) => {
              const selected = link.href === '/' ? pathname === '/' : pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={selected ? 'page' : undefined}
                  className={`shrink-0 rounded-md px-2.5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78] ${selected ? 'bg-[#164B78] text-white' : 'text-[#202D3A] hover:bg-[#F4F8FA] hover:text-[#164B78]'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
        <a href="https://search.google.com/local/reviews?placeid=ChIJX6ngelzGj4ARrdcNVV0c-Gc" target="_blank" rel="noopener noreferrer" aria-label="查看 Google 评论" className="hidden shrink-0 items-center gap-1.5 rounded-md border border-[#D5E5EC] px-2.5 py-2 text-sm font-semibold text-[#164B78] hover:bg-[#F4F8FA] lg:inline-flex">
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          查看 Google 评论
        </a>
      </div>
    </header>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const linkBase = 'px-1 py-2 font-medium text-gray-800 hover:text-blue-700 transition-colors';
  const active = 'text-blue-700';
  const isActive = (check: (path: string) => boolean) => (check(pathname) ? active : '');
  const links = [
    { href: '/', label: '首页', isActive: (path: string) => path === '/' },
    { href: '/cellphone', label: '手机套餐', isActive: (path: string) => path.startsWith('/cellphone') },
    { href: '/internet', label: '宽带网络', isActive: (path: string) => path.startsWith('/internet') },
    { href: '/blog', label: '最新资讯', isActive: (path: string) => path.startsWith('/blog') },
    { href: '/contact', label: '联系我们', isActive: () => false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-sm bg-white supports-[backdrop-filter]:bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 md:h-20 items-center gap-4">
          <Link href="/" aria-label="首页" className="flex-shrink-0">
            <Image src="/bms-logo.png" alt="美国鸿达电讯" width={150} height={44} priority />
          </Link>

          <nav className="ml-2 hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-7 lg:gap-8">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className={`${linkBase} ${isActive(link.isActive)}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="ml-auto hidden sm:flex items-center gap-3">
            <a href="tel:15108496191" className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-semibold text-gray-800 hover:bg-gray-50">
              ☎ 510-849-6191
            </a>
            <a href="#wechat" className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-semibold text-gray-800 hover:bg-gray-50" title="微信公众号客服">
              微信公众号客服
            </a>
          </div>

          <button className="md:hidden inline-flex items-center rounded-md border px-3 py-2 text-sm text-gray-800" onClick={() => setOpen(!open)} aria-expanded={open}>
            菜单
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-4 text-sm text-gray-800">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={linkBase}>
                {link.label}
              </Link>
            ))}
            <a href="#wechat" onClick={() => setOpen(false)} className={linkBase}>微信公众号客服</a>
          </div>
        </div>
      )}
    </header>
  );
}

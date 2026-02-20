'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';

  // Language detection: EN uses /en, Chinese is default (root)
  const isEn = pathname.startsWith('/en');

  // Strip leading /en to get neutral path
  const neutral = pathname.replace(/^\/en/, '') || '/';

  // Build path in current language
  const p = (path: string) => {
    if (path === '/') return isEn ? '/en' : '/';
    return isEn ? `/en${path}` : path;
  };

  // Language switch links (same page)
  const zhHref = neutral === '/' ? '/' : neutral;
  const enHref = neutral === '/' ? '/en' : `/en${neutral}`;

  // i18n labels
  const t = isEn
    ? {
        home: 'Home',
        cell: 'Cell Plans',
        internet: 'Internet',
        security: 'Security',
        blog: 'Blog',
        contact: 'Contact',
        phone: '☎ 510-849-6191',
        wechat: 'WeChat QR',
        en: 'EN',
        zh: '中文',
      }
    : {
        home: '首页',
        cell: '手机套餐',
        internet: '宽带网络',
        security: '安防报警',
        blog: '最新资讯',
        contact: '联系我们',
        phone: '☎ 510-849-6191',
        wechat: '微信客服公众号',
        en: 'EN',
        zh: '中文',
      };

  const linkBase =
    'px-1 py-2 font-medium text-gray-800 hover:text-blue-700 transition-colors';
  const active = 'text-blue-700';
  const isActive = (check: (p: string) => boolean) =>
    check(pathname) ? active : '';

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-sm bg-white supports-[backdrop-filter]:bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 md:h-20 items-center gap-4">
          {/* Logo */}
          <Link href={p('/')} aria-label="Bay Media Star Home" className="flex-shrink-0">
            <Image
              src="/bms-logo.png"
              alt="Bay Media Star Inc (鸿达电讯)"
              width={150}
              height={44}
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="ml-2 hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-7 lg:gap-8">
              <Link
                href={p('/')}
                className={`${linkBase} ${isActive(p => p === '/' || p === '/en')}`}
              >
                {t.home}
              </Link>
              <Link
                href={p('/cellphone')}
                className={`${linkBase} ${isActive(p => p.startsWith('/cellphone') || p.startsWith('/en/cellphone'))}`}
              >
                {t.cell}
              </Link>
              <Link
                href={p('/internet')}
                className={`${linkBase} ${isActive(p => p.startsWith('/internet') || p.startsWith('/en/internet'))}`}
              >
                {t.internet}
              </Link>
              <Link
                href={p('/security')}
                className={`${linkBase} ${isActive(p => p.startsWith('/security') || p.startsWith('/en/security'))}`}
              >
                {t.security}
              </Link>
              <Link
                href={p('/blog')}
                className={`${linkBase} ${isActive(p => p.startsWith('/blog') || p.startsWith('/en/blog'))}`}
              >
                {t.blog}
              </Link>
              <Link
                href={p('/blog/bay-area-internet-guide')}
                className={`${linkBase} ${isActive(p => p === '/blog/bay-area-internet-guide' || p === '/en/blog/bay-area-internet-guide')}`}
              >
                {isEn ? 'Money-Saving Guide' : '省钱攻略'}
              </Link>
              <Link href={p('/contact')} className={linkBase}>
                {t.contact}
              </Link>
            </div>
          </nav>

          {/* Mobile language switch */}
          <div className="sm:hidden ml-auto">
            <div className="inline-flex items-center overflow-hidden rounded-full border border-gray-400 bg-white shadow-sm">
              <Link
                href={zhHref}
                className={`px-3 py-1.5 text-sm font-semibold ${
                  !isEn ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {t.zh}
              </Link>
              <Link
                href={enHref}
                className={`px-3 py-1.5 text-sm font-semibold ${
                  isEn ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {t.en}
              </Link>
            </div>
          </div>

          {/* Right actions (desktop) */}
          <div className="ml-auto hidden sm:flex items-center gap-3">
            <a
              href="tel:15108496191"
              className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              {t.phone}
            </a>
            <a
              href="#wechat"
              className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
              title={t.wechat}
            >
              {t.wechat}
            </a>
            <div className="inline-flex items-center overflow-hidden rounded-full border border-gray-400 bg-white shadow-sm">
              <Link
                href={zhHref}
                className={`px-3 py-1.5 text-sm font-semibold ${
                  !isEn ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {t.zh}
              </Link>
              <Link
                href={enHref}
                className={`px-3 py-1.5 text-sm font-semibold ${
                  isEn ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {t.en}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center rounded-md border px-3 py-2 text-sm text-gray-800"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-4 text-sm text-gray-800">
            <Link href={p('/')} onClick={() => setOpen(false)} className={linkBase}>
              {t.home}
            </Link>
            <Link href={p('/cellphone')} onClick={() => setOpen(false)} className={linkBase}>
              {t.cell}
            </Link>
            <Link href={p('/internet')} onClick={() => setOpen(false)} className={linkBase}>
              {t.internet}
            </Link>
            <Link href={p('/security')} onClick={() => setOpen(false)} className={linkBase}>
              {t.security}
            </Link>
            <Link href={p('/blog')} onClick={() => setOpen(false)} className={linkBase}>
              {t.blog}
            </Link>
            <Link href={p('/blog/bay-area-internet-guide')} onClick={() => setOpen(false)} className={linkBase}>
              {isEn ? 'Money-Saving Guide' : '省钱攻略'}
            </Link>
            <Link href={p('/contact')} onClick={() => setOpen(false)} className={linkBase}>
              {t.contact}
            </Link>
            <a href="#wechat" onClick={() => setOpen(false)} className={linkBase}>
              {t.wechat}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

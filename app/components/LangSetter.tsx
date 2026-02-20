'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Keeps <html lang="..."> in sync with the current language.
 * - en for /en/**
 * - zh for all other routes
 */
export default function LangSetter() {
  const pathname = usePathname() || '/';

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith('/en')
      ? 'en'
      : 'zh';
  }, [pathname]);

  return null;
}

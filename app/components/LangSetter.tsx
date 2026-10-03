'use client';

import { useEffect } from 'react';

/**
 * Keeps the document language set to Chinese.
 */
export default function LangSetter() {
  useEffect(() => {
    document.documentElement.lang = 'zh-CN';
  }, []);

  return null;
}

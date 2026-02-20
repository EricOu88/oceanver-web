'use client';

import Link from 'next/link';

export default function MobileContactFAB() {
  // Mobile-only: fixed, z-high, pinned to bottom-right with safe-area padding
  return (
    <div
      aria-label="Quick contact"
      className={[
        // show on small screens only
        'fixed sm:hidden z-[70]',
        // pin to bottom-right; add safe-area offsets for iOS
        'right-3 bottom-3',
        'supports-[bottom:env(safe-area-inset-bottom)]:bottom-[calc(env(safe-area-inset-bottom)+12px)]',
        'supports-[right:env(safe-area-inset-right)]:right-[calc(env(safe-area-inset-right)+12px)]',
        // prevent accidental text selection
        'select-none'
      ].join(' ')}
    >
      {/* Single primary FAB */}
      <div className="flex flex-col items-end gap-2">
        {/* Call */}
        <a
          href="tel:15108496191"
          className="rounded-full bg-blue-600 text-white shadow-lg shadow-black/20
                     w-14 h-14 flex items-center justify-center
                     active:scale-95 transition-transform
                     border border-white/20"
          aria-label="Call 510-849-6191"
        >
          📞
        </a>

        {/* Chat anchor (scrolls to footer WeChat QR) */}
        <Link
          href="#wechat"
          className="rounded-full bg-white text-gray-900 shadow-lg shadow-black/20
                     w-14 h-14 flex items-center justify-center
                     active:scale-95 transition-transform
                     border border-gray-300"
          aria-label="WeChat QR"
        >
          💬
        </Link>
      </div>
    </div>
  );
}

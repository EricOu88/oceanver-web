'use client';

import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export default function SiteNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* 左侧 LOGO */}
        <Link href="/zh" className="font-bold text-xl text-gray-900">
          Bay Media Star
        </Link>

        {/* 右侧按钮组 */}
        <div className="flex items-center gap-4">

          {/* 电话咨询 */}
          <a
            href="tel:15108496191"
            className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 transition"
          >
            <Phone className="w-4 h-4" />
            510-849-6191
          </a>

          {/* 微信按钮：滚动到页面中的“微信客服”区 */}
          <a
            href="#wechat-contact"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow flex items-center gap-1 text-sm transition"
          >
            <MessageCircle className="w-4 h-4" />
            微信
          </a>

        </div>
      </div>
    </header>
  );
}

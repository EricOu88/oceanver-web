'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

/**
 * 返回首页按钮组件
 * 推荐：全站业务页统一使用
 */

/* ===== 样式 1：左上角固定悬浮（默认 / 最推荐） ===== */
export function BackToHomeFloating() {
  return (
    <Link
      href="/"
      className="
        fixed top-6 left-6 z-50
        flex items-center gap-3
        bg-white hover:bg-slate-50
        shadow-lg hover:shadow-xl
        border-2 border-slate-200 hover:border-blue-300
        px-5 py-3
        rounded-2xl
        transition-all duration-300
        active:scale-95
      "
    >
      <ArrowLeft
        size={20}
        className="text-blue-700 transition-transform group-hover:-translate-x-1"
      />
      <span className="font-bold text-slate-900">返回首页</span>
    </Link>
  );
}

/* ===== 样式 2：页面顶部横条（可选） ===== */
export function BackToHomeBar() {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-bold transition-colors"
        >
          <ArrowLeft size={18} />
          返回首页
        </Link>
      </div>
    </div>
  );
}

/* ===== 默认导出：悬浮按钮 ===== */
export default function BackToHomeButton() {
  return <BackToHomeFloating />;
}

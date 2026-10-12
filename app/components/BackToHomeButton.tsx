import Link from 'next/link';

export function BackToHomeFloating() {
  return <nav aria-label="页面返回导航" className="page-nav-row mx-auto max-w-7xl px-4"><Link href="/" className="page-nav-button">← 返回首页</Link></nav>;
}

export function BackToHomeBar() {
  return <BackToHomeFloating />;
}

export default BackToHomeFloating;

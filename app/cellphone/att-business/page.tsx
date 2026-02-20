import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AT&T 商业手机方案 - 湾区华人办理 | 鸿达电信',
  description: 'AT&T 商业手机方案，适合公司、店铺、团队多线。商业专属折扣，可扩展多号码。湾区中文办理。',
  alternates: { canonical: 'https://baymediastar.com/cellphone/att-business' },
};

export default function AttBusinessPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          AT&T 商业手机方案
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          适合公司、店铺、团队多线。商业专属折扣，可扩展多号码。
        </p>
        <Link
          href="/cellphone/att/business-faq"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition"
        >
          查看 AT&T 商业计划详情 →
        </Link>
        <p className="mt-6">
          <Link href="/cellphone" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← 返回电话卡总览
          </Link>
        </p>
      </div>
    </main>
  );
}

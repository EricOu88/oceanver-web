import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AT&T 家庭合约机 - 湾区华人办理 | 鸿达电信',
  description: 'AT&T 家庭合约计划，多线更优惠，适合家庭长期使用。iPhone/Samsung 合约机，携号转网有补贴。湾区中文办理。',
  alternates: { canonical: 'https://baymediastar.com/cellphone/att-family' },
};

export default function AttFamilyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          AT&T 家庭合约机
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          适合家庭多线、长期使用。多线更优惠，正规账单，长期更稳定。
        </p>
        <Link
          href="/cellphone/att"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition"
        >
          查看 AT&T 套餐详情（含家庭计划）→
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

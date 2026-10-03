import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '预付费电话卡 Prepaid 申请说明 | 美国鸿达电讯',
  description: '预付费电话卡（Prepaid）说明，帮助比较新移民、留学生及不同账户条件下的方案。可用资格、价格和换套餐规则会变化，办理前需核实当前条件。',
  alternates: { canonical: 'https://oceanver.com/cellphone/prepaid' },
};

export default function PrepaidPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          预付费电话卡（Prepaid）专区
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          适合新移民、留学生、无 SSN、预算优先。无需合约，可随时换套餐。
        </p>
        <div className="space-y-4">
          <Link
            href="/cellphone/genmobile"
            className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
          >
            Gen Mobile 预付费方案 →
          </Link>
          <Link
            href="/cellphone/ultra"
            className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
          >
            Ultra Mobile 预付费方案 →
          </Link>
          <Link href="/cellphone" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← 返回电话卡总览
          </Link>
        </div>
      </div>
    </main>
  );
}

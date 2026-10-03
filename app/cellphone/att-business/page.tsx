import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AT&T 商业手机方案申请说明 | 美国鸿达电讯',
  description: 'AT&T 商业手机方案说明，适合比较公司、店铺或团队多线的账户条件。价格、设备、折扣和服务资格会变化，是否适合需结合线路数量、实际使用和当前规则判断。',
  alternates: { canonical: 'https://oceanver.com/cellphone/att-business' },
};

export default function AttBusinessPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          AT&T 商业手机方案
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          适合公司、店铺、团队多线。具体账户条件、价格和可用优惠需以当前运营商规则核实。
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

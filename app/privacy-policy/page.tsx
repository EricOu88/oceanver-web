import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '隐私政策',
  description:
    '鸿达电讯 Bay Media Star 隐私政策。说明我们在网站与服务过程中如何收集、使用和保护用户信息。',
  alternates: {
    canonical: 'https://baymediastar.com/privacy-policy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-slate-800">
      <h1 className="text-3xl font-extrabold mb-6">
        隐私政策（Privacy Policy）
      </h1>

      <p className="text-sm text-slate-500 mb-8">
        最后更新：2025 年
      </p>

      <section className="space-y-6 leading-relaxed">
        <p>
          鸿达电讯 Bay Media Star（以下简称“我们”）非常重视用户的隐私与个人信息保护。
          本隐私政策说明我们如何收集、使用和保护您的信息。
        </p>

        <h2 className="text-xl font-bold">我们收集的信息</h2>
        <ul className="list-disc pl-6">
          <li>姓名、电话、微信等联系方式</li>
          <li>咨询内容与服务记录</li>
          <li>基础访问数据（用于网站优化）</li>
        </ul>

        <h2 className="text-xl font-bold">信息的使用方式</h2>
        <ul className="list-disc pl-6">
          <li>提供通信与宽带顾问服务</li>
          <li>改进服务质量与用户体验</li>
          <li>不出售、不滥用用户信息</li>
        </ul>

        <h2 className="text-xl font-bold">联系我们</h2>
        <p>
          电话：+1-510-849-6191
        </p>
      </section>
    </main>
  );
}

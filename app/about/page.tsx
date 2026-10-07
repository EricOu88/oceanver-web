import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: '关于 Oceanver｜美国鸿达电讯',
  description:
    'Oceanver 面向美国中文用户整理手机与家庭宽带问题：先判断原因，再比较方案，只有真实账户、地址或资格无法公开确认时才进入人工核实。',
  alternates: { canonical: getCanonicalUrl('/about') },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: '关于 Oceanver - 美国鸿达电讯',
  about: { '@id': 'https://oceanver.com/#organization' },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">← 返回首页</Link>

        <header className="py-10">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">关于 Oceanver</p>
          <h1 className="text-3xl font-black md:text-5xl">把手机和宽带问题先讲清楚，再决定要不要改变</h1>
          <p className="mt-5 text-lg leading-8 text-[#526170]">
            Oceanver 由美国鸿达电讯运营，面向美国中文用户整理手机、家庭宽带、账单和账户条件问题。
          </p>
        </header>

        <section className="space-y-5 rounded-3xl border border-[#D5E5EC] bg-white p-6 leading-8 text-[#526170] sm:p-8">
          <p>
            我们不希望用户先看到运营商品牌和优惠，再倒推自己应该买什么。更合理的顺序是先确认问题：
            账单为什么变、网络为什么慢、设备和号码有什么限制、家庭线路是否应该一起动。
          </p>
          <p>
            网站能解释公开规则、常见原因和判断路径，但不会把固定价格、固定资格或单个促销当成长期答案。
            当前账户、地址、设备、订单和后台资格无法公开确认时，再进入人工核实。
          </p>
          <p>
            Oceanver 与美国鸿达电讯的目标不是把每个问题都变成销售机会，而是减少误判：
            能自助的先自助，能继续观察的继续观察，只有真正值得比较时才比较方案。
          </p>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          <Link href="/cellphone/diagnosis" className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 font-bold text-[#246B95]">
            手机问题诊断 <ArrowRight className="mt-2" size={17} />
          </Link>
          <Link href="/internet/diagnosis" className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 font-bold text-[#246B95]">
            宽带问题诊断 <ArrowRight className="mt-2" size={17} />
          </Link>
          <Link href="/contact" className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 font-bold text-[#246B95]">
            需要时人工核实 <ArrowRight className="mt-2" size={17} />
          </Link>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: '猜你想问？手机与宽带问题知识入口｜美国鸿达电讯',
  description:
    '从手机 FAQ、宽带 FAQ、账单检查和问题诊断进入，不用先搜索运营商名称。Oceanver 将问题按判断路径整理，而不是重复堆文章。',
  alternates: { canonical: 'https://oceanver.com/blog' },
};

const entries = [
  ['/cellphone/faq', '手机问题知识库', '账单、信号、eSIM、转号、设备、家庭多线与国际使用。'],
  ['/internet/faq', '宽带问题知识库', '账单、Wi-Fi、断网、设备、搬家、安装与取消。'],
  ['/bill-optimization', '手机与宽带账单检查', '先确认哪个费用项目发生变化，再判断是否需要处理。'],
  ['/cellphone/diagnosis', '手机问题诊断', '问题还不清楚时，从现象开始缩小范围。'],
  ['/internet/diagnosis', '宽带问题诊断', '区分设备、Wi-Fi、线路、账户与地址问题。'],
  ['/why-us', '真实问题与处理案例', '看类似现象如何一步步判断，以及哪些信息必须核实。'],
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">← 返回首页</Link>
        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            问题知识入口
          </p>
          <h1 className="text-3xl font-black sm:text-5xl">猜你想问？先按问题找，不按运营商找</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#526170]">
            Oceanver 不用大量重复文章覆盖同一个问题。每个问题尽量保留一个主节点，
            需要解释就看知识页，需要判断就进 Diagnosis。
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {entries.map(([href, title, desc], index) => (
            <Link key={href} href={href} className="group rounded-2xl border border-[#D5E5EC] bg-white p-6 hover:border-[#246B95]">
              {index < 2 ? <BookOpen className="text-[#2786A5]" size={24} /> : <Search className="text-[#2786A5]" size={24} />}
              <h2 className="mt-3 text-xl font-black">{title}</h2>
              <p className="mt-2 leading-7 text-[#526170]">{desc}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-bold text-[#246B95]">
                进入 <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </section>

        <p className="py-8 text-center text-xs text-[#526170]">
          最后更新：2026年10月｜知识内容用于判断方向；具体账户、资格、地址与后台状态需按实际情况核实。
        </p>
      </div>
    </main>
  );
}

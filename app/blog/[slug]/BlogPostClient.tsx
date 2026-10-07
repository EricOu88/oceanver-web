'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, Search } from 'lucide-react'

export default function BlogPostClient() {
  return (
    <section className="mt-12 mb-12 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 md:p-8">
      <h2 className="text-xl font-black text-[#202D3A] md:text-2xl">
        这个问题下一步怎么查？
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-[#526170]">
        文章只负责解释问题。真正涉及账单、设备、账户、地址或资格时，
        应进入对应诊断或知识节点继续判断；只有网页无法确认的部分，再进入人工核实。
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Link
          href="/cellphone/diagnosis"
          className="rounded-xl border border-[#D5E5EC] bg-white p-5 transition hover:border-[#246B95]"
        >
          <Search className="mb-3 text-[#2786A5]" size={22} />
          <h3 className="font-black text-[#202D3A]">手机问题诊断</h3>
          <p className="mt-2 text-sm leading-6 text-[#526170]">
            账单、信号、eSIM、转号、设备分期或家庭多线。
          </p>
          <span className="mt-4 inline-flex items-center gap-2 font-bold text-[#164B78]">
            继续判断 <ArrowRight size={15} />
          </span>
        </Link>

        <Link
          href="/internet/diagnosis"
          className="rounded-xl border border-[#D5E5EC] bg-white p-5 transition hover:border-[#246B95]"
        >
          <BookOpen className="mb-3 text-[#2786A5]" size={22} />
          <h3 className="font-black text-[#202D3A]">宽带问题诊断</h3>
          <p className="mt-2 text-sm leading-6 text-[#526170]">
            涨价、Wi-Fi、断网、设备、安装、地址或搬家。
          </p>
          <span className="mt-4 inline-flex items-center gap-2 font-bold text-[#164B78]">
            继续判断 <ArrowRight size={15} />
          </span>
        </Link>

        <Link
          href="/contact"
          className="rounded-xl border border-[#D5E5EC] bg-white p-5 transition hover:border-[#246B95]"
        >
          <ArrowRight className="mb-3 text-[#2786A5]" size={22} />
          <h3 className="font-black text-[#202D3A]">网页无法确认</h3>
          <p className="mt-2 text-sm leading-6 text-[#526170]">
            真实账户、地址覆盖、资格、设备余额或当前活动需要进一步核实。
          </p>
          <span className="mt-4 inline-flex items-center gap-2 font-bold text-[#164B78]">
            需要时进入人工核实 <ArrowRight size={15} />
          </span>
        </Link>
      </div>
    </section>
  )
}

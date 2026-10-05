import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

const QUESTIONS = [
  {
    title: '账单变贵了？',
    description: '先区分折扣、设备费和一次性收费。',
    link: '查账单为什么变贵',
    href: '/bill-optimization',
  },
  {
    title: '网速慢或断网？',
    description: '先分清服务、设备和 Wi-Fi 覆盖。',
    link: '查宽带问题',
    href: '/internet/diagnosis',
  },
  {
    title: '要转号或换机？',
    description: '旧线路先别取消。',
    link: '查看手机转号与设备问题判断',
    href: '/cellphone/diagnosis',
  },
];

export default function HeroSection() {
  return (
    <section className="home-hero bg-[#FCFDFE]">
      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-6 md:pt-16 md:pb-14 lg:pt-20 lg:pb-16">
        <div className="grid items-center gap-7 lg:items-start lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="min-w-0">
            <p className="mb-4 inline-flex rounded-full border border-[#D8E2EA] bg-[#EDF5F9] px-3.5 py-1 text-sm font-bold text-[#246B95]">
              美国手机与宽带问题判断
            </p>
            <h1 className="text-[32px] font-black leading-[1.02] tracking-tight text-[#202D3A] sm:text-5xl lg:text-[54px] xl:text-[68px] 2xl:text-[72px]">
              <span className="block">手机、宽带账单</span>
              <span className="block text-[#2786A5]">怎么又贵了？</span>
            </h1>
            <p className="mt-5 max-w-[620px] text-base leading-7 text-[#526170] md:text-lg md:leading-8">
              账单变贵、网速变慢或准备转号时，不一定要立刻换运营商或升级套餐。先查清费用或服务为什么变化，再确认问题属于网络、设备、账户还是地址，最后决定下一步。
            </p>
          </div>

          <div className="relative mx-auto aspect-[16/9] w-full max-w-xl overflow-hidden rounded-[30px] bg-[#EDF5F9] md:aspect-[16/10] lg:mt-12 lg:aspect-auto lg:h-[360px] lg:max-w-none xl:h-[410px]">
            <Image
              src="/home/hero-bill-review.png"
              alt="客人在查看手机账单"
              fill
              priority
              sizes="(max-width: 1023px) calc(100vw - 40px), 600px"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-10 md:mt-11 xl:mt-12">
          <h2 className="mb-4 text-xl font-bold text-[#202D3A] md:mb-5 md:text-2xl">从哪个问题开始判断</h2>
          <div className="grid items-stretch gap-4 md:grid-cols-3 md:gap-5">
            {QUESTIONS.map((question) => (
              <article key={question.href} className="group flex h-full min-w-0 flex-col rounded-[22px] border border-[#E8EDF1] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(32,45,58,0.07)] lg:p-6">
                <h3 className="text-xl font-black leading-7 text-[#202D3A]">{question.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-[1.65] text-[#526170]">{question.description}</p>
                <Link href={question.href} className="mt-3 line-clamp-2 inline-flex items-center gap-1 text-[15px] font-bold leading-6 text-[#164B78] hover:text-[#103B60]">
                  {question.link}<ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
          <Link href="#contact" className="inline-flex min-h-11 items-center rounded-lg border border-[#D8E2EA] bg-white px-4 font-semibold text-[#164B78] transition hover:border-[#246B95] hover:bg-[#F7FAFC]">我需要核实具体情况</Link>
          <a href="tel:15108496191" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#D8E2EA] bg-white px-4 font-semibold text-[#164B78] transition hover:border-[#246B95] hover:bg-[#F7FAFC]">
            <Phone size={15} aria-hidden="true" />电话核实 510-849-6191
          </a>
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-400">最后更新：2026 年 10 月 4 日</p>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
      <div className="mx-auto max-w-[1168px] px-4 py-5 sm:px-6 md:py-7 lg:py-8">
        <div className="grid items-center gap-4 lg:grid-cols-[1.08fr_0.92fr] lg:gap-7">
          <div className="min-w-0">
            <h1 className="text-[clamp(1.875rem,4.1vw,3.5rem)] font-black leading-[1.12] tracking-tight text-[#202D3A]">
              <span className="block">手机、宽带账单</span>
              <span className="block text-[#2786A5]">怎么又贵了？</span>
            </h1>
            <p className="mt-3 max-w-[620px] text-base leading-7 text-[#526170]">
              账单变贵、网速变慢或准备转号时，不一定要立刻换运营商或升级套餐。先查清费用或服务为什么变化，再确认问题属于网络、设备、账户还是地址，最后决定下一步。
            </p>
          </div>

          <div className="relative mx-auto aspect-[16/9] w-full max-w-xl overflow-hidden rounded-[30px] bg-[#EDF5F9] sm:max-w-md lg:max-w-none lg:aspect-[16/10]">
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

        <div className="hero-question-area mx-auto mt-5 max-w-[1120px] md:mt-6">
          <h2 className="mb-3 text-xl font-bold text-[#202D3A] md:text-2xl">从哪个问题开始判断</h2>
          <div className="hero-question-cards grid items-stretch gap-3 md:grid-cols-3">
            {QUESTIONS.map((question) => (
              <article key={question.href} className="hero-question-card group flex h-full min-w-0 flex-col rounded-[22px] border border-[#E8EDF1] bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(32,45,58,0.07)]">
                <h3 className="text-xl font-black leading-7 text-[#202D3A]">{question.title}</h3>
                <p className="mt-1 flex-1 text-base leading-7 text-[#526170]">{question.description}</p>
                <Link href={question.href} className="mt-2 inline-flex min-h-11 items-center gap-1 text-[15px] font-bold leading-6 text-[#164B78] hover:text-[#103B60]">
                  {question.link}<ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { FileText, Smartphone, Wifi, ArrowRight } from 'lucide-react';

type Problem = {
  label: string;
  title: string;
  tag: string;
  desc: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  icon: ReactNode;
  questions: string[];
};

const PROBLEMS: Problem[] = [
  {
    label: '账单涨价',
    title: '账单怎么又贵了？',
    tag: '手机 · 宽带',
    desc: '帮你查清楚是为什么变贵，找出隐藏扣费。',
    cta: '帮我查为什么变贵了',
    href: '/bill-optimization',
    image: '/home/problem-bill-increase.png',
    imageAlt: '两张 Xfinity 账单对比，月费从 $89.99 涨到 $129.99，并标注月费已上涨',
    icon: <FileText size={24} />,
    questions: [
      '用了好几年的套餐，为什么现在突然涨价？',
      '优惠期结束后，账单涨了一倍，正常吗？',
      '明明没用那么多，怎么多了很多附加费用？',
    ],
  },
  {
    label: '办理 / 换之前',
    title: '准备办理 / 换套餐？',
    tag: '手机 · 宽带',
    desc: '帮你比较方案，判断办理或更换前的条件。',
    cta: '帮我做决定',
    href: '/cellphone',
    image: '/home/problem-plan-choice.png',
    imageAlt: '笔记本电脑上展示的手机与家庭宽带套餐对比方案',
    icon: <Smartphone size={24} />,
    questions: [
      '转号前，要先检查哪些账单、设备和资格条件？',
      '家庭多线路，怎么判断现在的总费用是否合理？',
      '换新手机前，要先确认哪些分期、Trade-in 和套餐条件？',
    ],
  },
  {
    label: '出现问题',
    title: '已经出了问题？',
    tag: '手机 · 宽带',
    desc: '帮你解决网速慢、信号差、账单等问题。',
    cta: '帮我解决问题',
    href: '/contact',
    image: '/home/problem-network-issue.png',
    imageAlt: '路由器红色故障灯与手机显示无网络连接',
    icon: <Wifi size={24} />,
    questions: [
      '家里网速越来越慢，是套餐问题吗？',
      '手机在某些地方没有信号，怎么办？',
      '账单上多了不认识的费用，能取消吗？',
    ],
  },
];

export default function ProblemSelection() {
  return (
    <section className="homepage-problems bg-[#EAF2F6]">
      <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-14 md:px-6 md:pb-12 md:pt-1">
        {/* 标题 */}
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-2 text-sm font-bold text-[#246B95]">—— 从真实用户问题出发 ——</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900">
            先找到你遇到的问题
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-600">
            选择你目前的情况，快速找到相关问题与解决方案。
          </p>
        </div>

        <div className="flex flex-col gap-7 md:gap-8">
          {PROBLEMS.map((p) => (
            <div
              key={p.label}
              className="flex w-full flex-col overflow-hidden rounded-[1.5rem] border border-[#D8E2EA] bg-white shadow-sm transition-all hover:shadow-xl md:min-h-[280px] md:flex-row lg:min-h-[320px]"
            >
              <div className="flex min-w-0 flex-col p-5 md:w-[64%] md:p-5 lg:w-[65%]">
              {/* 图标 + 标签 */}
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F9] text-[#2786A5]">
                  {p.icon}
                </div>
                <span className="rounded-full bg-[#EDF5F9] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#246B95]">
                  {p.label}
                </span>
              </div>

              <h3 className="mb-1 text-xl font-black text-slate-900 md:text-2xl">{p.title}</h3>
              <p className="mb-1 text-sm font-semibold text-slate-500">{p.tag}</p>
              <p className="mb-2 text-base leading-relaxed text-slate-600">{p.desc}</p>

              {/* 子问题列表 */}
              <ul className="mb-2 space-y-1">
                {p.questions.map((q) => (
                  <li key={q} className="flex items-start gap-2 text-base leading-normal text-slate-600">
                    <span className="shrink-0 font-bold text-[#2786A5]">·</span>
                    {q}
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#EDF5F9] px-4 py-3 font-bold text-[#246B95] hover:bg-[#DCECF4] md:mt-auto md:w-fit md:justify-start"
              >
                {p.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              </div>
              {/* Card image */}
              <div className="relative mx-5 mb-5 h-[190px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#EDF5F9] via-slate-100 to-[#EDF5F9] md:mx-0 md:mb-0 md:min-h-[280px] md:w-[36%] lg:min-h-[320px] lg:w-[35%]">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), 36vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

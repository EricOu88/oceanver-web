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
    desc: '帮你比较方案，做出更好的选择。',
    cta: '帮我做决定',
    href: '/cellphone',
    image: '/home/problem-plan-choice.png',
    imageAlt: '笔记本电脑上展示的手机与家庭宽带套餐对比方案',
    icon: <Smartphone size={24} />,
    questions: [
      '从 T-Mobile 转 AT&T，值得吗？',
      '家庭套餐哪几条线最划算？',
      '现在换 iPhone 18，要选什么套餐？',
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
    <section className="homepage-problems bg-slate-50/60">
      <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-14 md:px-6 md:pb-12 md:pt-1">
        {/* 标题 */}
        <div className="mb-8 text-center md:mb-10">
          <p className="text-sm font-bold text-blue-700 mb-2">—— 从真实用户问题出发 ——</p>
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
              className="flex w-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl md:min-h-[280px] md:flex-row lg:min-h-[320px]"
            >
              <div className="flex min-w-0 flex-col p-5 md:w-[64%] md:p-5 lg:w-[65%]">
              {/* 图标 + 标签 */}
              <div className="mb-3 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full px-3 py-1">
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
                    <span className="text-blue-500 font-bold shrink-0">·</span>
                    {q}
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-50 px-4 py-3 font-bold text-blue-700 hover:bg-blue-100 md:mt-auto md:w-fit md:justify-start"
              >
                {p.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              </div>
              {/* Card image */}
              <div className="relative mx-5 mb-5 h-[190px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-slate-100 to-blue-50 md:mx-0 md:mb-0 md:min-h-[280px] md:w-[36%] lg:min-h-[320px] lg:w-[35%]">
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

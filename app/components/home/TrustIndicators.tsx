import Link from 'next/link';
import { ArrowRight, PiggyBank, Headphones, ShieldCheck, Star } from 'lucide-react';

const ITEMS = [
  {
    icon: <PiggyBank size={28} />,
    title: '账单费用检查',
    desc: '协助检查账单中的费用变化',
    cta: '查看怎么检查',
    href: '/bill-optimization',
    external: false,
    color: 'text-[#2786A5] bg-[#EDF5F9]',
  },
  {
    icon: <Headphones size={28} />,
    title: '中文一对一服务',
    desc: '直接找人帮你处理',
    cta: '联系中文客服',
    href: '/contact',
    external: false,
    color: 'text-[#2786A5] bg-[#EDF5F9]',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: '真实案例',
    desc: '来自真实客户的问题',
    cta: '查看真实案例',
    href: '/why-us',
    external: false,
    color: 'text-[#2786A5] bg-[#EDF5F9]',
  },
  {
    icon: <Star size={28} />,
    title: '5.0',
    desc: 'Google 用户评价',
    cta: '查看 Google 评价',
    href: 'https://www.google.com/maps/search/?api=1&query=美国鸿达电讯&query_place_id=ChIJX6ngelzGj4ARrdcNVV0c-Gc',
    external: true,
    color: 'text-[#2786A5] bg-[#EDF5F9]',
  },
];

export default function TrustIndicators() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-6 md:py-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {ITEMS.map((item) => {
            const className = 'group flex h-full cursor-pointer flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-center transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md sm:p-6';
            const content = (
              <>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-[#164B78] transition-colors group-hover:text-[#103B60]">
                  {item.cta} <ArrowRight size={14} aria-hidden="true" />
                </span>
              </>
            );

            return item.external ? (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                {content}
              </a>
            ) : (
              <Link key={item.title} href={item.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

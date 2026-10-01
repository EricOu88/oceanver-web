import { PiggyBank, Headphones, ShieldCheck, Star } from 'lucide-react';

const ITEMS = [
  {
    icon: <PiggyBank size={28} />,
    title: '帮你省钱',
    desc: '找出不必缴的费用',
    color: 'text-blue-700 bg-blue-50',
  },
  {
    icon: <Headphones size={28} />,
    title: '中文一对一服务',
    desc: '直接找人帮你处理',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: '真实案例',
    desc: '来自真实客户的问题',
    color: 'text-blue-700 bg-blue-50',
  },
  {
    icon: <Star size={28} />,
    title: '5.0',
    desc: 'Google 好评 · 数量待替换',
    color: 'text-blue-700 bg-blue-50',
  },
];

export default function TrustIndicators() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-6 md:py-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-center sm:p-6"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

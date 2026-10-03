import Link from 'next/link';
import { Phone, Wifi, TrendingUp, Building2 } from 'lucide-react';

/**
 * 核心服务入口区块
 * Server Component - 确保在 SSR 输出的 HTML 中可见
 */
export default function CoreServicesBlock() {
  const services = [
    {
      href: '/cellphone',
      icon: <Phone size={24} className="text-blue-600" />,
      title: '美国手机卡与 eSIM 办理',
      description: 'AT&T、T-Mobile、Verizon 手机套餐中文办理',
    },
    {
      href: '/internet',
      icon: <Wifi size={24} className="text-blue-700" />,
      title: '家庭宽带与 WiFi 安装',
      description: 'Xfinity、AT&T、Spectrum 宽带网络安装',
    },
    {
      href: '/bill-optimization',
      icon: <TrendingUp size={24} className="text-blue-700" />,
      title: '手机与宽带账单涨价优化',
      description: '账单审计、涨价处理、降费方案',
    },
    {
      href: '/cellphone/att',
      icon: <Building2 size={24} className="text-blue-700" />,
      title: 'AT&T 官方手机计划与优惠',
      description: 'AT&T 预付费、后付费套餐与独家优惠',
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-8">
          核心服务入口
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border-2 border-slate-200 hover:border-blue-400 bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 p-3 rounded-xl bg-slate-50 group-hover:bg-blue-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed" aria-hidden="true">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

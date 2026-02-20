import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface GradientBannerCTAProps {
  href: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function GradientBannerCTA({
  href,
  title,
  subtitle,
  className = '',
}: GradientBannerCTAProps) {
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden ${className}`}
    >
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 text-center shadow-2xl transform transition-all duration-500 hover:scale-[1.02] animate-pulse-slow">
        {/* 呼吸动画背景 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-[3rem] md:rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
        
        {/* 内容 */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex-1">
            <div className="text-2xl md:text-4xl font-black text-white mb-3">
              {title}
            </div>
            {subtitle && (
              <p className="text-white/90 text-base md:text-lg">
                {subtitle}
              </p>
            )}
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform group-hover:translate-x-2 transition-transform duration-300">
            <ArrowRight size={32} className="text-white" />
          </div>
        </div>

        {/* 装饰性光效 */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </Link>
  );
}

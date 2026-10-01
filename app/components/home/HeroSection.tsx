import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';

const BUSINESS_TEL_DISPLAY = '510-849-6191';
const BUSINESS_TEL = '15108496191'; // For tel: links (no dashes)

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white">
      <div className="max-w-[1280px] mx-auto px-5 py-6 md:px-6 md:py-3">
        <div className="grid items-center gap-7 lg:min-h-[400px] lg:grid-cols-2 lg:gap-8">
          {/* 左侧：文案 */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 text-sm font-bold text-blue-800 mb-5">
              服务全美华人家庭 · 手机 · 宽带都可以
            </div>

            <h1 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[42px] lg:text-[64px]">
              手机、宽带账单
              <br />
              <span className="text-blue-700">怎么又贵了？</span>
            </h1>

            <p className="mx-auto mb-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0 lg:mb-7">
              先帮你判断为什么变贵，再告诉你该不该调整、换方案，还是继续用。
            </p>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:max-w-[600px] lg:flex-col xl:flex-row">
              <Link
                href="/bill-optimization"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-blue-700/20 transition-all hover:bg-blue-800 hover:shadow-xl"
              >
                帮我查为什么变贵了
                <ArrowRight size={20} />
              </Link>

              <a
                href={`tel:${BUSINESS_TEL}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-blue-600 bg-white px-6 py-4 text-lg font-bold text-blue-600 shadow-md transition-all hover:bg-blue-50 hover:shadow-lg"
              >
                <Phone size={18} />
                不想研究，直接找人帮我看
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              中文一对一服务 · {BUSINESS_TEL_DISPLAY}
            </p>
          </div>

          {/* 右侧：配图占位（素材到位后替换） */}
          <div className="relative mx-auto h-[200px] w-full max-w-xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 via-slate-100 to-blue-50 sm:h-auto sm:aspect-[16/10] lg:max-w-none">
            <Image
              src="/home/hero-bill-review.png"
              alt="华人用户在家查看手机和宽带账单"
              fill
              priority
              sizes="(max-width: 1023px) calc(100vw - 40px), 600px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import WeChatPopup from '@/app/components/WeChatPopup';

const BUSINESS_TEL_DISPLAY = '510-849-6191';
const BUSINESS_TEL = '+15108496191';

export default function HeroSection() {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#FCFDFE]">
        <div className="max-w-[1280px] mx-auto px-5 py-6 md:px-6 md:py-3">
          <div className="grid items-center gap-7 lg:min-h-[400px] lg:grid-cols-2 lg:gap-8">
          {/* 左侧：文案 */}
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D8E2EA] bg-[#EDF5F9] px-4 py-1.5 text-sm font-bold text-[#246B95]">
              服务全美华人家庭 · 手机 · 宽带都可以
            </div>

            <h1 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[42px] lg:text-[64px]">
              手机、宽带账单
              <br />
              <span className="text-[#2786A5]">怎么又贵了？</span>
            </h1>

            <p className="mx-auto mb-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0 lg:mb-7">
              先帮你判断为什么变贵，再告诉你该不该调整、换方案，还是继续用。
            </p>

            <div className="flex w-full flex-col gap-3 md:flex-row md:flex-wrap">
              <Link
                href="/bill-optimization"
                className="inline-flex min-h-14 w-full min-w-0 items-center justify-center gap-2 rounded-full border-2 border-blue-700 bg-blue-700 px-4 py-3 text-sm font-bold leading-5 text-white shadow-lg shadow-[#164B78]/20 transition-all hover:border-blue-800 hover:bg-blue-800 hover:shadow-xl md:w-[calc(50%-0.375rem)] md:px-4 md:text-sm"
              >
                <span className="min-w-0 text-center">帮我查为什么变贵了</span>
                <ArrowRight size={18} className="shrink-0" />
              </Link>

              <button
                type="button"
                onClick={() => setShowWeChat(true)}
                className="inline-flex min-h-14 w-full min-w-0 items-center justify-center gap-2 rounded-full border-2 border-[#164B78] bg-white px-4 py-3 text-sm font-bold leading-5 text-[#164B78] shadow-md transition-all hover:bg-[#EDF5F9] hover:shadow-lg md:w-[calc(50%-0.375rem)] md:px-4 md:text-sm"
              >
                <MessageCircle size={18} className="shrink-0" />
                <span className="min-w-0 text-center">不想研究，直接找人帮我看</span>
              </button>

              <a
                href={`tel:${BUSINESS_TEL}`}
                className="inline-flex min-h-14 w-full min-w-0 items-center justify-center gap-2 rounded-full border-2 border-[#164B78] bg-white px-4 py-3 text-sm font-bold leading-5 text-[#164B78] shadow-md transition-all hover:bg-[#EDF5F9] hover:shadow-lg md:w-[calc(50%-0.375rem)] md:px-4 md:text-sm"
              >
                <Phone size={18} className="shrink-0" />
                <span className="min-w-0 text-center">电话咨询 {BUSINESS_TEL_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* 右侧：配图占位（素材到位后替换） */}
          <div className="relative mx-auto h-[200px] w-full max-w-xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#EDF5F9] via-slate-100 to-[#EDF5F9] sm:h-auto sm:aspect-[16/10] lg:max-w-none">
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

      {showWeChat && <WeChatPopup onClose={() => setShowWeChat(false)} />}
    </>
  );
}

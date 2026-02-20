'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';

const GOOGLE_LINK = 'https://www.google.com/maps/search/?api=1&query=美国鸿达电讯&query_place_id=ChIJX6ngelzGj4ARrdcNVV0c-Gc';
const BUSINESS_TEL = '15108496191'; // For tel: links (no dashes or plus)
const BUSINESS_TEL_DISPLAY = '510-849-6191'; // For display text

interface StoreLocationSectionProps {
  onWeChatClick?: () => void;
  variant?: 'default' | 'compact';
}

export default function StoreLocationSection({ 
  onWeChatClick,
  variant = 'default'
}: StoreLocationSectionProps) {
  const isCompact = variant === 'compact';

  return (
    <section className={`${isCompact ? 'py-8' : 'py-16'} bg-white`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-lg hover:shadow-xl transition-all overflow-hidden">
          <div className={`grid md:grid-cols-2 gap-8 md:gap-12 ${isCompact ? 'p-6 md:p-8' : 'p-8 md:p-12'}`}>
            {/* 左侧：文案 */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h2 className={`${isCompact ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} font-black text-slate-900 mb-4`}>
                  在哪里可以找到鸿达电讯？
                </h2>
                <div className="space-y-3 text-slate-800">
                  <p className={`${isCompact ? 'text-base md:text-lg' : 'text-lg md:text-xl'} font-bold`}>
                    📍 鸿达电讯（Bay Media Star）
                  </p>
                  <p className={`${isCompact ? 'text-sm md:text-base' : 'text-base md:text-lg'} font-semibold text-slate-700 leading-relaxed`}>
                    Fremont & Milpitas 手机卡 实体门店｜服务湾区和洛杉矶｜支持全美远程办理
                  </p>
                  {!isCompact && (
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      新移民、留学生、家庭用户都可以线上发信息，我们这边远程办好宽带和手机卡。
                    </p>
                  )}
                </div>
              </div>

              {/* 三个按钮 */}
              <div className={`flex flex-col sm:flex-row gap-3 ${isCompact ? 'pt-1' : 'pt-2'}`}>
                <a
                  href={GOOGLE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
                >
                  <MapPin size={18} />
                  <span>👉 点击查看地图</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  href={`tel:${BUSINESS_TEL}`}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
                >
                  <Phone size={18} />
                  <span>📞 立即咨询</span>
                </a>

                {onWeChatClick ? (
                  <button
                    onClick={onWeChatClick}
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
                  >
                    <MessageCircle size={18} />
                    <span>💬 微信联系</span>
                  </button>
                ) : (
                  <Link
                    href="/contact#wechat"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
                  >
                    <MessageCircle size={18} />
                    <span>💬 微信联系</span>
                  </Link>
                )}
              </div>
            </div>

            {/* 右侧：门店照片（外观+室内） */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className={`relative w-full ${isCompact ? 'h-40 md:h-44' : 'h-48 md:h-56'} rounded-xl overflow-hidden border border-slate-200 shadow-lg ring-2 ring-blue-100/50`}>
                <Image
                  src="/locations/fremont-exterior.jpg"
                  alt="鸿达电讯 Fremont 实体门店外观 - 湾区手机卡宽带中文办理服务点 46292 Warm Springs Blvd"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={75}
                  loading="lazy"
                />
              </div>
              <div className={`relative w-full ${isCompact ? 'h-40 md:h-44' : 'h-48 md:h-56'} rounded-xl overflow-hidden border border-slate-200 shadow-lg ring-2 ring-blue-100/50`}>
                <Image
                  src="/locations/fremont-interior.jpg"
                  alt="鸿达电讯 Fremont 门店内部环境 - AT&T T-Mobile Xfinity 等运营商授权代理柜台"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={75}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

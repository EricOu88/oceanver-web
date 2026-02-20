'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import {
  Phone,
  Wifi,
  MessageCircle,
  Zap,
  X,
  ArrowRight,
} from 'lucide-react';

import StoreLocationSection from '@/app/components/StoreLocationSection';
import FAQSection from '@/app/components/home/FaqSection';

// 动态导入非首屏组件（仅保留 GoogleReviewsSlider）
const GoogleReviewsSlider = dynamic(
  () => import('@/app/components/home/GoogleReviewsSlider'),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] bg-slate-100 animate-pulse rounded-xl" />
    ),
  }
);

/* ================= 1. 数据定义 ================= */
const BUSINESS_INFO = {
  name: '美国鸿达电讯 (Bay Media Star)',
  tel: '510-849-6191',
  telLink: '15108496191', // For tel: links (no dashes or plus)
  address: '46292 Warm Springs Blvd #606, Fremont, CA 94539',
};

function WeChatModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [cp, setCp] = useState(false);
  const ID = '美国鸿达电讯';

  const handleCopy = () => {
    navigator.clipboard.writeText(ID);
    setCp(true);
    setTimeout(() => setCp(false), 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-8 w-full max-w-sm text-center animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute right-6 top-6 text-slate-500 hover:text-slate-800">
          <X size={24} />
        </button>

        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
          <MessageCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">添加在线中文客服</h3>
        <p className="text-slate-600 font-medium mb-6 text-sm">长按识别二维码 或 复制微信号</p>

        <div className="relative aspect-square w-52 mx-auto bg-slate-50 rounded-2xl overflow-hidden border-4 border-white shadow-inner">
          <Image src="/wechat-qr.jpg" alt="鸿达电讯微信客服二维码 - 扫码添加中文在线客服咨询美国手机卡宽带办理" fill unoptimized className="object-cover" />
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 text-sm">{ID}</span>
            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${
                cp ? 'bg-green-600' : 'bg-blue-700'
              } text-white`}
            >
              {cp ? '已复制' : '复制微信号'}
            </button>
          </div>

          <div className="p-3 bg-blue-50/80 rounded-2xl border border-dashed border-blue-300">
            <p className="font-mono font-extrabold text-lg text-blue-700 uppercase">美国鸿达电讯</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= 2. 服务卡片数据（纯静态常量，确保 SSR/CSR 完全一致）================= */
type ServiceCardIcon = 'wifi' | 'phone' | 'zap';

interface ServiceCard {
  title: string;
  desc: string;
  icon: ServiceCardIcon;
  color: 'blue' | 'indigo' | 'amber';
  link: string;
  btnColor: string;
  btnTextColor: string;
  btnShadow: string;
  btnAnimation: string;
  btnHoverShadow: string;
  btnHoverShadowSmall: string;
  logos?: Array<{ name: string; src: string }>;
}

// 完全静态的卡片配置（module-level const，确保 SSR/CSR 完全一致）
// 禁止任何运行时修改，禁止客户端覆盖
const SERVICE_CARDS: readonly ServiceCard[] = [
  {
    title: '如何申请商业及住家宽带？',
    desc: 'Xfinity, AT&T Fiber, Spectrum，Frontier 独家新开户折扣，<strong class="font-black text-orange-800">免除押金与信用审核</strong>。美国宽带申请，中文客服一对一服务。',
    icon: 'wifi',
    color: 'blue',
    link: '/internet',
    btnColor: 'bg-blue-600 hover:bg-blue-700 shadow-blue-200',
    btnTextColor: 'text-white',
    btnShadow: 'shadow-lg',
    btnAnimation: 'animate-pulse-subtle',
    btnHoverShadow: 'group-hover:shadow-2xl',
    btnHoverShadowSmall: 'hover:shadow-lg',
    logos: [
      { name: 'Xfinity', src: '/brands/xfinity.webp' },
      { name: 'AT&T', src: '/brands/att.webp' },
      { name: 'Spectrum', src: '/brands/spectrum.webp' },
    ],
  },
  {
    title: '如何申请商业及家庭手机卡？',
    desc: '主流运营商团购折扣，<strong class="font-black text-orange-800">比官网直接办理更省 20%-40%</strong>，全美包邮寄送。家庭手机套餐折扣，网络账单减免服务。',
    icon: 'phone',
    color: 'indigo',
    link: '/cellphone',
    btnColor: 'bg-green-600 hover:bg-green-700 shadow-green-200',
    btnTextColor: 'text-white',
    btnShadow: 'shadow-lg',
    btnAnimation: 'animate-pulse-subtle',
    btnHoverShadow: 'group-hover:shadow-2xl',
    btnHoverShadowSmall: 'hover:shadow-lg',
    logos: [
      { name: 'AT&T', src: '/brands/att.webp' },
      { name: 'T-Mobile', src: '/brands/tmobile.webp' },
      { name: 'Verizon', src: '/brands/verizon.webp' },
    ],
  },
  {
    title: '查看账单是否还能降价',
    desc: '老用户账单突然变贵？我们提供免费账单审计服务，帮您重新申请低价合约。',
    icon: 'zap',
    color: 'amber',
    link: '/bill-optimization',
    btnColor: 'bg-yellow-300 hover:bg-yellow-400 border-2 border-yellow-500',
    btnTextColor: 'text-yellow-900',
    btnShadow: 'shadow-sm',
    btnAnimation: '',
    btnHoverShadow: 'group-hover:shadow-md',
    btnHoverShadowSmall: 'hover:shadow-sm',
  },
] as const;

// Icon 映射函数（纯函数，SSR/CSR 一致）
function getIconComponent(icon: ServiceCardIcon) {
  switch (icon) {
    case 'wifi':
      return <Wifi />;
    case 'phone':
      return <Phone />;
    case 'zap':
      return <Zap />;
    default:
      return null;
  }
}

/* ================= 3. 主页面 ================= */
export default function HomePage() {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans">
      <WeChatModal open={isModalOpen} onClose={() => setModalOpen(false)} />

      {/* CORE SERVICES - 业务介绍部分 */}
      <section className="py-8 md:py-12 lg:py-16 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-slate-900">
            为什么美国华人都会找鸿达电讯？
          </h2>
          <p className="text-base md:text-lg text-slate-700 font-medium mt-4">
            全美50州远程办理，专业中文团队，实时查询本地独家优惠。
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {/* 使用标准的 next/link Link 组件渲染服务卡片（不使用 LinkComponent） */}
          {SERVICE_CARDS.map((item, i) => (
            <Link
              key={item.link}
              href={item.link}
              className="block animate-float group bg-white p-6 rounded-[2.5rem] border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2 active:scale-[0.98] cursor-pointer"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Logo 区域 */}
              {item.logos ? (
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-5 flex-nowrap">
                  {item.logos.map((logo, idx) => {
                    const isXfinity = logo.name === 'Xfinity'
                    return (
                      <div
                        key={logo.name}
                        className={`relative flex items-center justify-center flex-shrink-0 ${
                          isXfinity
                            ? 'h-8 w-14 md:h-10 md:w-20'
                            : 'h-10 w-20 md:h-12 md:w-24'
                        }`}
                      >
                        <Image
                          src={logo.src}
                          alt={`${logo.name} 授权代理 - 鸿达电讯 Fremont 实体店 ${logo.name === 'Xfinity' || logo.name === 'AT&T' || logo.name === 'Spectrum' ? '宽带' : '手机卡'}中文办理服务`}
                          fill
                          sizes="(max-width: 768px) 80px, 96px"
                          className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                          loading="lazy"
                        />
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
                    item.color === 'blue'
                      ? 'bg-blue-100 text-blue-700'
                      : item.color === 'indigo'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {getIconComponent(item.icon)}
                </div>
              )}

              <div
                className={`
                  w-full mb-4 px-6 py-4 ${item.btnColor}
                  ${item.btnTextColor} font-black text-xl rounded-2xl
                  transition-all duration-500
                  ${item.btnShadow}
                  ${item.btnAnimation}
                  group-hover:scale-105 ${item.btnHoverShadow}
                `}
              >
                {item.title}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 text-[15px] font-medium" dangerouslySetInnerHTML={{ __html: item.desc }} />

              {/* 宽带卡片内链 */}
              {item.link === '/internet' && (
                <div className="mb-4">
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      router.push('/blog/bay-area-internet-guide');
                    }}
                    className="text-sm text-blue-600 font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    2026年湾区华人办宽带全攻略 →
                  </span>
                </div>
              )}

              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setModalOpen(true)
                }}
                className={`w-full ${item.btnColor} ${item.btnTextColor} font-bold text-sm py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all ${item.btnHoverShadowSmall} active:scale-95`}
              >
                立即咨询 <ArrowRight size={14} />
              </button>
            </Link>
          ))}
        </div>
      </section>

      {/* STORE LOCATION SECTION */}
      <section className="py-8 md:py-12">
        <StoreLocationSection onWeChatClick={() => setModalOpen(true)} />
      </section>

      {/* REVIEWS - 动态加载 */}
      <section className="py-8 md:py-12">
        <GoogleReviewsSlider />
      </section>

      {/* FAQ Section - 动态加载 */}
      <section className="py-8 md:py-12">
        <FAQSection />
      </section>

      {/* BLOG ENTRY SECTION - 博客入口区块 */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                📚 最新博客文章
              </h2>
              <p className="text-lg text-slate-700">
                湾区宽带、手机套餐申请指南与省钱攻略
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black px-10 py-5 rounded-2xl text-lg md:text-xl transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
              >
                查看所有博客文章
                <ArrowRight size={24} />
              </Link>
              <Link
                href="/blog/bay-area-internet-guide"
                className="inline-flex items-center justify-center gap-3 border-2 border-blue-600 bg-transparent hover:bg-blue-50 text-blue-600 font-bold px-10 py-5 rounded-2xl text-lg md:text-xl transition-all shadow-md hover:shadow-lg"
              >
                湾区办网全攻略
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-16 pb-24 md:pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 font-black text-2xl text-slate-950">
              <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white text-sm">
                B
              </div>
              鸿达电讯
            </div>
            <p className="text-sm font-bold text-slate-700 leading-relaxed italic">Serving the Chinese community since 2007.</p>
            <ul className="text-xs space-y-1 text-slate-600">
              <li><Link href="/about" className="hover:text-blue-700">关于我们</Link></li>
              <li><Link href="/why-us" className="hover:text-blue-700">为什么选择鸿达</Link></li>
              <li><Link href="/blog" className="hover:text-blue-700">博客文章</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-700 opacity-60">隐私政策</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-black text-slate-950 uppercase tracking-widest text-xs">宽带服务</h4>
            <ul className="text-sm space-y-2 font-bold text-slate-700">
              <li>
                <Link href="/internet" className="hover:text-blue-700">
                  宽带方案总览
                </Link>
              </li>
              <li>
                <Link href="/internet/xfinity" className="hover:text-blue-700">
                  Xfinity 宽带办理
                </Link>
              </li>
              <li>
                <Link href="/internet/att-fiber" className="hover:text-blue-700">
                  AT&T Fiber 光纤
                </Link>
              </li>
              <li>
                <Link href="/internet/spectrum" className="hover:text-blue-700">
                  Spectrum 宽带
                </Link>
              </li>
              <li>
                <Link href="/internet/price-hike" className="hover:text-blue-700">
                  宽带涨价处理
                </Link>
              </li>
              <li>
                <Link href="/internet/diagnosis" className="hover:text-blue-700">
                  宽带诊断工具
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-black text-slate-950 uppercase tracking-widest text-xs">手机卡服务</h4>
            <ul className="text-sm space-y-2 font-bold text-slate-700">
              <li>
                <Link href="/cellphone" className="hover:text-blue-700">
                  手机套餐总览
                </Link>
              </li>
              <li>
                <Link href="/cellphone/att" className="hover:text-blue-700">
                  AT&T 手机套餐
                </Link>
              </li>
              <li>
                <Link href="/cellphone/tmobile" className="hover:text-blue-700">
                  T-Mobile 套餐
                </Link>
              </li>
              <li>
                <Link href="/cellphone/providers" className="hover:text-blue-700">
                  运营商对比
                </Link>
              </li>
              <li>
                <Link href="/cellphone/diagnosis" className="hover:text-blue-700">
                  套餐诊断工具
                </Link>
              </li>
              <li>
                <Link href="/cellphone/government" className="hover:text-blue-700">
                  政府补助手机卡
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link
              href="/contact"
              className="inline-block px-4 py-1.5 bg-blue-700 text-white text-xs font-black uppercase tracking-widest rounded-lg hover:bg-blue-800 transition-colors"
            >
              联系我们
            </Link>
            <div className="text-sm space-y-3 font-extrabold text-slate-800">
              <p>在线客服微信号: 美国鸿达电讯</p>
              <p>电话: {BUSINESS_INFO.tel}</p>
              <address className="not-italic leading-relaxed font-bold text-slate-700">
                <span className="text-blue-700 block mb-1">Fremont 总店:</span>
                46292 Warm Springs Blvd #606, <br />
                Fremont, CA 94539
              </address>
            </div>
          </div>
        </div>

        {/* 办网小贴士 & 热门文章 */}
        <div className="max-w-7xl mx-auto px-6 mt-8 grid md:grid-cols-2 gap-6">
          <div className="text-sm font-bold text-slate-700 bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <p className="mb-2 text-slate-950 font-black">💡 办网小贴士</p>
            <p>Xfinity 或 Spectrum 优惠期结束后，建议联系我们重新锁定新用户价。</p>
            <Link href="/internet/price-hike" className="text-blue-600 hover:underline text-xs mt-2 inline-block">
              查看宽带涨价应对指南 →
            </Link>
          </div>
          <div className="text-sm font-bold text-slate-700 bg-blue-50 p-5 rounded-2xl border border-blue-200">
            <p className="mb-2 text-slate-950 font-black">📚 热门指南</p>
            <ul className="space-y-1 text-xs">
              <li><Link href="/blog/bay-area-internet-guide" className="text-blue-600 hover:underline">2026年湾区华人办宽带全攻略</Link></li>
              <li><Link href="/cellphone/faq/how-to-choose-us-cellphone-plan" className="text-blue-600 hover:underline">美国手机套餐怎么选？新手指南</Link></li>
              <li><Link href="/cellphone/faq/prepaid-vs-postpaid" className="text-blue-600 hover:underline">预付费 vs 后付费：哪种适合你？</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] text-slate-700">
          <div>© {new Date().getFullYear()} Bay Media Star.</div>
          <div className="flex gap-6">
            <span className="text-blue-700 underline underline-offset-4">Licensed Agency</span>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

import Link from 'next/link';
import { MapPin, ArrowRight, ExternalLink, Star, Phone } from 'lucide-react';
import CarrierLogoCarousel from '@/app/components/CarrierLogoCarousel';

const GOOGLE_LINK = 'https://www.google.com/maps/search/?api=1&query=美国鸿达电讯&query_place_id=ChIJX6ngelzGj4ARrdcNVV0c-Gc';

const GoogleIcon = () => (
  <span className="google-wave google-wave-lg inline-flex items-center">
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.16l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
        fill="#EA4335"
      />
    </svg>
  </span>
);

const FiveStars = ({ size = 16 }: { size?: number }) => (
  <div className="stars-shine text-amber-700 flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={size} fill="currentColor" />
    ))}
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-12 md:pt-20 md:pb-24 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 md:gap-5 px-4 md:px-8 py-2.5 rounded-full bg-white shadow-sm text-blue-800 text-sm md:text-base font-bold mb-6 border border-blue-200">
          <MapPin size={28} className="md:w-[34px] md:h-[34px] text-green-800 animate-pulse shrink-0" />
          <span className="uppercase tracking-wide md:tracking-widest text-center">
            <span className="block md:inline">鸿达电讯 | 旧金山湾区（Fremont）</span>
            <span className="hidden md:inline"> | </span>
            <span className="block md:inline">手机卡/宽带实体门店</span>
          </span>
        </div>

        <div className="bg-gradient-to-br from-blue-50/80 via-slate-50/90 to-indigo-50/60 rounded-3xl p-6 md:p-8 mb-6 shadow-xl border border-slate-200/50 backdrop-blur-sm">
          {/* 主标题 H1 - 深蓝色加粗 */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 tracking-tight leading-tight md:leading-[1.2] mb-4 px-2 sm:px-0">
            美国手机卡/宽带 <strong>中文</strong>申请安装一站式办理
          </h1>
          
          {/* 地理覆盖区域 - 浅蓝色背景条，文字居中 */}
          <div className="bg-blue-100 rounded-lg px-4 py-3 mb-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm md:text-base font-semibold text-blue-800">
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-blue-600" />
                <span>东湾 (Dublin)</span>
              </span>
              <span className="hidden sm:inline text-blue-400">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-blue-600" />
                <span>南湾 (San Jose)</span>
              </span>
              <span className="hidden sm:inline text-blue-400">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-blue-600" />
                <span>北湾 (San Francisco)</span>
              </span>
            </div>
          </div>

          {/* 副标题 */}
          <p className="text-base md:text-lg text-slate-700 font-medium">
            运营商授权代理全美 50 州远程办理商业公司及住家宽带代缴月费 · 账单涨价优化
          </p>

          {/* 紧迫型短句 */}
          <p className="text-sm md:text-base text-slate-600 mt-4">
            优惠到期、隐藏费用、老用户没拿到新优惠，都可能导致账单上涨。
          </p>
        </div>

        {/* 运营商 Logo 轮播 */}
        <CarrierLogoCarousel />

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-700 mb-8 leading-relaxed mt-6">
          <strong>Fremont & Milpitas 手机卡/宽带 实体店</strong>，<strong>中文服务</strong> <strong className="text-blue-700">洛杉矶、纽约、芝加哥全美 50 州远程手机月费代缴</strong>。中文申请 <strong>Xfinity, AT&T, Spectrum，Frontier</strong> 商业公司及住家宽带和手机卡，【独家华人优惠方案】。
          全美落地手机即享高速上网，国内顺丰邮寄。
        </p>

        {/* 主要 CTA 按钮组 - Primary 按钮为账单涨价 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {/* Primary 按钮：账单涨价 */}
          <Link
            href="/bill-optimization"
            className="inline-flex items-center justify-center gap-2
             bg-red-500 hover:bg-red-600
             text-white font-bold
             px-8 py-4 rounded-full
             text-base md:text-lg
             transition-all shadow-lg hover:shadow-xl shadow-red-500/30"
          >
            账单突然涨价？先判断能不能降
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary 按钮：宽带诊断 */}
          <Link
            href="/internet/diagnosis"
            className="inline-flex items-center justify-center gap-2
             border-2 border-blue-600
             bg-transparent hover:bg-blue-50
             text-blue-600 font-bold
             px-8 py-4 rounded-full
             text-base md:text-lg
             transition-all shadow-md hover:shadow-lg"
          >
            宽带涨价 · 是否值得换？
            <ArrowRight size={20} />
          </Link>

          {/* Tertiary 按钮：办网省钱攻略 */}
          <Link
            href="/blog"
            className="inline-flex items-center justify-center
             border border-slate-600
             text-slate-800 font-semibold
             px-8 py-4 rounded-full
             text-base md:text-lg
             hover:bg-slate-50
             transition-all"
          >
            办网省钱攻略
          </Link>
        </div>

        {/* 新移民第一站 Geo 策略区块 */}
        <div className="mt-6 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border-2 border-blue-200">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 text-center">
            🎯 美国鸿达电讯华人首选
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-base md:text-lg font-black text-blue-700 tracking-wider md:tracking-widest">加州湾区</div>
              <p className="text-sm text-slate-700 font-semibold">Fremont / San Jose / Milpitas</p>
              <p className="text-xs text-slate-600">实体门店，当天办理</p>
            </div>
            <div className="space-y-2">
              <div className="text-base md:text-lg font-black text-indigo-700 tracking-wider md:tracking-widest">洛杉矶</div>
              <p className="text-sm text-slate-700 font-semibold">Irvine / Rowland Heights</p>
              <p className="text-xs text-slate-600">远程办理，包邮到家</p>
            </div>
            <div className="space-y-2">
              <div className="text-base md:text-lg font-black text-purple-700 tracking-wider md:tracking-widest">纽约/全美</div>
              <p className="text-sm text-slate-700 font-semibold">远程服务覆盖50州</p>
              <p className="text-xs text-slate-600">国内可激活，落地即用</p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm md:text-base text-slate-700 font-medium">
            <strong className="text-blue-800">电商出海到美国如何办理手机和宽带？</strong> 我们是你的第一站：<br className="hidden md:block" />
            落地前可国内激活手机卡，落地后立即上网使用，全美远程办理手机卡和宽带
          </p>
        </div>

        <p className="mt-4 text-m text-slate-800">
          根据地址、账单和合约，判断是否真的值得换宽带
        </p>

        <div className="mt-4 text-m text-slate-800">
          <Link
            href="/why-us"
            className="hover:text-blue-800 underline"
          >
            为什么很多华人不直接找宽带官网？
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 md:gap-12 pt-8 border-t border-slate-200">
          <div className="text-center group">
            <p className="text-3xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">18年</p>
            <p className="text-[11px] text-slate-600 font-bold uppercase tracking-widest mt-1">加州本地信誉</p>
          </div>

          <div className="w-px h-10 bg-slate-300 rotate-12" />

          <Link href={GOOGLE_LINK} target="_blank" className="text-center group">
            <div className="flex items-center gap-2 mb-1">
              <GoogleIcon />
              <span className="google-wave google-wave-rating text-2xl font-black text-blue-700">google看评论 5.0</span>
            </div>
            <FiveStars size={14} />
          </Link>

          <div className="w-px h-10 bg-slate-300 rotate-12" />

          <div className="text-center">
            <p className="text-3xl font-black text-slate-900">10k+</p>
            <p className="text-[11px] text-slate-600 font-bold uppercase tracking-widest mt-1">华人家庭选择</p>
          </div>
        </div>
      </div>
    </section>
  );
}

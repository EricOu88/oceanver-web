import Link from 'next/link';

import {
  ArrowRight,
} from 'lucide-react';

import FAQSection from '@/app/components/home/FaqSection';
import GoogleReviewsSlider from '@/app/components/home/GoogleReviewsSlider';

/* ================= 1. 数据定义 ================= */
const BUSINESS_INFO = {
  tel: '510-849-6191',
  telLink: '15108496191', // For tel: links (no dashes or plus)
  address: '46292 Warm Springs Blvd #606, Fremont, CA 94539',
};

const PHONE_QUESTION_LINKS = [
  { label: '美国手机套餐怎么选', href: '/cellphone/faq/how-to-choose-us-cellphone-plan' },
  { label: 'Prepaid vs Postpaid', href: '/cellphone/faq/prepaid-vs-postpaid' },
  { label: '手机套餐与账单判断', href: '/cellphone/diagnosis' },
  { label: '美国手机常见问题', href: '/cellphone/faq' },
];

const INTERNET_QUESTION_LINKS = [
  { label: '宽带涨价原因与处理', href: '/internet/price-hike' },
  { label: '宽带问题诊断', href: '/internet/diagnosis' },
  { label: '美国宽带常见问题', href: '/internet/faq' },
  { label: '宽带运营商比较', href: '/internet/providers' },
];

function QuestionLinks({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
      <h3 className="text-lg font-black text-slate-900 mb-3">{title}</h3>
      <ul className="divide-y divide-slate-100">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex min-w-0 items-center justify-between gap-3 py-3 text-sm md:text-base font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              <span className="min-w-0">{link.label}</span>
              <ArrowRight size={17} className="shrink-0" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================= 3. 主页面 ================= */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#202D3A] selection:bg-[#2786A5]/20">
      {/* REVIEWS */}
      <section className="py-8 md:py-12">
        <GoogleReviewsSlider />
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-12">
        <FAQSection />
      </section>

      {/* 问题导航入口 */}
      <section className="py-10 md:py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-8">
            常见问题继续看
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <QuestionLinks
              title="手机问题"
              links={PHONE_QUESTION_LINKS}
            />
            <QuestionLinks
              title="宽带问题"
              links={INTERNET_QUESTION_LINKS}
            />
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
              美国鸿达电讯
            </div>
            <p className="text-sm font-bold text-slate-700 leading-relaxed">中文一对一服务</p>
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
              <p>美国鸿达电讯</p>
              <p>电话：{BUSINESS_INFO.tel}</p>
              <p>中文一对一服务</p>
              <address className="not-italic leading-relaxed font-bold text-slate-700">
                <span className="text-blue-700 block mb-1">Fremont, California</span>
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
            <p>Xfinity 或 Spectrum 优惠期结束后，可以结合当前账单与地址重新比较可用方案。</p>
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
          <div>© {new Date().getFullYear()} 美国鸿达电讯</div>
          <div className="flex gap-6">
            <span className="text-blue-700 underline underline-offset-4">中文一对一服务</span>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

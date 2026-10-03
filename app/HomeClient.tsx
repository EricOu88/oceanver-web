import Link from 'next/link';

import FAQSection from '@/app/components/home/FaqSection';
import GoogleReviewsSlider from '@/app/components/home/GoogleReviewsSlider';

/* ================= 1. 数据定义 ================= */
const BUSINESS_INFO = {
  tel: '510-849-6191',
};

const DEEP_DIVE_LINKS = [
  { label: '宽带涨价原因与处理', href: '/internet/price-hike' },
  { label: '手机套餐与账单判断', href: '/cellphone/diagnosis' },
  { label: '宽带问题诊断', href: '/internet/diagnosis' },
  { label: '美国手机套餐怎么选', href: '/cellphone/faq/how-to-choose-us-cellphone-plan' },
];

/* ================= 3. 主页面 ================= */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#202D3A] selection:bg-[#2786A5]/20">
      {/* FAQ Section */}
      <section className="py-8 md:py-12">
        <FAQSection />
        <div className="mx-auto max-w-4xl px-4">
          <div className="border-t border-slate-200 pt-5 text-center">
            <h3 className="text-base font-bold text-slate-900">需要更完整的判断？</h3>
            <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              {DEEP_DIVE_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="font-semibold text-blue-700 hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-8 md:py-12">
        <GoogleReviewsSlider />
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
            <div className="text-sm space-y-3 font-extrabold text-slate-800">
              <p>美国鸿达电讯</p>
              <p>电话：{BUSINESS_INFO.tel}</p>
              <p>中文一对一服务</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-black text-slate-950 uppercase tracking-widest text-xs">账单问题</h4>
            <ul className="text-sm space-y-2 font-bold text-slate-700">
              <li><Link href="/bill-optimization" className="hover:text-blue-700">账单为什么变贵</Link></li>
              <li><Link href="/internet/price-hike" className="hover:text-blue-700">宽带涨价原因</Link></li>
              <li><Link href="/internet/faq" className="hover:text-blue-700">宽带常见问题</Link></li>
              <li><Link href="/cellphone/diagnosis" className="hover:text-blue-700">手机账单与套餐判断</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-black text-slate-950 uppercase tracking-widest text-xs">手机问题</h4>
            <ul className="text-sm space-y-2 font-bold text-slate-700">
              <li><Link href="/cellphone/faq/how-to-choose-us-cellphone-plan" className="hover:text-blue-700">美国手机套餐怎么选</Link></li>
              <li><Link href="/cellphone/faq/prepaid-vs-postpaid" className="hover:text-blue-700">Prepaid vs Postpaid</Link></li>
              <li><Link href="/cellphone/faq" className="hover:text-blue-700">美国手机常见问题</Link></li>
              <li><Link href="/cellphone/providers" className="hover:text-blue-700">手机运营商比较</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-black text-slate-950 uppercase tracking-widest text-xs">宽带问题</h4>
            <ul className="text-sm space-y-2 font-bold text-slate-700">
              <li><Link href="/internet/diagnosis" className="hover:text-blue-700">宽带问题诊断</Link></li>
              <li><Link href="/internet/faq" className="hover:text-blue-700">美国宽带常见问题</Link></li>
              <li><Link href="/internet/providers" className="hover:text-blue-700">宽带运营商比较</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-black text-slate-950 uppercase tracking-widest text-xs">关于与帮助</h4>
            <ul className="text-sm space-y-2 font-bold text-slate-700">
              <li><Link href="/about" className="hover:text-blue-700">关于我们</Link></li>
              <li><Link href="/contact" className="hover:text-blue-700">联系我们</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-700">隐私政策</Link></li>
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

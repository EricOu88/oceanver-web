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
    <div className="min-h-screen bg-[#FCFDFE] font-sans text-[#202D3A] selection:bg-[#2786A5]/20">
      {/* FAQ Section */}
      <section className="bg-[#EDF5F9] py-8 md:py-12">
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
      <section className="bg-[#F1F4F7] py-8 md:py-12">
        <GoogleReviewsSlider />
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-[#FCFDFE] py-14 md:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">
            <div className="max-w-md">
              <h2 className="text-xl font-bold text-slate-900">美国鸿达电讯</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                帮助美国中文用户看懂手机和宽带账单，判断问题原因、比较方案并决定下一步。
              </p>
              <p className="mt-4 text-sm text-slate-600">电话：{BUSINESS_INFO.tel}</p>
              <Link href="/bill-optimization" className="mt-4 inline-block text-sm font-medium text-blue-700 hover:underline">
                查看完整账单判断指南 →
              </Link>
            </div>

            <div className="border-t border-slate-200 pt-6 sm:border-t-0 sm:pt-0 lg:border-l lg:pl-8">
              <h3 className="text-sm font-semibold text-slate-900">手机问题</h3>
              <ul className="mt-4 space-y-3 text-sm font-medium text-slate-600">
                <li><Link href="/cellphone/faq/how-to-choose-us-cellphone-plan" className="hover:text-blue-700">美国手机套餐怎么选</Link></li>
                <li><Link href="/cellphone/faq/prepaid-vs-postpaid" className="hover:text-blue-700">Prepaid vs Postpaid</Link></li>
                <li><Link href="/cellphone/diagnosis" className="hover:text-blue-700">手机账单与套餐判断</Link></li>
                <li><Link href="/cellphone/faq" className="hover:text-blue-700">美国手机常见问题</Link></li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-6 sm:border-t-0 sm:pt-0 lg:border-l lg:pl-8">
              <h3 className="text-sm font-semibold text-slate-900">宽带问题</h3>
              <ul className="mt-4 space-y-3 text-sm font-medium text-slate-600">
                <li><Link href="/internet/price-hike" className="hover:text-blue-700">宽带涨价原因</Link></li>
                <li><Link href="/internet/diagnosis" className="hover:text-blue-700">宽带问题诊断</Link></li>
                <li><Link href="/internet/faq" className="hover:text-blue-700">美国宽带常见问题</Link></li>
                <li><Link href="/internet/providers" className="hover:text-blue-700">宽带运营商比较</Link></li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-6 sm:border-t-0 sm:pt-0 lg:border-l lg:pl-8">
              <h3 className="text-sm font-semibold text-slate-900">关于鸿达</h3>
              <ul className="mt-4 space-y-3 text-sm font-medium text-slate-600">
                <li><Link href="/about" className="hover:text-blue-700">关于我们</Link></li>
                <li><Link href="/contact" className="hover:text-blue-700">联系我们</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-blue-700">隐私政策</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} 美国鸿达电讯</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { ExternalLink, Star } from 'lucide-react';

const GOOGLE_LINK = 'https://www.google.com/maps/search/?api=1&query=美国鸿达电讯&query_place_id=ChIJX6ngelzGj4ARrdcNVV0c-Gc';

const REVIEWS = [
  {
    name: 'Jason W.',
    location: 'Fremont, CA',
    text: 'Evan 效率非常高！帮我把家里 Xfinity 的旧账单优化了，每个月省了快 $30。',
    date: '1个月前',
  },
  {
    name: 'Linda Zhang',
    location: 'Los Angeles, CA',
    text: '刚搬到洛杉矶没有 SSN 办卡一直碰壁，Amy 帮我申请了套餐，落地就能上网！',
    date: '2个月前',
  },
  {
    name: 'Michael Chen',
    location: 'San Jose, CA',
    text: 'Paul 真的很靠谱，Spectrum 移机出现问题找他半天就搞定了。',
    date: '3周前',
  },
];

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
  <div className="stars-shine flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={size} fill="#FBBF24" className="drop-shadow-sm" style={{ color: '#FBBF24' }} />
    ))}
  </div>
);

export default function GoogleReviewsSlider() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Link
                href={GOOGLE_LINK}
                target="_blank"
                className="flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full border border-slate-300 hover:bg-slate-200 transition-colors"
              >
                <GoogleIcon />
                <span className="text-slate-800 text-[15px] font-black uppercase tracking-wider">Google 看评论</span>
                <ExternalLink size={12} className="text-slate-600" />
              </Link>
              <div className="flex items-center gap-2">
                <FiveStars size={20} />
                <span className="google-wave-rating text-sm font-black text-blue-700 ml-1">5.0</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">"靠谱，是我们的唯一标准"</h2>
          </div>
          <a
            href={GOOGLE_LINK}
            target="_blank"
            className="group flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-blue-700 transition-all"
          >
            <span className="font-extrabold tracking-wide">查看 500+ 真实评论</span>
            <ExternalLink size={18} className="google-wave" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl transition-all h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <FiveStars size={15} />
                <div className="opacity-40">
                  <GoogleIcon />
                </div>
              </div>
              <p className="text-slate-800 leading-relaxed mb-6 font-bold italic flex-grow">"{review.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-black">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm">{review.name}</p>
                  <p className="text-slate-700 text-[11px] font-bold uppercase tracking-widest">{review.location}</p>
                </div>
                <span className="ml-auto text-[11px] text-slate-600 font-bold">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

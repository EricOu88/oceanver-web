import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

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

export default function GoogleReviewsSlider() {
  return (
    <section className="bg-[#F1F4F7] py-2">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-5 md:px-6">
          <div className="flex min-w-0 items-start gap-3">
            <div className="shrink-0 rounded-xl bg-white border border-slate-200 p-2.5" aria-hidden="true">
              <GoogleIcon />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg md:text-xl font-black text-slate-900">Google 用户评价</h2>
              <p className="mt-1 text-sm text-slate-600">查看客户在 Google 上留下的公开评价</p>
            </div>
          </div>
          <Link
            href={GOOGLE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-xl border border-blue-600 bg-white px-4 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-50 transition-colors"
          >
            查看 Google 公开评价
            <ExternalLink size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

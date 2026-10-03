'use client';

import { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

type Review = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
};

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data.reviews || []);
        setRating(data.rating);
        setTotal(data.total);
      });
  }, []);

  const next = () => setIndex((index + 1) % reviews.length);
  const prev = () =>
    setIndex((index - 1 + reviews.length) % reviews.length);

  if (!reviews.length) return null;

  const review = reviews[index];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* 顶部汇总 */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-2 mb-2">
            <img
              src="/google-g.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-xl font-bold">
              {rating} ⭐
            </span>
            <span className="text-gray-500 text-sm">
              （{total} 条 Google 真实评价）
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            客户真实评价
          </h2>
        </div>

        {/* 评论卡片 */}
        <div className="relative bg-slate-50 rounded-xl p-6 shadow-sm">
          <p className="text-slate-700 text-lg leading-relaxed mb-4 whitespace-pre-line">
            “{review.text}”
          </p>

          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold text-slate-900">
                {review.author_name}
              </div>
              <div className="text-sm text-slate-500">
                {review.relative_time_description}
              </div>
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>

          {/* 左右切换 */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-105 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-105 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* 底部链接 */}
        <div className="text-center mt-6">
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJX6ngelzGj4ARrdcNVV0c-Gc"
            target="_blank"
            className="text-blue-600 hover:underline text-sm"
          >
            👉 在 Google 上查看更多真实评价
          </a>
        </div>
      </div>
    </section>
  );
}

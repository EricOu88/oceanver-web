'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'C.L.（Fremont）',
    text: '“办理 AT&T 账单优化非常高效，直接帮我从 $120 降到 $60，全程讲中文解释条款，省了我很多麻烦。”',
    rating: 5,
    avatar: '/avatar1.png',
  },
  {
    name: 'J.W.（Milpitas）',
    text: '“新搬到湾区，不会英文，是鸿达帮我搞定手机卡和家里网络。服务特别耐心，推荐！”',
    rating: 5,
    avatar: '/avatar2.png',
  },
  {
    name: 'L. 店长（San Jose 商铺）',
    text: '“商业安防系统安装非常专业，监控和报警都调试得很好，售后也找得到人。”',
    rating: 5,
    avatar: '/avatar3.png',
  },
];

export default function ReviewSection() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      {/* 标题 */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          客户真实评价
        </h2>
        <p className="text-gray-600 mt-4">
          — 已为 10,000+ 华人用户提供宽带 / 手机 / 安防服务 —
        </p>
      </div>

      {/* ✅ 大评分卡片 */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* 左：评分数字 */}
          <div className="text-center md:border-r md:pr-10 border-gray-200">
            <p className="text-6xl font-bold text-gray-900">4.9</p>

            <div className="flex justify-center mt-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={26} fill="#facc15" stroke="none" />
              ))}
            </div>

            <p className="text-gray-500 text-sm mt-2">(479 条评论)</p>
          </div>

          {/* ✅ 右：评分条 */}
          <div className="flex-1 w-full">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-3 mb-2">
                <span className="text-gray-600 w-12">{star} 星</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-yellow-400 h-3 rounded-full w-[92%]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Google 官方评分入口（内嵌 SVG 版，不再依赖图片路径） */}
        <div className="flex justify-center mt-10">
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJX6ngelzGj4ARrdcNVV0c-Gc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 transition 
                       text-black font-semibold py-3 px-8 rounded-xl 
                       text-lg shadow flex items-center gap-2"
          >
            {/* ✅ 内嵌 Google G SVG（永不丢失、不怕缓存） */}
            <svg
  viewBox="0 0 48 48"
  className="w-6 h-6 min-w-[24px] min-h-[24px] flex-shrink-0"
>

              <path
                fill="#EA4335"
                d="M24 9.5c3.04 0 5.74 1.05 7.88 2.77l5.9-5.9C34.04 3.2 29.3 1.5 24 1.5 14.98 1.5 7.24 6.72 3.7 14.28l6.88 5.34C12.42 13.7 17.74 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.1 24.5c0-1.64-.14-2.86-.44-4.12H24v8.02h12.8c-.26 2.08-1.66 5.2-4.76 7.3l7.34 5.7c4.28-3.96 6.72-9.78 6.72-16.9z"
              />
              <path
                fill="#4A90E2"
                d="M10.58 28.38A15.5 15.5 0 0 1 9.5 24c0-1.52.26-3 .74-4.38l-6.88-5.34A23.86 23.86 0 0 0 1.5 24c0 3.86.94 7.5 2.86 10.72l6.22-6.34z"
              />
              <path
                fill="#FBBC05"
                d="M24 46.5c5.3 0 9.76-1.74 13.02-4.72l-7.34-5.7c-1.96 1.36-4.6 2.3-8.68 2.3-6.26 0-11.58-4.2-13.42-10.12l-6.22 6.34C7.24 41.28 14.98 46.5 24 46.5z"
              />
            </svg>

            查看 Google 官方评论 →
          </a>
        </div>
      </div>

      {/* ✅ 3 条精选评价卡片 */}
      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-xl border 
                       border-gray-100 hover:shadow-2xl transition"
          >
            {/* 头像 */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={r.avatar}
                width={48}
                height={48}
                alt={r.name}
                className="rounded-full shadow"
              />
              <p className="font-semibold text-gray-800">{r.name}</p>
            </div>

            {/* 星级 */}
            <div className="flex text-yellow-400 mb-4">
              {[...Array(r.rating)].map((_, i2) => (
                <Star key={i2} size={20} fill="#facc15" stroke="none" />
              ))}
            </div>

            {/* 内容 */}
            <p className="text-gray-700 leading-relaxed text-sm">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

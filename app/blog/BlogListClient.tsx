'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Calendar, Tag, ArrowRight, Smartphone, Wifi } from 'lucide-react'
import { CommunityDiscussionClientOnly } from '@/app/components/community/CommunityDiscussionByPath'

type BlogListCategory = 'all' | 'mobile' | 'broadband' | 'guide'

type BlogListPost = {
  slug: string
  title: string
  date: string
  description?: string
  excerpt?: string
  category?: string
  image?: string
}

function getDataCategory(post: BlogListPost, index: number): BlogListCategory {
  // 按用户要求：现有三篇文章按顺序标记
  if (index === 0) return 'guide'
  if (index === 1) return 'mobile'
  if (index === 2) return 'broadband'

  // 兜底：根据分类文本做一个简单推断，便于未来新增文章
  const cat = (post.category || '').toLowerCase()
  if (cat.includes('手机') || cat.includes('mobile') || cat.includes('phone')) return 'mobile'
  if (cat.includes('宽带') || cat.includes('broadband') || cat.includes('internet')) return 'broadband'
  if (cat.includes('指南') || cat.includes('办事') || cat.includes('guide')) return 'guide'
  return 'all'
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'px-5 py-2 rounded-full text-sm font-semibold transition',
        'border border-blue-700',
        active
          ? 'bg-blue-700 text-white'
          : 'bg-white text-blue-700 hover:bg-blue-700 hover:text-white',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export default function BlogListClient({ posts }: { posts: BlogListPost[] }) {
  const [activeCategory, setActiveCategory] = useState<BlogListCategory>('all')

  const filteredPosts = useMemo(() => {
    return posts.filter((post, index) => {
      const dataCategory = getDataCategory(post, index)
      return activeCategory === 'all' || dataCategory === activeCategory
    })
  }, [activeCategory, posts])

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      {/* 面包屑导航（提升索引深度） */}
      <nav className="mb-6 text-xl md:text-2xl text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              首页
            </Link>
          </li>
          <li className="text-slate-300">/</li>
          <li className="text-slate-700 font-semibold">猜你想问？</li>
        </ol>
      </nav>

      {/* 页面标题 */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          猜你想问？
        </h1>
        <p className="text-lg text-slate-600">
          先选择你想了解的是手机还是宽带；如果没有找到答案，也可以继续查看相关文章或直接留言。
        </p>
      </div>

      <section aria-label="常见问题入口" className="mb-12 grid gap-5 md:grid-cols-2">
        <Link
          href="/cellphone/faq"
          className="group rounded-2xl border border-[#D8E2EA] bg-[#EDF5F9] p-6 transition hover:-translate-y-0.5 hover:border-[#2786A5] hover:shadow-lg md:p-8"
        >
          <Smartphone className="mb-4 text-[#2786A5]" size={32} aria-hidden="true" />
          <h2 className="text-2xl font-black text-slate-900">手机常见问题</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">套餐选择、Prepaid / Postpaid、转号、eSIM、账单、信号等常见问题。</p>
          <span className="mt-6 inline-flex items-center gap-1 font-bold text-[#164B78] group-hover:text-[#103B60]">
            查看手机常见问题 <ArrowRight size={16} aria-hidden="true" />
          </span>
        </Link>

        <Link
          href="/internet/faq"
          className="group rounded-2xl border border-[#D8E2EA] bg-[#EDF5F9] p-6 transition hover:-translate-y-0.5 hover:border-[#2786A5] hover:shadow-lg md:p-8"
        >
          <Wifi className="mb-4 text-[#2786A5]" size={32} aria-hidden="true" />
          <h2 className="text-2xl font-black text-slate-900">宽带常见问题</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">账单涨价、安装、设备、网速、Wi-Fi、地址覆盖等常见问题。</p>
          <span className="mt-6 inline-flex items-center gap-1 font-bold text-[#164B78] group-hover:text-[#103B60]">
            查看宽带常见问题 <ArrowRight size={16} aria-hidden="true" />
          </span>
        </Link>
      </section>

      <h2 className="mb-5 text-2xl font-black text-slate-900 md:text-3xl">更多问题与指南</h2>

      {/* 分类筛选按钮：放在标题下方 */}
      <div className="text-center mb-10">
        <div className="flex flex-wrap justify-center gap-2">
          <FilterButton
            active={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
          >
            全部文章
          </FilterButton>
          <FilterButton
            active={activeCategory === 'mobile'}
            onClick={() => setActiveCategory('mobile')}
          >
            手机套餐
          </FilterButton>
          <FilterButton
            active={activeCategory === 'broadband'}
            onClick={() => setActiveCategory('broadband')}
          >
            家庭宽带
          </FilterButton>
          <FilterButton
            active={activeCategory === 'guide'}
            onClick={() => setActiveCategory('guide')}
          >
            办事指南
          </FilterButton>
        </div>
      </div>

      {/* 文章列表 */}
      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-slate-500 text-lg">暂无文章</p>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-slate-500 text-lg">该分类暂无文章</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, filteredIndex) => {
            // data-category 按“原始顺序”标记，保证符合你的三篇文章要求
            const originalIndex = posts.findIndex((p) => p.slug === post.slug)
            const dataCategory = getDataCategory(post, originalIndex)

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                data-category={dataCategory}
                className="blog-card group block bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* 文章图片 */}
                {post.image && (
                  <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                    <img
                      src={post.image}
                      alt={
                        post.slug === 'bay-area-phone-card-guide'
                          ? '2026美国T-Mobile手机套餐对比-鸿达电讯'
                          : post.title
                      }
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* 文章内容 */}
                <div className="p-6">
                  {/* 分类标签 */}
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={14} className="text-blue-600" />
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {post.category || '未分类'}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h2 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* 描述 */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.description || post.excerpt}
                  </p>

                  {/* 日期和阅读更多 */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('zh-CN')}</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      阅读更多
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}

      {/* 返回首页 */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
        >
          ← 返回首页
        </Link>
      </div>

      <section aria-labelledby="blog-community-title" className="mt-14 border-t border-slate-200 pt-10">
        <h2 id="blog-community-title" className="text-2xl font-black text-slate-900 md:text-3xl">
          还有其他问题？给我们留言
        </h2>
        <p className="mt-2 text-base text-slate-600">
          没找到答案？把你的情况写下来，我们会整理和回复。
        </p>
        <CommunityDiscussionClientOnly pageKey="page:/blog" />
      </section>
    </main>
  )
}


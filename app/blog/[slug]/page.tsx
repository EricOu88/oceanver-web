import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blog'
import { Calendar, Tag, ArrowLeft, ArrowRight } from 'lucide-react'
import Script from 'next/script'
import ContactModal from '@/app/components/ContactModal'
import BlogPostClient from './BlogPostClient'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: '文章未找到',
    }
  }

  return {
    title: `${post.title} | 鸿达电讯博客`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, post.category, 3)

  // LocalBusiness Schema
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://baymediastar.com/#localbusiness',
    name: 'Bay Media Star 鸿达电讯',
    alternateName: ['鸿达电讯', 'Bay Media Star Fremont', 'Fremont 中文手机卡宽带'],
    description: '鸿达电讯18年湾区实体店，美国手机卡宽带中文办理专家。支持无SSN办网、无SSN办手机卡，服务全美50州。',
    url: 'https://baymediastar.com',
    logo: 'https://baymediastar.com/bms-logo.png',
    image: 'https://baymediastar.com/telecom-logos.png',
    telephone: '+1-510-849-6191',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '46292 Warm Springs Blvd #606',
      addressLocality: 'Fremont',
      addressRegion: 'CA',
      postalCode: '94539',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.491624,
      longitude: -121.928423,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '100',
    },
  }

  return (
    <>
      {/* LocalBusiness Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* 面包屑导航（提升索引深度） */}
        <nav className="mb-4 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                首页
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                博客
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-700 font-semibold">{post.title}</li>
          </ol>
        </nav>

        {/* 返回按钮 */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            返回博客列表
          </Link>
        </div>

        {/* 文章头部 */}
        <header className="mb-8">
          {/* 分类和日期 */}
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</span>
            </div>
          </div>

          {/* 标题 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* 描述 */}
          {post.description && (
            <p className="text-lg text-slate-700 leading-relaxed">
              {post.description}
            </p>
          )}
        </header>

        {/* 文章内容 */}
        <article
          className="max-w-none mb-12
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-slate-900 [&_h2]:mt-12 [&_h2]:mb-6
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-4
            [&_p]:text-slate-700 [&_p]:leading-relaxed [&_p]:mb-4
            [&_strong]:text-slate-900 [&_strong]:font-bold
            [&_ul]:text-slate-700 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2
            [&_ol]:text-slate-700 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:space-y-2
            [&_li]:my-2
            [&_blockquote]:border-l-4 [&_blockquote]:border-blue-600 [&_blockquote]:bg-blue-50 [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:rounded-r-xl [&_blockquote]:my-6
            [&_a]:text-blue-600 [&_a]:font-semibold [&_a]:no-underline hover:[&_a]:underline
            [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:my-6
            [&_code]:bg-slate-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm
            [&_pre]:bg-slate-900 [&_pre]:text-slate-100 [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA 区域 */}
        <BlogPostClient />

        {/* 相关文章 */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-black text-slate-900 mb-6">相关文章</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-white rounded-xl border border-slate-200 hover:border-blue-300 p-4 transition-all hover:shadow-lg"
                >
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                    {relatedPost.description || relatedPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold">
                    阅读更多
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 返回博客列表 */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            返回博客列表
          </Link>
        </div>
      </main>
    </>
  )
}

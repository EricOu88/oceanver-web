import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogListClient from './BlogListClient'
import { getCanonicalUrl } from '@/lib/seo-utils'

export const metadata: Metadata = {
  title: '博客 | 湾区宽带手机套餐指南 | 鸿达电讯',
  description: '鸿达电讯博客，分享湾区宽带、手机套餐申请指南，账单优化技巧，以及最新优惠信息。',
  alternates: {
    canonical: getCanonicalUrl('/blog'),
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return <BlogListClient posts={posts} />
}

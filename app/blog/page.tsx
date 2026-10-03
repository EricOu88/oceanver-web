import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogListClient from './BlogListClient'
import { getCanonicalUrl } from '@/lib/seo-utils'

export const metadata: Metadata = {
  title: '通信问题与账单指南 | 美国鸿达电讯',
  description: '分享美国手机套餐、家庭宽带、账单变化和常见通信问题的中文说明与判断方法。',
  alternates: {
    canonical: getCanonicalUrl('/blog'),
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return <BlogListClient posts={posts} />
}

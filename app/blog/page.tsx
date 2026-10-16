import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogListClient from './BlogListClient'
import { getCanonicalUrl } from '@/lib/seo-utils'

export const metadata: Metadata = {
  title: '博客文章｜手机、宽带与账单问题指南｜美国鸿达电讯',
  description: '阅读美国手机、家庭宽带与账单问题指南，了解常见费用变化、设备和网络问题的排查步骤，以及下一步核实入口。',
  alternates: {
    canonical: getCanonicalUrl('/blog'),
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return <BlogListClient posts={posts} />
}

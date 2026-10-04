import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogListClient from './BlogListClient'
import { getCanonicalUrl } from '@/lib/seo-utils'

export const metadata: Metadata = {
  title: '猜你想问？｜美国手机与宽带常见问题｜美国鸿达电讯',
  description: '整理美国手机、宽带、账单和使用中的常见问题，可分别进入手机 FAQ、宽带 FAQ，也可继续查看相关文章和留言提问。',
  alternates: {
    canonical: getCanonicalUrl('/blog'),
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return <BlogListClient posts={posts} />
}

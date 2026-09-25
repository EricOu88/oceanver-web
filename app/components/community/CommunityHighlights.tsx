import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { getLatestApprovedComments, getPopularApprovedComments } from '@/lib/community/server'

export default async function CommunityHighlights() {
  let latest = []; let popular = []
  try { [latest, popular] = await Promise.all([getLatestApprovedComments(4), getPopularApprovedComments(4)]) } catch { return null }
  if (!latest.length && !popular.length) return null
  const renderComments = (comments: typeof latest) => comments.map((comment) => <Link key={comment.id} href={`/blog/${comment.page_key.replace(/^blog:/, '')}#community-discussion-title`} className="rounded-lg border border-slate-200 p-4 hover:border-blue-300"><p className="text-xs font-bold text-slate-500">{comment.nickname}</p><p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-700">{comment.body}</p></Link>)
  return <section aria-labelledby="community-highlights-title" className="mx-auto max-w-6xl px-6 py-10"><div className="flex items-center justify-between gap-4"><div><p className="flex items-center gap-2 text-sm font-semibold text-blue-700"><MessageCircle size={16} />社区问答</p><h2 id="community-highlights-title" className="mt-2 text-2xl font-black text-slate-900">最新与热门讨论</h2></div><Link href="/blog" className="text-sm font-bold text-blue-700 hover:underline">查看文章并参与</Link></div><div className="mt-5 grid gap-8 md:grid-cols-2"><div><h3 className="mb-3 font-bold text-slate-900">最新问题</h3><div className="space-y-3">{renderComments(latest)}</div></div><div><h3 className="mb-3 font-bold text-slate-900">热门问题</h3><div className="space-y-3">{renderComments(popular)}</div></div></div></section>
}
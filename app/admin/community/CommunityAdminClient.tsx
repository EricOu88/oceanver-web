'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getCommunityBrowserClient } from '@/lib/community/browser'
import type { StaffComment } from '@/lib/community/types'

function CommunityAdminContent() {
  const searchParams = useSearchParams()
  const targetCommentId = searchParams.get('comment')
  const [comments, setComments] = useState<StaffComment[]>([])
  const [status, setStatus] = useState('approved')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [reply, setReply] = useState<Record<string, string>>({})
  const [highlightedCommentId, setHighlightedCommentId] = useState<string | null>(null)

  async function load() {
    const query = status === 'all' ? '' : `?status=${status}`
    const response = await fetch(`/api/admin/community/comments${query}`, { cache: 'no-store' })
    const result = await response.json()
    if (response.ok) setComments(result.comments)
    else setMessage(result.error ?? '读取失败')
  }

  useEffect(() => {
    if (targetCommentId && status !== 'all') {
      setStatus('all')
      return
    }
    let active = true
    const query = status === 'all' ? '' : `?status=${status}`
    fetch(`/api/admin/community/comments${query}`, { cache: 'no-store' })
      .then(async (response) => {
        const result = await response.json()
        if (!active) return
        if (response.ok) setComments(result.comments)
        else setMessage(result.error ?? '读取失败')
      })
    return () => { active = false }
  }, [status, targetCommentId])

  useEffect(() => {
    if (!targetCommentId) return
    const target = comments.find((comment) => comment.id === targetCommentId)
    if (!target) return
    const element = document.getElementById(`comment-${targetCommentId}`)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setHighlightedCommentId(targetCommentId)
    const timeout = window.setTimeout(() => setHighlightedCommentId(null), 3000)
    return () => window.clearTimeout(timeout)
  }, [comments, targetCommentId])

  async function login(event: React.FormEvent) {
    event.preventDefault(); const client = getCommunityBrowserClient()
    if (!client) { setMessage('尚未配置 Supabase'); return }
    const { error } = await client.auth.signInWithPassword({ email, password })
    setMessage(error?.message ?? '登录成功'); if (!error) void load()
  }

  async function action(commentId: string, actionName: string, text?: string) {
    if (actionName === 'deleted' && !window.confirm('永久删除这条评论及其关联回复、点赞和举报记录？此操作不可恢复。')) return
    const response = await fetch('/api/admin/community/comments', { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ commentId, action: actionName, text }) })
    const result = await response.json(); setMessage(result.error ?? '操作完成'); if (response.ok) void load()
  }

  return <main className="mx-auto max-w-6xl px-6 py-12"><h1 className="text-3xl font-black text-slate-900">社区讨论管理</h1><p className="mt-2 text-sm text-slate-600">仅限已配置员工白名单的 Supabase Auth 账号使用。</p><form onSubmit={login} className="mt-6 grid max-w-xl gap-3 rounded-lg border border-slate-200 p-5 md:grid-cols-[1fr_1fr_auto]"><input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="员工邮箱" className="rounded border px-3 py-2 text-sm" /><input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="密码" className="rounded border px-3 py-2 text-sm" /><button className="rounded bg-slate-900 px-4 py-2 text-sm font-bold text-white">登录</button></form><div className="mt-8 flex items-center gap-3"><label className="text-sm font-bold">筛选状态</label><select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded border px-3 py-2 text-sm"><option value="approved">已发布</option><option value="pending">待处理旧留言</option><option value="hidden">已隐藏</option><option value="rejected">已拒绝</option><option value="all">全部</option></select></div>{message && <p role="status" className="mt-4 text-sm text-slate-600">{message}</p>}<div className="mt-5 space-y-4">{comments.map((comment) => <article key={comment.id} id={`comment-${comment.id}`} className={`rounded-lg border border-slate-200 p-5 ${highlightedCommentId === comment.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}><div className="flex flex-wrap justify-between gap-2"><strong>{comment.nickname}</strong><span className="text-xs text-slate-500">{comment.page_key} · {new Date(comment.created_at).toLocaleString('zh-CN')}</span></div><p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-700">{comment.body}</p><div className="mt-4 flex flex-wrap gap-2"><button onClick={() => void action(comment.id, 'approved')} className="rounded bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white">发布</button><button onClick={() => void action(comment.id, 'rejected')} className="rounded bg-amber-600 px-3 py-1.5 text-xs font-bold text-white">拒绝</button><button onClick={() => void action(comment.id, 'hidden')} className="rounded bg-slate-700 px-3 py-1.5 text-xs font-bold text-white">隐藏</button><button onClick={() => void action(comment.id, 'deleted')} className="rounded border border-red-300 px-3 py-1.5 text-xs font-bold text-red-700">永久删除</button></div><div className="mt-4 flex gap-2"><input value={reply[comment.id] ?? ''} onChange={(event) => setReply((current) => ({ ...current, [comment.id]: event.target.value }))} placeholder="公开回复客户" className="min-w-0 flex-1 rounded border px-3 py-2 text-sm" /><button onClick={() => void action(comment.id, 'reply', reply[comment.id])} className="rounded bg-blue-700 px-3 py-2 text-xs font-bold text-white">官方回复</button></div></article>)}</div></main>
}

export default function CommunityAdminClient() {
  return <Suspense fallback={null}><CommunityAdminContent /></Suspense>
}

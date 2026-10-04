'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { MessageCircle, Flag, Heart, Reply, ShieldCheck } from 'lucide-react'
import type { CommunityComment, CommunityThread } from '@/lib/community/types'

type TurnstileApi = {
  render: (element: HTMLElement, options: {
    sitekey: string
    callback: (token: string) => void
    'error-callback': () => void
    'expired-callback': () => void
  }) => string
  reset: (widgetId?: string) => void
}

function formatDate(value: string) { return new Intl.DateTimeFormat('zh-CN', { dateStyle: 'medium' }).format(new Date(value)) }

function mergeComment(thread: CommunityThread, comment: CommunityComment): CommunityThread {
  const comments = [...thread.comments.filter((item) => item.id !== comment.id), comment]
    .sort((first, second) => new Date(first.created_at).getTime() - new Date(second.created_at).getTime())
  return { ...thread, comments, total: Math.max(thread.total, comments.length) }
}

function reconcileThread(current: CommunityThread, fetched: CommunityThread, preservedIds: Set<string>): CommunityThread {
  const fetchedIds = new Set(fetched.comments.map((comment) => comment.id))
  const newlyPublished = current.comments.filter((comment) => preservedIds.has(comment.id) && !fetchedIds.has(comment.id))
  const comments = [...fetched.comments, ...newlyPublished]
    .filter((comment, index, all) => all.findIndex((item) => item.id === comment.id) === index)
    .sort((first, second) => new Date(first.created_at).getTime() - new Date(second.created_at).getTime())
  return { ...fetched, comments, total: Math.max(fetched.total, comments.length) }
}

async function fetchCommunityThread(pageKey: string): Promise<CommunityThread> {
  const response = await fetch(`/api/community/comments?${new URLSearchParams({ pageKey })}`, { cache: 'no-store' })
  if (!response.ok) throw new Error('Community comments could not be loaded')
  return response.json()
}

export default function CommunityDiscussion({ pageKey, showComments = true }: { pageKey: string; showComments?: boolean }) {
  const captchaRef = useRef<HTMLDivElement>(null)
  const captchaRenderedRef = useRef(false)
  const turnstileRef = useRef<TurnstileApi | null>(null)
  const widgetIdRef = useRef<string | null>(null)
  const recentlyPublishedIdsRef = useRef(new Set<string>())
  const [turnstileToken, setTurnstileToken] = useState('')
  const [thread, setThread] = useState<CommunityThread>({ comments: [], total: 0 })
  const [nickname, setNickname] = useState('')
  const [body, setBody] = useState('')
  const [replyTo, setReplyTo] = useState<CommunityComment | null>(null)
  const [notice, setNotice] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    let active = true
    fetchCommunityThread(pageKey)
      .then((nextThread) => { if (active) setThread(nextThread) })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [pageKey])
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
    if (!siteKey) return
    const renderCaptcha = () => {
      const turnstile = (window as Window & { turnstile?: TurnstileApi }).turnstile
      if (!turnstile || !captchaRef.current || captchaRenderedRef.current) return
      try {
        turnstileRef.current = turnstile
        widgetIdRef.current = turnstile.render(captchaRef.current, {
          sitekey: siteKey,
          callback: setTurnstileToken,
          'error-callback': () => { setTurnstileToken(''); setNotice('验证码连接失败，请刷新页面后重试。') },
          'expired-callback': () => { setTurnstileToken(''); setNotice('验证码已失效，请稍候重新验证后再提交。') },
        })
        captchaRenderedRef.current = true
        window.clearInterval(timer)
      } catch {
        setNotice('验证码初始化失败，请刷新页面后重试。')
      }
    }
    const timer = window.setInterval(renderCaptcha, 100)
    renderCaptcha()
    return () => window.clearInterval(timer)
  }, [])

  function resetTurnstile() {
    setTurnstileToken('')
    if (widgetIdRef.current && turnstileRef.current) turnstileRef.current.reset(widgetIdRef.current)
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    if (submitting) return
    if (!turnstileToken) {
      setNotice('验证码加载中，请稍候再提交。')
      return
    }
    setSubmitting(true)
    setNotice('')
    try {
      const response = await fetch('/api/community/comments', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ pageKey, nickname, body, parentId: replyTo?.id, captchaToken: turnstileToken, website: '' }) })
      const result = await response.json()
      if (!response.ok) {
        if (response.status === 400 && result.error === '请完成验证码后再提交') {
          resetTurnstile()
          setNotice('验证码已失效，请稍候重新验证后再提交。')
          return
        }
        setNotice(result.error ?? '留言提交失败，请稍后再试。')
        return
      }
      resetTurnstile()
      setBody('')
      setReplyTo(null)
      if (result.comment) {
        recentlyPublishedIdsRef.current.add(result.comment.id)
        setThread((current) => mergeComment(current, result.comment as CommunityComment))
      }
      try {
        const nextThread = await fetchCommunityThread(pageKey)
        nextThread.comments.forEach((comment) => recentlyPublishedIdsRef.current.delete(comment.id))
        setThread((current) => reconcileThread(current, nextThread, recentlyPublishedIdsRef.current))
        setNotice('留言已发布。')
      } catch {
        setNotice('留言已发布，刷新页面后可查看。')
      }
    } catch {
      setNotice('留言提交失败，请稍后再试。')
    } finally {
      setSubmitting(false)
    }
  }

  async function like(comment: CommunityComment) {
    const response = await fetch(`/api/community/comments/${comment.id}/like`, { method: 'POST' })
    if (response.ok) setThread((current) => ({ ...current, comments: current.comments.map((item) => item.id === comment.id ? { ...item, like_count: item.like_count + 1 } : item) }))
  }

  async function report(comment: CommunityComment) {
    const reason = window.prompt('请简要填写举报原因')
    if (!reason) return
    const response = await fetch(`/api/community/comments/${comment.id}/report`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ reason }) })
    setNotice(response.ok ? '感谢举报，我们会尽快审核。' : '举报失败，请稍后再试。')
  }

  const comments = thread.comments
  const captchaReady = Boolean(turnstileToken)
  return <section aria-label={showComments ? undefined : '留下你的问题'} aria-labelledby={showComments ? 'community-discussion-title' : undefined} className="mt-14 border-t border-slate-200 pt-10">
    {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && <Script id="cloudflare-turnstile-api" src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" onError={() => setNotice('验证码脚本加载失败，请检查网络后刷新页面。')} />}
    {showComments && <div className="mb-6 flex items-start justify-between gap-4">
      <div><p className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-700"><MessageCircle size={17} />社区问答</p><h2 id="community-discussion-title" className="text-2xl font-black text-slate-900">大家都在讨论</h2><p className="mt-2 text-sm text-slate-600">公开留言会先由美国鸿达电讯审核，账户资料请通过中文客服私下提供。</p></div>
      <a href="tel:5108496191" className="shrink-0 text-sm font-bold text-blue-700 hover:underline">中文客服<br />510-849-6191</a>
    </div>}
    {showComments && <div className="space-y-4">{loading ? <p className="text-sm text-slate-500">正在加载讨论...</p> : comments.length === 0 ? <p className="rounded-lg bg-slate-50 p-5 text-sm text-slate-600">还没有公开讨论，欢迎留下第一个问题。</p> : comments.map((comment) => <article key={comment.id} className={`rounded-lg border p-4 ${comment.is_official ? 'border-blue-200 bg-blue-50/50' : 'border-slate-200'}`}><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2"><strong className="text-sm text-slate-900">{comment.nickname}</strong>{comment.is_official && <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700"><ShieldCheck size={14} />美国鸿达电讯 · 中文客服</span>}</div><time className="text-xs text-slate-500">{formatDate(comment.created_at)}</time></div><p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-700">{comment.body}</p><div className="mt-3 flex gap-4 text-xs text-slate-500"><button type="button" onClick={() => void like(comment)} className="inline-flex items-center gap-1 hover:text-blue-700"><Heart size={14} />点赞 {comment.like_count}</button><button type="button" onClick={() => setReplyTo(comment)} className="inline-flex items-center gap-1 hover:text-blue-700"><Reply size={14} />回复</button><button type="button" onClick={() => void report(comment)} className="inline-flex items-center gap-1 hover:text-red-600"><Flag size={14} />举报</button></div></article>)}</div>}
    <form onSubmit={submit} className={`${showComments ? 'mt-7' : ''} rounded-lg border border-slate-200 bg-white p-5`}><div className="mb-4 flex items-center justify-between"><h3 className="font-bold text-slate-900">{replyTo ? `回复 ${replyTo.nickname}` : '留下你的问题'}</h3>{replyTo && <button type="button" onClick={() => setReplyTo(null)} className="text-xs text-slate-500 hover:text-slate-900">取消回复</button>}</div><div className="grid gap-3 md:grid-cols-[180px_1fr]"><input required maxLength={40} value={nickname} onChange={(event) => setNickname(event.target.value)} placeholder="昵称" className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600" /><textarea required maxLength={2000} value={body} onChange={(event) => setBody(event.target.value)} placeholder="请描述你想了解的问题" rows={4} className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600" /></div><div ref={captchaRef} className="mt-3 min-h-0" /><div className="mt-3 flex flex-wrap items-center justify-between gap-3"><p className="text-xs text-slate-500">请勿公开电话、账户号码、完整地址或账单截图。</p><button type="submit" disabled={submitting || !captchaReady} className="rounded-md bg-blue-700 px-4 py-2 text-sm font-bold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60">{submitting ? '发布中…' : captchaReady ? '发表评论' : '验证码加载中…'}</button></div>{notice && <p role="status" className="mt-3 text-sm text-slate-600">{notice}</p>}</form>
  </section>
}

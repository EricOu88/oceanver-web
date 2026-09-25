import { NextRequest, NextResponse } from 'next/server'
import { getCommunityClient, isCommunityConfigured } from '@/lib/community/server'
import { getRequestFingerprint, hasTrustedRequestOrigin, isRateLimited } from '@/lib/community/antiSpam'

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isCommunityConfigured()) return NextResponse.json({ error: '评论服务尚未配置' }, { status: 503 })
  if (!hasTrustedRequestOrigin(request)) return NextResponse.json({ error: '请求来源不受信任' }, { status: 403 })
  if (isRateLimited(`like:${getRequestFingerprint(request)}`, 30)) return NextResponse.json({ error: '操作过于频繁' }, { status: 429 })
  const { id } = await params
  const client = await getCommunityClient()
  if (!client) return NextResponse.json({ error: '评论服务尚未配置' }, { status: 503 })
  const { error } = await client.from('community_comment_likes').insert({ comment_id: id, visitor_hash: getRequestFingerprint(request) })
  if (error?.code === '23505') return NextResponse.json({ ok: true, alreadyLiked: true })
  if (error) return NextResponse.json({ error: '点赞失败，请稍后再试' }, { status: 400 })
  return NextResponse.json({ ok: true })
}
import { NextRequest, NextResponse } from 'next/server'
import { getCommunityClient, isCommunityConfigured } from '@/lib/community/server'
import { getRequestFingerprint, hasTrustedRequestOrigin, isRateLimited } from '@/lib/community/antiSpam'

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isCommunityConfigured()) return NextResponse.json({ error: '评论服务尚未配置' }, { status: 503 })
  if (!hasTrustedRequestOrigin(request)) return NextResponse.json({ error: '请求来源不受信任' }, { status: 403 })
  const fingerprint = getRequestFingerprint(request)
  if (isRateLimited(`report:${fingerprint}`, 10)) return NextResponse.json({ error: '操作过于频繁' }, { status: 429 })
  const { id } = await params
  const body = await request.json() as { reason?: unknown }
  const reason = typeof body.reason === 'string' ? body.reason.trim().slice(0, 500) : ''
  if (!reason) return NextResponse.json({ error: '请填写举报原因' }, { status: 400 })
  const client = await getCommunityClient()
  if (!client) return NextResponse.json({ error: '评论服务尚未配置' }, { status: 503 })
  const { error } = await client.from('community_comment_reports').insert({ comment_id: id, reason, reporter_hash: fingerprint })
  if (error?.code === '23505') return NextResponse.json({ ok: true, duplicate: true })
  if (error) return NextResponse.json({ error: '举报失败，请稍后再试' }, { status: 400 })
  return NextResponse.json({ ok: true })
}
import { NextRequest, NextResponse } from 'next/server'
import { hasTrustedRequestOrigin } from '@/lib/community/antiSpam'
import { getCommunityClient, getStaffComments, getStaffUser, isCommunityConfigured } from '@/lib/community/server'

async function authorize() {
  const user = await getStaffUser()
  const client = await getCommunityClient()
  return user && client ? { user, client } : null
}

export async function GET(request: NextRequest) {
  try {
    if (!await authorize()) return NextResponse.json({ error: '需要员工账号登录' }, { status: 401 })
    const comments = await getStaffComments({ status: request.nextUrl.searchParams.get('status') ?? undefined, pageKey: request.nextUrl.searchParams.get('pageKey') ?? undefined })
    return NextResponse.json({ comments })
  } catch (error) {
    console.error('Community moderation read failed:', error)
    return NextResponse.json({ error: '无法读取审核列表' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  if (!isCommunityConfigured()) return NextResponse.json({ error: '评论服务尚未配置' }, { status: 503 })
  if (!hasTrustedRequestOrigin(request)) return NextResponse.json({ error: '请求来源不受信任' }, { status: 403 })
  const access = await authorize()
  if (!access) return NextResponse.json({ error: '需要员工账号登录' }, { status: 401 })
  const body = await request.json() as { action?: string; commentId?: string; text?: string }
  const commentId = typeof body.commentId === 'string' ? body.commentId : ''
  if (!commentId) return NextResponse.json({ error: '缺少评论 ID' }, { status: 400 })
  if (body.action === 'reply') {
    const text = typeof body.text === 'string' ? body.text.trim().slice(0, 2000) : ''
    if (!text) return NextResponse.json({ error: '请填写回复内容' }, { status: 400 })
    const { data: original } = await access.client.from('community_comments').select('page_key').eq('id', commentId).single()
    if (!original) return NextResponse.json({ error: '评论不存在' }, { status: 404 })
    const { data: replyId, error } = await access.client.rpc('create_official_reply', { p_parent_id: commentId, p_body: text })
    if (error) throw error
    return NextResponse.json({ ok: true, replyId })
  }
  const statuses = ['approved', 'rejected', 'hidden', 'deleted']
  if (!body.action || !statuses.includes(body.action)) return NextResponse.json({ error: '不支持的审核操作' }, { status: 400 })
  const { data: moderation, error } = await access.client.rpc('moderate_community_comment', { p_comment_id: commentId, p_action: body.action, p_metadata: { source: 'community_admin_api' } })
  if (error) throw error
  return NextResponse.json({ ok: true, moderation })
}
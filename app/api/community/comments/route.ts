import { NextRequest, NextResponse } from 'next/server'
import { COMMUNITY_RATE_LIMIT, containsSensitiveAccountData, getRequestFingerprint, hasTrustedRequestOrigin, isRateLimited, verifyCaptcha } from '@/lib/community/antiSpam'
import { getCommunityClient, isCommunityConfigured } from '@/lib/community/server'
import { getCommunitySecretClient } from '@/lib/community/serverSecret'
import { getApprovedComments } from '@/lib/community/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const noStoreHeaders = { 'Cache-Control': 'no-store, max-age=0' }

function cleanText(value: unknown, max: number) {
  return typeof value === 'string' ? value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').trim().slice(0, max) : ''
}

export async function POST(request: NextRequest) {
  if (!isCommunityConfigured()) return NextResponse.json({ error: '评论服务尚未配置' }, { status: 503 })
  if (!hasTrustedRequestOrigin(request)) return NextResponse.json({ error: '请求来源不受信任' }, { status: 403 })
  const fingerprint = getRequestFingerprint(request)
  if (isRateLimited(fingerprint, COMMUNITY_RATE_LIMIT.max, COMMUNITY_RATE_LIMIT.windowMs)) return NextResponse.json({ error: '提交过于频繁，请稍后再试' }, { status: 429 })
  try {
    const body = await request.json() as Record<string, unknown>
    if (body.website) return NextResponse.json({ error: '提交失败' }, { status: 400 })
    if (!await verifyCaptcha(body.captchaToken)) return NextResponse.json({ error: '请完成验证码后再提交' }, { status: 400 })
    const pageKey = cleanText(body.pageKey, 180)
    const nickname = cleanText(body.nickname, 40)
    const commentBody = cleanText(body.body, 2000)
    const parentId = body.parentId ? cleanText(body.parentId, 60) : null
    if (!pageKey || nickname.length < 1 || commentBody.length < 1) return NextResponse.json({ error: '请填写昵称和留言内容' }, { status: 400 })
    if (containsSensitiveAccountData(commentBody)) return NextResponse.json({ error: '请勿公开填写电话、账户号码、完整地址或账单资料，请通过中文客服私下联系' }, { status: 400 })
    const client = await getCommunityClient()
    const secretClient = getCommunitySecretClient()
    if (!client || !secretClient) return NextResponse.json({ error: '评论服务尚未配置' }, { status: 503 })
    if (parentId) {
      const { data: parent } = await client.from('community_comments').select('id,page_key,status,parent_id').eq('id', parentId).eq('page_key', pageKey).eq('status', 'approved').is('parent_id', null).maybeSingle()
      if (!parent) return NextResponse.json({ error: '回复目标不存在或已超过回复层级' }, { status: 400 })
    }
    const { data: commentId, error } = await secretClient.rpc('submit_community_comment', { p_page_key: pageKey, p_nickname: nickname, p_body: commentBody, p_parent_id: parentId })
    if (error) {
      if (error.code === 'P0001' && error.message.includes('Sensitive account data is not allowed')) {
        return NextResponse.json({ error: '留言中可能包含账户号码、电话号码或其他敏感信息，请删除后再提交。' }, { status: 400, headers: noStoreHeaders })
      }
      throw error
    }
    const { data: createdComment } = await secretClient.from('community_comments').select('id,page_key,nickname,body,parent_id,status,is_official,created_at').eq('id', commentId).single()
    const comment = createdComment
      ? { ...createdComment, like_count: 0 }
      : { id: commentId, page_key: pageKey, nickname, body: commentBody, parent_id: parentId, status: 'approved', is_official: false, created_at: new Date().toISOString(), like_count: 0 }
    return NextResponse.json({ ok: true, commentId, comment, message: '留言已发布。' }, { status: 201, headers: noStoreHeaders })
  } catch (error) {
    console.error('Community comment submission failed:', error)
    return NextResponse.json({ error: '留言提交失败，请稍后再试' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const pageKey = cleanText(request.nextUrl.searchParams.get('pageKey'), 180)
  if (!pageKey) return NextResponse.json({ error: '缺少页面标识' }, { status: 400 })
  try {
    return NextResponse.json(await getApprovedComments(pageKey), { headers: noStoreHeaders })
  } catch (error) {
    console.error('Community comments read failed:', error)
    return NextResponse.json({ error: '评论暂时无法加载', comments: [], total: 0 }, { status: 500, headers: noStoreHeaders })
  }
}
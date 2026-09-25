import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { CommunityComment, CommunityThread, StaffComment } from './types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export function isCommunityConfigured() { return Boolean(supabaseUrl && supabaseAnonKey) }

export async function getCommunityClient() {
  if (!isCommunityConfigured()) return null
  const cookieStore = await cookies()
  return createServerClient(supabaseUrl!, supabaseAnonKey!, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cookiesToSet) => { try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)) } catch { /* Server Components cannot write cookies. */ } },
    },
  })
}

export async function getApprovedComments(pageKey: string, limit = 50): Promise<CommunityThread> {
  const client = await getCommunityClient()
  if (!client) return { comments: [], total: 0 }
  const { data, error, count } = await client.from('community_comments')
    .select('id,page_key,nickname,body,parent_id,status,is_official,created_at,community_comment_likes(count)', { count: 'exact' })
    .eq('page_key', pageKey).eq('status', 'approved').order('created_at', { ascending: true }).limit(limit)
  if (error) throw error
  return { comments: (data ?? []).map((comment) => ({ ...comment, like_count: Array.isArray(comment.community_comment_likes) ? Number(comment.community_comment_likes[0]?.count ?? 0) : 0, community_comment_likes: undefined })) as CommunityComment[], total: count ?? 0 }
}

export async function getStaffUser() {
  const client = await getCommunityClient()
  if (!client) return null
  const { data } = await client.auth.getUser()
  const allowed = (process.env.COMMUNITY_STAFF_EMAILS ?? '').split(',').map((email) => email.trim().toLowerCase()).filter(Boolean)
  if (!data.user?.email || !allowed.includes(data.user.email.toLowerCase())) return null
  if (data.user.app_metadata?.role !== 'community_staff') return null
  return data.user
}

export async function getStaffComments(filters: { status?: string; pageKey?: string } = {}): Promise<StaffComment[]> {
  const client = await getCommunityClient()
  if (!client) return []
  if (!await getStaffUser()) throw new Error('STAFF_UNAUTHORIZED')
  let query = client.from('community_comments').select('id,page_key,nickname,body,parent_id,status,is_official,created_at,report_count,moderated_at').order('created_at', { ascending: false })
  if (filters.status && filters.status !== 'all') query = query.eq('status', filters.status)
  if (filters.pageKey) query = query.eq('page_key', filters.pageKey)
  const { data, error } = await query
  if (error) throw error
  return (data ?? []) as StaffComment[]
}

export async function getLatestApprovedComments(limit = 5): Promise<CommunityComment[]> {
  const client = await getCommunityClient()
  if (!client) return []
  const { data, error } = await client.from('community_comments').select('id,page_key,nickname,body,parent_id,status,is_official,created_at').eq('status', 'approved').order('created_at', { ascending: false }).limit(limit)
  if (error) throw error
  return (data ?? []).map((comment) => ({ ...comment, like_count: 0 })) as CommunityComment[]
}

export async function getPopularApprovedComments(limit = 4): Promise<CommunityComment[]> {
  const client = await getCommunityClient()
  if (!client) return []
  const { data, error } = await client.from('community_comments').select('id,page_key,nickname,body,parent_id,status,is_official,created_at,community_comment_likes(count)').eq('status', 'approved').limit(30)
  if (error) throw error
  return (data ?? []).map((comment) => ({ ...comment, like_count: Array.isArray(comment.community_comment_likes) ? Number(comment.community_comment_likes[0]?.count ?? 0) : 0 })).sort((a, b) => b.like_count - a.like_count).slice(0, limit) as CommunityComment[]
}
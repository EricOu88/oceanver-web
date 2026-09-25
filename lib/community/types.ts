export type CommentStatus = 'pending' | 'approved' | 'rejected' | 'hidden' | 'deleted'

export interface CommunityComment {
  id: string
  page_key: string
  nickname: string
  body: string
  parent_id: string | null
  status: CommentStatus
  is_official: boolean
  created_at: string
  like_count: number
}

export interface CommunityThread { comments: CommunityComment[]; total: number }

export interface StaffComment extends CommunityComment {
  report_count: number
  moderated_at: string | null
}
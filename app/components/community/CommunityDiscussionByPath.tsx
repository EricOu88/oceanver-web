'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

const CommunityDiscussion = dynamic(() => import('./CommunityDiscussion'), {
  ssr: false,
  loading: () => (
    <section className="mt-14">
      <p className="text-sm text-slate-500">正在加载讨论...</p>
    </section>
  ),
})

const CommunityDiscussionFormOnly = dynamic(() => import('./CommunityDiscussion'), {
  ssr: false,
  loading: () => null,
})

export function CommunityDiscussionClientOnly({ pageKey, showComments }: { pageKey: string; showComments?: boolean }) {
  if (showComments === false) return <CommunityDiscussionFormOnly pageKey={pageKey} showComments={false} />
  return <CommunityDiscussion pageKey={pageKey} showComments={showComments} />
}

export default function CommunityDiscussionByPath() {
  const pathname = usePathname()
  if (!pathname || pathname === '/internet' || pathname === '/cellphone') {
    return <CommunityDiscussion pageKey={`page:${pathname || '/'}`} />
  }
  return <CommunityDiscussion pageKey={`page:${pathname.replace(/\/$/, '')}`} />
}

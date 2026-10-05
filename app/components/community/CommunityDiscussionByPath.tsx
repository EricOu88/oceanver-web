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

export function CommunityDiscussionClientOnly({ pageKey, title, description, showContactLink }: { pageKey: string; title?: string; description?: string; showContactLink?: boolean }) {
  return <CommunityDiscussion pageKey={pageKey} title={title} description={description} showContactLink={showContactLink} />
}

export default function CommunityDiscussionByPath() {
  const pathname = usePathname()
  if (!pathname || pathname === '/internet' || pathname === '/cellphone') {
    return <CommunityDiscussion pageKey={`page:${pathname || '/'}`} />
  }
  return <CommunityDiscussion pageKey={`page:${pathname.replace(/\/$/, '')}`} />
}

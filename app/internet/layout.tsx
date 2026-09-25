import CommunityDiscussionByPath from '@/app/components/community/CommunityDiscussionByPath'

export default function InternetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<CommunityDiscussionByPath /></>
}
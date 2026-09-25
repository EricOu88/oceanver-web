import CommunityDiscussionByPath from '@/app/components/community/CommunityDiscussionByPath'

export default function InternetWifiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<CommunityDiscussionByPath /></>
}
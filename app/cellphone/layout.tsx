import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import CommunityDiscussionByPath from '@/app/components/community/CommunityDiscussionByPath'

export const metadata: Metadata = {
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}<CommunityDiscussionByPath /></>;
}

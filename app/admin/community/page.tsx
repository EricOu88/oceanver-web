import type { Metadata } from 'next'
import CommunityAdminClient from './CommunityAdminClient'

export const metadata: Metadata = { title: '社区讨论管理', robots: { index: false, follow: false } }

export default function CommunityAdminPage() { return <CommunityAdminClient /> }
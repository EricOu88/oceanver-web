import type { Metadata } from 'next'
import CommunityAdminClient from './CommunityAdminClient'

export const metadata: Metadata = { title: '社区讨论管理' }

export default function CommunityAdminPage() { return <CommunityAdminClient /> }
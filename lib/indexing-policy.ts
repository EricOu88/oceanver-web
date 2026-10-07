import { SITEMAP_ALLOWLIST } from '@/app/sitemap-allowlist'

const PHASE2_ENV = 'OCEANVER_INDEX_PHASE2'

export function isPhase2IndexingEnabled(): boolean {
  return process.env[PHASE2_ENV] === 'true'
}

export function normalizeIndexPath(pathname: string): string {
  const withoutQuery = pathname.split('?')[0] || '/'
  if (withoutQuery === '/') return '/'
  return withoutQuery.endsWith('/') ? withoutQuery.slice(0, -1) : withoutQuery
}

export function isPhase2IndexPath(pathname: string): boolean {
  const normalized = normalizeIndexPath(pathname)
  return (SITEMAP_ALLOWLIST as readonly string[]).includes(normalized)
}

export const PHASE2_INDEXING_ENV_NAME = PHASE2_ENV

import crypto from 'node:crypto'
import type { NextRequest } from 'next/server'

const attempts = new Map<string, { count: number; expiresAt: number }>()

export const COMMUNITY_RATE_LIMIT = process.env.NODE_ENV === 'development'
  ? { max: 20, windowMs: 60 * 1000 }
  : { max: 5, windowMs: 10 * 60 * 1000 }

export function getRequestFingerprint(request: NextRequest) {
  const value = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  return crypto.createHash('sha256').update(`${value}:${process.env.COMMUNITY_HASH_SALT ?? 'oceanver-community'}`).digest('hex')
}

export function isRateLimited(fingerprint: string, max = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now(); const current = attempts.get(fingerprint)
  if (!current || current.expiresAt <= now) { attempts.set(fingerprint, { count: 1, expiresAt: now + windowMs }); return false }
  current.count += 1
  return current.count > max
}

export async function verifyCaptcha(token: unknown) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret && process.env.NODE_ENV !== 'production') return true
  if (!secret || typeof token !== 'string' || !token) return false
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ secret, response: token }), cache: 'no-store' })
  const result = await response.json() as { success?: boolean }
  return result.success === true
}

export function containsSensitiveAccountData(text: string) {
  return /\b(?:\d[ -]?){7,16}\b|\b\d{5,}\b|账单截图|身份证|驾照|社会安全号|完整地址|account\s*(?:number|#)|ssn\b/i.test(text)
}

export function hasTrustedRequestOrigin(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (!origin) return true
  try {
    const originUrl = new URL(origin)
    const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim()
    const requestHost = forwardedHost || request.headers.get('host')
    return Boolean(requestHost && originUrl.host === requestHost)
  } catch {
    return false
  }
}
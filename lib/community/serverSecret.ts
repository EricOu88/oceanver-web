import 'server-only'
import { createClient } from '@supabase/supabase-js'

export function getCommunitySecretClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const secret = process.env.SUPABASE_SECRET_KEY
  if (!url || !secret || !secret.startsWith('sb_secret_')) return null
  return createClient(url, secret, {
    auth: { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false },
  })
}
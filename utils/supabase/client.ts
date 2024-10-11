// import { Database } from '@/database.types'
import { createBrowserClient } from '@supabase/ssr'


export function browserClient() {
  return createBrowserClient<any>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
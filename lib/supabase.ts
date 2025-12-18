import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface University {
  id: string
  name: string
  domain: string
  created_at?: string
}

export interface Profile {
  id: string
  username: string
  university_id: string
  created_at?: string
  updated_at?: string
}

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  message?: string | null;
  status: string;
  created_at: string;
};

export type LeadInsert = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

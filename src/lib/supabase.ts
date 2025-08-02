import { createClient } from '@supabase/supabase-js';

// Supabase is automatically configured in Lovable projects
// No need for manual environment variable setup

export const supabase = createClient('', '');

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  created_at?: string;
  updated_at?: string;
}
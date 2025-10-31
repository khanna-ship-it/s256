import { createClient } from '@supabase/supabase-js';

// 1. Read the environment variables set on Vercel.
// These are the public keys accessible to the client.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 2. Initialize the client.
// This is the object you will use for all your database queries.
export const supabase = createClient(supabaseUrl, supabaseKey);

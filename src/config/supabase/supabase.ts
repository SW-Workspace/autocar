import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = import.meta.env.SUPABASE_KEY;
const SUPABASE_URL = import.meta.env.SUPABASE_URL;

export const supabase = createClient(SUPABASE_KEY!, SUPABASE_URL!);

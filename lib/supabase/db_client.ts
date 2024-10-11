"use server";

import { createClient } from "@/utils/supabase/server";

export async function db() {
  const db = createClient();
  return db;
}

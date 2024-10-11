"use server";

import { createClient } from "@/utils/supabase/server";
import { Session } from "inspector";
import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";

export async function readUserSession() {
  noStore();
  const supabase = await createClient();
  const { data: data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return redirect("/login");
  }
  //// console.log(data.user);
  return {
    data: {
      session: data,
    },
  };
}

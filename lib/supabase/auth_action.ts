"use server";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = createClient();
  const { error } = await supabase.auth.signUp(data);
  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    return {
      error: true,
    }
  }
  revalidatePath("/", "layout");
  redirect("/");
}

// export async function loginWithGoogle() {
// 	const supabase = await createSupabaseServerClient();
// 	supabase.auth.signInWithOAuth({
// 		provider: "google",
// 		options: {
// 			redirectTo: `http://localhost:3000/auth-server/callback`,
// 		},
// 	});
// }

export async function signOut() {
  const supabase = createClient();
  const result = await supabase.auth.signOut();
  //// console.log("supabase sign out", result);
  return JSON.stringify(result);
}


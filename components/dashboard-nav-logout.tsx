"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { signOut } from "@/lib/supabase/auth_action";
import { useRouter } from "next/navigation";

export function DashboardNavLogout() {
  const router = useRouter();

  const logout = async (e: any) => {
    e.preventDefault();
    const result = await signOut();
    console.log("client SignOut", result);
    router.push("/");
  };
  const LogoutIcon = Icons["logout"];

  return (
    <Link
      href={""}
      onClick={logout}
      className={cn(
        "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
      )}
    >
      <LogoutIcon className="mr-2 h-4 w-4" />
      <span>Logout</span>
    </Link>
  );
}

"use client";
import { DashboardNav }  from "@/components/dashboard-nav";
import { navItems } from "@/lib/constants/data";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { DashboardNavLogout } from "../dashboard-nav-logout";

export default function Sidebar() {
  return (
    <nav
      className={cn(`relative md:sticky md:top-0 hidden h-screen border-r pt-16 md:block min-w-52`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            
            <DashboardNav items={navItems} />
            <Separator/>
            <DashboardNavLogout/>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";
import { DashboardNav }  from "@/components/dashboard-nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { mobileNavItems, navItems } from "@/lib/constants/data";
import { Separator } from "@/components/ui/separator";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { DashboardNavLogout } from "../dashboard-nav-logout";




interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}

export default function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="space-y-1">
                <DashboardNav items={navItems} setOpen={setOpen} />
                <Separator />
                <DashboardNavLogout/>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

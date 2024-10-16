import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import  MobileSidebar  from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="hidden md:block">
          <Link
            href={"#"}
            target="_blank"
          >
            <Image
              src="/vercel.svg"
              alt="Logo"
              width={125}
              height={125}
              className="mr-2 h-8 w-8 rounded-md p-1"
            />
          </Link>
        </div>
        <div className={cn("block sm:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}

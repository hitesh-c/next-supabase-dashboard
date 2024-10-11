// import  Icons  from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    title: "Profile",
    href: "/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Kanban",
    href: "/kanban",
    icon: "kanban",
    label: "kanban",
  },
  {
    title: "Logout",
    href: "/",
    icon: "logout",
    label: "login",
  },
];

export const mobileNavItems: NavItem[] = [

  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Kanban",
    href: "/dashboard/kanban",
    icon: "kanban",
    label: "kanban",
  },
  {
    title: "Logout",
    href: "/",
    icon: "logout",
    label: "login",
  },
];
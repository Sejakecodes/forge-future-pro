
import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  FolderOpen,
  Wallet,
  Star,
  User,
  Settings,
} from "lucide-react";

export const sidebarMenu = [
  {
    label: "Main",
    defaultOpen: true, // always open when website loads
    items: [
      { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
      { label: "Jobs / Explore", icon: Briefcase, path: "/jobs" },
      { label: "Messages", icon: MessageSquare, path: "/messages" },
    ],
  },
  {
    label: "Work",
    items: [
      { label: "My Projects", icon: FolderOpen, path: "/projects" },
      { label: "Wallet", icon: Wallet, path: "/wallet" },
      { label: "Reviews", icon: Star, path: "/reviews" },
    ],
  },
  {
    label: "Account",
    items: [
      { label: "Profile", icon: User, path: "/profile" },
      { label: "Settings", icon: Settings, path: "/settings" },
    ],
  },
];

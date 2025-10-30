
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
     defaultOpen: true,
    items: [
      { label: "My Projects", icon: FolderOpen, path: "/projects" },
      { label: "Wallet", icon: Wallet, path: "/wallet" },
      { label: "Reviews", icon: Star, path: "/reviews" },
    ],
  },
    {
    label: "Badges",
     defaultOpen: true,
    items: [
      { label: "Badges ", icon: FolderOpen, path: "/badges" },
      { label: "Awards", icon: Wallet, path: "/" },
      { label: "skills", icon: Star, path: "/" },
      { label: "skills", icon: Star, path: "/" },
    ],
  },
   {
    label: "Resources",
     defaultOpen: true,
    items: [
      { label: "Freelancing Toolkit", icon: FolderOpen, path: "/Resource" },
      { label: "Pricing Guides", icon: Wallet, path: "/" },
      { label: "Pitching strategies", icon: Star, path: "/" },
      { label: "skills", icon: Star, path: "/" },
    ],
  },
  {
    label: "Account",
     defaultOpen: true,
    items: [
      { label: "Profile", icon: User, path: "/profile" },
      { label: "Settings", icon: Settings, path: "/settings" },
    ],
  },
];

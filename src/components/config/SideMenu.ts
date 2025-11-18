
import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  FolderOpen,
  Wallet,
  Star,
  User,
  Settings,
  Award,
  Badge,
  FileBadge,
  BadgeDollarSign,
  Drill,
  FileDiff
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
      { label: "Badges", icon: Badge, path: "/badges" },
      { label: "Awards", icon: Award, path: "/" },
      { label: "skills", icon: FileBadge, path: "/" },
    
    ],
  },
   {
    label: "Resources",
     defaultOpen: true,
    items: [
      { label: "Freelancing Toolkit", icon: Drill, path: "/Resources" },
      { label: "Pricing Guides", icon: BadgeDollarSign, path: "/PricingGuides" },
      { label: "Pitching strategies", icon: FileDiff, path: "/" },
    
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

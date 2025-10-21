import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  FolderOpen,
  Wallet,
  Star,
  User,
  Settings,
  Sparkles,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Briefcase, label: "Jobs / Explore", path: "/jobs" },
  { icon: MessageSquare, label: "Messages", path: "/messages" },
  { icon: FolderOpen, label: "My Projects", path: "/projects" },
  { icon: Wallet, label: "Wallet", path: "/wallet" },
  { icon: Star, label: "Reviews", path: "/reviews" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const AppSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-sidebar-border bg-sidebar transition-transform">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-sidebar-foreground">WorkHub</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 text-sm font-medium",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-accent"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Upgrade Button */}
        <div className="border-t border-sidebar-border p-4">
          <Button className="w-full gap-2 bg-gradient-primary hover:opacity-90">
            <Crown className="h-4 w-4" />
            Upgrade to Pro
          </Button>
        </div>
      </div>
    </aside>
  );
};

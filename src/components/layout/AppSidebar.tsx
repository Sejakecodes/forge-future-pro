import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sidebarMenu } from "../config/SideMenu";

export const AppSidebar = () => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>(
    sidebarMenu.filter((section) => section.defaultOpen).map((s) => s.label)
  );

  const toggleSection = (label: string) => {
    setOpenSections((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label]
    );
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-sidebar-border bg-sidebar flex flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold text-sidebar-foreground">
          WorkHub
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
        {sidebarMenu.map((section) => {
          const isOpen = openSections.includes(section.label);

          return (
            <div key={section.label} className="space-y-2">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.label)}
                className="w-full text-left text-sm font-semibold text-sidebar-foreground px-3 py-1"
              >
                {section.label}
              </button>

              {/* Curved Section Menu Items */}
              {isOpen && (
                <div className="rounded-xl bg-sidebar-accent/40 p-2 space-y-1">
                  {section.items.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link key={item.path} to={item.path}>
                        <Button
                          variant={isActive ? "default" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-3 text-sm rounded-lg",
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
                </div>
              )}
            </div>
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
    </aside>
  );
};

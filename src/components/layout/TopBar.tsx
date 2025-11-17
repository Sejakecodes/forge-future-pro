import { Bell, Search, Home, Briefcase, MessageCircle, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

interface TopBarProps {
  userName?: string;
  greeting?: string;
  showFeedNav?: boolean;
}

export const TopBar = ({
  userName = "Kitso Sejake",
  greeting,
  showFeedNav = false,
}: TopBarProps) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      {/* TOP BAR */}
      <div className="flex h-16 items-center gap-4 px-6">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-foreground">
            {greeting || getGreeting()}, {userName}!
          </h2>
        </div>

        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects, clients, or messages..."
            className="pl-9"
          />
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
        </Button>

        <Avatar className="h-9 w-9 cursor-pointer">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
      </div>

      {/* FEED NAV */}
      {showFeedNav && (
        <nav className="flex items-center gap-8 px-10 py-2 border-t border-border bg-background/90 text-sm font-medium">
          <Link to="/feed" className="flex items-center gap-1 hover:text-primary">
            <Home className="h-4 w-4" /> Feed
          </Link>
          <Link to="/jobs" className="flex items-center gap-1 hover:text-primary">
            <Briefcase className="h-4 w-4" /> Jobs
          </Link>
          <Link to="/messages" className="flex items-center gap-1 hover:text-primary">
            <MessageCircle className="h-4 w-4" /> Messages
          </Link>
          <Link to="/profile" className="flex items-center gap-1 hover:text-primary">
            <User className="h-4 w-4" /> Profile
          </Link>
        </nav>
      )}
    </header>
  );
};

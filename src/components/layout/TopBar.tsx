import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TopBarProps {
  userName?: string;
  greeting?: string;
}

export const TopBar = ({ userName = "Kitso Sejake", greeting = "Good morning" }: TopBarProps) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Greeting */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-foreground">
            {greeting || getGreeting()}, {userName}! 
          </h2>
        </div>

        {/* Search */}
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects, clients, or messages..."
            className="pl-9"
          />
        </div>

        {/* Actions */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
        </Button>

        {/* Profile */}
        <Avatar className="h-9 w-9 cursor-pointer">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

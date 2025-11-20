import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Settings,
} from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />

      <div className="ml-64 flex-1">
        <TopBar userName="Kitso Sejake" />

        <main className="p-6 space-y-8 max-w-4xl">
          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-semibold flex items-center gap-2">
              <Settings className="h-7 w-7" /> Settings
            </h1>
            <p className="text-muted-foreground mt-1 max-w-xl">
              Manage your account, preferences, and privacy settings.
            </p>
          </div>

          {/* PROFILE SETTINGS */}
          <Card className="shadow-soft border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" /> Profile Information
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input placeholder="Enter your name" defaultValue="Kitso Sejake" />
              </div>

              <div>
                <label className="text-sm font-medium">Email Address</label>
                <Input placeholder="Enter your email" defaultValue="sejakekitso@gmail.com" />
              </div>

              <div>
                <label className="text-sm font-medium">Username</label>
                <Input placeholder="Username" defaultValue="kitso_dev" />
              </div>
            </CardContent>
          </Card>

          {/* NOTIFICATIONS */}
          <Card className="shadow-soft border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" /> Notification Preferences
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4" defaultChecked />
                Email Notifications
              </label>

              <label className="flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4" defaultChecked />
                Message Alerts
              </label>

              <label className="flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4" />
                New Job Alerts
              </label>
            </CardContent>
          </Card>

          {/* SECURITY */}
          <Card className="shadow-soft border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" /> Privacy & Security
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Change Password</label>
                <Input type="password" placeholder="New password" />
              </div>

              <label className="flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4" defaultChecked />
                Two-factor authentication
              </label>
            </CardContent>
          </Card>

          {/* BILLING */}
          <Card className="shadow-soft border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" /> Billing Settings
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Preferred Payment Method</label>
                <Input placeholder="e.g. Visa ending in 4582" />
              </div>

              <label className="flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4" defaultChecked />
                Email me invoices
              </label>
            </CardContent>
          </Card>

          {/* SAVE BUTTON */}
          <div className="flex justify-end">
            <Button className="bg-gradient-primary px-8 py-2 text-white">
              Save Changes
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;

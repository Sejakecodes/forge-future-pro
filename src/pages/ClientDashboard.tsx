import React, { useMemo, useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TrendingUp,
  DollarSign,
  CreditCard,
  Star,
  Briefcase,
  Clock,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type TimeRange = "1m" | "3m" | "6m" | "12m";

const ALL_GROWTH_DATA = {
  "1m": [
    { month: "Jun", earnings: 2500 },
    { month: "Jul", earnings: 2200 },
    { month: "Aug", earnings: 2700 },
    { month: "Sep", earnings: 3000 },
    { month: "Oct", earnings: 2850 },
    { month: "Nov", earnings: 3200 },
  ],
  "3m": [
    { month: "Apr", earnings: 2300 },
    { month: "May", earnings: 2100 },
    { month: "Jun", earnings: 2500 },
    { month: "Jul", earnings: 2200 },
    { month: "Aug", earnings: 2700 },
    { month: "Sep", earnings: 3000 },
    { month: "Oct", earnings: 2850 },
    { month: "Nov", earnings: 3200 },
    { month: "Dec", earnings: 3400 },
  ],
  "6m": [
    { month: "May", earnings: 2000 },
    { month: "Jun", earnings: 2500 },
    { month: "Jul", earnings: 2200 },
    { month: "Aug", earnings: 2700 },
    { month: "Sep", earnings: 3000 },
    { month: "Oct", earnings: 2850 },
    { month: "Nov", earnings: 3200 },
    { month: "Dec", earnings: 3400 },
    { month: "Jan", earnings: 3750 },
    { month: "Feb", earnings: 3600 },
  ],
  "12m": [
    { month: "Dec", earnings: 1400 },
    { month: "Jan", earnings: 1200 },
    { month: "Feb", earnings: 1600 },
    { month: "Mar", earnings: 1900 },
    { month: "Apr", earnings: 2300 },
    { month: "May", earnings: 2100 },
    { month: "Jun", earnings: 2500 },
    { month: "Jul", earnings: 2200 },
    { month: "Aug", earnings: 2700 },
    { month: "Sep", earnings: 3000 },
    { month: "Oct", earnings: 2850 },
    { month: "Nov", earnings: 3200 },
  ],
};

const performanceStats = [
  { title: "Jobs Completed", value: 42, Icon: Briefcase, color: "text-primary" },
  { title: "Avg. Rating", value: "4.8 ★", Icon: Star, color: "text-yellow-500" },
  { title: "Response Time", value: "1.2h", Icon: Clock, color: "text-green-500" },
];

const RECENT_PROJECTS = [
  { id: "#2031", title: "Landing Page Design", client: "Jane Cooper", amount: "$540", status: "Completed" },
  { id: "#2032", title: "Mobile App UI", client: "Robert Fox", amount: "$780", status: "In Progress" },
  { id: "#2033", title: "Logo & Branding", client: "Jenny Wilson", amount: "$300", status: "Pending" },
  { id: "#2034", title: "Dashboard Components", client: "Acme Inc", amount: "$1200", status: "Completed" },
];

function statusBadgeClass(status: string) {
  switch (status.toLowerCase()) {
    case "completed":
      return "inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700";
    case "in progress":
    case "in-progress":
      return "inline-flex items-center rounded-full bg-yellow-50 px-2.5 py-0.5 text-xs font-medium text-yellow-700";
    case "pending":
      return "inline-flex items-center rounded-full bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-700";
    default:
      return "inline-flex items-center rounded-full bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-700";
  }
}

const FreelancerDashboard: React.FC = () => {
  const [range, setRange] = useState<TimeRange>("6m");
  const [query, setQuery] = useState("");

  // memoize filtered data for chart
  const growthData = useMemo(() => {
    return ALL_GROWTH_DATA[range];
  }, [range]);

  // filter projects by search query
  const filteredProjects = useMemo(() => {
    if (!query.trim()) return RECENT_PROJECTS;
    const q = query.toLowerCase();
    return RECENT_PROJECTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="Kitso Sejake" />
        <main className="p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Freelancer Dashboard</h1>
                <p className="text-muted-foreground">Overview of your earnings, performance, and recent activity</p>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  placeholder="Search projects, clients, IDs..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-80"
                />
                <Select onValueChange={(v) => setRange(v as TimeRange)}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Time Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1m">This Month</SelectItem>
                    <SelectItem value="3m">Last 3 Months</SelectItem>
                    <SelectItem value="6m">Last 6 Months</SelectItem>
                    <SelectItem value="12m">Last 12 Months</SelectItem>
                  </SelectContent>
                </Select>
                <Button>Withdraw</Button>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-border/60 shadow-soft">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Earnings</p>
                    <p className="mt-2 text-3xl font-bold">$12,546</p>
                    <div className="mt-2 flex items-center gap-1 text-sm text-success">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span>+18% this month</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-3">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 shadow-soft">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Available Balance</p>
                    <p className="mt-2 text-3xl font-bold">$2,340</p>
                    <p className="text-sm text-muted-foreground">Ready for withdrawal</p>
                  </div>
                  <div className="rounded-lg bg-success/10 p-3">
                    <CreditCard className="h-6 w-6 text-success" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 shadow-soft">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Pending Payments</p>
                    <p className="mt-2 text-3xl font-bold">$860</p>
                    <p className="text-sm text-muted-foreground">In escrow</p>
                  </div>
                  <div className="rounded-lg bg-warning/10 p-3">
                    <CreditCard className="h-6 w-6 text-warning" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              {performanceStats.map((stat, idx) => (
                <Card key={idx} className="border-border/60 shadow-soft">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="mt-2 text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <stat.Icon className={`h-6 w-6 ${stat.color}`} />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Growth Chart */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Earnings Growth</CardTitle>
                <div className="text-sm text-muted-foreground">Range: {range === "1m" ? "This Month" : range === "3m" ? "3 Months" : range === "6m" ? "6 Months" : "12 Months"}</div>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <Tooltip />
                    <Bar dataKey="earnings" fill="#4f46e5" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Recent Projects */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="pb-2">Project</th>
                      <th className="pb-2">Client</th>
                      <th className="pb-2">Amount</th>
                      <th className="pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProjects.map((proj) => (
                      <tr key={proj.id} className="border-b">
                        <td className="py-2">{proj.title}</td>
                        <td>{proj.client}</td>
                        <td>{proj.amount}</td>
                        <td>
                          {/* Use custom classes instead of unsupported Badge variants */}
                          <span className={statusBadgeClass(proj.status)}>{proj.status}</span>
                        </td>
                      </tr>
                    ))}
                    {filteredProjects.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-6 text-center text-sm text-muted-foreground">
                          No projects match your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Skills and Badges */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <CardTitle>Skill Badges & Levels</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {/* Using your Badge component but with className styling */}
                <Badge className="bg-indigo-50 text-indigo-700">React Expert</Badge>
                <Badge className="bg-slate-50 text-slate-700">UI/UX Designer</Badge>
                <Badge className="border border-slate-200 text-slate-700">Full Stack Developer</Badge>
                <Badge className="bg-green-50 text-green-700">Level 3 Freelancer</Badge>
                <Badge className="bg-yellow-50 text-yellow-700">Top Rated</Badge>
              </CardContent>
            </Card>

            {/* Activity Log */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✅ Completed project “Landing Page Design” for Jane Cooper</li>
                  <li>💬 Replied to client message (Robert Fox)</li>
                  <li>📤 Submitted proposal for “App UI Design”</li>
                  <li>💸 Withdrawn $400 to PayPal</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FreelancerDashboard;

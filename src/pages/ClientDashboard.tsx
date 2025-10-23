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
  Calendar,
  Star,
  Search,
  Clock,
  CreditCard,
  MessageCircle,
  Users,
  Heart,
  TrendingUp,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type TimeRange = "1m" | "3m" | "6m" | "12m";

// Sample analytics data (Session Progress)
const SESSION_PROGRESS_DATA = {
  "1m": [
    { month: "Oct", sessions: 3 },
    { month: "Nov", sessions: 6 },
  ],
  "3m": [
    { month: "Sep", sessions: 2 },
    { month: "Oct", sessions: 3 },
    { month: "Nov", sessions: 6 },
  ],
  "6m": [
    { month: "Jun", sessions: 1 },
    { month: "Jul", sessions: 2 },
    { month: "Aug", sessions: 2 },
    { month: "Sep", sessions: 3 },
    { month: "Oct", sessions: 3 },
    { month: "Nov", sessions: 6 },
  ],
  "12m": [
    { month: "Dec", sessions: 0 },
    { month: "Jan", sessions: 1 },
    { month: "Feb", sessions: 1 },
    { month: "Mar", sessions: 2 },
    { month: "Apr", sessions: 2 },
    { month: "May", sessions: 2 },
    { month: "Jun", sessions: 1 },
    { month: "Jul", sessions: 2 },
    { month: "Aug", sessions: 2 },
    { month: "Sep", sessions: 3 },
    { month: "Oct", sessions: 3 },
    { month: "Nov", sessions: 6 },
  ],
};

// Dashboard stats for Mentee
const clientStats = [
  { title: "Active Mentors", value: 4, Icon: Users, color: "text-primary" },
  { title: "Completed Sessions", value: 22, Icon: Calendar, color: "text-blue-500" },
  { title: "Avg. Rating Given", value: "4.8 ★", Icon: Star, color: "text-yellow-500" },
  { title: "Hours Spent", value: "36h", Icon: Clock, color: "text-green-500" },
  { title: "Total Spent", value: "$1,250", Icon: CreditCard, color: "text-emerald-600" },
  { title: "Learning Progress", value: "+18%", Icon: TrendingUp, color: "text-purple-600" },
];

// Booked mentorship sessions
const UPCOMING_MENTOR_SESSIONS = [
  {
    id: "#M201",
    mentor: "Dr. Emily Carter",
    topic: "Advanced UI/UX Coaching",
    date: "Oct 26, 2025",
    time: "4:00 PM",
    status: "Confirmed",
  },
  {
    id: "#M202",
    mentor: "John Smith",
    topic: "Backend APIs in Node.js",
    date: "Oct 29, 2025",
    time: "11:30 AM",
    status: "Pending",
  },
  {
    id: "#M203",
    mentor: "Sara Williams",
    topic: "Portfolio Strategy Review",
    date: "Nov 3, 2025",
    time: "9:00 AM",
    status: "Confirmed",
  },
];

// Recent mentors or viewed mentors
const RECOMMENDED_MENTORS = [
  {
    name: "Michael Brown",
    skill: "React Performance Optimization",
    rating: 4.9,
  },
  {
    name: "Lisa Kim",
    skill: "Career Mentorship & Interview Prep",
    rating: 4.8,
  },
  {
    name: "David Lee",
    skill: "Full-Stack Development",
    rating: 5.0,
  },
];

function statusBadgeClass(status: string) {
  switch (status.toLowerCase()) {
    case "confirmed":
      return "inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700";
    case "pending":
      return "inline-flex items-center rounded-full bg-yellow-50 px-2.5 py-0.5 text-xs font-medium text-yellow-700";
    default:
      return "inline-flex items-center rounded-full bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-700";
  }
}

const ClientDashboard: React.FC = () => {
  const [range, setRange] = useState<TimeRange>("6m");
  const [query, setQuery] = useState("");

  const progressData = useMemo(() => SESSION_PROGRESS_DATA[range], [range]);

  const filteredSessions = useMemo(() => {
    if (!query.trim()) return UPCOMING_MENTOR_SESSIONS;
    const q = query.toLowerCase();
    return UPCOMING_MENTOR_SESSIONS.filter(
      (s) =>
        s.mentor.toLowerCase().includes(q) ||
        s.topic.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="Alex Mentee" />
        <main className="p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Mentee Dashboard</h1>
                <p className="text-muted-foreground">
                  Track your mentors, sessions, and learning progress
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  placeholder="Search mentors, sessions, topics..."
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
                <Button>
                  <Search className="mr-2 h-4 w-4" /> Find Mentor
                </Button>
              </div>
            </div>

            {/* Client Stats */}
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
              {clientStats.map((stat, i) => (
                <Card key={i} className="border-border/60 shadow-soft">
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

            {/* Learning Progress Analytics */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Learning Progress</CardTitle>
                <div className="text-sm text-muted-foreground">
                  Range: {range.toUpperCase()}
                </div>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="sessions"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <CardTitle>Upcoming Mentor Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="pb-2">Session ID</th>
                      <th className="pb-2">Mentor</th>
                      <th className="pb-2">Topic</th>
                      <th className="pb-2">Date</th>
                      <th className="pb-2">Time</th>
                      <th className="pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSessions.map((s) => (
                      <tr key={s.id} className="border-b">
                        <td className="py-2">{s.id}</td>
                        <td>{s.mentor}</td>
                        <td>{s.topic}</td>
                        <td>{s.date}</td>
                        <td>{s.time}</td>
                        <td>
                          <span className={statusBadgeClass(s.status)}>{s.status}</span>
                        </td>
                      </tr>
                    ))}
                    {filteredSessions.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-6 text-center text-muted-foreground">
                          No sessions found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Recommended Mentors */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <CardTitle>Recommended Mentors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  {RECOMMENDED_MENTORS.map((m, i) => (
                    <li key={i} className="flex justify-between items-start border-b pb-2">
                      <div>
                        <p className="font-medium">{m.name}</p>
                        <p className="text-muted-foreground">{m.skill}</p>
                      </div>
                      <div className="text-yellow-500 font-semibold">{m.rating} ★</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Saved Topics / Interests */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <CardTitle>Saved Topics & Interests</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-indigo-50 text-indigo-700">UI Design</Badge>
                <Badge className="bg-green-50 text-green-700">Full-Stack Development</Badge>
                <Badge className="bg-yellow-50 text-yellow-700">Interview Prep</Badge>
                <Badge className="bg-blue-50 text-blue-700">Career Coaching</Badge>
                <Badge className="bg-purple-50 text-purple-700">Project Management</Badge>
              </CardContent>
            </Card>

            {/* Recent Activity Log */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>💬 Sent message to Dr. Emily Carter about design portfolio feedback.</li>
                  <li>📅 Booked session with John Smith for "Backend APIs in Node.js".</li>
                  <li>⭐ Rated Sara Williams 5 stars for last week’s mentoring session.</li>
                  <li>💸 Payment processed for mentorship package ($120).</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientDashboard;

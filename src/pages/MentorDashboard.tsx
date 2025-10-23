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
  Users,
  Calendar,
  Star,
  MessageCircle,
  TrendingUp,
  DollarSign,
  Clock,
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

// Sample analytics data
const ALL_SESSION_DATA = {
  "1m": [
    { month: "Oct", sessions: 12 },
    { month: "Nov", sessions: 18 },
  ],
  "3m": [
    { month: "Sep", sessions: 9 },
    { month: "Oct", sessions: 12 },
    { month: "Nov", sessions: 18 },
  ],
  "6m": [
    { month: "Jun", sessions: 7 },
    { month: "Jul", sessions: 8 },
    { month: "Aug", sessions: 10 },
    { month: "Sep", sessions: 9 },
    { month: "Oct", sessions: 12 },
    { month: "Nov", sessions: 18 },
  ],
  "12m": [
    { month: "Dec", sessions: 5 },
    { month: "Jan", sessions: 6 },
    { month: "Feb", sessions: 8 },
    { month: "Mar", sessions: 9 },
    { month: "Apr", sessions: 10 },
    { month: "May", sessions: 11 },
    { month: "Jun", sessions: 7 },
    { month: "Jul", sessions: 8 },
    { month: "Aug", sessions: 10 },
    { month: "Sep", sessions: 9 },
    { month: "Oct", sessions: 12 },
    { month: "Nov", sessions: 18 },
  ],
};

const mentorStats = [
  { title: "Active Mentees", value: 18, Icon: Users, color: "text-primary" },
  { title: "Total Sessions", value: 124, Icon: Calendar, color: "text-blue-500" },
  { title: "Avg. Rating", value: "4.9 ★", Icon: Star, color: "text-yellow-500" },
  { title: "Response Time", value: "45m", Icon: Clock, color: "text-green-500" },
  { title: "Earnings", value: "$4,230", Icon: DollarSign, color: "text-emerald-600" },
  { title: "Session Growth", value: "+22%", Icon: TrendingUp, color: "text-purple-600" },
];

const UPCOMING_SESSIONS = [
  { id: "#S101", mentee: "Jane Cooper", topic: "React Hooks Deep Dive", date: "Oct 25, 2025", time: "10:00 AM", status: "Confirmed" },
  { id: "#S102", mentee: "Robert Fox", topic: "Portfolio Review", date: "Oct 27, 2025", time: "2:30 PM", status: "Pending" },
  { id: "#S103", mentee: "Jenny Wilson", topic: "Design Systems 101", date: "Oct 30, 2025", time: "5:00 PM", status: "Confirmed" },
];

const RECENT_FEEDBACK = [
  { mentee: "Jane Cooper", comment: "Very insightful session on React state patterns!", rating: 5 },
  { mentee: "Robert Fox", comment: "Helped me structure my portfolio for clients.", rating: 4.5 },
  { mentee: "Jenny Wilson", comment: "Loved the live design review. Super helpful!", rating: 5 },
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

const MentorDashboard: React.FC = () => {
  const [range, setRange] = useState<TimeRange>("6m");
  const [query, setQuery] = useState("");

  const sessionData = useMemo(() => ALL_SESSION_DATA[range], [range]);

  const filteredSessions = useMemo(() => {
    if (!query.trim()) return UPCOMING_SESSIONS;
    const q = query.toLowerCase();
    return UPCOMING_SESSIONS.filter(
      (s) =>
        s.mentee.toLowerCase().includes(q) ||
        s.topic.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="Dr. Mentor" />
        <main className="p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Mentor Dashboard</h1>
                <p className="text-muted-foreground">
                  Overview of your mentees, sessions, feedback, and earnings
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  placeholder="Search sessions, mentees, topics..."
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
                <Button>Schedule Session</Button>
              </div>
            </div>

            {/* Mentor Stats */}
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
              {mentorStats.map((stat, i) => (
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

            {/* Sessions Analytics */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Session Growth</CardTitle>
                <div className="text-sm text-muted-foreground">
                  Range: {range.toUpperCase()}
                </div>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sessionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="sessions"
                      stroke="#2563eb"
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
                <CardTitle>Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="pb-2">Session ID</th>
                      <th className="pb-2">Mentee</th>
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
                        <td>{s.mentee}</td>
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

            {/* Recent Feedback */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <CardTitle>Recent Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  {RECENT_FEEDBACK.map((f, i) => (
                    <li key={i} className="flex justify-between items-start border-b pb-2">
                      <div>
                        <p className="font-medium">{f.mentee}</p>
                        <p className="text-muted-foreground">{f.comment}</p>
                      </div>
                      <div className="text-yellow-500 font-semibold">{f.rating} ★</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Expertise Tags */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <CardTitle>Expertise & Topics</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-indigo-50 text-indigo-700">React</Badge>
                <Badge className="bg-green-50 text-green-700">Node.js</Badge>
                <Badge className="bg-yellow-50 text-yellow-700">Design Systems</Badge>
                <Badge className="bg-blue-50 text-blue-700">UI/UX Coaching</Badge>
                <Badge className="bg-slate-50 text-slate-700">Career Growth</Badge>
                <Badge className="bg-purple-50 text-purple-700">Code Reviews</Badge>
              </CardContent>
            </Card>

            {/* Communication Log */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <CardTitle>Recent Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>💬 Replied to message from Jane Cooper about session recap.</li>
                  <li>📅 Scheduled session with Robert Fox for “Portfolio Review”.</li>
                  <li>⭐ Received 5-star rating from Jenny Wilson.</li>
                  <li>💸 Received payment for completed mentorship package.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MentorDashboard;

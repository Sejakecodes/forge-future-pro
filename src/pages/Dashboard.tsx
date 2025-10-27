import React from "react";
import { motion } from "framer-motion";
import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Clock,
  Star,
  Briefcase,
  ArrowUpRight,
  Users,
  Globe,
  CheckCircle2,
  MessageSquare,
  FileText,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const growthData = [
  { month: "Jan", earnings: 1200, lastMonth: 900 },
  { month: "Feb", earnings: 1500, lastMonth: 1200 },
  { month: "Mar", earnings: 1800, lastMonth: 1500 },
  { month: "Apr", earnings: 2500, lastMonth: 2100 },
  { month: "May", earnings: 2200, lastMonth: 2000 },
  { month: "Jun", earnings: 2700, lastMonth: 2300 },
  { month: "Jul", earnings: 3000, lastMonth: 2500 },
  { month: "Aug", earnings: 3400, lastMonth: 2900 },
];


const countries = [
  { name: "USA", revenue: "R3,312" },
  { name: "UK", revenue: "R2,450" },
  { name: "South Africa", revenue: "R1,980" },
  { name: "India", revenue: "R1,200" },
];

const activities = [
  { id: 1, text: "Completed project 'Landing Page Design'", time: "2 hours ago", icon: CheckCircle2, color: "bg-green-100 text-green-600" },
  { id: 2, text: "Replied to client message (Robert Fox)", time: "5 hours ago", icon: MessageSquare, color: "bg-blue-100 text-blue-600" },
  { id: 3, text: "Submitted proposal for 'App UI Design'", time: "1 day ago", icon: FileText, color: "bg-purple-100 text-purple-600" },
  { id: 4, text: "Withdrawn R400 to PayPal", time: "3 days ago", icon: DollarSign, color: "bg-yellow-100 text-yellow-600" },
];

const projectRequests = [
  { id: 1, client: "Jane Cooper", title: "E-commerce Redesign", budget: "R2,800", status: "Pending" },
  { id: 2, client: "Devon Lane", title: "Portfolio Website", budget: "R1,200", status: "Pending" },
];

const projects = [
  { id: 1, title: "Landing Page Design", client: "Robert Fox", budget: "R3,000", progress: 100, deadline: "Oct 25", status: "Completed" },
  { id: 2, title: "Mobile App UI", client: "Cody Fisher", budget: "R6,200", progress: 75, deadline: "Nov 2", status: "In Progress" },
  { id: 3, title: "E-commerce Store", client: "Jerome Bell", budget: "R8,100", progress: 50, deadline: "Nov 15", status: "In Progress" },
  { id: 4, title: "Branding Kit", client: "Theresa Webb", budget: "R2,400", progress: 25, deadline: "Nov 30", status: "Pending" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FreelancerDashboard = () => {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="Kitso Sejake" />

        <main className="p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Header */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h1 className="text-2xl font-bold text-foreground">Freelancer Dashboard</h1>
              <p className="text-muted-foreground">Overview of your performance and earnings</p>
            </motion.div>

            {/* Top Stats */}
            <motion.div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { title: "Total Earnings", value: "R12,546", change: "+18% this month", icon: DollarSign, color: "text-indigo-500" },
                { title: "Active Clients", value: "15", change: "+3 new this week", icon: Users, color: "text-green-600" },
                { title: "Ongoing Projects", value: "6", change: "2 deadlines this week", icon: Briefcase, color: "text-yellow-600" },
                { title: "Average Rating", value: "4.8 ★", change: "From 36 reviews", icon: Star, color: "text-yellow-500" },
              ].map((stat, i) => (
                <Card key={i} className="hover:shadow-lg transition">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <h2 className="text-2xl font-bold mt-1">{stat.value}</h2>
                      <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
                        {i === 0 && <ArrowUpRight className="w-3 h-3" />} {stat.change}
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/40 p-3">
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Chart + Analytics */}
            <motion.div
              className="grid gap-6 lg:grid-cols-3"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Card className="lg:col-span-2 border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                </CardHeader>
                <CardContent className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={growthData}>
                      <defs>
                        <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="earnings"
                        stroke="#6366F1"
                        strokeWidth={2.5}
                        fill="url(#colorEarnings)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Analytics Overview */}
              <Card className="border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle>Analytics Overview</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between">
                  {[
                    { label: "Job Success", value: 95, color: "#4F46E5", trail: "#E0E7FF" },
                    { label: "Review Score", value: 88, color: "#10B981", trail: "#D1FAE5" },
                    { label: "Response Rate", value: 76, color: "#F59E0B", trail: "#FEF3C7" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center">
                      <CircularProgressbar
                        value={item.value}
                        text={`${item.value}%`}
                        styles={buildStyles({
                          textColor: item.color,
                          pathColor: item.color,
                          trailColor: item.trail,
                        })}
                        className="w-16"
                      />
                      <p className="text-xs mt-2 text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Countries + Requests + Activities */}
            <motion.div
              className="grid gap-6 lg:grid-cols-3"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Countries */}
              <Card className="border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle>Top Client Countries</CardTitle>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead className="text-muted-foreground border-b">
                      <tr>
                        <th className="py-2 text-left">Country</th>
                        <th className="py-2 text-left">Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {countries.map((c) => (
                        <tr key={c.name} className="border-b">
                          <td className="py-2 flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            {c.name}
                          </td>
                          <td className="py-2">{c.revenue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Requests */}
              <Card className="border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle>Project Requests</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {projectRequests.map((req) => (
                    <div
                      key={req.id}
                      className="p-3 rounded-lg border flex justify-between items-center hover:bg-muted/40 transition"
                    >
                      <div>
                        <p className="font-medium text-sm">{req.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {req.client} • {req.budget}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-yellow-600 bg-yellow-50">
                        {req.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Activities */}
              <Card className="border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative border-l border-border/40 pl-6 space-y-6">
                    {activities.map((act) => (
                      <div key={act.id} className="relative flex gap-3">
                        <span className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-primary ring-2 ring-background" />
                        <div className="flex-shrink-0 mt-0.5">
                          <div className={`p-1.5 rounded-full bg-muted/50 ${act.color}`}>
                            <act.icon className="w-4 h-4 text-primary-foreground" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{act.text}</p>
                          <p className="text-xs text-muted-foreground">{act.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Projects Table */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle>Projects Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead className="text-muted-foreground border-b">
                      <tr>
                        <th className="py-2 text-left">Project</th>
                        <th className="py-2 text-left">Client</th>
                        <th className="py-2 text-left">Budget</th>
                        <th className="py-2 text-left">Progress</th>
                        <th className="py-2 text-left">Deadline</th>
                        <th className="py-2 text-left">Status</th>
                        <th className="py-2 text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects.map((p) => (
                        <tr key={p.id} className="border-b hover:bg-muted/40 transition">
                          <td className="py-2 font-medium">{p.title}</td>
                          <td className="py-2">{p.client}</td>
                          <td className="py-2">{p.budget}</td>
                          <td className="py-2 w-24">
                           
                          </td>
                          <td className="py-2">{p.deadline}</td>
                          <td className="py-2">
                            <Badge
                              className={
                                p.status === "Completed"
                                  ? "bg-green-50 text-green-700"
                                  : p.status === "In Progress"
                                  ? "bg-yellow-50 text-yellow-700"
                                  : "bg-slate-50 text-slate-700"
                              }
                            >
                              {p.status}
                            </Badge>
                          </td>
                          <td className="py-2 text-right">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FreelancerDashboard;

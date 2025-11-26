import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { CheckCircle, Clock, Folder } from "lucide-react"; // icons from lucide-react
// Chart.js
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Development",
      client: "Sarah Johnson",
      status: "In Progress",
      progress: 65,
      budget: "R5,000",
      deadline: "2024-04-15",
    },
    {
      id: 2,
      title: "Mobile App UI/UX Design",
      client: "Michael Chen",
      status: "In Progress",
      progress: 80,
      budget: "R3,200",
      deadline: "2024-04-10",
    },
    {
      id: 3,
      title: "Brand Identity Package",
      client: "Emma Davis",
      status: "Completed",
      progress: 100,
      budget: "R1,500",
      deadline: "2024-03-20",
    },
    {
      id: 4,
      title: "Logo Concept",
      client: "Neo Mahlangu",
      status: "Not Started",
      progress: 0,
      budget: "R900",
      deadline: "2024-05-03",
    },
  ];

  // FILTERING
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.status === filter);

  // BORDER COLORS
  const borderColor = {
    Completed: "border-green-400",
    "In Progress": "border-blue-400",
    "Not Started": "border-orange-400",
  };

  // COUNTS
  const countCompleted = projects.filter((p) => p.status === "Completed").length;
  const countProgress = projects.filter((p) => p.status === "In Progress").length;
  const countPending = projects.filter((p) => p.status === "Not Started").length;

  // ==== PIE CHART ====
  const pieData = {
    labels: ["Completed", "In Progress", "Not Started"],
    datasets: [
      {
        data: [countCompleted, countProgress, countPending],
        backgroundColor: ["#4ade80", "#60a5fa", "#fbbf24"],
        borderWidth: 4,
        borderColor: "#fff",
      },
    ],
  };

  const pieOptions = {
    plugins: { legend: { display:false,position: "bottom",pointRadius: 4, } },
  };

  // ==== LINE CHART ====
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","May", "Jun", "Jul"],
    datasets: [
      {
        label: "Income",
        data: [24000, 26000, 23000, 28000, 30000, 27000, 32000, 23000, 28000, 30000,],
        borderColor: "#4f46e5",
        borderWidth: 1,
        tension: 0.5,
        pointRadius: 4,
        pointHoverRadius: 6,
       
      },
      {
        label: "Expense",
        data: [12000, 15000, 11000, 14000, 16000, 13000, 17000, 23000, 28000, 30000,],
        borderColor: "#fb923c",
        borderWidth: 1,
        tension: 0.5,
        pointRadius: 4,
        pointHoverRadius: 6,
   
      },
    ],
  };

 const lineOptions = {
  scales: {
    x: { display: false }, // hide x-axis completely
    y: { display: false }, // hide y-axis completely
  },
  plugins: {
    legend: { position: "top",
      display:false,
     },
  },
};


  return (
    <div className="flex min-height-screen bg-[#f6f7f9]">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="Kitso Sejake" />

        {/* TOP OVERVIEW CARDS */}
   


<div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
  {/* Total Projects Card */}
  <Card className="relative rounded-3xl p-6 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
    <div className="flex items-center justify-between">
      <h2 className="text-xl-1 font-medium text-gray-600">Total Projects</h2>
      <Folder className="text-indigo-500 w-6 h-6" />
    </div>
    <p className="text-4xl font-bold text-gray-900 mt-2">{projects.length}</p>
    <p className="text-sm text-green-500 mt-1 flex items-center gap-1">
      +5% <span className="text-gray-400">vs last week</span>
    </p>
  </Card>

  {/* Completed Projects Card */}
  <Card className="relative rounded-3xl p-6 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
    <div className="flex items-center justify-between">
      <h2 className="text-xl-1 font-medium text-gray-600">Completed</h2>
      <CheckCircle className="text-green-500 w-6 h-6" />
    </div>
    <p className="text-4xl font-bold text-gray-900 mt-2">{countCompleted}</p>
    <p className="text-sm text-green-500 mt-1 flex items-center gap-1">
      +12% <span className="text-gray-400">vs last week</span>
    </p>
  </Card>

  {/* In Progress Projects Card */}
  <Card className="relative rounded-3xl p-6 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
    <div className="flex items-center justify-between">
      <h2 className="text-xl-1 font-medium text-gray-600">In Progress</h2>
      <Clock className="text-yellow-500 w-6 h-6" />
    </div>
    <p className="text-4xl font-bold text-gray-900 mt-2">{countProgress}</p>
    <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
      -3% <span className="text-gray-400">vs last week</span>
    </p>
  </Card>
</div>


        {/* MAIN GRID */}
        <main className="p-6">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* LEFT PANEL */}
            <div className="lg:col-span-3 space-y-4">
              <Card className="rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle>Project Filters</CardTitle>
                </CardHeader>

                <div className="px-4 pb-2 flex flex-wrap gap-2">
                  {["All", "Completed", "In Progress", "Not Started"].map((f) => (
                    <Button
                      key={f}
                      size="sm"
                      variant={filter === f ? "default" : "outline"}
                      className="rounded-full"
                      onClick={() => setFilter(f)}
                    >
                      {f}
                    </Button>
                  ))}
                </div>

                <CardHeader>
                  <CardTitle>My Projects</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {filteredProjects.map((p) => (
                    <div
                      key={p.id}
                      className={`p-4 rounded-2xl bg-white shadow-sm border-2 ${borderColor[p.status]}`}
                    >
                      <h3 className="font-medium">{p.title}</h3>
                      <p className="text-xs text-muted-foreground">{p.client}</p>
                      <Progress value={p.progress} className="h-2 rounded-full mt-2" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {p.progress}% complete
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* CENTER PANEL */}
            <div className="lg:col-span-6 space-y-6">

              <Card className="rounded-3xl shadow-sm p-4">
                <CardHeader><CardTitle>Projects Overview</CardTitle></CardHeader>
                <CardContent className="flex justify-center">
                  <div className="w-60 h-60">
                    <Pie data={pieData} options={pieOptions} />
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-sm p-4">
                <CardHeader><CardTitle>Income vs Expense</CardTitle></CardHeader>
                <CardContent className="h-64">
                  <Line data={lineData} options={lineOptions} />
                </CardContent>
              </Card>
            </div>

            {/* RIGHT PANEL */}
            <div className="lg:col-span-3 space-y-6">
              <Card className="rounded-3xl shadow-sm">
                <CardHeader><CardTitle className="text-xl-1">My Meetings</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 bg-white rounded-xl shadow-sm border">
                    <p className="font-medium ">App Project</p>
                    <p className="text-xs text-muted-foreground">6:45 PM · Meet</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border">
                    <p className="font-medium">User Research</p>
                    <p className="text-xs text-muted-foreground">6:45 PM · Zoom</p>
                  </div>
                  <Button variant="ghost" className="w-full text-primary">
                    See All Meetings
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-sm">
                <CardHeader><CardTitle>Open Tickets</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  {["Jacob Martinez", "Luke Bell", "Connor Mitchell"].map((name) => (
                    <div
                      key={name}
                      className="p-4 bg-white rounded-xl shadow-sm border flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-xs text-muted-foreground">I need 3 more features...</p>
                      </div>

                      <Button size="sm" variant="secondary">Check</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;

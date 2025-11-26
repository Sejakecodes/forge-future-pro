import { useState, useMemo } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Folder } from "lucide-react";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Pie, Line } from "react-chartjs-2";

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Projects = () => {
  const projects = [
    { id: 1, title: "E-commerce Platform Development", client: "Sarah Johnson", status: "In Progress", progress: 65, budget: "R5,000", deadline: "2024-04-15" },
    { id: 2, title: "Mobile App UI/UX Design", client: "Michael Chen", status: "In Progress", progress: 80, budget: "R3,200", deadline: "2024-04-10" },
    { id: 3, title: "Brand Identity Package", client: "Emma Davis", status: "Completed", progress: 100, budget: "R1,500", deadline: "2024-03-20" },
    { id: 4, title: "Logo Concept", client: "Neo Mahlangu", status: "Not Started", progress: 0, budget: "R900", deadline: "2024-05-03" },
  ];

  // Filters
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.status === filter);

  // Border colors for statuses
  const borderColor = { Completed: "border-green-400", "In Progress": "border-blue-400", "Not Started": "border-orange-400" };

  // Counts
  const countCompleted = projects.filter((p) => p.status === "Completed").length;
  const countProgress = projects.filter((p) => p.status === "In Progress").length;
  const countPending = projects.filter((p) => p.status === "Not Started").length;

  // Pie chart
  const pieData = {
    labels: ["Completed", "In Progress", "Not Started"],
    datasets: [{ data: [countCompleted, countProgress, countPending], backgroundColor: ["#4ade80", "#60a5fa", "#fbbf24"], borderWidth: 4, borderColor: "#fff" }],
  };
  const pieOptions = { plugins: { legend: { display: false } } };

  // Line chart
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "May", "Jun", "Jul"],
    datasets: [
      { label: "Income", data: [24000, 26000, 23000, 28000, 30000, 27000, 32000, 23000, 28000, 30000], borderColor: "#4f46e5", borderWidth: 1, tension: 0.5, pointRadius: 4, pointHoverRadius: 6 },
      { label: "Expense", data: [12000, 15000, 11000, 14000, 16000, 13000, 17000, 23000, 28000, 30000], borderColor: "#fb923c", borderWidth: 1, tension: 0.5, pointRadius: 4, pointHoverRadius: 6 },
    ],
  };
  const lineOptions = { scales: { x: { display: false }, y: { display: false } }, plugins: { legend: { display: false } } };

  // --- Table states ---
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "title", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredProjectsSearch = useMemo(() => {
    let filtered = filteredProjects.filter(
      (p) => p.title.toLowerCase().includes(search.toLowerCase()) || p.client.toLowerCase().includes(search.toLowerCase())
    );

    if (sortConfig) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return filtered;
  }, [filteredProjects, search, sortConfig]);

  const totalPages = Math.ceil(filteredProjectsSearch.length / pageSize);
  const paginatedProjects = filteredProjectsSearch.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  return (
    <div className="flex min-h-screen bg-[#f6f7f9]">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="Kitso Sejake" />

        {/* Top overview cards */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <Card className="relative rounded-3xl p-6 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium text-gray-600">Total Projects</h2>
              <Folder className="text-indigo-500 w-6 h-6" />
            </div>
            <p className="text-4xl font-bold text-gray-900 mt-2">{projects.length}</p>
            <p className="text-sm text-green-500 mt-1 flex items-center gap-1">+5% <span className="text-gray-400">vs last week</span></p>
          </Card>
          <Card className="relative rounded-3xl p-6 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium text-gray-600">Completed</h2>
              <CheckCircle className="text-green-500 w-6 h-6" />
            </div>
            <p className="text-4xl font-bold text-gray-900 mt-2">{countCompleted}</p>
            <p className="text-sm text-green-500 mt-1 flex items-center gap-1">+12% <span className="text-gray-400">vs last week</span></p>
          </Card>
          <Card className="relative rounded-3xl p-6 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium text-gray-600">In Progress</h2>
              <Clock className="text-yellow-500 w-6 h-6" />
            </div>
            <p className="text-4xl font-bold text-gray-900 mt-2">{countProgress}</p>
            <p className="text-sm text-red-500 mt-1 flex items-center gap-1">-3% <span className="text-gray-400">vs last week</span></p>
          </Card>
        </div>

        {/* Main Grid */}
        <main className="p-6">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* LEFT PANEL */}
            <div className="lg:col-span-3 space-y-4">
              <Card className="rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Project Filters</CardTitle>
                </CardHeader>
                <div className="px-4 pb-2 flex flex-wrap gap-2">
                  {["All", "Completed", "In Progress", "Not Started"].map((f) => (
                    <Button key={f} size="sm" variant={filter === f ? "default" : "outline"} className="rounded-full" onClick={() => setFilter(f)}>{f}</Button>
                  ))}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">My Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {filteredProjects.map((p) => (
                    <div key={p.id} className={`p-4 rounded-2xl bg-white shadow-sm border-2 ${borderColor[p.status]}`}>
                      <h3 className="font-medium">{p.title}</h3>
                      <p className="text-xs text-muted-foreground">{p.client}</p>
                      <Progress value={p.progress} className="h-2 rounded-full mt-2" />
                      <p className="text-xs text-muted-foreground mt-1">{p.progress}% complete</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* CENTER PANEL */}
            <div className="lg:col-span-6 space-y-6">
              <Card className="rounded-3xl shadow-sm p-4">
                <CardHeader><CardTitle>Projects Overview</CardTitle></CardHeader>
                <CardContent className="flex justify-center"><div className="w-60 h-60"><Pie data={pieData} options={pieOptions} /></div></CardContent>
              </Card>
              <Card className="rounded-3xl shadow-sm p-2">
                <CardHeader><CardTitle className="text-xl">Income vs Expense</CardTitle></CardHeader>
                <CardContent className="h-64"><Line data={lineData} options={lineOptions} /></CardContent>
              </Card>
            </div>

            {/* RIGHT PANEL */}
            <div className="lg:col-span-3 space-y-6">
              <Card className="rounded-3xl shadow-sm">
                <CardHeader><CardTitle className="text-xl">My Meetings</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 bg-white rounded-xl shadow-sm border"><p className="font-medium">App Project</p><p className="text-xs text-muted-foreground">6:45 PM · Meet</p></div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border"><p className="font-medium">User Research</p><p className="text-xs text-muted-foreground">6:45 PM · Zoom</p></div>
                  <Button variant="ghost" className="w-full text-primary">See All Meetings</Button>
                </CardContent>
              </Card>
              <Card className="rounded-3xl shadow-sm">
                <CardHeader><CardTitle>Open Tickets</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  {["Jacob Martinez", "Luke Bell", "Connor Mitchell"].map((name) => (
                    <div key={name} className="p-4 bg-white rounded-xl shadow-sm border flex justify-between items-center">
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

          {/* FULL PROJECTS TABLE */}
          <Card className="rounded-3xl shadow-sm mt-6">
            <CardHeader className="flex flex-col md:flex-row md:justify-between md:items-center">
              <CardTitle className="text-xl">All Projects</CardTitle>
              <input type="text" placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)} className="mt-2 md:mt-0 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["Project", "Client", "Status", "Progress", "Budget", "Deadline"].map((col, idx) => (
                      <th key={idx} onClick={() => requestSort(col.toLowerCase())} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer select-none">
                        {col} {sortConfig?.key === col.toLowerCase() ? (sortConfig.direction === "asc" ? " ▲" : " ▼") : null}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedProjects.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{p.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">{p.client}</td>
                      <td className={`px-6 py-4 whitespace-nowrap font-medium ${borderColor[p.status]}`}>{p.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${p.progress}%` }}></div>
                        </div>
                        <span className="text-xs text-gray-500">{p.progress}%</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">{p.budget}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">{p.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex justify-end items-center mt-4 space-x-2">
                <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50" disabled={currentPage === 1}>Prev</button>
                <span className="text-sm text-gray-700">Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50" disabled={currentPage === totalPages}>Next</button>
              </div>
            </CardContent>
          </Card>

        </main>
      </div>
    </div>
  );
};

export default Projects;

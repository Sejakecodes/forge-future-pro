import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {  MoreVertical, ArrowUp, ArrowDown, Compass } from "lucide-react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);



import {
  Users,
  FileText,
  CheckCircle,
  XCircle,
  Star,
  Clock,
  Briefcase,
  Search as SearchIcon,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input as FileInput } from "@/components/ui/input";

type Job = {
  id: number;
  title: string;
  industry: string;
  budget: string;
  duration: string;
  posted: string;
  description: string;
  proposals: number;
  tags?: string[];
};

const HEADER_IMAGE = "/mnt/data/b6cb6406-13d5-46cc-b8a1-6da31a100af0.png";

const SAMPLE_JOBS: Job[] = [
  {
    id: 1,
    title: "Full-Stack Developer for E-commerce Platform",
    industry: "Software",
    budget: "$5,000 - $8,000",
    duration: "2-3 months",
    posted: "2 hours ago",
    description:
      "Looking for an experienced full-stack developer to build a modern e-commerce platform with payment integration.",
    proposals: 12,
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Mobile App UI/UX Designer",
    industry: "Design",
    budget: "$2,500 - $4,000",
    duration: "1 month",
    posted: "5 hours ago",
    description:
      "Creative designer needed to redesign our mobile app using modern UX patterns and prototypes.",
    proposals: 8,
    tags: ["Figma", "Prototyping"],
  },
  {
    id: 3,
    title: "WordPress Website Development",
    industry: "Software",
    budget: "$1,500 - $2,500",
    duration: "2-4 weeks",
    posted: "1 day ago",
    description:
      "Create a custom WordPress website with custom theme and required plugin setup.",
    proposals: 24,
    tags: ["WordPress", "PHP", "CSS"],
  },
  {
    id: 4,
    title: "Social Media Marketing Manager",
    industry: "Marketing",
    budget: "$3,000 - $5,000",
    duration: "3 months",
    posted: "1 day ago",
    description:
      "Manage and grow our social presence with content strategy and performance tracking.",
    proposals: 18,
    tags: ["Content", "Analytics"],
  },
  {
    id: 5,
    title: "Python Data Analysis & Visualization",
    industry: "Data",
    budget: "$1,200 - $2,000",
    duration: "2 weeks",
    posted: "2 days ago",
    description:
      "Analyze large datasets and produce interactive visualizations for business insights.",
    proposals: 15,
    tags: ["Python", "Pandas", "Visualization"],
  },
  {
    id: 6,
    title: "Logo & Brand Identity Design",
    industry: "Design",
    budget: "$800 - $1,500",
    duration: "1-2 weeks",
    posted: "3 days ago",
    description:
      "Design a complete brand identity including logo, color palette, and guidelines.",
    proposals: 32,
    tags: ["Branding", "Illustrator"],
  },
];

const COLORS = ["#3b82f6", "#22c55e", "#f97316", "#a855f7", "#ef4444", "#06b6d4"];

const JobsDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Application modal state
  const [applyOpen, setApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState("");

  // Filters and search
  const [search, setSearch] = useState("");
  const [filterIndustry, setFilterIndustry] = useState<string>("All");

  // Analytics mock states (could be derived/stored)
  const [activeProposals, setActiveProposals] = useState(7);
  const [shortlisted, setShortlisted] = useState(2);
  const [interviews, setInterviews] = useState(1);
  const [declined, setDeclined] = useState(1);

  // Prepare industry breakdown for pie chart
  const industryData = useMemo(() => {
    const map: Record<string, number> = {};
    SAMPLE_JOBS.forEach((j) => {
      map[j.industry] = (map[j.industry] || 0) + 1;
    });
    return Object.keys(map).map((k) => ({ name: k, value: map[k] }));
  }, []);

  // Derived totals
  const totalApplied = SAMPLE_JOBS.length;

  // 2-month comparison (mock)
  const lastMonthApps = 14;
  const thisMonthApps = totalApplied;

  // Filtered job list
  const filteredJobs = SAMPLE_JOBS.filter((job) => {
    const matchesSearch =
      search.trim() === "" ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      (job.tags && job.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())));
    const matchesIndustry = filterIndustry === "All" || job.industry === filterIndustry;
    return matchesSearch && matchesIndustry;
  });

  const openApply = (job: Job) => {
    setSelectedJob(job);
    setApplyOpen(true);
  };

  const submitApplication = () => {
    // placeholder: send to backend here
    console.log("Submit application", selectedJob, cvFile, portfolioFile, coverLetter);
    // update analytics mock
    setActiveProposals((p) => p + 1);
    setApplyOpen(false);
    setCvFile(null);
    setPortfolioFile(null);
    setCoverLetter("");
  };

  const industryOptions = ["All", ...Array.from(new Set(SAMPLE_JOBS.map((j) => j.industry)))];

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />

      <div className="ml-64 flex-1">
        <TopBar userName="Kitso Sejake" />

        <main className="p-6">
          {/* Header Illustration + Title */}
          <div className="mb-6 flex items-center gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-semibold">Jobs & Applications</h1>
              <p className="text-muted-foreground mt-1 max-w-2xl">
                Overview of your job activity, proposals and industry distribution.
              </p>
            </div>

            {/* header image (uploaded file used as illustration) */}
            <img
              src={HEADER_IMAGE}
              alt="dashboard header"
              className="h-20 w-36 object-cover rounded-lg shadow-sm"
            />
          </div>

       
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
  {/* Jobs Applied */}
  <Card className="p-2 bg-gradient-to-r from-blue-50 to-blue-100 hover:shadow-lg transition-shadow rounded-xl">
    {/* Header */}
    <CardHeader className="flex items-left justify-between p-0 mb-2">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-md bg-blue-200/50 flex items-center justify-center">
          <FileText className="h-4 w-4 text-blue-600" />
        </div>
        <CardTitle className="text-sm font-medium text-blue-700 m-0">Jobs Applied</CardTitle>
      </div>
      <MoreVertical className="h-4 w-4 text-blue-600 cursor-pointer" />
    </CardHeader>

    {/* Body */}
    <CardContent className="flex items-center justify-between p-0">
      <div className="flex items-center gap-2">
        <p className="text-2xl font-bold text-blue-800">{totalApplied}</p>
        <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
          <ArrowUp className="h-3 w-3" />
          <span>+12%</span>
        </div>
      </div>
      <button className="p-2 rounded-full bg-blue-200/50 hover:bg-blue-300 transition">
        <Compass className="h-4 w-4 text-blue-600" />
      </button>
    </CardContent>
  </Card>

  {/* Active Proposals */}
  <Card className="p-4 bg-gradient-to-r from-green-50 to-green-100 hover:shadow-lg transition-shadow rounded-xl">
    <CardHeader className="flex items-left justify-between p-0 mb-2">
      <div className="flex items-left gap-2">
        <div className="p-2 rounded-md bg-green-200/50 flex items-center justify-center">
          <Users className="h-4 w-4 text-green-600" />
        </div>
        <CardTitle className="text-sm font-medium text-green-700 m-0">Active Proposals</CardTitle>
      </div>
      <MoreVertical className="h-4 w-4 text-green-600 cursor-pointer" />
    </CardHeader>

    <CardContent className="flex items-left justify-between p-0">
      <div className="flex items-center gap-2">
        <p className="text-2xl font-bold text-green-800">{activeProposals}</p>
        <div className="flex items-center gap-1 text-sm text-red-500 mt-1">
          <ArrowDown className="h-3 w-3" />
          <span>-5%</span>
        </div>
      </div>
      <button className="p-2 rounded-full bg-green-200/50 hover:bg-green-300 transition">
        <Compass className="h-4 w-4 text-green-600" />
      </button>
    </CardContent>
  </Card>

  {/* Avg Rating */}
  <Card className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 hover:shadow-lg transition-shadow rounded-xl">
    <CardHeader className="flex items-left justify-between p-0 mb-2">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-md bg-yellow-200/50 flex items-center justify-center">
          <Star className="h-4 w-4 text-yellow-600" />
        </div>
        <CardTitle className="text-sm font-medium text-yellow-700 m-0">Avg Rating</CardTitle>
      </div>
      <div>
        <MoreVertical className="h-4 w-4 text-yellow-600 cursor-pointer" />
      </div>
      
    </CardHeader>

    <CardContent className="flex items-left justify-between p-0">
      <div className="flex items-center gap-2">
        <p className="text-2xl font-bold text-yellow-800">4.8</p>
        <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
          <ArrowUp className="h-3 w-3" />
          <span>+8%</span>
        </div>
      </div>
      <button className="p-2 rounded-full bg-yellow-200/50 hover:bg-yellow-300 transition">
        <Compass className="h-4 w-4 text-yellow-600" />
      </button>
    </CardContent>
  </Card>
</div>



{/* Charts Section (2-column grid) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
  {/* Industry Distribution (Bar Chart) */}
 {/* Pie Chart */}
            <Card className="p-4 items-center">
              <CardHeader>
                <CardTitle>Industry Distribution</CardTitle>
              </CardHeader>
              <CardContent className="h-64">
                <Pie
                data={{
                  labels: industryData.map((d) => d.name),
                  datasets: [
                    {
                      label: 'Industry Jobs',
                      data: industryData.map((d) => d.value),
                      backgroundColor: COLORS,
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'bottom' },
                    tooltip: { enabled: true },
                  },
                }}
              />

              </CardContent>
            </Card>

  {/* 2-Month Comparison (Bar Chart) */}
  <Card className="p-4 items-center ">
    <CardHeader>
      <CardTitle>2-Month Comparison</CardTitle>
    </CardHeader>
    <CardContent className="h-64 items-center">
      <Bar
  data={{
    labels: ['Last Month', 'This Month'],
    datasets: [
      {
        label: 'Applications',
        data: [lastMonthApps, thisMonthApps],
        backgroundColor: ['#3b82f6', '#22c55e'],
      },
    ],
  }}
  options={{
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  }}
/>

    </CardContent>
  </Card>
</div>

          {/* Search & Filters (above job list) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 w-full md:w-2/3">
              <div className="relative w-full">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-9"
                  placeholder="Search jobs, tags or keywords..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select
                className="p-2 rounded-md border bg-background"
                value={filterIndustry}
                onChange={(e) => setFilterIndustry(e.target.value)}
              >
                {industryOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => { setSearch(""); setFilterIndustry("All"); }}>
                Reset Filters
              </Button>
              <Button onClick={() => window.print()}>
                Export
              </Button>
            </div>
          </div>

          {/* Job list grid (professional grid layout) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="relative hover:shadow-lg transition-all rounded-xl">
                {/* Rating / quick meta on top-right (industry tag) */}
                <div className="absolute top-3 right-3 flex items-center gap-2 bg-white px-2 py-1 rounded-full shadow text-xs">
                  <span className="font-medium">{job.industry}</span>
                </div>

                <CardHeader className="pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3
                        className="text-lg font-semibold hover:text-primary cursor-pointer"
                        onClick={() => navigate(`/jobs/${job.id}`)}
                      >
                        {job.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="mt-3 flex items-center gap-2 flex-wrap">
                        {job.tags?.map((t) => (
                          <Badge key={t} variant="secondary">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{job.duration}</p>
                      <p className="text-lg font-semibold mt-2">{job.budget}</p>
                      <p className="text-xs text-muted-foreground mt-1">{job.posted}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm" onClick={() => navigate(`/jobs/${job.id}`)}>
                        View
                      </Button>

                      <Button size="sm" className="bg-gradient-primary" onClick={() => openApply(job)}>
                        Apply
                      </Button>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <div>{job.proposals} proposals</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        {/* Apply Modal */}
        <Dialog open={applyOpen} onOpenChange={setApplyOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>
                Apply for: <span className="text-primary">{selectedJob?.title}</span>
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label>Your Name</Label>
                <Input value="Kitso Sejake" disabled />
              </div>

              <div>
                <Label>Your Email</Label>
                <Input value="sejakekitso@gmail.com" disabled />
              </div>

              <div>
                <Label>Upload CV *</Label>
                <FileInput type="file" accept=".pdf,.doc,.docx" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCvFile(e.target.files?.[0] || null)} />
              </div>

              <div>
                <Label>Portfolio (optional)</Label>
                <FileInput type="file" accept=".pdf,.zip,.png,.jpg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPortfolioFile(e.target.files?.[0] || null)} />
              </div>

              <div>
                <Label>Cover Letter</Label>
                <Textarea placeholder="Write a short cover letter..." value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setApplyOpen(false)}>Cancel</Button>
              <Button className="bg-gradient-primary" onClick={submitApplication}>Submit Application</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default JobsDashboard;

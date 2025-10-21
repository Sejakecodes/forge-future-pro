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
import { MapPin, DollarSign, Clock, Search, SlidersHorizontal } from "lucide-react";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Full-Stack Developer for E-commerce Platform",
      budget: "$5,000 - $8,000",
      duration: "2-3 months",
      location: "Remote",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      description: "Looking for an experienced full-stack developer to build a modern e-commerce platform with payment integration.",
      posted: "2 hours ago",
      proposals: 12,
    },
    {
      id: 2,
      title: "Mobile App UI/UX Designer",
      budget: "$2,500 - $4,000",
      duration: "1 month",
      location: "Remote",
      tags: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
      description: "Need a creative designer to redesign our mobile app with modern UI/UX principles.",
      posted: "5 hours ago",
      proposals: 8,
    },
    {
      id: 3,
      title: "WordPress Website Development",
      budget: "$1,500 - $2,500",
      duration: "2-4 weeks",
      location: "Remote",
      tags: ["WordPress", "PHP", "CSS", "JavaScript"],
      description: "Create a custom WordPress website for a small business with custom theme and plugins.",
      posted: "1 day ago",
      proposals: 24,
    },
    {
      id: 4,
      title: "Social Media Marketing Manager",
      budget: "$3,000 - $5,000",
      duration: "3 months",
      location: "Remote",
      tags: ["Marketing", "Social Media", "Content", "Analytics"],
      description: "Seeking a marketing expert to manage and grow our social media presence across platforms.",
      posted: "1 day ago",
      proposals: 18,
    },
    {
      id: 5,
      title: "Python Data Analysis & Visualization",
      budget: "$1,200 - $2,000",
      duration: "2 weeks",
      location: "Remote",
      tags: ["Python", "Pandas", "Data Analysis", "Visualization"],
      description: "Analyze large datasets and create interactive visualizations for business insights.",
      posted: "2 days ago",
      proposals: 15,
    },
    {
      id: 6,
      title: "Logo & Brand Identity Design",
      budget: "$800 - $1,500",
      duration: "1-2 weeks",
      location: "Remote",
      tags: ["Logo Design", "Branding", "Illustrator", "Brand Guide"],
      description: "Design a complete brand identity including logo, color palette, and brand guidelines.",
      posted: "3 days ago",
      proposals: 32,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      
      <div className="ml-64 flex-1">
        <TopBar userName="kitso Sejake" />
        
        <main className="p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Explore Jobs</h1>
                <p className="text-muted-foreground">Find the perfect project for your skills</p>
              </div>
              <Button className="bg-gradient-primary hover:opacity-90">
                Post a Job
              </Button>
            </div>

            {/* Filters */}
            <Card className="border-border/60 shadow-soft">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4">
                  <div className="relative flex-1 min-w-[300px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search by title, skills, or keywords..."
                      className="pl-9"
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="writing">Writing</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Budgets</SelectItem>
                      <SelectItem value="low">Under $1,000</SelectItem>
                      <SelectItem value="medium">$1,000 - $5,000</SelectItem>
                      <SelectItem value="high">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Listings */}
            <div className="grid gap-4">
              {jobs.map((job) => (
                <Card key={job.id} className="border-border/60 shadow-soft transition-all hover:shadow-medium">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 hover:text-primary cursor-pointer">
                          {job.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Job Details & Actions */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <DollarSign className="h-4 w-4" />
                            <span className="font-medium text-foreground">{job.budget}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            <span>{job.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="text-muted-foreground">
                            {job.proposals} proposals · {job.posted}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Jobs;

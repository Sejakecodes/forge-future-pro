import { useNavigate } from "react-router-dom";
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
  MapPin,
  DollarSign,
  Clock,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const Jobs = () => {
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "Full-Stack Developer for E-commerce Platform",
      budget: "$5,000 - $8,000",
      duration: "2-3 months",
      location: "Remote",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      description:
        "Looking for an experienced full-stack developer to build a modern e-commerce platform with payment integration.",
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
      description:
        "Need a creative designer to redesign our mobile app with modern UI/UX principles.",
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
      description:
        "Create a custom WordPress website for a small business with custom theme and plugins.",
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
      description:
        "Seeking a marketing expert to manage and grow our social media presence across platforms.",
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
      description:
        "Analyze large datasets and create interactive visualizations for business insights.",
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
      description:
        "Design a complete brand identity including logo, color palette, and brand guidelines.",
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
          {/* header + filters */}

          <div className="grid gap-4">
            {jobs.map((job) => (
              <Card
                key={job.id}
                className="border-border/60 shadow-soft transition-all hover:shadow-medium"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle
                        className="text-lg mb-2 hover:text-primary cursor-pointer"
                        onClick={() => navigate(`/jobs/${job.id}`)}
                      >
                        {job.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* same content */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/jobs/${job.id}`)}
                    >
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      variant="default"
                      className="bg-gradient-primary "
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Jobs;

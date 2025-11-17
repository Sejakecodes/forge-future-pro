import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Clock, ArrowLeft } from "lucide-react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// STATIC JOBS LIST
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

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === Number(id));

  const [applyOpen, setApplyOpen] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState("");

  if (!job) {
    return (
      <div className="p-10 text-center text-lg text-muted-foreground">
        Job not found.
      </div>
    );
  }

  const handleSubmit = () => {
    console.log("Applying for:", job.title);
    console.log("CV:", cvFile);
    console.log("Portfolio:", portfolioFile);
    console.log("Cover Letter:", coverLetter);

    setApplyOpen(false);
    setCvFile(null);
    setPortfolioFile(null);
    setCoverLetter("");
  };

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />

      <div className="ml-64 flex-1">
        <TopBar userName="kitso Sejake" />

        <main className="p-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>

          <Card className="border-border/60 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">{job.title}</CardTitle>
              <p className="text-muted-foreground mt-2">{job.description}</p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-foreground font-medium">
                    {job.budget}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{job.duration}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>

                <div>{job.proposals} proposals · {job.posted}</div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="font-semibold mb-2">Skills Required</h3>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button variant="outline">Save Job</Button>
                <Button
                  className="bg-gradient-primary bg-primary"
                  onClick={() => setApplyOpen(true)}
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* APPLY MODAL — only ONE version */}
      <Dialog open={applyOpen} onOpenChange={setApplyOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              Apply for: <span className="text-primary">{job.title}</span>
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
              <Input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setCvFile(e.target.files?.[0] || null)}
              />
            </div>

            <div>
              <Label>Upload Portfolio (Optional)</Label>
              <Input
                type="file"
                accept=".pdf,.zip,.png,.jpg"
                onChange={(e) => setPortfolioFile(e.target.files?.[0] || null)}
              />
            </div>

            <div>
              <Label>Cover Letter</Label>
              <Textarea
                placeholder="Write a short cover letter..."
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setApplyOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-gradient-primary" onClick={handleSubmit}>
              Submit Application
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobDetails;

import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Clock, ArrowLeft } from "lucide-react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";

const jobs = [
 { id: 1, title: "Full-Stack Developer for E-commerce Platform", budget: "R5,000 - R8,000", duration: "2-3 months", location: "Remote", tags: ["React", "Node.js", "MongoDB", "Stripe"], description: "Looking for an experienced full-stack developer to build a modern e-commerce platform with payment integration.", posted: "2 hours ago", proposals: 12, }, { id: 2, title: "Mobile App UI/UX Designer", budget: "R2,500 - R4,000", duration: "1 month", location: "Remote", tags: ["Figma", "UI/UX", "Mobile Design", "Prototyping"], description: "Need a creative designer to redesign our mobile app with modern UI/UX principles.", posted: "5 hours ago", proposals: 8, }, { id: 3, title: "WordPress Website Development", budget: "R1,500 - R2,500", duration: "2-4 weeks", location: "Remote", tags: ["WordPress", "PHP", "CSS", "JavaScript"], description: "Create a custom WordPress website for a small business with custom theme and plugins.", posted: "1 day ago", proposals: 24, }, { id: 4, title: "Social Media Marketing Manager", budget: "R3,000 - R5,000", duration: "3 months", location: "Remote", tags: ["Marketing", "Social Media", "Content", "Analytics"], description: "Seeking a marketing expert to manage and grow our social media presence across platforms.", posted: "1 day ago", proposals: 18, }, { id: 5, title: "Python Data Analysis & Visualization", budget: "R1,200 - R2,000", duration: "2 weeks", location: "Remote", tags: ["Python", "Pandas", "Data Analysis", "Visualization"], description: "Analyze large datasets and create interactive visualizations for business insights.", posted: "2 days ago", proposals: 15, }, { id: 6, title: "Logo & Brand Identity Design", budget: "R800 - R1,500", duration: "1-2 weeks", location: "Remote", tags: ["Logo Design", "Branding", "Illustrator", "Brand Guide"], description: "Design a complete brand identity including logo, color palette, and brand guidelines.", posted: "3 days ago", proposals: 32, },
  // ... other jobs
];

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return <div className="p-8 text-center text-muted-foreground">Job not found.</div>;
  }

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="kitso Sejake" />
        <main className="p-6">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>

          <Card className="border-border/60 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">{job.title}</CardTitle>
              <p className="text-muted-foreground mt-2">{job.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
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
                <div>{job.proposals} proposals · {job.posted}</div>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">Skills Required</h3>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-secondary rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button variant="outline">Save Job</Button>
                <Button className="bg-gradient-primary hover:opacity-90">Apply Now</Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default JobDetails;

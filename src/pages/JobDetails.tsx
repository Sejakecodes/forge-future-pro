import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, MapPin, ArrowLeft } from "lucide-react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";

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
      "Looking for an experienced full-stack developer to build a modern e-commerce platform with payment integration. dsfhdsf dsfkj dsfjsd jfkjdsfjdsaf jdsa lkffhdsajf hdsjf hlkjdsaf lkdshflkjds fhds fljdshalkfhdsakjfdshflkjdsahflkjdshfkdsahfhdsa lfhdsa lkfhdsalkfjhdsadlkahf lkdshflksdhfjdsh lfjfhdsljfhdslkjhfdslahflkjdsa hflhflshflkjsflkshf jdshlfkjhds lfkdsa lkfjdshf lkjdsahfdsfl js lfjdshlfhdsafjhsldakhfl jdsah flhflkjsdfljsfdsa flkdsfjdslajfhdsljfljdshf ljdsf lshfljdshfl sdfh ldsfjdslhf sd hfjsa flkjshf jsfjsdfhsdl jdsaf ldshflkjds afldsfldsalhf ",
    posted: "2 hours ago",
    proposals: 12,
    requirements: [
      "5+ years experience building production-grade web apps",
      "Familiar with payment integrations (Stripe, PayPal)",
      "Strong knowledge of React and Node.js",
      "Experience with MongoDB or other NoSQL databases",
    ],
    company: "Acme Corp",
    logo: "/mnt/data/fcfc13f7-2316-46ba-9fd6-5ae1c0ed6fd7.png",
  },
  // ... you can keep other job objects if you like
];

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === Number(id)) || jobs[0];

  const [applyOpen, setApplyOpen] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [portfolioFile, setPortfolioFile] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = () => {
    // You can replace this with an API call
    console.log("Applying for:", job.title);
    console.log("CV:", cvFile);
    console.log("Portfolio:", portfolioFile);
    console.log("Cover Letter:", coverLetter);

    // simple reset + close modal
    setApplyOpen(false);
    setCvFile(null);
    setPortfolioFile(null);
    setCoverLetter("");
    // show a toast / notification here if you have one
  };

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main content (keeps space for sidebar) */}
      <div className="ml-64 flex-1">
        {/* Topbar */}
        <TopBar userName="Kitso Sejake" />

        <main className="p-6 ">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>

          {/* Card: redesigned to match image layout */}
          <Card className="rounded-3xl shadow-2xl border border-gray-200 bg-white/95 backdrop-blur-md overflow-hidden overflow-y-auto max-h-[85vh]">
            {/* Card Header */}
            <div className="p-8">
              <div className="flex items-start gap-6">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-16 h-16 rounded-2xl object-cover shadow-sm"
                />

                <div className="flex-1">
                  <h1 className="text-2xl font-bold">{job.title}</h1>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {job.company} • {job.location}
                  </div>
                </div>

                <div className="ml-auto text-right">
                  <div className="text-sm text-muted-foreground">Posted</div>
                  <div className="font-semibold">{job.posted}</div>
                </div>
              </div>

              {/* Info boxes row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                <div className="rounded-xl p-3 bg-emerald-50 border border-emerald-100">
                  <div className="text-xs text-muted-foreground">Salary</div>
                  <div className="font-semibold mt-1">{job.budget}</div>
                </div>

                <div className="rounded-xl p-3 bg-sky-50 border border-sky-100">
                  <div className="text-xs text-muted-foreground">Duration</div>
                  <div className="font-semibold mt-1">{job.duration}</div>
                </div>

                <div className="rounded-xl p-3 bg-orange-50 border border-orange-100">
                  <div className="text-xs text-muted-foreground">Proposals</div>
                  <div className="font-semibold mt-1">{job.proposals}</div>
                </div>

                <div className="rounded-xl p-3 bg-violet-50 border border-violet-100">
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="font-semibold mt-1">{job.location}</div>
                </div>
              </div>
            </div>

            {/* Tabs (visual) */}
            <div className="px-8">
              <div className="flex gap-3 bg-transparent">
                <button className="flex-1 py-3 rounded-lg bg-foreground text-background font-semibold">
                  Description
                </button>
                <button className="flex-1 py-3 rounded-lg border border-border text-muted-foreground">
                  Company
                </button>
              </div>
            </div>

            {/* Card body */}
            <CardContent className="p-8 pt-6">
              <section>
                <h3 className="text-lg font-bold mb-2">Job description</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {job.description}
                </p>

                <h4 className="text-md font-semibold mb-2">Requirements</h4>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-6 text-muted-foreground">
                  {(job.requirements || []).map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 items-center mb-6">
                  {job.tags &&
                    job.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs bg-secondary/20 text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                </div>

                {/* actions */}
                <div className="flex justify-center">
                  <Button
                    className="bg-black text-white px-8 py-3 rounded-full"
                    onClick={() => setApplyOpen(true)}
                  >
                    Apply Now
                  </Button>
                </div>
              </section>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* Apply modal */}
      <Dialog open={applyOpen} onOpenChange={setApplyOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              Apply for: <span className="font-semibold">{job.title}</span>
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
            <Button className="bg-black text-white" onClick={handleSubmit}>
              Submit Application
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobDetails;

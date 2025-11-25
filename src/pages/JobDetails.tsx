// Updated JobDetails component matching the layout shown in the reference image.
// Includes company card header, salary/job type boxes, description/company tabs, and apply button centered.

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

// TEMP STATIC JOBS
const jobs = [
  {
    id: 1,
    title: "UI Designer",
    company: "Hatypo Studio",
    location: "Surakarta, ID - Onsite",
    salary: "$10 /hour",
    type: "Part-Time",
    applicants: "20/50",
    skill: "Expert",
    description: `Collaborate with the Digital Marketing team to propose, design, & deliver wireframes, user journeys, and UI mock-ups.
Collaborate with the SEO & Content team to establish best practices for high-performing websites.
Collaborate with Front End Developers to ensure high quality & bug-free deliverables.
Develop high-fidelity UI prototypes for responsive websites & maintain consistency of our design system.
Stay up-to-date with the latest UI/UX design trends and propose improvements on current websites.`,
    requirements: [
      "Bachelor’s degree in Web Design, Digital Media, or related field",
      "3+ years of experience in UI/UX or building high-performing websites",
      "Strong understanding of UI structures and responsive design",
      "Proficient in Figma, Illustrator, and Photoshop",
      "Ability to meet aggressive deadlines in a fast-paced environment",
      "Knowledge of HTML, CSS, JS is a plus"
    ]
  }
];

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === Number(id)) || jobs[0];

  const [applyOpen, setApplyOpen] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [portfolioFile, setPortfolioFile] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");

  return (
    <div className="min-h-screen bg-neutral-50 p-4 flex justify-center">
      <div className="w-full max-w-2xl">
        {/* BACK BUTTON */}
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>

        {/* MAIN CARD */}
        <Card className="rounded-2xl shadow-lg p-6 bg-white">
          {/* TOP HEADER */}
          <div className="flex items-center gap-4">
            <img
              src="/mnt/data/fcfc13f7-2316-46ba-9fd6-5ae1c0ed6fd7.png"
              className="w-14 h-14 rounded-xl object-cover"
            />

            <div>
              <h2 className="font-bold text-xl">{job.company}</h2>
              <p className="text-sm text-muted-foreground">{job.title}</p>
              <p className="text-xs text-muted-foreground">{job.location}</p>
            </div>
          </div>

          {/* FOUR INFO BOXES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <div className="bg-emerald-100 text-center p-3 rounded-xl">
              <p className="text-xs text-muted-foreground">Salary</p>
              <p className="font-bold text-sm">{job.salary}</p>
            </div>

            <div className="bg-sky-100 text-center p-3 rounded-xl">
              <p className="text-xs text-muted-foreground">Job Type</p>
              <p className="font-bold text-sm">{job.type}</p>
            </div>

            <div className="bg-orange-100 text-center p-3 rounded-xl">
              <p className="text-xs text-muted-foreground">Applicants</p>
              <p className="font-bold text-sm">{job.applicants}</p>
            </div>

            <div className="bg-purple-100 text-center p-3 rounded-xl">
              <p className="text-xs text-muted-foreground">Skill</p>
              <p className="font-bold text-sm">{job.skill}</p>
            </div>
          </div>

          {/* TABS (STATIC VISUALS) */}
          <div className="flex mt-8 mb-4">
            <button className="flex-1 py-2 rounded-xl bg-black text-white font-semibold">Description</button>
            <button className="flex-1 py-2 rounded-xl text-muted-foreground">Company</button>
          </div>

          {/* JOB DESCRIPTION */}
          <h3 className="font-bold mb-2">Job Description</h3>
          <div className="text-sm whitespace-pre-line text-muted-foreground">
            {job.description}
          </div>

          {/* REQUIREMENTS */}
          <h3 className="font-bold mt-6 mb-2">Requirement</h3>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>

          {/* APPLY BUTTON */}
          <div className="mt-8 flex justify-center">
            <Button className="bg-black text-white px-10 py-6 rounded-full" onClick={() => setApplyOpen(true)}>
              Apply Now
            </Button>
          </div>
        </Card>
      </div>

      {/* APPLY MODAL */}
      <Dialog open={applyOpen} onOpenChange={setApplyOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Apply for: {job.title}</DialogTitle>
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
              <Input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setCvFile(e.target.files?.[0] || null)} />
            </div>

            <div>
              <Label>Upload Portfolio (Optional)</Label>
              <Input type="file" accept=".pdf,.zip,.png,.jpg" onChange={(e) => setPortfolioFile(e.target.files?.[0] || null)} />
            </div>

            <div>
              <Label>Cover Letter</Label>
              <Textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setApplyOpen(false)}>Cancel</Button>
            <Button className="bg-black text-white" onClick={() => setApplyOpen(false)}>Submit Application</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
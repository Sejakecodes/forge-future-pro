import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Wallet,
  FileCheck,
  Rocket,
  Target,
  Users,
} from "lucide-react";

const EntrepreneurialReadiness = () => {
  const guides = [
    {
      id: 1,
      title: "Business Idea Validation",
      desc: "Learn how to validate your business idea before investing time and money.",
      icon: <Lightbulb className="h-7 w-7 text-yellow-500" />,
      category: "Mindset & Ideation",
    },
    {
      id: 2,
      title: "Financial Readiness",
      desc: "Understand startup budgeting, cash flow, pricing, and financial planning.",
      icon: <Wallet className="h-7 w-7 text-green-500" />,
      category: "Finance",
    },
    {
      id: 3,
      title: "Legal & Compliance",
      desc: "A guide on registering your company, tax compliance, and business documents.",
      icon: <FileCheck className="h-7 w-7 text-blue-500" />,
      category: "Legal",
    },
    {
      id: 4,
      title: "Brand Identity Essentials",
      desc: "Learn the core principles of modern branding for startups.",
      icon: <Target className="h-7 w-7 text-pink-500" />,
      category: "Branding",
    },
    {
      id: 5,
      title: "Go-To-Market Strategy",
      desc: "Step-by-step guide on launching your business and getting your first customers.",
      icon: <Rocket className="h-7 w-7 text-purple-500" />,
      category: "Marketing & Sales",
    },
    {
      id: 6,
      title: "Building a Team",
      desc: "Understand hiring, outsourcing, collaboration tools, and early-stage leadership.",
      icon: <Users className="h-7 w-7 text-orange-500" />,
      category: "Team & Operations",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />

      <div className="ml-64 flex-1">
        <TopBar userName="Kitso Sejake" />

        <main className="p-6 space-y-8">
          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-semibold">Entrepreneurial Readiness Guides</h1>
            <p className="text-muted-foreground mt-1">
              Step-by-step guides to help you start, structure, and grow your business knowledge.
            </p>
          </div>

          {/* GUIDES GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Card
                key={guide.id}
                className="shadow-soft border-border/60 hover:shadow-medium transition-all"
              >
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-2 rounded-xl bg-secondary">{guide.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      {guide.category}
                    </p>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {guide.desc}
                  </p>

                  <Button className="bg-gradient-primary w-full">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EntrepreneurialReadiness;

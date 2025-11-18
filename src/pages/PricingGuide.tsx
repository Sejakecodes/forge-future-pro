import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Calculator } from "lucide-react";
import { useState } from "react";

export default function PricingGuide() {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "R0",
      desc: "Perfect for beginners exploring entrepreneurship.",
      features: [
        "Access to free guides",
        "Community discussions",
        "Limited mentorship resources",
        "Job board (limited access)",
      ],
    },
    {
      id: 2,
      name: "Growth",
      price: "R99 / month",
      desc: "Ideal for freelancers and early-stage entrepreneurs.",
      features: [
        "All Starter features",
        "Full mentorship access",
        "Premium entrepreneurial tools",
        "Downloadable templates",
        "Business diagnostics & assessments",
      ],
    },
    {
      id: 3,
      name: "Pro",
      price: "R249 / month",
      desc: "For growing founders needing full support.",
      features: [
        "All Growth features",
        "1-on-1 coaching sessions",
        "Full platform analytics",
        "Priority ranking",
        "Exclusive masterclasses",
      ],
    },
  ];

  // COST ESTIMATOR STATE
  const [projectType, setProjectType] = useState("");
  const [complexity, setComplexity] = useState("");
  const [deadline, setDeadline] = useState("");
  const [estimate, setEstimate] = useState(null);

  const calculateEstimate = () => {
    let cost = 0;

    if (projectType === "website") cost = 3000;
    if (projectType === "mobile-app") cost = 7000;
    if (projectType === "branding") cost = 1500;

    if (complexity === "medium") cost *= 1.5;
    if (complexity === "high") cost *= 2;

    if (deadline === "urgent") cost += 2000;

    setEstimate(cost);
  };

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />

      <div className="ml-64 flex-1">
        <TopBar userName="Kitso Sejake" />

        <main className="p-6 space-y-10">
          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-semibold">Pricing Guide</h1>
            <p className="text-muted-foreground mt-1">
              Compare plans and estimate your project cost.
            </p>
          </div>

          {/* PRICING GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className="shadow-soft hover:shadow-medium transition-all border-border/60"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.desc}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold">{plan.price}</div>

                  <ul className="text-sm space-y-2">
                    {plan.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button className="bg-gradient-primary w-full">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* COST ESTIMATOR */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Calculator className="h-6 w-6 text-primary" />
              Project Cost Estimator
            </h2>
            <p className="text-muted-foreground mb-4">
              Enter your project details to get a cost estimate.
            </p>

            <Card className="shadow-soft border-border/60">
              <CardContent className="grid gap-6 p-6 md:grid-cols-3">
                {/* PROJECT TYPE */}
                <div>
                  <label className="font-medium">Project Type</label>
                  <select
                    className="mt-2 w-full p-3 rounded-xl border bg-background"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="website">Website</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="branding">Branding / Logo</option>
                  </select>
                </div>

                {/* COMPLEXITY */}
                <div>
                  <label className="font-medium">Complexity</label>
                  <select
                    className="mt-2 w-full p-3 rounded-xl border bg-background"
                    value={complexity}
                    onChange={(e) => setComplexity(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                {/* DEADLINE */}
                <div>
                  <label className="font-medium">Deadline</label>
                  <select
                    className="mt-2 w-full p-3 rounded-xl border bg-background"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="flexible">Flexible</option>
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent (+ R2000)</option>
                  </select>
                </div>
              </CardContent>

              <div className="px-6 pb-6">
                <Button
                  className="bg-gradient-primary w-full py-3 text-lg"
                  onClick={calculateEstimate}
                >
                  Calculate Cost
                </Button>

                {estimate !== null && (
                  <div className="mt-4 p-4 text-center bg-secondary rounded-xl text-xl font-semibold">
                    Estimated Cost:{" "}
                    <span className="text-primary">R{estimate}</span>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Presentation,
  Handshake,
  Mic,
  Target,
  Users,
  Cpu,
} from "lucide-react";

const PitchingStrategies = () => {
  const strategies = [
    {
      id: 1,
      title: "Problem–Solution Pitch",
      desc: "Learn to present the problem clearly and demonstrate how your solution directly solves it.",
      icon: <Target className="h-7 w-7 text-red-500" />,
      category: "Sales Fundamentals",
    },
    {
      id: 2,
      title: "Value Proposition Pitch",
      desc: "Communicate the real value behind your service and why clients should choose you.",
      icon: <Presentation className="h-7 w-7 text-blue-500" />,
      category: "Value Communication",
    },
    {
      id: 3,
      title: "Social Proof Pitch",
      desc: "Use client testimonials, case studies, and achievements to build trust fast.",
      icon: <Users className="h-7 w-7 text-green-500" />,
      category: "Trust Building",
    },
    {
      id: 4,
      title: "Personal Branding Pitch",
      desc: "Learn how to position yourself as a dependable professional with a strong identity.",
      icon: <Mic className="h-7 w-7 text-purple-500" />,
      category: "Branding",
    },
    {
      id: 5,
      title: "Negotiation & Closing",
      desc: "Master the art of pricing conversations, overcoming objections, and closing deals.",
      icon: <Handshake className="h-7 w-7 text-orange-500" />,
      category: "Negotiation",
    },
    {
      id: 6,
      title: "AI-Assisted Pitching",
      desc: "Leverage AI tools to refine your pitch, craft proposals, and personalize client communication.",
      icon: <Cpu className="h-7 w-7 text-cyan-500" />,
      category: "Modern Tools",
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
            <h1 className="text-3xl font-semibold">Pitching Strategies</h1>
            <p className="text-muted-foreground mt-1 max-w-xl">
              Learn how to structure, deliver, and optimize your pitch to win clients confidently.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strategies.map((strategy) => (
              <Card
                key={strategy.id}
                className="shadow-soft border-border/60 hover:shadow-medium transition-all"
              >
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-2 rounded-xl bg-secondary">{strategy.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{strategy.title}</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      {strategy.category}
                    </p>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {strategy.desc}
                  </p>

                 <Link to={`/pitching-strategies/${strategy.id}`}>
                  <Button className="bg-gradient-primary w-full">
                    Learn Strategy
                  </Button>
                </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PitchingStrategies;

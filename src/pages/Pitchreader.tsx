import { useParams, Link } from "react-router-dom";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const strategies = [
  {
    id: 1,
    title: "Problem–Solution Pitch",
    content: `
      A problem–solution pitch focuses on presenting a real problem your customer faces,
      then demonstrating your solution clearly and logically.

      💡 Key Points:
      - Define the problem clearly.
      - Show why it matters.
      - Present your solution step-by-step.
      - Explain the benefits of your solution.
      - End with a call to action.
    `,
  },
  {
    id: 2,
    title: "Value Proposition Pitch",
    content: `
      A value proposition pitch focuses on the *benefits* your offer brings,
      not just the features.
    `,
  },
  // add the rest…
];

export default function PitchReader() {
  const { id } = useParams();
  const guide = strategies.find((g) => g.id === Number(id));

  if (!guide) {
    return (
      <div className="p-6 text-center text-red-500">Strategy not found.</div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />

      <div className="ml-64 flex-1">
        <TopBar userName="Kitso Sejake" />

        <main className="p-6 space-y-8 max-w-3xl">
          <Link to="/Pitching">
            <Button variant="outline">← Back to Strategies</Button>
          </Link>

          <Card className="shadow-medium border border-border/40">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                {guide.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                {guide.content}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

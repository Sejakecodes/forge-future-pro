import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Lock, Star, Award } from "lucide-react";

const BadgesPage = () => {
  const earnedBadges = [
    {
      id: 1,
      title: "Early Adopter",
      desc: "Joined the platform in the first 100 users.",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
    },
    {
      id: 2,
      title: "Rising Talent",
      desc: "Completed your first project successfully.",
      icon: <Award className="w-6 h-6 text-primary" />,
    },
    {
      id: 3,
      title: "Verified",
      desc: "Verified your account details.",
      icon: <BadgeCheck className="w-6 h-6 text-green-500" />,
    },
  ];

  const lockedBadges = [
    {
      id: 4,
      title: "Top Rated",
      desc: "Complete 10+ successful projects.",
    },
    {
      id: 5,
      title: "Community Hero",
      desc: "Get 50+ post engagements in the community.",
    },
    {
      id: 6,
      title: "Elite Freelancer",
      desc: "Earn more than R50,000 on the platform.",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="Kitso Sejake" />

        <main className="p-6 space-y-6">
          <h1 className="text-2xl font-semibold mb-4">Your Badges</h1>

          {/* Earned Badges */}
          <Card className="shadow-soft border-border/60">
            <CardHeader>
              <CardTitle>Earned Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {earnedBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex items-start gap-3 p-3 border rounded-xl bg-card hover:shadow-md transition-all"
                  >
                    {badge.icon}
                    <div>
                      <h3 className="font-medium">{badge.title}</h3>
                      <p className="text-sm text-muted-foreground">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Locked Badges */}
          <Card className="shadow-soft border-border/60">
            <CardHeader>
              <CardTitle>Locked Badges</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {lockedBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex items-start gap-3 p-3 border rounded-xl bg-secondary/40 opacity-60"
                  >
                    <Lock className="w-6 h-6 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">{badge.title}</h3>
                      <p className="text-sm text-muted-foreground">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Progress Section */}
          <Card className="shadow-soft border-border/60">
            <CardHeader>
              <CardTitle>Progress Toward Next Badge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "40%" }} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                40% toward <span className="font-medium">“Top Rated” Badge</span>
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default BadgesPage;

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, DollarSign, Megaphone } from "lucide-react";

const resources = [
  {
    title: "Freelancing Starter Toolkit",
    description: "Step-by-step checklist, brand setup guide, and client engagement templates.",
    icon: BookOpen,
    link: "/resources/freelancing-toolkit",
  },
  {
    title: "Pricing & Rate Calculator",
    description: "Learn how to set your hourly rate, service pricing, and quote clients confidently.",
    icon: DollarSign,
    link: "/resources/pricing-guide",
  },
  {
    title: "Pitching Strategy Playbook",
    description: "How to pitch your skills, send proposals, and close deals effectively.",
    icon: Megaphone,
    link: "/resources/pitching-strategy",
  },
];

export default function EntrepreneurialResources() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">
        Entrepreneurial Readiness Resources
      </h2>
      <p className="text-muted-foreground max-w-2xl">
        Strengthen your business mindset and learn how to position yourself professionally in the market.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {resources.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="border-border/60 shadow-soft hover:shadow-lg transition">
              <CardHeader>
                <Icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Button asChild variant="default" className="w-full">
                  <a href={item.link}>Open Resource</a>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

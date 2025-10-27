import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, DollarSign, CheckCircle2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Development",
      client: "Sarah Johnson",
      status: "In Progress",
      progress: 65,
      budget: "R5,000",
      deadline: "2024-04-15",
    },
    {
      id: 2,
      title: "Mobile App UI/UX Design",
      client: "Michael Chen",
      status: "In Progress",
      progress: 80,
      budget: "R3,200",
      deadline: "2024-04-10",
    },
    {
      id: 3,
      title: "Brand Identity Package",
      client: "Emma Davis",
      status: "Completed",
      progress: 100,
      budget: "R1,500",
      deadline: "2024-03-20",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="Alex" />
        <main className="p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <h1 className="text-2xl font-bold">My Projects</h1>
            <div className="grid gap-4">
              {projects.map((project) => (
                <Card key={project.id} className="border-border/60 shadow-soft">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} />
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{project.budget}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{project.deadline}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;

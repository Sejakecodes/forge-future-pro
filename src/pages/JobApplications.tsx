import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, DollarSign, Clock, MessageSquare, Check, X, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobApplications = () => {
  const navigate = useNavigate();

  const applications = [
    {
      id: 1,
      freelancer: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 4.9,
      completedJobs: 87,
      location: "San Francisco, CA",
      bidAmount: "$6,500",
      deliveryTime: "30 days",
      coverLetter: "I have 8+ years of experience in full-stack development with React and Node.js. I've successfully delivered 20+ e-commerce platforms with complex payment integrations...",
      skills: ["React", "Node.js", "MongoDB", "Stripe API"],
      status: "pending",
    },
    {
      id: 2,
      freelancer: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 4.8,
      completedJobs: 65,
      location: "New York, NY",
      bidAmount: "$7,200",
      deliveryTime: "25 days",
      coverLetter: "As a senior full-stack developer, I specialize in building scalable e-commerce solutions. My recent project increased client revenue by 150%...",
      skills: ["React", "Express", "PostgreSQL", "AWS"],
      status: "pending",
    },
    {
      id: 3,
      freelancer: "Emma Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      rating: 5.0,
      completedJobs: 42,
      location: "Austin, TX",
      bidAmount: "$5,800",
      deliveryTime: "35 days",
      coverLetter: "I'm passionate about creating seamless user experiences. With my expertise in modern React patterns and performance optimization...",
      skills: ["React", "TypeScript", "Tailwind", "Next.js"],
      status: "shortlisted",
    },
  ];

  const jobDetails = {
    title: "Full-Stack Developer for E-commerce Platform",
    budget: "$5,000 - $8,000",
    postedDate: "2 days ago",
    proposals: 24,
  };

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="Alex" />
        <main className="p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Job Header */}
            <Card className="border-border/60 shadow-soft">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{jobDetails.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {jobDetails.budget}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Posted {jobDetails.postedDate}
                      </span>
                    </CardDescription>
                  </div>
                  <Badge variant="default">{jobDetails.proposals} Proposals</Badge>
                </div>
              </CardHeader>
            </Card>

            {/* Applications List */}
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="bg-card border border-border/60 p-1 rounded-xl shadow-soft">
                <TabsTrigger value="all" className="rounded-lg">
                  All ({applications.length})
                </TabsTrigger>
                <TabsTrigger value="shortlisted" className="rounded-lg">
                  Shortlisted ({applications.filter(a => a.status === "shortlisted").length})
                </TabsTrigger>
                <TabsTrigger value="pending" className="rounded-lg">
                  Pending ({applications.filter(a => a.status === "pending").length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {applications.map((application) => (
                  <Card key={application.id} className="border-border/60 shadow-soft hover:shadow-medium transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex gap-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={application.avatar} />
                            <AvatarFallback>{application.freelancer[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-lg">{application.freelancer}</h3>
                              {application.status === "shortlisted" && (
                                <Badge variant="default" className="bg-success">Shortlisted</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                {application.rating} ({application.completedJobs} jobs)
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {application.location}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {application.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">{application.bidAmount}</div>
                          <div className="text-sm text-muted-foreground">in {application.deliveryTime}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Cover Letter</h4>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {application.coverLetter}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="rounded-lg">
                          <Check className="mr-2 h-4 w-4" />
                          Accept Proposal
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-lg">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="rounded-lg"
                          onClick={() => navigate("/profile")}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Profile
                        </Button>
                        <Button size="sm" variant="ghost" className="rounded-lg text-destructive">
                          <X className="mr-2 h-4 w-4" />
                          Decline
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="shortlisted" className="space-y-4">
                {applications.filter(a => a.status === "shortlisted").map((application) => (
                  <Card key={application.id} className="border-border/60 shadow-soft">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{application.freelancer}</h3>
                        <Badge variant="default" className="bg-success">Shortlisted</Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="pending" className="space-y-4">
                {applications.filter(a => a.status === "pending").map((application) => (
                  <Card key={application.id} className="border-border/60 shadow-soft">
                    <CardHeader>
                      <h3 className="font-semibold">{application.freelancer}</h3>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobApplications;

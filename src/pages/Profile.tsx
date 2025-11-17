import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Star,
  Award,
  Briefcase,
  Edit,
  Share2,
  ExternalLink,
} from "lucide-react";

const Profile = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "UI/UX Design",
    "Figma",
    "Tailwind CSS",
    "MongoDB",
    "REST APIs",
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
      category: "Web Development",
    },
    {
      title: "Mobile Banking App",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
      category: "Mobile Design",
    },
    {
      title: "Brand Identity",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
      category: "Branding",
    },
    {
      title: "Dashboard Analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      category: "UI Design",
    },
  ];

  const reviews = [
    {
      client: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5,
      comment: "Excellent work! Very professional and delivered on time.",
      project: "Website Development",
      date: "March 2024",
    },
    {
      client: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5,
      comment: "Amazing designer! Exceeded all expectations.",
      project: "Mobile App Design",
      date: "March 2024",
    },
    {
      client: "Emma Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      rating: 5,
      comment: "Great communication and fantastic results!",
      project: "Logo Design",
      date: "February 2024",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />

      <div className="ml-64 flex-1">
        <TopBar userName="Kitso Sejake" />

        <main className="p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Profile Header */}
            <Card className="border-border/60 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kitso Sejake" />
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h1 className="text-2xl font-bold text-foreground">
                          Kitso Sejake
                        </h1>
                        <p className="text-muted-foreground">
                          Full-Stack Developer & UI/UX Designer
                        </p>
                        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>San Francisco, CA</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>5 years experience</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="gap-2">
                          <Share2 className="h-4 w-4" />
                          Share
                        </Button>
                        <Button className="gap-2 bg-gradient-primary hover:opacity-90">
                          <Edit className="h-4 w-4" />
                          Edit Profile
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="rounded-lg border border-border p-3">
                        <div className="flex items-center gap-2 text-success">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-xl font-bold">4.9</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Rating (142 reviews)
                        </p>
                      </div>
                      <div className="rounded-lg border border-border p-3">
                        <p className="text-xl font-bold text-foreground">156</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Completed Projects
                        </p>
                      </div>
                      <div className="rounded-lg border border-border p-3">
                        <p className="text-xl font-bold text-foreground">96%</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Success Rate
                        </p>
                      </div>
                      <div className="rounded-lg border border-border p-3">
                        <p className="text-xl font-bold text-foreground">
                          $45K
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Total Earned
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Left Column */}
              <div className="space-y-6 lg:col-span-2">
                {/* About */}
                <Card className="border-border/60 shadow-soft">
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Passionate full-stack developer and UI/UX designer with 5+
                      years of experience creating beautiful, functional web and
                      mobile applications. Specialized in React, Node.js, and
                      modern design principles. I love turning complex problems
                      into simple, elegant solutions.
                    </p>
                    <div>
                      <h3 className="mb-3 font-semibold text-foreground">
                        Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Portfolio */}
                <Card className="border-border/60 shadow-soft">
                  <CardHeader>
                    <CardTitle>Portfolio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {portfolio.map((item, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-lg border border-border transition-all hover:shadow-medium"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                            <div className="text-white">
                              <p className="font-semibold">{item.title}</p>
                              <p className="text-sm text-white/80">
                                {item.category}
                              </p>
                            </div>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="absolute right-2 top-2 text-white hover:bg-white/20"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Reviews */}
                <Card className="border-border/60 shadow-soft">
                  <CardHeader>
                    <CardTitle>Client Reviews</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {reviews.map((review, index) => (
                      <div
                        key={index}
                        className="border-b border-border pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>{review.client[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-medium text-foreground">
                                  {review.client}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {review.project}
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: review.rating }).map(
                                  (_, i) => (
                                    <Star
                                      key={i}
                                      className="h-3.5 w-3.5 fill-warning text-warning"
                                    />
                                  )
                                )}
                              </div>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">
                              {review.comment}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {review.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Contact Info */}
                <Card className="border-border/60 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-base">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Kitso Sejake@workhub.com
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        +1 (555) 123-4567
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Kitso Sejakerivera.dev
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Badges */}
                <Card className="border-border/60 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-base">Achievements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 rounded-lg border border-border p-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Top Rated</p>
                        <p className="text-xs text-muted-foreground">
                          Earned 2024-02
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-border p-3">
                      <div className="rounded-lg bg-success/10 p-2">
                        <Award className="h-5 w-5 text-success" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Rising Talent</p>
                        <p className="text-xs text-muted-foreground">
                          Earned 2024-01
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Activity */}
                <Card className="border-border/60 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-base">Activity Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Response Time
                        </span>
                        <span className="font-medium">&lt; 1 hour</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          On-Time Delivery
                        </span>
                        <span className="font-medium">98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Client Satisfaction
                        </span>
                        <span className="font-medium">96%</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;

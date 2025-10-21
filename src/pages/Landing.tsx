import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase, Award, TrendingUp, Users, Shield, Sparkles, Star, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CubeCluster from "@/components/ui/CubeCluster";
const Landing = () => {
  const [expandedStat, setExpandedStat] = useState<string | undefined>("projects");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-foreground" />
            <span className="font-bold text-2xl">TalentHub</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="outline" className="rounded-full border-2">Let's Talk</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-background text-foreground border border-border/60 hover:bg-background/80 rounded-full px-4 py-1.5">
                Freelance Platform
              </Badge>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
                <span className="block">Careers That</span>
                <span className="block">Spark{" "}</span>
                <span className="text-muted-foreground/60">Success</span>{" "}
                <span className="block">and Growth</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                From talented freelancers to ambitious projects, we connect professionals with opportunities. 
                Let's build something extraordinary—together.
              </p>
              <div className="flex items-center gap-6">
                <Link to="/auth">
                  <Button size="lg" className="rounded-full px-8 h-14 text-base bg-foreground text-background hover:bg-foreground/90">
                    Let's Work Together?
                  </Button>
                </Link>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-primary border-2 border-background" />
                    <div className="w-10 h-10 rounded-full bg-accent border-2 border-background" />
                    <div className="w-10 h-10 rounded-full bg-success border-2 border-background" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">120K+</div>
                    <div className="text-muted-foreground">Active users</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Services Sphere */}
            <div className="relative h-[600px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
              
                   <CubeCluster />
                 
              
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by freelancers and clients worldwide
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-40">
            {["Upwork", "Fiverr", "Toptal", "Freelancer", "Behance", "Dribbble"].map((brand) => (
              <div key={brand} className="text-center font-semibold text-lg text-foreground">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-purple-50/20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <Badge className="bg-background text-foreground border border-border/60 hover:bg-background/80 rounded-full px-4 py-1.5 mb-4">
              About us 🚀
            </Badge>
            <div className="grid lg:grid-cols-2 gap-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Our Approach is Holistic and Collaborative.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's connecting freelancers with dream projects, mentoring emerging talent, 
                or helping businesses find the perfect match, our platform is designed to empower 
                every step of your digital career journey.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Video/Image placeholder */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 aspect-video flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="relative z-10 w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[16px] border-l-foreground border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
              </div>
            </div>

            {/* Stats Accordion */}
            <div className="space-y-4">
              <Accordion type="single" collapsible value={expandedStat} onValueChange={setExpandedStat}>
                <AccordionItem value="projects" className="border rounded-2xl px-6 bg-white shadow-soft">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">1K+ Projects Done</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    Welcome to TalentHub where success stories begin. We are more than a freelance platform; 
                    we are your career partners connecting talent with opportunity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="clients" className="border rounded-2xl px-6 bg-white shadow-soft">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">5K+ Happy Clients</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    Our community of satisfied clients continues to grow, with businesses of all sizes 
                    finding the perfect talent match for their projects.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="countries" className="border rounded-2xl px-6 bg-white shadow-soft">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">30+ Countries</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    A truly global platform connecting talent and opportunities across continents, 
                    breaking geographical barriers in the digital economy.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-purple-50/20">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <Badge className="bg-background text-foreground border border-border/60 hover:bg-background/80 rounded-full px-4 py-1.5 mb-4">
              Services 🎯
            </Badge>
            <div className="grid lg:grid-cols-2 gap-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                We Craft Services That Turn Talents Into Success Stories
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We help professionals grow through strategic connections and digital opportunities. 
                From gig marketplace to verified badges, our services are crafted to elevate your 
                career and leave a lasting impression.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Digital Badges",
                description: "Earn verified credentials that showcase your skills and achievements to potential clients."
              },
              {
                icon: Briefcase,
                title: "Gig Marketplace",
                description: "Browse opportunities and connect with clients looking for your unique expertise."
              },
              {
                icon: Users,
                title: "Mentorship",
                description: "Connect with experienced professionals who can guide your career growth journey."
              },
              {
                icon: TrendingUp,
                title: "Analytics",
                description: "Track your performance, income, and career trajectory with detailed insights and reports."
              },
            ].map((service, index) => (
              <Card key={index} className="border-2 hover:border-foreground/20 transition-all hover:shadow-lg bg-white rounded-3xl">
                <CardHeader className="space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-foreground flex items-center justify-center">
                    <service.icon className="h-10 w-10 text-background" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Work Section */}
      <section id="work" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <Badge className="bg-background text-foreground border border-border/60 hover:bg-background/80 rounded-full px-4 py-1.5 mb-4">
              Success Stories 💼
            </Badge>
            <div className="grid lg:grid-cols-2 gap-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Explore Our Amazing Community
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe great work comes from clear collaboration. Our platform is designed to connect 
                and empower. Here's a glimpse into the success stories happening every day.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Web Developer Success", category: "Development", image: "gradient-to-br from-blue-400 to-purple-500" },
              { title: "Designer Portfolio", category: "Design", image: "gradient-to-br from-purple-400 to-pink-500" },
              { title: "Marketing Campaign", category: "Marketing", image: "gradient-to-br from-orange-400 to-red-500" },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-foreground/20 transition-all hover:shadow-lg group cursor-pointer">
                <div className={`h-64 bg-${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 group-hover:opacity-80 transition-opacity" />
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">2025 • {project.category}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Button variant="link" className="p-0 h-auto text-foreground font-semibold">
                    More Info <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-purple-50/20">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <Badge className="bg-background text-foreground border border-border/60 hover:bg-background/80 rounded-full px-4 py-1.5 mb-4">
              Testimonials ⭐
            </Badge>
            <div className="grid lg:grid-cols-2 gap-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Praise from our community
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our services help you build successful digital careers. Stay ahead of the curve with 
                opportunities, mentorship, and growth tools that make a difference.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                rating: 5,
                text: "This platform has been a game-changer! I used to struggle finding quality clients, but now I'm booked months in advance with projects I love.",
                name: "Sarah Johnson",
                role: "UI/UX Designer"
              },
              {
                rating: 5,
                text: "I love how easy this platform is to use. It's completely changed the way I manage my freelance career and helps me track my growth.",
                name: "Michael Chen",
                role: "Full Stack Developer"
              },
              {
                rating: 4,
                text: "The mentorship program helped me level up my skills and confidence. Now I'm taking on bigger projects and earning more than ever.",
                name: "Emma Davis",
                role: "Content Writer"
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "fill-foreground text-foreground" : "text-muted-foreground/30"}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Ready to Launch Your Digital Career?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of freelancers and mentors who are building successful careers on TalentHub.
            </p>
            <Link to="/auth">
              <Button size="lg" className="rounded-full px-12 h-14 text-base bg-foreground text-background hover:bg-foreground/90">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-purple-50/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-foreground" />
              <span className="font-bold text-xl">TalentHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 TalentHub. Building successful digital careers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

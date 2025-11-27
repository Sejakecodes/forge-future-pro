import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"; import { Badge } from "@/components/ui/badge"; // assume you have an index export for shadcn pieces
import {
  ArrowRight,
  Search,
  MapPin,
  Briefcase,
  Star,
  Users,
  Sparkles,
} from "lucide-react";
import { useScroll, useTransform, useSpring} from "framer-motion";
import { useRef } from "react"
// Local image uploaded by the user (developer instruction)
const heroImg = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61";

const brands = [
  { name: "Pinterest", size: "60x24" },
  { name: "LinkedIn", size: "60x24" },
  { name: "Behance", size: "60x24" },
  { name: "Upwork", size: "60x24" },
];

export default function LandingFull() {
 const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth transitions
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.55]);
  const x = useTransform(scrollYProgress, [0, 0.35], ["0%", "-32%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.35], ["0px", "28px"]);
  const blur = useTransform(scrollYProgress, [0, 0.35], ["0px", "6px"]);
  const opacity = useTransform(scrollYProgress, [0.35, 0.45], [1, 0]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-purple-50/30 text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-7 w-7 text-foreground" />
            <span className="font-bold text-xl md:text-2xl">JobFine</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-foreground">Home</a>
            <a href="#jobs" className="hover:text-foreground">Jobs</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#testimonials" className="hover:text-foreground">Testimonials</a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button className="rounded-full px-6 h-11" variant="default">Sign in</Button>
            </Link>
            <Link to="/auth" className="hidden md:inline-block">
              <Button className="rounded-full px-6 h-11 bg-foreground text-background">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO - large two column layout like the image */}
      <header id="home" className="pt-28 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-6 space-y-6">
              <Badge className="bg-background border border-border/60 rounded-full px-4 py-1">Why choose us</Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Many Top Companies
                <br /> Posted Here
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Discover opportunities from leading companies across various industries. Our platform hosts job postings from top-tier organizations, giving freelancers access to high-quality projects and reputable clients.
              </p>

              <div className="flex items-center gap-4">
                <Link to="/jobs">
                  <Button size="lg" className="rounded-full px-8 h-14">Explore Opening Jobs</Button>
                </Link>

                <div className="ml-4 hidden md:flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe" className="w-10 h-10 rounded-full object-cover border-2" />
                    <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" className="w-10 h-10 rounded-full object-cover border-2" />
                    <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39" className="w-10 h-10 rounded-full object-cover border-2" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">8M+</div>
                    <div className="text-muted-foreground">Matches Made</div>
                  </div>
                </div>
              </div>

              {/* Floating search card like image */}
              <div className="mt-8 relative w-full max-w-md">
                <div className="absolute -top-6 right-0 w-[420px] shadow-xl rounded-2xl bg-white p-4 border">
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-3">
                      <img src={heroImg} alt="company" className="w-10 h-10 rounded-md object-cover" />
                      <div>
                        <div className="font-semibold">Pinterest</div>
                        <div className="text-sm text-muted-foreground">$50.00/hr • Remote</div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">Apply</Button>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-muted-foreground">
                    <div className="col-span-2">Product Designer • Remote</div>
                    <div className="text-right">3h ago</div>
                  </div>
                </div>

                <div className="h-20" />
              </div>
            </div>

            {/* Right: image and cards */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-neutral-100 to-white">
                <img src={heroImg} alt="hero" className="w-full h-[420px] object-cover" />
                <div className="p-6 -mt-12">
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Company</div>
                        <div className="font-semibold">Pinterest</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Salary</div>
                        <div className="font-semibold">$50/hr</div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <Button variant="outline" className="rounded-full">Full time</Button>
                      <Button variant="ghost" className="rounded-full">Remote</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* small floating cards stack */}
              <div className="absolute left-6 top-6 w-56 shadow-lg rounded-2xl bg-white p-3 border">
                <div className="text-xs text-muted-foreground">Featured</div>
                <div className="font-semibold">LinkedIn • UX Writer</div>
                <div className="text-xs text-muted-foreground mt-2">$40/hr • Remote</div>
              </div>

              <div className="absolute right-6 bottom-6 w-72 shadow-lg rounded-2xl bg-white p-4 border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Top Company</div>
                    <div className="font-semibold">Behance</div>
                  </div>
                  <div className="text-green-600 font-semibold">Remote</div>
                </div>

                <div className="mt-3 text-sm text-muted-foreground">Design • 2d ago</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* How it works */}
      <section id="how" className="py-14 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <h3 className="text-3xl font-bold">Meet with Jobfine's AI Recruiter Now</h3>
              <p className="mt-4 text-lg text-white/90 max-w-xl">Take the next step in your career by meeting with Jobfine's cutting-edge AI recruiter. It helps match your skills to jobs faster and more accurately.</p>
              <div className="mt-6">
                <Button className="rounded-full px-6 h-12 bg-white text-foreground">Discover More</Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 text-foreground shadow-md">
                <div className="text-sm text-muted-foreground">Your Qualified Candidates Review List</div>
                <div className="mt-4 grid gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary" />
                      <div>
                        <div className="font-semibold">Kay Holme</div>
                        <div className="text-xs text-muted-foreground">Product Designer</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">Interviewed</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent" />
                      <div>
                        <div className="font-semibold">James Moran</div>
                        <div className="text-xs text-muted-foreground">Full Stack</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">Shortlisted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job of the day / Marketplace */}
      <section id="jobs" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h4 className="text-3xl font-bold">Check Job of The Day</h4>
              <p className="text-muted-foreground">The digital marketing solution provider for Ford Dealers</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">See all</Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="p-4 rounded-2xl border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">{i}. Company</div>
                      <div className="font-semibold">Purchasing Staff</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Remote</div>
                      <div className="font-semibold">$24/hr</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="text-sm text-muted-foreground">3d ago • Full time</div>
                  <div className="mt-4 flex items-center justify-between">
                    <Button variant="link">Apply <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    <div className="text-xs text-muted-foreground">45 applicants</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US – Parallax Split Scroll Section */}
 


 


    <section ref={sectionRef} className="relative w-full mt-20">

      {/* === FULL WIDTH VIDEO (but INSIDE the section!) === */}
      <motion.div
        style={{
          scale,
          x,
          borderRadius,
          filter: blur,
          opacity,
        }}
        className="
          w-full
          h-[80vh]
          overflow-hidden
          sticky top-0
          z-10
          bg-black
        "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="https://www.pexels.com/download/video/34883472/"
        />
      </motion.div>

      {/* Main Split Content */}
      <div className="relative grid lg:grid-cols-2 min-h-[160vh] mt-10">

        {/* LEFT PANEL (This is where video ends up) */}
        <div className="sticky top-0 h-screen hidden lg:block rounded-r-3xl overflow-hidden shadow-xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="https://www.pexels.com/download/video/34883472/"
          />
        </div>

        {/* RIGHT PANEL CONTENT */}
        <div className="flex flex-col justify-center px-8 py-20 space-y-24">

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-4xl font-extrabold">Why Choose JobFine?</h2>
            <p className="text-muted-foreground text-lg mt-4">
              We match freelancers with top companies globally using AI-driven matching.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ amount: 0.3 }}
          >
            <h3 className="text-3xl font-bold">AI Talent Matching</h3>
            <p className="text-muted-foreground text-lg mt-3">
              Our AI scans your experience to instantly connect you with opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            <h3 className="text-3xl font-bold">Trusted by Leading Brands</h3>
            <p className="text-muted-foreground text-lg mt-3">
              Work with global brands and top startups.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ amount: 0.3 }}
          >
            <h3 className="text-3xl font-bold">Fast, Secure, Verified</h3>
            <p className="text-muted-foreground text-lg mt-3">
              Secure contracts, verified clients, and guaranteed payments.
            </p>
          </motion.div>

        </div>
      </div>
    </section>



      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-purple-50/20">
        <div className="container mx-auto px-6">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <Badge className="bg-background border border-border/60 rounded-full px-4 py-1">Testimony</Badge>
            <h3 className="text-3xl font-bold mt-4">Quotes from Our Customers</h3>
            <p className="text-muted-foreground mt-2">The digital marketing solution provider for Ford Dealers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              text: "As a freelancer, I've tried multiple platforms, but none have been as efficient as this one.",
              name: "Robert Fox",
              role: "Lead Marketer"
            }, {
              text: "Great UX and helpful recruiters — highly recommended.",
              name: "Jane Doe",
              role: "Product Manager"
            }, {
              text: "The payment process is secure and straightforward.",
              name: "Samuel L",
              role: "Developer"
            }].map((t, idx) => (
              <Card key={idx} className="p-6 rounded-2xl border">
                <CardContent>
                  <div className="text-lg italic">“{t.text}”</div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6" />
              <div className="font-bold">JobFine</div>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 JobFine. All rights reserved.</div>
            <div className="flex items-center gap-2">
              {brands.map((b) => (
                <div key={b.name} className="text-xs text-muted-foreground">{b.name}</div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

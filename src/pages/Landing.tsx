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
import ScrollReveal from '@/components/layout/ScrollReveal';
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
   const wrapperRef = useRef(null);


 const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Full-width video transforms
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.55]);
  const x = useTransform(scrollYProgress, [0, 0.35], ["0%", "-32%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.35], ["0px", "28px"]);
  const blur = useTransform(scrollYProgress, [0, 0.35], ["0px", "6px"]);

  // FULL WIDTH video opacity (fade out)
  const videoOpacity = useTransform(scrollYProgress, [0.30, 0.45], [1, 0]);

  // LEFT PANEL video opacity (fade in)
  const leftPanelOpacity = useTransform(scrollYProgress, [0.30, 0.45], [0, 1]);

  
  // For upward stacking motion
// Scenes sliding IN over each other
  const scene1Y = useTransform(scrollYProgress, [0, 0.33], ["0%", "-20%"]);
  const scene2Y = useTransform(scrollYProgress, [0.33, 0.66], ["100%", "0%"]);
  const scene3Y = useTransform(scrollYProgress, [0.66, 1], ["100%", "0%"]);
  return (
    <div className="min-h-screen container bg-gradient-to-b from-neutral-50 via-white to-purple-50/30 text-foreground ">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            
            <span className="font-bold text-xl md:text-2xl"></span>
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
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Many Top Companies Posted Here
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
              <div className="mt-1 relative w-full max-w-md">
                <div className="absolute top-0 left-0 right-0 w-[420px] shadow-xl rounded-2xl bg-white p-4 border">
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-3">
                      <img src={heroImg} alt="company" className="w-10 h-10 rounded-md object-cover" />
                      <div>
                        <div className="font-semibold">Pinterest</div>
                        <div className="text-sm text-muted-foreground">R50.00/hr • Remote</div>
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
                        <div className="font-semibold">R50/hr</div>
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
                <div className="text-xs text-muted-foreground mt-2">R40/hr • Remote</div>
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
                      <div className="font-semibold">R24/hr</div>
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

      {/* === FULL WIDTH VIDEO === */}
      <motion.div
        style={{
          scale,
          x,
          borderRadius,
          filter: `blur(${blur.get()})`,
          opacity: videoOpacity,
        }}
        className="w-full h-[80vh] overflow-hidden sticky top-0 z-20 bg-black"
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

      {/* === SPLIT CONTENT AREA === */}
      <div className="relative grid lg:grid-cols-2 min-h-[160vh] mt-10">

        {/* LEFT PANEL VIDEO — FADES IN */}
        <motion.div
          style={{ opacity: leftPanelOpacity }}
          className="sticky top-0 h-screen hidden lg:block rounded-r-3xl overflow-hidden shadow-xl"
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

        {/* RIGHT PANEL CONTENT */}
        <div className="flex flex-col justify-center px-8 py-20 space-y-24">

         <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ amount: 0.3 }} > <h2 className="text-4xl font-extrabold">Why Choose JobFine?</h2> <p className="text-muted-foreground text-lg mt-4"> We match freelancers with top companies globally using AI-driven matching. </p> </motion.div> <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ amount: 0.3 }} > <h3 className="text-3xl font-bold">AI Talent Matching</h3> <p className="text-muted-foreground text-lg mt-3"> Our AI scans your experience to instantly connect you with opportunities. </p> </motion.div> <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ amount: 0.3 }} > <h3 className="text-3xl font-bold">Trusted by Leading Brands</h3> <p className="text-muted-foreground text-lg mt-3"> Work with global brands and top startups. </p> </motion.div> <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ amount: 0.3 }} > <h3 className="text-3xl font-bold">Fast, Secure, Verified</h3> <p className="text-muted-foreground text-lg mt-3"> Secure contracts, verified clients, and guaranteed payments. </p> </motion.div>

          {/* ...other panel items ... */}

        </div>
      </div>
    </section>

   <section id="jobs" className="py-50 bg-white">
     <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>

</section>

{/* === ULTRA CINEMATIC STACKED SCROLL SECTION === */}
<section ref={wrapperRef} className="relative w-full h-[300vh]">

      {/* === SCENE 1 (BOTTOM) === */}
      <motion.div
        style={{ y: scene1Y }}
        className="sticky top-0 h-screen grid lg:grid-cols-2 px-20 
                   items-center bg-white z-10"
      >
        <div>
          <h2 className="text-5xl font-bold mb-6">Build Your Team Faster</h2>
          <p className="text-lg text-muted-foreground">
            Elite freelancers with AI-powered matching.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          className="h-[450px] w-full object-cover  shadow-2xl"
        />
      </motion.div>

      {/* === SCENE 2 (MIDDLE, should cover Scene 1) === */}
      <motion.div
        style={{ y: scene2Y }}
        className="sticky top-0 h-screen grid lg:grid-cols-2 px-20 
                   items-center bg-white z-20"
      >
        <div>
          <h2 className="text-5xl font-bold mb-6">Global Reach</h2>
          <p className="text-lg text-muted-foreground">
            Verified international talent with seamless onboarding.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          className="h-[450px] w-full object-cover  shadow-2xl"
        />
      </motion.div>

      {/* === SCENE 3 (TOP — covers Scene 2) === */}
      <motion.div
        style={{ y: scene3Y }}
        className="sticky top-0 h-screen grid lg:grid-cols-2 px-20
                   items-center bg-white z-30"
      >
        <div>
          <h2 className="text-5xl font-bold mb-6">Modern Workflow</h2>
          <p className="text-lg text-muted-foreground">
            Faster collaboration. Smarter hiring. Better teams.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          className="h-[450px] w-full object-cover  shadow-2xl"
        />
      </motion.div>

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

 {/* Modern Footer */}
<footer className="bg-gray-50 border-t mt-20">
  {/* Top Gradient Divider */}
  <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

  <div className="container mx-auto px-6 py-16">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-3">
          <Sparkles className="h-7 w-7 text-purple-600" />
          <h3 className="text-2xl font-extrabold tracking-tight">
            JobFine
          </h3>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Empowering freelancers and companies with smart AI-driven talent matching.
        </p>

        {/* Social Icons */}
       
      </div>

      {/* Links */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Platform</h4>
        <ul className="space-y-3 text-muted-foreground text-sm">
          <li className="hover:text-black transition cursor-pointer">Browse Freelancers</li>
          <li className="hover:text-black transition cursor-pointer">Find Work</li>
          <li className="hover:text-black transition cursor-pointer">Categories</li>
          <li className="hover:text-black transition cursor-pointer">Pricing</li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Support</h4>
        <ul className="space-y-3 text-muted-foreground text-sm">
          <li className="hover:text-black transition cursor-pointer">Help Center</li>
          <li className="hover:text-black transition cursor-pointer">Safety Guidelines</li>
          <li className="hover:text-black transition cursor-pointer">Report an Issue</li>
          <li className="hover:text-black transition cursor-pointer">FAQ</li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Company</h4>
        <ul className="space-y-3 text-muted-foreground text-sm">
          <li className="hover:text-black transition cursor-pointer">About Us</li>
          <li className="hover:text-black transition cursor-pointer">Our Mission</li>
          <li className="hover:text-black transition cursor-pointer">Careers</li>
          <li className="hover:text-black transition cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t">
    <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
      <p>© 2025 JobFine. All rights reserved.</p>

      <div className="flex items-center gap-4 mt-3 md:mt-0">
        <span className="cursor-pointer hover:text-black transition">Privacy Policy</span>
        <span className="cursor-pointer hover:text-black transition">Terms of Service</span>
        <span className="cursor-pointer hover:text-black transition">Cookies</span>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

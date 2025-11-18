import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Messages from "./pages/Messages";
import Projects from "./pages/Projects";
import Wallet from "./pages/Wallet";
import Reviews from "./pages/Reviews";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import PostJob from "./pages/PostJob";
import JobApplications from "./pages/JobApplications";
import ReviewFreelancer from "./pages/ReviewFreelancer";
import NotFound from "./pages/NotFound";
import MentorsDashboard from "./pages/MentorDashboard";
import ClientsDashboard from "./pages/ClientDashboard";
import JobDetails from "./pages/JobDetails";
import CommunityDesign from "./pages/CommunityDesign";
import Resources from "./pages/EntreprenuelResources";
import Feed from "./pages/Feed";
import Badges from "./pages/badge";
import Pricing  from "./pages/Pricingguide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/job-applications" element={<JobApplications />} />
          <Route path="/review-freelancer" element={<ReviewFreelancer />} />
          <Route path="/Mentor" element={<MentorsDashboard />} />
          <Route path="/client" element={<ClientsDashboard />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/Community" element={<CommunityDesign />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Feed" element={<Feed />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

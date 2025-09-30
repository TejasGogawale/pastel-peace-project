import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/dashboard/UserDashboard";
import CounsellorDashboard from "./pages/dashboard/CounsellorDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import NotFound from "./pages/NotFound";
// User Dashboard Sub-pages
import MoodAnalytics from "./pages/dashboard/user/MoodAnalytics";
import AICompanion from "./pages/dashboard/user/AICompanion";
import CounsellorSection from "./pages/dashboard/user/CounsellorSection";
import PeerGroup from "./pages/dashboard/user/PeerGroup";
import Wellness from "./pages/dashboard/user/Wellness";
// Counsellor Dashboard Sub-pages
import Patients from "./pages/dashboard/counsellor/Patients";
import Analytics from "./pages/dashboard/counsellor/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* User Dashboard Routes */}
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/user/mood-analytics" element={<MoodAnalytics />} />
          <Route path="/dashboard/user/ai-companion" element={<AICompanion />} />
          <Route path="/dashboard/user/counsellor" element={<CounsellorSection />} />
          <Route path="/dashboard/user/peer-group" element={<PeerGroup />} />
          <Route path="/dashboard/user/wellness" element={<Wellness />} />
          
          {/* Counsellor Dashboard Routes */}
          <Route path="/dashboard/counsellor" element={<CounsellorDashboard />} />
          <Route path="/dashboard/counsellor/patients" element={<Patients />} />
          <Route path="/dashboard/counsellor/analytics" element={<Analytics />} />
          
          {/* Admin Dashboard Routes */}
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

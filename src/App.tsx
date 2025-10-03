import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import UserDashboard from "./pages/dashboard/UserDashboard";
import CounsellorDashboard from "./pages/dashboard/CounsellorDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import NotFound from "./pages/NotFound";
// User Dashboard Sub-pages
import MoodAnalytics from "./pages/dashboard/user/MoodAnalytics";
import AICompanion from "./pages/dashboard/user/AICompanion";
import Counsellors from "./pages/dashboard/user/Counsellors";
import PeerConnections from "./pages/dashboard/user/PeerConnections";
import Rewards from "./pages/dashboard/user/Rewards";
import Wellness from "./pages/dashboard/user/Wellness";
// Counsellor Dashboard Sub-pages
import Patients from "./pages/dashboard/counsellor/Patients";
import PatientDashboard from "./pages/dashboard/counsellor/PatientDashboard";
import Analytics from "./pages/dashboard/counsellor/Analytics";
import Groups from "./pages/dashboard/counsellor/Groups";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
          
          {/* User Dashboard Routes */}
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/user/mood-analytics" element={<MoodAnalytics />} />
          <Route path="/dashboard/user/ai-companion" element={<AICompanion />} />
          <Route path="/dashboard/user/counsellors" element={<Counsellors />} />
          <Route path="/dashboard/user/peer-connections" element={<PeerConnections />} />
          <Route path="/dashboard/user/wellness" element={<Wellness />} />
          <Route path="/dashboard/user/rewards" element={<Rewards />} />
          
          {/* Counsellor Dashboard Routes */}
          <Route path="/dashboard/counsellor" element={<CounsellorDashboard />} />
          <Route path="/dashboard/counsellor/patients" element={<Patients />} />
          <Route path="/dashboard/counsellor/patient-dashboard/:id" element={<PatientDashboard />} />
          <Route path="/dashboard/counsellor/analytics" element={<Analytics />} />
          <Route path="/dashboard/counsellor/groups" element={<Groups />} />
          
          {/* Admin Dashboard Routes */}
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

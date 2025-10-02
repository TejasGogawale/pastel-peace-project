import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import MoodCheckIn from "@/components/dashboard/MoodCheckIn";
import EnhancedMoodAnalytics from "@/components/dashboard/EnhancedMoodAnalytics";

const MoodAnalytics = () => {
  const { user } = useUser();

  return (
    <DashboardLayout role="user">
      <div className="p-8 gradient-calm min-h-screen">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
              <TrendingUp className="w-10 h-10 text-primary" />
              Mood Analytics
            </h1>
            <p className="text-muted-foreground text-lg">Track your mental wellness journey over time, {user?.name}</p>
          </div>

          <MoodCheckIn />
          <EnhancedMoodAnalytics />
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default MoodAnalytics;

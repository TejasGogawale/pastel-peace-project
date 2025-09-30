import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import EnhancedMoodAnalytics from "@/components/dashboard/EnhancedMoodAnalytics";
import { TrendingUp } from "lucide-react";

const MoodAnalytics = () => {
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
            <p className="text-muted-foreground text-lg">Track your mental wellness journey over time</p>
          </div>

          <EnhancedMoodAnalytics />
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default MoodAnalytics;

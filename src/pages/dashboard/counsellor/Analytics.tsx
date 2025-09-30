import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import PatientAnalytics from "@/components/dashboard/PatientAnalytics";
import { TrendingUp } from "lucide-react";

const Analytics = () => {
  return (
    <DashboardLayout role="counsellor">
      <div className="p-8 gradient-calm min-h-screen">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
              <TrendingUp className="w-10 h-10 text-primary" />
              Patient Analytics
            </h1>
            <p className="text-muted-foreground text-lg">Comprehensive insights and recommendations</p>
          </div>

          <PatientAnalytics />
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;

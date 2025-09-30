import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import UpcomingMeets from "@/components/dashboard/UpcomingMeets";
import SuggestedCounsellors from "@/components/dashboard/SuggestedCounsellors";
import { Heart } from "lucide-react";

const CounsellorSection = () => {
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
              <Heart className="w-10 h-10 text-primary" />
              Counsellor Support
            </h1>
            <p className="text-muted-foreground text-lg">Connect with professional counsellors</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <UpcomingMeets />
            <SuggestedCounsellors />
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default CounsellorSection;

import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import WellnessRecommendations from "@/components/dashboard/WellnessRecommendations";
import { Music } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

const Wellness = () => {
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
              <Music className="w-10 h-10 text-primary" />
              Wellness & Relaxation
            </h1>
            <p className="text-muted-foreground text-lg">Discover personalized wellness activities, {user?.name}</p>
          </div>

          <WellnessRecommendations />
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Wellness;

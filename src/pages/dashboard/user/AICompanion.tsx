import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import AIChatbot from "@/components/dashboard/AIChatbot";
import { MessageCircle } from "lucide-react";

const AICompanion = () => {
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
              <MessageCircle className="w-10 h-10 text-primary" />
              AI Companion
            </h1>
            <p className="text-muted-foreground text-lg">Your supportive companion is here to listen</p>
          </div>

          <AIChatbot />
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default AICompanion;

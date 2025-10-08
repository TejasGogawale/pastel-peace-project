import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Activity, Droplets, Footprints, Flame, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const SmartwatchDashboard = () => {
  // Simulated smartwatch data
  const metrics = {
    steps: 6842,
    stepsGoal: 10000,
    heartRate: 72,
    heartRateStatus: "Normal",
    bloodPressure: "120/80",
    bpStatus: "Healthy",
    o2Level: 98,
    calories: 342,
    caloriesGoal: 500,
    distance: 5.2,
    activeMinutes: 45,
  };

  return (
    <Card className="p-6 shadow-soft border-border bg-card">
      <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
        <Activity className="w-5 h-5 text-primary" />
        Health Metrics Dashboard
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Steps */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-5 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Footprints className="w-5 h-5 text-accent" />
                <span className="font-medium text-foreground">Steps</span>
              </div>
              <span className="text-2xl font-bold text-foreground">{metrics.steps.toLocaleString()}</span>
            </div>
            <Progress value={(metrics.steps / metrics.stepsGoal) * 100} className="h-2 mb-2" />
            <p className="text-xs text-muted-foreground">Goal: {metrics.stepsGoal.toLocaleString()}</p>
          </Card>
        </motion.div>

        {/* Heart Rate */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-5 bg-gradient-to-br from-peach/5 to-highlight/5 border-peach/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-peach-foreground" />
                <span className="font-medium text-foreground">Heart Rate</span>
              </div>
              <span className="text-2xl font-bold text-foreground">{metrics.heartRate}</span>
            </div>
            <p className="text-sm text-muted-foreground">bpm • {metrics.heartRateStatus}</p>
          </Card>
        </motion.div>

        {/* Blood Pressure */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-5 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Blood Pressure</span>
              </div>
              <span className="text-2xl font-bold text-foreground">{metrics.bloodPressure}</span>
            </div>
            <p className="text-sm text-muted-foreground">mmHg • {metrics.bpStatus}</p>
          </Card>
        </motion.div>

        {/* Oxygen Level */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-5 bg-gradient-to-br from-highlight/5 to-accent/5 border-highlight/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-highlight" />
                <span className="font-medium text-foreground">O2 Level</span>
              </div>
              <span className="text-2xl font-bold text-foreground">{metrics.o2Level}%</span>
            </div>
            <p className="text-sm text-muted-foreground">Oxygen Saturation</p>
          </Card>
        </motion.div>

        {/* Calories */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-5 bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-highlight" />
                <span className="font-medium text-foreground">Calories</span>
              </div>
              <span className="text-2xl font-bold text-foreground">{metrics.calories}</span>
            </div>
            <Progress value={(metrics.calories / metrics.caloriesGoal) * 100} className="h-2 mb-2" />
            <p className="text-xs text-muted-foreground">Goal: {metrics.caloriesGoal} kcal</p>
          </Card>
        </motion.div>

        {/* Distance & Active Minutes */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-5 bg-gradient-to-br from-accent/5 to-highlight/5 border-accent/20">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="font-medium text-foreground">Activity</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Distance</span>
                <span className="font-semibold text-foreground">{metrics.distance} km</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Active Minutes</span>
                <span className="font-semibold text-foreground">{metrics.activeMinutes} min</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Card>
  );
};

export default SmartwatchDashboard;

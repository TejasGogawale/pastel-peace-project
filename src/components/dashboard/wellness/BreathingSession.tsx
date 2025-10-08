import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wind, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface BreathingSessionProps {
  open: boolean;
  onClose: () => void;
  onComplete: (points: number) => void;
}

const BreathingSession = ({ open, onClose, onComplete }: BreathingSessionProps) => {
  const [phase, setPhase] = useState<"ready" | "inhale" | "hold1" | "exhale" | "hold2" | "complete">("ready");
  const [cycle, setCycle] = useState(0);
  const [counter, setCounter] = useState(4);
  const [heartRate, setHeartRate] = useState(75);

  const totalCycles = 4;

  useEffect(() => {
    if (phase === "ready" || phase === "complete") return;

    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev > 1) return prev - 1;
        
        // Move to next phase
        if (phase === "inhale") {
          setPhase("hold1");
          return 4;
        } else if (phase === "hold1") {
          setPhase("exhale");
          return 4;
        } else if (phase === "exhale") {
          setPhase("hold2");
          return 4;
        } else if (phase === "hold2") {
          const nextCycle = cycle + 1;
          if (nextCycle >= totalCycles) {
            setPhase("complete");
            return 0;
          }
          setCycle(nextCycle);
          setPhase("inhale");
          return 4;
        }
        return 4;
      });

      // Simulate heart rate changing
      setHeartRate((prev) => {
        if (phase === "inhale" || phase === "hold1") return Math.max(60, prev - 1);
        if (phase === "exhale" || phase === "hold2") return Math.max(58, prev - 0.5);
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, cycle]);

  const handleStart = () => {
    setPhase("inhale");
    setCycle(0);
    setCounter(4);
    setHeartRate(75);
  };

  const handleFinish = () => {
    onComplete(12);
    onClose();
    setPhase("ready");
    setCycle(0);
    setCounter(4);
    setHeartRate(75);
  };

  const getPhaseText = () => {
    switch (phase) {
      case "inhale": return "Breathe In";
      case "hold1": return "Hold";
      case "exhale": return "Breathe Out";
      case "hold2": return "Hold";
      default: return "";
    }
  };

  const getCircleScale = () => {
    if (phase === "inhale") return 1.5;
    if (phase === "exhale") return 0.8;
    return 1;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-foreground">Box Breathing Exercise</DialogTitle>
        </DialogHeader>

        {phase === "ready" && (
          <div className="space-y-6 py-8">
            <div className="text-center space-y-4">
              <Wind className="w-16 h-16 text-primary mx-auto" />
              <h3 className="text-xl font-semibold text-foreground">4-4-4-4 Box Breathing</h3>
              <p className="text-muted-foreground">
                Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds.
              </p>
              <p className="text-muted-foreground">Complete 4 cycles to earn +12 points.</p>
            </div>
            <Button onClick={handleStart} size="lg" className="w-full gap-2">
              <Wind className="w-5 h-5" />
              Begin Exercise
            </Button>
          </div>
        )}

        {phase !== "ready" && phase !== "complete" && (
          <div className="space-y-6 py-8">
            {/* Breathing Circle Animation */}
            <div className="flex flex-col items-center justify-center h-64">
              <motion.div
                animate={{ scale: getCircleScale() }}
                transition={{ duration: 4, ease: "easeInOut" }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-elegant"
              >
                <span className="text-4xl font-bold text-white">{counter}</span>
              </motion.div>
              <motion.p
                key={phase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-semibold text-foreground mt-6"
              >
                {getPhaseText()}
              </motion.p>
            </div>

            {/* Progress */}
            <div className="text-center">
              <p className="text-muted-foreground">
                Cycle {cycle + 1} of {totalCycles}
              </p>
            </div>

            {/* Smartwatch Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center bg-card border-border">
                <Heart className="w-6 h-6 text-peach-foreground mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{Math.round(heartRate)}</p>
                <p className="text-sm text-muted-foreground">Heart Rate (bpm)</p>
              </Card>

              <Card className="p-4 text-center bg-card border-border">
                <Wind className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{phase === "inhale" ? "In" : phase === "exhale" ? "Out" : "Hold"}</p>
                <p className="text-sm text-muted-foreground">Breathing Phase</p>
              </Card>
            </div>
          </div>
        )}

        {phase === "complete" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 py-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto"
            >
              <Wind className="w-10 h-10 text-primary" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Well Done!</h3>
              <p className="text-muted-foreground mb-4">You've earned +12 wellness points 🌟</p>
              <p className="text-sm text-muted-foreground">Your heart rate decreased by {Math.round(75 - heartRate)} bpm</p>
            </div>
            <Button onClick={handleFinish} className="w-full" size="lg">
              Complete Exercise
            </Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BreathingSession;

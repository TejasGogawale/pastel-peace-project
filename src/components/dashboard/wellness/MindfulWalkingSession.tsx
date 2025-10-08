import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Heart, Activity, Droplets, Navigation, Footprints } from "lucide-react";
import { motion } from "framer-motion";

interface MindfulWalkingSessionProps {
  open: boolean;
  onClose: () => void;
  onComplete: (points: number) => void;
}

const MindfulWalkingSession = ({ open, onClose, onComplete }: MindfulWalkingSessionProps) => {
  const [elapsed, setElapsed] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [reflection, setReflection] = useState("");
  const [showCompletion, setShowCompletion] = useState(false);

  // Simulated smartwatch metrics
  const [metrics, setMetrics] = useState({
    steps: 0,
    heartRate: 72,
    bloodPressure: "120/80",
    o2Level: 98,
    pace: "0:00",
    distance: 0,
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setElapsed((prev) => prev + 1);
        // Simulate metrics changing
        setMetrics((prev) => ({
          steps: prev.steps + Math.floor(Math.random() * 3),
          heartRate: 72 + Math.floor(Math.random() * 20),
          bloodPressure: "120/80",
          o2Level: 97 + Math.floor(Math.random() * 3),
          pace: `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, '0')}`,
          distance: Number((prev.steps * 0.0008).toFixed(2)),
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, elapsed]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handleComplete = () => {
    setIsActive(false);
    setShowCompletion(true);
  };

  const handleFinish = () => {
    onComplete(15);
    onClose();
    setElapsed(0);
    setIsActive(false);
    setReflection("");
    setShowCompletion(false);
    setMetrics({
      steps: 0,
      heartRate: 72,
      bloodPressure: "120/80",
      o2Level: 98,
      pace: "0:00",
      distance: 0,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-foreground">Mindful Walking Session</DialogTitle>
        </DialogHeader>

        {!showCompletion ? (
          <div className="space-y-6">
            {/* Timer */}
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-6xl font-bold text-primary mb-4"
              >
                {formatTime(elapsed)}
              </motion.div>
              {!isActive ? (
                <Button onClick={handleStart} size="lg" className="gap-2">
                  <Footprints className="w-5 h-5" />
                  Start Walking
                </Button>
              ) : (
                <Button onClick={handleComplete} size="lg" variant="secondary">
                  Complete Walk
                </Button>
              )}
            </div>

            {/* Smartwatch Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="p-4 text-center bg-card border-border">
                <Footprints className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{metrics.steps}</p>
                <p className="text-sm text-muted-foreground">Steps</p>
              </Card>

              <Card className="p-4 text-center bg-card border-border">
                <Heart className="w-6 h-6 text-peach-foreground mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{metrics.heartRate}</p>
                <p className="text-sm text-muted-foreground">Heart Rate (bpm)</p>
              </Card>

              <Card className="p-4 text-center bg-card border-border">
                <Activity className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{metrics.bloodPressure}</p>
                <p className="text-sm text-muted-foreground">Blood Pressure</p>
              </Card>

              <Card className="p-4 text-center bg-card border-border">
                <Droplets className="w-6 h-6 text-highlight mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{metrics.o2Level}%</p>
                <p className="text-sm text-muted-foreground">O2 Level</p>
              </Card>

              <Card className="p-4 text-center bg-card border-border">
                <Navigation className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{metrics.pace}</p>
                <p className="text-sm text-muted-foreground">Pace (min/km)</p>
              </Card>

              <Card className="p-4 text-center bg-card border-border">
                <Footprints className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{metrics.distance}</p>
                <p className="text-sm text-muted-foreground">Distance (km)</p>
              </Card>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 py-4"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Footprints className="w-10 h-10 text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Great Job!</h3>
              <p className="text-muted-foreground mb-4">You've earned +15 wellness points 🌟</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">How did you feel? (Optional)</label>
              <Textarea
                placeholder="Reflect on your walking experience..."
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <Button onClick={handleFinish} className="w-full" size="lg">
              Complete Session
            </Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MindfulWalkingSession;

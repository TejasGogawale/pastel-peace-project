import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Award, Star, Flame, Heart, Target, Sparkles } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

const Rewards = () => {
  const { user } = useUser();

  const badges = [
    { icon: Flame, name: "7-Day Streak", description: "Check in for 7 days", earned: true, color: "text-highlight" },
    { icon: Star, name: "First Session", description: "Complete your first therapy session", earned: true, color: "text-accent" },
    { icon: Heart, name: "Peer Supporter", description: "Help 5 peers in groups", earned: true, color: "text-peach-foreground" },
    { icon: Target, name: "Goal Setter", description: "Set and achieve a wellness goal", earned: false, color: "text-primary" },
    { icon: Sparkles, name: "Mood Master", description: "Track mood for 30 days", earned: false, color: "text-secondary" },
    { icon: Trophy, name: "Wellness Warrior", description: "Complete 10 wellness activities", earned: false, color: "text-highlight" },
  ];

  const weeklyGoals = [
    { name: "Mood Check-ins", current: 5, target: 7, percentage: 71 },
    { name: "Therapy Sessions", current: 1, target: 2, percentage: 50 },
    { name: "Peer Interactions", current: 8, target: 10, percentage: 80 },
    { name: "Wellness Activities", current: 3, target: 5, percentage: 60 },
  ];

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
              <Trophy className="w-10 h-10 text-primary" />
              Your Achievements
            </h1>
            <p className="text-muted-foreground text-lg">Keep growing, {user?.name}! 🌱</p>
          </div>

          {/* Weekly Progress */}
          <Card className="p-6 shadow-soft border-border bg-card mb-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Weekly Goals
            </h2>
            <div className="space-y-4">
              {weeklyGoals.map((goal, index) => (
                <motion.div
                  key={goal.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{goal.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {goal.current} / {goal.target}
                    </span>
                  </div>
                  <Progress value={goal.percentage} className="h-3" />
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Badges */}
          <Card className="p-6 shadow-soft border-border bg-card">
            <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Badges Collection
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`p-6 text-center transition-smooth ${
                      badge.earned
                        ? "border-primary/30 bg-primary/5 shadow-soft"
                        : "border-border bg-muted/30 opacity-60"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 mx-auto mb-3 rounded-full ${
                        badge.earned ? "bg-primary/10" : "bg-muted"
                      } flex items-center justify-center`}
                    >
                      <badge.icon className={`w-8 h-8 ${badge.earned ? badge.color : "text-muted-foreground"}`} />
                    </div>
                    <h3 className="font-semibold mb-1 text-foreground">{badge.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{badge.description}</p>
                    {badge.earned && (
                      <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                        Earned ✨
                      </Badge>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Rewards;

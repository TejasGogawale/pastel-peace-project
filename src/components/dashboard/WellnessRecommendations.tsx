import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Play, Sparkles, Wind, Heart } from "lucide-react";
import { motion } from "framer-motion";

const WellnessRecommendations = () => {
  const playlists = [
    { name: "Calm & Focused", mood: "Relaxed", tracks: 32, icon: "🎵" },
    { name: "Morning Energy", mood: "Energetic", tracks: 28, icon: "☀️" },
    { name: "Sleep Sounds", mood: "Sleepy", tracks: 45, icon: "🌙" },
  ];

  const meditations = [
    { title: "5-Min Breathing Exercise", duration: "5 min" },
    { title: "Body Scan Meditation", duration: "15 min" },
    { title: "Gratitude Practice", duration: "10 min" },
  ];

  const breathingExercises = [
    { title: "4-7-8 Technique", duration: "3 min", description: "Calm your nervous system" },
    { title: "Box Breathing", duration: "5 min", description: "Focus and reduce stress" },
  ];

  const affirmations = [
    "I am worthy of love and respect",
    "Every day, I'm growing stronger",
    "I choose peace and calmness",
  ];

  const challenges = [
    { title: "Gratitude Journaling", duration: "3 min", points: 10 },
    { title: "Mindful Walking", duration: "10 min", points: 15 },
    { title: "Deep Breathing Practice", duration: "5 min", points: 12 },
  ];

  return (
    <div className="space-y-6">
      {/* Daily Affirmation */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="p-8 shadow-soft border-border bg-gradient-to-br from-primary/5 to-accent/5 text-center">
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-foreground">Today's Affirmation</h2>
          <motion.p
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-muted-foreground italic"
          >
            "{affirmations[0]}"
          </motion.p>
        </Card>
      </motion.div>

      {/* Music Playlists */}
      <Card className="p-6 shadow-soft border-border bg-card">
        <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
          <Music className="w-5 h-5 text-accent" />
          Music for Your Mood
        </h2>
        <div className="space-y-3">
          {playlists.map((playlist, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-muted/50 flex items-center justify-between hover:bg-muted transition-smooth">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{playlist.icon}</span>
                <div>
                  <p className="font-medium text-foreground">{playlist.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {playlist.tracks} tracks • {playlist.mood}
                  </p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="gap-2">
                <Play className="w-4 h-4" />
                Play
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Meditation & Breathing */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-soft border-border bg-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-highlight" />
            Meditation Guides
          </h2>
          <div className="space-y-3">
            {meditations.map((med, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 flex items-center justify-between hover:bg-muted transition-smooth">
                <div>
                  <p className="font-medium text-foreground">{med.title}</p>
                  <p className="text-sm text-muted-foreground">{med.duration}</p>
                </div>
                <Button size="sm" variant="outline" className="gap-2">
                  <Play className="w-4 h-4" />
                  Start
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 shadow-soft border-border bg-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
            <Wind className="w-5 h-5 text-primary" />
            Breathing Exercises
          </h2>
          <div className="space-y-3">
            {breathingExercises.map((exercise, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-foreground">{exercise.title}</p>
                    <p className="text-sm text-muted-foreground">{exercise.description}</p>
                  </div>
                  <Badge variant="secondary">{exercise.duration}</Badge>
                </div>
                <Button size="sm" className="w-full mt-2 gap-2">
                  <Play className="w-4 h-4" />
                  Begin
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Wellness Challenges */}
      <Card className="p-6 shadow-soft border-border bg-card">
        <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
          <Heart className="w-5 h-5 text-peach-foreground" />
          Micro Wellness Challenges
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {challenges.map((challenge, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 rounded-lg bg-muted/50 text-center hover:bg-muted transition-smooth"
            >
              <h3 className="font-semibold text-foreground mb-2">{challenge.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{challenge.duration}</p>
              <Badge variant="secondary" className="mb-3">+{challenge.points} points</Badge>
              <Button size="sm" className="w-full">Start Challenge</Button>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default WellnessRecommendations;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Play, Sparkles } from "lucide-react";

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

  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-soft border-border bg-card">
        <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
          <Music className="w-5 h-5 text-accent" />
          Music for Your Mood
        </h2>
        <div className="space-y-3">
          {playlists.map((playlist, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-muted/50 flex items-center justify-between">
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

      <Card className="p-6 shadow-soft border-border bg-card">
        <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-highlight" />
          Meditation & Mindfulness
        </h2>
        <div className="space-y-3">
          {meditations.map((med, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-muted/50 flex items-center justify-between">
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
    </div>
  );
};

export default WellnessRecommendations;

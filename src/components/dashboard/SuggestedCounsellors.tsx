import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, MessageCircle } from "lucide-react";

const SuggestedCounsellors = () => {
  const counsellors = [
    { name: "Dr. Sarah Mitchell", specialty: "Anxiety & Depression", rating: 4.9, sessions: 120 },
    { name: "Dr. James Wilson", specialty: "Family Therapy", rating: 4.8, sessions: 95 },
    { name: "Dr. Emily Chen", specialty: "Mindfulness & Stress", rating: 5.0, sessions: 150 },
  ];

  return (
    <Card className="p-6 shadow-soft border-border bg-card">
      <h2 className="text-xl font-semibold mb-4 text-foreground">Suggested Counsellors</h2>
      <div className="space-y-4">
        {counsellors.map((counsellor, idx) => (
          <div key={idx} className="p-4 rounded-lg bg-muted/50">
            <div className="flex items-start gap-4">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-primary/10 text-primary">
                  {counsellor.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{counsellor.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{counsellor.specialty}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-accent">
                    <Star className="w-3 h-3 fill-accent" />
                    {counsellor.rating}
                  </span>
                  <span className="text-muted-foreground">{counsellor.sessions} sessions</span>
                </div>
              </div>
              <Button size="sm" variant="outline" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Chat
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SuggestedCounsellors;

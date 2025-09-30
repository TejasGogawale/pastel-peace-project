import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, MessageCircle } from "lucide-react";

const CounsellorGroups = () => {
  const groups = [
    { name: "Anxiety Support Group", members: 12, nextSession: "Tomorrow 3PM", type: "Support" },
    { name: "Mindfulness Circle", members: 8, nextSession: "Friday 10AM", type: "Therapy" },
    { name: "Art Therapy Workshop", members: 15, nextSession: "Next Mon 2PM", type: "Workshop" },
  ];

  return (
    <Card className="p-6 shadow-soft border-border bg-card">
      <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
        <Users className="w-5 h-5 text-secondary" />
        Group Sessions
      </h2>
      <div className="space-y-4">
        {groups.map((group, idx) => (
          <div key={idx} className="p-4 rounded-lg bg-muted/50">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-medium text-foreground">{group.name}</h3>
                <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                  <span>{group.members} members</span>
                  <span>•</span>
                  <span className="text-secondary">{group.type}</span>
                </div>
              </div>
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Next: {group.nextSession}</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Chat
                </Button>
                <Button size="sm">Manage</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CounsellorGroups;

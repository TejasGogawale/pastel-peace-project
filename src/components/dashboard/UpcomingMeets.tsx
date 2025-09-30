import { Card } from "@/components/ui/card";
import { Calendar, Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const UpcomingMeets = () => {
  const meetings = [
    { counsellor: "Dr. Sarah Mitchell", date: "Tomorrow", time: "2:00 PM", type: "Video" },
    { counsellor: "Dr. James Wilson", date: "Friday", time: "11:00 AM", type: "Video" },
    { counsellor: "Dr. Emily Chen", date: "Next Mon", time: "4:30 PM", type: "Video" },
  ];

  return (
    <Card className="p-6 shadow-soft border-border bg-card">
      <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
        <Calendar className="w-5 h-5 text-primary" />
        Upcoming Sessions
      </h2>
      <div className="space-y-3">
        {meetings.map((meet, idx) => (
          <div key={idx} className="p-4 rounded-lg bg-muted/50 flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">{meet.counsellor}</p>
              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {meet.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {meet.time}
                </span>
              </div>
            </div>
            <Button size="sm" variant="outline" className="gap-2">
              <Video className="w-4 h-4" />
              Join
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UpcomingMeets;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, MessageCircle, TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";

const PatientList = ({ onSelectPatient }: { onSelectPatient: (id: string) => void }) => {
  const patients = [
    { id: "1", name: "Sarah Wilson", status: "Improving", lastSession: "2 days ago", trend: "up", moodAvg: 7.5 },
    { id: "2", name: "Tom Brown", status: "Stable", lastSession: "1 week ago", trend: "stable", moodAvg: 6.8 },
    { id: "3", name: "Emily Davis", status: "Needs Attention", lastSession: "3 days ago", trend: "down", moodAvg: 5.2 },
    { id: "4", name: "Michael Chen", status: "Improving", lastSession: "Yesterday", trend: "up", moodAvg: 8.1 },
    { id: "5", name: "Lisa Martinez", status: "Stable", lastSession: "4 days ago", trend: "stable", moodAvg: 7.0 },
  ];

  return (
    <Card className="p-6 shadow-soft border-border bg-card">
      <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
        <Users className="w-5 h-5 text-primary" />
        Patient List
      </h2>
      <div className="space-y-3">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-smooth cursor-pointer"
            onClick={() => onSelectPatient(patient.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg">
                    {patient.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-foreground">{patient.name}</p>
                    {patient.trend === "up" && <TrendingUp className="w-4 h-4 text-accent" />}
                    {patient.trend === "down" && <TrendingDown className="w-4 h-4 text-highlight" />}
                  </div>
                  <p className="text-sm text-muted-foreground">Last session: {patient.lastSession}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        patient.status === "Improving"
                          ? "bg-accent/20 text-accent"
                          : patient.status === "Stable"
                          ? "bg-secondary/20 text-secondary"
                          : "bg-highlight/20 text-highlight"
                      }`}
                    >
                      {patient.status}
                    </span>
                    <span className="text-xs text-muted-foreground">Avg Mood: {patient.moodAvg}/10</span>
                  </div>
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

export default PatientList;

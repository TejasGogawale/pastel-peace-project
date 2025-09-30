import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { ArrowLeft, TrendingUp, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PatientMoodDashboard = ({ patientId, onBack }: { patientId: string; onBack: () => void }) => {
  const patientData = {
    name: "Sarah Wilson",
    weeklyData: [
      { day: "Mon", mood: 6, stress: 6, anxiety: 5, confidence: 5 },
      { day: "Tue", mood: 7, stress: 5, anxiety: 4, confidence: 6 },
      { day: "Wed", mood: 8, stress: 4, anxiety: 3, confidence: 7 },
      { day: "Thu", mood: 7, stress: 5, anxiety: 4, confidence: 6 },
      { day: "Fri", mood: 8, stress: 4, anxiety: 3, confidence: 7 },
      { day: "Sat", mood: 9, stress: 3, anxiety: 2, confidence: 8 },
      { day: "Sun", mood: 8, stress: 3, anxiety: 3, confidence: 7 },
    ],
    currentMetrics: [
      { metric: "Mood", value: 8 },
      { metric: "Stress", value: 3 },
      { metric: "Anxiety", value: 3 },
      { metric: "Confidence", value: 7 },
      { metric: "Energy", value: 8 },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to List
        </Button>
        <h2 className="text-2xl font-bold text-foreground">{patientData.name}'s Dashboard</h2>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        {patientData.currentMetrics.map((metric, idx) => (
          <Card key={idx} className="p-4 shadow-soft border-border bg-card">
            <p className="text-sm text-muted-foreground mb-1">{metric.metric}</p>
            <p className="text-3xl font-bold text-foreground">{metric.value}/10</p>
          </Card>
        ))}
      </div>

      <Card className="p-6 shadow-soft border-border bg-card">
        <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Progress Tracking
        </h3>

        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={patientData.weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="mood" stroke="hsl(var(--primary))" strokeWidth={2} />
                <Line type="monotone" dataKey="stress" stroke="hsl(var(--peach))" strokeWidth={2} />
                <Line type="monotone" dataKey="anxiety" stroke="hsl(var(--secondary))" strokeWidth={2} />
                <Line type="monotone" dataKey="confidence" stroke="hsl(var(--accent))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={patientData.currentMetrics}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
                <PolarRadiusAxis angle={90} domain={[0, 10]} stroke="hsl(var(--muted-foreground))" />
                <Radar dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="daily">
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Daily tracking data
            </div>
          </TabsContent>

          <TabsContent value="monthly">
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Monthly overview
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      <Card className="p-6 shadow-soft border-border bg-card">
        <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
          <Calendar className="w-5 h-5 text-secondary" />
          Session History
        </h3>
        <div className="space-y-3">
          {[
            { date: "2 days ago", type: "Video Session", notes: "Good progress on anxiety management" },
            { date: "1 week ago", type: "Check-in", notes: "Stable mood, continuing mindfulness practice" },
            { date: "2 weeks ago", type: "Video Session", notes: "Discussed coping strategies" },
          ].map((session, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-muted/50">
              <div className="flex justify-between items-start mb-1">
                <p className="font-medium text-foreground">{session.type}</p>
                <p className="text-sm text-muted-foreground">{session.date}</p>
              </div>
              <p className="text-sm text-muted-foreground">{session.notes}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PatientMoodDashboard;

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { TrendingUp, Brain, Heart, Zap, Shield } from "lucide-react";

const EnhancedMoodAnalytics = () => {
  const weeklyData = [
    { day: "Mon", mood: 7, stress: 5, anxiety: 4, confidence: 6, energy: 7 },
    { day: "Tue", mood: 6, stress: 6, anxiety: 5, confidence: 5, energy: 6 },
    { day: "Wed", mood: 8, stress: 4, anxiety: 3, confidence: 7, energy: 8 },
    { day: "Thu", mood: 7, stress: 5, anxiety: 4, confidence: 6, energy: 7 },
    { day: "Fri", mood: 9, stress: 3, anxiety: 2, confidence: 8, energy: 9 },
    { day: "Sat", mood: 8, stress: 3, anxiety: 3, confidence: 7, energy: 8 },
    { day: "Sun", mood: 7, stress: 4, anxiety: 3, confidence: 7, energy: 7 },
  ];

  const currentMetrics = [
    { metric: "Mood", value: 8 },
    { metric: "Stress", value: 4 },
    { metric: "Anxiety", value: 3 },
    { metric: "Confidence", value: 7 },
    { metric: "Energy", value: 8 },
  ];

  const metrics = [
    { name: "Mood", icon: Heart, color: "hsl(var(--primary))", description: "Overall wellbeing" },
    { name: "Stress", icon: Zap, color: "hsl(var(--peach))", description: "Stress levels" },
    { name: "Anxiety", icon: Brain, color: "hsl(var(--secondary))", description: "Anxiety state" },
    { name: "Confidence", icon: Shield, color: "hsl(var(--accent))", description: "Self-confidence" },
  ];

  return (
    <Card className="p-6 shadow-soft border-border bg-card">
      <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-primary" />
        Mental Health Metrics
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <metric.icon className="w-4 h-4" style={{ color: metric.color }} />
              <p className="text-sm font-medium text-foreground">{metric.name}</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: metric.color }}>
              {currentMetrics.find((m) => m.metric === metric.name)?.value}/10
            </p>
            <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
          </div>
        ))}
      </div>

      <Tabs defaultValue="weekly" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
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
            <RadarChart data={currentMetrics}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
              <PolarRadiusAxis angle={90} domain={[0, 10]} stroke="hsl(var(--muted-foreground))" />
              <Radar dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="daily">
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Daily view coming soon
          </div>
        </TabsContent>

        <TabsContent value="monthly">
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Monthly view coming soon
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default EnhancedMoodAnalytics;

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

const PatientAnalytics = () => {
  const overallData = [
    { category: "Improving", count: 8 },
    { category: "Stable", count: 12 },
    { category: "Needs Attention", count: 4 },
  ];

  const insights = [
    { type: "success", text: "67% of patients show improvement over last month", icon: CheckCircle },
    { type: "warning", text: "4 patients require immediate follow-up", icon: AlertCircle },
    { type: "info", text: "Average session attendance: 85%", icon: TrendingUp },
  ];

  const recommendations = [
    "Consider group therapy for patients with similar anxiety patterns",
    "Increase mindfulness sessions for stress management",
    "Schedule follow-ups with patients showing declining trends",
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-soft border-border bg-card">
        <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Patient Overview Analytics
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={overallData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="count" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 shadow-soft border-border bg-card">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Key Insights</h3>
        <div className="space-y-3">
          {insights.map((insight, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg flex items-start gap-3 ${
                insight.type === "success"
                  ? "bg-accent/10"
                  : insight.type === "warning"
                  ? "bg-highlight/10"
                  : "bg-primary/10"
              }`}
            >
              <insight.icon
                className={`w-5 h-5 mt-0.5 ${
                  insight.type === "success"
                    ? "text-accent"
                    : insight.type === "warning"
                    ? "text-highlight"
                    : "text-primary"
                }`}
              />
              <p className="text-sm text-foreground">{insight.text}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 shadow-soft border-border bg-card">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Recommended Actions</h3>
        <div className="space-y-2">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-muted/50 flex items-start gap-2">
              <span className="text-primary font-semibold">{idx + 1}.</span>
              <p className="text-sm text-foreground">{rec}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PatientAnalytics;

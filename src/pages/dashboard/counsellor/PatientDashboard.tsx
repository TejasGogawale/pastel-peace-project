import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, TrendingUp, TrendingDown, Minus, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const PatientDashboard = () => {
  const { id } = useParams();

  // Mock data - would come from backend
  const patient = {
    name: "John Smith",
    initials: "JS",
    status: "stable",
    lastSession: "2 days ago",
  };

  const stressData = [
    { date: "Mon", stress: 65, anxiety: 55, confidence: 70 },
    { date: "Tue", stress: 58, anxiety: 52, confidence: 72 },
    { date: "Wed", stress: 62, anxiety: 60, confidence: 68 },
    { date: "Thu", stress: 55, anxiety: 48, confidence: 75 },
    { date: "Fri", stress: 50, anxiety: 45, confidence: 78 },
    { date: "Sat", stress: 48, anxiety: 42, confidence: 80 },
    { date: "Sun", stress: 52, anxiety: 46, confidence: 77 },
  ];

  const sessionNotes = [
    { date: "Apr 20, 2024", note: "Patient showing improvement in anxiety management. Recommended continued CBT exercises." },
    { date: "Apr 13, 2024", note: "Discussed coping strategies for work-related stress. Patient receptive to mindfulness techniques." },
    { date: "Apr 6, 2024", note: "Initial assessment completed. Identified key triggers and set treatment goals." },
  ];

  const reactionTracking = [
    { therapy: "Mindfulness Meditation", response: "Positive", improvement: "+15%" },
    { therapy: "Cognitive Behavioral Therapy", response: "Very Positive", improvement: "+25%" },
    { therapy: "Breathing Exercises", response: "Neutral", improvement: "+5%" },
  ];

  return (
    <DashboardLayout role="counsellor">
      <div className="p-8 gradient-calm min-h-screen">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <Link to="/dashboard/counsellor/patients">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Patients
            </Button>
          </Link>

          {/* Patient Header */}
          <Card className="p-6 shadow-soft border-border bg-card mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                    {patient.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{patient.name}</h1>
                  <p className="text-muted-foreground">Last session: {patient.lastSession}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={patient.status === "stable" ? "secondary" : "destructive"}>
                  {patient.status}
                </Badge>
                <Button className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Send Message
                </Button>
              </div>
            </div>
          </Card>

          <Tabs defaultValue="analytics" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="notes">Session Notes</TabsTrigger>
              <TabsTrigger value="reactions">Therapy Reactions</TabsTrigger>
            </TabsList>

            <TabsContent value="analytics" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-6 shadow-soft border-border bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Stress Level</span>
                    <TrendingDown className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-1">52</p>
                  <p className="text-sm text-accent">↓ 13 pts this week</p>
                </Card>
                <Card className="p-6 shadow-soft border-border bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Anxiety Level</span>
                    <TrendingDown className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-1">46</p>
                  <p className="text-sm text-accent">↓ 9 pts this week</p>
                </Card>
                <Card className="p-6 shadow-soft border-border bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Confidence</span>
                    <TrendingUp className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-1">77</p>
                  <p className="text-sm text-accent">↑ 7 pts this week</p>
                </Card>
              </div>

              {/* Weekly Trend */}
              <Card className="p-6 shadow-soft border-border bg-card">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Weekly Progress</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={stressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                    <Line type="monotone" dataKey="stress" stroke="hsl(var(--destructive))" strokeWidth={2} />
                    <Line type="monotone" dataKey="anxiety" stroke="hsl(var(--primary))" strokeWidth={2} />
                    <Line type="monotone" dataKey="confidence" stroke="hsl(var(--accent))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* Monthly Comparison */}
              <Card className="p-6 shadow-soft border-border bg-card">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Monthly Comparison</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={stressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                    <Bar dataKey="stress" fill="hsl(var(--destructive))" />
                    <Bar dataKey="anxiety" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="space-y-4">
              <Card className="p-6 shadow-soft border-border bg-card">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Add New Note</h2>
                <Textarea placeholder="Enter session notes and highlights..." className="mb-3" rows={4} />
                <Button>Save Note</Button>
              </Card>

              <div className="space-y-3">
                {sessionNotes.map((note, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 shadow-soft border-border bg-card">
                      <p className="text-sm text-muted-foreground mb-2">{note.date}</p>
                      <p className="text-foreground">{note.note}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reactions" className="space-y-4">
              <Card className="p-6 shadow-soft border-border bg-card">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Therapy Response Tracking</h2>
                <div className="space-y-4">
                  {reactionTracking.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{item.therapy}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Response: <span className="text-foreground font-medium">{item.response}</span>
                          </p>
                        </div>
                        <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                          {item.improvement}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;

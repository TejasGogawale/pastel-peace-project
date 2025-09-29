import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Users, Calendar, TrendingUp, Clock, Video, MessageCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const CounsellorDashboard = () => {
  const sessionData = [
    { month: "Jan", sessions: 24 },
    { month: "Feb", sessions: 28 },
    { month: "Mar", sessions: 32 },
    { month: "Apr", sessions: 30 },
    { month: "May", sessions: 35 },
    { month: "Jun", sessions: 38 },
  ];

  const upcomingSessions = [
    { patient: "John Doe", time: "2:00 PM", type: "Video Call" },
    { patient: "Jane Smith", time: "3:30 PM", type: "Chat Session" },
    { patient: "Mike Johnson", time: "4:00 PM", type: "Video Call" },
  ];

  const patients = [
    { name: "Sarah Wilson", status: "Improving", lastSession: "2 days ago" },
    { name: "Tom Brown", status: "Stable", lastSession: "1 week ago" },
    { name: "Emily Davis", status: "Needs Attention", lastSession: "3 days ago" },
  ];

  return (
    <DashboardLayout role="counsellor">
      <div className="p-8 gradient-calm min-h-screen">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Counsellor Dashboard</h1>
            <p className="text-muted-foreground text-lg">Manage your patients and sessions</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            {[
              { icon: Users, label: "Total Patients", value: "24", color: "bg-primary/10 text-primary" },
              { icon: Calendar, label: "Today's Sessions", value: "5", color: "bg-secondary/10 text-secondary" },
              { icon: TrendingUp, label: "Avg. Improvement", value: "76%", color: "bg-accent/10 text-accent" },
              { icon: Clock, label: "Hours This Week", value: "32", color: "bg-highlight/10 text-highlight" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 shadow-soft border-border bg-card">
                  <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center mb-3`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Session Trends */}
            <Card className="p-6 shadow-soft border-border bg-card">
              <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Session Trends
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={sessionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line type="monotone" dataKey="sessions" stroke="hsl(var(--primary))" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Upcoming Sessions */}
            <Card className="p-6 shadow-soft border-border bg-card">
              <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <Calendar className="w-5 h-5 text-secondary" />
                Upcoming Sessions
              </h2>
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {session.patient.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{session.patient}</p>
                        <p className="text-sm text-muted-foreground">{session.time}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="transition-smooth">
                      {session.type === "Video Call" ? <Video className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Patient Overview */}
          <Card className="p-6 shadow-soft border-border bg-card">
            <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Recent Patient Activity
            </h2>
            <div className="space-y-4">
              {patients.map((patient, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary/10 text-primary text-lg">
                        {patient.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">Last session: {patient.lastSession}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      patient.status === "Improving" ? "bg-accent/20 text-accent" :
                      patient.status === "Stable" ? "bg-secondary/20 text-secondary" :
                      "bg-highlight/20 text-highlight"
                    }`}>
                      {patient.status}
                    </span>
                    <Button size="sm" variant="outline" className="transition-smooth">
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default CounsellorDashboard;

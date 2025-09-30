import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Heart, Users, Music, Smile, Frown, Meh } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EnhancedMoodAnalytics from "@/components/dashboard/EnhancedMoodAnalytics";
import AIChatbot from "@/components/dashboard/AIChatbot";
import UpcomingMeets from "@/components/dashboard/UpcomingMeets";
import SuggestedCounsellors from "@/components/dashboard/SuggestedCounsellors";
import PeerGroups from "@/components/dashboard/PeerGroups";
import WellnessRecommendations from "@/components/dashboard/WellnessRecommendations";

const UserDashboard = () => {
  const activityData = [
    { activity: "Meditation", count: 12 },
    { activity: "Journaling", count: 8 },
    { activity: "Exercise", count: 5 },
    { activity: "Therapy", count: 3 },
  ];

  const quickActions = [
    { icon: MessageCircle, label: "Chat with AI", color: "bg-primary/10 text-primary" },
    { icon: Heart, label: "Book Session", color: "bg-highlight/10 text-highlight" },
    { icon: Users, label: "Join Group", color: "bg-secondary/10 text-secondary" },
    { icon: Music, label: "Relaxation", color: "bg-accent/10 text-accent" },
  ];

  return (
    <DashboardLayout role="user">
      <div className="p-8 gradient-calm min-h-screen">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back, Sarah!</h1>
            <p className="text-muted-foreground text-lg">How are you feeling today?</p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="counsellor">Counsellor</TabsTrigger>
              <TabsTrigger value="peers">Peer Groups</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Mood Check-in */}
              <Card className="p-6 shadow-soft border-border bg-card">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Quick Mood Check-in</h2>
                <div className="flex gap-4">
                  <Button className="flex-1 h-20 bg-accent/10 hover:bg-accent/20 text-accent border-accent/20">
                    <Smile className="w-8 h-8 mr-2" />
                    Great
                  </Button>
                  <Button className="flex-1 h-20 bg-peach/10 hover:bg-peach/20 text-peach-foreground border-peach/20">
                    <Meh className="w-8 h-8 mr-2" />
                    Okay
                  </Button>
                  <Button className="flex-1 h-20 bg-secondary/10 hover:bg-secondary/20 text-secondary border-secondary/20">
                    <Frown className="w-8 h-8 mr-2" />
                    Struggling
                  </Button>
                </div>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 shadow-gentle border-border bg-card hover:shadow-soft transition-smooth cursor-pointer">
                      <div className={`w-12 h-12 rounded-2xl ${action.color} flex items-center justify-center mb-3`}>
                        <action.icon className="w-6 h-6" />
                      </div>
                      <p className="font-medium text-foreground">{action.label}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Mood Analytics */}
              <EnhancedMoodAnalytics />

              {/* Charts */}
              <div className="grid md:grid-cols-2 gap-6">
                <AIChatbot />

                <Card className="p-6 shadow-soft border-border bg-card">
                  <h2 className="text-xl font-semibold mb-4 text-foreground">Wellness Activities</h2>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="activity" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="count" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="counsellor" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <UpcomingMeets />
                <SuggestedCounsellors />
              </div>
            </TabsContent>

            <TabsContent value="peers" className="space-y-6">
              <PeerGroups />
            </TabsContent>

            <TabsContent value="wellness" className="space-y-6">
              <WellnessRecommendations />
            </TabsContent>
          </Tabs>

          {/* Recent Activity */}
          <Card className="p-6 shadow-soft border-border bg-card">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { action: "Completed meditation session", time: "2 hours ago", icon: Music },
                { action: "Chat with AI Companion", time: "5 hours ago", icon: MessageCircle },
                { action: "Joined peer support group", time: "Yesterday", icon: Users },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{item.action}</p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
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

export default UserDashboard;

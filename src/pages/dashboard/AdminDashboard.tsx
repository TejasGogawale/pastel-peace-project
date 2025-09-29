import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Heart, TrendingUp, Activity, UserCheck, AlertCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const AdminDashboard = () => {
  const userGrowthData = [
    { month: "Jan", users: 120 },
    { month: "Feb", users: 180 },
    { month: "Mar", users: 240 },
    { month: "Apr", users: 310 },
    { month: "May", users: 390 },
    { month: "Jun", users: 480 },
  ];

  const userTypeData = [
    { name: "Active Users", value: 480, color: "hsl(var(--primary))" },
    { name: "Counsellors", value: 45, color: "hsl(var(--secondary))" },
    { name: "Pending", value: 23, color: "hsl(var(--accent))" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="p-8 gradient-calm min-h-screen">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground text-lg">Platform overview and management</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            {[
              { icon: Users, label: "Total Users", value: "480", change: "+12%", color: "bg-primary/10 text-primary" },
              { icon: Heart, label: "Active Counsellors", value: "45", change: "+5%", color: "bg-secondary/10 text-secondary" },
              { icon: Activity, label: "Active Sessions", value: "127", change: "+8%", color: "bg-accent/10 text-accent" },
              { icon: TrendingUp, label: "Satisfaction Rate", value: "94%", change: "+2%", color: "bg-highlight/10 text-highlight" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 shadow-soft border-border bg-card">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* User Growth */}
            <Card className="p-6 shadow-soft border-border bg-card">
              <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                User Growth
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={userGrowthData}>
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
                  <Bar dataKey="users" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* User Distribution */}
            <Card className="p-6 shadow-soft border-border bg-card">
              <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary" />
                User Distribution
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={userTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {userTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Recent Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-soft border-border bg-card">
              <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-accent" />
                Pending Counsellor Approvals
              </h2>
              <div className="space-y-3">
                {["Dr. Emily Roberts", "Dr. Michael Chen", "Dr. Sarah Anderson"].map((name, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium text-foreground">{name}</p>
                      <p className="text-sm text-muted-foreground">Clinical Psychology</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-accent hover:bg-accent/90">
                        Approve
                      </Button>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-soft border-border bg-card">
              <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-highlight" />
                System Alerts
              </h2>
              <div className="space-y-3">
                {[
                  { message: "Server load high", severity: "warning", time: "5 min ago" },
                  { message: "New feature update available", severity: "info", time: "1 hour ago" },
                  { message: "Backup completed successfully", severity: "success", time: "2 hours ago" },
                ].map((alert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <AlertCircle className={`w-5 h-5 mt-0.5 ${
                      alert.severity === "warning" ? "text-highlight" :
                      alert.severity === "info" ? "text-secondary" : "text-accent"
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{alert.message}</p>
                      <p className="text-sm text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;

import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, LayoutDashboard, MessageCircle, Users, Shield, Music, TrendingUp, Settings, LogOut } from "lucide-react";
import { motion } from "framer-motion";

interface DashboardLayoutProps {
  children: ReactNode;
  role: "user" | "counsellor" | "admin";
}

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const location = useLocation();

  const userNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/user" },
    { icon: TrendingUp, label: "Mood Analytics", path: "/dashboard/user/mood-analytics" },
    { icon: MessageCircle, label: "AI Companion", path: "/dashboard/user/ai-companion" },
    { icon: Heart, label: "Counsellors", path: "/dashboard/user/counsellors" },
    { icon: Users, label: "Peer Connections", path: "/dashboard/user/peer-connections" },
    { icon: Music, label: "Wellness", path: "/dashboard/user/wellness" },
    { icon: Shield, label: "Rewards", path: "/dashboard/user/rewards" },
  ];

  const counsellorNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/counsellor" },
    { icon: Users, label: "Patients", path: "/dashboard/counsellor/patients" },
    { icon: TrendingUp, label: "Analytics", path: "/dashboard/counsellor/analytics" },
    { icon: Heart, label: "Groups", path: "/dashboard/counsellor/groups" },
  ];

  const adminNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/admin" },
    { icon: Users, label: "Users", path: "/dashboard/admin/users" },
    { icon: Heart, label: "Counsellors", path: "/dashboard/admin/counsellors" },
    { icon: TrendingUp, label: "Analytics", path: "/dashboard/admin/analytics" },
  ];

  const navItems = role === "user" ? userNavItems : role === "counsellor" ? counsellorNavItems : adminNavItems;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 bg-card border-r border-border shadow-gentle flex flex-col"
      >
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-semibold text-foreground">MindCare</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start transition-smooth ${
                    isActive ? "bg-primary/10 text-primary" : ""
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <Button variant="ghost" className="w-full justify-start transition-smooth">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start transition-smooth text-destructive hover:text-destructive hover:bg-destructive/10">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

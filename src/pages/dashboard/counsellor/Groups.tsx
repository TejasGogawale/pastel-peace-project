import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, MessageCircle, Calendar, Settings } from "lucide-react";
import { useState } from "react";

const Groups = () => {
  const [groups, setGroups] = useState([
    { name: "Mindfulness Meditation", members: 23, sessions: 12, status: "Active" },
    { name: "CBT Workshop", members: 18, sessions: 8, status: "Active" },
    { name: "Anxiety Support", members: 31, sessions: 15, status: "Active" },
    { name: "Stress Management", members: 25, sessions: 10, status: "Paused" },
  ]);

  return (
    <DashboardLayout role="counsellor">
      <div className="p-8 gradient-calm min-h-screen">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
                <Users className="w-10 h-10 text-primary" />
                Group Management
              </h1>
              <p className="text-muted-foreground text-lg">Create and moderate peer support groups</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Create Group
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Group</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="group-name">Group Name</Label>
                    <Input id="group-name" placeholder="e.g., Mindfulness Meditation" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="group-description">Description</Label>
                    <Textarea id="group-description" placeholder="Describe the group's purpose..." rows={3} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-members">Maximum Members</Label>
                    <Input id="max-members" type="number" placeholder="25" />
                  </div>
                  <Button className="w-full">Create Group</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {groups.map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 shadow-soft border-border bg-card hover:shadow-gentle transition-smooth">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{group.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{group.members} members</span>
                        <span>•</span>
                        <span>{group.sessions} sessions</span>
                      </div>
                    </div>
                    <Badge variant={group.status === "Active" ? "secondary" : "outline"}>
                      {group.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Chat
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Calendar className="w-4 h-4" />
                      Schedule
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Settings className="w-4 h-4" />
                      Manage
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity */}
          <Card className="p-6 shadow-soft border-border bg-card mt-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Recent Group Activity</h2>
            <div className="space-y-3">
              {[
                { group: "Mindfulness Meditation", activity: "New member joined", time: "2 hours ago" },
                { group: "CBT Workshop", activity: "Session completed", time: "5 hours ago" },
                { group: "Anxiety Support", activity: "3 new messages", time: "1 day ago" },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-muted/50 flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium text-foreground">{activity.group}</p>
                    <p className="text-sm text-muted-foreground">{activity.activity}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Groups;

import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Search, MapPin, Heart, Coffee, Book, Music as MusicIcon, Gamepad2 } from "lucide-react";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";

const PeerConnections = () => {
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState("");

  const hobbyGroups = [
    { name: "Book Club Readers", members: 45, hobby: "Reading", icon: Book, location: "Virtual", tag: "hobby" },
    { name: "Coffee & Chat", members: 32, hobby: "Coffee", icon: Coffee, location: "Downtown Cafe", tag: "hobby" },
    { name: "Music Lovers", members: 28, hobby: "Music", icon: MusicIcon, location: "Virtual", tag: "hobby" },
    { name: "Gaming Together", members: 51, hobby: "Gaming", icon: Gamepad2, location: "Online", tag: "hobby" },
  ];

  const moodGroups = [
    { name: "Anxiety Support Circle", members: 67, mood: "Anxious", color: "primary", location: "Virtual", tag: "mood" },
    { name: "Depression Warriors", members: 89, mood: "Depressed", color: "peach", location: "Virtual", tag: "mood" },
    { name: "Stress Relief Group", members: 54, mood: "Stressed", color: "highlight", location: "Virtual", tag: "mood" },
  ];

  const counsellorGroups = [
    { name: "Mindfulness Meditation", counsellor: "Dr. Sarah", members: 23, location: "Virtual", tag: "counsellor" },
    { name: "CBT Workshop", counsellor: "Dr. James", members: 18, location: "Virtual", tag: "counsellor" },
  ];

  const hangoutSpots = [
    { name: "Serenity Park", type: "Outdoor", distance: "2 km" },
    { name: "Calm Cafe", type: "Indoor", distance: "1.5 km" },
    { name: "Wellness Center", type: "Activity", distance: "3 km" },
  ];

  return (
    <DashboardLayout role="user">
      <div className="p-8 gradient-calm min-h-screen">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
              <Users className="w-10 h-10 text-primary" />
              Peer Connections
            </h1>
            <p className="text-muted-foreground text-lg">Find your community, {user?.name}</p>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search groups by name or interest..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs defaultValue="hobby" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="hobby">Hobby-Based</TabsTrigger>
              <TabsTrigger value="mood">Mood-Based</TabsTrigger>
              <TabsTrigger value="counsellor">Counsellor-Guided</TabsTrigger>
            </TabsList>

            <TabsContent value="hobby" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {hobbyGroups.map((group, index) => (
                  <motion.div
                    key={group.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 shadow-soft border-border bg-card hover:shadow-gentle transition-smooth">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <group.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{group.name}</h3>
                            <p className="text-sm text-muted-foreground">{group.members} members</p>
                          </div>
                        </div>
                        <Badge variant="secondary">{group.hobby}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4" />
                        {group.location}
                      </div>
                      <Button className="w-full">Join Group</Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mood" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {moodGroups.map((group, index) => (
                  <motion.div
                    key={group.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 shadow-soft border-border bg-card hover:shadow-gentle transition-smooth">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-full bg-${group.color}/10 flex items-center justify-center`}>
                            <Heart className={`w-6 h-6 text-${group.color}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{group.name}</h3>
                            <p className="text-sm text-muted-foreground">{group.members} members</p>
                          </div>
                        </div>
                        <Badge variant="secondary">{group.mood}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4" />
                        {group.location}
                      </div>
                      <Button className="w-full">Join Group</Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="counsellor" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {counsellorGroups.map((group, index) => (
                  <motion.div
                    key={group.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 shadow-soft border-border bg-card hover:shadow-gentle transition-smooth">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-foreground">{group.name}</h3>
                          <p className="text-sm text-primary">Led by {group.counsellor}</p>
                          <p className="text-sm text-muted-foreground">{group.members} members</p>
                        </div>
                        <Badge variant="secondary">Professional</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4" />
                        {group.location}
                      </div>
                      <Button className="w-full">Join Group</Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Suggested Hangout Spots */}
          <Card className="p-6 shadow-soft border-border bg-card mt-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              Suggested Places to Hang Out
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {hangoutSpots.map((spot, index) => (
                <motion.div
                  key={spot.name}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
                >
                  <h3 className="font-semibold text-foreground mb-1">{spot.name}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{spot.type}</span>
                    <span>{spot.distance}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default PeerConnections;

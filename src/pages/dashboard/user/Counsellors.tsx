import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Star, MessageCircle, Video, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";

const Counsellors = () => {
  const { user } = useUser();
  const [date, setDate] = useState<Date | undefined>(new Date());

  const suggestedCounsellors = [
    { name: "Dr. Sarah Miller", specialty: "Anxiety & Depression", rating: 4.9, sessions: 245, initials: "SM" },
    { name: "Dr. James Chen", specialty: "Stress Management", rating: 4.8, sessions: 189, initials: "JC" },
    { name: "Dr. Emily Johnson", specialty: "Relationship Therapy", rating: 4.9, sessions: 312, initials: "EJ" },
    { name: "Dr. Michael Brown", specialty: "Trauma & PTSD", rating: 4.7, sessions: 156, initials: "MB" },
  ];

  const upcomingMeets = [
    { counsellor: "Dr. Sarah Miller", date: "Today", time: "3:00 PM", type: "Video Call" },
    { counsellor: "Dr. James Chen", date: "Tomorrow", time: "10:00 AM", type: "Chat Session" },
    { counsellor: "Dr. Emily Johnson", date: "Apr 25", time: "2:00 PM", type: "Video Call" },
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
              <Heart className="w-10 h-10 text-primary" />
              Your Counsellors
            </h1>
            <p className="text-muted-foreground text-lg">Professional support tailored for you, {user?.name}</p>
          </div>

          <Tabs defaultValue="counsellors" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="counsellors">Suggested Counsellors</TabsTrigger>
              <TabsTrigger value="meetings">Upcoming Meets</TabsTrigger>
            </TabsList>

            <TabsContent value="counsellors" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {suggestedCounsellors.map((counsellor, index) => (
                  <motion.div
                    key={counsellor.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 shadow-soft border-border bg-card hover:shadow-gentle transition-smooth">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="w-16 h-16">
                          <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                            {counsellor.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-foreground">{counsellor.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{counsellor.specialty}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-accent fill-accent" />
                              <span className="font-medium text-foreground">{counsellor.rating}</span>
                            </div>
                            <span className="text-muted-foreground">{counsellor.sessions} sessions</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1 gap-2">
                          <Video className="w-4 h-4" />
                          Book Video
                        </Button>
                        <Button variant="outline" className="flex-1 gap-2">
                          <MessageCircle className="w-4 h-4" />
                          Chat
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="meetings" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="p-6 shadow-soft border-border bg-card">
                  <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-primary" />
                    Upcoming Sessions
                  </h2>
                  <div className="space-y-3">
                    {upcomingMeets.map((meet, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground">{meet.counsellor}</h3>
                            <p className="text-sm text-muted-foreground">
                              {meet.date} • {meet.time}
                            </p>
                          </div>
                          <Badge variant="secondary">{meet.type}</Badge>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" className="flex-1">Join Session</Button>
                          <Button size="sm" variant="outline">Reschedule</Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 shadow-soft border-border bg-card">
                  <h2 className="text-xl font-semibold mb-4 text-foreground">Calendar</h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border pointer-events-auto"
                  />
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Counsellors;

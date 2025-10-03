import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Send, Bot, Sparkles, Heart, Zap } from "lucide-react";
import { useState } from "react";

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm here to support you. How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");
  const [persona, setPersona] = useState<"calm" | "motivational" | "friendly">("calm");
  const [journalEntry, setJournalEntry] = useState("");

  const personas = {
    calm: { icon: Heart, label: "Calm", color: "primary" },
    motivational: { icon: Zap, label: "Motivational", color: "accent" },
    friendly: { icon: Sparkles, label: "Friendly", color: "highlight" },
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { type: "user", text: input }]);
    setInput("");
    // Simulate bot response based on persona
    setTimeout(() => {
      const responses = {
        calm: "Take a deep breath. I'm here to listen. Would you like to explore that feeling?",
        motivational: "You've got this! Let's turn this into an opportunity for growth. What's your next step?",
        friendly: "I hear you! Thanks for sharing that with me. Want to talk more about it?",
      };
      setMessages((prev) => [...prev, { type: "bot", text: responses[persona] }]);
    }, 1000);
  };

  const dailyPrompts = [
    "What are three things you're grateful for today?",
    "Describe a moment that made you smile recently.",
    "What's one thing you'd like to achieve this week?",
  ];

  return (
    <Tabs defaultValue="chat" className="space-y-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="chat">Chat</TabsTrigger>
        <TabsTrigger value="journal">Journal</TabsTrigger>
      </TabsList>

      <TabsContent value="chat">
        <Card className="p-6 shadow-soft border-border bg-card">
          {/* Persona Selector */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-3">Choose your companion's persona:</p>
            <div className="flex gap-2">
              {(Object.keys(personas) as Array<keyof typeof personas>).map((key) => {
                const p = personas[key];
                const Icon = p.icon;
                return (
                  <Button
                    key={key}
                    variant={persona === key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPersona(key)}
                    className="gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {p.label}
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">AI Companion</h2>
              <p className="text-sm text-muted-foreground">{personas[persona].label} mode</p>
            </div>
          </div>

          <ScrollArea className="h-[400px] pr-4 mb-4">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === "user"
                        ? "bg-primary/20 text-foreground rounded-br-sm"
                        : "bg-secondary/20 text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon" className="shadow-soft">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="journal">
        <Card className="p-6 shadow-soft border-border bg-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Daily Reflection</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm font-medium text-primary mb-2">Today's Prompt:</p>
              <p className="text-foreground">{dailyPrompts[0]}</p>
            </div>
            <Textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="Write your thoughts here..."
              rows={12}
              className="resize-none"
            />
            <div className="flex gap-2">
              <Button className="flex-1">Save Entry</Button>
              <Button variant="outline">View Past Entries</Button>
            </div>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default AIChatbot;

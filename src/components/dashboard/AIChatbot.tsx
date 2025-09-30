import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot } from "lucide-react";
import { useState } from "react";

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm here to support you. How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { type: "user", text: input }]);
    setInput("");
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "I understand. Would you like to talk more about that?" },
      ]);
    }, 1000);
  };

  return (
    <Card className="p-6 shadow-soft border-border bg-card h-[500px] flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">AI Companion</h2>
      </div>
      
      <ScrollArea className="flex-1 pr-4 mb-4">
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
  );
};

export default AIChatbot;

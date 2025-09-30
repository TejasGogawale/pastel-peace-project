import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, MapPin, Search } from "lucide-react";
import { useState } from "react";

const PeerGroups = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const groups = [
    { name: "Book Lovers Club", members: 24, hobby: "Reading", location: "Virtual" },
    { name: "Mindful Yoga Group", members: 18, hobby: "Wellness", location: "Central Park" },
    { name: "Art Therapy Circle", members: 15, hobby: "Art", location: "Community Center" },
    { name: "Nature Hikers", members: 32, hobby: "Outdoor", location: "Mountain Trail" },
  ];

  const filteredGroups = groups.filter((g) =>
    g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.hobby.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="p-6 shadow-soft border-border bg-card">
      <h2 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
        <Users className="w-5 h-5 text-secondary" />
        Peer Support Groups
      </h2>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by hobby or interest..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-3">
        {filteredGroups.map((group, idx) => (
          <div key={idx} className="p-4 rounded-lg bg-muted/50">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{group.name}</h3>
                <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                  <span>{group.members} members</span>
                  <span>•</span>
                  <span className="text-secondary">{group.hobby}</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {group.location}
                </div>
              </div>
              <Button size="sm" variant="outline">
                Join
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PeerGroups;

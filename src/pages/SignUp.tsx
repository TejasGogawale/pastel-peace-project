import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Heart, User, Stethoscope, Shield } from "lucide-react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (role: string) => (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to respective dashboard based on role
    if (role === "user") {
      navigate("/dashboard/user");
    } else if (role === "counsellor") {
      navigate("/dashboard/counsellor");
    } else if (role === "admin") {
      navigate("/dashboard/admin");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20 gradient-warm min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="inline-flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Join MindCare</h1>
            <p className="text-muted-foreground">Begin your journey to better mental wellness</p>
          </div>

          <Card className="p-8 shadow-soft border-border bg-card">
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="user" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  User
                </TabsTrigger>
                <TabsTrigger value="counsellor" className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4" />
                  Counsellor
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Admin
                </TabsTrigger>
              </TabsList>

              {["user", "counsellor", "admin"].map((role) => (
                <TabsContent key={role} value={role}>
                  <form onSubmit={handleSubmit(role)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`${role}-name`}>Full Name</Label>
                      <Input
                        id={`${role}-name`}
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`${role}-email`}>Email</Label>
                      <Input
                        id={`${role}-email`}
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`${role}-password`}>Password</Label>
                      <Input
                        id={`${role}-password`}
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="border-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`${role}-confirm`}>Confirm Password</Label>
                      <Input
                        id={`${role}-confirm`}
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="border-input"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 transition-smooth">
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary hover:underline font-medium">
                Sign in here
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;

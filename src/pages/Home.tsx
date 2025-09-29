import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { MessageCircle, Users, Shield, Heart, TrendingUp, Music } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Mood Dashboard",
      description: "Track your emotional wellness journey with beautiful, insightful analytics",
    },
    {
      icon: MessageCircle,
      title: "AI Companion",
      description: "Chat with our empathetic AI assistant, available 24/7 for support",
    },
    {
      icon: Heart,
      title: "Counsellor Support",
      description: "Connect with licensed professionals who truly care about your wellbeing",
    },
    {
      icon: Users,
      title: "Peer Connections",
      description: "Join supportive communities and share experiences in a safe space",
    },
    {
      icon: Shield,
      title: "Guardian Help",
      description: "Keep loved ones informed with consent-based wellness monitoring",
    },
    {
      icon: Music,
      title: "Wellness Resources",
      description: "Curated playlists and meditation guides for your peace of mind",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-warm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your Companion for <span className="text-primary">Mental Wellness</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A warm, supportive space where your mental health journey is understood, valued, and
                nurtured every step of the way.
              </p>
              <div className="flex gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-soft transition-smooth">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button size="lg" variant="outline" className="transition-smooth">
                    Sign In
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="Mental wellness illustration"
                className="rounded-3xl shadow-soft w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Feel Better
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and support designed with care, built for your wellbeing
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full hover:shadow-soft transition-smooth border-border bg-card">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Start Your Wellness Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands who have found comfort, support, and hope with MindCare
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-soft transition-smooth">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

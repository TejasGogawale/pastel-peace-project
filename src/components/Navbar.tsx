import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-gentle"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <span className="text-2xl font-semibold text-foreground">MindCare</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/auth/signin">
            <Button variant="ghost" className="transition-smooth">
              Sign In
            </Button>
          </Link>
          <Link to="/auth/signup">
            <Button className="bg-primary hover:bg-primary/90 transition-smooth shadow-gentle">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

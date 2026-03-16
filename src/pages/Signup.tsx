import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col flex-1 px-6 pt-8 pb-6 max-w-md mx-auto w-full"
      >
        <div className="flex items-center justify-between bg-card/80 backdrop-blur-sm rounded-2xl px-4 py-3 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <MessageCircle size={20} className="text-primary-foreground" fill="currentColor" />
            </div>
            <span className="text-lg font-bold text-foreground">Profile Setup</span>
          </div>
          <span className="text-sm font-semibold text-muted-foreground bg-secondary px-3 py-1 rounded-full">1/10</span>
        </div>
        <div className="h-1 bg-muted rounded-full mb-8">
          <div className="h-full w-[10%] gradient-primary rounded-full" />
        </div>
        <h2 className="text-2xl font-extrabold text-foreground mb-1">Instant Account Creation</h2>
        <p className="text-sm text-muted-foreground mb-6">Join thousands of creators earning $$$ every day!</p>
        <div className="space-y-4 flex-1">
          <div>
            <label className="text-sm font-semibold text-foreground mb-1.5 block">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full h-12 px-4 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring text-sm" />
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-1.5 block">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="Create your password" className="w-full h-12 px-4 pr-12 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring text-sm" />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-1.5 block">Confirm Password</label>
            <div className="relative">
              <input type={showConfirm ? "text" : "password"} placeholder="Create your password" className="w-full h-12 px-4 pr-12 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring text-sm" />
              <button onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showConfirm ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-3">
          <button onClick={() => navigate("/home")} className="w-full h-14 rounded-full gradient-primary text-primary-foreground font-bold text-sm tracking-widest uppercase shadow-lg shadow-primary/30">SIGN UP</button>
          <p className="text-center text-sm text-muted-foreground font-semibold">OR</p>
          <button className="w-full h-12 rounded-full bg-white text-black font-bold text-sm flex items-center justify-center gap-3">
            <span className="text-lg">G</span> Sign up with Google
          </button>
          <button className="w-full h-12 rounded-full bg-white text-black font-bold text-sm flex items-center justify-center gap-3">
            <span className="text-lg font-black">𝕏</span> Sign up with X
          </button>
          <button onClick={() => navigate("/")} className="w-full text-center text-sm font-bold text-foreground tracking-widest uppercase py-2">BACK</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;

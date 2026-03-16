import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col flex-1 px-6 pt-12 pb-6 max-w-md mx-auto w-full"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-2xl shadow-primary/30">
            <MessageCircle size={32} className="text-primary-foreground" fill="currentColor" />
          </div>
          <h1 className="text-3xl font-extrabold text-foreground">Welcome Back</h1>
          <p className="text-sm text-muted-foreground mt-1">Log in to your DMchat account</p>
        </div>
        <div className="space-y-4 flex-1">
          <div>
            <label className="text-sm font-semibold text-foreground mb-1.5 block">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full h-12 px-4 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring text-sm" />
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground mb-1.5 block">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="Enter your password" className="w-full h-12 px-4 pr-12 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring text-sm" />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-3">
          <button onClick={() => navigate("/home")} className="w-full h-14 rounded-full gradient-primary text-primary-foreground font-bold text-sm tracking-widest uppercase shadow-lg shadow-primary/30">LOGIN</button>
          <p className="text-center text-sm text-muted-foreground font-semibold">OR</p>
          <button className="w-full h-12 rounded-full bg-white text-black font-bold text-sm flex items-center justify-center gap-3">
            <span className="text-lg">G</span> Sign in with Google
          </button>
          <button className="w-full h-12 rounded-full bg-white text-black font-bold text-sm flex items-center justify-center gap-3">
            <span className="text-lg font-black">𝕏</span> Sign in with X
          </button>
          <button onClick={() => navigate("/")} className="w-full text-center text-sm font-bold text-foreground tracking-widest uppercase py-2">BACK</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

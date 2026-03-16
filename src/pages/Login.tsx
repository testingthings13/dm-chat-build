import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[100px]" />
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center relative">
        <div className="text-center">
          <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/30">
            <span className="text-primary-foreground font-extrabold text-4xl">C</span>
          </div>
          <h2 className="text-4xl font-extrabold gradient-text">Chatabox</h2>
          <p className="text-muted-foreground mt-3 text-sm">Welcome back!</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 flex items-center justify-center px-6 relative z-10"
      >
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={() => navigate("/")}
              className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <h1 className="text-xl font-bold text-foreground">Welcome Back</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-11 px-4 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full h-11 px-4 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              LOGIN
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-3">
            <button className="w-full h-11 rounded-xl bg-card border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Login with Google
            </button>
            <button className="w-full h-11 rounded-xl bg-card border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Login with X
            </button>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Don't have an account?{" "}
            <button onClick={() => navigate("/signup")} className="text-primary font-medium hover:underline">
              Sign up
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

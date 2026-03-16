import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center gap-12 px-6"
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-2xl shadow-primary/30">
            <span className="text-primary-foreground font-extrabold text-3xl">C</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight gradient-text">
            Chatabox
          </h1>
          <p className="text-muted-foreground text-center max-w-sm text-sm">
            The premium platform for creators and their fans
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button
            onClick={() => navigate("/signup")}
            className="w-full h-12 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
          >
            CREATOR SIGNUP
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full h-12 rounded-xl border border-border bg-card text-foreground font-semibold text-sm tracking-wide hover:bg-muted transition-colors"
          >
            LOGIN
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;

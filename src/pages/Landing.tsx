import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";
import avatar6 from "@/assets/avatars/avatar-6.jpg";
import avatar7 from "@/assets/avatars/avatar-7.jpg";
import avatar8 from "@/assets/avatars/avatar-8.jpg";

const avatars = [
  { top: "12%", left: "15%", size: 72, ring: "border-cyan-400", img: avatar1 },
  { top: "8%", left: "55%", size: 56, ring: "border-orange-400", img: avatar2 },
  { top: "22%", left: "75%", size: 80, ring: "border-teal-400", img: avatar3 },
  { top: "35%", left: "8%", size: 64, ring: "border-blue-400", img: avatar4 },
  { top: "30%", left: "42%", size: 60, ring: "border-cyan-500", img: avatar5 },
  { top: "55%", left: "5%", size: 88, ring: "border-teal-300", img: avatar6 },
  { top: "58%", left: "50%", size: 68, ring: "border-cyan-400", img: avatar7 },
  { top: "52%", left: "80%", size: 56, ring: "border-orange-500", img: avatar8 },
  { top: "72%", left: "30%", size: 60, ring: "border-gray-500", img: avatar5 },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-end relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-background/40 to-background/80" />

      {avatars.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className={`absolute rounded-full border-2 ${a.ring} overflow-hidden bg-secondary`}
          style={{ top: a.top, left: a.left, width: a.size, height: a.size }}
        >
          <img src={a.img} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 flex flex-col items-center w-full px-8 pb-12"
        style={{ marginTop: "auto" }}
      >
        <img src={logo} alt="Chatabox" className="w-16 h-16 mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-16">
          Chatabox
        </h1>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <button
            onClick={() => navigate("/signup")}
            className="w-full h-14 rounded-full gradient-primary text-primary-foreground font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
          >
            CREATOR SIGNUP
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full h-12 text-foreground font-bold text-sm tracking-widest uppercase hover:text-primary transition-colors"
          >
            LOGIN
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;

import { Home, Users, Box, User, MessageCircle, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const mainNav = [
  { id: "chat", icon: MessageCircle, path: "/home" },
  { id: "home", icon: Home, path: "/home" },
  { id: "sexting", icon: Users, path: "/sexting" },
  { id: "box", icon: Box, path: "/box" },
  { id: "profile", icon: User, path: "/profile" },
];

const DesktopSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col items-center w-[60px] bg-nav-rail border-r border-border shrink-0 h-full py-5 justify-between">
      {/* Logo */}
      <button onClick={() => navigate("/home")} className="mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center">
          <img src={logo} alt="DMchat" className="w-10 h-10" />
        </div>
      </button>

      {/* Nav items */}
      <nav className="flex-1 flex flex-col items-center gap-2">
        {mainNav.slice(1).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                isActive
                  ? "gradient-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-nav-rail-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Icon size={20} />
            </button>
          );
        })}

        <div className="w-6 h-px bg-border my-2" />

        <button
          onClick={() => navigate("/home")}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
            location.pathname.startsWith("/chat")
              ? "gradient-primary text-primary-foreground shadow-lg shadow-primary/25"
              : "text-nav-rail-foreground hover:text-foreground hover:bg-secondary"
          }`}
        >
          <MessageCircle size={20} />
        </button>
      </nav>

      {/* Settings + Avatar */}
      <div className="flex flex-col items-center gap-3">
        <button
          onClick={() => navigate("/settings")}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
            location.pathname.startsWith("/settings")
              ? "gradient-primary text-primary-foreground"
              : "text-nav-rail-foreground hover:text-foreground hover:bg-secondary"
          }`}
        >
          <Settings size={20} />
        </button>
        <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
          <span className="text-primary-foreground text-xs font-bold">JD</span>
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;

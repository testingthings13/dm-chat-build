import { Home, Users, Box, Settings, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home", icon: Home, path: "/home" },
  { id: "sexting", label: "Sexting", icon: Users, path: "/sexting" },
  { id: "chat", label: "", icon: MessageCircle, path: "/home", isCenter: true },
  { id: "box", label: "Box", icon: Box, path: "/box" },
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border md:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);

          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className="w-14 h-14 -mt-5 rounded-full gradient-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30"
              >
                <Icon size={24} fill="currentColor" />
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;

import { Home, Flame, Box, User, MessageSquare, Settings, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const mainNav = [
  { id: "home", label: "Home", icon: Home, path: "/home" },
  { id: "sexting", label: "Sexting", icon: Flame, path: "/sexting" },
  { id: "box", label: "Box", icon: Box, path: "/box" },
  { id: "profile", label: "Profile", icon: User, path: "/profile" },
];

const bottomNav = [
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
];

const DesktopSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-[240px] bg-card border-r border-border shrink-0 h-full">
      {/* Logo */}
      <div className="px-6 py-6">
        <button onClick={() => navigate("/home")} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">C</span>
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">Chatabox</span>
        </button>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-3 space-y-1">
        {mainNav.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                isActive
                  ? "gradient-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}

        <div className="pt-4">
          <button
            onClick={() => navigate("/home")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
              location.pathname.startsWith("/chat")
                ? "gradient-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <MessageSquare size={20} />
            <span>Send Message</span>
          </button>
        </div>
      </nav>

      {/* Bottom section */}
      <div className="px-3 pb-4 space-y-1">
        {bottomNav.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                isActive
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}

        {/* User */}
        <div className="flex items-center gap-3 px-4 py-3 mt-2">
          <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">JamesDoe</p>
            <p className="text-xs text-muted-foreground truncate">@janedoe</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;

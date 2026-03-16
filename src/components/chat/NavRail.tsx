import { MessageSquare, Users, Bell, Settings, LogOut } from "lucide-react";
import logo from "@/assets/logo.png";

interface NavRailProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: "chats", icon: MessageSquare },
  { id: "contacts", icon: Users },
  { id: "notifications", icon: Bell },
  { id: "settings", icon: Settings },
];

const NavRail = ({ activeTab, onTabChange }: NavRailProps) => {
  return (
    <div className="flex flex-col items-center w-[68px] bg-nav-rail py-6 justify-between shrink-0">
      <div className="flex flex-col items-center gap-1">
        {/* Logo */}
        <div className="w-10 h-10 rounded-lg bg-nav-rail-active flex items-center justify-center mb-6">
          <span className="text-primary-foreground font-bold text-sm">DM</span>
        </div>

        {/* Nav items */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-150 ${
                isActive
                  ? "bg-nav-rail-active text-primary-foreground"
                  : "text-nav-rail-foreground hover:text-primary-foreground hover:bg-nav-rail-foreground/10"
              }`}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground text-xs font-semibold">YO</span>
        </div>
      </div>
    </div>
  );
};

export default NavRail;

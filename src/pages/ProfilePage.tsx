import { useNavigate } from "react-router-dom";
import { Settings, Bell, Mail, User } from "lucide-react";
import { currentUser } from "@/data/mockData";
import AppLayout from "@/components/layout/AppLayout";

const ProfilePage = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Inbox", icon: Mail, path: "/home" },
    { label: "Notifications", icon: Bell, path: "/home" },
    { label: "Settings", icon: Settings, path: "/settings" },
    { label: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <AppLayout>
      <div className="max-w-lg mx-auto w-full">
        {/* Cover area */}
        <div className="h-32 md:h-44 bg-gradient-to-br from-primary/30 to-primary/5 relative">
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center border-4 border-background shadow-xl">
              <span className="text-primary-foreground font-bold text-2xl">{currentUser.avatar}</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="pt-16 px-6 text-center">
          <h1 className="text-xl font-bold text-foreground">Sarah McDonals</h1>
          <p className="text-sm text-muted-foreground">@sarahmc</p>
          <p className="text-sm text-primary font-semibold mt-1">21k Followers</p>
          <p className="text-sm text-muted-foreground mt-3 max-w-sm mx-auto">
            Welcome to my Chatabox, I run this account on my own and reply to all your lovely messages.
          </p>
        </div>

        {/* Menu */}
        <div className="mt-8 px-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-card transition-colors"
              >
                <Icon size={20} className="text-muted-foreground" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;

import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, User, Shield, CreditCard, Megaphone, Users, Bell, Wallet, Monitor } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

const settingsItems = [
  { label: "Your Account", description: "See information about your account, download an archive of your data, or learn about your account deactivation options.", icon: User, path: "/settings/account", hasChildren: true },
  { label: "Privacy and Safety", description: "Manage your privacy settings and safety options.", icon: Shield, path: "/settings/privacy", hasChildren: true },
  { label: "Subscriptions, Chat Prices and Packages", description: "", icon: CreditCard, path: null },
  { label: "Promotions and Tracking", description: "", icon: Megaphone, path: null },
  { label: "Fans and Following", description: "", icon: Users, path: null },
  { label: "Your Notifications", description: "", icon: Bell, path: null },
  { label: "Banking, Payouts", description: "", icon: Wallet, path: null },
  { label: "Display", description: "", icon: Monitor, path: null },
];

const Settings = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-5">
          <button
            onClick={() => navigate("/profile")}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground md:hidden"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">JD</span>
            </div>
            <span className="text-sm font-medium text-foreground hidden sm:block">Jane Doe</span>
          </div>
        </div>

        {/* Items */}
        <div className="px-3">
          {settingsItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => item.path && navigate(item.path)}
                className="w-full flex items-start gap-4 px-4 py-4 rounded-xl text-left hover:bg-card transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center shrink-0 mt-0.5 group-hover:border-primary/30 transition-colors">
                  <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  {item.description && (
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.description}</p>
                  )}
                </div>
                {item.hasChildren && (
                  <ChevronRight size={16} className="text-muted-foreground mt-1 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;

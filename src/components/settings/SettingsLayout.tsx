import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight, User, Shield, CreditCard, BarChart3, Users, Bell, Landmark, Monitor, Search, ArrowLeft } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

export const settingsItems = [
  { label: "Your Account", icon: User, path: "/settings/account" },
  { label: "Privacy and Safety", icon: Shield, path: "/settings/privacy" },
  { label: "Subscriptions, Chat Prices and Packages", icon: CreditCard, path: "/settings/subscriptions" },
  { label: "Promotions and Tracking", icon: BarChart3, path: "/settings/promotions" },
  { label: "Fans and Following", icon: Users, path: "/settings/fans" },
  { label: "Your Notifications", icon: Bell, path: "/settings/notifications" },
  { label: "Banking, Payouts", icon: Landmark, path: "/settings/banking" },
  { label: "Display", icon: Monitor, path: "/settings/display" },
];

interface SettingsLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  backPath?: string;
}

const SettingsLayout = ({ title, description, children, backPath = "/settings" }: SettingsLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppLayout>
      <div className="flex h-full">
        {/* Desktop sidebar */}
        <div className="hidden md:block w-[380px] border-r border-border shrink-0">
          <div className="px-5 pt-6 pb-4 flex items-center gap-3">
            <h1 className="text-2xl font-extrabold text-foreground tracking-tight">Settings</h1>
            <Search size={18} className="text-muted-foreground" />
          </div>
          <div className="space-y-1 px-3">
            {settingsItems.map((item, i) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + "/");
              return (
                <button key={i} onClick={() => navigate(item.path)} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-colors group ${isActive ? "bg-card" : "hover:bg-card"}`}>
                  <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground">
                    <Icon size={16} />
                  </div>
                  <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
                  <ChevronRight size={16} className="text-muted-foreground" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="hidden md:flex px-6 pt-6 pb-4 items-center gap-3 border-b border-border">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">JD</span>
            </div>
            <span className="text-lg font-bold text-foreground">Jane Doe</span>
          </div>

          <div className="max-w-2xl w-full px-4 md:px-6 py-6">
            <div className="flex items-center gap-3 mb-6 md:hidden">
              <button onClick={() => navigate(backPath)} className="text-muted-foreground hover:text-foreground"><ArrowLeft size={20} /></button>
              <h1 className="text-xl font-bold text-foreground">{title}</h1>
            </div>
            <div className="hidden md:block mb-6">
              <h2 className="text-xl font-bold text-foreground mb-2">{title}</h2>
              {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
            {children}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsLayout;

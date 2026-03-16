import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, User, Shield, CreditCard, BarChart3, Users, Bell, Landmark, Monitor, Search, ArrowLeft } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

const settingsItems = [
  { label: "Your Account", icon: User, path: "/settings/account" },
  { label: "Privacy and Safety", icon: Shield, path: "/settings/privacy" },
  { label: "Subscriptions, Chat Prices and Packages", icon: CreditCard, path: "/settings" },
  { label: "Promotions and Tracking", icon: BarChart3, path: "/settings" },
  { label: "Fans and Following", icon: Users, path: "/settings" },
  { label: "Your Notifications", icon: Bell, path: "/settings" },
  { label: "Banking, Payouts", icon: Landmark, path: "/settings" },
  { label: "Display", icon: Monitor, path: "/settings" },
];

const Settings = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="flex h-full">
        {/* Settings list - full width on mobile, sidebar on desktop */}
        <div className="w-full md:w-[380px] md:border-r md:border-border shrink-0">
          <div className="px-5 pt-6 pb-4 flex items-center gap-3">
            <button onClick={() => navigate("/profile")} className="md:hidden text-muted-foreground hover:text-foreground">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-2xl font-extrabold text-foreground tracking-tight">Settings</h1>
            <Search size={18} className="text-muted-foreground" />
          </div>
          <div className="space-y-1 px-3">
            {settingsItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <button key={i} onClick={() => navigate(item.path)} className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left hover:bg-card transition-colors group">
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

        {/* Desktop right panel - default "Your Account" view */}
        <div className="hidden md:flex flex-1 flex-col">
          <div className="px-6 pt-6 pb-4 flex items-center gap-3 border-b border-border">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">JD</span>
            </div>
            <span className="text-lg font-bold text-foreground">Jane Doe</span>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-2">Your Account</h2>
            <p className="text-sm text-muted-foreground mb-6">See information about your account, download an archive of your data, or learn about your account deactivation options</p>
            <div className="space-y-3">
              <button onClick={() => navigate("/settings/account")} className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
                <div><h3 className="text-sm font-bold text-foreground">Account Information</h3><p className="text-xs text-muted-foreground mt-0.5">See your account information like your phone number and email address.</p></div>
                <ChevronRight size={16} className="text-muted-foreground shrink-0 ml-4" />
              </button>
              <button onClick={() => navigate("/settings/password")} className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
                <div><h3 className="text-sm font-bold text-foreground">Change your Password</h3><p className="text-xs text-muted-foreground mt-0.5">You can change your password at any time you like.</p></div>
                <ChevronRight size={16} className="text-muted-foreground shrink-0 ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;
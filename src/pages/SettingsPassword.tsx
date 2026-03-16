import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, User, Shield, CreditCard, BarChart3, Users, Bell, Landmark, Monitor, Search } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

import { settingsItems } from "@/components/settings/SettingsLayout";

const SettingsPassword = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });

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
              return (
                <button key={i} onClick={() => navigate(item.path)} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-colors group ${item.active ? "bg-card" : "hover:bg-card"}`}>
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
          {/* Desktop header */}
          <div className="hidden md:flex px-6 pt-6 pb-4 items-center gap-3 border-b border-border">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">JD</span>
            </div>
            <span className="text-lg font-bold text-foreground">Jane Doe</span>
          </div>

          <div className="max-w-md w-full px-4 md:px-6 py-6">
            {/* Mobile header */}
            <div className="flex items-center gap-3 mb-8 md:hidden">
              <button onClick={() => navigate("/settings/account")} className="text-muted-foreground hover:text-foreground"><ArrowLeft size={20} /></button>
              <h1 className="text-xl font-bold text-foreground">Change your Password</h1>
            </div>

            {/* Desktop title */}
            <div className="hidden md:block mb-6">
              <h2 className="text-xl font-bold text-foreground">Change your Password</h2>
            </div>

            <div className="space-y-4">
              {[
                { label: "Current Password", key: "currentPassword" },
                { label: "New Password", key: "newPassword" },
                { label: "Confirm New Password", key: "confirmPassword" },
              ].map(({ label, key }) => (
                <div key={key}>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</label>
                  <input type="password" value={form[key as keyof typeof form]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className="w-full h-11 px-4 rounded-xl bg-card border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow" placeholder="••••••••" />
                </div>
              ))}
              <button className="w-full h-11 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20 mt-2">UPDATE</button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsPassword;
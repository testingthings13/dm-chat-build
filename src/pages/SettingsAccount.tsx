import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, User, Shield, CreditCard, BarChart3, Users, Bell, Landmark, Monitor, Search } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

const settingsItems = [
  { label: "Your Account", icon: User, path: "/settings/account", active: true },
  { label: "Privacy and Safety", icon: Shield, path: "/settings/privacy" },
  { label: "Subscriptions, Chat Prices and Packages", icon: CreditCard, path: "/settings" },
  { label: "Promotions and Tracking", icon: BarChart3, path: "/settings" },
  { label: "Fans and Following", icon: Users, path: "/settings" },
  { label: "Your Notifications", icon: Bell, path: "/settings" },
  { label: "Banking, Payouts", icon: Landmark, path: "/settings" },
  { label: "Display", icon: Monitor, path: "/settings" },
];

const SettingsAccount = () => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(true);
  const [form, setForm] = useState({ email: "janedoe@gmail.com", displayName: "JaneDoe", fullName: "Jane Doe", dob: "24/11/2000" });

  const AccountContent = () => (
    <div className="space-y-3">
      <button onClick={() => setShowInfo(!showInfo)} className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
        <div className="text-left"><h3 className="text-sm font-bold text-foreground">Account Information</h3><p className="text-xs text-muted-foreground mt-0.5">See your account information like your phone number and email address.</p></div>
        <ChevronRight size={16} className="text-muted-foreground shrink-0" />
      </button>

      {showInfo && (
        <div className="bg-card border border-border rounded-xl p-5 space-y-4 animate-fade-in">
          {Object.entries({ Email: "email", "Display Name": "displayName", "Full name": "fullName", "Date of Birth": "dob" }).map(([label, key]) => (
            <div key={key}>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</label>
              <input type="text" value={form[key as keyof typeof form]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className="w-full h-11 px-4 rounded-xl bg-background border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow" />
            </div>
          ))}
          <button className="w-full h-11 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20">UPDATE</button>
        </div>
      )}

      <button onClick={() => navigate("/settings/password")} className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
        <div className="text-left"><h3 className="text-sm font-bold text-foreground">Change your Password</h3><p className="text-xs text-muted-foreground mt-0.5">You can change your password at any time you like.</p></div>
        <ChevronRight size={16} className="text-muted-foreground shrink-0" />
      </button>
    </div>
  );

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

          <div className="max-w-2xl w-full px-4 md:px-6 py-6">
            {/* Mobile header */}
            <div className="flex items-center gap-3 mb-6 md:hidden">
              <button onClick={() => navigate("/settings")} className="text-muted-foreground hover:text-foreground"><ArrowLeft size={20} /></button>
              <h1 className="text-xl font-bold text-foreground">Your Account</h1>
            </div>

            {/* Desktop title */}
            <div className="hidden md:block mb-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Your Account</h2>
              <p className="text-sm text-muted-foreground">See information about your account, download an archive of your data, or learn about your account deactivation options</p>
            </div>

            <AccountContent />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsAccount;
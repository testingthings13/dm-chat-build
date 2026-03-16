import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight, User, Shield, CreditCard, BarChart3, Users, Bell, Landmark, Monitor, Search, ArrowLeft } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

const settingsItems = [
  { label: "Your Account", icon: User, path: "/settings/account", id: "account" },
  { label: "Privacy and Safety", icon: Shield, path: "/settings/privacy", id: "privacy" },
  { label: "Subscriptions, Chat Prices and Packages", icon: CreditCard, path: "/settings", id: "subs" },
  { label: "Promotions and Tracking", icon: BarChart3, path: "/settings", id: "promos" },
  { label: "Fans and Following", icon: Users, path: "/settings", id: "fans" },
  { label: "Your Notifications", icon: Bell, path: "/settings", id: "notifs" },
  { label: "Banking, Payouts", icon: Landmark, path: "/settings", id: "banking" },
  { label: "Display", icon: Monitor, path: "/settings", id: "display" },
];

const AccountInfoForm = () => {
  const [form, setForm] = useState({ email: "janedoe@gmail.com", displayName: "JaneDoe", fullName: "Jane Doe", dob: "24/11/2000" });
  return (
    <div className="bg-card border border-border rounded-xl p-5 space-y-4">
      {Object.entries({ Email: "email", "Display Name": "displayName", "Full name": "fullName", "Date of Birth": "dob" }).map(([label, key]) => (
        <div key={key}>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</label>
          <input type="text" value={form[key as keyof typeof form]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className="w-full h-11 px-4 rounded-xl bg-background border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow" />
        </div>
      ))}
      <button className="w-full h-11 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20">UPDATE</button>
    </div>
  );
};

const PasswordForm = () => {
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  return (
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
  );
};

const Settings = () => {
  const navigate = useNavigate();
  const [desktopPanel, setDesktopPanel] = useState<"account" | "password" | "privacy">("account");

  const handleItemClick = (item: typeof settingsItems[0]) => {
    // On mobile: navigate to the sub-page
    // On desktop: update the right panel
    if (item.id === "account") {
      setDesktopPanel("account");
      // On mobile this will navigate
      if (window.innerWidth < 768) navigate(item.path);
    } else if (item.id === "privacy") {
      setDesktopPanel("privacy");
      if (window.innerWidth < 768) navigate(item.path);
    } else {
      if (window.innerWidth < 768) navigate(item.path);
    }
  };

  return (
    <AppLayout>
      <div className="flex h-full">
        {/* Left sidebar / Full mobile list */}
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
                <button key={i} onClick={() => handleItemClick(item)} className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left hover:bg-card transition-colors group">
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

        {/* Right panel (desktop only) */}
        <div className="hidden md:flex flex-1 flex-col">
          <div className="px-6 pt-6 pb-4 flex items-center gap-3 border-b border-border">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">JD</span>
            </div>
            <span className="text-lg font-bold text-foreground">Jane Doe</span>
          </div>

          {desktopPanel === "account" && (
            <div className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Your Account</h2>
              <p className="text-sm text-muted-foreground mb-6">See information about your account, download an archive of your data, or learn about your account deactivation options</p>
              <div className="space-y-3">
                <button onClick={() => setDesktopPanel("account")} className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
                  <div><h3 className="text-sm font-bold text-foreground">Account Information</h3><p className="text-xs text-muted-foreground mt-0.5">See your account information like your phone number and email address.</p></div>
                  <ChevronRight size={16} className="text-muted-foreground shrink-0 ml-4" />
                </button>
                <button onClick={() => setDesktopPanel("password")} className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
                  <div><h3 className="text-sm font-bold text-foreground">Change your Password</h3><p className="text-xs text-muted-foreground mt-0.5">You can change your password at any time you like.</p></div>
                  <ChevronRight size={16} className="text-muted-foreground shrink-0 ml-4" />
                </button>

                <AccountInfoForm />
              </div>
            </div>
          )}

          {desktopPanel === "password" && (
            <div className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Change your Password</h2>
              <PasswordForm />
            </div>
          )}

          {desktopPanel === "privacy" && (
            <div className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Privacy and Safety</h2>
              <p className="text-sm text-muted-foreground mb-6">Lorem ipsum dolor sit amet con sectetur lemtttum cras ut nunc urna nulla.</p>
              {/* Inline privacy settings for desktop */}
              <PrivacyContent />
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

const PrivacyContent = () => {
  const [s, setS] = useState({ activityStatus: true, showFansCount: true, suggestionsOptOut: false, enableComments: true, showPostTips: false, drmProtection: false });
  const toggle = (k: keyof typeof s) => setS((p) => ({ ...p, [k]: !p[k] }));

  const Toggle = ({ label, enabled, onToggle, description }: { label: string; enabled: boolean; onToggle: () => void; description?: string }) => (
    <div className="flex items-center justify-between p-4 bg-card border border-border rounded-xl">
      <div className="flex-1 min-w-0 mr-3">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {description && <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{description}</p>}
      </div>
      <button onClick={onToggle} className={`w-11 h-6 rounded-full shrink-0 transition-colors duration-200 relative ${enabled ? "bg-online" : "bg-muted"}`}>
        <div className={`w-5 h-5 rounded-full bg-foreground absolute top-0.5 transition-transform duration-200 ${enabled ? "translate-x-[22px]" : "translate-x-0.5"}`} />
      </button>
    </div>
  );

  return (
    <>
      <h3 className="text-lg font-bold text-foreground mb-3">Profile</h3>
      <div className="space-y-2 mb-6">
        <Toggle label="Show activity status" enabled={s.activityStatus} onToggle={() => toggle("activityStatus")} />
        <Toggle label="Show fans count on your profile" enabled={s.showFansCount} onToggle={() => toggle("showFansCount")} />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-3">Discoverability</h3>
      <div className="space-y-2 mb-6">
        <Toggle label="Suggestions Opt Out" enabled={s.suggestionsOptOut} onToggle={() => toggle("suggestionsOptOut")} />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-3">Posts</h3>
      <div className="space-y-2 mb-6">
        <Toggle label="Enable comments" enabled={s.enableComments} onToggle={() => toggle("enableComments")} />
        <Toggle label="Show post tips sum" enabled={s.showPostTips} onToggle={() => toggle("showPostTips")} />
        <button className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
          <span className="text-sm font-medium text-foreground">Watermarks</span>
          <ChevronRight size={16} className="text-muted-foreground" />
        </button>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-3">Safety</h3>
      <div className="space-y-2 mb-6">
        {["Restricted accounts", "Blocked accounts", "Block by country", "Block by IP address"].map((item) => (
          <button key={item} className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
            <span className="text-sm font-medium text-foreground">{item}</span>
            <ChevronRight size={16} className="text-muted-foreground" />
          </button>
        ))}
        <Toggle label="Enable DRM video protection" enabled={s.drmProtection} onToggle={() => toggle("drmProtection")} description="DRM Protection helps protect video content from being copied or downloaded. After you enable it, DRM Protection will be applied to uploaded videos after date. DRM Protection may limit to ability for fans using older devices to view this video content." />
      </div>
    </>
  );
};

export default Settings;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, User, Shield, CreditCard, BarChart3, Users, Bell, Landmark, Monitor, Search } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

import { settingsItems } from "@/components/settings/SettingsLayout";

interface ToggleProps { label: string; enabled: boolean; onToggle: () => void; description?: string; }
const Toggle = ({ label, enabled, onToggle, description }: ToggleProps) => (
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

const SettingsPrivacy = () => {
  const navigate = useNavigate();
  const [s, setS] = useState({ activityStatus: true, showFansCount: true, suggestionsOptOut: false, enableComments: true, showPostTips: false, drmProtection: false });
  const toggle = (k: keyof typeof s) => setS((p) => ({ ...p, [k]: !p[k] }));

  const PrivacyContent = () => (
    <>
      <h2 className="text-lg font-bold text-foreground mb-3">Profile</h2>
      <div className="space-y-2 mb-6">
        <Toggle label="Show activity status" enabled={s.activityStatus} onToggle={() => toggle("activityStatus")} />
        <Toggle label="Show fans count on your profile" enabled={s.showFansCount} onToggle={() => toggle("showFansCount")} />
      </div>

      <h2 className="text-lg font-bold text-foreground mb-3">Discoverability</h2>
      <div className="space-y-2 mb-6">
        <Toggle label="Suggestions Opt Out" enabled={s.suggestionsOptOut} onToggle={() => toggle("suggestionsOptOut")} />
      </div>

      <h2 className="text-lg font-bold text-foreground mb-3">Posts</h2>
      <div className="space-y-2 mb-6">
        <Toggle label="Enable comments" enabled={s.enableComments} onToggle={() => toggle("enableComments")} />
        <Toggle label="Show post tips sum" enabled={s.showPostTips} onToggle={() => toggle("showPostTips")} />
        <button className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
          <span className="text-sm font-medium text-foreground">Watermarks</span>
          <ChevronRight size={16} className="text-muted-foreground" />
        </button>
      </div>

      <h2 className="text-lg font-bold text-foreground mb-3">Safety</h2>
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
                <button key={i} onClick={() => navigate(item.path)} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-colors group ${item.path === "/settings/privacy" ? "bg-card" : "hover:bg-card"}`}>
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
              <h1 className="text-xl font-bold text-foreground">Privacy and Safety</h1>
            </div>

            {/* Desktop title */}
            <div className="hidden md:block mb-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Privacy and Safety</h2>
            </div>

            <p className="text-sm text-muted-foreground mb-6">Lorem ipsum dolor sit amet con sectetur lemtttum cras ut nunc urna nulla.</p>

            <PrivacyContent />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsPrivacy;
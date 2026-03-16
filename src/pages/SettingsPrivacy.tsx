import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

interface ToggleProps {
  label: string;
  enabled: boolean;
  onToggle: () => void;
  description?: string;
}

const Toggle = ({ label, enabled, onToggle, description }: ToggleProps) => (
  <div className="flex items-start justify-between py-3">
    <div className="flex-1 min-w-0 mr-3">
      <p className="text-sm text-foreground">{label}</p>
      {description && <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{description}</p>}
    </div>
    <button
      onClick={onToggle}
      className={`w-11 h-6 rounded-full shrink-0 transition-colors duration-200 relative ${
        enabled ? "bg-primary" : "bg-muted"
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full bg-foreground absolute top-0.5 transition-transform duration-200 ${
          enabled ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      />
    </button>
  </div>
);

const SettingsPrivacy = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    activityStatus: true,
    showFansCount: true,
    suggestionsOptOut: false,
    enableComments: true,
    showPostTips: true,
    watermarks: false,
    drmProtection: false,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto w-full px-5 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate("/settings")}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-foreground">Privacy and Safety</h1>
        </div>

        <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
          Manage your privacy settings and control who can see your content and interact with you.
        </p>

        {/* Profile */}
        <section className="mb-6">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Profile</h2>
          <div className="bg-card border border-border rounded-xl px-4 divide-y divide-border">
            <Toggle label="Show activity status" enabled={settings.activityStatus} onToggle={() => toggle("activityStatus")} />
            <Toggle label="Show fans count on your profile" enabled={settings.showFansCount} onToggle={() => toggle("showFansCount")} />
          </div>
        </section>

        {/* Discoverability */}
        <section className="mb-6">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Discoverability</h2>
          <div className="bg-card border border-border rounded-xl px-4 divide-y divide-border">
            <Toggle label="Suggestions Opt Out" enabled={settings.suggestionsOptOut} onToggle={() => toggle("suggestionsOptOut")} />
          </div>
        </section>

        {/* Posts */}
        <section className="mb-6">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Posts</h2>
          <div className="bg-card border border-border rounded-xl px-4 divide-y divide-border">
            <Toggle label="Enable comments" enabled={settings.enableComments} onToggle={() => toggle("enableComments")} />
            <Toggle label="Show post tips sum" enabled={settings.showPostTips} onToggle={() => toggle("showPostTips")} />
            <Toggle label="Watermarks" enabled={settings.watermarks} onToggle={() => toggle("watermarks")} />
          </div>
        </section>

        {/* Safety */}
        <section className="mb-6">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Safety</h2>
          <div className="bg-card border border-border rounded-xl px-4 divide-y divide-border">
            <div className="py-3">
              <button className="text-sm text-foreground hover:text-primary transition-colors">Restricted accounts</button>
            </div>
            <div className="py-3">
              <button className="text-sm text-foreground hover:text-primary transition-colors">Blocked accounts</button>
            </div>
            <div className="py-3">
              <button className="text-sm text-foreground hover:text-primary transition-colors">Block by country</button>
            </div>
            <div className="py-3">
              <button className="text-sm text-foreground hover:text-primary transition-colors">Block by IP address</button>
            </div>
            <Toggle
              label="Enable DRM video protection"
              enabled={settings.drmProtection}
              onToggle={() => toggle("drmProtection")}
              description="DRM Protection helps protect video content from being copied or downloaded. After you enable it, DRM Protection will be applied to uploaded videos after that date. DRM Protection may limit the ability for fans using older devices to view this video content."
            />
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default SettingsPrivacy;

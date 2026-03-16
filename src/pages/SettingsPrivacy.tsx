import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

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

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto w-full px-4 md:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/settings")} className="text-muted-foreground hover:text-foreground"><ArrowLeft size={20} /></button>
          <h1 className="text-xl font-bold text-foreground">Privacy and Safety</h1>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Lorem ipsum dolor sit amet con sectetur lemtttum cras ut nunc urna nulla.</p>

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
      </div>
    </AppLayout>
  );
};

export default SettingsPrivacy;

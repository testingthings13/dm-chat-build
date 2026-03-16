import { useState } from "react";
import SettingsLayout from "@/components/settings/SettingsLayout";

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

const SettingsNotifications = () => {
  const [s, setS] = useState({
    pushEnabled: true, emailEnabled: true, newSubs: true, newMessages: true,
    newTips: true, newLikes: false, promotions: false, newComments: true,
  });
  const toggle = (k: keyof typeof s) => setS((p) => ({ ...p, [k]: !p[k] }));

  return (
    <SettingsLayout title="Your Notifications" description="Choose what notifications you receive and how.">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Channels</h3>
          <div className="space-y-2">
            <Toggle label="Push Notifications" enabled={s.pushEnabled} onToggle={() => toggle("pushEnabled")} description="Receive notifications on your device" />
            <Toggle label="Email Notifications" enabled={s.emailEnabled} onToggle={() => toggle("emailEnabled")} description="Receive notifications via email" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Activity</h3>
          <div className="space-y-2">
            <Toggle label="New Subscribers" enabled={s.newSubs} onToggle={() => toggle("newSubs")} />
            <Toggle label="New Messages" enabled={s.newMessages} onToggle={() => toggle("newMessages")} />
            <Toggle label="New Tips" enabled={s.newTips} onToggle={() => toggle("newTips")} />
            <Toggle label="New Likes" enabled={s.newLikes} onToggle={() => toggle("newLikes")} />
            <Toggle label="New Comments" enabled={s.newComments} onToggle={() => toggle("newComments")} />
            <Toggle label="Promotional emails" enabled={s.promotions} onToggle={() => toggle("promotions")} />
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default SettingsNotifications;

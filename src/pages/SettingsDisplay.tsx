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

const SettingsDisplay = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [s, setS] = useState({ compactMode: false, reducedMotion: false, highContrast: false });
  const toggle = (k: keyof typeof s) => setS((p) => ({ ...p, [k]: !p[k] }));

  return (
    <SettingsLayout title="Display" description="Customize the look and feel of the app.">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Theme</h3>
          <div className="flex gap-3">
            {(["dark", "light"] as const).map((t) => (
              <button key={t} onClick={() => setTheme(t)} className={`flex-1 p-4 rounded-xl border text-center font-semibold text-sm transition-colors ${theme === t ? "gradient-primary text-primary-foreground border-transparent shadow-md shadow-primary/20" : "bg-card border-border text-foreground hover:bg-surface-hover"}`}>
                {t === "dark" ? "🌙 Dark" : "☀️ Light"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Accessibility</h3>
          <div className="space-y-2">
            <Toggle label="Compact Mode" enabled={s.compactMode} onToggle={() => toggle("compactMode")} description="Reduce spacing and padding throughout the app" />
            <Toggle label="Reduced Motion" enabled={s.reducedMotion} onToggle={() => toggle("reducedMotion")} description="Minimize animations and transitions" />
            <Toggle label="High Contrast" enabled={s.highContrast} onToggle={() => toggle("highContrast")} description="Increase contrast for better readability" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Language</h3>
          <select className="w-full h-11 px-4 rounded-xl bg-card border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow appearance-none">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Portuguese</option>
          </select>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default SettingsDisplay;

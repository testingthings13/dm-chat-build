import { useState } from "react";
import { Search } from "lucide-react";
import SettingsLayout from "@/components/settings/SettingsLayout";

const mockFans = [
  { name: "Alex Rivera", username: "@alexr", subscribed: true },
  { name: "Sam Chen", username: "@samchen", subscribed: true },
  { name: "Jordan Lee", username: "@jordanl", subscribed: false },
  { name: "Taylor Swift", username: "@tswift", subscribed: true },
  { name: "Morgan Blake", username: "@mblake", subscribed: false },
];

const SettingsFans = () => {
  const [tab, setTab] = useState<"fans" | "following">("fans");
  const [search, setSearch] = useState("");

  const filtered = mockFans.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <SettingsLayout title="Fans and Following" description="Manage your fans list and the accounts you follow.">
      <div className="space-y-4">
        <div className="flex gap-2">
          {(["fans", "following"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${tab === t ? "gradient-primary text-primary-foreground shadow-md shadow-primary/20" : "bg-card border border-border text-foreground hover:bg-surface-hover"}`}>
              {t === "fans" ? "Fans" : "Following"}
            </button>
          ))}
        </div>

        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="w-full h-11 pl-10 pr-4 rounded-xl bg-card border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow placeholder:text-muted-foreground" />
        </div>

        <div className="space-y-2">
          {filtered.map((fan) => (
            <div key={fan.username} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shrink-0">
                <span className="text-primary-foreground text-xs font-bold">{fan.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground truncate">{fan.name}</p>
                <p className="text-xs text-muted-foreground">{fan.username}</p>
              </div>
              {tab === "fans" && (
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${fan.subscribed ? "bg-online/20 text-online" : "bg-muted text-muted-foreground"}`}>
                  {fan.subscribed ? "Subscribed" : "Free"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </SettingsLayout>
  );
};

export default SettingsFans;

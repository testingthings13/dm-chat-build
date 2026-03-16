import { useState } from "react";
import { ChevronRight } from "lucide-react";
import SettingsLayout from "@/components/settings/SettingsLayout";

const SettingsPromotions = () => {
  const [promoCode, setPromoCode] = useState("");
  const [trackingLink, setTrackingLink] = useState("https://dmchat.com/janedoe");

  return (
    <SettingsLayout title="Promotions and Tracking" description="Create promotional campaigns and track your referral links.">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Tracking Links</h3>
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Your Referral Link</label>
              <div className="flex gap-2">
                <input type="text" value={trackingLink} readOnly className="flex-1 h-11 px-4 rounded-xl bg-background border border-border text-sm text-foreground outline-none" />
                <button onClick={() => navigator.clipboard.writeText(trackingLink)} className="h-11 px-4 rounded-xl bg-card border border-border text-sm font-medium text-foreground hover:bg-surface-hover transition-colors">Copy</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Promo Codes</h3>
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Create Promo Code</label>
              <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} placeholder="e.g. SUMMER25" className="w-full h-11 px-4 rounded-xl bg-background border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow placeholder:text-muted-foreground" />
            </div>
            <button className="w-full h-11 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20">CREATE CODE</button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Campaign Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Total Clicks", value: "1,234" },
              { label: "Conversions", value: "89" },
              { label: "Revenue", value: "$2,450" },
              { label: "Active Promos", value: "3" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default SettingsPromotions;

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import SettingsLayout from "@/components/settings/SettingsLayout";

const SettingsSubscriptions = () => {
  const [chatPrice, setChatPrice] = useState("5.00");
  const [subPrice, setSubPrice] = useState("9.99");

  return (
    <SettingsLayout title="Subscriptions, Chat Prices and Packages" description="Manage your subscription tiers, set chat prices, and create content packages.">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Subscription Price</h3>
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Monthly Subscription Price ($)</label>
              <input type="text" value={subPrice} onChange={(e) => setSubPrice(e.target.value)} className="w-full h-11 px-4 rounded-xl bg-background border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow" />
            </div>
            <p className="text-xs text-muted-foreground">This is the price fans will pay to subscribe to your content monthly.</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Chat Prices</h3>
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Price per Message ($)</label>
              <input type="text" value={chatPrice} onChange={(e) => setChatPrice(e.target.value)} className="w-full h-11 px-4 rounded-xl bg-background border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Bundles</h3>
          <div className="space-y-2">
            {[
              { months: 3, discount: "10%" },
              { months: 6, discount: "20%" },
              { months: 12, discount: "30%" },
            ].map((bundle) => (
              <button key={bundle.months} className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
                <div>
                  <h4 className="text-sm font-bold text-foreground">{bundle.months} Months Bundle</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{bundle.discount} discount applied</p>
                </div>
                <ChevronRight size={16} className="text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        <button className="w-full h-11 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20">SAVE CHANGES</button>
      </div>
    </SettingsLayout>
  );
};

export default SettingsSubscriptions;

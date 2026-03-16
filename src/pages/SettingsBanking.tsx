import { useState } from "react";
import { ChevronRight } from "lucide-react";
import SettingsLayout from "@/components/settings/SettingsLayout";

const SettingsBanking = () => {
  const [bankName, setBankName] = useState("Chase Bank");
  const [accountLast4, setAccountLast4] = useState("4829");

  return (
    <SettingsLayout title="Banking, Payouts" description="Manage your payout methods and view your earnings.">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Earnings Overview</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Current Balance", value: "$1,245.00" },
              { label: "Pending", value: "$350.00" },
              { label: "Total Earned", value: "$12,890.00" },
              { label: "Last Payout", value: "$890.00" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Payout Method</h3>
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-foreground">{bankName}</p>
                <p className="text-xs text-muted-foreground">Account ending in {accountLast4}</p>
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-online/20 text-online">Active</span>
            </div>
            <button className="w-full flex items-center justify-between p-4 bg-background border border-border rounded-xl hover:bg-surface-hover transition-colors">
              <span className="text-sm font-medium text-foreground">Change payout method</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Payout Schedule</h3>
          <div className="space-y-2">
            {["Weekly", "Bi-weekly", "Monthly"].map((schedule) => (
              <button key={schedule} className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
                <span className="text-sm font-medium text-foreground">{schedule}</span>
                <ChevronRight size={16} className="text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        <button className="w-full h-11 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20">REQUEST PAYOUT</button>
      </div>
    </SettingsLayout>
  );
};

export default SettingsBanking;

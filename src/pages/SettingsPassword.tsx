import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

const SettingsPassword = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <AppLayout>
      <div className="max-w-md mx-auto w-full px-5 py-6">
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate("/settings/account")}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-foreground">Change your Password</h1>
        </div>

        <div className="space-y-4">
          {[
            { label: "Current Password", key: "currentPassword" },
            { label: "New Password", key: "newPassword" },
            { label: "Confirm New Password", key: "confirmPassword" },
          ].map(({ label, key }) => (
            <div key={key}>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</label>
              <input
                type="password"
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full h-11 px-4 rounded-xl bg-card border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
                placeholder="••••••••"
              />
            </div>
          ))}

          <button className="w-full h-11 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20 mt-2">
            UPDATE
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsPassword;

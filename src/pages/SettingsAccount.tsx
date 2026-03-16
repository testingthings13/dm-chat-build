import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

const SettingsAccount = () => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(true);

  const [form, setForm] = useState({
    email: "janedoe@gmail.com",
    displayName: "JaneDoe",
    fullName: "Jane Doe",
    dob: "24/11/2000",
  });

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-5">
          <button
            onClick={() => navigate("/settings")}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-foreground">Your Account</h1>
        </div>

        <div className="px-5 space-y-2">
          {/* Account Information */}
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Account Information</p>
              <p className="text-xs text-muted-foreground mt-0.5">See your account information like your phone number and email address.</p>
            </div>
            <ChevronRight size={16} className="text-muted-foreground shrink-0" />
          </button>

          {showInfo && (
            <div className="bg-card border border-border rounded-xl p-5 space-y-4 animate-fade-in">
              {Object.entries({
                Email: "email",
                "Display Name": "displayName",
                "Full name": "fullName",
                "Date of Birth": "dob",
              }).map(([label, key]) => (
                <div key={key}>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</label>
                  <input
                    type="text"
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-background border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
              ))}
              <button className="w-full h-11 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20">
                UPDATE
              </button>
            </div>
          )}

          {/* Change Password */}
          <button
            onClick={() => navigate("/settings/password")}
            className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Change your Password</p>
              <p className="text-xs text-muted-foreground mt-0.5">You can change your password at any time you like.</p>
            </div>
            <ChevronRight size={16} className="text-muted-foreground shrink-0" />
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsAccount;

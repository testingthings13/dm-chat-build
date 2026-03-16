import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

const SettingsAccount = () => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(true);
  const [form, setForm] = useState({ email: "janedoe@gmail.com", displayName: "JaneDoe", fullName: "Jane Doe", dob: "24/11/2000" });

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto w-full px-4 md:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/settings")} className="text-muted-foreground hover:text-foreground"><ArrowLeft size={20} /></button>
          <h1 className="text-xl font-bold text-foreground">Your Account</h1>
        </div>

        <div className="space-y-3">
          <button onClick={() => setShowInfo(!showInfo)} className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
            <div className="text-left"><h3 className="text-sm font-bold text-foreground">Account Information</h3><p className="text-xs text-muted-foreground mt-0.5">See your account information like your phone number and email address.</p></div>
            <ChevronRight size={16} className="text-muted-foreground shrink-0" />
          </button>

          {showInfo && (
            <div className="bg-card border border-border rounded-xl p-5 space-y-4 animate-fade-in">
              {Object.entries({ Email: "email", "Display Name": "displayName", "Full name": "fullName", "Date of Birth": "dob" }).map(([label, key]) => (
                <div key={key}>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</label>
                  <input type="text" value={form[key as keyof typeof form]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className="w-full h-11 px-4 rounded-xl bg-background border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow" />
                </div>
              ))}
              <button className="w-full h-11 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20">UPDATE</button>
            </div>
          )}

          <button onClick={() => navigate("/settings/password")} className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-surface-hover transition-colors">
            <div className="text-left"><h3 className="text-sm font-bold text-foreground">Change your Password</h3><p className="text-xs text-muted-foreground mt-0.5">You can change your password at any time you like.</p></div>
            <ChevronRight size={16} className="text-muted-foreground shrink-0" />
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsAccount;

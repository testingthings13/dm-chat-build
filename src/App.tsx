import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ChatView from "./pages/ChatView";
import ChatGallery from "./pages/ChatGallery";
import ProfilePage from "./pages/ProfilePage";
import CreatorProfile from "./pages/CreatorProfile";
import PremiumBoxes from "./pages/PremiumBoxes";
import Sexting from "./pages/Sexting";
import SextingEditor from "./pages/SextingEditor";
import SextingReview from "./pages/SextingReview";
import Settings from "./pages/Settings";
import SettingsAccount from "./pages/SettingsAccount";
import SettingsPassword from "./pages/SettingsPassword";
import SettingsPrivacy from "./pages/SettingsPrivacy";
import SettingsSubscriptions from "./pages/SettingsSubscriptions";
import SettingsPromotions from "./pages/SettingsPromotions";
import SettingsFans from "./pages/SettingsFans";
import SettingsNotifications from "./pages/SettingsNotifications";
import SettingsBanking from "./pages/SettingsBanking";
import SettingsDisplay from "./pages/SettingsDisplay";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat/:id" element={<ChatView />} />
          <Route path="/chat/:id/gallery" element={<ChatGallery />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/creator/:id" element={<CreatorProfile />} />
          <Route path="/box" element={<PremiumBoxes />} />
          <Route path="/sexting" element={<Sexting />} />
          <Route path="/sexting/:id/edit" element={<SextingEditor />} />
          <Route path="/sexting/:id/review" element={<SextingReview />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/account" element={<SettingsAccount />} />
          <Route path="/settings/password" element={<SettingsPassword />} />
          <Route path="/settings/privacy" element={<SettingsPrivacy />} />
          <Route path="/settings/subscriptions" element={<SettingsSubscriptions />} />
          <Route path="/settings/promotions" element={<SettingsPromotions />} />
          <Route path="/settings/fans" element={<SettingsFans />} />
          <Route path="/settings/notifications" element={<SettingsNotifications />} />
          <Route path="/settings/banking" element={<SettingsBanking />} />
          <Route path="/settings/display" element={<SettingsDisplay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

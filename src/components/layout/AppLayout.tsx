import { ReactNode } from "react";
import BottomNav from "./BottomNav";
import DesktopSidebar from "./DesktopSidebar";

interface AppLayoutProps {
  children: ReactNode;
  hideBottomNav?: boolean;
}

const AppLayout = ({ children, hideBottomNav }: AppLayoutProps) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      <DesktopSidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className={`flex-1 overflow-y-auto ${!hideBottomNav ? "pb-16 md:pb-0" : ""}`}>
          {children}
        </div>
      </main>
      {!hideBottomNav && <BottomNav />}
    </div>
  );
};

export default AppLayout;

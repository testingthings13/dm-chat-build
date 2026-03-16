import { useNavigate } from "react-router-dom";
import { BadgeCheck, Inbox, Bell, Settings, User } from "lucide-react";
import { creators } from "@/data/mockData";
import AppLayout from "@/components/layout/AppLayout";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";

const mockPosts = [
  { id: "p1", imageUrl: gallery3, caption: "I can't wait to actually proper shot again" },
  { id: "p2", imageUrl: gallery2, caption: "Something special coming soon 🔥" },
  { id: "p3", imageUrl: gallery1, caption: "New content just dropped ✨" },
  { id: "p4", imageUrl: gallery4, caption: "Exclusive behind the scenes" },
];

const quickLinks = [
  { label: "Inbox", icon: Inbox, path: "/home" },
  { label: "Notifications", icon: Bell, path: "/home" },
  { label: "Settings", icon: Settings, path: "/settings" },
  { label: "Profile", icon: User, path: "/profile" },
];

const ProfilePage = () => {
  const navigate = useNavigate();
  const creator = creators[0];

  return (
    <AppLayout>
      <div className="max-w-lg mx-auto w-full pb-6">
        {/* Cover Image */}
        <div className="h-44 md:h-56 relative overflow-hidden">
          {creator.coverImage ? (
            <img src={creator.coverImage} alt="" className="w-full h-full object-cover" />
          ) : creator.avatarImg ? (
            <img src={creator.avatarImg} alt="" className="w-full h-full object-cover object-top scale-110 blur-sm brightness-50" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-background" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        {/* Profile info */}
        <div className="px-5 -mt-20 relative z-10">
          <div className="flex items-end gap-4">
            <div className="shrink-0">
              <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-500">
                <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-background">
                  {creator.avatarImg ? (
                    <img src={creator.avatarImg} alt={creator.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full gradient-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-3xl">{creator.avatar}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="pb-2">
              <div className="flex items-center gap-1.5">
                <h1 className="text-xl font-bold text-foreground">{creator.name}</h1>
                <BadgeCheck size={20} className="text-blue-500 fill-blue-500" />
              </div>
              <p className="text-sm text-muted-foreground">@{creator.username}</p>
              <p className="text-sm font-semibold text-primary mt-0.5">
                {creator.followers >= 1000 ? `${(creator.followers / 1000).toFixed(0)}k` : creator.followers} Followers
              </p>
            </div>
          </div>

          <p className="text-sm text-foreground mt-4 leading-relaxed">{creator.bio}</p>
        </div>

        {/* Quick Links (mobile only - matches Figma "Profile - Creator views own profile") */}
        <div className="mt-6 px-5 grid grid-cols-4 gap-2 md:hidden">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.label}
                onClick={() => navigate(link.path)}
                className="flex flex-col items-center gap-1.5 py-3 rounded-xl bg-card border border-border hover:bg-surface-hover transition-colors"
              >
                <Icon size={20} className="text-muted-foreground" />
                <span className="text-[10px] font-medium text-muted-foreground">{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Feed */}
        <div className="mt-6 px-5 space-y-5">
          {mockPosts.map((post) => (
            <div key={post.id} className="rounded-2xl overflow-hidden bg-card border border-border">
              <div className="aspect-[4/5]">
                <img src={post.imageUrl} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
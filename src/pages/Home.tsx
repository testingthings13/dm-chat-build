import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Star } from "lucide-react";
import { conversations } from "@/data/mockData";
import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"all" | "unread">("all");
  const [search, setSearch] = useState("");

  const filtered = conversations.filter((c) => {
    const matchesSearch = c.user.name.toLowerCase().includes(search.toLowerCase());
    const matchesTab = tab === "all" || c.unreadCount > 0;
    return matchesSearch && matchesTab;
  });

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="px-5 pt-6 pb-3 flex items-center gap-3">
          <h1 className="text-2xl font-extrabold text-foreground tracking-tight">Chats</h1>
          <Search size={18} className="text-muted-foreground" />
        </div>

        {/* Tabs */}
        <div className="px-5 pb-3 flex items-center gap-2">
          {(["all", "unread"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 capitalize ${
                tab === t
                  ? "gradient-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
          <button className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground">
            <Star size={16} />
          </button>
        </div>

        {/* Conversations list */}
        <div className="mt-1">
          {filtered.map((conv, index) => (
            <motion.button
              key={conv.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: index * 0.03 }}
              onClick={() => navigate(`/chat/${conv.id}`)}
              className="w-full flex items-center gap-3.5 px-5 py-3.5 text-left transition-colors duration-100 hover:bg-card/60 active:bg-card rounded-xl mx-0"
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-muted-foreground overflow-hidden">
                  {conv.user.avatarImg ? (
                    <img src={conv.user.avatarImg} alt={conv.user.name} className="w-full h-full object-cover" />
                  ) : (
                    conv.user.avatar
                  )}
                </div>
                {conv.user.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-online rounded-full border-2 border-background" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground truncate">{conv.user.name}</span>
                  <span className="text-[11px] text-muted-foreground shrink-0 ml-2">{conv.lastMessageTime}</span>
                </div>
                <p className="text-xs text-muted-foreground truncate mt-0.5">
                  {conv.isTyping ? (
                    <span className="text-primary italic">{conv.user.name} is typing...</span>
                  ) : (
                    conv.lastMessage
                  )}
                </p>
              </div>

              {/* Unread badge */}
              {conv.unreadCount > 0 && (
                <span className="shrink-0 w-6 h-6 rounded-full gradient-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center">
                  {conv.unreadCount}
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;

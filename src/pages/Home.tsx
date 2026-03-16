import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
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
        <div className="px-5 pt-6 pb-3">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Chats</h1>
        </div>

        {/* Search */}
        <div className="px-5 pb-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="text"
              placeholder="Search conversations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="px-5 pb-2 flex gap-2">
          {(["all", "unread"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 capitalize ${
                tab === t
                  ? "gradient-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
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
              className="w-full flex items-center gap-3.5 px-5 py-3.5 text-left transition-colors duration-100 hover:bg-card/80 active:bg-card"
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-sm font-bold text-muted-foreground">
                  {conv.user.avatar}
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
                <span className="shrink-0 w-5 h-5 rounded-full gradient-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
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

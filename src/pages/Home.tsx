import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Star, Key, Image as ImageIcon, Search as SearchIcon, Smile, Plus } from "lucide-react";
import { conversations } from "@/data/mockData";
import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Home = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"all" | "unread">("all");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const filtered = conversations.filter((c) => {
    const matchesSearch = c.user.name.toLowerCase().includes(search.toLowerCase());
    const matchesTab = tab === "all" || c.unreadCount > 0;
    return matchesSearch && matchesTab;
  });

  const selectedConv = conversations.find((c) => c.id === selectedId);

  const handleConvClick = (id: string) => {
    // On mobile, navigate to chat view. On desktop, show inline.
    if (window.innerWidth < 768) {
      navigate(`/chat/${id}`);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <AppLayout>
      <div className="flex h-full">
        {/* Conversation list */}
        <div className="w-full md:w-[380px] md:border-r md:border-border shrink-0 flex flex-col h-full">
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
          <div className="flex-1 overflow-y-auto mt-1">
            {filtered.map((conv, index) => {
              const isActive = conv.id === selectedId;
              return (
                <motion.button
                  key={conv.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.03 }}
                  onClick={() => handleConvClick(conv.id)}
                  className={`w-full flex items-center gap-3.5 px-5 py-3.5 text-left transition-colors duration-100 ${
                    isActive ? "bg-card/80" : "hover:bg-card/60 active:bg-card"
                  }`}
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
              );
            })}
          </div>
        </div>

        {/* Desktop: Chat area */}
        <div className="hidden md:flex flex-1 flex-col h-full">
          {selectedConv ? (
            <>
              {/* Chat header - large name + icons like Figma */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden flex items-center justify-center">
                    {selectedConv.user.avatarImg ? (
                      <img src={selectedConv.user.avatarImg} alt={selectedConv.user.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-sm font-bold text-muted-foreground">{selectedConv.user.avatar}</span>
                    )}
                  </div>
                  <h2 className="text-2xl font-extrabold text-foreground">{selectedConv.user.name}</h2>
                </div>
                <div className="flex items-center gap-2">
                  {[Key, ImageIcon, SearchIcon].map((Icon, i) => (
                    <button
                      key={i}
                      onClick={i === 1 ? () => navigate(`/chat/${selectedConv.id}/gallery`) : undefined}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {selectedConv.messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15, delay: index * 0.02 }}
                    className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[65%] ${msg.isOwn ? "" : "flex gap-2.5"}`}>
                      {!msg.isOwn && (
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-1 overflow-hidden">
                          {selectedConv.user.avatarImg ? (
                            <img src={selectedConv.user.avatarImg} alt={selectedConv.user.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-[10px] font-medium text-muted-foreground">{selectedConv.user.avatar}</span>
                          )}
                        </div>
                      )}
                      <div>
                        <div className={`px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                          msg.isOwn
                            ? "bg-message-own text-message-own-foreground rounded-2xl rounded-br-md"
                            : "bg-message-other text-message-other-foreground rounded-2xl rounded-bl-md"
                        }`}>
                          {msg.text}
                        </div>
                        <div className={`flex items-center gap-1 mt-1 ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                          <p className="text-[10px] text-muted-foreground">{msg.timestamp}</p>
                          {msg.isOwn && <span className="text-[10px] text-primary">✓✓</span>}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {selectedConv.isTyping && (
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                      {selectedConv.user.avatarImg ? (
                        <img src={selectedConv.user.avatarImg} alt={selectedConv.user.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-[10px] font-medium text-muted-foreground">{selectedConv.user.avatar}</span>
                      )}
                    </div>
                    <div className="bg-message-other rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0 }} className="w-2 h-2 rounded-full bg-muted-foreground" />
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-2 h-2 rounded-full bg-muted-foreground" />
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="w-2 h-2 rounded-full bg-muted-foreground" />
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="px-6 py-3 border-t border-border shrink-0">
                <div className="flex items-center gap-2">
                  <button className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground">
                    <Smile size={20} />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write message..."
                    className="flex-1 h-11 px-4 rounded-full bg-secondary text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
                    onKeyDown={(e) => e.key === "Enter" && setMessage("")}
                  />
                  <button className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-primary-foreground" onClick={() => setMessage("")}>
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center">
              <img src={logo} alt="Chatabox" className="w-16 h-16 mb-4 opacity-30" />
              <p className="text-muted-foreground text-sm">Select a conversation to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;

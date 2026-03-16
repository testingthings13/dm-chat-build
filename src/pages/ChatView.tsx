import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MoreVertical, Image, Send, Smile } from "lucide-react";
import { conversations } from "@/data/mockData";
import { motion } from "framer-motion";

const ChatView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const conversation = conversations.find((c) => c.id === id);

  if (!conversation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Conversation not found</p>
      </div>
    );
  }

  const { user, messages } = conversation;

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0 glass">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/home")}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground md:hidden"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center">
              <span className="text-xs font-bold text-muted-foreground">{user.avatar}</span>
            </div>
            {user.online && (
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-online rounded-full border-2 border-background" />
            )}
          </div>
          <div>
            <h2 className="text-sm font-bold text-foreground">{user.name}</h2>
            <p className="text-[11px] text-muted-foreground">{user.online ? "Online" : "Offline"}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => navigate(`/chat/${id}/gallery`)}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Image size={18} />
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 space-y-3">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: index * 0.03 }}
            className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[75%] md:max-w-[60%] ${msg.isOwn ? "" : "flex gap-2.5"}`}>
              {!msg.isOwn && (
                <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center shrink-0 mt-1">
                  <span className="text-[10px] font-bold text-muted-foreground">{user.avatar}</span>
                </div>
              )}
              <div>
                <div
                  className={`px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    msg.isOwn
                      ? "gradient-primary text-message-own-foreground rounded-2xl rounded-br-md"
                      : "bg-card border border-border text-message-other-foreground rounded-2xl rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
                <p className={`text-[10px] text-muted-foreground mt-1 ${msg.isOwn ? "text-right" : "text-left"}`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 md:px-6 py-3 border-t border-border shrink-0 glass">
        <div className="flex items-center gap-2 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write message..."
              className="w-full h-11 px-4 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
              onKeyDown={(e) => e.key === "Enter" && setMessage("")}
            />
          </div>
          <button className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Smile size={20} />
          </button>
          <button
            className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
            onClick={() => setMessage("")}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;

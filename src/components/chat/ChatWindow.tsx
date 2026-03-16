import { useState } from "react";
import { Phone, Video, MoreVertical, Paperclip, Smile, Send } from "lucide-react";
import type { Conversation } from "@/data/mockData";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

interface ChatWindowProps {
  conversation: Conversation | null;
}

const ChatWindow = ({ conversation }: ChatWindowProps) => {
  const [message, setMessage] = useState("");

  if (!conversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <span className="text-primary font-bold text-2xl">DM</span>
          </div>
          <h2 className="text-lg font-semibold text-foreground">Welcome to DMchat</h2>
          <p className="text-sm text-muted-foreground mt-1">Select a conversation to start messaging</p>
        </div>
      </div>
    );
  }

  const { user, messages } = conversation;

  return (
    <div className="flex-1 flex flex-col bg-background h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-semibold">{user.avatar}</span>
            </div>
            {user.online && (
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-online rounded-full border-2 border-background" />
            )}
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">{user.name}</h2>
            <p className="text-xs text-muted-foreground">{user.online ? "Online" : "Offline"}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[Phone, Video, MoreVertical].map((Icon, i) => (
            <button key={i} className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-100">
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: index * 0.02 }}
            className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[65%] ${msg.isOwn ? "" : "flex gap-2"}`}>
              {!msg.isOwn && (
                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                  <span className="text-[10px] font-medium text-muted-foreground">{user.avatar}</span>
                </div>
              )}
              <div>
                <div
                  className={`px-3.5 py-2 text-sm leading-relaxed ${
                    msg.isOwn
                      ? "bg-message-own text-message-own-foreground rounded-2xl rounded-br-md"
                      : "bg-message-other text-message-other-foreground rounded-2xl rounded-bl-md"
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
      <div className="px-6 py-3 border-t border-border shrink-0">
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-100">
            <Paperclip size={18} />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full h-10 px-4 rounded-lg bg-muted text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow duration-150"
              onKeyDown={(e) => e.key === "Enter" && setMessage("")}
            />
          </div>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-100">
            <Smile size={18} />
          </button>
          <button
            className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity duration-100"
            onClick={() => setMessage("")}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;

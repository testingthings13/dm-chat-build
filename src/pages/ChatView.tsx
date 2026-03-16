import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Key, Image, Search, Smile, Plus } from "lucide-react";
import { conversations } from "@/data/mockData";
import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";

const ChatView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const conversation = conversations.find((c) => c.id === id);
  if (!conversation) {
    return <AppLayout hideBottomNav><div className="flex-1 flex items-center justify-center"><p className="text-muted-foreground">Conversation not found</p></div></AppLayout>;
  }

  const { user, messages } = conversation;

  return (
    <AppLayout hideBottomNav>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/home")} className="md:hidden text-muted-foreground hover:text-foreground"><ArrowLeft size={20} /></button>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
              {user.avatarImg ? (
                <img src={user.avatarImg} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm font-bold text-muted-foreground">{user.avatar}</span>
              )}
            </div>
            <h2 className="text-lg font-bold text-foreground">{user.name}</h2>
          </div>
          <div className="flex items-center gap-2">
            {[Key, Image, Search].map((Icon, i) => (
              <button key={i} onClick={i === 1 ? () => navigate(`/chat/${id}/gallery`) : undefined} className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground">
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map((msg, index) => (
            <motion.div key={msg.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15, delay: index * 0.02 }} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] ${msg.isOwn ? "" : "flex gap-2.5"}`}>
                {!msg.isOwn && (
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-1 overflow-hidden">
                    {user.avatarImg ? (
                      <img src={user.avatarImg} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[10px] font-medium text-muted-foreground">{user.avatar}</span>
                    )}
                  </div>
                )}
                <div>
                  <div className={`px-4 py-2.5 text-sm leading-relaxed ${msg.isOwn ? "bg-message-own text-message-own-foreground rounded-2xl rounded-br-md" : "bg-message-other text-message-other-foreground rounded-2xl rounded-bl-md"}`}>
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
          {conversation.isTyping && (
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                {user.avatarImg ? (
                  <img src={user.avatarImg} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-[10px] font-medium text-muted-foreground">{user.avatar}</span>
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

        <div className="px-4 py-3 border-t border-border shrink-0">
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground"><Smile size={20} /></button>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write message..." className="flex-1 h-11 px-4 rounded-full bg-secondary text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring" onKeyDown={(e) => e.key === "Enter" && setMessage("")} />
            <button className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-primary-foreground" onClick={() => setMessage("")}><Plus size={18} /></button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ChatView;

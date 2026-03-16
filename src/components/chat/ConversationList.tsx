import { Search } from "lucide-react";
import type { Conversation } from "@/data/mockData";

interface ConversationListProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

const ConversationList = ({ conversations, activeId, onSelect }: ConversationListProps) => {
  return (
    <div className="flex flex-col w-[320px] bg-card border-r border-border shrink-0 h-full">
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <h1 className="text-xl font-semibold text-foreground tracking-tight">Chatabox</h1>
      </div>

      {/* Search */}
      <div className="px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full h-9 pl-9 pr-3 rounded-lg bg-muted text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow duration-150"
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conv) => {
          const isActive = conv.id === activeId;
          return (
            <button
              key={conv.id}
              onClick={() => onSelect(conv.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-100 ${
                isActive ? "bg-primary/8" : "hover:bg-muted"
              }`}
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium overflow-hidden ${
                  isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {conv.user.avatarImg ? (
                    <img src={conv.user.avatarImg} alt={conv.user.name} className="w-full h-full object-cover" />
                  ) : (
                    conv.user.avatar
                  )}
                </div>
                {conv.user.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-online rounded-full border-2 border-card" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground truncate">{conv.user.name}</span>
                  <span className="text-xs text-muted-foreground shrink-0 ml-2">{conv.lastMessageTime}</span>
                </div>
                <p className="text-xs text-muted-foreground truncate mt-0.5">{conv.lastMessage}</p>
              </div>

              {/* Unread badge */}
              {conv.unreadCount > 0 && (
                <span className="shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[11px] font-medium flex items-center justify-center">
                  {conv.unreadCount}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationList;

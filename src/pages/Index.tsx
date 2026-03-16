import { useState } from "react";
import NavRail from "@/components/chat/NavRail";
import ConversationList from "@/components/chat/ConversationList";
import ChatWindow from "@/components/chat/ChatWindow";
import { conversations } from "@/data/mockData";

const Index = () => {
  const [activeTab, setActiveTab] = useState("chats");
  const [activeConversationId, setActiveConversationId] = useState<string | null>("1");

  const activeConversation = conversations.find((c) => c.id === activeConversationId) || null;

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <NavRail activeTab={activeTab} onTabChange={setActiveTab} />
      <ConversationList
        conversations={conversations}
        activeId={activeConversationId}
        onSelect={setActiveConversationId}
      />
      <ChatWindow conversation={activeConversation} />
    </div>
  );
};

export default Index;

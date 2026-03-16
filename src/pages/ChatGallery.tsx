import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Play } from "lucide-react";
import { conversations, galleryItems } from "@/data/mockData";
import { useState } from "react";

const tabs = ["All", "Unlocked", "Photos", "Videos"] as const;

const ChatGallery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("All");

  const conversation = conversations.find((c) => c.id === id);

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === "Unlocked") return !item.isLocked;
    if (activeTab === "Photos") return item.type === "photo";
    if (activeTab === "Videos") return item.type === "video";
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
        <button
          onClick={() => navigate(`/chat/${id}`)}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-sm font-bold text-foreground">{conversation?.user.name || "Chat"}</h1>
          <p className="text-xs text-muted-foreground">Chat Gallery</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === t
                ? "gradient-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1 p-1">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square bg-card rounded-lg overflow-hidden group cursor-pointer"
          >
            {/* Placeholder gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />

            {item.isLocked && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm">
                <Lock size={20} className="text-muted-foreground mb-1" />
                <span className="text-xs font-bold text-foreground">${item.price.toFixed(2)}</span>
              </div>
            )}

            {item.type === "video" && !item.isLocked && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center">
                  <Play size={16} className="text-foreground ml-0.5" fill="currentColor" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatGallery;

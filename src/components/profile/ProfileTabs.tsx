import { useState } from "react";
import { Heart, MessageCircle, Image as ImageIcon, Grid3X3, Bookmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/data/mockData";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";

interface Post {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  liked: boolean;
  saved: boolean;
  timeAgo: string;
}

const initialPosts: Post[] = [
  { id: "p1", imageUrl: gallery3, caption: "I can't wait to actually proper shot again", likes: 2393, comments: 89, liked: false, saved: false, timeAgo: "2h ago" },
  { id: "p2", imageUrl: gallery2, caption: "Something special coming soon 🔥", likes: 1820, comments: 45, liked: true, saved: false, timeAgo: "5h ago" },
  { id: "p3", imageUrl: gallery1, caption: "New content just dropped ✨", likes: 3100, comments: 120, liked: false, saved: true, timeAgo: "1d ago" },
  { id: "p4", imageUrl: gallery4, caption: "Exclusive behind the scenes", likes: 980, comments: 34, liked: false, saved: false, timeAgo: "2d ago" },
];

const receivedMedia = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  ...galleryImages.slice(0, 4),
];

const tabs = [
  { id: "posts", label: "Posts", icon: Grid3X3 },
  { id: "media", label: "Media", icon: ImageIcon },
  { id: "saved", label: "Saved", icon: Bookmark },
];

const ProfileTabs = ({ creatorName }: { creatorName: string }) => {
  const [activeTab, setActiveTab] = useState("posts");
  const [posts, setPosts] = useState(initialPosts);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const toggleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    );
  };

  const toggleSave = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, saved: !p.saved } : p))
    );
  };

  const savedPosts = posts.filter((p) => p.saved);

  return (
    <div className="mt-6">
      {/* Tab bar */}
      <div className="flex border-b border-border mx-5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-semibold transition-colors relative ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <Icon size={16} />
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        {activeTab === "posts" && (
          <motion.div
            key="posts"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="px-5 pt-4 space-y-5 pb-24"
          >
            {posts.map((post) => (
              <div key={post.id} className="rounded-2xl overflow-hidden bg-card border border-border">
                <div
                  className="aspect-[4/5] cursor-pointer relative group"
                  onClick={() => setLightboxImg(post.imageUrl)}
                >
                  <img src={post.imageUrl} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className="flex items-center gap-1.5 text-xs transition-colors"
                      >
                        <Heart
                          size={18}
                          className={post.liked ? "text-red-500 fill-red-500" : "text-muted-foreground"}
                        />
                        <span className={post.liked ? "text-red-500 font-semibold" : "text-muted-foreground"}>
                          {post.likes.toLocaleString()}
                        </span>
                      </button>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MessageCircle size={16} />
                        {post.comments}
                      </span>
                    </div>
                    <button onClick={() => toggleSave(post.id)}>
                      <Bookmark
                        size={18}
                        className={post.saved ? "text-primary fill-primary" : "text-muted-foreground"}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-foreground">
                    <span className="font-bold">{creatorName}</span>{" "}
                    <span className="text-muted-foreground">{post.caption}</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">{post.timeAgo}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "media" && (
          <motion.div
            key="media"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="px-5 pt-4 pb-24"
          >
            <p className="text-xs text-muted-foreground mb-3">Received & shared media</p>
            <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden">
              {receivedMedia.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square cursor-pointer relative group"
                  onClick={() => setLightboxImg(img)}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "saved" && (
          <motion.div
            key="saved"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="px-5 pt-4 pb-24"
          >
            {savedPosts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
                <Bookmark size={40} className="mb-3 opacity-30" />
                <p className="text-sm">No saved posts yet</p>
                <p className="text-xs mt-1">Tap the bookmark icon to save posts</p>
              </div>
            ) : (
              <div className="space-y-5">
                {savedPosts.map((post) => (
                  <div key={post.id} className="rounded-2xl overflow-hidden bg-card border border-border">
                    <div className="aspect-[4/5] cursor-pointer" onClick={() => setLightboxImg(post.imageUrl)}>
                      <img src={post.imageUrl} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3.5">
                      <p className="text-sm text-muted-foreground">{post.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImg}
              alt=""
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileTabs;

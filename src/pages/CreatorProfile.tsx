import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, MessageCircle, Lock, BadgeCheck } from "lucide-react";
import { creators, galleryImages } from "@/data/mockData";
import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";

interface Post {
  id: string;
  imageUrl: string;
  isLocked: boolean;
  likes: number;
  comments: number;
  caption: string;
}

const mockPosts: Post[] = [
  { id: "p1", imageUrl: gallery3, isLocked: false, likes: 2393, comments: 2393, caption: "I can't wait to actually proper shot again" },
  { id: "p2", imageUrl: gallery2, isLocked: true, likes: 1820, comments: 945, caption: "Something special coming soon 🔥" },
  { id: "p3", imageUrl: gallery1, isLocked: false, likes: 3100, comments: 1200, caption: "New content just dropped ✨" },
  { id: "p4", imageUrl: gallery4, isLocked: true, likes: 980, comments: 430, caption: "Exclusive behind the scenes" },
];

const CreatorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const creator = creators.find((c) => c.id === id) || creators[0];
  const isOwnProfile = false; // Toggle for own vs public view
  const isSubscribed = creator.isSubscribed;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Cover Image */}
      <div className="h-52 md:h-64 relative overflow-hidden">
        {creator.coverImage ? (
          <img
            src={creator.coverImage}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : creator.avatarImg ? (
          <img
            src={creator.avatarImg}
            alt=""
            className="w-full h-full object-cover object-top scale-110 blur-sm brightness-50"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-background" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-9 h-9 rounded-full border border-white/20 bg-background/30 backdrop-blur-sm flex items-center justify-center text-white z-10"
        >
          <ArrowLeft size={18} />
        </button>
      </div>

      {/* Profile info - overlapping cover */}
      <div className="px-5 -mt-20 relative z-10">
        <div className="flex items-end gap-4">
          {/* Avatar with cyan ring */}
          <div className="shrink-0">
            <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-500">
              <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-background">
                {creator.avatarImg ? (
                  <img src={creator.avatarImg} alt={creator.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-3xl">{creator.avatar}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name + status */}
          <div className="pb-2">
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl font-bold text-foreground">{creator.name}</h1>
              <BadgeCheck size={20} className="text-blue-500 fill-blue-500" />
            </div>
            <p className="text-sm text-muted-foreground">@{creator.username}</p>

            {!isOwnProfile && (
              <div className="flex items-center gap-3 mt-1">
                {creator.online && (
                  <span className="text-xs text-online font-medium">Available now</span>
                )}
                {isSubscribed && (
                  <span className="text-xs text-muted-foreground font-medium">Subscribed ✓</span>
                )}
              </div>
            )}

            {isOwnProfile && (
              <p className="text-sm font-semibold text-primary mt-0.5">
                {creator.followers >= 1000 ? `${(creator.followers / 1000).toFixed(0)}k` : creator.followers} Followers
              </p>
            )}
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-foreground mt-4 leading-relaxed">
          {creator.bio}
        </p>

        {/* Action buttons (public view) */}
        {!isOwnProfile && (
          <div className="flex gap-3 mt-4">
            <button className="flex-1 h-12 rounded-full bg-card border border-border text-sm font-bold text-foreground hover:bg-muted transition-colors">
              Follow
            </button>
            <button className="flex-1 h-12 rounded-full gradient-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              Subscribe
            </button>
          </div>
        )}
      </div>

      {/* Content Feed */}
      <div className="mt-6 px-5 space-y-5">
        {mockPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="rounded-2xl overflow-hidden bg-card border border-border"
          >
            {/* Post image or locked state */}
            <div className="relative aspect-[4/5]">
              {!isSubscribed && post.isLocked ? (
                <div className="w-full h-full bg-muted/80 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center">
                    <Lock size={36} className="text-muted-foreground/50" />
                  </div>
                </div>
              ) : (
                <img src={post.imageUrl} alt="" className="w-full h-full object-cover" />
              )}
            </div>

            {/* Post footer */}
            <div className="p-3.5">
              <div className="flex items-center gap-4 mb-2">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Heart size={16} className="text-muted-foreground" />
                  {post.likes.toLocaleString()}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MessageCircle size={16} className="text-muted-foreground" />
                  {post.comments.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-foreground">
                <span className="font-bold">{creator.name}</span>{" "}
                <span className="text-muted-foreground">{post.caption}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fixed bottom Message button (public view) */}
      {!isOwnProfile && (
        <div className="fixed bottom-0 left-0 right-0 p-4 z-30">
          <button
            onClick={() => navigate("/home")}
            className="w-full max-w-lg mx-auto h-14 rounded-2xl gradient-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2.5 shadow-2xl shadow-primary/30"
          >
            <MessageCircle size={20} fill="currentColor" />
            Message {creator.name.split(" ")[0]}
          </button>
        </div>
      )}
    </div>
  );
};

export default CreatorProfile;

import { useNavigate } from "react-router-dom";
import { Plus, SlidersHorizontal, MessageCircle } from "lucide-react";
import { creators } from "@/data/mockData";
import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";

// Paired creator boxes built from actual creator data
const favoriteBoxes = [
  { id: "1", creator1: 1, creator2: 2 }, // Spencer + Jewel
  { id: "2", creator1: 3, creator2: 0 }, // Gemma + Sarah
  { id: "3", creator1: 1, creator2: 4 }, // Spencer + Lucy
];

// Ring color cycle
const ringColors = [
  "from-rose-500 to-orange-400",
  "from-amber-400 to-yellow-500",
  "from-rose-500 to-orange-400",
  "from-cyan-400 to-teal-500",
];

const PremiumBoxes = () => {
  const navigate = useNavigate();

  // Build received media from actual creators (cycle through them)
  const receivedMedia = Array.from({ length: 16 }, (_, i) => {
    const creatorIndex = i % creators.length;
    const creator = creators[creatorIndex];
    return {
      id: `r-${i + 1}`,
      name: creator.name,
      img: creator.avatarImg,
      ringColor: ringColors[i % ringColors.length],
      hasBadge: i === 1 || i === 10,
    };
  });

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto w-full px-4 md:px-6 py-6">
        <h1 className="text-2xl font-extrabold text-foreground tracking-tight mb-6">Premium boxes</h1>

        {/* My Favorite Creators */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-foreground">My Favorite Creators</h2>
            <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Plus size={18} />
            </button>
          </div>

          {/* Horizontal scroll of paired creator circles */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {favoriteBoxes.map((box, index) => {
              const c1 = creators[box.creator1];
              const c2 = creators[box.creator2];
              return (
                <motion.div
                  key={box.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="shrink-0 flex flex-col items-center gap-2 cursor-pointer"
                >
                  {/* Paired circles */}
                  <div className="relative w-36 h-24 flex items-center justify-center">
                    <div className="absolute left-2 w-20 h-20 rounded-full overflow-hidden border-[3px] border-background shadow-lg z-10">
                      {c1.avatarImg ? (
                        <img src={c1.avatarImg} alt={c1.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-secondary" />
                      )}
                    </div>
                    <div className="absolute right-2 w-20 h-20 rounded-full overflow-hidden border-[3px] border-background shadow-lg">
                      {c2.avatarImg ? (
                        <img src={c2.avatarImg} alt={c2.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-secondary" />
                      )}
                    </div>
                    {/* Heart overlay */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-md">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center leading-tight max-w-[120px]">
                    {c1.name.split(" ")[0]} and<br />{c2.name}
                  </p>
                </motion.div>
              );
            })}

            {/* Add a Creator */}
            <div className="shrink-0 flex flex-col items-center gap-2 cursor-pointer">
              <div className="w-36 h-24 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all">
                  <Plus size={24} />
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center">Add a<br />Creator</p>
            </div>
          </div>
        </section>

        {/* My Received Media */}
        <section className="bg-card border border-border rounded-2xl p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-foreground">My Received Media</h2>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <SlidersHorizontal size={18} />
            </button>
          </div>

          {/* Grid of circular avatars with colored rings */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-x-3 gap-y-4">
            {receivedMedia.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15, delay: index * 0.02 }}
                className="flex flex-col items-center gap-1.5 cursor-pointer"
              >
                <div className="relative">
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full p-[2.5px] bg-gradient-to-br ${item.ringColor}`}>
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-background">
                      {item.img ? (
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-secondary" />
                      )}
                    </div>
                  </div>
                  {item.hasBadge && (
                    <div className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-sm">
                      <MessageCircle size={10} className="text-primary-foreground" fill="currentColor" />
                    </div>
                  )}
                </div>
                <p className="text-[10px] text-muted-foreground text-center leading-tight w-full truncate">
                  {item.name.split(" ")[0]}<br />{item.name.split(" ")[1] || ""}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default PremiumBoxes;

import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { creators } from "@/data/mockData";
import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";

const PremiumBoxes = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto w-full px-4 md:px-6 py-6">
        <h1 className="text-2xl font-bold text-foreground tracking-tight mb-6">Premium Boxes</h1>

        {/* My Favorite Creators */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-foreground">My Favorite Creators</h2>
            <button className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Plus size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {creators.map((creator, index) => (
              <motion.button
                key={creator.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                onClick={() => navigate(`/creator/${creator.id}`)}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer bg-card border border-border"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                    <span className="text-primary-foreground font-bold text-xl">{creator.avatar}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-xs font-bold text-foreground truncate">{creator.name}</p>
                </div>
              </motion.button>
            ))}

            {/* Add creator */}
            <button className="aspect-[3/4] rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all">
              <Plus size={24} />
              <span className="text-xs font-medium">Add a Creator</span>
            </button>
          </div>
        </section>

        {/* My Received Media */}
        <section>
          <h2 className="text-sm font-semibold text-foreground mb-4">My Received Media</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-card border border-border overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default PremiumBoxes;

import { useNavigate } from "react-router-dom";
import { Plus, ThumbsUp } from "lucide-react";
import { sextingScripts } from "@/data/mockData";
import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";

const Sexting = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto w-full px-4 md:px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Sexting</h1>
          <button className="h-9 px-4 rounded-xl gradient-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity shadow-md shadow-primary/20 flex items-center gap-2">
            <Plus size={14} />
            ADD SEXTING SCRIPT
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sextingScripts.map((script, index) => (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="bg-card border border-border rounded-2xl overflow-hidden group"
            >
              {/* Thumbnail grid */}
              <div className="grid grid-cols-3 gap-0.5 p-0.5">
                {script.thumbnails.map((_, i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-primary/15 to-primary/5 rounded-sm" />
                ))}
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-sm font-bold text-foreground">{script.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <ThumbsUp size={12} />
                    <span className="text-xs">{script.votes} votes</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-4">{script.description}</p>

                <button
                  onClick={() => navigate(`/sexting/${script.id}/edit`)}
                  className="w-full h-9 rounded-xl gradient-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
                >
                  GET STARTED
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Sexting;

import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { sextingScripts } from "@/data/mockData";
import { motion } from "framer-motion";

const SextingReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const script = sextingScripts.find((s) => s.id === id) || sextingScripts[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
        <button
          onClick={() => navigate(`/sexting/${id}/edit`)}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-sm font-bold text-foreground uppercase tracking-wide">Sexting Script</h1>
          <p className="text-xs text-muted-foreground">{script.itemCount}/{script.itemCount}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-foreground">Sexting script</h2>
          <p className="text-xs text-muted-foreground mt-1">Review and confirm all captions for the content.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {script.items.slice(0, 8).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: index * 0.03 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="h-32 bg-gradient-to-br from-primary/15 to-primary/5" />

              {/* Info */}
              <div className="p-3">
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{item.text}</p>
                <p className="text-sm font-bold text-foreground mt-2">${item.price.toFixed(2)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => navigate("/sexting")}
          className="w-full h-11 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20 mt-6"
        >
          PUBLISH SCRIPT
        </button>
      </div>
    </div>
  );
};

export default SextingReview;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, PlusCircle } from "lucide-react";
import { sextingScripts } from "@/data/mockData";
import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";

const filterTabs = ["All", "Top Voted", "Body type", "Flirty", "Hot", "Soft"];

const Sexting = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Top Voted");

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto w-full px-4 md:px-6 py-6">
        {/* Add button */}
        <button className="w-full h-14 rounded-2xl gradient-primary text-primary-foreground font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 mb-5 shadow-lg shadow-primary/20">
          ADD SEXTING SCRIPT
          <PlusCircle size={20} />
        </button>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                activeFilter === tab
                  ? "gradient-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Script cards */}
        <div className="space-y-5">
          {sextingScripts.map((script, index) => (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="bg-card border border-border rounded-2xl overflow-hidden p-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-foreground">{script.title}</h3>
                <span className="text-xs font-bold text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {script.votes} votes
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{script.description}</p>

              {/* Thumbnail strip */}
              <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
                {script.thumbnails.map((_, i) => (
                  <div key={i} className="shrink-0 w-32 rounded-xl overflow-hidden">
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 via-secondary to-primary/10 rounded-xl" />
                    <p className="text-xs text-muted-foreground mt-1.5 font-medium">Item {i + 1}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => navigate(`/sexting/${script.id}/edit`)}
                className="w-full h-12 rounded-full gradient-primary text-primary-foreground font-bold text-sm tracking-widest uppercase shadow-lg shadow-primary/20"
              >
                GET STARTED
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Sexting;

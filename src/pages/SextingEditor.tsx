import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, DollarSign } from "lucide-react";
import { sextingScripts } from "@/data/mockData";

const SextingEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const script = sextingScripts.find((s) => s.id === id) || sextingScripts[0];

  const [currentStep, setCurrentStep] = useState(0);
  const [autoPrice, setAutoPrice] = useState(true);
  const [price, setPrice] = useState("20");
  const [showUploadModal, setShowUploadModal] = useState(false);

  const totalSteps = script.itemCount;

  const handleSave = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate(`/sexting/${id}/review`);
    }
  };

  const handleSkip = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate(`/sexting/${id}/review`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
        <button
          onClick={() => navigate("/sexting")}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-sm font-bold text-foreground uppercase tracking-wide">Sexting Script</h1>
          <p className="text-xs text-muted-foreground">{currentStep + 1}/{totalSteps}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-muted">
        <div
          className="h-full gradient-primary transition-all duration-300"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="space-y-5">
          {/* Item text */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Item {currentStep + 1}</label>
            <textarea
              className="w-full h-28 px-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
              placeholder="Enter caption text..."
              defaultValue={script.items[currentStep]?.text || ""}
            />
          </div>

          {/* Upload Media */}
          <button
            onClick={() => setShowUploadModal(true)}
            className="w-full h-28 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
          >
            <Upload size={24} />
            <span className="text-sm font-medium">Upload Media</span>
          </button>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {!autoPrice && (
                <div className="relative">
                  <DollarSign size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-24 h-10 pl-8 pr-3 rounded-xl bg-card border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              )}
            </div>
            <button
              onClick={() => setAutoPrice(!autoPrice)}
              className={`h-10 px-4 rounded-xl text-xs font-semibold transition-all ${
                autoPrice
                  ? "gradient-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground"
              }`}
            >
              Auto Price
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSave}
              className="flex-1 h-11 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
            >
              SAVE
            </button>
            <button
              onClick={handleSkip}
              className="flex-1 h-11 rounded-xl bg-card border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
            >
              SKIP
            </button>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShowUploadModal(false)} />
          <div className="relative w-full max-w-sm mx-4 mb-4 md:mb-0 bg-card border border-border rounded-2xl p-6 animate-slide-up">
            <h3 className="text-lg font-bold text-foreground mb-2">Uploaded Media</h3>
            <p className="text-xs text-muted-foreground mb-5">
              Select your image or video to upload to the sexting set from the below options
            </p>

            <div className="space-y-2">
              {["Camera Roll", "Import from Google", "Import from Dropbox"].map((option) => (
                <button
                  key={option}
                  className="w-full h-11 rounded-xl bg-muted text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowUploadModal(false)}
              className="w-full h-11 rounded-xl bg-card border border-border text-sm font-semibold text-muted-foreground hover:text-foreground mt-3 transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SextingEditor;

import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, MessageSquare } from "lucide-react";
import { creators } from "@/data/mockData";

const CreatorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const creator = creators.find((c) => c.id === id) || creators[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Cover */}
      <div className="h-48 md:h-64 bg-gradient-to-br from-primary/30 via-primary/10 to-background relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-9 h-9 rounded-lg glass border border-border flex items-center justify-center text-foreground z-10"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-background shadow-xl">
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

      {/* Info */}
      <div className="pt-18 px-6 text-center mt-10">
        <h1 className="text-2xl font-bold text-foreground">{creator.name}</h1>
        <p className="text-sm text-muted-foreground mt-0.5">@{creator.username}</p>

        <div className="flex items-center justify-center gap-3 mt-2">
          {creator.online && (
            <span className="flex items-center gap-1.5 text-xs text-online font-medium">
              <span className="w-2 h-2 rounded-full bg-online" />
              Available now
            </span>
          )}
          {creator.isSubscribed && (
            <span className="text-xs text-primary font-medium px-2.5 py-0.5 rounded-full bg-primary/10">
              Subscribed
            </span>
          )}
        </div>

        <p className="text-sm text-muted-foreground mt-4 max-w-sm mx-auto leading-relaxed">
          {creator.bio}
        </p>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button className="h-10 px-6 rounded-xl border border-border bg-card text-sm font-semibold text-foreground hover:bg-muted transition-colors flex items-center gap-2">
            <Heart size={16} />
            Follow
          </button>
          {!creator.isSubscribed && (
            <button className="h-10 px-6 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-primary/20">
              Subscribe
            </button>
          )}
          <button
            onClick={() => navigate("/home")}
            className="h-10 px-6 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-primary/20 flex items-center gap-2"
          >
            <MessageSquare size={16} />
            Message {creator.name.split(" ")[0]}
          </button>
        </div>

        {/* Stats */}
        <div className="mt-8 flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">{creator.followers >= 1000 ? `${(creator.followers / 1000).toFixed(1)}k` : creator.followers}</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;

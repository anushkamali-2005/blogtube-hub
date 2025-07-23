import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Choice = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Choose Your Path
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to dive into the world of creative blogging?
          </p>
        </div>

        {/* Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Create Blog Card */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">✨</span>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Create Blog</h2>
            <p className="text-muted-foreground mb-6">
              Join our community of creators. Sign up or log in to start writing and sharing your unique stories.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => navigate("/auth")}
              className="w-full"
            >
              Get Started
            </Button>
          </div>

          {/* View Blogs Card */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">📚</span>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Explore Blogs</h2>
            <p className="text-muted-foreground mb-6">
              Discover amazing content from creators worldwide. Browse, read, and get inspired without signing up.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate("/blogs")}
              className="w-full"
            >
              Browse Content
            </Button>
          </div>
        </div>

        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="text-muted-foreground hover:text-foreground"
        >
          ← Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Choice;
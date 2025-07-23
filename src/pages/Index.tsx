import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 animate-float">
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Writely
            </h1>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            A social blogging platform inspired by YouTube's content model—but for written blogs. 
            Create, share, and discover amazing stories from creators around the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => navigate("/choice")}
              className="min-w-48 shadow-elegant"
            >
              Create Content
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate("/blogs")}
              className="min-w-48 shadow-card"
            >
              Explore Blogs
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Write & Create</h3>
              <p className="text-muted-foreground text-sm">Share your thoughts, stories, and expertise with our intuitive blog editor.</p>
            </div>
            
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discover & Engage</h3>
              <p className="text-muted-foreground text-sm">Explore trending content, like, comment, and connect with fellow creators.</p>
            </div>
            
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Monetize Content</h3>
              <p className="text-muted-foreground text-sm">Turn your passion into profit with sponsored content and premium features.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
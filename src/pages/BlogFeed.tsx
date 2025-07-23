import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

// Mock blog data - in a real app, this would come from an API
const mockBlogs = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next?",
    description: "Exploring emerging trends in web development including AI integration, serverless architecture, and the evolution of user interfaces.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Technology", "Web Development", "AI"],
    likes: 234,
    comments: 45,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Building Sustainable Communities Through Digital Platforms",
    description: "How modern technology can help create and maintain sustainable communities, fostering connections and promoting environmental consciousness.",
    author: "Marcus Rodriguez",
    date: "2024-01-14",
    readTime: "12 min read",
    tags: ["Community", "Sustainability", "Technology"],
    likes: 189,
    comments: 32,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "The Art of Storytelling in the Digital Age",
    description: "Mastering the craft of digital storytelling and how to captivate audiences in an increasingly crowded content landscape.",
    author: "Emma Thompson",
    date: "2024-01-13",
    readTime: "6 min read",
    tags: ["Writing", "Storytelling", "Content"],
    likes: 156,
    comments: 28,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Remote Work Revolution: Lessons from the New Normal",
    description: "Insights and best practices for remote work productivity, team collaboration, and maintaining work-life balance in distributed teams.",
    author: "David Kim",
    date: "2024-01-12",
    readTime: "10 min read",
    tags: ["Remote Work", "Productivity", "Business"],
    likes: 298,
    comments: 67,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Mindfulness in Modern Life: Finding Balance",
    description: "Practical strategies for incorporating mindfulness into busy modern lifestyles and the science behind its benefits for mental health.",
    author: "Dr. Lisa Park",
    date: "2024-01-11",
    readTime: "7 min read",
    tags: ["Mindfulness", "Health", "Lifestyle"],
    likes: 445,
    comments: 89,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop"
  },
  {
    id: 6,
    title: "The Economics of Creator Economy",
    description: "Understanding the financial landscape of content creation, monetization strategies, and building sustainable creative businesses.",
    author: "Alex Johnson",
    date: "2024-01-10",
    readTime: "9 min read",
    tags: ["Creator Economy", "Business", "Monetization"],
    likes: 167,
    comments: 34,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
  }
];

const BlogFeed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-card border-b border-border/20 sticky top-0 z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Writely
              </h1>
              <Badge variant="outline" className="hidden sm:inline-flex">
                Discover Amazing Content
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate("/choice")}>
                Join Community
              </Button>
              <Button variant="ghost" onClick={() => navigate("/")}>
                Home
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Explore Amazing Blogs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover stories, insights, and knowledge from creators around the world. 
            Find inspiration in every scroll.
          </p>
        </div>

        {/* Filters/Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Badge variant="default" className="cursor-pointer">All</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Technology</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Business</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Lifestyle</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Writing</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Health</Badge>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBlogs.map((blog) => (
            <Card key={blog.id} className="bg-gradient-card border-border/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden">
              {/* Blog Image */}
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${blog.image})` }} />
              
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-1 mb-2">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                  {blog.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {blog.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{blog.author}</span>
                  <span>{blog.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <span>❤️</span>
                      <span>{blog.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span>💬</span>
                      <span>{blog.comments}</span>
                    </span>
                  </div>
                  <Button size="sm" variant="outline">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Blogs
          </Button>
        </div>
      </main>
    </div>
  );
};

export default BlogFeed;
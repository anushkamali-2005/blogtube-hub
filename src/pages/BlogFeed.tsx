import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const mockBlogs = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next?",
    description: "Exploring emerging trends in web development including AI integration, serverless architecture, and the evolution of user interfaces.",
    content: "The landscape of web development is evolving at an unprecedented pace. As we look towards the future, several key trends are emerging that will shape how we build and interact with web applications.\n\nArtificial Intelligence Integration has become more than just a buzzword. Modern web applications are increasingly incorporating AI-powered features like intelligent chatbots, personalized content recommendations, and automated code generation. Tools like GitHub Copilot and ChatGPT are already transforming how developers write code, making development faster and more efficient.\n\nServerless Architecture continues to gain momentum. Platforms like Vercel, Netlify, and AWS Lambda are making it easier than ever to deploy scalable applications without managing infrastructure. This shift allows developers to focus on building features rather than maintaining servers.\n\nThe Evolution of User Interfaces is moving towards more immersive experiences. With technologies like WebXR, Progressive Web Apps (PWAs), and advanced CSS features, we're seeing web applications that rival native mobile apps in terms of performance and user experience.\n\nWeb3 and Blockchain Integration, while still in early stages, are opening new possibilities for decentralized applications and digital ownership models.\n\nAs we move forward, the key to success will be staying adaptable and continuously learning these new technologies while maintaining a focus on user experience and accessibility.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Technology", "Web Development", "AI"],
    category: "Technology",
    likes: 234,
    comments: 45,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Building Sustainable Communities Through Digital Platforms",
    description: "How modern technology can help create and maintain sustainable communities, fostering connections and promoting environmental consciousness.",
    content: "In today's interconnected world, digital platforms have become powerful tools for building and nurturing sustainable communities. These platforms are not just connecting people; they're fostering environmental consciousness and promoting sustainable practices on a global scale.\n\nCommunity Building Through Technology has evolved beyond simple social networking. Modern platforms are designed to facilitate meaningful connections around shared values and goals. Whether it's a neighborhood app for sharing resources or a global platform for climate action, technology is enabling communities to form around purpose rather than just proximity.\n\nEnvironmental Impact and Digital Solutions are becoming increasingly important. Digital platforms can significantly reduce environmental impact by enabling remote work, reducing travel through virtual meetings, and facilitating the sharing economy. Apps that help people share cars, tools, or living spaces are direct contributors to sustainability.\n\nThe Role of Data in Sustainability cannot be understated. Digital platforms can collect and analyze data on resource usage, waste patterns, and community needs, enabling more informed decision-making and efficient resource allocation.\n\nGamification and Incentives are being used to encourage sustainable behaviors. Many platforms now include point systems, badges, and leaderboards to make sustainable living more engaging and rewarding.\n\nThe future of sustainable communities lies in thoughtful technology implementation that prioritizes long-term environmental and social benefits over short-term gains.",
    author: "Marcus Rodriguez",
    date: "2024-01-14",
    readTime: "12 min read",
    tags: ["Community", "Sustainability", "Technology"],
    category: "Business",
    likes: 189,
    comments: 32,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "The Art of Storytelling in the Digital Age",
    description: "Mastering the craft of digital storytelling and how to captivate audiences in an increasingly crowded content landscape.",
    content: "Storytelling has been fundamental to human communication for millennia, but the digital age has transformed how we tell and consume stories. In an increasingly crowded content landscape, mastering the art of digital storytelling has become essential for creators, marketers, and communicators alike.\n\nThe Digital Transformation of Storytelling has brought both opportunities and challenges. While we now have unprecedented access to audiences worldwide, we also face shorter attention spans and fierce competition for engagement. The key is adapting traditional storytelling principles to digital mediums while leveraging new tools and formats.\n\nMultimedia Storytelling combines text, images, video, audio, and interactive elements to create immersive experiences. Successful digital stories often use multiple sensory channels to engage audiences more deeply than traditional text-only formats ever could.\n\nPersonalization and Audience Engagement have become crucial elements. Digital platforms allow for real-time feedback and interaction, enabling storytellers to adapt their narratives based on audience response and create more personalized experiences.\n\nThe Power of Authenticity in digital storytelling cannot be overstated. Audiences can quickly detect and reject inauthentic content, making genuine voice and honest perspective more valuable than ever.\n\nEmerging technologies like AR, VR, and AI are opening new frontiers for immersive storytelling, allowing creators to build worlds and experiences that were previously impossible.",
    author: "Emma Thompson",
    date: "2024-01-13",
    readTime: "6 min read",
    tags: ["Writing", "Storytelling", "Content"],
    category: "Writing",
    likes: 156,
    comments: 28,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Remote Work Revolution: Lessons from the New Normal",
    description: "Insights and best practices for remote work productivity, team collaboration, and maintaining work-life balance in distributed teams.",
    content: "The remote work revolution, accelerated by global events, has fundamentally changed how we think about work, productivity, and collaboration. As organizations and individuals adapt to this new normal, valuable lessons are emerging about what works, what doesn't, and how to thrive in a distributed work environment.\n\nProductivity in Remote Settings requires a different approach than traditional office work. Successful remote workers develop strong self-management skills, create dedicated workspaces, and establish clear boundaries between work and personal time. The key is finding systems that work for individual work styles and preferences.\n\nTeam Collaboration has evolved beyond simple video calls. Modern remote teams use a combination of synchronous and asynchronous communication tools, from Slack and Discord for quick conversations to collaborative documents and project management platforms for deeper work coordination.\n\nWork-Life Balance becomes both more challenging and more achievable in remote settings. While the commute disappears and flexibility increases, the boundaries between work and personal life can blur. Successful remote workers establish clear routines and physical boundaries to maintain healthy separation.\n\nTechnology Infrastructure plays a crucial role in remote work success. Reliable internet, appropriate hardware, and familiarity with digital collaboration tools are no longer nice-to-haves but essential requirements.\n\nThe Future of Work will likely be hybrid, combining the benefits of remote work with the advantages of in-person collaboration. Organizations that learn to excel in both modes will have significant competitive advantages.",
    author: "David Kim",
    date: "2024-01-12",
    readTime: "10 min read",
    tags: ["Remote Work", "Productivity", "Business"],
    category: "Business",
    likes: 298,
    comments: 67,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Mindfulness in Modern Life: Finding Balance",
    description: "Practical strategies for incorporating mindfulness into busy modern lifestyles and the science behind its benefits for mental health.",
    content: "In our hyperconnected, fast-paced world, mindfulness has emerged as a powerful antidote to stress, anxiety, and the constant demands of modern life. Far from being just a trendy buzzword, mindfulness is a scientifically-backed practice with profound benefits for mental health and overall well-being.\n\nUnderstanding Mindfulness begins with recognizing it as the practice of purposeful, non-judgmental awareness of the present moment. It's about observing thoughts, feelings, and sensations without getting caught up in them or trying to change them immediately.\n\nThe Science Behind Mindfulness is compelling. Research has shown that regular mindfulness practice can reduce cortisol levels, improve immune function, increase gray matter density in areas of the brain associated with learning and memory, and decrease activity in the amygdala, the brain's fear center.\n\nPractical Integration into daily life doesn't require hours of meditation. Simple practices like mindful breathing during commutes, eating meals without distractions, or taking brief pause moments throughout the day can yield significant benefits.\n\nCommon Obstacles include the misconception that minds should be empty or that immediate results are expected. In reality, noticing when the mind wanders and gently returning attention to the present is the practice itself.\n\nTechnology can both hinder and help mindfulness practice. While constant notifications create distraction, mindfulness apps and guided meditations have made the practice more accessible than ever before.",
    author: "Dr. Lisa Park",
    date: "2024-01-11",
    readTime: "7 min read",
    tags: ["Mindfulness", "Health", "Lifestyle"],
    category: "Health",
    likes: 445,
    comments: 89,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop"
  },
  {
    id: 6,
    title: "The Economics of Creator Economy",
    description: "Understanding the financial landscape of content creation, monetization strategies, and building sustainable creative businesses.",
    content: "The creator economy has exploded into a multi-billion dollar ecosystem, fundamentally changing how people think about careers, creativity, and financial independence. Understanding the economics behind this transformation is crucial for anyone looking to participate in or support this growing sector.\n\nThe Scale of the Creator Economy is staggering. Conservative estimates value it at over $100 billion globally, with millions of creators earning income from their content across platforms like YouTube, TikTok, Substack, Patreon, and countless others.\n\nRevenue Streams have diversified far beyond traditional advertising. Modern creators employ multiple monetization strategies including sponsorships, affiliate marketing, merchandise sales, digital products, online courses, subscription services, and direct fan support through platforms like Ko-fi and Buy Me a Coffee.\n\nPlatform Dynamics significantly impact creator economics. Each platform has different revenue-sharing models, audience demographics, and content formats that affect earning potential. Successful creators often maintain presence across multiple platforms to diversify risk and maximize reach.\n\nThe Importance of Audience Building cannot be overstated. In the creator economy, audience is currency. Building genuine relationships with followers, understanding their needs and preferences, and consistently providing value are fundamental to long-term success.\n\nSustainability Challenges include income volatility, platform dependency, and the constant pressure to produce content. Successful creators often build businesses around their personal brands rather than relying solely on platform monetization.",
    author: "Alex Johnson",
    date: "2024-01-10",
    readTime: "9 min read",
    tags: ["Creator Economy", "Business", "Monetization"],
    category: "Business",
    likes: 167,
    comments: 34,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
  }
];

const BlogFeed = () => {
  const navigate = useNavigate();
  const [selectedBlog, setSelectedBlog] = useState<typeof mockBlogs[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [likedBlogs, setLikedBlogs] = useState<Set<number>>(new Set());

  const categories = ["All", "Technology", "Business", "Writing", "Health"];

  const filteredBlogs = selectedCategory === "All" 
    ? mockBlogs 
    : mockBlogs.filter(blog => blog.category === selectedCategory);

  const handleBlogClick = (blog: typeof mockBlogs[0]) => {
    setSelectedBlog(blog);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleLike = (blogId: number) => {
    setLikedBlogs(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(blogId)) {
        newLiked.delete(blogId);
      } else {
        newLiked.add(blogId);
      }
      return newLiked;
    });
  };

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
          {categories.map((category) => (
            <Badge 
              key={category}
              variant={selectedCategory === category ? "default" : "outline"} 
              className="cursor-pointer hover:bg-primary/10 transition-all duration-200 hover:scale-105" 
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <Card key={blog.id} className="bg-gradient-card border-border/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer group">
              {/* Blog Image */}
              <div 
                className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-300" 
                style={{ backgroundImage: `url(${blog.image})` }}
                onClick={() => handleBlogClick(blog)}
              />
              
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-1 mb-2">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle 
                  className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer"
                  onClick={() => handleBlogClick(blog)}
                >
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
                    <button 
                      className={`flex items-center space-x-1 hover:text-primary transition-colors ${
                        likedBlogs.has(blog.id) ? 'text-red-500' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(blog.id);
                      }}
                    >
                      <span>{likedBlogs.has(blog.id) ? '❤️' : '🤍'}</span>
                      <span>{blog.likes + (likedBlogs.has(blog.id) ? 1 : 0)}</span>
                    </button>
                    <span className="flex items-center space-x-1">
                      <span>💬</span>
                      <span>{blog.comments}</span>
                    </span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBlogClick(blog);
                    }}
                  >
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

        {/* Blog Reading Modal */}
        <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-card border-border/20">
            {selectedBlog && (
              <>
                <DialogHeader>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {selectedBlog.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <DialogTitle className="text-2xl leading-tight">{selectedBlog.title}</DialogTitle>
                  <DialogDescription className="text-base">
                    <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                      <span>By {selectedBlog.author}</span>
                      <span>{selectedBlog.readTime}</span>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6">
                  <img 
                    src={selectedBlog.image} 
                    alt={selectedBlog.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  
                  <div className="prose prose-invert max-w-none">
                    {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/20">
                    <div className="flex items-center space-x-4">
                      <button 
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                          likedBlogs.has(selectedBlog.id) 
                            ? 'bg-red-500/20 text-red-400' 
                            : 'bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary'
                        }`}
                        onClick={() => handleLike(selectedBlog.id)}
                      >
                        <span>{likedBlogs.has(selectedBlog.id) ? '❤️' : '🤍'}</span>
                        <span>{selectedBlog.likes + (likedBlogs.has(selectedBlog.id) ? 1 : 0)} likes</span>
                      </button>
                      <div className="flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-lg text-muted-foreground">
                        <span>💬</span>
                        <span>{selectedBlog.comments} comments</span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Published on {selectedBlog.date}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default BlogFeed;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const navigate = useNavigate();

  const handlePublish = async () => {
    setIsPublishing(true);
    // TODO: Implement actual blog publishing logic
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsPublishing(false);
    // Navigate to blog feed after publishing
    navigate("/blogs");
  };

  const handleSaveDraft = () => {
    // TODO: Implement save draft functionality
    console.log("Draft saved");
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
              <Badge variant="outline">
                Blog Editor
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleSaveDraft}>
                Save Draft
              </Button>
              <Button variant="outline" onClick={() => navigate("/blogs")}>
                View Blogs
              </Button>
              <Button variant="ghost" onClick={() => navigate("/")}>
                Home
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Editor */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Create Your Blog Post</h2>
          <p className="text-muted-foreground">
            Share your thoughts, stories, and expertise with the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Editor Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>Blog Title</CardTitle>
                <CardDescription>
                  Give your blog post a compelling title
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Enter your blog title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg bg-background/50 border-border/20"
                />
              </CardContent>
            </Card>

            {/* Content */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>
                  Write your blog content here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Start writing your blog post..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-96 bg-background/50 border-border/20 resize-none"
                />
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>Tags</CardTitle>
                <CardDescription>
                  Add tags to help readers discover your content (comma-separated)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="e.g., technology, web development, tutorial"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="bg-background/50 border-border/20"
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Actions */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>Publish</CardTitle>
                <CardDescription>
                  Ready to share your blog with the world?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="hero" 
                  className="w-full" 
                  onClick={handlePublish}
                  disabled={!title || !content || isPublishing}
                >
                  {isPublishing ? "Publishing..." : "Publish Blog"}
                </Button>
                <Button variant="outline" className="w-full" onClick={handleSaveDraft}>
                  Save as Draft
                </Button>
              </CardContent>
            </Card>

            {/* Preview Tags */}
            {tags && (
              <Card className="bg-gradient-card border-border/20">
                <CardHeader>
                  <CardTitle>Tag Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tags.split(",").map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag.trim()}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Writing Tips */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle>Writing Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>• Start with a compelling introduction</p>
                <p>• Use clear headings and subheadings</p>
                <p>• Include relevant images if possible</p>
                <p>• End with a strong conclusion</p>
                <p>• Proofread before publishing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogEditor;
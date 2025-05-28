
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import BlogPost from "@/components/BlogPost";
import { blogPosts, BlogPost as BlogPostType } from "@/data/blogPosts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-meme-gold">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
              IVANKA BLOG 📰
            </h1>
            <p className="text-2xl text-meme-gold font-comic mb-8">
              Latest insights, analysis, and updates from the IVANKA ecosystem
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-white/60" />
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      className={
                        selectedCategory === category
                          ? "bg-meme-gold text-black hover:bg-meme-gold-dark"
                          : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onReadMore={setSelectedPost}
              />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bangers text-white mb-2">No Articles Found</h3>
              <p className="text-white/60 font-comic">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}

          {/* Blog Image and Newsletter Section */}
          <div className="mt-16 flex flex-col lg:flex-row gap-8 items-start">
            {/* Large Blog Image on the left */}
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/892211ef-523a-435c-94ca-8d59d7fd1f5a.png" 
                alt="IVANKA Blog News" 
                className="w-full max-w-md mx-auto lg:mx-0 rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Newsletter Signup on the right */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-r from-meme-gold/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border border-meme-gold/30 text-center">
                <h3 className="text-3xl font-bangers text-meme-gold mb-4">
                  Stay Updated with IVANKA News! 📬
                </h3>
                <p className="text-white/90 font-comic text-lg mb-6">
                  Get the latest IVANKA insights, market analysis, and ecosystem updates delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email address"
                    className="bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button 
                    className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

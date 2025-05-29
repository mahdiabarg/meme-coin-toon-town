
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-meme-gold/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers drop-shadow-2xl mb-6">
            <span className="text-transparent bg-gradient-to-r from-meme-gold via-yellow-400 to-orange-500 bg-clip-text">IVANKA INSIGHTS</span>{" "}
            <span className="text-white">📰</span>
          </h2>
          <p className="text-xl text-white/80 font-comic max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with our latest analysis, market insights, and industry updates from the IVANKA ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <Card key={post.id} className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-0">
                {post.image && (
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-auto max-h-64 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-meme-gold/90 text-black px-3 py-1 rounded-full text-sm font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-lg font-bangers text-white mb-3 group-hover:text-meme-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/80 font-comic text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-white/60 text-xs mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  
                  <Button 
                    onClick={() => window.location.href = '/blog'}
                    className="w-full bg-meme-gold hover:bg-meme-gold-dark text-black font-bold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => window.location.href = '/blog'}
            size="lg"
            className="bg-gradient-to-r from-meme-gold to-yellow-400 hover:from-yellow-400 hover:to-meme-gold text-black font-bangers text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            🔥 READ ALL ARTICLES 🔥
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

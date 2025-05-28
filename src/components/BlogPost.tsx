
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Tag, Share2 } from "lucide-react";
import { BlogPost as BlogPostType } from "@/data/blogPosts";

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPost = ({ post, onBack }: BlogPostProps) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-meme-gold pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button 
          onClick={onBack}
          variant="outline"
          className="mb-8 bg-white/20 border-white text-white hover:bg-white hover:text-black"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>
        
        <article className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-2 text-meme-gold text-sm mb-4">
              <Tag className="w-4 h-4" />
              <span>{post.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bangers text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between text-white/60 text-sm mb-6 flex-wrap gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <Button 
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="bg-white/20 border-white text-white hover:bg-white hover:text-black"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-meme-gold/20 text-meme-gold px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-meme-gold/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-6 mb-8 border border-meme-gold/30">
              <p className="text-white/90 font-comic text-lg italic">
                {post.excerpt}
              </p>
            </div>
            
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.8'
              }}
            />
          </div>
        </article>
        
        <div className="mt-12 bg-gradient-to-r from-meme-gold/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border border-meme-gold/30 text-center">
          <h3 className="text-3xl font-bangers text-meme-gold mb-4">
            Ready to Join the IVANKA Revolution? 🚀
          </h3>
          <p className="text-white/90 font-comic text-lg mb-6">
            Don't miss out on the most elegant meme coin on SUI blockchain!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://app.turbos.finance/#/trade?input=0x24f7a9147b69a824e56937b6265a7a74d3675f1e4965bb3a0bb2e63fd31ada41::ivnk::IVNK&output=0x2::sui::SUI', '_blank')}
            >
              🔥 BUY $IVNK NOW 🔥
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/20 border-white text-white hover:bg-white hover:text-black font-bold text-xl px-8 py-4 rounded-full backdrop-blur-sm"
              onClick={() => window.open('https://birdeye.so/token/0x24f7a9147b69a824e56937b6265a7a74d3675f1e4965bb3a0bb2e63fd31ada41::ivnk::IVNK?chain=sui&tab=chart', '_blank')}
            >
              📈 View Chart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

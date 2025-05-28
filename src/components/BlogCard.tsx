
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, Tag } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  onReadMore: (post: BlogPost) => void;
}

const BlogCard = ({ post, onReadMore }: BlogCardProps) => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-meme-gold text-sm mb-3">
          <Tag className="w-4 h-4" />
          <span>{post.category}</span>
        </div>
        
        <h3 className="text-xl font-bangers text-white mb-3 group-hover:text-meme-gold transition-colors">
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
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-meme-gold/20 text-meme-gold px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Button 
          onClick={() => onReadMore(post)}
          className="w-full bg-meme-gold hover:bg-meme-gold-dark text-black font-bold"
        >
          Read Full Article
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;

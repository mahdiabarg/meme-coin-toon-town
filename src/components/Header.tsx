
import { Button } from "@/components/ui/button";
import { ExternalLink, Twitter, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-meme-blue via-meme-purple to-meme-gold backdrop-blur-lg border-b-4 border-meme-gold">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/48ac94e6-daa3-4393-a9c8-bc912cc8bf3d.png" 
            alt="$IVNK Logo" 
            className="h-80 w-auto filter drop-shadow-lg"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-white font-bold hover:text-meme-gold transition-colors">
            Über uns
          </a>
          <a href="#tokenomics" className="text-white font-bold hover:text-meme-gold transition-colors">
            Tokenomics
          </a>
          <a href="#roadmap" className="text-white font-bold hover:text-meme-gold transition-colors">
            Roadmap
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white/20 border-white text-white hover:bg-white hover:text-meme-blue"
          >
            <Twitter className="w-4 h-4 mr-2" />
            Twitter
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/20 border-white text-white hover:bg-white hover:text-meme-blue"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Telegram
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

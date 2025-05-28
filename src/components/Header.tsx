
import { Button } from "@/components/ui/button";
import { ExternalLink, Twitter, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-800 to-meme-gold backdrop-blur-lg border-b-4 border-meme-gold">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/4a8ced77-9509-4276-b2a2-5c8e41d12975.png" 
            alt="IVNK Logo" 
            className="h-12 w-auto filter drop-shadow-lg"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-white font-bold hover:text-meme-gold transition-colors">
            About
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
            className="bg-white/20 border-white text-white hover:bg-white hover:text-black"
          >
            <Twitter className="w-4 h-4 mr-2" />
            Twitter
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/20 border-white text-white hover:bg-white hover:text-black"
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

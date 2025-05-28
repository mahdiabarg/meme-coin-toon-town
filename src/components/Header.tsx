
import { Button } from "@/components/ui/button";
import { ExternalLink, Twitter, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-800 to-meme-gold backdrop-blur-lg border-b-4 border-meme-gold">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/19862869-10d0-4953-8e83-b32a826bd193.png" 
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
          <a href="/whitepaper" className="text-white font-bold hover:text-meme-gold transition-colors">
            Whitepaper
          </a>
          <a href="/how-to-buy" className="text-white font-bold hover:text-meme-gold transition-colors">
            How to Buy
          </a>
          <a href="/community" className="text-white font-bold hover:text-meme-gold transition-colors">
            Community
          </a>
          <a href="/blog" className="text-white font-bold hover:text-meme-gold transition-colors">
            Blog
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white/20 border-white text-white hover:bg-white hover:text-black"
            onClick={() => window.open('https://x.com/Get_Ivanka_Meme', '_blank')}
          >
            <Twitter className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/20 border-white text-white hover:bg-white hover:text-black"
            onClick={() => window.open('https://discord.gg/8b5YDW62D4', '_blank')}
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/20 border-white text-white hover:bg-white hover:text-black"
            onClick={() => window.open('https://www.reddit.com/user/Get_IvankaCoin/', '_blank')}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/20 border-white text-white hover:bg-white hover:text-black"
            onClick={() => window.open('https://t.me/ivankaofficiall', '_blank')}
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/20 border-white text-white hover:bg-white hover:text-black"
            onClick={() => window.open('https://chat.whatsapp.com/LawvBYPEIevKhNk3TjpTJT', '_blank')}
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

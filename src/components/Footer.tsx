
import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-800 to-meme-gold py-12 border-t-4 border-meme-gold">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bangers text-meme-gold mb-4">$IVNK</h3>
            <p className="text-white/80 font-comic mb-4">
              The most elegant queen of SUI! 👑
            </p>
            <p className="text-white/60 font-comic text-sm">
              Built for speed. Made for the community. 
              Born on SUI, not bridged! 🚀
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bangers text-white mb-4">QUICK LINKS</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-white/80 hover:text-meme-gold transition-colors font-comic">
                About
              </a>
              <a href="#tokenomics" className="block text-white/80 hover:text-meme-gold transition-colors font-comic">
                Tokenomics
              </a>
              <a href="#roadmap" className="block text-white/80 hover:text-meme-gold transition-colors font-comic">
                Roadmap
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-xl font-bangers text-white mb-4">COMMUNITY</h4>
            <div className="flex justify-center md:justify-end space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/10 border-white/30 text-white hover:bg-meme-gold hover:text-black"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/10 border-white/30 text-white hover:bg-black hover:text-white"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/10 border-white/30 text-white hover:bg-gray-800 hover:text-white"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 font-comic text-sm mb-4 md:mb-0">
              © 2024 $IVNK. All rights reserved. Made with{" "}
              <Heart className="w-4 h-4 inline text-red-500" /> by the Community
            </div>
            
            <div className="text-center">
              <div className="text-meme-gold font-bangers text-lg mb-2">
                🚨 DISCLAIMER 🚨
              </div>
              <div className="text-white/60 font-comic text-xs max-w-md">
                $IVNK is a meme coin. Only invest what you can afford to lose. 
                No financial advice! DYOR! 🚀
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="inline-block bg-meme-gold/20 backdrop-blur-lg rounded-full px-6 py-2 border border-meme-gold">
            <span className="text-meme-gold font-bangers text-lg">
              💎 DIAMOND HANDS ONLY 💎
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

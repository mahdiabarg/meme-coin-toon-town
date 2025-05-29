import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-800 to-meme-gold py-12 border-t-4 border-meme-gold relative">
      {/* Wanne image positioned at the bottom */}
      <div className="absolute bottom-0 right-10 z-10">
        <img 
          src="/lovable-uploads/aa192f5b-ec47-4263-bda9-02cfc4c2542c.png" 
          alt="IVNK Wanne" 
          className="w-64 md:w-80 h-auto"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bangers text-meme-gold mb-4">About</h3>
            <div className="space-y-2">
              <a href="/#about" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                About Us
              </a>
              <a href="/#tokenomics" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                Tokenomics
              </a>
              <a href="/whitepaper" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                Whitepaper
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bangers text-meme-gold mb-4">Community</h4>
            <div className="space-y-2">
              <a href="https://x.com/Get_Ivanka_Meme" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                X (Twitter)
              </a>
              <a href="https://discord.gg/8b5YDW62D4" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                Discord
              </a>
              <a href="https://www.reddit.com/user/Get_IvankaCoin/" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                Reddit
              </a>
              <a href="https://t.me/ivankaofficiall" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                Telegram
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bangers text-meme-gold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="/how-to-buy" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                How to Buy
              </a>
              <a href="#faq" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                FAQs
              </a>
              <a href="/blog" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                Blog
              </a>
              <a href="https://getivanka.com/press-kit" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                Press Kit
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bangers text-meme-gold mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="/privacy-policy" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                Terms of Service
              </a>
              <a href="/disclaimer" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                Disclaimer
              </a>
              <a href="mailto:support@buyivanka.shop" className="block text-white/80 hover:text-meme-gold transition-colors font-comic text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/10 border-white/30 text-white hover:bg-meme-gold hover:text-black"
                onClick={() => window.open('https://x.com/Get_Ivanka_Meme', '_blank')}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/10 border-white/30 text-white hover:bg-black hover:text-white"
                onClick={() => window.open('https://discord.gg/8b5YDW62D4', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/10 border-white/30 text-white hover:bg-gray-800 hover:text-white"
                onClick={() => window.open('https://t.me/ivankaofficiall', '_blank')}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </Button>
            </div>
            
            <div className="text-center">
              <div className="text-white/60 font-comic text-sm mb-2">
                © 2025 IVANKA Token. All rights reserved.
              </div>
              <div className="text-white/60 font-comic text-xs max-w-md">
                $IVNK is a meme token with no intrinsic value or financial return expectation.
                This website is for entertainment purposes only.
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

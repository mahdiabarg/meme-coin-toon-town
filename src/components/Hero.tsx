import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-meme-gold relative overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 opacity-35 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/TRPN-NYCfts?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=TRPN-NYCfts"
          className="w-full h-full object-cover scale-125"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        {/* Helicopter positioned at top left - made smaller */}
        <div className="absolute top-16 left-5 animate-float">
          <img 
            src="/lovable-uploads/b48334cf-57ce-4e15-952c-8cbba73fd4b6.png" 
            alt="IVNK Helicopter" 
            className="w-[30rem] md:w-[42rem] h-auto drop-shadow-2xl transform scale-x-[-1]"
          />
        </div>
        {/* Character meme positioned on the right - made much bigger */}
        <div className="absolute bottom-10 right-10 md:right-20 animate-bounce-custom">
          <img 
            src="/lovable-uploads/c9eb10f6-0f1b-482e-8d6a-56980b125e9c.png" 
            alt="IVNK Character" 
            className="w-72 md:w-96 h-auto drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 flex flex-col items-center justify-center min-h-screen text-center relative z-20">
        <div className="mb-8 animate-bounce-custom">
          <h1 className="text-6xl md:text-8xl font-bangers text-white drop-shadow-2xl mb-4">
            $IVNK
          </h1>
          <div className="text-2xl md:text-4xl font-comic text-meme-gold font-bold drop-shadow-lg">
            THE QUEEN OF SUI! 👑
          </div>
        </div>

        <div className="max-w-4xl mb-12">
          <p className="text-xl md:text-2xl text-white font-comic mb-6 drop-shadow-lg">
            🚀 BORN ON SUI. NOT BRIDGED. NOT COPIED. 🚀
          </p>
          <p className="text-lg md:text-xl text-white/90 font-comic drop-shadow-md">
            WE DON'T CHASE HYPE - WE DESIGN VALUE!<br />
            The most elegant SUI token for speed. Built for NOW.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <Button 
            size="lg" 
            className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-glow"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-bold text-white text-lg mb-2">100% PURE</h3>
            <p className="text-white/80 text-sm">No bridges, no copies - just pure SUI power!</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold text-white text-lg mb-2">SPEED</h3>
            <p className="text-white/80 text-sm">Lightning-fast transactions on the SUI Network!</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">👑</div>
            <h3 className="font-bold text-white text-lg mb-2">ELEGANT</h3>
            <p className="text-white/80 text-sm">The most elegant token in the entire SUI ecosystem!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

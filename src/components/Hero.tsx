
import { Button } from "@/components/ui/button";
import { Rocket, Crown, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-meme-blue via-meme-purple to-meme-gold relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-bounce-custom">
          <Star className="w-8 h-8 text-meme-gold animate-glow" />
        </div>
        <div className="absolute top-40 right-20 animate-wiggle">
          <Crown className="w-12 h-12 text-yellow-300" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce-custom">
          <Rocket className="w-10 h-10 text-white animate-glow" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 flex flex-col items-center justify-center min-h-screen text-center relative z-10">
        <div className="mb-8 animate-bounce-custom">
          <h1 className="text-6xl md:text-8xl font-bangers text-white drop-shadow-2xl mb-4">
            $IVNK
          </h1>
          <div className="text-2xl md:text-4xl font-comic text-meme-gold font-bold drop-shadow-lg">
            DIE KÖNIGIN VON SUI! 👑
          </div>
        </div>

        <div className="max-w-4xl mb-12">
          <p className="text-xl md:text-2xl text-white font-comic mb-6 drop-shadow-lg">
            🚀 GEBOREN AUF SUI. NICHT GEBRÜCKT. NICHT KOPIERT. 🚀
          </p>
          <p className="text-lg md:text-xl text-white/90 font-comic drop-shadow-md">
            WIR JAGEN NICHT DEM HYPE HINTERHER - WIR DESIGNEN WERT!
            Der eleganteste SUI Token für Speed. Gebaut für JETZT.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <Button 
            size="lg" 
            className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-glow"
          >
            🔥 KAUFE $IVNK JETZT 🔥
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/20 border-white text-white hover:bg-white hover:text-meme-blue font-bold text-xl px-8 py-4 rounded-full backdrop-blur-sm"
          >
            📈 Chart ansehen
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-bold text-white text-lg mb-2">100% PURE</h3>
            <p className="text-white/80 text-sm">Keine Brücken, keine Kopien - nur reiner SUI Power!</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold text-white text-lg mb-2">SPEED</h3>
            <p className="text-white/80 text-sm">Blitzschnelle Transaktionen auf dem SUI Network!</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-2">👑</div>
            <h3 className="font-bold text-white text-lg mb-2">ELEGANT</h3>
            <p className="text-white/80 text-sm">Der eleganteste Token im ganzen SUI Ökosystem!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

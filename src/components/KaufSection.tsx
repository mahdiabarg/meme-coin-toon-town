import { Button } from "@/components/ui/button";

const KaufSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-800 to-meme-gold relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
            BUY IVNK TOKEN NOW! 💰
          </h2>
          <p className="text-xl text-white/90 font-comic max-w-3xl mx-auto">
            Don't miss the opportunity to become part of the IVNK cryptocurrency revolution on SUI blockchain!
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <img 
            src="/lovable-uploads/bc541530-7f0b-4329-b2ca-307375ae1b34.png" 
            alt="Buy IVNK token now - SUI meme cryptocurrency purchase guide" 
            className="w-72 md:w-96 h-auto drop-shadow-2xl animate-slide-in-from-right"
            loading="lazy"
            width="384"
            height="300"
            decoding="async"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-glow"
            onClick={() => window.open('https://app.turbos.finance/#/trade?input=0x24f7a9147b69a824e56937b6265a7a74d3675f1e4965bb3a0bb2e63fd31ada41::ivnk::IVNK&output=0x2::sui::SUI', '_blank')}
          >
            🔥 BUY IVNK NOW 🔥
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/20 border-white text-white hover:bg-white hover:text-black font-bold text-xl px-8 py-4 rounded-full backdrop-blur-sm"
            onClick={() => window.open('https://birdeye.so/token/0x24f7a9147b69a824e56937b6265a7a74d3675f1e4965bb3a0bb2e63fd31ada41::ivnk::IVNK?chain=sui&tab=chart', '_blank')}
          >
            📈 View IVNK Chart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KaufSection;

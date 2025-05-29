
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const KaufSection = () => {
  const [animationPhase, setAnimationPhase] = useState<'entering' | 'paused' | 'exiting'>('entering');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionBottom = rect.bottom;
      const viewportHeight = window.innerHeight;
      
      // Trigger exit animation when section is 30% scrolled past
      if (sectionBottom < viewportHeight * 0.7 && animationPhase !== 'exiting') {
        setAnimationPhase('exiting');
      }
      // Reset to entering when scrolling back up
      else if (sectionBottom > viewportHeight * 0.8 && animationPhase === 'exiting') {
        setAnimationPhase('entering');
      }
    };

    // Set to paused after entrance animation completes (4 seconds)
    const pauseTimer = setTimeout(() => {
      if (animationPhase === 'entering') {
        setAnimationPhase('paused');
      }
    }, 4000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(pauseTimer);
    };
  }, [animationPhase]);

  const getAnimationClass = () => {
    switch (animationPhase) {
      case 'entering':
        return 'animate-ivanka-entrance';
      case 'paused':
        return 'animate-ivanka-pause';
      case 'exiting':
        return 'animate-ivanka-exit';
      default:
        return 'animate-ivanka-entrance';
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-black via-gray-800 to-meme-gold relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
            BUY NOW! 💰
          </h2>
          <p className="text-xl text-white/90 font-comic max-w-3xl mx-auto">
            Don't miss the opportunity to become part of the IVNK revolution!
          </p>
        </div>

        <div className="flex justify-center mb-12 relative">
          <img 
            src="/lovable-uploads/bc541530-7f0b-4329-b2ca-307375ae1b34.png" 
            alt="IVNK Buy" 
            className={`w-72 md:w-96 h-auto drop-shadow-2xl will-change-transform ${getAnimationClass()}`}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-glow"
            onClick={() => window.open('https://app.turbos.finance/#/trade?input=0x24f7a9147b69a824e56937b6265a7a74d3675f1e4965bb3a0bb2e63fd31ada41::ivnk::IVNK&output=0x2::sui::SUI', '_blank')}
          >
            🔥 BUY NOW 🔥
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
    </section>
  );
};

export default KaufSection;

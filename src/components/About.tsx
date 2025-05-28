
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-meme-blue via-meme-purple to-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
                ABOUT IVANKA 👑
              </h2>
              <p className="text-xl text-white/90 font-comic leading-relaxed">
                Born from pure SUI elegance, IVANKA ($IVNK) represents the perfect fusion of 
                sophisticated charm and memecoin culture. We're not just another token - 
                we're a movement celebrating grace, success, and the power of community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">💎</div>
                  <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
                  <p className="text-white/80">Built on SUI for unmatched speed and elegance</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-2">Community Driven</h3>
                  <p className="text-white/80">Powered by our passionate global community</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/baedc9d1-aed9-4874-805a-825b96e34848.png" 
                alt="About IVANKA" 
                className="rounded-3xl shadow-2xl max-w-md w-full animate-float"
              />
              <div className="absolute -top-4 -right-4 bg-meme-gold text-black px-4 py-2 rounded-full font-bold animate-bounce-custom">
                ✨ PURE SUI ✨
              </div>
            </div>
            {/* PepeIvanka positioned near About section */}
            <div className="absolute -bottom-10 -left-16 animate-wiggle">
              <img 
                src="/lovable-uploads/2da69b5c-4c91-4efc-b312-1eaf35be42f6.png" 
                alt="Pepe Ivanka" 
                className="w-24 h-24 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Airplane positioned in the background - made much bigger */}
        <div className="absolute top-20 right-10 animate-float opacity-80">
          <img 
            src="/lovable-uploads/04e56ecb-5583-42ad-b2e8-799e51915088.png" 
            alt="IVNK Airplane" 
            className="w-80 md:w-96 h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

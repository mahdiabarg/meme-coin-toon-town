
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-meme-gold via-orange-500 to-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bangers text-black drop-shadow-2xl mb-6">
                ABOUT IVANKA 👑
              </h2>
              <p className="text-xl text-black/90 font-comic leading-relaxed">
                Born from pure SUI elegance, IVANKA ($IVNK) represents the perfect fusion of 
                sophisticated charm and memecoin culture. We're not just another token - 
                we're a movement celebrating grace, success, and the power of community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/20 backdrop-blur-lg border-4 border-white shadow-2xl">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">💎</div>
                  <h3 className="text-xl font-bold text-black mb-2">Premium Quality</h3>
                  <p className="text-black/80">Built on SUI for unmatched speed and elegance</p>
                </CardContent>
              </Card>

              <Card className="bg-white/20 backdrop-blur-lg border-4 border-white shadow-2xl">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="text-xl font-bold text-black mb-2">Community Driven</h3>
                  <p className="text-black/80">Powered by our passionate global community</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-black text-meme-gold px-4 py-2 rounded-full font-bold animate-bounce-custom">
                ✨ PURE SUI ✨
              </div>
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

        {/* New image under the airplane */}
        <div className="absolute top-80 right-20 opacity-90">
          <img 
            src="/lovable-uploads/15f00140-cbb7-44d6-8e42-7106e7a9a739.png" 
            alt="Token Exchange" 
            className="w-64 md:w-80 h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

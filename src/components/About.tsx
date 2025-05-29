import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  return <section id="about" className="py-20 bg-gradient-to-br from-black via-purple-900 to-purple-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-meme-gold rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>

      {/* Rakete positioned above the section */}
      <div className="absolute -top-20 right-10 z-20 animate-rocket-flight">
        
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bangers text-meme-gold drop-shadow-2xl mb-6">
            ABOUT IVNK - SUI MEME COIN 👑
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-meme-gold to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/90 font-comic leading-relaxed max-w-4xl mx-auto">
            Born from pure SUI elegance, IVNK ($IVNK) represents the perfect fusion of 
            sophisticated charm and cryptocurrency meme culture. We're not just another token - 
            we're a movement celebrating grace, success, and the power of DeFi community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box 1 - Premium Quality */}
              <div className="bg-gradient-to-r from-meme-gold/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border-4 border-meme-gold/50 transition-all duration-300 hover:border-meme-gold hover:shadow-2xl hover:shadow-meme-gold/50 hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-meme-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-xl">💎</span>
                  </div>
                  <h3 className="text-2xl font-bangers text-white tracking-wider">Premium Quality</h3>
                </div>
                <p className="text-white/90 font-comic text-center text-lg leading-relaxed">
                  Built on SUI blockchain for unmatched speed and elegance
                </p>
              </div>

              {/* Box 2 - Community Driven */}
              <div className="bg-gradient-to-r from-meme-gold/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border-4 border-meme-gold/50 transition-all duration-300 hover:border-meme-gold hover:shadow-2xl hover:shadow-meme-gold/50 hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-meme-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bangers text-white tracking-wider">Community Driven</h3>
                </div>
                <p className="text-white/90 font-comic text-center text-lg leading-relaxed">
                  Powered by our passionate global cryptocurrency community
                </p>
              </div>

              {/* Box 3 - Lightning Fast */}
              <div className="bg-gradient-to-r from-meme-gold/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border-4 border-meme-gold/50 transition-all duration-300 hover:border-meme-gold hover:shadow-2xl hover:shadow-meme-gold/50 hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-meme-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bangers text-white tracking-wider">Lightning Fast</h3>
                </div>
                <p className="text-white/90 font-comic text-center text-lg leading-relaxed">
                  Instant crypto transactions on the SUI blockchain network
                </p>
              </div>

              {/* Box 4 - Revolutionary */}
              <div className="bg-gradient-to-r from-meme-gold/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border-4 border-meme-gold/50 transition-all duration-300 hover:border-meme-gold hover:shadow-2xl hover:shadow-meme-gold/50 hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-meme-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-xl">🌟</span>
                  </div>
                  <h3 className="text-2xl font-bangers text-white tracking-wider">Revolutionary</h3>
                </div>
                <p className="text-white/90 font-comic text-center text-lg leading-relaxed">
                  Setting new standards in the DeFi memecoin space
                </p>
              </div>
            </div>

            {/* Box 5 - Pure SUI Elegance (keeping the same style) */}
            <div className="bg-gradient-to-r from-meme-gold/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border-4 border-meme-gold/50 transition-all duration-300 hover:border-meme-gold hover:shadow-2xl hover:shadow-meme-gold/50 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-meme-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-xl">✨</span>
                </div>
                <h3 className="text-3xl font-bangers text-white tracking-wider">PURE SUI ELEGANCE</h3>
              </div>
              <p className="text-white/90 font-comic text-center text-lg leading-relaxed">
                Experience the future of memecoins with IVNK - where sophistication meets 
                blockchain innovation on the fastest cryptocurrency network.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              {/* Airplane positioned in the center */}
              <div className="mb-8 flex justify-center">
                <img 
                  src="/lovable-uploads/04e56ecb-5583-42ad-b2e8-799e51915088.png" 
                  alt="IVNK airplane - SUI blockchain meme cryptocurrency mascot flying high" 
                  className="w-80 md:w-96 h-auto drop-shadow-2xl animate-float" 
                  loading="lazy"
                  width="384"
                  height="auto"
                />
              </div>
              
              {/* Tutorial4 image positioned below the airplane with rounded corners */}
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/15f00140-cbb7-44d6-8e42-7106e7a9a739.png" 
                  alt="IVNK tutorial guide - How to buy IVNK token on SUI network step by step" 
                  className="w-64 md:w-80 h-auto drop-shadow-xl rounded-3xl" 
                  loading="lazy"
                  width="320"
                  height="auto"
                />
              </div>
              
              {/* Decorative elements */}
              <button 
                onClick={() => window.open('https://sui.io/', '_blank')}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-meme-gold to-yellow-300 text-black px-6 py-3 rounded-full font-bold animate-bounce-custom shadow-lg hover:scale-105 transition-transform cursor-pointer"
                aria-label="Learn more about SUI blockchain network"
              >
                ✨ PURE SUI ✨
              </button>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-3 rounded-full font-bold animate-bounce-custom shadow-lg">
                👑 QUEEN 👑
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;

import { Card, CardContent } from "@/components/ui/card";
import { Diamond, Heart, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 via-black to-meme-gold relative overflow-hidden">
      {/* Decorative transparent images */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="/lovable-uploads/edcfb8da-14fc-48e5-b5b8-fe1502e2082a.png" 
          alt="Meme Characters" 
          className="absolute top-10 right-10 w-32 h-32 object-contain"
        />
        <img 
          src="/lovable-uploads/6c17b39e-691a-4413-9764-e2cdd70559fd.png" 
          alt="Surprised Expression" 
          className="absolute bottom-20 left-10 w-24 h-24 object-contain"
        />
        <img 
          src="/lovable-uploads/3ecc504c-9a22-4ac4-82c7-027940a3a58e.png" 
          alt="Luxury Car with Characters" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 object-contain opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
            ABOUT IVANKA 👑
          </h2>
          <p className="text-xl text-white/90 font-comic max-w-3xl mx-auto">
            The First Lady of Crypto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="text-white">
            <h3 className="text-3xl font-bangers text-meme-gold mb-6">
              About IVANKA
            </h3>
            <p className="text-lg font-comic mb-4">
              IVANKA is not just another meme token. It's a statement. A movement. A revolution in the crypto space that combines the viral power of memes with the sophistication of high finance.
            </p>
            <p className="text-lg font-comic mb-4">
              Born from the intersection of luxury and blockchain technology, IVANKA brings a touch of class to the often chaotic world of cryptocurrency, all while maintaining that playful, satirical edge that meme tokens are known for.
            </p>
            <p className="text-lg font-comic">
              With a community-first approach and a keen eye for style, IVANKA aims to redefine what a meme token can be in today's digital economy.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/21151259-62e5-4041-a7a6-f25e57ae303b.png" 
              alt="IVANKA to the Moon" 
              className="w-full max-w-md h-auto drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-meme-gold to-orange-500 border-4 border-meme-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Diamond className="w-16 h-16 mb-4 mx-auto text-black" />
              <h3 className="text-2xl font-bangers text-black mb-4">Luxurious Returns</h3>
              <p className="text-black font-comic">
                IVANKA is designed with sophisticated tokenomics and a deflationary model to provide the most elegant path to potential gains.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-black to-gray-800 border-4 border-meme-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Heart className="w-16 h-16 mb-4 mx-auto text-meme-gold" />
              <h3 className="text-2xl font-bangers text-white mb-4">Exclusive Community</h3>
              <p className="text-white font-comic">
                Join an elite group of like-minded individuals who appreciate both humor and sophistication in their crypto investments.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-700 to-black border-4 border-meme-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Shield className="w-16 h-16 mb-4 mx-auto text-white" />
              <h3 className="text-2xl font-bangers text-white mb-4">Verified Security</h3>
              <p className="text-white font-comic">
                Our smart contract is audited, locked, and secured by the most prestigious blockchain security firms in the industry.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto relative">
            <div className="absolute top-4 right-4 opacity-20">
              <img 
                src="/lovable-uploads/e3b7da9f-71c6-46cc-a3c3-3716a02c4eda.png" 
                alt="IVNK Coin" 
                className="w-32 h-32"
              />
            </div>
            <h3 className="text-3xl font-bangers text-meme-gold mb-6 relative z-10">
              "I WANT TO BE LIKE HER..." 💫
            </h3>
            <p className="text-xl text-white font-comic mb-4 relative z-10">
              Everyone wants to be successful like Ivanka! 💅
            </p>
            <p className="text-lg text-white/80 font-comic relative z-10">
              With $IVNK you can become part of her success and together 
              conquer the SUI universe! 🌟
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

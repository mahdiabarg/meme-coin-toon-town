
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 via-black to-meme-gold">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
            WHY $IVNK? 🤔
          </h2>
          <p className="text-xl text-white/90 font-comic max-w-3xl mx-auto">
            While other chains have problems, we design solutions! 💪
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-meme-gold to-orange-500 border-4 border-meme-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bangers text-black mb-4">TO THE MOON!</h3>
              <p className="text-black font-comic">
                Ivanka flies to the moon and takes all early supporters with her! 
                Get in before it's too late! 🌙
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-black to-gray-800 border-4 border-meme-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">👑</div>
              <h3 className="text-2xl font-bangers text-white mb-4">QUEEN OF SUI</h3>
              <p className="text-white font-comic">
                Other chains can only watch while we rule the SUI kingdom! 
                Bow down! 💎
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-700 to-black border-4 border-meme-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">💪</div>
              <h3 className="text-2xl font-bangers text-white mb-4">COMMUNITY POWER</h3>
              <p className="text-white font-comic">
                By the community, for the community! 
                Together we are unstoppable! 🔥
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto relative">
            {/* Coin image positioned in the background */}
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

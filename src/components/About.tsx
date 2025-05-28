
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-meme-purple via-meme-blue to-meme-cyan">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
            WARUM $IVNK? 🤔
          </h2>
          <p className="text-xl text-white/90 font-comic max-w-3xl mx-auto">
            Während andere Chains Probleme haben, designen wir Lösungen! 💪
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-meme-gold to-meme-orange border-4 border-meme-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bangers text-black mb-4">ZUM MOND!</h3>
              <p className="text-black font-comic">
                Ivanka fliegt zum Mond und nimmt alle Early Supporter mit! 
                Steig ein, bevor es zu spät ist! 🌙
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-meme-blue to-meme-purple border-4 border-meme-blue shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">👑</div>
              <h3 className="text-2xl font-bangers text-white mb-4">KÖNIGIN VON SUI</h3>
              <p className="text-white font-comic">
                Andere Chains können nur zugucken, während wir das SUI-Reich regieren! 
                Bow down! 💎
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-meme-green to-meme-cyan border-4 border-meme-green shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">💪</div>
              <h3 className="text-2xl font-bangers text-white mb-4">COMMUNITY POWER</h3>
              <p className="text-white font-comic">
                Von der Community, für die Community! 
                Zusammen sind wir unaufhaltbar! 🔥
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bangers text-meme-gold mb-6">
              "ICH WILL WIE SIE SEIN..." 💫
            </h3>
            <p className="text-xl text-white font-comic mb-4">
              Jeder will erfolgreich sein wie Ivanka! 💅
            </p>
            <p className="text-lg text-white/80 font-comic">
              Mit $IVNK kannst du Teil ihres Erfolgs werden und gemeinsam 
              das SUI-Universum erobern! 🌟
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

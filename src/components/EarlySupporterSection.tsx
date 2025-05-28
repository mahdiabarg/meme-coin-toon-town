
import { Button } from "@/components/ui/button";

const EarlySupporterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-meme-gold via-orange-500 to-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-black drop-shadow-2xl mb-6">
            EARLY SUPPORTER 🎁
          </h2>
          <p className="text-xl text-black/80 font-comic max-w-4xl mx-auto mb-8">
            Folgen Sie uns überall, teilen und liken Sie unsere Inhalte und werden Sie Teil unserer Community! 
            Dafür erhalten Sie das exklusive "Early Supporter" Überraschungspaket! 🎉
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border-4 border-white">
                <h3 className="text-2xl font-bangers text-black mb-4">📱 FOLGEN</h3>
                <p className="text-black font-comic">
                  Folgen Sie uns auf allen Social Media Plattformen und bleiben Sie auf dem Laufenden!
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border-4 border-white">
                <h3 className="text-2xl font-bangers text-black mb-4">❤️ LIKEN</h3>
                <p className="text-black font-comic">
                  Liken Sie unsere Posts und zeigen Sie Ihre Unterstützung für IVNK!
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border-4 border-white">
                <h3 className="text-2xl font-bangers text-black mb-4">🔄 TEILEN</h3>
                <p className="text-black font-comic">
                  Teilen Sie unsere Inhalte und helfen Sie uns, die IVNK Community zu vergrößern!
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border-4 border-white">
                <h3 className="text-2xl font-bangers text-black mb-4">🎁 BELOHNUNG</h3>
                <p className="text-black font-comic">
                  Erhalten Sie das exklusive "Early Supporter" Überraschungspaket!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-black hover:bg-gray-800 text-meme-gold font-bold text-xl px-8 py-4 rounded-full"
                onClick={() => window.open('https://x.com/Get_Ivanka_Meme', '_blank')}
              >
                🐦 Follow on X
              </Button>
              <Button 
                size="lg"
                className="bg-black hover:bg-gray-800 text-meme-gold font-bold text-xl px-8 py-4 rounded-full"
                onClick={() => window.open('https://discord.gg/8b5YDW62D4', '_blank')}
              >
                💬 Join Discord
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img 
              src="/lovable-uploads/917fc9ad-85a4-4fe1-9ccb-8655c30463d8.png" 
              alt="Early Supporter" 
              className="w-80 md:w-96 h-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlySupporterSection;

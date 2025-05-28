
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Circle, Clock } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "LAUNCH 🚀",
      status: "completed",
      items: [
        "Token Launch on SUI",
        "Website & Social Media",
        "Community Building",
        "First Listings"
      ]
    },
    {
      phase: "Phase 2", 
      title: "EXPANSION 📈",
      status: "current",
      items: [
        "Major CEX Listings",
        "Influencer Partnerships",
        "Meme Competitions",
        "Community Events"
      ]
    },
    {
      phase: "Phase 3",
      title: "DOMINANCE 👑",
      status: "upcoming",
      items: [
        "SUI Ecosystem Integration",
        "NFT Collection Launch",
        "Utility Development",
        "Global Marketing"
      ]
    },
    {
      phase: "Phase 4",
      title: "LEGACY 💎",
      status: "upcoming", 
      items: [
        "Ivanka Metaverse",
        "DeFi Protocol",
        "Cross-Chain Bridge",
        "Moon Mission 🌙"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-black via-gray-800 to-meme-gold">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
            ROADMAP 🗺️
          </h2>
          <p className="text-xl text-white/90 font-comic max-w-3xl mx-auto">
            Our path to world domination... uh, to SUI dominance! 👑
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapItems.map((item, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden border-4 shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                item.status === 'completed' 
                  ? 'bg-gradient-to-br from-green-600 to-green-800 border-green-500' 
                  : item.status === 'current'
                  ? 'bg-gradient-to-br from-meme-gold to-orange-500 border-meme-gold animate-glow'
                  : 'bg-gradient-to-br from-gray-700 to-black border-gray-600'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-comic font-bold text-white">
                    {item.phase}
                  </span>
                  {item.status === 'completed' && <CheckCircle className="w-6 h-6 text-white" />}
                  {item.status === 'current' && <Clock className="w-6 h-6 text-black animate-spin" />}
                  {item.status === 'upcoming' && <Circle className="w-6 h-6 text-white" />}
                </div>
                
                <h3 className="text-2xl font-bangers mb-4 text-white">
                  {item.title}
                </h3>
                
                <ul className="space-y-2">
                  {item.items.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        item.status === 'completed' ? 'bg-white' : 
                        item.status === 'current' ? 'bg-black' : 'bg-white/60'
                      }`} />
                      <span className={`font-comic ${
                        item.status === 'completed' ? 'text-white' :
                        item.status === 'current' ? 'text-black' : 'text-white'
                      }`}>
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              {item.status === 'current' && (
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                  ACTIVE
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bangers text-meme-gold mb-6">
              🎯 OUR GOAL: SUI DOMINANCE! 🎯
            </h3>
            <p className="text-xl text-white font-comic mb-4">
              "DON'T BE LATE!" - Ivanka
            </p>
            <p className="text-lg text-white/80 font-comic">
              Get in before it's too late! Together we'll make $IVNK 
              the king... uh, queen of SUI! 👑💎
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

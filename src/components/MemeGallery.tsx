
import { Card, CardContent } from "@/components/ui/card";

const MemeGallery = () => {
  const memes = [
    {
      image: "/lovable-uploads/ce34fcda-ee1d-4941-9890-09480e8bae01.png",
      title: "IVANKA GOES SOLANA",
      description: "When you're so elegant, even the paparazzi can't get enough! 📸✨"
    },
    {
      image: "/lovable-uploads/bfa1e422-4896-4ae7-b996-13aca6f50129.png",
      title: "IVANKA TAKES OFF",
      description: "To the moon and beyond! While others cry, we fly! 🚀🌙"
    },
    {
      image: "/lovable-uploads/0d68f349-31c0-45bb-92b8-0a8604ebd5a3.png",
      title: "THE BIG DINNER",
      description: "Already did. You're late. - The classiest response to FOMO! 💅"
    },
    {
      image: "/lovable-uploads/6ed167d4-c489-4832-b742-0cc5d3c22755.png",
      title: "QUEEN OF SUI",
      description: "Other chains bug, we design! Ruling the SUI kingdom with style! 👑"
    },
    {
      image: "/lovable-uploads/7a1686b3-df39-48a2-9054-c9653de2a40f.png",
      title: "LUXURY LIFESTYLE",
      description: "When your portfolio is as elegant as your ride! 🏎️💎"
    },
    {
      image: "/lovable-uploads/bc5c120f-e9f7-4fb5-afeb-2440b4849928.png",
      title: "I WANT TO BE HER",
      description: "The ultimate crypto goals! Everyone wants that IVANKA success! ⭐"
    },
    {
      image: "/lovable-uploads/3dff6a3b-f725-4d15-b82e-7421424db7b7.png",
      title: "GET IVANKA NOW",
      description: "Don't be the one looking confused while others celebrate! 🎉"
    },
    {
      image: "/lovable-uploads/725438b7-8c3f-4ab1-bc96-95b9755d519b.png",
      title: "DON'T BE LATE",
      description: "While others are still sleeping, we're already pumping iron! 💪"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-800 to-meme-gold relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
            MEME GALLERY 🎭
          </h2>
          <p className="text-xl text-white/90 font-comic max-w-3xl mx-auto">
            The finest collection of IVANKA memes - where class meets comedy! 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {memes.map((meme, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={meme.image} 
                    alt={meme.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bangers text-meme-gold mb-2">
                    {meme.title}
                  </h3>
                  <p className="text-white font-comic text-sm">
                    {meme.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bangers text-meme-gold mb-4">
              Share Your Own IVANKA Memes! 🎨
            </h3>
            <p className="text-white font-comic text-lg">
              Got a classy meme idea? Share it with our community and become part of the IVANKA legend!
            </p>
          </div>
        </div>

        {/* Animated Memecoins Image */}
        <div className="absolute top-20 right-10 animate-bounce-custom">
          <img 
            src="/lovable-uploads/789b0c37-88a8-4e20-98ae-bd8f4caf622a.png" 
            alt="Memecoins" 
            className="w-32 h-32 drop-shadow-2xl animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default MemeGallery;

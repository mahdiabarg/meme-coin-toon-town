
import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle } from "lucide-react";

const EarlySupporterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-meme-gold via-orange-500 to-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-black drop-shadow-2xl mb-6">
            EARLY SUPPORTER 🎁
          </h2>
          <p className="text-xl text-black/80 font-comic max-w-4xl mx-auto mb-8">
            Follow us everywhere, share and like our content and become part of our community! 
            For this you will receive the exclusive "Early Supporter" surprise package! 🎉
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border-4 border-white">
                <h3 className="text-2xl font-bangers text-black mb-4">📱 FOLLOW</h3>
                <p className="text-black font-comic">
                  Follow us on all social media platforms and stay updated!
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border-4 border-white">
                <h3 className="text-2xl font-bangers text-black mb-4">❤️ LIKE</h3>
                <p className="text-black font-comic">
                  Like our posts and show your support for IVNK!
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border-4 border-white">
                <h3 className="text-2xl font-bangers text-black mb-4">🔄 SHARE</h3>
                <p className="text-black font-comic">
                  Share our content and help us grow the IVNK community!
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border-4 border-white">
                <h3 className="text-2xl font-bangers text-black mb-4">🎁 REWARD</h3>
                <p className="text-black font-comic">
                  Receive the exclusive "Early Supporter" surprise package!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-black hover:bg-gray-800 text-meme-gold font-bold text-xl px-8 py-4 rounded-full"
                onClick={() => window.open('https://x.com/Get_Ivanka_Meme', '_blank')}
              >
                <Twitter className="w-5 h-5 mr-2" />
                Follow on X
              </Button>
              <Button 
                size="lg"
                className="bg-black hover:bg-gray-800 text-meme-gold font-bold text-xl px-8 py-4 rounded-full"
                onClick={() => window.open('https://discord.gg/8b5YDW62D4', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
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

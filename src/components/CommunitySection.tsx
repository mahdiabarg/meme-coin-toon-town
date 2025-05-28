
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, FileText, ExternalLink } from "lucide-react";

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-black via-gray-800 to-meme-gold">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
            JOIN THE IVANKA COMMUNITY 👑
          </h2>
          <p className="text-xl text-white/90 font-comic max-w-3xl mx-auto">
            Connect with fellow classy investors and stay updated
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-4 border-meme-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-16 h-16 mb-4 mx-auto text-white" />
              <h3 className="text-2xl font-bangers text-white mb-4">Discord</h3>
              <p className="text-white font-comic mb-6">
                Chat with the community, get support, and share memes.
              </p>
              <Button 
                className="bg-white hover:bg-gray-200 text-purple-600 font-bold"
                onClick={() => window.open('https://discord.gg/8b5YDW62D4', '_blank')}
              >
                Join Discord
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-700 border-4 border-meme-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <svg className="w-16 h-16 mb-4 mx-auto text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <h3 className="text-2xl font-bangers text-white mb-4">X (Twitter)</h3>
              <p className="text-white font-comic mb-6">
                Follow us for the latest updates and announcements.
              </p>
              <Button 
                className="bg-white hover:bg-gray-200 text-blue-600 font-bold"
                onClick={() => window.open('https://x.com/Get_Ivanka_Meme', '_blank')}
              >
                Follow on X
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600 to-red-600 border-4 border-meme-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Users className="w-16 h-16 mb-4 mx-auto text-white" />
              <h3 className="text-2xl font-bangers text-white mb-4">Reddit</h3>
              <p className="text-white font-comic mb-6">
                Join discussions, AMAs, and stay updated on Reddit.
              </p>
              <Button 
                className="bg-white hover:bg-gray-200 text-orange-600 font-bold"
                onClick={() => window.open('https://www.reddit.com/user/Get_IvankaCoin/', '_blank')}
              >
                Join Reddit
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-4 border-meme-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <svg className="w-16 h-16 mb-4 mx-auto text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <h3 className="text-2xl font-bangers text-white mb-4">Telegram</h3>
              <p className="text-white font-comic mb-6">
                Get real-time announcements and chat with the core team.
              </p>
              <Button 
                className="bg-white hover:bg-gray-200 text-blue-600 font-bold"
                onClick={() => window.open('https://t.me/ivankaofficiall', '_blank')}
              >
                Join Telegram
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600 to-green-800 border-4 border-meme-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <svg className="w-16 h-16 mb-4 mx-auto text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <h3 className="text-2xl font-bangers text-white mb-4">WhatsApp</h3>
              <p className="text-white font-comic mb-6">
                Join our WhatsApp community for instant updates.
              </p>
              <Button 
                className="bg-white hover:bg-gray-200 text-green-600 font-bold"
                onClick={() => window.open('https://chat.whatsapp.com/LawvBYPEIevKhNk3TjpTJT', '_blank')}
              >
                Join WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <FileText className="w-16 h-16 mb-4 mx-auto text-meme-gold" />
              <h3 className="text-2xl font-bangers text-meme-gold mb-4">View Press Kit</h3>
              <p className="text-white font-comic mb-6">
                Access our official press kit with logos, images, and brand guidelines.
              </p>
              <Button 
                className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold"
                onClick={() => window.open('https://getivanka.com/press-kit', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Press Kit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

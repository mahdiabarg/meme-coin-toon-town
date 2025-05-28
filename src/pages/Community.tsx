
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Users, FileText, ExternalLink } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-meme-gold">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
              JOIN THE IVANKA COMMUNITY 👑
            </h1>
            <p className="text-2xl text-meme-gold font-comic">
              Connect with fellow classy investors and stay updated
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <MessageCircle className="w-16 h-16 mb-4 mx-auto text-white" />
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
            </div>

            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8 text-center">
                <FileText className="w-16 h-16 mb-4 mx-auto text-meme-gold" />
                <h3 className="text-3xl font-bangers text-meme-gold mb-4">View Press Kit</h3>
                <p className="text-white font-comic mb-6 text-lg">
                  Access our official press kit with logos, images, and brand guidelines.
                </p>
                <Button 
                  size="lg"
                  className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold text-xl px-8 py-4 rounded-full"
                  onClick={() => window.open('https://getivanka.com/press-kit', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Press Kit
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-meme-gold to-orange-500 border-4 border-meme-gold shadow-2xl">
              <CardContent className="p-8 text-center">
                <h2 className="text-4xl font-bangers text-black mb-6">
                  Be Part of the IVANKA Revolution
                </h2>
                <p className="text-black font-comic text-xl mb-6">
                  Don't miss out on the most sophisticated meme token in the crypto world. Join now and make your portfolio classy again.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-black hover:bg-gray-800 text-white font-bold text-xl px-8 py-4 rounded-full"
                    onClick={() => window.open('https://app.turbos.finance/#/trade?input=0x24f7a9147b69a824e56937b6265a7a74d3675f1e4965bb3a0bb2e63fd31ada41::ivnk::IVNK&output=0x2::sui::SUI', '_blank')}
                  >
                    Buy $IVNK Now
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white font-bold text-xl px-8 py-4 rounded-full"
                    onClick={() => window.open('https://birdeye.so/token/0x24f7a9147b69a824e56937b6265a7a74d3675f1e4965bb3a0bb2e63fd31ada41::ivnk::IVNK?chain=sui&tab=chart', '_blank')}
                  >
                    View Chart
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bangers text-meme-gold mb-6 text-center">Frequently Asked Questions</h2>
                <p className="text-xl text-white font-comic mb-8 text-center">
                  Everything you need to know about the Ivanka Coin ecosystem
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bangers text-meme-gold mb-2">What is the Ivanka Coin?</h3>
                    <p className="text-white font-comic">
                      Ivanka Coin (IVNK) is a community-driven cryptocurrency designed to combine the best of crypto culture with real-world impact. It features a unique tokenomics model that contributes to educational initiatives while maintaining a deflationary mechanism for long-term value.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bangers text-meme-gold mb-2">How does the education contribution work?</h3>
                    <p className="text-white font-comic">
                      With every transaction (buy, sell, or transfer), 0.075% of the transaction volume is automatically allocated to publicly supported educational projects. This means that simply by trading IVNK, you're contributing to classrooms, scholarships, and learning initiatives worldwide.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bangers text-meme-gold mb-2">What makes IVNK a deflationary token?</h3>
                    <p className="text-white font-comic">
                      IVNK implements a 0.025% burn mechanism on every transaction. This portion of tokens is permanently removed from circulation, gradually reducing the total supply over time. This deflationary approach aims to increase scarcity and potentially enhance value for long-term holders.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bangers text-meme-gold mb-2">What is the total supply of IVNK?</h3>
                    <p className="text-white font-comic">
                      The maximum supply of IVNK is capped at 999,999,999 tokens. This supply is distributed across community sale & airdrops (50%), liquidity pool (20%), education reserve (15%), marketing & development (10%), and team & advisors (5%).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bangers text-meme-gold mb-2">Where can I trade IVNK?</h3>
                    <p className="text-white font-comic">
                      IVNK is available on decentralized exchanges like Turbos Finance. As the project grows, we plan to expand to more exchanges. Always make sure you're trading the authentic IVNK token by verifying the contract address through our official channels.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-meme-gold font-bangers text-xl mb-4">Still have questions? We're here to help!</p>
                  <Button 
                    className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold"
                    onClick={() => window.open('mailto:support@buyivanka.shop', '_blank')}
                  >
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;

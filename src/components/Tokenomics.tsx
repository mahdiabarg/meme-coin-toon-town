
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-br from-meme-gold via-meme-orange to-meme-pink">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-black drop-shadow-2xl mb-6">
            TOKENOMICS 📊
          </h2>
          <p className="text-xl text-black/80 font-comic max-w-3xl mx-auto">
            Fair, transparent und für die Community gemacht! 💎
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white/20 backdrop-blur-lg border-4 border-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bangers text-black text-center">
                TOKEN DETAILS 🪙
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bangers text-meme-purple mb-2">$IVNK</div>
                <div className="text-lg font-comic text-black">Der eleganteste SUI Token</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/30 rounded-xl">
                  <span className="font-comic font-bold text-black">Total Supply:</span>
                  <span className="font-bangers text-xl text-meme-purple">1,000,000,000</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/30 rounded-xl">
                  <span className="font-comic font-bold text-black">Blockchain:</span>
                  <span className="font-bangers text-xl text-meme-blue">SUI Network</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/30 rounded-xl">
                  <span className="font-comic font-bold text-black">Liquidity:</span>
                  <span className="font-bangers text-xl text-meme-green">LOCKED 🔒</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-lg border-4 border-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bangers text-black text-center">
                VERTEILUNG 📈
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-comic font-bold text-black">Community (70%)</span>
                    <span className="font-bangers text-meme-purple">700M</span>
                  </div>
                  <Progress value={70} className="h-4 bg-white/50" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-comic font-bold text-black">Liquidity Pool (20%)</span>
                    <span className="font-bangers text-meme-blue">200M</span>
                  </div>
                  <Progress value={20} className="h-4 bg-white/50" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-comic font-bold text-black">Team (5%)</span>
                    <span className="font-bangers text-meme-green">50M</span>
                  </div>
                  <Progress value={5} className="h-4 bg-white/50" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-comic font-bold text-black">Marketing (5%)</span>
                    <span className="font-bangers text-meme-orange">50M</span>
                  </div>
                  <Progress value={5} className="h-4 bg-white/50" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-black/20 backdrop-blur-lg rounded-3xl p-8 border-4 border-black max-w-4xl mx-auto">
            <h3 className="text-4xl font-bangers text-white mb-6">
              🔥 KEINE STEUERN! 🔥
            </h3>
            <p className="text-xl text-white font-comic mb-4">
              0% Buy Tax • 0% Sell Tax
            </p>
            <p className="text-lg text-white/80 font-comic">
              Pure Community Power - keine versteckten Gebühren! 
              Was du siehst, ist was du bekommst! 💪
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;

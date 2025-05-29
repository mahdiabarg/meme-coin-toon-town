import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-br from-meme-gold via-orange-500 to-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-black drop-shadow-2xl mb-6">
            TOKENOMICS 📊
          </h2>
          <p className="text-xl text-black/80 font-comic max-w-3xl mx-auto">
            Fair, transparent and made for the community! 💎
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white/20 backdrop-blur-lg border-4 border-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bangers text-black text-center">
                TOKEN DETAILS 💰
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <img src="/lovable-uploads/e3b7da9f-71c6-46cc-a3c3-3716a02c4eda.png" alt="IVNK Coin" className="w-16 h-16 mr-3 object-cover" />
                  <div className="text-4xl font-bangers text-black">$IVNK</div>
                </div>
                <div className="text-lg font-comic text-black">The most elegant SUI token</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/30 rounded-xl">
                  <span className="font-comic font-bold text-black">Total Supply:</span>
                  <span className="font-bangers text-xl text-black">1,000,000,000</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/30 rounded-xl">
                  <span className="font-comic font-bold text-black">Blockchain:</span>
                  <span className="font-bangers text-xl text-black">SUI Network</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/30 rounded-xl">
                  <span className="font-comic font-bold text-black">Liquidity:</span>
                  <span className="font-bangers text-xl text-green-600">LOCKED 🔒</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-lg border-4 border-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bangers text-black text-center">
                DISTRIBUTION 📈
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-comic font-bold text-black">Community Sale & Airdrops (40%)</span>
                    <span className="font-bangers text-black">400M</span>
                  </div>
                  <Progress value={40} className="h-4 bg-white/50" />
                  <div className="text-xs text-black/70 font-comic mt-1">
                    10% specifically for airdrops to early supporters
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-comic font-bold text-black">Liquidity Pool (20%)</span>
                    <span className="font-bangers text-black">200M</span>
                  </div>
                  <Progress value={20} className="h-4 bg-white/50" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-comic font-bold text-black">Education Reserve (15%)</span>
                    <span className="font-bangers text-black">150M</span>
                  </div>
                  <Progress value={15} className="h-4 bg-white/50" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-comic font-bold text-black">Team & Advisors (15%)</span>
                    <span className="font-bangers text-black">150M</span>
                  </div>
                  <Progress value={15} className="h-4 bg-white/50" />
                  <div className="text-xs text-black/70 font-comic mt-1">
                    Locked with vesting schedule
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-comic font-bold text-black">Marketing & Development (10%)</span>
                    <span className="font-bangers text-black">100M</span>
                  </div>
                  <Progress value={10} className="h-4 bg-white/50" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rakete with dramatic flight animation - positioned in front */}
        <div className="absolute bottom-10 right-10 animate-rocket-flight z-50">
          <img src="/lovable-uploads/b4a41b89-66a5-4a1f-ab82-32448ca2c90b.png" alt="IVNK Rakete" className="w-80 md:w-96 h-auto drop-shadow-2xl" />
        </div>

        <div className="text-center">
          
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;

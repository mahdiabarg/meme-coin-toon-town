import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

const HowToBuySection = () => {
  return (
    <section id="how-to-buy" className="py-20 bg-gradient-to-br from-meme-gold via-orange-500 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-black drop-shadow-2xl mb-6">
            HOW TO BUY $IVNK 💰
          </h2>
          <p className="text-xl text-black/80 font-comic max-w-3xl mx-auto">
            Your step-by-step guide to joining the IVANKA revolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/20 backdrop-blur-lg border-4 border-white shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">1️⃣</div>
              <h3 className="text-2xl font-bangers text-black mb-4">Create Wallet</h3>
              <p className="text-black font-comic">
                Download a Sui-compatible wallet (e.g., Sui Wallet, Suiet Wallet) and set it up.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-lg border-4 border-white shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">2️⃣</div>
              <h3 className="text-2xl font-bangers text-black mb-4">Get SUI</h3>
              <p className="text-black font-comic">
                Purchase SUI from an exchange and transfer it to your wallet.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-lg border-4 border-white shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">3️⃣</div>
              <h3 className="text-2xl font-bangers text-black mb-4">Swap for IVNK</h3>
              <p className="text-black font-comic">
                Use a SUI DEX or aggregator like Turbos Finance to swap your SUI for $IVNK tokens.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-black hover:bg-gray-800 text-white font-bold text-xl px-8 py-4 rounded-full"
              onClick={() => window.open('https://app.turbos.finance/#/trade?input=0x24f7a9147b69a824e56937b6265a7a74d3675f1e4965bb3a0bb2e63fd31ada41::ivnk::IVNK&output=0x2::sui::SUI', '_blank')}
            >
              Buy $IVNK Now on Turbos Finance
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-8 py-4 rounded-full flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  How to Tutorial
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/lx81qyeS5DU"
                    title="How to Buy IVNK Tutorial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <img 
              src="/lovable-uploads/baedc9d1-aed9-4874-805a-825b96e34848.png" 
              alt="Step 1: SUI to IVNK swap setup" 
              className="w-full rounded-lg shadow-lg mb-2"
            />
            <p className="text-black font-comic text-sm">Set up your swap</p>
          </div>
          <div className="text-center">
            <img 
              src="/lovable-uploads/5c5fc045-c49f-44a3-929e-2f66324570d0.png" 
              alt="Step 2: Transaction confirmation" 
              className="w-full rounded-lg shadow-lg mb-2"
            />
            <p className="text-black font-comic text-sm">Confirm transaction</p>
          </div>
          <div className="text-center">
            <img 
              src="/lovable-uploads/03303c39-ba5f-4d67-b077-945b90c136d3.png" 
              alt="Step 3: Wallet overview" 
              className="w-full rounded-lg shadow-lg mb-2"
            />
            <p className="text-black font-comic text-sm">Check your wallet</p>
          </div>
          <div className="text-center">
            <img 
              src="/lovable-uploads/cc7cd4af-dca5-4e5b-bbd7-a156dbfce0d8.png" 
              alt="Step 4: Complete swap" 
              className="w-full rounded-lg shadow-lg mb-2"
            />
            <p className="text-black font-comic text-sm">Complete your swap</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;

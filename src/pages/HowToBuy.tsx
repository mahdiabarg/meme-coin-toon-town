import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HowToBuy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-meme-gold">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
              HOW TO BUY $IVNK 💰
            </h1>
            <p className="text-2xl text-meme-gold font-comic">
              Your step-by-step guide to joining the IVANKA revolution with confidence
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left side - Content */}
            <div className="lg:w-2/3 space-y-8">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bangers text-meme-gold mb-4">Step 1: Prepare Your SUI Wallet</h2>
                  <p className="text-white font-comic text-lg mb-4">
                    To hold $IVNK, you first need a SUI-compatible digital wallet. This is where your tokens will be stored securely.
                  </p>
                  <p className="text-white font-comic text-lg mb-6">
                    Download and install a trusted SUI wallet from the official sources listed below. During setup, you'll receive a unique 'seed phrase' (or recovery phrase).
                  </p>
                  <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6">
                    <p className="text-white font-comic font-bold">
                      IMPORTANT: Write this phrase down and store it in multiple safe, offline locations. Never share it with anyone. This phrase is the only way to recover your wallet if you lose access.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bangers text-meme-gold">Recommended Wallets:</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold"
                        onClick={() => window.open('https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil', '_blank')}
                      >
                        Sui Wallet
                      </Button>
                      <Button 
                        className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold"
                        onClick={() => window.open('https://chrome.google.com/webstore/detail/suiet-sui-wallet/khpkpbbcccdmmclmhihkjnhimihihinp', '_blank')}
                      >
                        Suiet Wallet
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bangers text-meme-gold mb-4">Step 2: Acquire SUI Tokens</h2>
                  <p className="text-white font-comic text-lg mb-4">
                    SUI is the native cryptocurrency of the SUI network. You'll need SUI to pay for transaction fees and to swap for $IVNK.
                  </p>
                  <p className="text-white font-comic text-lg mb-4">
                    You can purchase SUI tokens from major cryptocurrency exchanges like Binance, Coinbase, KuCoin, Kraken, etc.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-white font-comic">
                    <li>Create an account on an exchange if you don't have one.</li>
                    <li>Purchase SUI using your preferred payment method (bank transfer, credit/debit card).</li>
                    <li>Once purchased, withdraw the SUI tokens from the exchange to your personal SUI wallet address (from Step 1). Double-check the address carefully before confirming the withdrawal.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bangers text-meme-gold mb-4">Step 3: Swap SUI for $IVNK</h2>
                  <p className="text-white font-comic text-lg mb-4">
                    With SUI in your wallet, you can now swap it for $IVNK tokens on a Decentralized Exchange (DEX).
                  </p>
                  <p className="text-white font-comic text-lg mb-4">
                    We recommend using Turbos Finance, a popular DEX on the SUI network.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-white font-comic mb-6">
                    <li>Go to the Turbos Finance $IVNK swap page (link below).</li>
                    <li>Connect your SUI wallet to the platform.</li>
                    <li>Ensure SUI is selected as the token you are paying with, and $IVNK is selected as the token you wish to receive.</li>
                    <li>Enter the amount of SUI you want to swap or the amount of $IVNK you want to buy.</li>
                    <li>Review the transaction details (including estimated fees and slippage) and confirm the swap in your wallet.</li>
                  </ol>
                  <Button 
                    size="lg"
                    className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold text-xl px-8 py-4 rounded-full"
                    onClick={() => window.open('https://app.turbos.finance/#/trade?input=0x24f7a9147b69a824e56937b6265a7a74d3675f1e4965bb3a0bb2e63fd31ada41::ivnk::IVNK&output=0x2::sui::SUI', '_blank')}
                  >
                    Swap on Turbos Finance
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bangers text-meme-gold mb-4">Step 4: Welcome to the IVANKA Community!</h2>
                  <p className="text-white font-comic text-lg mb-4">
                    Congratulations! You are now an official holder of $IVNK tokens.
                  </p>
                  <p className="text-white font-comic text-lg mb-4">
                    Your $IVNK tokens will appear in your SUI wallet shortly after the transaction is confirmed on the SUI network.
                  </p>
                  <div className="space-y-2 text-white font-comic">
                    <p>We encourage you to:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Join our official community channels (Telegram, Discord, X/Twitter) to stay updated, ask questions, and connect with fellow classy investors.</li>
                      <li>Secure your investment: Remember, security is paramount. Never share your private keys or seed phrase. Beware of phishing attempts and impersonators.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-bangers text-meme-gold mb-4">Your Security is Our Priority</h3>
                <p className="text-white font-comic">
                  Always practice safe crypto habits. Double-check URLs, be wary of unsolicited messages, and never share your private keys. The IVANKA team will never ask for your seed phrase or private keys.
                </p>
              </div>

              <div className="text-center text-white/80 font-comic text-sm mt-8">
                <p>Cryptocurrency investments are subject to high market risk. Please make your investments cautiously. $IVNK is a meme token created for entertainment purposes and has no intrinsic financial value or expectation of financial return. This guide is for informational purposes only and not financial advice. Do Your Own Research (DYOR).</p>
              </div>
            </div>

            {/* Right side - Large Image */}
            <div className="lg:w-1/3">
              <img 
                src="/lovable-uploads/591f9d6a-5bd1-4022-9b38-6ea00b185e8a.png" 
                alt="How to Buy IVNK" 
                className="w-full max-w-sm mx-auto lg:mx-0 rounded-3xl shadow-2xl sticky top-32"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowToBuy;

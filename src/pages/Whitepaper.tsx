
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Whitepaper = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-meme-gold">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
              IVANKA TOKEN WHITEPAPER 📄
            </h1>
            <p className="text-2xl text-meme-gold font-comic">
              Make Crypto Classy Again
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bangers text-meme-gold mb-4">1. Introduction</h2>
                <p className="text-white font-comic text-lg">
                  IVANKA ($IVNK) is a community-driven SUI-based token designed to bring class, sophistication, and a touch of glamour to the cryptocurrency world. In a landscape often dominated by repetitive and short-lived meme tokens, IVANKA aims to establish a community that values quality, elegance, and long-term vision while maintaining the fun and engagement typical of successful meme coins.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bangers text-meme-gold mb-4">2. Vision & Mission</h2>
                <div className="space-y-4 text-white font-comic text-lg">
                  <p><strong>Vision:</strong> To become the premier luxury-themed cryptocurrency that bridges the gap between meme culture and sophisticated investments.</p>
                  <p><strong>Mission:</strong> To create a vibrant, engaged community centered around the IVANKA token, driving adoption through innovative marketing, strategic partnerships, and community-led initiatives.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bangers text-meme-gold mb-4">3. Tokenomics</h2>
                <div className="space-y-4 text-white font-comic text-lg">
                  <p><strong>Total Supply:</strong> 1,000,000,000 (1B) $IVNK tokens</p>
                  <p><strong>Network:</strong> SUI Network</p>
                  
                  <h3 className="text-xl font-bangers text-meme-gold mt-6 mb-3">Distribution</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>40% - Community Sale & Airdrops</li>
                    <li>20% - Liquidity Pool</li>
                    <li>15% - Education Reserve</li>
                    <li>10% - Marketing & Development</li>
                    <li>15% - Team & Advisors (locked with vesting)</li>
                  </ul>

                  <h3 className="text-xl font-bangers text-meme-gold mt-6 mb-3">Tax Structure</h3>
                  <p>The IVNK token implements a 10% transaction tax:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>7.5% to education projects</li>
                    <li>2.5% to token burns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bangers text-meme-gold mb-4">4. Roadmap</h2>
                <div className="space-y-6 text-white font-comic">
                  <div>
                    <h3 className="text-xl font-bangers text-meme-gold mb-2">Phase 1: Foundation (Q2 2025)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Token creation and smart contract deployment</li>
                      <li>Website and social media launch</li>
                      <li>Community building initiatives</li>
                      <li>Initial marketing campaigns</li>
                      <li>Liquidity pool establishment</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bangers text-meme-gold mb-2">Phase 2: Growth (Q3 2025)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Major exchange listings</li>
                      <li>Expanded marketing campaigns</li>
                      <li>Strategic partnerships</li>
                      <li>Community expansion</li>
                      <li>Launch of merchandise store</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bangers text-meme-gold mb-2">Phase 3: Expansion (Q4 2025)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Development of IVANKA NFT collection</li>
                      <li>Development of a Telegram and browser-based game</li>
                      <li>Launch of community governance features</li>
                      <li>International marketing expansion</li>
                      <li>Additional utility development</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bangers text-meme-gold mb-2">Phase 4: Maturity (2026)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Launch of IVANKA DEX platform</li>
                      <li>Cross-chain integration</li>
                      <li>Major brand partnerships</li>
                      <li>Real-world utility implementations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bangers text-meme-gold mb-4">5. Security & Transparency</h2>
                <div className="text-white font-comic text-lg space-y-2">
                  <p>The IVANKA team is committed to maintaining the highest standards of security and transparency:</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>Contract audit by reputable security firms</li>
                    <li>Liquidity locked for a minimum of 1 year</li>
                    <li>Team tokens subject to vesting schedules</li>
                    <li>Regular financial reporting and updates</li>
                    <li>Open communication channels with the community</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bangers text-meme-gold mb-4">6. Conclusion</h2>
                <p className="text-white font-comic text-lg">
                  IVANKA is more than just another meme coin; it represents a vision for bringing elegance and class to the cryptocurrency space. By combining the viral appeal of meme tokens with sustainable tokenomics, community focus, and real utility development, IVANKA aims to establish itself as a lasting presence in the cryptocurrency ecosystem.
                </p>
                <p className="text-xl text-meme-gold font-bangers mt-6 text-center">
                  Join us in our mission to Make Crypto Classy Again!
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold text-xl px-8 py-4 rounded-full"
              >
                Download Whitepaper PDF
              </Button>
            </div>

            <div className="text-center text-white/80 font-comic text-sm mt-8">
              <p>Disclaimer: $IVNK is a meme token with no intrinsic value or financial return expectation. This whitepaper is for information purposes only and does not constitute financial advice or a prospectus.</p>
              <p className="mt-2">Last Updated: May 18, 2025</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Whitepaper;


import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bangers text-transparent bg-gradient-to-r from-meme-gold via-yellow-400 to-orange-500 bg-clip-text mb-6">
              DISCLAIMER ⚠️
            </h1>
            <p className="text-lg text-white/80 font-comic">
              Important legal information regarding IVANKA Token ($IVNK)
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-8 space-y-8">
            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">🎭 Meme Token Notice</h2>
              <p className="text-white/80 font-comic mb-4">
                IVANKA Token ($IVNK) is a meme token created for entertainment purposes only. This token has no intrinsic value, 
                no expectation of financial return, and serves no utility function outside of entertainment and community engagement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">💰 Not an Investment</h2>
              <p className="text-white/80 font-comic mb-4">
                $IVNK is NOT an investment vehicle, security, or commodity. It should not be purchased with the expectation of 
                profit or financial gain. The token's value may fluctuate wildly and could become worthless at any time.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">⚠️ High Risk Warning</h2>
              <p className="text-white/80 font-comic mb-4">
                Cryptocurrency investments carry extreme risk. You could lose all of your investment. The cryptocurrency market 
                is highly volatile and unpredictable. Past performance does not indicate future results.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">🚫 No Financial Advice</h2>
              <p className="text-white/80 font-comic mb-4">
                Nothing on this website, in our communications, or in any materials we provide constitutes financial, investment, 
                trading, or legal advice. We strongly recommend consulting with qualified financial advisors before making any 
                cryptocurrency-related decisions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">🎪 Entertainment Purpose</h2>
              <p className="text-white/80 font-comic mb-4">
                This website and all associated content are created for entertainment purposes. Any information provided is for 
                general informational purposes only and should not be relied upon for making financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">📝 No Guarantees</h2>
              <p className="text-white/80 font-comic mb-4">
                We make no representations or warranties about the accuracy, completeness, or reliability of any information 
                on this website. The development team reserves the right to modify, suspend, or discontinue the project at any time.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">🌍 Regulatory Compliance</h2>
              <p className="text-white/80 font-comic mb-4">
                Cryptocurrency regulations vary by jurisdiction. It is your responsibility to ensure compliance with local laws 
                and regulations. Some jurisdictions may prohibit or restrict cryptocurrency activities.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">🔒 Technical Risks</h2>
              <p className="text-white/80 font-comic mb-4">
                Blockchain technology involves technical risks including but not limited to smart contract vulnerabilities, 
                network congestion, and potential bugs or exploits. Use at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">📞 Contact</h2>
              <p className="text-white/80 font-comic">
                For questions about this disclaimer, contact us at support@buyivanka.shop
              </p>
            </section>

            <div className="mt-8 p-6 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-300 font-comic font-bold text-center">
                ⚠️ REMEMBER: Only invest what you can afford to lose completely. Meme tokens are highly speculative and risky. ⚠️
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bangers mb-6">
              <span className="text-transparent bg-gradient-to-r from-meme-gold via-yellow-400 to-orange-500 bg-clip-text">TERMS OF SERVICE</span>{" "}
              <span className="text-white">⚖️</span>
            </h1>
            <p className="text-lg text-white/80 font-comic">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-8 space-y-8">
            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/80 font-comic mb-4">
                By accessing and using the IVANKA Token ($IVNK) website and services, you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">2. Description of Service</h2>
              <p className="text-white/80 font-comic mb-4">
                IVANKA Token ($IVNK) is a meme token created for entertainment purposes. The token has no intrinsic value and should not be 
                considered an investment vehicle. Our website provides information about the token, community features, and related content.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">3. No Investment Advice</h2>
              <p className="text-white/80 font-comic mb-4">
                Nothing on this website constitutes investment advice, financial advice, trading advice, or any other sort of advice. 
                We do not recommend that any cryptocurrency should be bought, sold, or held by you. Always do your own research before 
                making any investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">4. Risks and Disclaimers</h2>
              <p className="text-white/80 font-comic mb-4">
                Cryptocurrency trading involves substantial risk of loss and is not suitable for every investor. The value of cryptocurrencies 
                can be extremely volatile and may result in significant loss. You acknowledge that you understand these risks and agree to 
                assume full responsibility for any trading decisions you make.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">5. User Conduct</h2>
              <p className="text-white/80 font-comic mb-4">
                You agree not to use our services for any unlawful purposes or to conduct any unlawful activity. You will not attempt to 
                manipulate, hack, or otherwise interfere with the proper functioning of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">6. Intellectual Property</h2>
              <p className="text-white/80 font-comic mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of 
                IVANKA Token or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">7. Limitation of Liability</h2>
              <p className="text-white/80 font-comic mb-4">
                In no event shall IVANKA Token, its officers, directors, employees, or agents be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">8. Modifications to Terms</h2>
              <p className="text-white/80 font-comic mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. 
                Your continued use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">9. Governing Law</h2>
              <p className="text-white/80 font-comic mb-4">
                These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict 
                of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">10. Contact Information</h2>
              <p className="text-white/80 font-comic">
                If you have any questions about these Terms of Service, please contact us at support@buyivanka.shop
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

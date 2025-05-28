
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bangers text-transparent bg-gradient-to-r from-meme-gold via-yellow-400 to-orange-500 bg-clip-text mb-6">
              PRIVACY POLICY 🔐
            </h1>
            <p className="text-lg text-white/80 font-comic">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-8 space-y-8">
            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">1. Information We Collect</h2>
              <p className="text-white/80 font-comic mb-4">
                We collect information you provide directly to us, such as when you contact us through our support channels, 
                join our community platforms, or interact with our website.
              </p>
              <ul className="list-disc list-inside text-white/80 font-comic space-y-2">
                <li>Contact information (email addresses when provided)</li>
                <li>Community usernames and profile information</li>
                <li>Messages and communications with our team</li>
                <li>Website usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">2. How We Use Your Information</h2>
              <p className="text-white/80 font-comic mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-white/80 font-comic space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about the project (only if you opt-in)</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">3. Information Sharing</h2>
              <p className="text-white/80 font-comic mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
              </p>
              <ul className="list-disc list-inside text-white/80 font-comic space-y-2">
                <li>To comply with legal requirements or valid legal processes</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>With service providers who assist in website operations (under strict confidentiality agreements)</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">4. Blockchain and Wallet Information</h2>
              <p className="text-white/80 font-comic mb-4">
                When you interact with blockchain networks:
              </p>
              <ul className="list-disc list-inside text-white/80 font-comic space-y-2">
                <li>Blockchain transactions are public and permanent</li>
                <li>We do not control or store your private keys or wallet information</li>
                <li>Your wallet address may be visible in transaction records</li>
                <li>We cannot reverse or modify blockchain transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">5. Cookies and Tracking</h2>
              <p className="text-white/80 font-comic mb-4">
                Our website may use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside text-white/80 font-comic space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality and user experience</li>
                <li>Provide relevant content and features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">6. Third-Party Services</h2>
              <p className="text-white/80 font-comic mb-4">
                Our website may contain links to third-party platforms (Discord, Telegram, Twitter/X, etc.). These services have 
                their own privacy policies. We are not responsible for their privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">7. Data Security</h2>
              <p className="text-white/80 font-comic mb-4">
                We implement appropriate technical and organizational measures to protect your personal information. However, 
                no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">8. Your Rights</h2>
              <p className="text-white/80 font-comic mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-white/80 font-comic space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Data portability (where applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">9. Children's Privacy</h2>
              <p className="text-white/80 font-comic mb-4">
                Our services are not intended for children under 18. We do not knowingly collect personal information from 
                children under 18. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">10. International Users</h2>
              <p className="text-white/80 font-comic mb-4">
                Our services are provided globally. Your information may be transferred to and processed in countries with 
                different privacy laws than your country of residence.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">11. Changes to Privacy Policy</h2>
              <p className="text-white/80 font-comic mb-4">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated 
                "Last updated" date. Continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bangers text-meme-gold mb-4">12. Contact Us</h2>
              <p className="text-white/80 font-comic">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                support@buyivanka.shop
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

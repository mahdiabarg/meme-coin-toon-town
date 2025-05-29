
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Palette, Type, MessageCircle, Mail } from "lucide-react";

const PressKit = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bangers text-transparent bg-gradient-to-r from-meme-gold via-yellow-400 to-orange-500 bg-clip-text mb-6">
              PRESS KIT 📰
            </h1>
            <p className="text-xl text-white/80 font-comic max-w-3xl mx-auto">
              Offizielle IVNK Presseunterlagen mit strategischen Informationen, Zielen und Marketingmaterialien.
            </p>
          </div>

          {/* Strategic Advantages */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Strategische Vorteile der Migration
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/e6b90707-2dc0-4875-89da-cc991011773d.png" 
                  alt="Strategische Vorteile der Migration" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* IVANKA Official */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              IVANKA OFFICIAL: Supply-Halbierung und Migration zur SOL-Chain
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/38d0649d-f142-4201-bf58-42ae045f527f.png" 
                  alt="IVANKA OFFICIAL Supply-Halbierung und Migration" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Strategic Mission */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Strategische Mission
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/4af0ffd8-54f5-41e6-b878-61f7b6166b4d.png" 
                  alt="Strategische Mission" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Strategic Goals */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Strategische Zielsetzungen
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/889d988f-401c-4aa6-b017-3d5f6b020627.png" 
                  alt="Strategische Zielsetzungen" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Supply Halving Technical Details */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Supply-Halbierung: Technische Details
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/f28896dc-4b4e-4623-ae86-82016a5ba663.png" 
                  alt="Supply-Halbierung Technische Details" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Migration to SOL-Chain */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Migration zur SOL-Chain: Airdrop-Mechanismus
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/20e9f47e-ee7e-4a52-bd9e-bd8c12cd8356.png" 
                  alt="Migration zur SOL-Chain Airdrop-Mechanismus" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Continuity on SUI-Chain */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Kontinuität auf der SUI-Chain
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/15d51037-b5d2-4697-b6fb-97f0147ebc0d.png" 
                  alt="Kontinuität auf der SUI-Chain" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* xDick Launchpad Integration */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              xDick Launchpad Integration
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/aa1d9d7a-be67-4093-ae4d-89e447d27470.png" 
                  alt="xDick Launchpad Integration" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* User Statistics */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Aktuelle Nutzerstatistiken
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/d2e0e3b0-74a2-45a6-a7dc-fda4697e21e0.png" 
                  alt="Aktuelle Nutzerstatistiken" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Future Marketing Strategy */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Zukünftige Marketingstrategie
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/60d2b4b3-7101-48bf-b035-0c262c70243e.png" 
                  alt="Zukünftige Marketingstrategie" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Next Steps and Implementation */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Nächste Schritte und Umsetzung
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/69fc9644-b89c-434f-b824-5d991012d5a5.png" 
                  alt="Nächste Schritte und Umsetzung" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Detailed Roadmap and Financing */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Detaillierte Roadmap und Finanzierung
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/1d2bc2d8-ed52-4b04-bc46-064f26eddc5e.png" 
                  alt="Detaillierte Roadmap und Finanzierung" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* IVANKA NFT Collection Financing - Part 1 */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              IVANKA NFT Collection Finanzierung
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/1da2777e-c1d5-405b-9702-9dfba03e17b8.png" 
                  alt="IVANKA NFT Collection Finanzierung" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* IVANKA NFT Collection Financing - Part 2 */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              IVANKA NFT Collection Details
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/c0541736-f489-4cc4-ac02-ec1f146ea234.png" 
                  alt="IVANKA NFT Collection Details" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Contact and Further Information */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Kontakt und weitere Informationen
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/0114280a-0953-422b-91ad-073aeeda35ae.png" 
                  alt="Kontakt und weitere Informationen" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Brand Voice */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8">Brand Voice & Messaging</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <h3 className="font-bangers text-white text-xl mb-4">Unser Motto</h3>
                  <p className="text-meme-gold font-comic text-lg mb-4">"Make Crypto Classy Again."</p>
                  
                  <h4 className="font-bangers text-white text-lg mb-2">Tonalität</h4>
                  <p className="text-white/80 font-comic mb-4">
                    Sophisticated, witty, confident, and approachable. We embrace elegance with a playful twist.
                  </p>
                  
                  <h4 className="font-bangers text-white text-lg mb-2">Kernbotschaften</h4>
                  <p className="text-white/80 font-comic">
                    Focus on community, innovation in the meme space, and the unique, classy aesthetic of IVNK. 
                    Highlight the fun and engaging aspects while maintaining a refined image.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <h3 className="font-bangers text-white text-xl mb-4">Zielgruppen-Kommunikation</h3>
                  <p className="text-white/80 font-comic">
                    While we are in the crypto space, aim for clarity. Avoid overly technical jargon when 
                    addressing a general audience. We value inclusivity and intelligent humor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Press Inquiries */}
          <section>
            <h2 className="text-4xl font-bangers text-meme-gold mb-8">Presseanfragen</h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8 text-center">
                <p className="text-white/80 font-comic text-lg mb-6">
                  Für alle Presse- und Medienanfragen, Interviews oder Asset-Anfragen kontaktieren Sie uns bitte über unsere offiziellen Kanäle. 
                  Wir freuen uns darauf, mit Ihnen in Kontakt zu treten!
                </p>
                
                <div className="flex justify-center gap-4">
                  <Button 
                    onClick={() => window.open('https://discord.gg/8b5YDW62D4', '_blank')}
                    className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Discord beitreten
                  </Button>
                  <Button 
                    onClick={() => window.location.href = 'mailto:support@buyivanka.shop'}
                    variant="outline"
                    className="border-meme-gold text-meme-gold hover:bg-meme-gold hover:text-black"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Kontakt aufnehmen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PressKit;

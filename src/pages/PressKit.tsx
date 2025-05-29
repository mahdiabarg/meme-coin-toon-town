
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
            <h1 className="text-5xl md:text-7xl font-bangers text-transparent bg-gradient-to-r from-meme-gold via-yellow-400 to-meme-gold bg-clip-text mb-6">
              PRESS KIT 📰
            </h1>
            <p className="text-xl text-white/80 font-comic max-w-3xl mx-auto mb-8">
              Welcome to the official IVNK press kit. Here you'll find brand assets, guidelines, and contact information.
            </p>
          </div>

          {/* Logo Assets Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Logo Assets
            </h2>
            <p className="text-white/80 font-comic text-center mb-8 max-w-3xl mx-auto">
              Download our official logos in various formats. Please adhere to our usage guidelines to ensure brand consistency.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-8 text-center">
                  <Download className="w-12 h-12 text-meme-gold mx-auto mb-4" />
                  <h3 className="font-bangers text-white text-xl mb-4">Main Logo Pack (.zip)</h3>
                  <p className="text-white/80 font-comic mb-6">
                    Includes SVG, PNG, and EPS formats for both web and print applications. Variants for light and dark backgrounds are provided.
                  </p>
                  <Button 
                    disabled
                    className="bg-gray-500 text-white"
                  >
                    Download Logos (Coming Soon)
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-8 text-center">
                  <FileText className="w-12 h-12 text-meme-gold mx-auto mb-4" />
                  <h3 className="font-bangers text-white text-xl mb-4">Logo Usage Guidelines (.pdf)</h3>
                  <p className="text-white/80 font-comic mb-6">
                    Essential do's and don'ts for using our brand assets correctly across all media.
                  </p>
                  <Button 
                    disabled
                    className="bg-gray-500 text-white"
                  >
                    View Guidelines (Coming Soon)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Color Palette Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              <Palette className="inline w-8 h-8 mr-2" />
              Color Palette
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#D4AF37] rounded-lg mb-4"></div>
                  <h3 className="font-bangers text-white text-lg mb-2">Primary Gold</h3>
                  <p className="text-meme-gold font-mono text-sm mb-2">#D4AF37</p>
                  <p className="text-white/80 font-comic text-sm">Logos, Accents, CTAs</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#1A1F2C] rounded-lg mb-4 border border-white/20"></div>
                  <h3 className="font-bangers text-white text-lg mb-2">IVANKA Black</h3>
                  <p className="text-meme-gold font-mono text-sm mb-2">#1A1F2C</p>
                  <p className="text-white/80 font-comic text-sm">Backgrounds, Dark Text</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#2c3342] rounded-lg mb-4"></div>
                  <h3 className="font-bangers text-white text-lg mb-2">IVANKA Dark Gray</h3>
                  <p className="text-meme-gold font-mono text-sm mb-2">#2c3342</p>
                  <p className="text-white/80 font-comic text-sm">Card Backgrounds, Secondary Elements</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#8E9196] rounded-lg mb-4"></div>
                  <h3 className="font-bangers text-white text-lg mb-2">IVANKA Gray</h3>
                  <p className="text-meme-gold font-mono text-sm mb-2">#8E9196</p>
                  <p className="text-white/80 font-comic text-sm">Secondary Text, Borders</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#9b87f5] rounded-lg mb-4"></div>
                  <h3 className="font-bangers text-white text-lg mb-2">Primary Purple</h3>
                  <p className="text-meme-gold font-mono text-sm mb-2">#9b87f5</p>
                  <p className="text-white/80 font-comic text-sm">Highlight Elements</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#60529A] rounded-lg mb-4"></div>
                  <h3 className="font-bangers text-white text-lg mb-2">Dark Purple</h3>
                  <p className="text-meme-gold font-mono text-sm mb-2">#60529A</p>
                  <p className="text-white/80 font-comic text-sm">Buttons, Accents</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#D6BCFA] rounded-lg mb-4"></div>
                  <h3 className="font-bangers text-white text-lg mb-2">Light Purple</h3>
                  <p className="text-meme-gold font-mono text-sm mb-2">#D6BCFA</p>
                  <p className="text-white/80 font-comic text-sm">Subtle Highlights</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Typography Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              <Type className="inline w-8 h-8 mr-2" />
              Typography
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-8">
                  <h3 className="font-bangers text-white text-2xl mb-4">Playfair Display</h3>
                  <p className="text-white/80 font-comic mb-4">
                    <strong>Usage:</strong> Headings (H1, H2, H3)<br />
                    <strong>Recommended Weights:</strong> Bold, Regular
                  </p>
                  <div className="text-meme-gold text-3xl font-bold mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                    Make Crypto Classy Again
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-8">
                  <h3 className="font-bangers text-white text-2xl mb-4">Montserrat</h3>
                  <p className="text-white/80 font-comic mb-4">
                    <strong>Usage:</strong> Body Text, UI Elements<br />
                    <strong>Recommended Weights:</strong> Regular, Medium, Bold
                  </p>
                  <div className="text-white text-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    The quick brown fox jumps over the lazy dog. 0123456789
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Brand Voice Section - Updated */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8">Brand Voice & Messaging</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <h3 className="font-bangers text-white text-xl mb-4">Our Motto</h3>
                  <p className="text-meme-gold font-comic text-lg mb-4">"Make Crypto Classy Again."</p>
                  
                  <h4 className="font-bangers text-white text-lg mb-2">Tone</h4>
                  <p className="text-white/80 font-comic mb-4">
                    Sophisticated, witty, confident, and approachable. We embrace elegance with a playful twist.
                  </p>
                  
                  <h4 className="font-bangers text-white text-lg mb-2">Key Messages</h4>
                  <p className="text-white/80 font-comic">
                    Focus on community, innovation in the meme space, and the unique, classy aesthetic of IVNK. 
                    Highlight the fun and engaging aspects while maintaining a refined image.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <h3 className="font-bangers text-white text-xl mb-4">Audience Communication</h3>
                  <p className="text-white/80 font-comic">
                    While we are in the crypto space, aim for clarity. Avoid overly technical jargon when 
                    addressing a general audience. We value inclusivity and intelligent humor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Press Inquiries Section - Updated */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8">Press Inquiries</h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8 text-center">
                <p className="text-white/80 font-comic text-lg mb-6">
                  For all press and media inquiries, interviews, or asset requests, please reach out through our official channels. 
                  We're excited to connect with you!
                </p>
                
                <div className="flex justify-center gap-4">
                  <Button 
                    onClick={() => window.open('https://discord.gg/8b5YDW62D4', '_blank')}
                    className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Discord
                  </Button>
                  <Button 
                    onClick={() => window.location.href = 'mailto:support@buyivanka.shop'}
                    variant="outline"
                    className="border-meme-gold text-meme-gold hover:bg-meme-gold hover:text-black"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Strategic Advantages */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Strategic Advantages of Migration
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/e6b90707-2dc0-4875-89da-cc991011773d.png" 
                  alt="Strategic Advantages of Migration" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* IVANKA Official */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              IVANKA OFFICIAL: Supply Halving and SOL-Chain Migration
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/38d0649d-f142-4201-bf58-42ae045f527f.png" 
                  alt="IVANKA OFFICIAL Supply Halving and Migration" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Strategic Mission */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Strategic Mission
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/4af0ffd8-54f5-41e6-b878-61f7b6166b4d.png" 
                  alt="Strategic Mission" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Strategic Goals */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Strategic Goals
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/889d988f-401c-4aa6-b017-3d5f6b020627.png" 
                  alt="Strategic Goals" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Supply Halving Technical Details */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Supply Halving: Technical Details
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/f28896dc-4b4e-4623-ae86-82016a5ba663.png" 
                  alt="Supply Halving Technical Details" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Migration to SOL-Chain */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              SOL-Chain Migration: Airdrop Mechanism
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/20e9f47e-ee7e-4a52-bd9e-bd8c12cd8356.png" 
                  alt="SOL-Chain Migration Airdrop Mechanism" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Continuity on SUI-Chain */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Continuity on SUI-Chain
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/15d51037-b5d2-4697-b6fb-97f0147ebc0d.png" 
                  alt="Continuity on SUI-Chain" 
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
              Current User Statistics
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/d2e0e3b0-74a2-45a6-a7dc-fda4697e21e0.png" 
                  alt="Current User Statistics" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Future Marketing Strategy */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Future Marketing Strategy
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/60d2b4b3-7101-48bf-b035-0c262c70243e.png" 
                  alt="Future Marketing Strategy" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Next Steps and Implementation */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Next Steps and Implementation
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/69fc9644-b89c-434f-b824-5d991012d5a5.png" 
                  alt="Next Steps and Implementation" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* Detailed Roadmap and Financing */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              Detailed Roadmap and Financing
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/1d2bc2d8-ed52-4b04-bc46-064f26eddc5e.png" 
                  alt="Detailed Roadmap and Financing" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </section>

          {/* IVANKA NFT Collection Financing - Part 1 */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 text-center">
              IVANKA NFT Collection Financing
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/1da2777e-c1d5-405b-9702-9dfba03e17b8.png" 
                  alt="IVANKA NFT Collection Financing" 
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
              Contact and Further Information
            </h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/0114280a-0953-422b-91ad-073aeeda35ae.png" 
                  alt="Contact and Further Information" 
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
                  <h3 className="font-bangers text-white text-xl mb-4">Our Motto</h3>
                  <p className="text-meme-gold font-comic text-lg mb-4">"Make Crypto Classy Again."</p>
                  
                  <h4 className="font-bangers text-white text-lg mb-2">Tone of Voice</h4>
                  <p className="text-white/80 font-comic mb-4">
                    Sophisticated, witty, confident, and approachable. We embrace elegance with a playful twist.
                  </p>
                  
                  <h4 className="font-bangers text-white text-lg mb-2">Core Messages</h4>
                  <p className="text-white/80 font-comic">
                    Focus on community, innovation in the meme space, and the unique, classy aesthetic of IVNK. 
                    Highlight the fun and engaging aspects while maintaining a refined image.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <h3 className="font-bangers text-white text-xl mb-4">Target Audience Communication</h3>
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
            <h2 className="text-4xl font-bangers text-meme-gold mb-8">Press Inquiries</h2>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8 text-center">
                <p className="text-white/80 font-comic text-lg mb-6">
                  For all press and media inquiries, interviews or asset requests, please contact us through our official channels. 
                  We look forward to connecting with you!
                </p>
                
                <div className="flex justify-center gap-4">
                  <Button 
                    onClick={() => window.open('https://discord.gg/8b5YDW62D4', '_blank')}
                    className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Discord
                  </Button>
                  <Button 
                    onClick={() => window.location.href = 'mailto:support@buyivanka.shop'}
                    variant="outline"
                    className="border-meme-gold text-meme-gold hover:bg-meme-gold hover:text-black"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
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


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
              Welcome to the official IVNK press kit. Here you'll find brand assets, guidelines, and contact information.
            </p>
          </div>

          {/* Logo Assets */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 flex items-center gap-3">
              <Download className="w-8 h-8" />
              Logo Assets
            </h2>
            <p className="text-white/80 font-comic mb-8">
              Download our official logos in various formats. Please adhere to our usage guidelines to ensure brand consistency.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white font-bangers text-xl">Main Logo Pack (.zip)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-comic mb-4">
                    Includes SVG, PNG, and EPS formats for both web and print applications. Variants for light and dark backgrounds are provided.
                  </p>
                  <Button disabled className="w-full bg-gray-600 text-white">
                    Download Logos (Coming Soon)
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white font-bangers text-xl flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Logo Usage Guidelines (.pdf)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-comic mb-4">
                    Essential do's and don'ts for using our brand assets correctly across all media.
                  </p>
                  <Button disabled className="w-full bg-gray-600 text-white">
                    View Guidelines (Coming Soon)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Color Palette */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 flex items-center gap-3">
              <Palette className="w-8 h-8" />
              Color Palette
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#D4AF37] rounded-lg mb-4"></div>
                  <h3 className="font-bangers text-white text-xl mb-2">Primary Gold</h3>
                  <p className="font-mono text-meme-gold text-lg mb-2">#D4AF37</p>
                  <p className="text-white/80 font-comic text-sm">Logos, Accents, CTAs</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#1A1F2C] rounded-lg mb-4 border border-white/20"></div>
                  <h3 className="font-bangers text-white text-xl mb-2">IVANKA Black</h3>
                  <p className="font-mono text-meme-gold text-lg mb-2">#1A1F2C</p>
                  <p className="text-white/80 font-comic text-sm">Backgrounds, Dark Text</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#2c3342] rounded-lg mb-4"></div>
                  <h3 className="font-bangers text-white text-xl mb-2">IVANKA Dark Gray</h3>
                  <p className="font-mono text-meme-gold text-lg mb-2">#2c3342</p>
                  <p className="text-white/80 font-comic text-sm">Card Backgrounds, Secondary Elements</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#8E9196] rounded-lg mb-4"></div>
                  <h3 className="font-bangers text-white text-xl mb-2">IVANKA Gray</h3>
                  <p className="font-mono text-meme-gold text-lg mb-2">#8E9196</p>
                  <p className="text-white/80 font-comic text-sm">Secondary Text, Borders</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#9b87f5] rounded-lg mb-4"></div>
                  <h3 className="font-bangers text-white text-xl mb-2">Primary Purple</h3>
                  <p className="font-mono text-meme-gold text-lg mb-2">#9b87f5</p>
                  <p className="text-white/80 font-comic text-sm">Highlight Elements</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <div className="w-full h-20 bg-[#60529A] rounded-lg mb-4"></div>
                  <h3 className="font-bangers text-white text-xl mb-2">Dark Purple</h3>
                  <p className="font-mono text-meme-gold text-lg mb-2">#60529A</p>
                  <p className="text-white/80 font-comic text-sm">Buttons, Accents</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Typography */}
          <section className="mb-16">
            <h2 className="text-4xl font-bangers text-meme-gold mb-8 flex items-center gap-3">
              <Type className="w-8 h-8" />
              Typography
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <h3 className="font-bangers text-white text-2xl mb-4">Bangers</h3>
                  <p className="text-white/80 font-comic mb-4">Usage: Headings (H1, H2, H3)</p>
                  <p className="text-white/80 font-comic mb-4">Recommended Weights: Bold, Regular</p>
                  <div className="text-3xl font-bangers text-meme-gold">
                    Make Crypto Classy Again
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardContent className="p-6">
                  <h3 className="font-bangers text-white text-2xl mb-4">Comic Neue</h3>
                  <p className="text-white/80 font-comic mb-4">Usage: Body Text, UI Elements</p>
                  <p className="text-white/80 font-comic mb-4">Recommended Weights: Regular, Medium, Bold</p>
                  <div className="text-lg font-comic text-white">
                    The quick brown fox jumps over the lazy dog. 0123456789
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Brand Voice */}
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

          {/* Press Inquiries */}
          <section>
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
                    Use Contact Form
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

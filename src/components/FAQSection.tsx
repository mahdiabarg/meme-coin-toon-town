
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-black via-gray-800 to-meme-gold">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
            FAQ ❓
          </h2>
          <p className="text-xl text-white/90 font-comic max-w-3xl mx-auto">
            Everything you need to know about the Ivanka Coin ecosystem
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <AccordionTrigger className="px-8 py-6 text-2xl font-bangers text-meme-gold hover:no-underline">
                  What is the Ivanka Coin?
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="px-8 pb-6">
                    <p className="text-white font-comic text-lg">
                      Ivanka Coin (IVNK) is a community-driven cryptocurrency designed to combine the best of crypto culture with real-world impact. It features a unique tokenomics model that contributes to educational initiatives while maintaining a deflationary mechanism for long-term value.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-2">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <AccordionTrigger className="px-8 py-6 text-2xl font-bangers text-meme-gold hover:no-underline">
                  How does the education contribution work?
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="px-8 pb-6">
                    <p className="text-white font-comic text-lg">
                      With every transaction (buy, sell, or transfer), 7.5% of the transaction tax is automatically allocated to publicly supported educational projects. This means that simply by trading IVNK, you're contributing to classrooms, scholarships, and learning initiatives worldwide.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-3">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <AccordionTrigger className="px-8 py-6 text-2xl font-bangers text-meme-gold hover:no-underline">
                  What makes IVNK a deflationary token?
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="px-8 pb-6">
                    <p className="text-white font-comic text-lg">
                      IVNK implements a 2.5% burn mechanism on every transaction. This portion of tokens is permanently removed from circulation, gradually reducing the total supply over time. This deflationary approach aims to increase scarcity and potentially enhance value for long-term holders.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-4">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <AccordionTrigger className="px-8 py-6 text-2xl font-bangers text-meme-gold hover:no-underline">
                  What is the total supply of IVNK?
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="px-8 pb-6">
                    <p className="text-white font-comic text-lg">
                      The maximum supply of IVNK is capped at 1,000,000,000 tokens. This supply is distributed across community sale & airdrops (40%), liquidity pool (20%), education reserve (15%), marketing & development (10%), and team & advisors (15%).
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-5">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <AccordionTrigger className="px-8 py-6 text-2xl font-bangers text-meme-gold hover:no-underline">
                  How is the team allocation handled?
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="px-8 pb-6">
                    <p className="text-white font-comic text-lg">
                      The team & advisor allocation (15% of total supply) is locked with a long-term vesting schedule to ensure alignment with the project's long-term success. This approach prevents immediate selling pressure and demonstrates the team's commitment to the project's future.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-6">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <AccordionTrigger className="px-8 py-6 text-2xl font-bangers text-meme-gold hover:no-underline">
                  Where can I trade IVNK?
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="px-8 pb-6">
                    <p className="text-white font-comic text-lg">
                      IVNK is available on decentralized exchanges like Turbos Finance. As the project grows, we plan to expand to more exchanges. Always make sure you're trading the authentic IVNK token by verifying the contract address through our official channels.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-meme-gold font-bangers text-2xl mb-6">Still have questions? We're here to help!</p>
            <Button 
              size="lg"
              className="bg-meme-gold hover:bg-meme-gold-dark text-black font-bold text-xl px-8 py-4 rounded-full"
              onClick={() => window.open('mailto:support@buyivanka.shop', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Animated Pepe Ivanka Sticker */}
        <div className="absolute bottom-10 left-10 animate-bounce-custom">
          <img 
            src="/lovable-uploads/2da69b5c-4c91-4efc-b312-1eaf35be42f6.png" 
            alt="Pepe Ivanka" 
            className="w-24 h-24 drop-shadow-2xl animate-wiggle"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

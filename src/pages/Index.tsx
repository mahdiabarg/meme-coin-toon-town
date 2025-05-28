
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import KaufSection from "@/components/KaufSection";
import Roadmap from "@/components/Roadmap";
import CommunitySection from "@/components/CommunitySection";
import HowToBuySection from "@/components/HowToBuySection";
import FAQSection from "@/components/FAQSection";
import MemeGallery from "@/components/MemeGallery";
import EarlySupporterSection from "@/components/EarlySupporterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <KaufSection />
      <Roadmap />
      <CommunitySection />
      <HowToBuySection />
      <FAQSection />
      <MemeGallery />
      <EarlySupporterSection />
      <Footer />
    </div>
  );
};

export default Index;


import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import CommunitySection from "@/components/CommunitySection";
import HowToBuySection from "@/components/HowToBuySection";
import FAQSection from "@/components/FAQSection";
import MemeGallery from "@/components/MemeGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <CommunitySection />
      <HowToBuySection />
      <FAQSection />
      <MemeGallery />
      <Footer />
    </div>
  );
};

export default Index;


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-meme-gold">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bangers text-white drop-shadow-2xl mb-6">
              IVANKA BLOG 📰
            </h1>
            <p className="text-2xl text-meme-gold font-comic">
              Latest news, updates, and insights from the IVANKA community
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🚧</div>
                <h2 className="text-3xl font-bangers text-meme-gold mb-4">
                  Coming Soon!
                </h2>
                <p className="text-white font-comic text-lg mb-6">
                  Our blog is currently under construction. We're working hard to bring you the most elegant and sophisticated crypto content.
                </p>
                <p className="text-white/80 font-comic">
                  Stay tuned for articles about IVANKA updates, crypto insights, community highlights, and much more!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

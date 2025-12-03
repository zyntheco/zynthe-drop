import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TextCarousel } from "@/components/TextCarousel";
import { ScrollToTop } from "@/components/ScrollToTop";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TextCarousel />
      <Header />
      
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl text-primary mb-16 uppercase tracking-tight">
          About Zynthe
        </h1>
        
        <div className="space-y-12 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 uppercase tracking-wider">Our Story</h2>
            <p className="leading-relaxed mb-4">
              Zynthe was born from a simple belief: the things we surround ourselves with should tell a story. 
              Not loud, not ostentatious, but quietly meaningful. Each piece in our collection is a conversation 
              starter, a memory maker, a piece of art that doesn't demand attention but commands respect.
            </p>
            <p className="leading-relaxed">
              We create collectibles that exist at the intersection of art, design, and culture. Limited editions 
              that become more valuable not just in price, but in meaning, as time passes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 uppercase tracking-wider">Our Philosophy</h2>
            <p className="leading-relaxed mb-4">
              In a world of mass production, we choose intention. Every piece is numbered, authenticated, and 
              crafted with meticulous attention to detail. We don't do restocks. Once an edition is sold out, 
              it's gone forever.
            </p>
            <p className="leading-relaxed">
              This isn't just about scarcity—it's about value. The value of owning something that few others 
              will ever have. The value of supporting artists and craftspeople who pour their souls into their work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 uppercase tracking-wider">The Founders</h2>
            <p className="leading-relaxed mb-4">
              Zynthe was founded by a collective of artists, designers, and collectors who grew tired of 
              seeing the same mass-produced items everywhere. We wanted to create something different. 
              Something that mattered.
            </p>
            <p className="leading-relaxed">
              Our team comes from diverse backgrounds—fine art, industrial design, gaming culture, automotive 
              engineering—but we're united by a shared passion for creating objects that transcend their function 
              and become part of your personal narrative.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 uppercase tracking-wider">Our Commitment</h2>
            <p className="leading-relaxed">
              Every Zynthe piece comes with a certificate of authenticity. We use premium materials, work with 
              master craftspeople, and ensure that each item meets our exacting standards. We're not just selling 
              products—we're creating future heirlooms.
            </p>
          </section>

          <section className="border-t border-border pt-12">
            <p className="text-center text-xl font-serif text-primary">
              Quiet collectibles, louder than words.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;

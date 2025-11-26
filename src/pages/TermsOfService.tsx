import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TextCarousel } from "@/components/TextCarousel";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <TextCarousel />
      <Header onCartOpen={() => {}} cartItemsCount={0} />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-white text-center mb-12 uppercase tracking-wider">
          Terms of Service
        </h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provisions 
              of this agreement. If you do not agree to these terms, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Product Authenticity</h2>
            <p className="leading-relaxed">
              All products sold on ZYNTHE are authentic, numbered, and authenticated. Each piece comes with a 
              certificate of authenticity. Any attempt to reproduce or counterfeit our products is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Limited Availability</h2>
            <p className="leading-relaxed">
              Our collectibles are produced in limited quantities. Once sold out, items will not be restocked. 
              We reserve the right to limit quantities purchased per customer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website, including designs, text, graphics, and logos, is the property of ZYNTHE 
              and is protected by copyright and trademark laws. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Limitation of Liability</h2>
            <p className="leading-relaxed">
              ZYNTHE shall not be liable for any indirect, incidental, special, or consequential damages arising 
              from your use of our products or website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h2>
            <p className="leading-relaxed">
              For questions about these Terms of Service, please contact us at info@zynthe.co
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

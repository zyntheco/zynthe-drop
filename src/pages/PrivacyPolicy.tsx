import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TextCarousel } from "@/components/TextCarousel";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <TextCarousel />
      <Header onCartOpen={() => {}} cartItemsCount={0} />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-white text-center mb-12 uppercase tracking-wider">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us for support. This may include your name, email address, 
              shipping address, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use the information we collect to process your orders, communicate with you about your 
              purchases, and improve our services. We may also use your information to send you marketing 
              communications if you have opted in to receive them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell or rent your personal information to third parties. We may share your information 
              with service providers who assist us in operating our business, such as payment processors and 
              shipping companies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Data Security</h2>
            <p className="leading-relaxed">
              We implement reasonable security measures to protect your personal information from unauthorized 
              access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at info@zynthe.co
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

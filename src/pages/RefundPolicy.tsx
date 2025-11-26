import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TextCarousel } from "@/components/TextCarousel";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <TextCarousel />
      <Header onCartOpen={() => {}} cartItemsCount={0} />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-white text-center mb-12 uppercase tracking-wider">
          Refund Policy
        </h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Returns</h2>
            <p className="leading-relaxed">
              Due to the exclusive and numbered nature of our collectibles, all sales are final. 
              We do not accept returns or exchanges except in cases of damaged or defective items.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Damaged or Defective Items</h2>
            <p className="leading-relaxed">
              If you receive a damaged or defective item, please contact us within 48 hours of delivery 
              with photos of the damage. We will review your case and provide a replacement or full refund 
              if the item is found to be defective.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Refund Process</h2>
            <p className="leading-relaxed">
              Approved refunds will be processed within 5-7 business days and will be credited to your 
              original payment method. Please allow additional time for your bank to process the refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h2>
            <p className="leading-relaxed">
              For refund inquiries, please contact us at info@zynthe.co with your order number and details.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;

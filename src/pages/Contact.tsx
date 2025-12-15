import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Instagram } from "lucide-react";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TextCarousel } from "@/components/TextCarousel";
import { useCart } from "@/context/CartContext";

const Contact = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { getItemsCount } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24-48 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <TextCarousel />
      <Header onCartOpen={() => setCartOpen(true)} cartItemsCount={getItemsCount()} />

      {/* Hero Section - Dark cinematic style matching site theme */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden pt-16">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        
        {/* Subtle cyan glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* Hero Text */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary text-center leading-tight tracking-tight">
            GET IN TOUCH
          </h1>
          <div className="w-[60px] h-[2px] bg-primary mt-6"></div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-primary mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-secondary border-border focus:border-primary min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-primary mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Email</h3>
                    <a
                      href="mailto:info@zynthe.co"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@zynthe.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Instagram</h3>
                    <a
                      href="https://www.instagram.com/zynthe.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @zynthe.co
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-card border border-border">
                <h3 className="font-bold text-xl mb-4 text-foreground">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24-48 hours. For urgent matters, 
                  please reach out via Instagram DM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
};

export default Contact;
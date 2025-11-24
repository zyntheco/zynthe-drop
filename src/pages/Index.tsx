import { CountdownBanner } from "@/components/CountdownBanner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { ProductGrid } from "@/components/ProductGrid";
import { Manifesto } from "@/components/Manifesto";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CountdownBanner />
      <Header />
      <Hero />
      <StorySection />
      <ProductGrid />
      <Manifesto />
      <EmailCapture />
      <Footer />
    </div>
  );
};

export default Index;

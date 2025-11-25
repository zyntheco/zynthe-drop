import { TextCarousel } from "@/components/TextCarousel";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { StorySection } from "@/components/StorySection";
import { ProductGrid } from "@/components/ProductGrid";
import { Manifesto } from "@/components/Manifesto";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TextCarousel />
      <Header />
      <HeroCarousel />
      <StorySection />
      <ProductGrid />
      <Manifesto />
      <EmailCapture />
      <Footer />
    </div>
  );
};

export default Index;

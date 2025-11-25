import { TextCarousel } from "@/components/TextCarousel";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryHeader } from "@/components/CategoryHeader";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Manifesto } from "@/components/Manifesto";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TextCarousel />
      <Header />
      <Hero />
      <CategoryHeader />
      <ProductCarousel />
      <Manifesto />
      <EmailCapture />
      <Footer />
    </div>
  );
};

export default Index;

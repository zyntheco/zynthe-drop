import { useState } from "react";
import { CountdownBanner } from "@/components/CountdownBanner";
import { Header } from "@/components/Header";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { StorySection } from "@/components/StorySection";
import { ProductGrid } from "@/components/ProductGrid";
import { Manifesto } from "@/components/Manifesto";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      {showLoading && <LoadingAnimation onComplete={() => setShowLoading(false)} />}
      <div className="min-h-screen bg-background">
        <CountdownBanner />
        <Header />
        <HeroCarousel />
        <StorySection />
        <ProductGrid />
        <Manifesto />
        <EmailCapture />
        <Footer />
      </div>
    </>
  );
};

export default Index;

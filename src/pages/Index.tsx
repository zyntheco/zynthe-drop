import { CountdownBanner } from "@/components/CountdownBanner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
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
      <StatsBar />
      <ProductGrid />
      <Manifesto />
      <EmailCapture />
      <Footer />
    </div>
  );
};

export default Index;

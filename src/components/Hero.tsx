import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c]">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Main headline */}
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#d4af37] leading-none tracking-tight mb-8 animate-fade-in">
            LIMITED<br />
            EDITION<br />
            COLLECTIBLES
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl tracking-wide">
            Numbered, authenticated, never restocked. What no one has.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link to="/shop">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-6 text-lg tracking-wider transition-all hover:scale-105"
              >
                SHOP ALL
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-8 py-6 text-lg tracking-wider transition-all hover:scale-105"
              >
                EXPLORE NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px'
        }}
      />
    </section>
  );
};

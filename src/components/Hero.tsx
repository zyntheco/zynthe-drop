import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "LIMITED\nEDITION\nCOLLECTIBLES",
    subtitle: "Numbered, authenticated, never restocked. What no one has.",
    cta1: { text: "SHOP ALL", link: "/shop" },
    cta2: { text: "EXPLORE NOW", link: "/about" },
    gradient: "from-[#0a1628] via-[#0f2847] to-[#1a3a5c]",
  },
  {
    id: 2,
    title: "AVANT-GARDE\nART\nPIECES",
    subtitle: "Transform your living space into a gallery reflecting your courage.",
    cta1: { text: "VIEW COLLECTION", link: "/shop" },
    cta2: { text: "LEARN MORE", link: "/about" },
    gradient: "from-[#1a0a28] via-[#2a1847] to-[#3a285c]",
  },
  {
    id: 3,
    title: "PAST\nCOLLECTIONS\nARCHIVE",
    subtitle: "Explore sold-out masterpieces and exclusive past editions.",
    cta1: { text: "BROWSE ARCHIVE", link: "/archive" },
    cta2: { text: "CONTACT US", link: "/contact" },
    gradient: "from-[#0a2818] via-[#0f4737] to-[#1a5c4c]",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : index < currentSlide
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          }`}
        >
          {/* Background with parallax effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
            style={{
              transform: index === currentSlide ? "scale(1.05)" : "scale(1)",
              transition: "transform 4s ease-out",
            }}
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-pulse"></div>
            </div>

            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-4xl">
              {/* Main headline */}
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#d4af37] leading-none tracking-tight mb-8 whitespace-pre-line animate-fade-in">
                {slide.title}
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl tracking-wide">
                {slide.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link to={slide.cta1.link}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-6 text-lg tracking-wider transition-all hover:scale-105"
                  >
                    {slide.cta1.text}
                  </Button>
                </Link>
                <Link to={slide.cta2.link}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-8 py-6 text-lg tracking-wider transition-all hover:scale-105"
                  >
                    {slide.cta2.text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative gradient at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

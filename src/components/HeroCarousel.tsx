import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    title: "quiet collectibles",
    subtitle: "which tell a story.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&h=800&fit=crop",
  },
  {
    id: 2,
    title: "handcrafted",
    subtitle: "with intention.",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=1200&h=800&fit=crop",
  },
  {
    id: 3,
    title: "limited editions",
    subtitle: "released once.",
    image: "https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?w=1200&h=800&fit=crop",
  },
];

export const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Auto-scroll every 5 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    // Update current slide
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section className="relative h-[60vh] overflow-hidden bg-background">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="h-full"
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative h-full w-full flex items-center justify-center">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                
                {/* Content */}
                <div className="relative z-10 text-center px-4">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4">
                    {slide.title}
                    <br />
                    {slide.subtitle}
                  </h1>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

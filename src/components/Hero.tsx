import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-neon.png";

const slides = [
  {
    id: 1,
    title: "quiet collectibles",
    subtitle: "which tell a story.",
    image: heroBg,
  },
];

export const Hero = () => {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-background pt-32 md:pt-40">
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
            <CarouselItem key={slide.id} className="h-full flex items-stretch">
              <div className="relative flex-1 flex items-center justify-center">
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center gap-10 py-20">
                  <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4">
                      {slide.title}
                      <br />
                      {slide.subtitle}
                    </h1>
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/shop">
                      <Button className="px-10 py-6 text-sm md:text-base font-semibold tracking-[0.25em] rounded-full">
                        SHOP CURRENT DROP
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-10 bg-primary" : "w-3 bg-muted-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

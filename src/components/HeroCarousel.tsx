import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    type: "statement",
    headline: "Transform Your Future",
    subheadline: "Connecting exceptional talent with extraordinary opportunities",
    cta: "Explore Opportunities",
    secondaryCta: "Learn Our Story",
  },
  {
    id: 2,
    type: "features",
    overline: "OUR APPROACH",
    headline: "Precision Meets Innovation",
    body: "We bridge the gap between elite defense talent and corporate excellence through comprehensive training and seamless integration.",
    features: [
      "⚡ 7,000+ Vetted Candidates",
      "⚡ Deploy in Days, Not Months",
      "⚡ 30-50% Cost Reduction",
    ],
  },
  {
    id: 3,
    type: "cta",
    preHeadline: "Ready to Transform Your Team?",
    headline: "Let's Connect",
    subtext: "Join 26+ leading organizations who trust us",
    primaryCta: "Start Your Journey",
    secondaryCta: "Schedule a Call",
    trustIndicators: ["Fast Deployment", "Pre-Vetted Talent", "Proven Results"],
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + (100 / 60); // 6 seconds = 60 frames at 100ms
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isHovering]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const slide = slides[currentSlide];

  return (
    <div
      className="relative h-screen w-full bg-black overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary/20 z-50">
        <div
          className="h-full bg-primary transition-all duration-100"
          style={{
            width: `${progress}%`,
            boxShadow: "0 0 10px hsl(var(--primary))",
          }}
        />
      </div>

      {/* Slide 1: Bold Statement */}
      {slide.type === "statement" && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Animated particle field */}
          <div className="absolute inset-0">
            {[...Array(60)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.4 + 0.2,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
            <h1
              className="text-7xl md:text-8xl font-extrabold mb-6 tracking-tight"
              style={{
                color: "white",
                textShadow: "0 0 40px hsl(var(--primary)), 0 0 80px hsl(var(--primary))",
                animation: "slide-up 1s ease-out 0.3s backwards",
              }}
            >
              {slide.headline}
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
              style={{
                animation: "slide-up 1s ease-out 0.6s backwards",
              }}
            >
              {slide.subheadline}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{
                animation: "scale-in 0.8s ease-out 0.9s backwards",
              }}
            >
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all"
                style={{
                  boxShadow: "0 0 30px hsl(var(--primary))",
                }}
              >
                {slide.cta} →
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                {slide.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Slide 2: Feature Showcase */}
      {slide.type === "features" && (
        <div className="absolute inset-0 flex items-center">
          {/* Geometric grid background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              animation: "grid-pulse 4s ease-in-out infinite",
            }}
          />

          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6 animate-fade-in">
              <p
                className="text-sm uppercase tracking-widest text-primary font-semibold"
                style={{
                  animation: "slide-left 0.8s ease-out 0.2s backwards",
                }}
              >
                {slide.overline}
              </p>
              <h2
                className="text-6xl md:text-7xl font-bold leading-tight"
                style={{
                  color: "white",
                  textShadow: "0 0 30px hsl(var(--primary))",
                  animation: "slide-left 1s ease-out 0.4s backwards",
                }}
              >
                {slide.headline}
              </h2>
              <p
                className="text-lg text-gray-300 leading-relaxed"
                style={{
                  animation: "slide-left 1s ease-out 0.8s backwards",
                }}
              >
                {slide.body}
              </p>
              <div className="space-y-4 pt-4">
                {slide.features?.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:scale-103 transition-all"
                    style={{
                      animation: `slide-left 0.8s ease-out ${1 + i * 0.15}s backwards`,
                    }}
                  >
                    <span className="text-xl">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div
              className="relative h-96 flex items-center justify-center"
              style={{
                animation: "slide-right 1.2s ease-out 0.6s backwards",
              }}
            >
              <div
                className="w-64 h-64 border-4 border-primary rounded-full"
                style={{
                  animation: "rotate-slow 20s linear infinite",
                  boxShadow: "0 0 60px hsl(var(--primary)), inset 0 0 60px hsl(var(--primary))",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-48 h-48 border-2 border-primary rounded-full"
                    style={{
                      animation: "rotate-slow-reverse 15s linear infinite",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide 3: Call to Action */}
      {slide.type === "cta" && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Electric energy background */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at center, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
              }}
            />
            {[...Array(30)].map((_, i) => (
              <div
                key={`energy-${i}`}
                className="absolute w-0.5 h-0.5 bg-primary rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float-to-center ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl space-y-8">
            <p
              className="text-lg md:text-xl text-primary uppercase tracking-widest font-semibold"
              style={{
                textShadow: "0 0 20px hsl(var(--primary))",
                animation: "glow-expand 1s ease-out 0.2s backwards",
              }}
            >
              {slide.preHeadline}
            </p>
            <h1
              className="text-8xl md:text-9xl font-black"
              style={{
                color: "white",
                textShadow: "0 0 60px hsl(var(--primary)), 0 0 120px hsl(var(--primary))",
                animation: "scale-elastic 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s backwards",
              }}
            >
              {slide.headline}
            </h1>
            <p
              className="text-lg text-gray-400 italic"
              style={{
                animation: "fade-in 0.8s ease-out 0.9s backwards",
              }}
            >
              {slide.subtext}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              style={{
                animation: "slide-up-bounce 1s ease-out 1.2s backwards",
              }}
            >
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary hover:scale-108 transition-all text-lg px-8"
                style={{
                  boxShadow: "0 0 40px hsl(var(--primary))",
                }}
              >
                {slide.primaryCta} →
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black transition-all text-lg px-8"
              >
                {slide.secondaryCta}
              </Button>
            </div>
            <div
              className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-gray-400"
              style={{
                animation: "fade-in 0.8s ease-out 1.6s backwards",
              }}
            >
              {slide.trustIndicators?.map((indicator, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {indicator}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-5 z-40">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="relative w-3 h-3 rounded-full border-2 border-primary transition-all hover:scale-125"
            style={{
              backgroundColor: i === currentSlide ? "hsl(var(--primary))" : "transparent",
              boxShadow: i === currentSlide ? "0 0 20px hsl(var(--primary))" : "none",
            }}
          >
            {i === currentSlide && (
              <div
                className="absolute inset-0 rounded-full bg-primary animate-pulse"
                style={{
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Arrow controls */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 opacity-0 hover:opacity-100 transition-opacity text-primary hover:bg-primary/10"
        style={{
          animation: isHovering ? "fade-in 0.3s ease-out forwards" : "none",
        }}
      >
        <ChevronLeft className="w-10 h-10" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 opacity-0 hover:opacity-100 transition-opacity text-primary hover:bg-primary/10"
        style={{
          animation: isHovering ? "fade-in 0.3s ease-out forwards" : "none",
        }}
      >
        <ChevronRight className="w-10 h-10" />
      </Button>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-elastic {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-up-bounce {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow-expand {
          from {
            opacity: 0;
            text-shadow: 0 0 0 hsl(var(--primary));
          }
          to {
            opacity: 1;
            text-shadow: 0 0 20px hsl(var(--primary));
          }
        }

        @keyframes grid-pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotate-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes float-to-center {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(calc(50vw - 50%), calc(50vh - 50%));
          }
        }
      `}</style>
    </div>
  );
};

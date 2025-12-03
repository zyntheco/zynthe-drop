import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Trigger animations after component mounts
    const loadTimer = setTimeout(() => setIsLoaded(true), 100);
    const smokeTimer = setTimeout(() => setShowSmoke(true), 800);
    
    return () => {
      clearTimeout(loadTimer);
      clearTimeout(smokeTimer);
    };
  }, []);

  // Smoke pulse effect synced with "engine revs"
  useEffect(() => {
    if (!showSmoke) return;
    
    const pulseInterval = setInterval(() => {
      setShowSmoke(false);
      setTimeout(() => setShowSmoke(true), 200);
    }, 3000);

    return () => clearInterval(pulseInterval);
  }, [showSmoke]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.7) contrast(1.1)" }}
        >
          <source src="/videos/hero-bg.mov" type="video/mp4" />
        </video>
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        {/* Blue/White neon edge glow */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>

      {/* Smoke/Fog Effect Overlay */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          showSmoke ? "opacity-40" : "opacity-0"
        }`}
      >
        <div 
          className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-white/10 via-white/5 to-transparent"
          style={{
            animation: "smokeRise 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* Heat distortion effect */}
      <div 
        className="absolute bottom-0 left-1/4 right-1/4 h-48 opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, hsl(var(--primary) / 0.3), transparent)",
          filter: "blur(20px)",
          animation: "heatWave 2s ease-in-out infinite",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
        {/* 3D Z Logo - Large and Dominant */}
        <div 
          className={`mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div 
            className="relative"
            style={{
              animation: isLoaded ? "logoSpin 20s linear infinite" : "none",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Z Logo with chrome effect */}
            <span 
              className="text-[180px] md:text-[250px] lg:text-[300px] font-black leading-none select-none"
              style={{
                background: "linear-gradient(135deg, #e8e8e8 0%, #ffffff 25%, #a8a8a8 50%, #ffffff 75%, #d8d8d8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px hsl(var(--primary) / 0.5)) drop-shadow(0 20px 60px rgba(0,0,0,0.5))",
                textShadow: "0 0 80px hsl(var(--primary) / 0.3)",
              }}
            >
              Z
            </span>
            
            {/* Glow from below (engine light) */}
            <div 
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full"
              style={{
                background: "radial-gradient(ellipse, hsl(var(--primary) / 0.6), transparent)",
                filter: "blur(20px)",
                animation: "engineGlow 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Headline */}
        <h1 
          className={`font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 tracking-tight transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          PERFORMANCE <span className="text-primary">BRED</span>
          <br />
          <span className="text-white/80">VISCERAL LUXURY</span>
        </h1>

        {/* Subheadline */}
        <p 
          className={`text-lg md:text-xl text-white/70 mb-10 max-w-xl tracking-wide transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Limited edition collectibles. Numbered, authenticated, never restocked.
        </p>

        {/* CTAs */}
        <div 
          className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link to="/shop">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 text-lg tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
            >
              SHOP NOW
            </Button>
          </Link>
          <Link to="/about">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white font-bold px-10 py-6 text-lg tracking-wider transition-all hover:scale-105 backdrop-blur-sm"
            >
              EXPLORE
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom gradient fade to content */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />

      {/* Custom Animations */}
      <style>{`
        @keyframes logoSpin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        
        @keyframes engineGlow {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.2); }
        }
        
        @keyframes smokeRise {
          0% { transform: translateY(20px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.5; }
          100% { transform: translateY(20px); opacity: 0.3; }
        }
        
        @keyframes heatWave {
          0%, 100% { transform: scaleY(1) translateY(0); }
          50% { transform: scaleY(1.1) translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

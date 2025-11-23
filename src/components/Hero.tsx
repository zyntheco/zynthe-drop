import { useEffect, useState } from "react";

export const Hero = () => {
  const [bottleAnimated, setBottleAnimated] = useState(false);
  const [sectionExit, setSectionExit] = useState(false);

  useEffect(() => {
    // Bottle enters
    setTimeout(() => setBottleAnimated(true), 300);
    
    // Section transitions out
    setTimeout(() => setSectionExit(true), 3500);
  }, []);

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        sectionExit ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30"></div>
      
      {/* Oversized headline behind bottle */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1500 ${
          bottleAnimated ? 'opacity-20' : 'opacity-0'
        }`}
      >
        <h1 className="text-[20vw] font-bold tracking-tighter text-foreground/10 select-none">
          ZYNTHE
        </h1>
      </div>

      {/* Product bottle placeholder */}
      <div 
        className={`relative z-10 transition-all duration-[2000ms] ease-out ${
          bottleAnimated 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-[150%] opacity-0'
        }`}
        style={{
          filter: 'drop-shadow(0 20px 60px rgba(255, 107, 53, 0.3))',
        }}
      >
        <div className="relative w-64 h-96 bg-gradient-to-br from-muted to-card rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground text-sm font-mono">PRODUCT PLACEHOLDER</p>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
            style={{
              top: `${30 + i * 20}%`,
              left: `${20 + i * 30}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

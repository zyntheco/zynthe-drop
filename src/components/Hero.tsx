import heroBg from "@/assets/hero-bg.png";

export const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Background image with blending */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(-30deg) scale(0.7)',
        }}
      >
        <style>
          {`
            @media (max-width: 768px) {
              div[style*="rotate(-30deg)"] {
                transform: rotate(-30deg) scale(1.3) !important;
              }
            }
          `}
        </style>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Lightning Animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.6 }}>
        <defs>
          <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00D9FF', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#00D9FF', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        <path
          className="animate-[flash_4s_ease-in-out_infinite]"
          d="M 20% 10% L 22% 35% L 18% 35% L 25% 70%"
          stroke="url(#lightningGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          className="animate-[flash_5s_ease-in-out_infinite_1s]"
          d="M 75% 15% L 77% 40% L 73% 40% L 78% 65%"
          stroke="url(#lightningGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          className="animate-[flash_6s_ease-in-out_infinite_2s]"
          d="M 50% 5% L 52% 30% L 48% 30% L 53% 55%"
          stroke="url(#lightningGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Hero Text Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white text-center leading-tight tracking-tight">
          quiet collectibles,<br />louder than words.
        </h1>
        <div className="w-[60px] h-[2px] bg-primary mt-6"></div>
      </div>
    </section>
  );
};

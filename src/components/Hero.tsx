import heroBg from "@/assets/hero-bg.png";

export const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Background image with blending */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

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

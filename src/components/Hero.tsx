export const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-800/70 to-purple-800/80"></div>

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          backgroundSize: '30px 30px'
        }}
      ></div>

      {/* Hero Text Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white text-center leading-tight tracking-tight">
          quiet collectibles<br />which tell a story.
        </h1>
        <div className="w-[60px] h-[2px] bg-primary mt-6"></div>
      </div>
    </section>
  );
};

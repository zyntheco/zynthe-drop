export const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1563089145-599997674d42?w=1920&h=1080&fit=crop"
          alt="Featured collectible"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Text Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white text-center leading-tight tracking-tight">
          quiet collectibles<br />which tell a story.
        </h1>
        {/* Optional cyan underline */}
        <div className="w-[60px] h-[2px] bg-primary mt-6"></div>
      </div>
    </section>
  );
};

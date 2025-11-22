export const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6">
          WHAT NO ONE HAS
        </h2>
        <p className="text-xl md:text-2xl tracking-widest text-muted-foreground font-mono">
          LIMITED. NUMBERED. EXCLUSIVE.
        </p>
      </div>
    </section>
  );
};

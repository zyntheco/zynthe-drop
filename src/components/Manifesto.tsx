export const Manifesto = () => {
  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wide">NO RESTOCKS</h3>
            <p className="text-muted-foreground leading-relaxed">
              We don't follow trends. We don't restock. We create collectibles that exist once and never again. 
              Each piece is manufactured in-house with meticulous attention to detail.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wide">NUMBERED & AUTHENTICATED</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every ZYNTHE piece is individually numbered and authenticated. When a drop sells out, 
              that's it. No second chances. No mass production. Just exclusive ownership of something truly rare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

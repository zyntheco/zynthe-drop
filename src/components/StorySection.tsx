import { useEffect, useState } from "react";

export const StorySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Section slides in after hero exits
    setTimeout(() => setIsVisible(true), 2200);
  }, []);

  return (
    <section 
      className={`h-[35vh] flex items-center justify-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
    >
      <div className="max-w-4xl text-center space-y-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          quiet collectibles<br />which tell a story.
        </h2>
        
        <div className="w-24 h-1 bg-primary mx-auto"></div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Each piece exists in its own universe. Crafted with intention,
          numbered with purpose, and released into the world only once.
        </p>
      </div>
    </section>
  );
};

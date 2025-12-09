import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
    >
      <div
        className="relative h-14 w-14 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-border/80 shadow-lg"
        aria-hidden="true"
      >
        <div
          className="absolute inset-[2px] rounded-full"
          style={{
            background: `conic-gradient(hsl(var(--primary)) ${scrollProgress}%, transparent ${scrollProgress}%)`,
          }}
        />
        <Button
          onClick={scrollToTop}
          size="icon"
          className="relative h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

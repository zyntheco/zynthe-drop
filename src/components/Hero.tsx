import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-black pt-32"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `perspective(1000px) rotateX(60deg) translateZ(-200px) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Animated scan lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ top: '-100%' }}
              animate={{
                top: '100%',
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.7,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(0, 255, 255, ${Math.random() * 0.8 + 0.2}) 0%, transparent 70%)`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(0, 255, 255, 0.5)`,
            }}
            animate={{
              y: [0, -1000],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%)',
          x: y1,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)',
          x: y2,
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center"
        style={{ opacity }}
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 border border-primary/30 rounded-full backdrop-blur-sm bg-primary/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-mono">
              Limited Edition Drops
            </span>
          </div>
        </motion.div>

        {/* Main Title with Holographic Effect */}
        <div className="max-w-5xl mx-auto mb-12 relative">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1.1] relative"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-50 animate-pulse" />
              <span
                className="relative bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent"
                style={{
                  textShadow: `
                    0 0 30px rgba(0, 255, 255, 0.5),
                    0 0 60px rgba(0, 255, 255, 0.3),
                    0 0 90px rgba(0, 255, 255, 0.2)
                  `,
                }}
              >
                QUIET COLLECTIBLES
              </span>
            </span>
            <br />
            <motion.span
              className="relative inline-block mt-4"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0, 255, 255, 0.5)",
                  "0 0 40px rgba(0, 255, 255, 0.8)",
                  "0 0 20px rgba(0, 255, 255, 0.5)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white/90">WHICH TELL A</span>{" "}
              <span className="text-primary">STORY</span>
            </motion.span>
          </motion.h1>

          {/* Decorative lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm md:text-base text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide"
        >
          Limited editions. Numbered pieces. Never restocked. Each drop exists once, authenticated and exclusive.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/shop">
            <Button
              size="lg"
              className="group relative px-12 py-7 text-base font-bold tracking-[0.3em] rounded-none overflow-hidden border-2 border-primary bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                EXPLORE DROPS
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Button>
          </Link>

          <Link to="/archive">
            <Button
              size="lg"
              variant="outline"
              className="group relative px-12 py-7 text-base font-bold tracking-[0.3em] rounded-none border-2 border-primary/50 bg-transparent hover:bg-primary/10 text-white hover:border-primary transition-all duration-300"
            >
              <span className="relative">VIEW ARCHIVE</span>
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 grid grid-cols-3 gap-8 md:gap-16"
        >
          {[
            { label: "PIECES CREATED", value: "1,247" },
            { label: "LIVE DROPS", value: "08" },
            { label: "COLLECTORS", value: "4.8K" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-3xl md:text-4xl font-mono font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-[0.65rem] md:text-xs tracking-[0.25em] text-white/40 uppercase">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-primary/60"
          >
            <span className="text-xs tracking-[0.3em] uppercase font-mono">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient opacity-60"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)'
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
};

import { useEffect, useState } from "react";
import logo from "@/assets/zynthe-logo-cyan.jpeg";

export const LoadingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timings = [
      { delay: 0, phase: 0 },      // Initial black
      { delay: 200, phase: 1 },    // Lightning strikes
      { delay: 1000, phase: 2 },   // Logo materialization
      { delay: 2000, phase: 3 },   // Power surge
      { delay: 2500, phase: 4 },   // Navigation transition
      { delay: 3000, phase: 5 },   // Complete
    ];

    const timeouts = timings.map(({ delay, phase: p }) =>
      setTimeout(() => setPhase(p), delay)
    );

    setTimeout(onComplete, 3000);

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  if (phase === 5) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Static texture */}
      <div 
        className={`absolute inset-0 opacity-5 transition-opacity duration-300 ${
          phase >= 1 ? 'opacity-10' : 'opacity-5'
        }`}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Lightning particles - Phase 1 */}
      {phase >= 1 && (
        <>
          {[...Array(12)].map((_, i) => (
            <div
              key={`lightning-${i}`}
              className="absolute w-1 h-32 bg-gradient-to-b from-cyan-400 via-primary to-transparent animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: Math.random() * 0.6 + 0.2,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.3s',
              }}
            />
          ))}
        </>
      )}

      {/* Converging lightning bolts - Phase 1 */}
      {phase >= 1 && (
        <>
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const distance = 600;
            return (
              <div
                key={`bolt-${i}`}
                className="absolute w-0.5 h-96 bg-gradient-to-b from-transparent via-primary to-transparent"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'center',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-${distance}px)`,
                  opacity: 0.8,
                  animation: `lightning-strike 0.8s ease-out ${i * 0.05}s`,
                  boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary))',
                }}
              />
            );
          })}
        </>
      )}

      {/* Logo container */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Logo with materialization effect - Phase 2 */}
        <div
          className={`relative transition-all duration-1000 ${
            phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
          } ${
            phase >= 3 ? 'animate-pulse-surge' : ''
          } ${
            phase >= 4 ? 'scale-50' : ''
          }`}
          style={{
            filter: phase >= 2 
              ? `drop-shadow(0 0 30px hsl(var(--primary))) drop-shadow(0 0 60px hsl(var(--primary))) ${phase >= 3 ? 'drop-shadow(0 0 90px hsl(var(--primary)))' : ''}`
              : 'none',
            transition: phase >= 4 ? 'all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)' : 'all 1000ms ease-out',
          }}
        >
          <img 
            src={logo} 
            alt="ZYNTHE" 
            className="w-64 h-64 object-contain"
            style={{
              animation: phase >= 2 ? 'logo-materialize 1s ease-out' : 'none',
            }}
          />
          
          {/* Electric arcs between horns - Phase 2 & 3 */}
          {phase >= 2 && (
            <>
              <div 
                className="absolute top-8 left-1/2 w-0.5 h-12 bg-primary animate-pulse"
                style={{
                  boxShadow: '0 0 10px hsl(var(--primary))',
                  transform: 'translateX(-50%) rotate(15deg)',
                  animationDuration: '0.3s',
                }}
              />
              <div 
                className="absolute bottom-8 left-1/2 w-0.5 h-12 bg-primary animate-pulse"
                style={{
                  boxShadow: '0 0 10px hsl(var(--primary))',
                  transform: 'translateX(-50%) rotate(-15deg)',
                  animationDuration: '0.4s',
                }}
              />
            </>
          )}
        </div>

        {/* Particle burst - Phase 2 */}
        {phase >= 2 && (
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(40)].map((_, i) => {
              const angle = (i * 9) * (Math.PI / 180);
              const distance = 100 + Math.random() * 100;
              return (
                <div
                  key={`burst-${i}`}
                  className="absolute w-1 h-1 bg-primary rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%)`,
                    animation: `particle-burst 1s ease-out ${i * 0.01}s forwards`,
                    '--angle': `${angle}rad`,
                    '--distance': `${distance}px`,
                    boxShadow: '0 0 4px hsl(var(--primary))',
                  } as React.CSSProperties}
                />
              );
            })}
          </div>
        )}

        {/* Electromagnetic pulse rings - Phase 2 & 3 */}
        {phase >= 2 && (
          <>
            {[...Array(3)].map((_, i) => (
              <div
                key={`ring-${i}`}
                className="absolute rounded-full border border-primary"
                style={{
                  width: '64px',
                  height: '64px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: `pulse-ring 2s ease-out infinite ${i * 0.3}s`,
                  opacity: 0,
                }}
              />
            ))}
          </>
        )}

        {/* Screen flash - Phase 2 */}
        {phase === 2 && (
          <div 
            className="absolute inset-0 bg-white animate-flash"
            style={{
              animation: 'flash 0.1s ease-out 0.5s',
            }}
          />
        )}

        {/* Power surge lightning - Phase 3 */}
        {phase === 3 && (
          <>
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60) * (Math.PI / 180);
              return (
                <div
                  key={`surge-${i}`}
                  className="absolute w-1 h-64 bg-gradient-to-b from-transparent via-primary to-transparent"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                    animation: `surge-bolt 0.5s ease-out ${i * 0.05}s`,
                    boxShadow: '0 0 20px hsl(var(--primary))',
                  }}
                />
              );
            })}
          </>
        )}

        {/* Comet trail particles - Phase 4 */}
        {phase === 4 && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={`trail-${i}`}
                className="absolute w-0.5 h-0.5 bg-primary rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  animation: `comet-trail 500ms ease-out ${i * 0.02}s forwards`,
                  boxShadow: '0 0 6px hsl(var(--primary))',
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes lightning-strike {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translateY(-800px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translateY(-200px);
          }
        }

        @keyframes logo-materialize {
          0% {
            opacity: 0;
            filter: blur(20px);
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }

        @keyframes particle-burst {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(0deg) translateX(0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(0deg) translateX(var(--distance));
          }
        }

        @keyframes pulse-ring {
          0% {
            width: 64px;
            height: 64px;
            opacity: 0.8;
          }
          100% {
            width: 400px;
            height: 400px;
            opacity: 0;
          }
        }

        @keyframes flash {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-surge {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes surge-bolt {
          0% {
            opacity: 0;
            height: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            height: 256px;
          }
        }

        @keyframes comet-trail {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -200%);
          }
        }

        .animate-pulse-surge {
          animation: pulse-surge 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

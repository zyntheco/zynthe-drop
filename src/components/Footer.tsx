import { Link } from "react-router-dom";
import logo from "@/assets/zynthe-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12">
          {/* Left: Brand Description */}
          <div className="pr-8">
            <p className="text-primary-foreground text-sm md:text-base leading-relaxed uppercase tracking-wide">
              ZYNTHE CRAFTS BOUNDARY-PUSHING COLLECTIBLES THAT BLUR THE LINE BETWEEN ART AND DESIGN. EACH PIECE IS A STATEMENT OF REBELLION AGAINST THE ORDINARY, TRANSFORMING SPACES INTO SANCTUARIES OF BOLD EXPRESSION. WE CREATE FOR THOSE WHO REFUSE TO BLEND IN.
            </p>
          </div>

          {/* Right: Logo and Social Links */}
          <div className="flex flex-col items-end justify-between">
            <div className="flex gap-8 mb-8">
              <a 
                href="mailto:info@zynthe.co" 
                className="text-primary-foreground text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
              >
                EMAIL
              </a>
              <a 
                href="https://www.instagram.com/zynthe.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
              >
                INSTAGRAM
              </a>
            </div>
            <img src={logo} alt="ZYNTHE" className="h-32 w-auto" loading="lazy" />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8 mb-8">
          <p className="text-primary-foreground text-xs leading-relaxed uppercase tracking-wide text-center">
            ZYNTHE CRAFTS BOUNDARY-PUSHING COLLECTIBLES THAT BLUR THE LINE BETWEEN ART AND DESIGN. EACH PIECE IS A STATEMENT OF REBELLION AGAINST THE ORDINARY.
          </p>
          
          <div className="flex justify-center">
            <img src={logo} alt="ZYNTHE" className="h-24 w-auto" loading="lazy" />
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <a 
              href="mailto:info@zynthe.co" 
              className="text-primary-foreground text-xs uppercase tracking-wider hover:opacity-70 transition-opacity"
            >
              EMAIL
            </a>
            <a 
              href="https://www.instagram.com/zynthe.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground text-xs uppercase tracking-wider hover:opacity-70 transition-opacity"
            >
              INSTAGRAM
            </a>
          </div>
        </div>

        {/* Bottom Links and Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
              <Link
                to="/refund-policy"
                className="text-primary-foreground text-xs uppercase tracking-wider hover:opacity-70 transition-opacity"
              >
                REFUND POLICY
              </Link>
              <Link
                to="/terms-of-service"
                className="text-primary-foreground text-xs uppercase tracking-wider hover:opacity-70 transition-opacity"
              >
                TERMS OF SERVICE
              </Link>
              <Link
                to="/privacy-policy"
                className="text-primary-foreground text-xs uppercase tracking-wider hover:opacity-70 transition-opacity"
              >
                PRIVACY POLICY
              </Link>
            </div>
            
            <p className="text-primary-foreground/60 text-xs uppercase tracking-wider">
              © 2025 ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

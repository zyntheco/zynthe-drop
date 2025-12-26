import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import logo from "@/assets/zynthe-logo.png";

type HeaderProps = {
  onCartOpen?: () => void;
  cartItemsCount?: number;
};

export const Header = ({ onCartOpen, cartItemsCount = 0 }: HeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-8 left-0 right-0 z-50 bg-gradient-to-b from-background/80 via-background/60 to-background/0 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:text-primary text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link to="/shop" className="text-lg tracking-wider hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>SHOP ALL</Link>
                  <Link to="/archive" className="text-lg tracking-wider hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>ARCHIVE</Link>
                  <Link to="/about" className="text-lg tracking-wider hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>
                  <Link to="/contact" className="text-lg tracking-wider hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>CONTACT US</Link>
                </nav>
              </SheetContent>
            </Sheet>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/shop" className="text-sm tracking-wider hover:text-primary transition-colors font-medium text-white/90 hover:text-white">SHOP ALL</Link>
              <Link to="/archive" className="text-sm tracking-wider hover:text-primary transition-colors font-medium text-white/90 hover:text-white">ARCHIVE</Link>
              <Link to="/about" className="text-sm tracking-wider hover:text-primary transition-colors font-medium text-white/90 hover:text-white">ABOUT</Link>
              <Link to="/contact" className="text-sm tracking-wider hover:text-primary transition-colors font-medium text-white/90 hover:text-white">CONTACT US</Link>
            </nav>
          </div>

          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="ZYNTHE" className="h-24 w-auto drop-shadow-lg" loading="eager" fetchPriority="high" />
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:text-primary text-white" onClick={() => setSearchOpen(!searchOpen)} title="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary relative text-white" onClick={onCartOpen} title="Shopping Bag">
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {searchOpen && (
          <div className="mt-4 animate-fade-in relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background/80 backdrop-blur-md border border-border px-4 py-3 pr-10 rounded-none focus:outline-none focus:border-primary transition-colors text-foreground"
                autoFocus
              />
              {searchQuery && (
                <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8" onClick={() => setSearchQuery("")}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="mx-4 h-px bg-white/15" />
    </header>
  );
};

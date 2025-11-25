import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import logo from "@/assets/zynthe-logo.png";

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="ZYNTHE" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-sm tracking-wider hover:text-primary transition-colors font-medium">
              NEW
            </Link>
            <Link to="/" className="text-sm tracking-wider hover:text-primary transition-colors font-medium">
              SHOP ALL
            </Link>
            <Link to="/" className="text-sm tracking-wider hover:text-primary transition-colors font-medium">
              ABOUT
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => setSearchOpen(!searchOpen)}
              title="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              title="Account"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              title="Shopping Bag"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:text-primary">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link 
                    to="/" 
                    className="text-lg tracking-wider hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    NEW
                  </Link>
                  <Link 
                    to="/" 
                    className="text-lg tracking-wider hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SHOP ALL
                  </Link>
                  <Link 
                    to="/" 
                    className="text-lg tracking-wider hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ABOUT
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="mt-4 animate-fade-in">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-secondary/50 border border-border px-4 py-3 rounded-none focus:outline-none focus:border-primary transition-colors"
              autoFocus
            />
          </div>
        )}
      </div>
    </header>
  );
};

import { useState } from "react";
import { Search, ShoppingBag, Menu } from "lucide-react";
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

  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Mobile Menu */}
          <div className="flex items-center gap-2">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:text-primary">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link
                    to="/shop"
                    className="text-lg tracking-wider hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SHOP ALL
                  </Link>
                  <Link
                    to="/about"
                    className="text-lg tracking-wider hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ABOUT
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Center: Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="ZYNTHE" className="h-16 w-auto" />
          </Link>

          {/* Right: Action Buttons */}
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
              className="hover:text-primary relative"
              onClick={onCartOpen}
              title="Shopping Bag"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Button>
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

import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import logo from "@/assets/zynthe-logo.png";
import { products } from "@/components/ProductCarousel";
import type { Product } from "@/components/ProductCard";

type HeaderProps = {
  onCartOpen?: () => void;
  cartItemsCount?: number;
};

export const Header = ({ onCartOpen, cartItemsCount = 0 }: HeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProducts = searchQuery.trim() 
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

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
            <img src={logo} alt="ZYNTHE" className="h-24 w-auto" loading="eager" fetchPriority="high" />
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
          <div className="mt-4 animate-fade-in relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary/50 border border-border px-4 py-3 pr-10 rounded-none focus:outline-none focus:border-primary transition-colors"
                autoFocus
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            {/* Search Results */}
            {filteredProducts.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border max-h-96 overflow-y-auto z-50 shadow-lg">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors border-b border-border last:border-b-0"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-sm uppercase">{product.name}</h3>
                      <p className="text-xs text-muted-foreground">{product.category}</p>
                    </div>
                    <p className="font-bold text-primary">₹{product.price.toLocaleString()}</p>
                  </Link>
                ))}
              </div>
            )}
            
            {searchQuery.trim() && filteredProducts.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border p-8 text-center z-50 shadow-lg">
                <p className="text-muted-foreground">No products found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

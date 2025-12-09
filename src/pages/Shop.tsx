import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TextCarousel } from "@/components/TextCarousel";
import { ProductCard, type Product } from "@/components/ProductCard";
import { Cart, type CartItem } from "@/components/Cart";
import { ScrollToTop } from "@/components/ScrollToTop";
import { products } from "@/components/ProductCarousel";
import { ProductModal } from "@/components/ProductModal";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Shop = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Set<number>>(new Set());
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);
  
  const categories = Array.from(new Set(products.map(p => p.category)));
  const statuses = Array.from(new Set(products.map(p => p.status)));
  const maxPrice = Math.max(...products.map(p => p.price));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleProducts((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const productElements = document.querySelectorAll("[data-product-card]");
    productElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(product.status);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && statusMatch && priceMatch;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleStatus = (status: string) => {
    setSelectedStatuses(prev => 
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedStatuses([]);
    setPriceRange([0, maxPrice]);
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedStatuses.length > 0 || 
    priceRange[0] !== 0 || priceRange[1] !== maxPrice;

  return (
    <div className="min-h-screen bg-background pt-16">
      <TextCarousel />
      <Header onCartOpen={() => setCartOpen(true)} cartItemsCount={cartItemsCount} />

      <div className="container mx-auto px-4 pt-32 pb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-primary mb-8 uppercase tracking-wide">
          All Products
        </h1>
        
        {/* Filter Section */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Category Filter */}
              <div className="flex-1">
                <h3 className="font-medium mb-3 text-sm uppercase tracking-wider text-foreground">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategories.includes(category) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleCategory(category)}
                      className="text-xs"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div className="flex-1">
                <h3 className="font-medium mb-3 text-sm uppercase tracking-wider text-foreground">Status</h3>
                <div className="flex flex-wrap gap-2">
                  {statuses.map((status) => (
                    <Button
                      key={status}
                      variant={selectedStatuses.includes(status) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleStatus(status)}
                      className="text-xs"
                    >
                      {status}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="flex-1">
                <h3 className="font-medium mb-3 text-sm uppercase tracking-wider text-foreground">
                  Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                </h3>
                <Slider
                  min={0}
                  max={maxPrice}
                  step={1000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-2"
                />
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <div className="mt-4 flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs"
                >
                  <X className="h-3 w-3 mr-1" />
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              data-product-card
              data-index={index}
              className={`transition-all duration-700 ${
                visibleProducts.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Shop;

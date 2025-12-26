import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TextCarousel } from "@/components/TextCarousel";
import { Cart } from "@/components/Cart";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { X, SlidersHorizontal, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useCartStore } from "@/stores/cartStore";
import { fetchProducts, ShopifyProduct, CartItem } from "@/lib/shopify";
import { ShopifyProductCard } from "@/components/ShopifyProductCard";
import { toast } from "sonner";

const Shop = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState<Set<number>>(new Set());
  const { addItem, getTotalItems } = useCartStore();

  // Filter states
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<number[]>([0, 20000]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const shopifyProducts = await fetchProducts(50);
        setProducts(shopifyProducts);
        
        if (shopifyProducts.length > 0) {
          const maxPrice = Math.max(...shopifyProducts.map(p => parseFloat(p.node.priceRange.minVariantPrice.amount)));
          setPriceRange([0, Math.ceil(maxPrice)]);
        }
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

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
  }, [products]);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    const cartItem: CartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    };

    addItem(cartItem);
    toast.success(`${product.node.title} added to cart`);
    setCartOpen(true);
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const price = parseFloat(product.node.priceRange.minVariantPrice.amount);
    const priceMatch = price >= priceRange[0] && price <= priceRange[1];
    const variant = product.node.variants.edges[0]?.node;
    const statusMatch = selectedStatuses.length === 0 || 
      (selectedStatuses.includes('available') && variant?.availableForSale) ||
      (selectedStatuses.includes('sold-out') && !variant?.availableForSale);
    return priceMatch && statusMatch;
  });

  const toggleStatus = (status: string) => {
    setSelectedStatuses(prev => 
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  const clearFilters = () => {
    setSelectedStatuses([]);
    const maxPrice = products.length > 0 
      ? Math.max(...products.map(p => parseFloat(p.node.priceRange.minVariantPrice.amount)))
      : 20000;
    setPriceRange([0, Math.ceil(maxPrice)]);
  };

  const maxPrice = products.length > 0 
    ? Math.max(...products.map(p => parseFloat(p.node.priceRange.minVariantPrice.amount)))
    : 20000;

  const hasActiveFilters = selectedStatuses.length > 0 || 
    priceRange[0] !== 0 || priceRange[1] !== Math.ceil(maxPrice);

  return (
    <div className="min-h-screen bg-background pt-16">
      <TextCarousel />
      <Header onCartOpen={() => setCartOpen(true)} cartItemsCount={getTotalItems()} />

      <div className="container mx-auto px-4 pt-32 pb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-primary mb-8 uppercase tracking-wide">
          All Products
        </h1>
        
        {/* Filter Section */}
        <div className="max-w-7xl mx-auto mb-8">
          <Collapsible open={filtersOpen} onOpenChange={setFiltersOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex items-center justify-between py-4 px-6 bg-card border border-border rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="font-medium text-sm uppercase tracking-wider">
                    Filters {hasActiveFilters && `(active)`}
                  </span>
                </div>
                {filtersOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-2">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Status Filter */}
                  <div className="flex-1">
                    <h3 className="font-medium mb-3 text-sm uppercase tracking-wider text-foreground">Availability</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant={selectedStatuses.includes('available') ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleStatus('available')}
                        className="text-xs"
                      >
                        In Stock
                      </Button>
                      <Button
                        variant={selectedStatuses.includes('sold-out') ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleStatus('sold-out')}
                        className="text-xs"
                      >
                        Sold Out
                      </Button>
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div className="flex-1">
                    <h3 className="font-medium mb-3 text-sm uppercase tracking-wider text-foreground">
                      Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                    </h3>
                    <Slider
                      min={0}
                      max={Math.ceil(maxPrice)}
                      step={500}
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
            </CollapsibleContent>
          </Collapsible>

          {/* Results Count */}
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-muted-foreground text-lg">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProducts.map((product, index) => (
              <div
                key={product.node.id}
                data-product-card
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleProducts.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <ShopifyProductCard product={product} onAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>
        )}
      </div>

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
      
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Shop;

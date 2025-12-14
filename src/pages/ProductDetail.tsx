import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { TextCarousel } from "@/components/TextCarousel";
import { products } from "@/components/ProductCarousel";
import { Cart, type CartItem } from "@/components/Cart";
import type { Product } from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-16">
        <TextCarousel />
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const statusColors = {
    "LIVE": "bg-live text-primary-foreground",
    "SOLD OUT": "bg-sold-out text-destructive-foreground",
    "COMING SOON": "bg-coming-soon text-foreground",
  };

  const handleAddToCart = (productToAdd: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productToAdd.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });

    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };

  const canPurchase = product.status === "LIVE";

  const getButtonConfig = () => {
    switch (product.status) {
      case "LIVE":
        return { text: "ADD TO BAG", variant: "default" as const, disabled: false };
      case "SOLD OUT":
        return { text: "SOLD OUT", variant: "secondary" as const, disabled: true };
      case "COMING SOON":
        return { text: "COMING SOON", variant: "secondary" as const, disabled: true };
    }
  };

  const buttonConfig = getButtonConfig();

  return (
    <div className="min-h-screen bg-background pt-16 animate-fade-in">
      <TextCarousel />
      <Header />

      <div className="container mx-auto px-4 py-8 md:py-12 overflow-x-hidden">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 md:mb-8 hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
          <div className="space-y-4 w-full">
            <div className="relative aspect-square bg-card overflow-hidden rounded-lg">
              <img
                src={product.images?.[selectedImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.images && product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImageIndex((prev) => 
                      prev === 0 ? product.images!.length - 1 : prev - 1
                    )}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex((prev) => 
                      prev === product.images!.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index 
                        ? 'border-primary' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex flex-col justify-center space-y-4 md:space-y-6 w-full min-w-0">
            <Badge className={`${statusColors[product.status]} text-xs tracking-wider w-fit`}>
              {product.status}
            </Badge>
            
            <div className="space-y-3 md:space-y-4">
              <p className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase">{product.category}</p>
              <h1 className="text-2xl md:text-4xl font-bold tracking-wide break-words">{product.name}</h1>
              <p className="text-xl md:text-2xl font-mono text-primary">₹{product.price.toLocaleString()}</p>
            </div>

            <div className="space-y-2 font-mono text-sm">
              <p className="text-muted-foreground">EDITION: <span className="text-foreground">{product.edition}</span></p>
              <p className="text-muted-foreground">RELEASE: <span className="text-foreground">2025</span></p>
            </div>

            <div className="space-y-3">
              <Button 
                className="w-full tracking-wider text-sm py-6"
                variant={buttonConfig.variant}
                disabled={buttonConfig.disabled}
                onClick={() => canPurchase && handleAddToCart(product)}
              >
                {buttonConfig.text}
              </Button>
              <Button 
                className="w-full tracking-wider text-sm py-6"
                variant="outline"
                disabled={!canPurchase}
                onClick={() => canPurchase && handleAddToCart(product)}
              >
                BUY IT NOW
              </Button>
            </div>

            {/* Product Details Section */}
            <div className="mt-12 space-y-8 border-t border-border pt-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-wider">DETAILS</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="font-bold uppercase">INTRODUCING {product.name}</p>
                  <p>
                    A premium collectible crafted with exceptional attention to detail. 
                    Each piece is individually numbered and comes with a certificate of authenticity.
                  </p>
                  <div className="space-y-2 mt-4">
                    <p className="font-bold uppercase">FEATURES:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Premium materials and construction</li>
                      <li>Limited edition numbered piece</li>
                      <li>Certificate of authenticity included</li>
                      <li>Designed by renowned artists</li>
                    </ul>
                  </div>
                  <p className="mt-4">
                    Each piece is carefully packaged to ensure it arrives in perfect condition. 
                    A true collector's item that will appreciate in value over time.
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-t border-border pt-8">
                <h3 className="text-lg font-bold uppercase tracking-wider">CARE</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Handle with care. Clean with a soft, dry cloth. Avoid direct sunlight and extreme temperatures 
                  to preserve the finish and colors.
                </p>
              </div>

              <div className="space-y-4 border-t border-border pt-8">
                <h3 className="text-lg font-bold uppercase tracking-wider">MATERIAL & DIMENSIONS</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Premium resin body with matte finish</li>
                  <li>Metal base plate for stability</li>
                  <li>High-quality paint and finishing</li>
                  <li>Weight: Varies by piece</li>
                  <li>Dimensions: See product specifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <Footer />
    </div>
  );
};

export default ProductDetail;

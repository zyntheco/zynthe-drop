import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TextCarousel } from "@/components/TextCarousel";
import { ProductCard, type Product } from "@/components/ProductCard";
import { Cart, type CartItem } from "@/components/Cart";
import { products } from "@/components/ProductCarousel";

const Shop = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Set<number>>(new Set());

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

  return (
    <div className="min-h-screen bg-background">
      <TextCarousel />
      <Header onCartOpen={() => setCartOpen(true)} cartItemsCount={cartItemsCount} />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-12 uppercase tracking-wide">
          All Products
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
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
      
      <Footer />
    </div>
  );
};

export default Shop;

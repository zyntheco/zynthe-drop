import { useState } from "react";
import { TextCarousel } from "@/components/TextCarousel";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryHeader } from "@/components/CategoryHeader";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Manifesto } from "@/components/Manifesto";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";
import { Cart, type CartItem } from "@/components/Cart";
import type { Product } from "@/components/ProductCard";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        toast({
          title: "Updated Cart",
          description: `${product.name} quantity increased.`,
        });
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
      });
      return [...prevItems, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-background">
      <TextCarousel />
      <Header onCartOpen={() => setCartOpen(true)} cartItemsCount={cartItems.length} />
      <Hero />
      <CategoryHeader />
      <ProductCarousel onAddToCart={handleAddToCart} />
      <Manifesto />
      <EmailCapture />
      <Footer />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;

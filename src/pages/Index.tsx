import { useState } from "react";
import { TextCarousel } from "@/components/TextCarousel";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryHeader } from "@/components/CategoryHeader";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Manifesto } from "@/components/Manifesto";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import type { Product } from "@/components/ProductCard";
import { toast } from "@/hooks/use-toast";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useCart } from "@/context/CartContext";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { addToCart, getItemsCount } = useCart();

  const handleAddToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem("zynthe_cart") || "[]");
    const existingItem = existingCart.find((item: any) => item.id === product.id);

    if (existingItem) {
      toast({
        title: "Updated Cart",
        description: `${product.name} quantity increased.`,
      });
    } else {
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
      });
    }

    addToCart(product);
    setCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <TextCarousel />
      <Header onCartOpen={() => setCartOpen(true)} cartItemsCount={getItemsCount()} />
      <Hero />
      <CategoryHeader />
      <ProductCarousel onAddToCart={handleAddToCart} />
      <Manifesto />
      <EmailCapture />
      <Footer />
      <ScrollToTop />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
};

export default Index;

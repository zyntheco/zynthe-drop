import { useState, useEffect } from "react";
import { TextCarousel } from "@/components/TextCarousel";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryHeader } from "@/components/CategoryHeader";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Manifesto } from "@/components/Manifesto";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useCartStore } from "@/stores/cartStore";
import { fetchProducts, ShopifyProduct, CartItem } from "@/lib/shopify";
import { toast } from "sonner";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem, getTotalItems } = useCartStore();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const shopifyProducts = await fetchProducts(20);
        setProducts(shopifyProducts);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

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

  return (
    <div className="min-h-screen bg-background pt-16">
      <TextCarousel />
      <Header onCartOpen={() => setCartOpen(true)} cartItemsCount={getTotalItems()} />
      <Hero />
      <CategoryHeader />
      <ProductCarousel products={products} onAddToCart={handleAddToCart} loading={loading} />
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

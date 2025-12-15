import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { ProductCard, type Product } from "@/components/ProductCard";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TextCarousel } from "@/components/TextCarousel";
import { useCart } from "@/context/CartContext";

// Archive products - sold out items
const archiveProducts: Product[] = [
  {
    id: "archive-1",
    name: "GENESIS SPHERE 01",
    category: "SCULPTURE",
    price: 45000,
    image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=800&h=800&fit=crop",
    status: "SOLD OUT",
    edition: "15/15",
    colors: 2,
  },
  {
    id: "archive-2",
    name: "VOID COLUMN",
    category: "MONOLITH",
    price: 85000,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=800&fit=crop",
    status: "SOLD OUT",
    edition: "8/8",
    colors: 1,
  },
  {
    id: "archive-3",
    name: "ECHO FRAME 01",
    category: "WALL ART",
    price: 32000,
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=800&fit=crop",
    status: "SOLD OUT",
    edition: "25/25",
    colors: 2,
  },
  {
    id: "archive-4",
    name: "APEX THRONE",
    category: "FURNITURE",
    price: 125000,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
    status: "SOLD OUT",
    edition: "5/5",
    colors: 2,
  },
  {
    id: "archive-5",
    name: "HORIZON DISC",
    category: "LIGHT",
    price: 38000,
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=800&fit=crop",
    status: "SOLD OUT",
    edition: "20/20",
    colors: 2,
  },
  {
    id: "archive-6",
    name: "NEXUS TABLET",
    category: "SCULPTURE",
    price: 52000,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop",
    status: "SOLD OUT",
    edition: "12/12",
    colors: 1,
  },
];

const Archive = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { getItemsCount } = useCart();

  return (
    <div className="min-h-screen bg-background pt-16">
      <TextCarousel />
      <Header onCartOpen={() => setCartOpen(true)} cartItemsCount={getItemsCount()} />

      {/* Hero Section - aligned with main hero styling */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] overflow-hidden bg-background pt-24 md:pt-28">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-background/60 to-background" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center gap-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/60 mb-4">
              ZYNTHE ARCHIVE
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-4">
              Past drops, never repeated.
            </h1>
            <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto">
              A record of every limited edition piece we've released. Once a piece
              enters the archive, it's gone for good.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-4 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Archived Editions
            </h2>
            <p className="text-muted-foreground">
              Sold out. Documented here for collectors and future provenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {archiveProducts.map((product, index) => (
              <div
                key={product.id}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <ProductCard product={product} onAddToCart={() => {}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
};

export default Archive;
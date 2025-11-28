import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart, type CartItem } from "@/components/Cart";
import { ProductCard, type Product } from "@/components/ProductCard";

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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
      <Header onCartOpen={() => setCartOpen(true)} cartItemsCount={cartItems.length} />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#d4af37] mb-6 tracking-tight">
            THE ARCHIVE
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl tracking-wide">
            Explore our past collections. These pieces have found their homes and will never be restocked. 
            Each was a limited edition, numbered and authenticated.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {archiveProducts.map((product) => (
              <div
                key={product.id}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${archiveProducts.indexOf(product) * 100}ms`,
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

export default Archive;

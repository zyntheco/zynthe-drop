import { ProductCard, type Product } from "./ProductCard";
import jagermeisterRug1 from "@/assets/jagermeister-rug-1.png";
import jagermeisterRug2 from "@/assets/jagermeister-rug-2.png";
import jagermeisterRug3 from "@/assets/jagermeister-rug-3.png";
import jagermeisterRug4 from "@/assets/jagermeister-rug-4.png";
import jagermeisterRug5 from "@/assets/jagermeister-rug-5.png";

export const products: Product[] = [
  {
    id: "1",
    name: "SPOOKY CONTROLLER STAND",
    category: "Gaming Sculpture",
    price: 34000,
    edition: "025/100",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=800&fit=crop",
    colors: 3,
  },
  {
    id: "2",
    name: "M-SERIES DISC LIGHT",
    category: "Automotive Art",
    price: 52000,
    edition: "012/050",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
    colors: 3,
  },
  {
    id: "3",
    name: "ROPE CONTROLLER STAND",
    category: "Gaming Sculpture",
    price: 22000,
    edition: "042/075",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&h=800&fit=crop",
    colors: 3,
  },
  {
    id: "4",
    name: "JÄGERMEISTER RUG",
    category: "Textile Art",
    price: 68000,
    edition: "008/025",
    status: "LIVE",
    image: jagermeisterRug1,
    images: [jagermeisterRug1, jagermeisterRug2, jagermeisterRug3, jagermeisterRug4, jagermeisterRug5],
    colors: 3,
  },
  {
    id: "5",
    name: "F1 RUG",
    category: "Textile Art",
    price: 75000,
    edition: "001/050",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
    colors: 3,
  },
];

type ProductCarouselProps = {
  onAddToCart?: (product: Product) => void;
};

export const ProductCarousel = ({ onAddToCart }: ProductCarouselProps) => {
  return (
    <section className="bg-[#0A0A0A] py-8 md:py-12 overflow-hidden">
      <div
        className="flex overflow-x-auto gap-4 px-5 scrollbar-hide snap-x snap-mandatory scroll-smooth"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 snap-center w-[280px] md:w-[320px] lg:w-[360px]"
          >
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </section>
  );
};

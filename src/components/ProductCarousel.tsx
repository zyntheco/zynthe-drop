import { ProductCard, type Product } from "./ProductCard";

const products: Product[] = [
  {
    id: "1",
    name: "BEAR CONTROLLER THRONE",
    category: "Gaming Sculpture",
    price: 22000,
    edition: "042/075",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&h=800&fit=crop",
    colors: 3,
  },
  {
    id: "2",
    name: "MONOLITH RUG 01",
    category: "Textile Art",
    price: 68000,
    edition: "008/025",
    status: "COMING SOON",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=800&fit=crop",
    colors: 3,
  },
  {
    id: "3",
    name: "ZYNTH FIGURE 01",
    category: "Collectible Doll",
    price: 34000,
    edition: "025/100",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=800&fit=crop",
    colors: 3,
  },
  {
    id: "4",
    name: "M-SERIES DISC LIGHT",
    category: "Automotive Art",
    price: 52000,
    edition: "012/050",
    status: "SOLD OUT",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
    colors: 3,
  },
  {
    id: "5",
    name: "CERAMIC WAVE VASE",
    category: "Home Sculpture",
    price: 18000,
    edition: "055/100",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=800&fit=crop",
    colors: 3,
  },
  {
    id: "6",
    name: "NEON FLUX PANEL",
    category: "Wall Art",
    price: 42000,
    edition: "019/050",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop",
    colors: 3,
  },
];

export const ProductCarousel = () => {
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
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

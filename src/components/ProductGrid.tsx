import { ProductCard, type Product } from "./ProductCard";

const products: Product[] = [
  {
    id: "1",
    name: "ZYNTH FIGURE 01",
    category: "Collectible Doll",
    price: 34000,
    edition: "025/100",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=800&fit=crop",
  },
  {
    id: "2",
    name: "M-SERIES DISC LIGHT",
    category: "Automotive Art",
    price: 52000,
    edition: "012/050",
    status: "SOLD OUT",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
  },
  {
    id: "3",
    name: "BEAR CONTROLLER THRONE",
    category: "Gaming Sculpture",
    price: 22000,
    edition: "041/075",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&h=800&fit=crop",
  },
  {
    id: "4",
    name: "MONOLITH RUG 01",
    category: "Textile Art",
    price: 68000,
    edition: "008/025",
    status: "COMING SOON",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=800&fit=crop",
  },
];

export const ProductGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

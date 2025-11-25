import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  edition: string;
  status: "LIVE" | "SOLD OUT" | "COMING SOON";
  image: string;
  colors: number;
};

type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

const ColorDots = ({ count }: { count: number }) => {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
            i === 2 
              ? 'bg-black ring-2 ring-primary' 
              : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
          }`}
          aria-label={`Color variant ${i + 1}`}
        />
      ))}
    </div>
  );
};

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const statusColors = {
    "LIVE": "bg-primary text-black",
    "SOLD OUT": "bg-destructive text-white",
    "COMING SOON": "bg-muted text-white",
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart && product.status === "LIVE") {
      onAddToCart(product);
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
        />
        
        {/* Edition Badge (Bottom Left) */}
        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-xs font-bold">
          {product.edition}
        </div>

        {/* Add to Cart Button (Bottom Right) */}
        {product.status === "LIVE" && (
          <Button
            onClick={handleAddToCart}
            size="icon"
            className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white hover:bg-primary hover:text-black transition-all duration-200 rounded-md h-auto w-auto p-1.5"
          >
            <Plus className="h-4 w-4" />
          </Button>
        )}

        {/* Status Badge (Top Right) */}
        <Badge className={`absolute top-3 right-3 ${statusColors[product.status]} text-xs font-semibold px-3.5 py-1 rounded-full`}>
          {product.status}
        </Badge>
      </div>

      {/* Content Area */}
      <div className="p-5 pb-6 space-y-4">
        {/* Product Name */}
        <h3 className="text-base md:text-lg font-bold text-white text-center uppercase tracking-wide leading-tight">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-xl font-bold text-primary text-center">
          ₹{product.price.toLocaleString()}
        </p>

        {/* Color Variant Dots */}
        <ColorDots count={product.colors} />
      </div>
    </Link>
  );
};

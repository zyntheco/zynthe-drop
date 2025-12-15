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
  images?: string[];
  colors?: number;
  description?: string;
  features?: string[];
  dimensions?: string;
};

type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
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
      className="group flex flex-col h-full bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
          style={{ imageRendering: 'auto' }}
          loading="eager"
        />
        
        {/* Edition Badge (Bottom Left) */}
        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-xs font-bold">
          {product.edition}
        </div>

        {/* Status Badge (Top Right) */}
        <Badge className={`absolute top-3 right-3 ${statusColors[product.status]} text-xs font-semibold px-3.5 py-1 rounded-full`}>
          {product.status}
        </Badge>
      </div>

      {/* Content Area - Fixed height for uniformity */}
      <div className="p-5 pb-6 flex flex-col justify-between flex-grow min-h-[120px]">
        {/* Product Name - Fixed height with 2 lines max */}
        <h3 className="text-base md:text-lg font-bold text-white text-center uppercase tracking-wide leading-tight line-clamp-2 min-h-[48px] md:min-h-[56px] flex items-center justify-center">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-xl font-bold text-primary text-center mt-auto">
          ₹{product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

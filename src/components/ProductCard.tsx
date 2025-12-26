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
      className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      style={{ height: '420px' }}
    >
      {/* Image Container - Fixed height */}
      <div className="relative h-[280px] overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
          style={{ imageRendering: 'crisp-edges' }}
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

      {/* Content Area - Fixed height */}
      <div className="p-4 flex flex-col justify-between h-[140px]">
        {/* Product Name - Fixed height */}
        <h3 className="text-sm md:text-base font-bold text-foreground text-center uppercase tracking-wide leading-tight line-clamp-2 h-[44px] flex items-center justify-center">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-lg font-bold text-primary text-center">
          ₹{product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

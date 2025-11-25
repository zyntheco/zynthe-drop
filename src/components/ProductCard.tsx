import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  edition: string;
  status: "LIVE" | "SOLD OUT" | "COMING SOON";
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const statusColors = {
    "LIVE": "bg-live text-primary-foreground",
    "SOLD OUT": "bg-sold-out text-destructive-foreground",
    "COMING SOON": "bg-coming-soon text-foreground",
  };

  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer block">
      <div>
        <div className="relative aspect-square bg-card overflow-hidden mb-4 border border-border/50 hover:border-primary/50 transition-all duration-300">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          
          {/* Hover glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4">
            <p className="text-xs font-mono text-foreground bg-background/90 px-2 py-1">
              {product.edition}
            </p>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className={`${statusColors[product.status]} text-xs tracking-wider`}>
              {product.status}
            </Badge>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">{product.category}</p>
          <h3 className="text-lg font-bold tracking-wide">{product.name}</h3>
          <p className="text-xl font-mono text-primary">₹{product.price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

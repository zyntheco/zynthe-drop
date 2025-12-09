import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "./ProductCard";

type ProductModalProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (product: Product) => void;
};

export const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  if (!isOpen) return null;

  const statusColors = {
    "LIVE": "bg-live text-primary-foreground",
    "SOLD OUT": "bg-sold-out text-destructive-foreground",
    "COMING SOON": "bg-coming-soon text-foreground",
  };

  const getButtonConfig = () => {
    switch (product.status) {
      case "LIVE":
        return { text: "ADD TO BAG", variant: "default" as const, disabled: false };
      case "SOLD OUT":
        return { text: "SOLD OUT", variant: "secondary" as const, disabled: true };
      case "COMING SOON":
        return { text: "NOTIFY ME", variant: "secondary" as const, disabled: false };
    }
  };

  const buttonConfig = getButtonConfig();

  return (
    <div className="fixed inset-0 bg-background/98 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="aspect-square bg-card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <Badge className={`${statusColors[product.status]} text-xs tracking-wider w-fit`}>
              {product.status}
            </Badge>
            
            <div className="space-y-4">
              <p className="text-sm tracking-widest text-muted-foreground uppercase">{product.category}</p>
              <h2 className="text-4xl font-bold tracking-wide">{product.name}</h2>
              <p className="text-2xl font-mono text-primary">₹{product.price.toLocaleString()}</p>
            </div>

            <div className="space-y-2 font-mono text-sm">
              <p className="text-muted-foreground">EDITION: <span className="text-foreground">{product.edition}</span></p>
              <p className="text-muted-foreground">RELEASE: <span className="text-foreground">2024</span></p>
            </div>

            <Button 
              className="w-full tracking-wider text-sm py-6"
              variant={buttonConfig.variant}
              disabled={buttonConfig.disabled}
              onClick={() => onAddToCart && !buttonConfig.disabled && onAddToCart(product)}
            >
              {buttonConfig.text}
            </Button>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="fixed top-8 right-8 hover:text-primary"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

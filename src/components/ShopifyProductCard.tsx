import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ShopifyProduct } from "@/lib/shopify";

type ShopifyProductCardProps = {
  product: ShopifyProduct;
  onAddToCart?: (product: ShopifyProduct) => void;
};

export const ShopifyProductCard = ({ product }: ShopifyProductCardProps) => {
  const { node } = product;
  const variant = node.variants.edges[0]?.node;
  const isAvailable = variant?.availableForSale ?? true;
  const price = parseFloat(node.priceRange.minVariantPrice.amount);
  const imageUrl = node.images.edges[0]?.node.url;

  return (
    <Link
      to={`/product/${node.handle}`}
      className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      style={{ height: '420px' }}
    >
      {/* Image Container - Fixed height */}
      <div className="relative h-[280px] overflow-hidden flex-shrink-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={node.title}
            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
            loading="eager"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}

        {/* Status Badge (Top Right) */}
        <Badge 
          className={`absolute top-3 right-3 ${
            isAvailable ? 'bg-primary text-primary-foreground' : 'bg-destructive text-white'
          } text-xs font-semibold px-3.5 py-1 rounded-full`}
        >
          {isAvailable ? 'LIVE' : 'SOLD OUT'}
        </Badge>
      </div>

      {/* Content Area - Fixed height */}
      <div className="p-4 flex flex-col justify-between h-[140px]">
        {/* Product Name - Fixed height */}
        <h3 className="text-sm md:text-base font-bold text-foreground text-center uppercase tracking-wide leading-tight line-clamp-2 h-[44px] flex items-center justify-center">
          {node.title}
        </h3>

        {/* Price */}
        <p className="text-lg font-bold text-primary text-center">
          ₹{price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

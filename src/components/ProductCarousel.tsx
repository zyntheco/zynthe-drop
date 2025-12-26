import { ShopifyProductCard } from "./ShopifyProductCard";
import { ShopifyProduct } from "@/lib/shopify";
import { Loader2 } from "lucide-react";

type ProductCarouselProps = {
  products: ShopifyProduct[];
  onAddToCart?: (product: ShopifyProduct) => void;
  loading?: boolean;
};

export const ProductCarousel = ({ products, onAddToCart, loading }: ProductCarouselProps) => {
  if (loading) {
    return (
      <section className="bg-[#0A0A0A] py-8 md:py-12">
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="bg-[#0A0A0A] py-8 md:py-12">
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0A0A0A] py-8 md:py-12 overflow-hidden">
      <div
        className="flex overflow-x-auto gap-4 px-5 scrollbar-hide snap-x snap-mandatory scroll-smooth items-stretch"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {products.map((product) => (
          <div
            key={product.node.id}
            className="flex-shrink-0 snap-center w-[280px] md:w-[320px] lg:w-[360px] flex"
          >
            <ShopifyProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </section>
  );
};

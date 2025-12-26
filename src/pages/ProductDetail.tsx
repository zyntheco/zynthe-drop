import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { TextCarousel } from "@/components/TextCarousel";
import { Cart } from "@/components/Cart";
import { useCartStore } from "@/stores/cartStore";
import { fetchProductByHandle, ShopifyProduct, CartItem } from "@/lib/shopify";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [product, setProduct] = useState<ShopifyProduct['node'] | null>(null);
  const [loading, setLoading] = useState(true);
  const { addItem, getTotalItems } = useCartStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadProduct = async () => {
      if (!id) return;
      try {
        const productData = await fetchProductByHandle(id);
        setProduct(productData);
      } catch (error) {
        console.error('Failed to load product:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const variant = product.variants.edges[0]?.node;
    if (!variant) return;

    const cartItem: CartItem = {
      product: { node: product } as ShopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    };

    addItem(cartItem);
    toast.success(`${product.title} added to cart`);
    setCartOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-16 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-16">
        <TextCarousel />
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.images.edges.map(e => e.node.url);
  const variant = product.variants.edges[0]?.node;
  const isAvailable = variant?.availableForSale ?? true;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);

  return (
    <div className="min-h-screen bg-background pt-16 animate-fade-in">
      <TextCarousel />
      <Header onCartOpen={() => setCartOpen(true)} cartItemsCount={getTotalItems()} />

      <div className="container mx-auto px-4 py-8 md:py-12 overflow-x-hidden">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 md:mb-8 hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
          <div className="space-y-4 w-full">
            <div className="relative aspect-square bg-card overflow-hidden rounded-lg">
              <img src={images[selectedImageIndex] || ''} alt={product.title} className="w-full h-full object-cover" />
              {images.length > 1 && (
                <>
                  <button onClick={() => setSelectedImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={() => setSelectedImageIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <button key={index} onClick={() => setSelectedImageIndex(index)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-all ${selectedImageIndex === index ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                    <img src={img} alt={`${product.title} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex flex-col justify-center space-y-4 md:space-y-6 w-full min-w-0">
            <Badge className={`${isAvailable ? 'bg-primary text-primary-foreground' : 'bg-destructive text-white'} text-xs tracking-wider w-fit`}>
              {isAvailable ? 'LIVE' : 'SOLD OUT'}
            </Badge>
            
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold tracking-wide break-words">{product.title}</h1>
              <p className="text-xl md:text-2xl font-mono text-primary">₹{price.toLocaleString()}</p>
            </div>

            <div className="space-y-3">
              <Button className="w-full tracking-wider text-sm py-6" disabled={!isAvailable} onClick={handleAddToCart}>
                {isAvailable ? 'ADD TO BAG' : 'SOLD OUT'}
              </Button>
            </div>

            <div className="mt-12 space-y-8 border-t border-border pt-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-wider">DETAILS</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <Footer />
    </div>
  );
};

export default ProductDetail;

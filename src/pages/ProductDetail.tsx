import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { TextCarousel } from "@/components/TextCarousel";
import { products } from "@/components/ProductCarousel";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const product = products.find(p => p.id === id);
  
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
    <div className="min-h-screen bg-background pt-16 animate-fade-in">
      <TextCarousel />
      <Header />

      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8 hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Button>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
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
              <h1 className="text-4xl font-bold tracking-wide">{product.name}</h1>
              <p className="text-2xl font-mono text-primary">₹{product.price.toLocaleString()}</p>
            </div>

            <div className="space-y-2 font-mono text-sm">
              <p className="text-muted-foreground">EDITION: <span className="text-foreground">{product.edition}</span></p>
              <p className="text-muted-foreground">RELEASE: <span className="text-foreground">2024</span></p>
            </div>

            <div className="space-y-3">
              <Button 
                className="w-full tracking-wider text-sm py-6"
                variant={buttonConfig.variant}
                disabled={buttonConfig.disabled}
              >
                {buttonConfig.text}
              </Button>
              <Button 
                className="w-full tracking-wider text-sm py-6"
                variant="outline"
              >
                BUY IT NOW
              </Button>
            </div>

            {/* Product Details Section */}
            <div className="mt-12 space-y-8 border-t border-border pt-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-wider">DETAILS</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="font-bold uppercase">INTRODUCING {product.name}</p>
                  <p>
                    A premium collectible crafted with exceptional attention to detail. 
                    Each piece is individually numbered and comes with a certificate of authenticity.
                  </p>
                  <div className="space-y-2 mt-4">
                    <p className="font-bold uppercase">FEATURES:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Premium materials and construction</li>
                      <li>Limited edition numbered piece</li>
                      <li>Certificate of authenticity included</li>
                      <li>Designed by renowned artists</li>
                    </ul>
                  </div>
                  <p className="mt-4">
                    Each piece is carefully packaged to ensure it arrives in perfect condition. 
                    A true collector's item that will appreciate in value over time.
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-t border-border pt-8">
                <h3 className="text-lg font-bold uppercase tracking-wider">CARE</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Handle with care. Clean with a soft, dry cloth. Avoid direct sunlight and extreme temperatures 
                  to preserve the finish and colors.
                </p>
              </div>

              <div className="space-y-4 border-t border-border pt-8">
                <h3 className="text-lg font-bold uppercase tracking-wider">MATERIAL & DIMENSIONS</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Premium resin body with matte finish</li>
                  <li>Metal base plate for stability</li>
                  <li>High-quality paint and finishing</li>
                  <li>Weight: Varies by piece</li>
                  <li>Dimensions: See product specifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;

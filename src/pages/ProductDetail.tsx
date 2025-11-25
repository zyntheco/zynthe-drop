import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { TextCarousel } from "@/components/TextCarousel";

// Mock product data - in a real app, this would come from an API
const products = [
  {
    id: "1",
    name: "ZYNTH FIGURE 01",
    category: "Collectible Doll",
    price: 34000,
    edition: "025/100",
    status: "LIVE" as const,
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=800&fit=crop",
  },
  {
    id: "2",
    name: "M-SERIES DISC LIGHT",
    category: "Automotive Art",
    price: 52000,
    edition: "012/050",
    status: "SOLD OUT" as const,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
  },
  {
    id: "3",
    name: "BEAR CONTROLLER THRONE",
    category: "Gaming Sculpture",
    price: 22000,
    edition: "041/075",
    status: "LIVE" as const,
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&h=800&fit=crop",
  },
  {
    id: "4",
    name: "MONOLITH RUG 01",
    category: "Textile Art",
    price: 68000,
    edition: "008/025",
    status: "COMING SOON" as const,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=800&fit=crop",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background">
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
    <div className="min-h-screen bg-background">
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

            <Button 
              className="w-full tracking-wider text-sm py-6"
              variant={buttonConfig.variant}
              disabled={buttonConfig.disabled}
            >
              {buttonConfig.text}
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;

import { ProductCard, type Product } from "./ProductCard";
import jagermeisterRug1 from "@/assets/jagermeister-rug-1.png";
import jagermeisterRug2 from "@/assets/jagermeister-rug-2.png";
import jagermeisterRug3 from "@/assets/jagermeister-rug-3.png";
import jagermeisterRug4 from "@/assets/jagermeister-rug-4.png";
import jagermeisterRug5 from "@/assets/jagermeister-rug-5.png";
import f1Rug1 from "@/assets/f1-rug-1.png";
import f1Rug2 from "@/assets/f1-rug-2.png";
import f1Rug3 from "@/assets/f1-rug-3.png";
import f1Rug4 from "@/assets/f1-rug-4.png";
import f1Rug5 from "@/assets/f1-rug-5.png";
import tentacleStand1 from "@/assets/tentacle-stand-1.png";
import tentacleStand2 from "@/assets/tentacle-stand-2.png";
import tentacleStand3 from "@/assets/tentacle-stand-3.png";
import tentacleStand4 from "@/assets/tentacle-stand-4.png";
import cushionStand1 from "@/assets/cushion-stand-1.png";
import cushionStand2 from "@/assets/cushion-stand-2.png";
import cushionStand3 from "@/assets/cushion-stand-3.png";
import cushionStand4 from "@/assets/cushion-stand-4.png";
import mSeriesDiscLight1 from "@/assets/m-series-disc-light-1.webp";
import mSeriesDiscLight2 from "@/assets/m-series-disc-light-2.webp";
import mSeriesDiscLight3 from "@/assets/m-series-disc-light-3.webp";

export const products: Product[] = [
  {
    id: "1",
    name: "TENTACLE CONTROLLER STAND",
    category: "Gaming Sculpture",
    price: 2399,
    edition: "025/100",
    status: "LIVE",
    image: tentacleStand1,
    images: [tentacleStand1, tentacleStand2, tentacleStand3, tentacleStand4],
    colors: 3,
    description: "A stunning octopus tentacle-shaped controller stand that brings the deep sea to your gaming setup. Hand-painted in vibrant blue with intricate sucker details.",
    features: [
      "Fits PS5, Xbox, and Switch Pro controllers",
      "Hand-painted resin with matte finish",
      "Weighted base for stability",
      "Non-slip grip points"
    ],
    dimensions: "Height: 15cm | Width: 18cm | Depth: 12cm"
  },
  {
    id: "2",
    name: "M-SERIES DISC LIGHT",
    category: "Automotive Art",
    price: 7999,
    edition: "012/050",
    status: "LIVE",
    image: mSeriesDiscLight1,
    images: [mSeriesDiscLight1, mSeriesDiscLight2, mSeriesDiscLight3],
    colors: 3,
    description: "A premium LED disc light featuring iconic M-Series motorsport heritage. Perfect ambient lighting for car enthusiasts and collectors.",
    features: [
      "LED backlit with adjustable brightness",
      "Premium acrylic construction",
      "Wall-mountable design",
      "Low power consumption"
    ],
    dimensions: "Diameter: 40cm | Depth: 5cm"
  },
  {
    id: "3",
    name: "CUSHION CONTROLLER STAND",
    category: "Gaming Sculpture",
    price: 2999,
    edition: "042/075",
    status: "LIVE",
    image: cushionStand1,
    images: [cushionStand1, cushionStand2, cushionStand3, cushionStand4],
    colors: 3,
    description: "A luxurious pillow-shaped controller stand that cradles your controller in style. Features realistic fabric-like texture sculpted in premium resin.",
    features: [
      "Universal controller compatibility",
      "Realistic fabric texture sculpting",
      "Available in multiple colorways",
      "Premium weighted base"
    ],
    dimensions: "Height: 12cm | Width: 16cm | Depth: 14cm"
  },
  {
    id: "4",
    name: "JÄGERMEISTER RUG",
    category: "Textile Art",
    price: 6499,
    edition: "008/025",
    status: "LIVE",
    image: jagermeisterRug1,
    images: [jagermeisterRug1, jagermeisterRug2, jagermeisterRug3, jagermeisterRug4, jagermeisterRug5],
    colors: 3,
    description: "A premium hand-tufted rug featuring the iconic Jägermeister stag logo. Perfect statement piece for bars, man caves, or collector spaces.",
    features: [
      "Hand-tufted premium acrylic yarn",
      "Dense pile for luxury feel",
      "Non-slip backing",
      "Officially inspired design"
    ],
    dimensions: "Width: 80cm | Length: 120cm | Pile Height: 15mm"
  },
  {
    id: "5",
    name: "F1 RUG",
    category: "Textile Art",
    price: 4599,
    edition: "001/050",
    status: "LIVE",
    image: f1Rug1,
    images: [f1Rug1, f1Rug2, f1Rug3, f1Rug4, f1Rug5],
    colors: 3,
    description: "A motorsport-inspired hand-tufted rug celebrating the spirit of Formula 1 racing. Bold colors and dynamic design for racing enthusiasts.",
    features: [
      "Hand-tufted premium acrylic yarn",
      "Racing-inspired color palette",
      "Non-slip latex backing",
      "Durable for high-traffic areas"
    ],
    dimensions: "Width: 70cm | Length: 100cm | Pile Height: 15mm"
  },
];

type ProductCarouselProps = {
  onAddToCart?: (product: Product) => void;
};

export const ProductCarousel = ({ onAddToCart }: ProductCarouselProps) => {
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
            key={product.id}
            className="flex-shrink-0 snap-center w-[280px] md:w-[320px] lg:w-[360px] flex"
          >
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </section>
  );
};
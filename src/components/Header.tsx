import { Search, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/zynthe-logo.png";

export const Header = () => {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center mb-3">
          <img src={logo} alt="ZYNTHE" className="h-12 w-auto" />
        </div>
        <div className="flex items-center justify-between">
          <nav className="hidden md:flex gap-6">
            <button className="text-sm tracking-wider hover:text-primary transition-colors">NEW</button>
            <button className="text-sm tracking-wider hover:text-primary transition-colors">ARCHIVE</button>
            <button className="text-sm tracking-wider hover:text-primary transition-colors">ABOUT</button>
          </nav>
          <div className="flex items-center gap-4 ml-auto">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

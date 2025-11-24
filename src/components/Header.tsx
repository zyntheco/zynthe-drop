import { Search, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/zynthe-logo-cyan.jpeg";

export const Header = () => {
  return (
    <header className="border-b border-primary/20 bg-background">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <nav className="hidden md:flex gap-8 items-center">
            <button className="text-sm tracking-wider hover:text-primary transition-colors font-medium">NEW</button>
            <button className="text-sm tracking-wider hover:text-primary transition-colors font-medium">ARCHIVE</button>
            <button className="text-sm tracking-wider hover:text-primary transition-colors font-medium">ABOUT</button>
          </nav>
          
          <div className="flex items-center justify-center flex-1 md:flex-initial">
            <img 
              src={logo} 
              alt="ZYNTHE" 
              className="h-11 w-auto object-contain"
              style={{
                filter: 'drop-shadow(0 0 20px hsl(var(--primary)))',
              }}
            />
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

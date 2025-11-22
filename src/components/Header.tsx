import { Search, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold tracking-widest text-primary">ZYNTHE</h1>
          <nav className="hidden md:flex gap-6">
            <button className="text-sm tracking-wider hover:text-primary transition-colors">NEW</button>
            <button className="text-sm tracking-wider hover:text-primary transition-colors">ARCHIVE</button>
            <button className="text-sm tracking-wider hover:text-primary transition-colors">ABOUT</button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
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
    </header>
  );
};

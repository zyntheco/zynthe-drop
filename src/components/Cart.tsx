import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, Minus, Plus, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCart();
  const subtotal = getTotalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[90vw] sm:w-[400px] flex flex-col p-0">
        <SheetHeader className="px-6 pt-6 pb-4">
          <SheetTitle className="text-2xl font-bold tracking-wide">YOUR CART</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <Button onClick={onClose} variant="outline">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6 py-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-border last:border-b-0">
                  <div className="w-20 h-20 flex-shrink-0 bg-card rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div className="min-w-0">
                        <h3 className="font-bold text-xs uppercase leading-tight break-words">
                          {item.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">{item.edition}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 -mt-1 flex-shrink-0"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center gap-2 mt-auto pt-2">
                      <div className="flex items-center gap-1 bg-secondary rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-xs font-mono w-5 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <p className="font-bold text-primary text-sm">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-6 py-6 space-y-3">
            <div className="flex justify-between items-center text-lg">
              <span className="font-bold">SUBTOTAL</span>
              <span className="font-bold text-primary">₹{subtotal.toLocaleString()}</span>
            </div>

            <Button className="w-full py-6 text-base tracking-wider font-bold" disabled>
              PROCEED TO CHECKOUT
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>

            <Link to="/cart" onClick={onClose} className="w-full block">
              <Button variant="outline" className="w-full">
                GO TO CART
              </Button>
            </Link>

            <Button variant="outline" onClick={onClose} className="w-full">
              Continue Shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

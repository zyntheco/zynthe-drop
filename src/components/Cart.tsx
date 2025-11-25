import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, Minus, Plus } from "lucide-react";
import type { Product } from "./ProductCard";

export type CartItem = Product & {
  quantity: number;
};

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
};

export const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:w-[440px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold tracking-wide">YOUR CART</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <Button onClick={onClose} variant="outline">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-border">
                  <div className="w-24 h-24 flex-shrink-0 bg-card rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-sm uppercase leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">{item.edition}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 -mt-1"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex items-center gap-2 bg-secondary rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-mono w-6 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <p className="font-bold text-primary">
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
          <div className="border-t border-border pt-6 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-bold">SUBTOTAL</span>
              <span className="font-bold text-primary">₹{subtotal.toLocaleString()}</span>
            </div>

            <Button className="w-full py-6 text-base tracking-wider font-bold">
              PROCEED TO CHECKOUT
            </Button>

            <Button variant="outline" onClick={onClose} className="w-full">
              Continue Shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

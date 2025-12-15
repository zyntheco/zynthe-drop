import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Cart } from "@/components/Cart";
import { TextCarousel } from "@/components/TextCarousel";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, X, ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";

const CartPage = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { items, updateQuantity, removeItem, getTotalPrice, getItemsCount } = useCart();
  const navigate = useNavigate();

  const subtotal = getTotalPrice();

  return (
    <div className="min-h-screen bg-background pt-16">
      <TextCarousel />
      <Header onCartOpen={() => setCartOpen(true)} cartItemsCount={getItemsCount()} />

      <div className="container mx-auto px-4 py-12 md:py-24">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-8 hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold tracking-wider mb-12">YOUR CART</h1>

        {items.length === 0 ? (
          <div className="text-center py-24">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-6" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Add some items to get started</p>
            <Link to="/shop">
              <Button size="lg" className="tracking-wider">
                BROWSE PRODUCTS
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex gap-4 md:gap-6 p-4 md:p-6 bg-card border border-border rounded-lg"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-secondary rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div className="min-w-0">
                        <Link to={`/product/${item.id}`}>
                          <h3 className="font-bold text-sm md:text-base uppercase leading-tight break-words hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">{item.category}</p>
                        <p className="text-xs text-muted-foreground">{item.edition}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 flex-shrink-0"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center gap-2 mt-auto pt-4">
                      <div className="flex items-center gap-2 bg-secondary rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-mono w-6 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <p className="font-bold text-primary text-base md:text-lg">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">ORDER SUMMARY</h2>
                
                <div className="space-y-4 border-b border-border pb-6 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-muted-foreground">Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold">TOTAL</span>
                  <span className="text-xl font-bold text-primary">₹{subtotal.toLocaleString()}</span>
                </div>

                <Button 
                  className="w-full py-6 text-base tracking-wider font-bold"
                  disabled
                >
                  PROCEED TO CHECKOUT
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Connect to Shopify to enable checkout
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CartPage;
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";

const CartSidebar = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-[70] bg-foreground/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-card z-[80] shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-heading text-xl font-bold text-foreground">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-body text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-muted rounded-lg">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-sm font-semibold text-foreground truncate">{item.name}</h4>
                    <p className="font-body text-xs text-muted-foreground mt-1">{item.price} / {item.unit}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border rounded-md bg-card">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 5)} className="p-1.5 hover:bg-muted transition-colors">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 font-body text-xs">{item.quantity} MTN</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 5)} className="p-1.5 hover:bg-muted transition-colors">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-destructive hover:bg-destructive/10 p-1.5 rounded transition-colors" aria-label="Remove item">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border">
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-secondary text-secondary-foreground py-3 rounded-md font-body font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}
    </>
  );
};

export default CartSidebar;

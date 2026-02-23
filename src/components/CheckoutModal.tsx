import { useState } from "react";
import { X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { z } from "zod";

const checkoutSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(5, "Valid phone required").max(20),
  address: z.string().trim().min(5, "Address is required").max(500),
});

const CheckoutModal = ({ onClose }: { onClose: () => void }) => {
  const { items, clearCart, setIsCartOpen } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = checkoutSchema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.errors.forEach((err) => { errs[err.path[0] as string] = err.message; });
      setErrors(errs);
      return;
    }
    setErrors({});

    // Build WhatsApp message
    let msg = `🛒 *New Order from Furaise*\n\n`;
    msg += `*Customer:* ${form.name}\n`;
    msg += `*Phone:* ${form.phone}\n`;
    msg += `*Address:* ${form.address}\n\n`;
    msg += `*Order Items:*\n`;
    items.forEach((item) => {
      msg += `• ${item.name} — ${item.quantity} MTN @ ${item.price}/${item.unit}\n`;
    });
    msg += `\n_Sent via Furaise website_`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/917842213679?text=${encoded}`, "_blank");

    clearCart();
    setIsCartOpen(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" />
      <div className="relative bg-card rounded-lg w-full max-w-lg p-8 animate-fade-in shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Checkout</h2>

        {/* Order summary */}
        <div className="bg-muted rounded-lg p-4 mb-6 max-h-40 overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between font-body text-sm py-1">
              <span className="text-foreground">{item.name}</span>
              <span className="text-muted-foreground">{item.quantity} MTN</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-body text-sm font-semibold text-foreground block mb-1">Full Name *</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-border rounded-md px-4 py-3 font-body text-sm bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
          </div>

          <div>
            <label className="font-body text-sm font-semibold text-foreground block mb-1">Phone Number *</label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-border rounded-md px-4 py-3 font-body text-sm bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Enter phone number"
            />
            {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
          </div>

          <div>
            <label className="font-body text-sm font-semibold text-foreground block mb-1">Delivery Address *</label>
            <textarea
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              rows={3}
              className="w-full border border-border rounded-md px-4 py-3 font-body text-sm bg-background focus:ring-2 focus:ring-primary focus:outline-none resize-none"
              placeholder="Enter your full address"
            />
            {errors.address && <p className="text-destructive text-xs mt-1 font-body">{errors.address}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-md font-body font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            Send Order via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;

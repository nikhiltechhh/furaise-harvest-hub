import { useState } from "react";
import { X, Minus, Plus, ShoppingCart } from "lucide-react";
import { type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(10);
  const { addToCart } = useCart();

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" />
      <div
        className="relative bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-card/80 rounded-full hover:bg-muted transition-colors" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Gallery */}
          <div className="p-6">
            <div className="rounded-lg overflow-hidden mb-4">
              <img src={product.gallery[activeImage]} alt={product.name} className="w-full h-72 md:h-80 object-cover" />
            </div>
            <div className="flex gap-2">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                    activeImage === i ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="p-6 md:p-8 flex flex-col">
            <span className="bg-primary/10 text-primary text-xs font-body font-bold px-3 py-1 rounded uppercase w-fit mb-3">
              {product.category}
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{product.name}</h2>
            <p className="font-body text-muted-foreground mb-4">{product.description}</p>

            {product.curcuminContent && (
              <div className="bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-md font-body text-sm mb-4 w-fit">
                Curcumin Content: <strong>{product.curcuminContent}</strong>
              </div>
            )}

            <div className="mb-4">
              <span className="font-heading text-2xl font-bold text-primary">{product.price}</span>
              <span className="font-body text-muted-foreground text-sm ml-2">/ {product.unit}</span>
            </div>
            <p className="font-body text-sm text-muted-foreground mb-6">Min. Order: {product.minOrder}</p>

            {/* Details */}
            <h4 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Specifications</h4>
            <ul className="space-y-2 mb-6">
              {product.details.map((d, i) => (
                <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✔</span> {d}
                </li>
              ))}
            </ul>

            {/* Quantity + Add to Cart */}
            <div className="mt-auto space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-body text-sm text-muted-foreground">Qty (MTN):</span>
                <div className="flex items-center border border-border rounded-md">
                  <button onClick={() => setQty(Math.max(10, qty - 5))} className="p-2 hover:bg-muted transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    value={qty}
                    onChange={(e) => { const v = parseInt(e.target.value); if (!isNaN(v) && v >= 10) setQty(v); }}
                    className="w-16 text-center font-body text-sm bg-transparent border-x border-border py-2 focus:outline-none"
                    min={10}
                  />
                  <button onClick={() => setQty(qty + 5)} className="p-2 hover:bg-muted transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => { addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, unit: product.unit }, qty); onClose(); }}
                className="w-full bg-primary text-primary-foreground py-3 rounded-md font-body font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

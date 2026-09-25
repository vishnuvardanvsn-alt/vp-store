import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import Button from "../components/Button";

export default function Cart() {
  const { lines, removeFromCart, subtotal } = useCart();

  if (lines.length === 0) {
    return (
      <div className="container py-24 text-center">
        <h1 className="font-display text-3xl">Your cart is empty</h1>
        <p className="mt-3 text-sm text-[#6f6f6f]">
          Browse the shop and add something you like.
        </p>
        <Link to="/shop" className="inline-block mt-8">
          <Button>Shop Now</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-16 sm:py-24">
      <h1 className="font-display text-3xl sm:text-4xl">Your Cart</h1>

      <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
        {lines.map(({ product, quantity }) => (
          <div key={product.id} className="py-5 flex items-center gap-5">
            <div className="h-20 w-20 shrink-0 overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-black">{product.name}</p>
              <p className="mt-1 text-sm text-[#6f6f6f]">Qty {quantity}</p>
            </div>
            <p className="text-sm text-black">
              ₹{(product.price * quantity).toLocaleString("en-IN")}
            </p>
            <button
              type="button"
              onClick={() => removeFromCart(product.id)}
              className="text-xs text-[#6f6f6f] underline underline-offset-4 hover:text-black"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between max-w-sm ml-auto">
        <span className="text-sm text-[#6f6f6f]">Subtotal</span>
        <span className="text-base font-medium text-black">
          ₹{subtotal.toLocaleString("en-IN")}
        </span>
      </div>

      <div className="mt-8 flex justify-end">
        <Link to="/checkout">
          <Button size="lg">Checkout</Button>
        </Link>
      </div>
    </div>
  );
}

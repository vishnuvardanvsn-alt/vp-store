import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import Button from "../components/Button";

export default function Checkout() {
  const { lines, subtotal } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container py-24 text-center">
        <h1 className="font-display text-3xl">Thanks for your order</h1>
        <p className="mt-3 text-sm text-[#6f6f6f] max-w-md mx-auto">
          This is a demo checkout — no payment was processed and no order was
          placed. Real checkout, payments and order tracking will be
          connected before launch.
        </p>
        <Link to="/shop" className="inline-block mt-8">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="container py-24 text-center">
        <p className="text-sm text-[#6f6f6f]">Your cart is empty.</p>
        <Link to="/shop" className="mt-4 inline-block text-sm underline underline-offset-4">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-14">
      <div>
        <h1 className="font-display text-3xl sm:text-4xl">Checkout</h1>
        <p className="mt-3 text-xs text-[#6f6f6f] max-w-sm">
          Demo checkout flow — payment and order processing are not yet
          connected to live infrastructure.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5 max-w-sm">
          <div>
            <label className="text-sm text-black" htmlFor="name">Full name</label>
            <input
              id="name"
              required
              className="mt-1.5 w-full border border-[var(--color-border-strong)] rounded-md px-4 py-2.5 text-sm outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="text-sm text-black" htmlFor="phone">Phone number</label>
            <input
              id="phone"
              type="tel"
              required
              className="mt-1.5 w-full border border-[var(--color-border-strong)] rounded-md px-4 py-2.5 text-sm outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="text-sm text-black" htmlFor="address">Delivery address</label>
            <textarea
              id="address"
              required
              rows={3}
              className="mt-1.5 w-full border border-[var(--color-border-strong)] rounded-md px-4 py-2.5 text-sm outline-none focus:border-black"
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            Place Order
          </Button>
        </form>
      </div>

      <div>
        <h2 className="text-sm font-medium text-black">Order summary</h2>
        <div className="mt-4 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {lines.map(({ product, quantity }) => (
            <div key={product.id} className="py-3 flex items-center justify-between text-sm">
              <span className="text-[#6f6f6f]">{product.name} × {quantity}</span>
              <span className="text-black">₹{(product.price * quantity).toLocaleString("en-IN")}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-[#6f6f6f]">Subtotal</span>
          <span className="text-base font-medium text-black">₹{subtotal.toLocaleString("en-IN")}</span>
        </div>
      </div>
    </div>
  );
}

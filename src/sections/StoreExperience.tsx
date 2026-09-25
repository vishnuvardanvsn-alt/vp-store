import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function StoreExperience() {
  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="container py-20 sm:py-28 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="border-t border-[var(--color-border)] pt-6">
          <p className="text-xs uppercase tracking-wide text-[#6f6f6f]">Online</p>
          <h3 className="mt-3 font-display text-3xl leading-tight">Browse and order from anywhere</h3>
          <p className="mt-3 text-sm text-[#6f6f6f] leading-relaxed max-w-sm">
            Explore the full catalog, add items to your cart, and check out —
            all from your phone or computer.
          </p>
          <Link to="/shop" className="inline-block mt-6">
            <Button variant="outline">Start Shopping</Button>
          </Link>
        </div>

        <div className="border-t border-[var(--color-border)] pt-6">
          <p className="text-xs uppercase tracking-wide text-[#6f6f6f]">In-store</p>
          <h3 className="mt-3 font-display text-3xl leading-tight">Visit us in Indra Nagar</h3>
          <p className="mt-3 text-sm text-[#6f6f6f] leading-relaxed max-w-sm">
            Prefer to see things in person? Our physical store in Shahapur is
            open for browsing and same-day purchases.
          </p>
          <Link to="/about" className="inline-block mt-6">
            <Button variant="outline">Store Details</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

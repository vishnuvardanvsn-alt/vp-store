import { Link } from "react-router-dom";

export default function PromoBanner() {
  return (
    <section className="container py-20 sm:py-28">
      <div className="bg-black text-white px-8 sm:px-14 py-16 sm:py-20 flex flex-col items-start gap-6">
        <p className="text-xs uppercase tracking-wide text-white/60">In-store &amp; online</p>
        <h2 className="font-display text-4xl sm:text-5xl leading-tight max-w-xl">
          New arrivals land every week at VP STORE.
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-lg leading-relaxed">
          Check back often, or visit our Indra Nagar store to see what's new
          on the shelves this week.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center rounded-full border border-white px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:text-black"
        >
          Browse Shop
        </Link>
      </div>
    </section>
  );
}

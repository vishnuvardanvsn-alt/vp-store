import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { getFeaturedProducts } from "../data/products";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts(8);

  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="container py-20 sm:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            title="Featured products"
            description="A sample of what's available in-store and online. Demo pricing shown below."
          />
          <Link to="/shop" className="shrink-0">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

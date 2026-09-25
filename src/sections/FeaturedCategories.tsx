import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { categories } from "../data/categories";

export default function FeaturedCategories() {
  return (
    <section className="container py-20 sm:py-28">
      <SectionHeading
        title="Shop by category"
        description="Browse what VP STORE carries, organized the way you shop."
      />

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group block"
          >
            <div className="aspect-[4/5] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-black">{category.name}</p>
            <p className="text-xs text-[#6f6f6f] mt-0.5">{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

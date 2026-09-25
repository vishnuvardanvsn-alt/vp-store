import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { categories } from "../data/categories";

export default function Categories() {
  return (
    <div className="container py-16 sm:py-24">
      <SectionHeading title="Categories" description="Browse VP STORE by category." />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group flex items-center gap-5 border border-[var(--color-border)] p-4"
          >
            <div className="h-24 w-24 shrink-0 overflow-hidden bg-[var(--color-surface)]">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </div>
            <div>
              <p className="text-base font-medium text-black">{category.name}</p>
              <p className="mt-1 text-sm text-[#6f6f6f]">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

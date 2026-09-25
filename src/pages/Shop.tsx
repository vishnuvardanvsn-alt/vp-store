import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { useCart } from "../hooks/useCart";

type SortKey = "featured" | "price-asc" | "price-desc";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "all";
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const { addToCart } = useCart();

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      p.name.toLowerCase().includes(query.trim().toLowerCase())
    );

    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [query, activeCategory, sort]);

  const setCategory = (id: string) => {
    if (id === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", id);
    }
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div className="container py-16 sm:py-24">
      <SectionHeading
        title="Shop"
        description="Demo catalog for preview purposes — replace with VP STORE's real inventory."
      />

      <div className="mt-10 flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
        <input
          type="search"
          placeholder="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:max-w-xs border border-[var(--color-border-strong)] rounded-full px-4 py-2.5 text-sm outline-none focus:border-black transition-colors"
          aria-label="Search products"
        />

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={activeCategory}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-[var(--color-border-strong)] rounded-full px-4 py-2.5 text-sm bg-white"
            aria-label="Filter by category"
          >
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-[var(--color-border-strong)] rounded-full px-4 py-2.5 text-sm bg-white"
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-sm text-[#6f6f6f]">
          No products match your search. Try a different keyword or category.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

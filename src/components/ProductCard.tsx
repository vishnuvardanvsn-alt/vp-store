import type { Product } from "../utils/types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onQuickView }: ProductCardProps) {
  const hasDiscount = !!product.originalPrice && product.originalPrice > product.price;
  const discountPct = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice!) * 100)
    : 0;

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />

        {hasDiscount && (
          <span className="absolute top-3 left-3 rounded-full bg-black text-white text-xs px-3 py-1">
            {discountPct}% off
          </span>
        )}

        {!product.inStock && (
          <span className="absolute top-3 right-3 rounded-full bg-white/90 border border-[var(--color-border)] text-xs px-3 py-1 text-[#6f6f6f]">
            Out of stock
          </span>
        )}

        {onQuickView && (
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 rounded-full bg-white border border-black/10 text-xs py-2 text-center"
          >
            Quick View
          </button>
        )}
      </div>

      <div className="mt-3 flex-1">
        <h3 className="text-sm text-black leading-snug">{product.name}</h3>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-sm font-medium text-black">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {hasDiscount && (
            <span className="text-xs text-[#6f6f6f] line-through">
              ₹{product.originalPrice!.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        disabled={!product.inStock}
        onClick={() => onAddToCart?.(product)}
        className="mt-3 w-full rounded-full border border-black/70 py-2 text-xs text-black transition-colors duration-200 hover:bg-black hover:text-white disabled:opacity-40 disabled:pointer-events-none"
      >
        {product.inStock ? "Add to Cart" : "Notify Me"}
      </button>
    </article>
  );
}

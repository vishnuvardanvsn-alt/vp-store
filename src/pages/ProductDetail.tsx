import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="container py-24 text-center">
        <p className="text-sm text-[#6f6f6f]">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-sm underline underline-offset-4">
          Back to Shop
        </Link>
      </div>
    );
  }

  const hasDiscount = !!product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="container py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="aspect-square bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>

      <div>
        <h1 className="font-display text-3xl sm:text-4xl leading-tight text-black">
          {product.name}
        </h1>

        <div className="mt-4 flex items-baseline gap-3">
          <span className="text-xl font-medium text-black">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {hasDiscount && (
            <span className="text-sm text-[#6f6f6f] line-through">
              ₹{product.originalPrice!.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-[#6f6f6f]">
          {product.inStock ? "In stock" : "Currently out of stock"}
        </p>

        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => addToCart(product)}
          className="mt-8 rounded-full bg-black text-white px-10 py-3 text-sm transition-transform duration-200 hover:scale-[1.03] disabled:opacity-40 disabled:pointer-events-none"
        >
          {product.inStock ? "Add to Cart" : "Notify Me"}
        </button>

        <p className="mt-10 text-xs text-[#6f6f6f] leading-relaxed max-w-sm">
          This is demo product data for preview purposes. Product descriptions,
          specifications and availability will reflect VP STORE's real
          inventory once connected.
        </p>
      </div>
    </div>
  );
}

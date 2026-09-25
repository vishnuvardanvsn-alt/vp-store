import type { Product } from "../utils/types";
import { placeholderImage } from "../utils/placeholder";

// Demo/placeholder product data. VP STORE's real product catalog and
// inventory feed should replace this file — the shape (Product) is the
// contract the rest of the UI is built against.
export const products: Product[] = [
  {
    id: "p-001",
    name: "Stainless Steel Storage Set",
    category: "home-essentials",
    price: 899,
    originalPrice: 1199,
    image: placeholderImage("Storage Set"),
    inStock: true,
    isDemo: true,
  },
  {
    id: "p-002",
    name: "Daily Grooming Kit",
    category: "personal-care",
    price: 549,
    image: placeholderImage("Grooming Kit"),
    inStock: true,
    isDemo: true,
  },
  {
    id: "p-003",
    name: "Premium Basmati Rice — 5kg",
    category: "groceries",
    price: 649,
    originalPrice: 749,
    image: placeholderImage("Basmati Rice"),
    inStock: true,
    isDemo: true,
  },
  {
    id: "p-004",
    name: "Compact LED Desk Lamp",
    category: "electronics",
    price: 799,
    image: placeholderImage("Desk Lamp"),
    inStock: false,
    isDemo: true,
  },
  {
    id: "p-005",
    name: "Cotton Bath Towel Set",
    category: "home-essentials",
    price: 449,
    image: placeholderImage("Towel Set"),
    inStock: true,
    isDemo: true,
  },
  {
    id: "p-006",
    name: "Herbal Face Wash — 100ml",
    category: "personal-care",
    price: 199,
    originalPrice: 249,
    image: placeholderImage("Face Wash"),
    inStock: true,
    isDemo: true,
  },
  {
    id: "p-007",
    name: "Cold-Pressed Groundnut Oil — 1L",
    category: "groceries",
    price: 259,
    image: placeholderImage("Groundnut Oil"),
    inStock: true,
    isDemo: true,
  },
  {
    id: "p-008",
    name: "Portable Power Bank — 10000mAh",
    category: "electronics",
    price: 999,
    originalPrice: 1299,
    image: placeholderImage("Power Bank"),
    inStock: true,
    isDemo: true,
  },
];

export function getFeaturedProducts(limit = 8): Product[] {
  return products.slice(0, limit);
}

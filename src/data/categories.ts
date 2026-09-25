import type { Category } from "../utils/types";
import { placeholderImage } from "../utils/placeholder";

// Demo/placeholder categories. Replace with VP STORE's actual inventory
// categories once real data is available.
export const categories: Category[] = [
  {
    id: "home-essentials",
    name: "Home Essentials",
    description: "Everyday items for the kitchen and household.",
    image: placeholderImage("Home Essentials"),
  },
  {
    id: "personal-care",
    name: "Personal Care",
    description: "Grooming and wellness basics.",
    image: placeholderImage("Personal Care"),
  },
  {
    id: "groceries",
    name: "Groceries",
    description: "Pantry staples and daily provisions.",
    image: placeholderImage("Groceries"),
  },
  {
    id: "electronics",
    name: "Electronics & Accessories",
    description: "Practical electronics for home and work.",
    image: placeholderImage("Electronics"),
  },
];

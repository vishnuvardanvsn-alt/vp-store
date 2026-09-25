# VP STORE

Premium e-commerce frontend for VP STORE, a local retail business in
Shahapur, Yadgir District, Karnataka, India — built with React, Vite,
TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, Button, ProductCard, SectionHeading
  sections/     Homepage sections: Hero, FeaturedCategories, FeaturedProducts, etc.
  pages/        Routed pages: Home, Shop, Categories, ProductDetail, Cart, Checkout, About, Contact, Help, Orders
  data/         Demo product and category data (swap for real inventory)
  hooks/        useVideoFadeLoop (hero video), useCart (cart state)
  utils/        Shared types and the placeholder-image generator
  styles/       fonts.css and theme.css (design tokens, animations)
```

## Notes for going to production

- **Products & categories** — `src/data/products.ts` and `src/data/categories.ts`
  hold clearly-marked demo data with inline SVG placeholder images. Replace
  with a real inventory feed; the `Product`/`Category` types in
  `src/utils/types.ts` define the contract the UI expects.
- **Cart & checkout** — `src/hooks/useCart.tsx` is in-memory client state,
  and `Checkout.tsx` is a demo form with no live payment integration. Wire
  up real payments, order creation and persistence before launch.
- **Accounts & order tracking** — `Orders.tsx` is a placeholder; connect
  authentication and an orders API when available.
- **Store location** — the "Get Directions" links open a Google Maps
  search for the store address; swap in exact coordinates once available.
- **Social links** — footer social links are placeholders until VP STORE's
  real accounts are supplied.

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="container py-14 grid grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl">VP STORE</p>
          <p className="mt-3 text-sm text-[#6f6f6f] leading-relaxed max-w-xs">
            Online + Offline Retail Store
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-black mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm text-[#6f6f6f]">
            <li><Link to="/" className="hover:text-black transition-colors">Home</Link></li>
            <li><Link to="/shop" className="hover:text-black transition-colors">Shop</Link></li>
            <li><Link to="/categories" className="hover:text-black transition-colors">Categories</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-black mb-4">Store</p>
          <p className="text-sm text-[#6f6f6f] leading-relaxed max-w-xs">
            Near Bajaj Showroom, Indra Nagar,<br />
            Shahapur, Yadgir District,<br />
            Karnataka, India
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-black mb-4">Customer Support</p>
          <ul className="space-y-2 text-sm text-[#6f6f6f]">
            <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
            <li><Link to="/help" className="hover:text-black transition-colors">Help</Link></li>
            <li><Link to="/orders" className="hover:text-black transition-colors">Orders</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f6f6f]">
          <p>© {new Date().getFullYear()} VP STORE. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="VP STORE on Instagram" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" aria-label="VP STORE on Facebook" className="hover:text-black transition-colors">Facebook</a>
            <a href="#" aria-label="VP STORE on WhatsApp" className="hover:text-black transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

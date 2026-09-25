import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { useCart } from "../hooks/useCart";

const links = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Categories", to: "/categories" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <nav className="container flex items-center justify-between py-5">
        <Link
          to="/"
          className="font-display text-3xl tracking-tight text-black"
          onClick={() => setOpen(false)}
        >
          VP STORE
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 font-sans text-sm">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive ? "text-black" : "text-[#6f6f6f] hover:text-black"
                  }`
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <Link to="/cart" className="relative text-sm text-black" aria-label="Cart">
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">
                {itemCount}
              </span>
            )}
          </Link>
          <Link to="/shop">
            <Button>Shop Now</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="black" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M2 6H20" stroke="black" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M2 16H20" stroke="black" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)]">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block py-3 text-base border-b border-[var(--color-border)] ${
                      isActive ? "text-black" : "text-[#6f6f6f]"
                    }`
                  }
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="container pb-6">
            <Link to="/shop" onClick={() => setOpen(false)}>
              <Button className="w-full">Shop Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

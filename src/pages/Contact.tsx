import { useState, type FormEvent } from "react";
import Button from "../components/Button";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="container py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-14">
      <div>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight">Get in touch</h1>
        <p className="mt-4 text-sm text-[#6f6f6f] max-w-sm leading-relaxed">
          Questions about an order, a product, or the store? Send us a
          message and we'll get back to you.
        </p>

        <div className="mt-10 space-y-4 text-sm">
          <div>
            <p className="text-black font-medium">Email</p>
            <p className="text-[#6f6f6f]">support@vpstore.in</p>
          </div>
          <div>
            <p className="text-black font-medium">Store</p>
            <p className="text-[#6f6f6f]">Near Bajaj Showroom, Indra Nagar, Shahapur</p>
          </div>
        </div>
      </div>

      <div>
        {sent ? (
          <p className="text-sm text-[#6f6f6f]">
            Thanks for reaching out — this is a demo form, so no message was
            actually sent yet.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 max-w-sm">
            <div>
              <label className="text-sm text-black" htmlFor="c-name">Name</label>
              <input
                id="c-name"
                required
                className="mt-1.5 w-full border border-[var(--color-border-strong)] rounded-md px-4 py-2.5 text-sm outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="text-sm text-black" htmlFor="c-email">Email</label>
              <input
                id="c-email"
                type="email"
                required
                className="mt-1.5 w-full border border-[var(--color-border-strong)] rounded-md px-4 py-2.5 text-sm outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="text-sm text-black" htmlFor="c-message">Message</label>
              <textarea
                id="c-message"
                required
                rows={4}
                className="mt-1.5 w-full border border-[var(--color-border-strong)] rounded-md px-4 py-2.5 text-sm outline-none focus:border-black"
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        )}
      </div>
    </div>
  );
}

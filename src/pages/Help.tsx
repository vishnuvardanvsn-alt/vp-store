const faqs = [
  {
    q: "Can I shop both online and in-store?",
    a: "Yes. Browse and order from the website, or visit VP STORE in Indra Nagar, Shahapur in person.",
  },
  {
    q: "How do I track my order?",
    a: "Order tracking will be available once checkout and order processing are connected to live infrastructure.",
  },
  {
    q: "What if an item is out of stock?",
    a: "Out-of-stock items are marked on the product page. Use Notify Me to be informed when it's back.",
  },
];

export default function Help() {
  return (
    <div className="container py-16 sm:py-24">
      <h1 className="font-display text-4xl">Help</h1>
      <div className="mt-10 max-w-2xl divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
        {faqs.map((faq) => (
          <div key={faq.q} className="py-6">
            <p className="text-sm font-medium text-black">{faq.q}</p>
            <p className="mt-2 text-sm text-[#6f6f6f] leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

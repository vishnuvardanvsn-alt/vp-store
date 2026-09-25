export default function About() {
  return (
    <div className="container py-16 sm:py-24">
      <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-tight">
        Your trusted local store, now online.
      </h1>
      <p className="mt-6 text-base text-[#6f6f6f] max-w-xl leading-relaxed">
        VP STORE is a retail business based in Shahapur, Yadgir District,
        Karnataka — serving the local community both in person and online.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="border-t border-[var(--color-border)] pt-6">
          <h2 className="text-base font-medium text-black">Visit our store</h2>
          <p className="mt-2 text-sm text-[#6f6f6f] leading-relaxed">
            Near Bajaj Showroom, Indra Nagar,<br />
            Shahapur, Yadgir District,<br />
            Karnataka, India
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Indra%20Nagar%2C%20Shahapur%2C%20Yadgir%20District%2C%20Karnataka"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-sm underline underline-offset-4 decoration-black/20 hover:decoration-black"
          >
            Get Directions
          </a>
        </div>

        <div className="border-t border-[var(--color-border)] pt-6">
          <h2 className="text-base font-medium text-black">Shop online</h2>
          <p className="mt-2 text-sm text-[#6f6f6f] leading-relaxed">
            Can't make it in person? Browse the VP STORE catalog and order
            online for delivery.
          </p>
        </div>
      </div>
    </div>
  );
}

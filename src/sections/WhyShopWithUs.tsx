import SectionHeading from "../components/SectionHeading";

const reasons = [
  {
    title: "Local, since day one",
    body: "VP STORE is rooted in Shahapur — we know what this neighborhood needs, week to week.",
  },
  {
    title: "Shop your way",
    body: "Order online for convenience, or walk into the Indra Nagar store to browse in person.",
  },
  {
    title: "Straightforward pricing",
    body: "Clear prices, honestly marked. No confusing offers or hidden terms.",
  },
];

export default function WhyShopWithUs() {
  return (
    <section className="container py-20 sm:py-28">
      <SectionHeading title="Why shop with VP STORE" />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
        {reasons.map((reason) => (
          <div key={reason.title} className="border-t border-[var(--color-border)] pt-6">
            <h3 className="text-base font-medium text-black">{reason.title}</h3>
            <p className="mt-2 text-sm text-[#6f6f6f] leading-relaxed">{reason.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

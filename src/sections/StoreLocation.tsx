import SectionHeading from "../components/SectionHeading";

export default function StoreLocation() {
  return (
    <section className="container py-20 sm:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <SectionHeading
        title="Find us in Shahapur"
        description="Near Bajaj Showroom, Indra Nagar, Shahapur, Yadgir District, Karnataka, India."
      />

      <div className="border border-[var(--color-border)] p-6 sm:p-8">
        <p className="text-sm font-medium text-black">Store address</p>
        <p className="mt-2 text-sm text-[#6f6f6f] leading-relaxed">
          Near Bajaj Showroom, Indra Nagar,<br />
          Shahapur, Yadgir District,<br />
          Karnataka, India
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Indra%20Nagar%2C%20Shahapur%2C%20Yadgir%20District%2C%20Karnataka"
          target="_blank"
          rel="noreferrer"
          className="inline-flex mt-6 items-center gap-2 text-sm font-medium text-black underline underline-offset-4 decoration-black/20 hover:decoration-black"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}

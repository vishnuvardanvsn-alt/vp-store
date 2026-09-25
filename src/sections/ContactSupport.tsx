import SectionHeading from "../components/SectionHeading";

export default function ContactSupport() {
  return (
    <section className="container py-20 sm:py-28">
      <SectionHeading
        title="Need a hand?"
        description="Our support team is here to help with orders, products, or general questions."
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
        <div>
          <p className="text-sm font-medium text-black">Email</p>
          <p className="mt-1 text-sm text-[#6f6f6f]">support@vpstore.in</p>
        </div>
        <div>
          <p className="text-sm font-medium text-black">Store hours</p>
          <p className="mt-1 text-sm text-[#6f6f6f]">Open daily, local hours</p>
        </div>
        <div>
          <p className="text-sm font-medium text-black">Location</p>
          <p className="mt-1 text-sm text-[#6f6f6f]">Indra Nagar, Shahapur</p>
        </div>
      </div>
    </section>
  );
}

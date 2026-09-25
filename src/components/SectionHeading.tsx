interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl"}>
      <h2 className="font-display text-3xl sm:text-4xl leading-tight text-black">{title}</h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-[#6f6f6f] leading-relaxed">{description}</p>
      )}
    </div>
  );
}

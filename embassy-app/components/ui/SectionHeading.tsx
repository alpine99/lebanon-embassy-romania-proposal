export function SectionHeading({
  eyebrow,
  heading,
  className = "",
  eyebrowClassName = "",
  headingClassName = "",
}: {
  eyebrow: string;
  heading?: string;
  className?: string;
  eyebrowClassName?: string;
  headingClassName?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <span
        className={`font-sans text-[12.5px] font-semibold uppercase tracking-[0.14em] text-burgundy-700 ${eyebrowClassName}`}
      >
        {eyebrow}
      </span>
      {heading && (
        <h2
          className={`mt-3 font-serif text-[28px] leading-tight text-cedar-950 sm:text-[30px] ${headingClassName}`}
        >
          {heading}
        </h2>
      )}
    </div>
  );
}

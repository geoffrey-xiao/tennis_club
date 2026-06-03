type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-[#0f563a]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-black tracking-normal text-[#10241d] sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

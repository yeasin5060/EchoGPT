interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  text?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  text,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
          {eyebrow}
        </p>
      )}

      <h2 className="section-title">{title}</h2>

      {text && (
        <p className="muted mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}
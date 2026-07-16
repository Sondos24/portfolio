type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-400/80">
        {label}
      </p>
      <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}

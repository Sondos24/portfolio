type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  const hoverStyles = hover
    ? "transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
    : "";

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
